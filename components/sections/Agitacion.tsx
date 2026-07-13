import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

export function Agitacion() {
  return (
    <section
      id="agitacion"
      aria-labelledby="agitacion-title"
      className="bg-forest text-bone py-24 md:py-32"
    >
      <Container>
        <ScrollReveal>
          <span className="text-eyebrow text-gold">Y si nada cambia</span>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2
            id="agitacion-title"
            className="mt-5 font-serif text-[40px] leading-[1.05] sm:text-[52px] md:text-[64px] lg:text-[72px] max-w-[20ch]"
          >
            ¿Qué pasa dentro de seis meses si hoy haces lo mismo que ayer?
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-bone/15 pt-12">
          {[
            {
              k: "Menos margen",
              v: "Cada hora que sigues invirtiendo en tareas que podrían automatizarse es margen que ya no vuelve a tu negocio.",
            },
            {
              k: "Clientes que migran",
              v: "Quien te responda primero, con mejor información y más rápido, se queda con el cliente. Si no eres tú, será otro.",
            },
            {
              k: "Un mercado que no espera",
              v: "Mientras tú decides, otros ya están usando IA para vender más, atender mejor y crecer. La diferencia se acumula cada semana.",
            },
          ].map((item, i) => (
            <ScrollReveal key={item.k} delay={i * 0.08}>
              <div className="flex flex-col gap-4">
                <span className="font-serif text-[44px] md:text-[56px] text-gold leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[24px] md:text-[28px] leading-snug">
                  {item.k}
                </h3>
                <p className="text-bone/75 text-[16px] leading-[1.7]">
                  {item.v}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mt-16 max-w-prose font-serif text-[22px] md:text-[26px] italic leading-snug text-bone/90">
            No se trata de tener miedo. Se trata de decidir hoy cómo quieres
            que se vea tu negocio el próximo año.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
