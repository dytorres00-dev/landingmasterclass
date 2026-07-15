import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

const items = [
  {
    n: "01",
    t: "Automatizar tareas",
    d: "Delega el trabajo repetitivo a la IA y recupera horas cada semana para lo que de verdad hace crecer tu negocio.",
  },
  {
    n: "02",
    t: "Multiplicar tu productividad",
    d: "Flujos y herramientas para producir más y mejor sin ampliar tu equipo ni quemarte en el intento.",
  },
  {
    n: "03",
    t: "Captar más clientes",
    d: "Usa la IA con estrategia para atraer, nutrir y convertir clientes de forma constante y predecible.",
  },
];

export function QueAprenderas() {
  return (
    <section
      id="aprender"
      aria-labelledby="aprender-title"
      className="bg-paper-warm py-16 sm:py-24 md:py-32"
    >
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-eyebrow text-gold">
            Qué te llevas de la masterclass
          </span>
          <h2
            id="aprender-title"
            className="mt-5 font-serif text-[34px] leading-[1.1] text-carbon sm:text-[42px] md:text-[50px]"
          >
            No es cuestión de usar IA.{" "}
            <span className="italic text-forest">
              Es cuestión de usarla con estrategia.
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.n} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-carbon/10 bg-bone p-8 shadow-soft transition-all duration-500 ease-editorial hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                <div className="font-serif text-[44px] leading-none text-gold/90">
                  {item.n}
                </div>
                <h3 className="mt-5 font-serif text-[25px] font-semibold text-forest">
                  {item.t}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-carbon/70">
                  {item.d}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
