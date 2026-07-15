import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens oficiales de marca Dylan Torres
        beige: "#F4EFE7",
        bone: "#FAF8F5",
        forest: "#1F3A32",
        carbon: "#1F1F1F",
        gold: "#B69463",
        // Tonos derivados para estados sutiles
        "forest-soft": "#2A4A40",
        "gold-soft": "#C9A876",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        cta: "0.1em",
      },
      maxWidth: {
        container: "1200px",
        prose: "640px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        // Elevación editorial: sombras suaves y cálidas, nunca duras
        soft: "0 1px 2px rgba(31,31,31,0.04), 0 6px 18px -8px rgba(31,31,31,0.10)",
        lift: "0 2px 4px rgba(31,31,31,0.04), 0 20px 48px -16px rgba(31,58,50,0.22)",
        "glow-forest": "0 24px 80px -24px rgba(31,58,50,0.45)",
        "glow-gold": "0 0 0 1px rgba(182,148,99,0.25), 0 24px 60px -20px rgba(182,148,99,0.35)",
        cta: "0 8px 24px -10px rgba(31,58,50,0.5)",
      },
      keyframes: {
        aura: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.55" },
          "50%": { transform: "translate(4%, -3%) scale(1.08)", opacity: "0.75" },
        },
        auraSlow: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.35" },
          "50%": { transform: "translate(-5%, 4%) scale(1.12)", opacity: "0.55" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        scrollCue: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "35%": { opacity: "1" },
          "70%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        aura: "aura 14s ease-in-out infinite",
        "aura-slow": "auraSlow 20s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
        "pulse-ring": "pulseRing 1.8s ease-out infinite",
        scrollCue: "scrollCue 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
