import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { UserPlus, MailCheck, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    n: "01",
    title: "Regístrate",
    body: "Déjanos tus datos abajo. Son tres preguntas, un minuto.",
  },
  {
    icon: MailCheck,
    n: "02",
    title: "Recibe el acceso",
    body: "Te llega un correo con el enlace directo a la sala en vivo.",
  },
  {
    icon: PlayCircle,
    n: "03",
    title: "Conéctate y aplica",
    body: "El día del evento te conectas, tomas nota y el lunes empiezas a implementar.",
  },
];

export function Plan() {
  return (
    <section
      id="plan"
      aria-labelledby="plan-title"
      className="bg-paper-warm py-24 md:py-32"
    >
      <Container>
        <ScrollReveal className="max-w-2xl">
          <span className="text-eyebrow text-forest">Así de fácil</span>
          <h2
            id="plan-title"
            className="mt-5 font-serif text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] text-carbon"
          >
            Tres pasos. Cero fricción.
          </h2>
        </ScrollReveal>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.08} as="li">
              <div className="relative h-full flex flex-col gap-5 border-t border-carbon/20 pt-8">
                <div className="flex items-baseline justify-between">
                  <s.icon
                    className="h-7 w-7 text-forest"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                  <span className="font-serif text-[28px] text-gold">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-serif text-[26px] md:text-[28px] leading-snug text-carbon">
                  {s.title}
                </h3>
                <p className="text-[16px] leading-[1.7] text-carbon/70">
                  {s.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
