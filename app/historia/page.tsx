import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "História | Limone Gramado",
  description: "Conheça Maria e a história da Limone Gramado na criação de um limoncello artesanal premium.",
  alternates: {
    canonical: "/historia",
  },
};

export default function HistoriaPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">História</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Tradição italiana, alma de Gramado</h1>
        <p className="text-[var(--muted)]">
          Nossa história valoriza processo artesanal, consistência e elegância para oferecer um limoncello autoral da
          Serra Gaúcha.
        </p>
        <div className="mt-6">
          <Link href={`${siteUrl}/#historia`} className="btn-secondary">
            Ver seção completa
          </Link>
        </div>
      </section>
    </main>
  );
}
