import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { Calendar, Clock, Video, Zap } from "lucide-react";

const outcomes = [
  "Detectar en una hora qué partes de tu negocio puedes automatizar esta misma semana, sin contratar developers.",
  "Construir tu primer agente o asistente de IA paso a paso, con herramientas que ya existen y que tú mismo puedes operar.",
  "Escribir los mensajes, flujos y respuestas que hoy te consumen horas, y dejarlos funcionando en piloto automático.",
  "Saber exactamente qué preguntarle a la IA para que te devuelva resultados útiles para tu negocio, sin sentir que hablas con un muro.",
];

export function Solucion() {
  return (
    <section
      id="solucion"
      aria-labelledby="solucion-title"
      className="bg-bone py-16 sm:py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal>
              <span className="text-eyebrow text-forest">La masterclass</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2
                id="solucion-title"
                className="font-serif text-[40px] leading-[1.05] sm:text-[52px] md:text-[60px] text-carbon"
              >
                Una hora que puede cambiar la forma en que operas tu negocio.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[17px] leading-[1.7] text-carbon/75 max-w-prose">
                Una sesión en vivo, sin diapositivas genéricas. Casos reales
                de PYMEs colombianas, los números en pantalla, y la
                implementación paso a paso para que el lunes siguiente ya
                tengas algo funcionando.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 border-t border-carbon/15 pt-8">
                {[
                  { icon: Calendar, label: "Fecha", value: "Jueves 24 de julio" },
                  { icon: Clock, label: "Hora", value: "7:00 p. m. (COL)" },
                  { icon: Video, label: "Formato", value: "100% en vivo, online" },
                  { icon: Zap, label: "Duración", value: "60 minutos + Q&A" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon
                      className="h-5 w-5 mt-1 text-forest"
                      strokeWidth={1.4}
                      aria-hidden
                    />
                    <div>
                      <dt className="text-eyebrow text-carbon/50">{label}</dt>
                      <dd className="mt-1 font-serif text-[20px] text-carbon leading-snug">
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal delay={0.05}>
              <div className="rounded-2xl border border-forest/15 p-8 md:p-10 bg-paper-warm shadow-soft">
                <span className="text-eyebrow text-gold">Después de esta hora vas a poder…</span>
                <ul className="mt-8 flex flex-col gap-6">
                  {outcomes.map((o, i) => (
                    <li
                      key={i}
                      className="flex gap-4 border-t border-forest/10 pt-6 first:border-t-0 first:pt-0"
                    >
                      <span
                        aria-hidden
                        className="font-serif text-[28px] leading-none text-gold shrink-0"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-serif text-[20px] md:text-[22px] leading-[1.4] text-carbon">
                        {o}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
