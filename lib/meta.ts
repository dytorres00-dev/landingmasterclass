import crypto from "crypto";

/**
 * Integración con la Conversions API (CAPI) de Meta.
 *
 * Envía el evento "Lead" desde el servidor cuando alguien se registra, en
 * paralelo al Píxel del navegador. Ambos comparten el mismo `event_id` para
 * que Meta deduplique y no cuente el Lead dos veces.
 *
 * Variables de entorno:
 * - NEXT_PUBLIC_META_PIXEL_ID  → ID del píxel / dataset (público)
 * - META_CAPI_ACCESS_TOKEN     → token de la Conversions API (SECRETO)
 * - META_TEST_EVENT_CODE       → (opcional) código para el "Test Events" de Meta
 */

const GRAPH_VERSION = "v21.0";

// Pixel ID de Dylan Torres (público). La variable de entorno lo sobrescribe.
const DEFAULT_PIXEL_ID = "939339841402645";

/** SHA-256 en hex, normalizando según pide Meta (trim + minúsculas). */
function hash(value: string): string {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

/** Teléfono: solo dígitos (conservando el código de país), sin '+' ni espacios. */
function hashPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return crypto.createHash("sha256").update(digits).digest("hex");
}

export interface MetaLeadInput {
  email: string;
  whatsapp: string;
  nombre: string;
  eventId?: string;
  eventSourceUrl?: string;
  clientIp?: string;
  clientUserAgent?: string;
  /** Cookies _fbp y _fbc del navegador (mejoran el match, no se hashean). */
  fbp?: string;
  fbc?: string;
}

/**
 * Envía el evento "Lead" a Meta. No lanza excepciones: si algo falla, lo
 * registra en consola y devuelve false, para no romper el flujo del registro.
 */
export async function sendMetaLead(input: MetaLeadInput): Promise<boolean> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || DEFAULT_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    // CAPI no configurada: se omite silenciosamente (el Píxel del cliente
    // puede seguir funcionando por su cuenta).
    return false;
  }

  const firstName = input.nombre.split(" ")[0] ?? "";

  const userData: Record<string, unknown> = {
    em: [hash(input.email)],
    ph: [hashPhone(input.whatsapp)],
    fn: [hash(firstName)],
  };
  if (input.clientIp) userData.client_ip_address = input.clientIp;
  if (input.clientUserAgent) userData.client_user_agent = input.clientUserAgent;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        action_source: "website",
        event_source_url: input.eventSourceUrl,
        user_data: userData,
      },
    ],
  };
  if (process.env.META_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(8_000),
      },
    );

    if (!res.ok) {
      console.error(
        `[meta-capi] Meta respondió ${res.status}: ${await res
          .text()
          .catch(() => "")}`,
      );
      return false;
    }
    return true;
  } catch (err) {
    console.error("[meta-capi] Error al enviar el evento Lead:", err);
    return false;
  }
}
