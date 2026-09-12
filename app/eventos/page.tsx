import type { Metadata } from "next";
import Link from "next/link";
import SalesLocationsCompact from "@/components/SalesLocationsCompact";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Limoncello para Eventos em Gramado | Limone Gramado",
  description:
    "Degustações e apresentações da Limone Gramado para eventos, hotéis, restaurantes e experiências em Gramado e Canela.",
  alternates: {
    canonical: "/eventos",
  },
};

export default function EventosPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Eventos</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Eventos e degustações</h1>
        <p className="text-[var(--muted)]">
          Degustações, apresentações da marca e experiências para hotéis, restaurantes, eventos e turismo em Gramado.
        </p>
        <div className="mt-6">
          <Link href={`${siteUrl}/#eventos`} className="btn-secondary">
            Ver seção de eventos
          </Link>
        </div>
        <SalesLocationsCompact />
      </section>
    </main>
  );
}
