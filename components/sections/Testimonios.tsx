import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const testimonios = [
  {
    quote:
      "Ahora la IA filtra y atiende a los interesados al instante. Calificamos clientes mucho más rápido y no se nos escapa ninguna oportunidad.",
    name: "Mariana Gómez",
    role: "Gerente, inmobiliaria",
  },
  {
    quote:
      "Por fin entendí cómo usar la IA con estrategia y no solo por moda. Aplicable de inmediato.",
    name: "Carlos Rivas",
    role: "Consultor independiente",
  },
  {
    quote:
      "Creamos anuncios con IA en minutos y empezamos a vender mucho más, sin depender de una agencia.",
    name: "Valentina Ríos",
    role: "Dueña, negocio de belleza",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Testimonios() {
  return (
    <section
      id="resultados"
      aria-labelledby="resultados-title"
      className="bg-paper-warm py-16 sm:py-24 md:py-32"
    >
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-eyebrow text-gold">Resultados reales</span>
          <h2
            id="resultados-title"
            className="mt-5 font-serif text-[34px] leading-[1.1] text-carbon sm:text-[42px] md:text-[50px]"
          >
            Lo que dicen quienes ya aplicaron el método.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col gap-6 rounded-xl border border-carbon/10 bg-bone p-8 shadow-soft transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-lift">
                <span
                  aria-hidden
                  className="font-serif text-[40px] leading-none text-gold"
                >
                  &ldquo;
                </span>
                <blockquote className="flex-1 font-serif text-[21px] italic leading-[1.4] text-forest">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-4 border-t border-carbon/10 pt-5">
                  <ImagePlaceholder
                    shape="circle"
                    monogram={initials(t.name)}
                    className="h-11 w-11 shrink-0"
                  />
                  <div>
                    <div className="text-[14px] font-semibold text-carbon">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-carbon/55">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
