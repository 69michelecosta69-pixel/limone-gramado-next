import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contato | Limone Gramado",
  description: "Fale com a equipe Limone Gramado para compras, degustações e eventos em Gramado e Canela.",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContatoPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Contato</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Fale com a Limone Gramado</h1>
        <p className="text-[var(--muted)]">Atendimento via WhatsApp e Instagram para pedidos, parcerias e degustações.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="btn-primary"
            href="https://wa.me/5562981347722?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Limoncello%20Limone%20Gramado%20e%20disponibilidade%20para%20compra%2Fdegusta%C3%A7%C3%A3o%20em%20Gramado."
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
          <Link href={`${siteUrl}/#contato`} className="btn-secondary">
            Abrir formulário
          </Link>
        </div>
      </section>
    </main>
  );
}
