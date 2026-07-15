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
      className="relative overflow-hidden bg-paper min-h-[100svh] flex items-center pt-20 pb-14 sm:pt-24 sm:pb-24 md:pt-32 md:pb-28"
    >
      {/* Atmósfera de fondo: auras difusas para dar profundidad */}
      <div aria-hidden className="absolute inset-0 -z-0">
        <div
          className={`aura-blob absolute -top-24 -right-16 h-[520px] w-[520px] bg-forest/25 ${
            reduced ? "" : "animate-aura"
          }`}
        />
        <div
          className={`aura-blob absolute top-1/3 -left-24 h-[440px] w-[440px] bg-gold/20 ${
            reduced ? "" : "animate-aura-slow"
          }`}
        />
        <div className="aura-blob absolute bottom-0 right-1/4 h-[360px] w-[360px] bg-forest/10" />
        {/* velo para mantener legibilidad del texto */}
        <div className="absolute inset-0 bg-bone/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-6 md:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-7 sm:gap-10"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-forest/20 bg-bone/70 px-4 py-2 backdrop-blur-sm shadow-soft">
              <span className="relative flex h-2 w-2">
                {!reduced && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-forest animate-pulse-ring" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full bg-forest ${
                    reduced ? "" : "animate-pulse-dot"
                  }`}
                />
              </span>
              <span className="text-eyebrow text-forest">
                Masterclass en vivo · IA aplicada a PYMEs
              </span>
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={titleVariants}
            className="font-serif text-[44px] leading-[1.02] sm:text-[56px] md:text-[72px] lg:text-[88px] text-carbon max-w-[18ch]"
          >
            De sentirte <em className="not-italic text-forest">atrasado</em> a
            estar <span className="text-gold-gradient">un paso adelante</span>.
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

          {/* Contraste antes / después, ahora con profundidad */}
          <motion.div
            variants={itemVariants}
            className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl"
          >
            <div className="group rounded-xl border border-carbon/10 bg-bone/60 backdrop-blur-sm px-5 py-5 shadow-soft transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-lift">
              <p className="text-eyebrow text-carbon/45 mb-2">Hoy</p>
              <p className="font-serif text-[22px] md:text-[26px] leading-snug text-carbon/80 italic">
                Más horas, mismos resultados, clientes que se van.
              </p>
            </div>
            <div className="group relative rounded-xl border border-forest/25 bg-forest/[0.04] backdrop-blur-sm px-5 py-5 shadow-soft transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-lift">
              <span aria-hidden className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-forest" />
              <p className="text-eyebrow text-forest mb-2 pl-2">Después</p>
              <p className="font-serif text-[22px] md:text-[26px] leading-snug text-forest italic pl-2">
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

      {/* Indicador de scroll */}
      {!reduced && (
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-eyebrow text-carbon/40">
            Desliza
          </span>
          <span className="relative flex h-9 w-[22px] items-start justify-center rounded-full border border-carbon/25 p-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-forest animate-scrollCue" />
          </span>
        </div>
      )}
    </section>
  );
}
