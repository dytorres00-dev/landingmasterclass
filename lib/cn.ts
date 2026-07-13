/** Utilidad mínima para concatenar clases con soporte para condicionales. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
