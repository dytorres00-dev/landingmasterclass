import { NextResponse } from "next/server";
import {
  registerSchema,
  ROL_LABELS,
  USO_IA_LABELS,
  RETO_LABELS,
} from "@/lib/schema";
import { sendMetaLead } from "@/lib/meta";

export const runtime = "nodejs";

const FRIENDLY_ERROR =
  "No pudimos guardar tu registro. Intenta de nuevo en un momento.";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: FRIENDLY_ERROR },
      { status: 400 },
    );
  }

  const parsed = registerSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: FRIENDLY_ERROR },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Datos de tracking que vienen fuera del schema (Zod los descarta al validar).
  const raw = payload as Record<string, unknown>;
  const eventId = typeof raw.eventId === "string" ? raw.eventId : undefined;
  const fbp = typeof raw.fbp === "string" ? raw.fbp : undefined;
  const fbc = typeof raw.fbc === "string" ? raw.fbc : undefined;

  // Evento "Lead" a la Conversions API de Meta (server-side). No bloquea ni
  // rompe el registro: si falla o no está configurada, se ignora.
  const forwardedFor = request.headers.get("x-forwarded-for");
  await sendMetaLead({
    email: data.email,
    whatsapp: data.whatsapp,
    nombre: data.nombre,
    eventId,
    fbp,
    fbc,
    clientIp: forwardedFor?.split(",")[0]?.trim(),
    clientUserAgent: request.headers.get("user-agent") ?? undefined,
    eventSourceUrl: request.headers.get("referer") ?? undefined,
  });

  // Enviamos a Make tanto los valores crudos (por si necesitas filtrar/segmentar)
  // como las etiquetas legibles, para que la fila del Google Sheet y el correo
  // se lean bien sin transformar nada dentro de Make.
  const registro = {
    nombre: data.nombre,
    email: data.email,
    whatsapp: data.whatsapp,
    rol: data.rol,
    rolLabel: ROL_LABELS[data.rol],
    usoIA: data.usoIA,
    usoIALabel: USO_IA_LABELS[data.usoIA],
    reto: data.reto,
    retoLabel: RETO_LABELS[data.reto],
    createdAt: new Date().toISOString(),
    source: "landing-masterclass-dylan-torres",
  };

  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl || webhookUrl.includes("TU-WEBHOOK-AQUI")) {
    // En desarrollo sin webhook configurado, devolvemos éxito para no bloquear
    // la prueba end-to-end del cliente. En producción con .env.local real,
    // esta rama no se ejecuta.
    console.warn(
      "[register] MAKE_WEBHOOK_URL no configurada. Revisa .env.local.",
    );
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registro),
      // Make espera que la promesa no quede colgada mucho; 10s es suficiente.
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) {
      console.error(
        `[register] Make respondió ${upstream.status}: ${await upstream
          .text()
          .catch(() => "")}`,
      );
      return NextResponse.json(
        { ok: false, message: FRIENDLY_ERROR },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[register] Error al contactar Make:", err);
    return NextResponse.json(
      { ok: false, message: FRIENDLY_ERROR },
      { status: 502 },
    );
  }
}
