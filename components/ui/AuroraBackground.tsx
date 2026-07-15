/**
 * Fondo "aurora sedosa" para el Hero: manchas de color forest/gold que se
 * desplazan y se funden lentamente, con blur alto y mix-blend para un acabado
 * de seda. Solo CSS + transform/opacity → GPU-friendly.
 *
 * El movimiento se detiene automáticamente cuando el usuario tiene activado
 * "reduce motion" (regla global en globals.css), quedando como una composición
 * estática igual de elegante.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Mancha forest superior izquierda */}
      <div
        className="aurora-layer -left-[15%] -top-[20%] h-[60vh] w-[60vh] bg-forest/30 mix-blend-multiply blur-[80px]"
        style={{ animation: "auroraDrift1 26s ease-in-out infinite" }}
      />
      {/* Mancha dorada superior derecha (glow, sin blend) */}
      <div
        className="aurora-layer -right-[12%] top-[6%] h-[52vh] w-[52vh] bg-gold/25 blur-[90px]"
        style={{ animation: "auroraDrift2 32s ease-in-out infinite" }}
      />
      {/* Mancha forest-soft inferior */}
      <div
        className="aurora-layer bottom-[-25%] left-[18%] h-[65vh] w-[65vh] bg-forest-soft/25 mix-blend-multiply blur-[100px]"
        style={{ animation: "auroraDrift3 38s ease-in-out infinite" }}
      />
      {/* Mancha dorada suave inferior derecha */}
      <div
        className="aurora-layer bottom-[-5%] right-[12%] h-[46vh] w-[46vh] bg-gold-soft/20 blur-[80px]"
        style={{ animation: "auroraDrift4 30s ease-in-out infinite" }}
      />
      {/* Velo para preservar legibilidad del texto (más denso a la izquierda) */}
      <div className="absolute inset-0 bg-gradient-to-r from-bone/55 via-bone/15 to-transparent" />
    </div>
  );
}
