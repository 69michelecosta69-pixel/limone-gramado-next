import Image from "next/image";
import Link from "next/link";
import { companyProfile, whatsappLink } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#0b0d0f] py-8">
      <div className="container-limone grid gap-6 text-sm text-[var(--muted)] md:grid-cols-[auto_1fr] md:items-start">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[rgba(236,215,165,0.38)] bg-black shadow-[0_0_28px_rgba(201,167,91,0.18)]">
          <Image
            src="/assets/limone-logo-monogram.png"
            alt=""
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="grid gap-2">
          <p className="font-semibold text-[var(--ink)]">{companyProfile.brandName}</p>
          <p>{companyProfile.locationDisplay}</p>
          <p>Telefone: {companyProfile.phoneDisplay}</p>
          <p>
            <a href="https://instagram.com/limone_gramado" target="_blank" rel="noreferrer" className="text-[#e7d6a8]">
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
            <a href={`mailto:${companyProfile.email}`} className="text-[#e7d6a8] break-all">
              {companyProfile.email}
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
      </div>
    </footer>
  );
}



