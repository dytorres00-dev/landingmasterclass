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
      className="bg-paper-warm py-16 sm:py-24 md:py-32"
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

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.08} as="li">
              <div className="group relative h-full flex flex-col gap-5 rounded-xl border border-carbon/10 bg-bone/80 p-7 md:p-8 shadow-soft transition-all duration-500 ease-editorial hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                <div className="flex items-baseline justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest/[0.06] text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-bone">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="font-serif text-[40px] leading-none text-gold/90">
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
