"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Calendar } from "lucide-react";

interface SuccessStateProps {
  nombre: string;
}

export function SuccessState({ nombre }: SuccessStateProps) {
  const reduced = useReducedMotion();
  const MotionDiv = motion.div;
  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <MotionDiv
      {...anim}
      className="flex flex-col items-start gap-6 py-4"
      role="status"
      aria-live="polite"
    >
      <CheckCircle2
        className="h-10 w-10 text-forest"
        strokeWidth={1.4}
        aria-hidden
      />
      <h3 className="font-serif text-[32px] md:text-[40px] leading-[1.1] text-carbon">
        {nombre ? `${nombre.split(" ")[0]}, ya estás dentro.` : "Ya estás dentro."}
      </h3>
      <p className="text-[17px] leading-[1.7] text-carbon/75 max-w-prose">
        Te enviamos un correo con el enlace directo a la sesión en vivo.
        Revísalo en los próximos minutos y, si no llega, échale un ojo a la
        carpeta de promociones o spam.
      </p>
      <div className="mt-4 flex items-start gap-3 border-t border-carbon/15 pt-6 w-full">
        <Calendar
          className="h-5 w-5 mt-1 text-forest shrink-0"
          strokeWidth={1.4}
          aria-hidden
        />
        <p className="text-[15px] text-carbon/70 leading-relaxed">
          <span className="block font-medium text-carbon">Martes 21 de julio · 7:00 p. m. (COL)</span>
          Masterclass en vivo · 60 minutos + Q&amp;A
        </p>
      </div>
    </MotionDiv>
  );
}
