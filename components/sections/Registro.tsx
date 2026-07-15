import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { RegisterForm } from "@/components/form/RegisterForm";

export function Registro() {
  return (
    <section
      id="registro"
      aria-labelledby="registro-title"
      className="bg-bone py-16 sm:py-24 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <ScrollReveal className="lg:col-span-5">
            <span className="text-eyebrow text-forest">Registro</span>
            <h2
              id="registro-title"
              className="mt-5 font-serif text-[36px] leading-[1.08] sm:text-[44px] md:text-[52px] text-carbon"
            >
              Asegura tu lugar en la sesión en vivo.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-carbon/70 max-w-prose">
              Te tomará menos de un minuto. El enlace a la sala llega
              inmediatamente a tu correo.
            </p>
            <p className="mt-8 text-sm text-carbon/55 font-sans leading-relaxed">
              Dylan Torres · Consultor de IA aplicada para PYMEs colombianas.
            </p>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.1}>
            <div className="rounded-2xl border border-carbon/10 bg-paper-warm p-6 sm:p-10 shadow-lift">
              <RegisterForm />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
