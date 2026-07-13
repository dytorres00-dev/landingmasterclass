import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { Clock, MessageSquareDashed, TrendingDown, KeyRound } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Horas que se van en tareas repetitivas",
    body: "Responder lo mismo, copiar datos, mover información entre hojas y chats. Trabajo que podría resolverse solo, y que termina comiéndose tu día.",
  },
  {
    icon: MessageSquareDashed,
    title: "Clientes que se pierden por tardar",
    body: "Un mensaje sin responder a tiempo es un cliente que se va con la competencia. Y lo sabes, pero el día no te alcanza.",
  },
  {
    icon: TrendingDown,
    title: "La sensación de estar quedándote atrás",
    body: "Ves negocios similares a los tuyos creciendo con herramientas nuevas, y sientes que el reloj corre mientras tú haces todo como hace cinco años.",
  },
  {
    icon: KeyRound,
    title: "La creencia de que la tecnología no es para ti",
    body: "Porque nadie te lo ha explicado en tu idioma, con tus palabras, enfocado en lo que tú haces. Eso no es culpa tuya, es un vacío que nadie ha llenado.",
  },
];

export function Problema() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="bg-paper-warm py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <span className="text-eyebrow text-forest">El problema real</span>
            <h2
              id="problema-title"
              className="mt-5 font-serif text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] text-carbon"
            >
              Si hoy pusieras en una hoja lo que te consume el día…
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-carbon/70 max-w-prose">
              No se trata de no ser capaz. Se trata de que nadie te ha mostrado
              cómo aplicar lo que ya existe, en un lenguaje que tenga sentido
              para un negocio como el tuyo.
            </p>
          </ScrollReveal>

          <div className="lg:col-span-7 flex flex-col gap-10">
            {pains.map((pain, i) => (
              <ScrollReveal key={pain.title} delay={i * 0.05}>
                <article className="flex gap-5 border-t border-carbon/15 pt-8">
                  <pain.icon
                    className="h-6 w-6 shrink-0 text-forest mt-1"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[26px] leading-snug text-carbon">
                      {pain.title}
                    </h3>
                    <p className="mt-3 text-[16px] md:text-[17px] leading-[1.7] text-carbon/70">
                      {pain.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
