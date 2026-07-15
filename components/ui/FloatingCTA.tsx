"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/**
 * Botón flotante que aparece tras salir del hero y se oculta cuando la sección
 * de registro entra en viewport (para no competir con el formulario visible).
 */
export function FloatingCTA() {
  const reduced = useReducedMotion();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [registroVisible, setRegistroVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const registro = document.getElementById("registro");
    let observer: IntersectionObserver | undefined;
    if (registro) {
      observer = new IntersectionObserver(
        ([entry]) => setRegistroVisible(entry.isIntersecting),
        { rootMargin: "-20% 0px -30% 0px" },
      );
      observer.observe(registro);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = scrolledPastHero && !registroVisible;

  const handleClick = () => {
    document
      .getElementById("registro")
      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          initial={reduced ? { opacity: 0, x: "-50%" } : { opacity: 0, y: 24, x: "-50%" }}
          animate={reduced ? { opacity: 1, x: "-50%" } : { opacity: 1, y: 0, x: "-50%" }}
          exit={reduced ? { opacity: 0, x: "-50%" } : { opacity: 0, y: 24, x: "-50%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
          className="fixed left-1/2 z-50 inline-flex items-center gap-3 rounded-full border border-forest bg-forest px-5 py-3 sm:px-6 sm:py-3.5 text-bone shadow-glow-forest backdrop-blur-sm transition-colors duration-300 hover:bg-forest-soft max-w-[calc(100vw-2rem)]"
        >
          <span className="text-[13px] font-medium uppercase tracking-cta">
            Reservar mi lugar
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bone/15">
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
