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
    },
  },
  plugins: [],
};

export default config;
