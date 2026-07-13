import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/schema";

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
      body: JSON.stringify({
        ...parsed.data,
        createdAt: new Date().toISOString(),
        source: "landing-masterclass-dylan-torres",
      }),
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
