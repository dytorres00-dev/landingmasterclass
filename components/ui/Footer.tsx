import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-carbon py-10 text-bone/60">
      <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3.5">
          <span className="font-serif text-[24px] font-semibold tracking-wide text-gold">
            DT
          </span>
          <p className="text-[13px] leading-tight">
            <span className="text-bone">Dylan Torres</span> · Estratega de
            Marketing &amp; IA
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <Link
            href="/politica-de-privacidad"
            className="text-[13px] text-bone/60 transition-colors hover:text-gold"
          >
            Política de Privacidad
          </Link>
          <p className="font-serif text-[15px] italic text-bone/45">
            El futuro pertenece a quienes se adaptan hoy.
          </p>
        </div>
      </Container>
    </footer>
  );
}
