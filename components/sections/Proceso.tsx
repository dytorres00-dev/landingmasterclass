import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    n: "1",
    t: "Diagnóstico",
    d: "Identificamos qué tareas te roban tiempo y dónde la IA genera más impacto.",
  },
  {
    n: "2",
    t: "Estrategia",
    d: "Definimos el sistema correcto para tu negocio, sin herramientas de más.",
  },
  {
    n: "3",
    t: "Implementación",
    d: "Montamos las automatizaciones paso a paso, en vivo y en simple.",
  },
  {
    n: "4",
    t: "Resultados",
    d: "Mides el tiempo ahorrado y el impacto real en tus clientes e ingresos.",
  },
];

export function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="relative overflow-hidden bg-forest py-16 text-bone sm:py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 vignette-forest" />
      <Container className="relative z-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-eyebrow text-gold">Cómo será la sesión</span>
          <h2
            id="proceso-title"
            className="mt-5 font-serif text-[34px] leading-[1.1] text-bone sm:text-[42px] md:text-[50px]"
          >
            Un método simple, paso a paso.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 0.08}>
              <div className="h-full border-gold/40 px-0 sm:px-2 lg:border-l lg:px-7 lg:first:border-l-0">
                <div className="font-serif text-[15px] tracking-[0.12em] text-gold">
                  PASO {step.n}
                </div>
                <h3 className="mt-4 font-serif text-[24px] font-semibold text-bone">
                  {step.t}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-bone/70">
                  {step.d}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
