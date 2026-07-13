import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-carbon text-bone/80 py-10">
      <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-serif text-[18px] text-bone">
          Dylan Torres
        </p>
        <p className="text-[12px] text-bone/55 font-sans">
          © {year} · IA aplicada a PYMEs colombianas · Cali, Colombia
        </p>
      </Container>
    </footer>
  );
}
