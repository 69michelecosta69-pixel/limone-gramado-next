import Link from "next/link";
import { companyProfile, whatsappLink } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#0b0d0f] py-8">
      <div className="container-limone grid gap-2 text-sm text-[var(--muted)]">
        <p className="font-semibold text-[var(--ink)]">{companyProfile.brandName}</p>
        <p>{companyProfile.locationDisplay}</p>
        <p>Telefone: {companyProfile.phoneDisplay}</p>
        <p>
          <a href="https://instagram.com/limonegramado" target="_blank" rel="noreferrer" className="text-[#e7d6a8]">
            Instagram
          </a>
          {" | "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-[#e7d6a8]"
          >
            WhatsApp
          </a>
          {" | "}
          <a href={`mailto:${companyProfile.email}`} className="text-[#e7d6a8]">
            E-mail
          </a>
        </p>
        <p>CNPJ: {companyProfile.cnpj}</p>
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {companyProfile.brandName}. Todos os direitos reservados.
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



