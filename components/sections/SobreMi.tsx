import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

const pills = ["Claridad", "Confianza", "Equilibrio", "Enfoque"];

export function SobreMi() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="bg-bone py-16 sm:py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ScrollReveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded shadow-lift lg:max-w-none">
              <Image
                src="/dylan-sobre.png"
                alt="Dylan Torres trabajando con inteligencia artificial para negocios y emprendedores"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 440px, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="text-eyebrow text-gold">Sobre mí</span>
            <h2
              id="sobre-title"
              className="mt-5 font-serif text-[32px] leading-[1.12] text-carbon sm:text-[40px] md:text-[46px]"
            >
              Combino tecnología, estrategia y{" "}
              <span className="italic text-forest">mentalidad humana</span>.
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] leading-[1.75] text-carbon/70">
              Soy Dylan Torres, estratega de marketing digital &amp; IA. Ayudo a
              emprendedores y empresas a implementar inteligencia artificial y
              estrategias digitales que generan resultados reales: ahorran
              tiempo, reducen el trabajo operativo y multiplican los ingresos.
            </p>
            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.75] text-carbon/70">
              En esta masterclass te comparto el mismo sistema que uso con mis
              clientes, explicado de forma clara y aplicable desde el primer día.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-forest/20 px-4 py-2 text-[13px] text-forest"
                >
                  {p}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
