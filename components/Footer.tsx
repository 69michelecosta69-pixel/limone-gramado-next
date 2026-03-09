import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#0b0d0f] py-8">
      <div className="container-limone grid gap-2 text-sm text-[var(--muted)]">
        <p className="font-semibold text-[var(--ink)]">Limone Gramado</p>
        <p>Gramado - RS - Brasil</p>
        <p>Telefone: +55 (62) 98134-7722</p>
        <p>
          <a href="https://instagram.com/limonegramado" target="_blank" rel="noreferrer" className="text-[#e7d6a8]">
            Instagram
          </a>
          {" | "}
          <a
            href="https://wa.me/5562981347722?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Limoncello%20Limone%20Gramado%20e%20disponibilidade%20para%20compra%2Fdegusta%C3%A7%C3%A3o%20em%20Gramado."
            target="_blank"
            rel="noreferrer"
            className="text-[#e7d6a8]"
          >
            WhatsApp
          </a>
          {" | "}
          <a href="mailto:info@limonegramado.com.br" className="text-[#e7d6a8]">
            E-mail
          </a>
        </p>
        <p>CNPJ: em regularização</p>
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Limone Gramado. Todos os direitos reservados.
        </p>

        <p className="pt-2 text-xs text-[var(--muted)]">
          <Link href="/politica-de-privacidade" className="text-[#e7d6a8] hover:text-[#f0ddb1]">
            Política de Privacidade
          </Link>
          {" | "}
          <Link href="/termos" className="text-[#e7d6a8] hover:text-[#f0ddb1]">
            Termos de Uso
          </Link>
        </p>
      </div>
    </footer>
  );
}

