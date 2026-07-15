import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Agitacion } from "@/components/sections/Agitacion";
import { QueAprenderas } from "@/components/sections/QueAprenderas";
import { SobreMi } from "@/components/sections/SobreMi";
import { Proceso } from "@/components/sections/Proceso";
import { Testimonios } from "@/components/sections/Testimonios";
import { FAQ } from "@/components/sections/FAQ";
import { Registro } from "@/components/sections/Registro";
import { Footer } from "@/components/ui/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Agitacion />
        <QueAprenderas />
        <SobreMi />
        <Proceso />
        <Registro />
        <Testimonios />
        <FAQ />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
