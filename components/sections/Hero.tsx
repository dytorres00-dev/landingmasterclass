"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroStagger, heroTitle, heroItem } from "@/lib/motion";

export function Hero() {
  const reduced = useReducedMotion();

  const containerVariants = reduced ? undefined : heroStagger;
  const titleVariants = reduced ? undefined : heroTitle;
  const itemVariants = reduced ? undefined : heroItem;

  const handleScrollToForm = () => {
    const el = document.getElementById("registro");
    el?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative bg-paper min-h-[100svh] flex items-center pt-24 pb-20 md:pt-32 md:pb-28"
    >
      <div className="mx-auto w-full max-w-container px-6 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-10"
        >
          <motion.span
            variants={itemVariants}
            className="text-eyebrow text-forest"
          >
            Masterclass en vivo · IA aplicada a PYMEs
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={titleVariants}
            className="font-serif text-[44px] leading-[1.02] sm:text-[56px] md:text-[72px] lg:text-[88px] text-carbon max-w-[18ch]"
          >
            De sentirte <em className="not-italic text-forest">atrasado</em> a
            estar un paso adelante.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-prose text-[17px] leading-[1.7] md:text-[19px] text-carbon/75"
          >
            Una hora en vivo donde te muestro, con casos reales, cómo aplicar
            inteligencia artificial en tu negocio esta misma semana — sin saber
            programar, sin contratar developers, sin invertir más de lo que
            inviertes hoy.
          </motion.p>

          {/* Contraste antes / después, sin imágenes */}
          <motion.div
            variants={itemVariants}
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-3xl"
          >
            <div className="border-l border-gold/60 pl-5 py-2">
              <p className="text-eyebrow text-carbon/50 mb-2">Hoy</p>
              <p className="font-serif text-[22px] md:text-[26px] leading-snug text-carbon/80 italic">
                Más horas, mismos resultados, clientes que se van.
              </p>
            </div>
            <div className="border-l border-forest pl-5 py-2">
              <p className="text-eyebrow text-forest mb-2">Después</p>
              <p className="font-serif text-[22px] md:text-[26px] leading-snug text-forest italic">
                Menos tareas repetitivas, más tiempo para crecer.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Button onClick={handleScrollToForm} variant="primary">
              Reservar mi lugar
              <ArrowDown className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </Button>
            <span className="text-sm text-carbon/55 font-sans">
              Cupos limitados · Sin costo
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
