"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    q: "¿La masterclass tiene algún costo?",
    a: "No. Es 100% gratuita. Solo necesitas reservar tu lugar con tu correo, ya que los cupos por sesión son limitados.",
  },
  {
    q: "¿Necesito conocimientos técnicos previos?",
    a: "Para nada. Está pensada para emprendedores y dueños de negocio sin experiencia técnica. Todo se explica de forma clara y aplicable desde el primer día.",
  },
  {
    q: "¿Es en vivo o grabada?",
    a: "Es una sesión en vivo de aproximadamente 90 minutos, con espacio para preguntas al final. Si reservas, te avisamos la fecha y hora exactas.",
  },
  {
    q: "¿Para qué tipo de negocio sirve?",
    a: "Para cualquier negocio que quiera ahorrar tiempo y captar más clientes: servicios, ecommerce, agencias, profesionales independientes y más.",
  },
  {
    q: "¿Qué me llevo al terminar?",
    a: "Un método claro para empezar a automatizar tareas con IA, ejemplos reales y una lista de herramientas listas para aplicar en tu negocio.",
  },
];

export function FAQ() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-bone py-16 sm:py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-[820px]">
          <ScrollReveal className="mb-12 text-center">
            <span className="text-eyebrow text-gold">Preguntas frecuentes</span>
            <h2
              id="faq-title"
              className="mt-5 font-serif text-[34px] leading-[1.1] text-carbon sm:text-[42px] md:text-[48px]"
            >
              Antes de reservar tu lugar.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="border-t border-forest/12">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-forest/12">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 py-6 text-left"
                    >
                      <span className="text-[17px] font-medium text-carbon sm:text-[18px]">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className="shrink-0 font-serif text-[28px] leading-none text-gold transition-transform duration-300"
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={reduced ? undefined : { height: 0, opacity: 0 }}
                          animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[680px] pb-6 text-[15.5px] leading-[1.7] text-carbon/70">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
