"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { heroStagger, heroTitle, heroItem } from "@/lib/motion";

const stats = [
  { value: "+2.400", label: "personas formadas" },
  { value: "90 min", label: "100% práctico" },
  { value: "4.9/5", label: "valoración media" },
];

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
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-paper"
    >
      {/* Fondo aurora sedosa animado */}
      <AuroraBackground />

      <div className="relative z-10 mx-auto grid max-w-container items-center gap-12 px-6 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-12">
        {/* Columna de texto */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-6 bg-gold" />
            <span className="text-eyebrow text-gold">
              Masterclass en vivo · Gratuita
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={titleVariants}
            className="font-serif text-[44px] font-medium leading-[1.04] tracking-tight text-carbon sm:text-[56px] md:text-[68px] lg:text-[74px]"
          >
            Automatiza tu negocio con{" "}
            <span className="italic text-forest">Inteligencia Artificial</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-[520px] text-[17px] leading-[1.7] text-carbon/70 md:text-[18px]"
          >
            Una masterclass práctica para aprender a usar IA que ahorra tiempo,
            multiplica tu productividad y te ayuda a captar más clientes — sin
            tecnicismos.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <Button onClick={handleScrollToForm} variant="primary">
              Reservar mi lugar gratis
            </Button>
            <p className="text-[13px] leading-tight text-carbon/55">
              <span className="font-semibold text-forest">Cupos limitados.</span>
              <br />
              Próxima sesión en vivo.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-10 border-t border-forest/10 pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-[34px] leading-none text-forest">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-[12px] text-carbon/55">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Columna de retrato */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 24 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full shadow-glow-forest">
            <ImagePlaceholder
              label="Retrato de Dylan"
              className="h-full w-full"
            />
            {/* Tarjeta de nombre */}
            <div className="absolute bottom-5 left-5 rounded-sm bg-bone/95 px-4 py-3 backdrop-blur-sm">
              <div className="font-serif text-[20px] leading-tight text-forest">
                Dylan Torres
              </div>
              <div className="mt-0.5 text-[11px] tracking-[0.1em] text-gold">
                ESTRATEGA DE IA &amp; MARKETING
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
