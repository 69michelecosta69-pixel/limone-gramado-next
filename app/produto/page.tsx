import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Produto | Limone Gramado",
  description: "Detalhes do limoncello artesanal Limone Gramado: pequenos lotes, limões selecionados e perfil premium.",
  alternates: {
    canonical: "/produto",
  },
};

export default function ProdutoPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Produto</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Limoncello artesanal Limone Gramado</h1>
        <p className="text-[var(--muted)]">
          Licor de limão produzido em pequenos lotes, inspirado na tradição italiana e pensado para servir bem gelado,
          puro ou em coquetelaria autoral.
        </p>
        <div className="mt-6">
          <Link href={`${siteUrl}/#produto`} className="btn-secondary">
            Ver seção de produto
          </Link>
        </div>
      </section>
    </main>
  );
}
