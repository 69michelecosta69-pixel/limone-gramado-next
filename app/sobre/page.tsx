import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre | Limone Gramado",
  description: "Conheça a história da Limone Gramado e a inspiração italiana por trás do limoncello artesanal.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Sobre</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Nossa história em Gramado</h1>
        <p className="text-[var(--muted)]">
          A Limone Gramado nasceu da vontade de unir tradição italiana, hospitalidade da Serra Gaúcha e um limoncello
          de perfil premium para experiências memoráveis.
        </p>
        <div className="mt-6">
          <Link href={`${siteUrl}/#historia`} className="btn-secondary">
            Ver história completa
          </Link>
        </div>
      </section>
    </main>
  );
}
