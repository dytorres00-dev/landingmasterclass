import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Agitacion } from "@/components/sections/Agitacion";
import { Solucion } from "@/components/sections/Solucion";
import { Plan } from "@/components/sections/Plan";
import { Registro } from "@/components/sections/Registro";
import { Footer } from "@/components/ui/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problema />
      <Agitacion />
      <Solucion />
      <Plan />
      <Registro />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
