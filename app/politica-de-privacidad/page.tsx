import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Dylan Torres",
  description:
    "Cómo tratamos tus datos: no los compartimos con terceros y los usamos únicamente con fines promocionales relacionados con la masterclass y los servicios de Dylan Torres.",
};

const secciones = [
  {
    titulo: "1. Qué datos recogemos",
    parrafos: [
      "Cuando te registras a la masterclass a través de esta página, recogemos la información que nos entregas voluntariamente en el formulario: tu nombre, tu correo electrónico, tu número de WhatsApp y las respuestas a las preguntas sobre tu negocio (rol, uso actual de IA y tu principal reto).",
    ],
  },
  {
    titulo: "2. Para qué usamos tus datos",
    parrafos: [
      "Usamos tus datos únicamente con fines promocionales: enviarte el acceso a la masterclass, recordatorios del evento, y comunicaciones sobre contenidos, productos o servicios relacionados de Dylan Torres.",
      "No usamos tus datos para ningún otro propósito distinto al aquí descrito.",
    ],
  },
  {
    titulo: "3. No compartimos tus datos",
    parrafos: [
      "No vendemos, alquilamos ni compartimos tus datos personales con terceros. Tu información se mantiene privada y se utiliza exclusivamente por parte de Dylan Torres para los fines promocionales indicados.",
    ],
  },
  {
    titulo: "4. Conservación de tus datos",
    parrafos: [
      "Conservamos tus datos mientras mantengas interés en nuestras comunicaciones. Puedes solicitar la baja o la eliminación de tus datos en cualquier momento.",
    ],
  },
  {
    titulo: "5. Tus derechos",
    parrafos: [
      "Tienes derecho a acceder a tus datos, corregirlos o solicitar su eliminación cuando lo desees. Para ejercer cualquiera de estos derechos, o para dejar de recibir nuestras comunicaciones, escríbenos al correo de contacto que aparece más abajo.",
    ],
  },
  {
    titulo: "6. Contacto",
    parrafos: [
      "Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos, puedes escribirnos a dy.torres00@gmail.com.",
    ],
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <main className="bg-bone">
        <Container className="max-w-[760px] py-20 md:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-carbon/60 transition-colors hover:text-forest"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            Volver al inicio
          </Link>

          <span className="mt-10 block text-eyebrow text-gold">Legal</span>
          <h1 className="mt-5 font-serif text-[40px] leading-[1.08] text-carbon sm:text-[52px]">
            Política de Privacidad
          </h1>
          <p className="mt-5 text-[14px] text-carbon/55">
            Última actualización: 15 de julio de 2026
          </p>

          <p className="mt-8 text-[17px] leading-[1.75] text-carbon/75">
            Tu confianza es importante. Esta política explica de forma simple qué
            datos recogemos cuando te registras y cómo los usamos. En resumen:{" "}
            <span className="font-medium text-forest">
              no compartimos tus datos con nadie y los usamos únicamente con
              fines promocionales.
            </span>
          </p>

          <div className="mt-14 flex flex-col gap-12">
            {secciones.map((s) => (
              <section key={s.titulo}>
                <h2 className="font-serif text-[24px] leading-snug text-carbon sm:text-[28px]">
                  {s.titulo}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {s.parrafos.map((p, i) => (
                    <p
                      key={i}
                      className="text-[16px] leading-[1.75] text-carbon/75"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
