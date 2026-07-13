import { z } from "zod";

/**
 * Schema único compartido entre cliente (react-hook-form) y servidor
 * (API route /api/register). Si cambia aquí, cambia en ambos lados.
 */

const phoneRegex = /^[\d\s+\-()]{7,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registerSchema = z.object({
  nombre: z
    .string()
    .min(2, "Escribe tu nombre completo.")
    .max(80, "El nombre es demasiado largo."),
  email: z
    .string()
    .min(1, "Necesitamos un email de contacto.")
    .regex(emailRegex, "Revisa el formato del email."),
  whatsapp: z
    .string()
    .min(1, "Déjanos un número de contacto.")
    .regex(phoneRegex, "Revisa el formato del teléfono."),
  rol: z.enum(["dueno", "gerente", "emprendedor", "otro"], {
    errorMap: () => ({ message: "Selecciona una opción." }),
  }),
  usoIA: z.enum(["nada", "basico", "implementado"], {
    errorMap: () => ({ message: "Selecciona una opción." }),
  }),
  reto: z.enum(["tiempo", "clientes", "empezar", "otro"], {
    errorMap: () => ({ message: "Selecciona una opción." }),
  }),
});

export type RegisterInput = z.infer<typeof registerSchema>;

/** Labels para mostrar en UI a partir de los valores del schema. */
export const ROL_LABELS: Record<RegisterInput["rol"], string> = {
  dueno: "Dueño de negocio",
  gerente: "Gerente o directivo",
  emprendedor: "Emprendedor independiente",
  otro: "Otro",
};

export const USO_IA_LABELS: Record<RegisterInput["usoIA"], string> = {
  nada: "No, nada todavía",
  basico: "Uso herramientas básicas (ChatGPT, etc.)",
  implementado: "Sí, tengo algo implementado",
};

export const RETO_LABELS: Record<RegisterInput["reto"], string> = {
  tiempo: "Perder tiempo en tareas repetitivas",
  clientes: "No estar generando suficientes clientes o ventas",
  empezar: "No saber por dónde empezar con la tecnología",
  otro: "Otro",
};
