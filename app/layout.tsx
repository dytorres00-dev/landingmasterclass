import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IA aplicada a tu negocio — Masterclass en vivo | Dylan Torres",
  description:
    "Una hora en vivo donde te muestro, con casos reales, cómo aplicar inteligencia artificial en tu negocio esta misma semana — sin saber programar.",
  openGraph: {
    title: "IA aplicada a tu negocio — Masterclass en vivo | Dylan Torres",
    description:
      "Una hora en vivo con casos reales para implementar IA en tu PYME esta misma semana.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
