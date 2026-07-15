import { cn } from "@/lib/cn";

interface ImagePlaceholderProps {
  /** Texto que describe qué foto va aquí (visible solo en placeholders rectangulares). */
  label?: string;
  /** Iniciales o monograma a mostrar. */
  monogram?: string;
  shape?: "rect" | "circle";
  className?: string;
}

/**
 * Placeholder de imagen con acabado editorial (degradado forest + monograma).
 * Se ve intencional mientras no haya foto real.
 *
 * Para usar una foto real: coloca el archivo en /public (ej. /public/dylan.jpg)
 * y reemplaza este componente por <img src="/dylan.jpg" ... /> o next/image.
 */
export function ImagePlaceholder({
  label,
  monogram = "DT",
  shape = "rect",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-forest",
        shape === "circle" ? "rounded-full" : "rounded",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-forest-soft via-forest to-carbon/85"
      />
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-forest-soft/40 blur-3xl"
      />
      <span
        className={cn(
          "relative font-serif leading-none text-bone/25",
          shape === "circle" ? "text-[15px] tracking-wide" : "text-[clamp(3.5rem,9vw,6rem)]",
        )}
      >
        {monogram}
      </span>
      {label && shape === "rect" && (
        <span className="absolute bottom-4 left-0 right-0 text-center text-[10px] uppercase tracking-eyebrow text-bone/40">
          {label}
        </span>
      )}
    </div>
  );
}
