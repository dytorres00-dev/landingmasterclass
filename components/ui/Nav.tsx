"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#aprender", label: "Qué aprenderás" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-forest/10 bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        {/* Marca */}
        <a href="#top" className="flex items-center gap-3">
          <span className="font-serif text-[28px] font-semibold leading-none tracking-wide text-forest">
            DT
          </span>
          <span className="h-6 w-px bg-forest/20" />
          <span className="leading-tight">
            <span className="block font-serif text-[15px] font-semibold tracking-wide text-carbon">
              DYLAN TORRES
            </span>
            <span className="block text-[9px] font-medium tracking-[0.2em] text-gold">
              ESTRATEGA DE MARKETING &amp; IA
            </span>
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex gap-7 text-[14px] text-carbon/70">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors duration-300 hover:text-forest"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#registro"
            className="rounded-sm bg-forest px-5 py-2.5 text-[14px] font-medium text-bone shadow-cta transition-colors duration-300 hover:bg-forest-soft"
          >
            Reservar lugar
          </a>
        </div>

        {/* Botón menú mobile */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-forest lg:hidden"
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.6} /> : <Menu className="h-6 w-6" strokeWidth={1.6} />}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {open && (
        <div className="border-t border-forest/10 bg-bone/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[16px] text-carbon/80 transition-colors hover:text-forest"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#registro"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-forest px-5 py-3.5 text-center text-[15px] font-medium text-bone"
            >
              Reservar lugar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
