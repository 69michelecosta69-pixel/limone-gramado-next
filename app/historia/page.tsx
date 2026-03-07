import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Historia | Limone Gramado",
  description: "Conheca a historia de Michele, nascido na Italia, e a tradicao familiar que inspira o limoncello Limone Gramado.",
  alternates: {
    canonical: "/historia",
  },
};

export default function HistoriaPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Historia</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Um coracao italiano em um coracao brasileiro</h1>
        <p className="text-[var(--muted)]">
          A Limone Gramado nasceu da minha historia: infancia na Italia, aprendizado com minha mae e minha avo, e uma
          tradicao de familia que hoje compartilho em Gramado para turistas que buscam autenticidade.
        </p>
        <div className="mt-6">
          <Link href={`${siteUrl}/#historia`} className="btn-secondary">
            Ver secao completa
          </Link>
        </div>
      </section>
    </main>
  );
}
