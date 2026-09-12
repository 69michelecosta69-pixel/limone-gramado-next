import Image from "next/image";
import { salesLocationNames } from "@/lib/company";

export default function ProductSection() {
  return (
    <section id="produto" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
        <figure className="surface-card mx-auto w-full max-w-[450px] overflow-hidden p-2 shadow-[0_22px_42px_rgba(0,0,0,0.36)]">
          <Image
            src="/assets/limoncello-arancello-limone-gramado.png"
            alt="Garrafas de Arancello e Limoncello LIMONE GRAMADO com laranjas e limões frescos"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 92vw, 450px"
            className="h-auto w-full rounded-xl bg-[#0f1628] object-contain"
          />
          <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Arancello e Limoncello LIMONE GRAMADO · 500 ml · 30% vol
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">Nossos produtos</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">
            Limoncello e Arancello
          </h2>
          <p className="text-[var(--muted)]">
            Nossos licores são produzidos artesanalmente em pequenos lotes, utilizando limões e laranjas selecionados
            em um processo cuidadoso que preserva o aroma fresco e o equilíbrio natural de cada fruta.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Inspirados na tradição italiana e feitos com atenção aos detalhes, Limoncello e Arancello oferecem duas
            experiências elegantes, refrescantes e perfeitas para momentos de celebração.
          </p>
          <ul className="mt-5 space-y-3 text-[var(--muted)]">
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e3d188]" />30% vol</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e3d188]" />Frutas cítricas selecionadas</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e3d188]" />Pequenos lotes artesanais</li>
          </ul>
          <div className="mt-7 flex items-center gap-4 border-y border-[var(--line)] py-4">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[rgba(236,215,165,0.38)] bg-black">
              <Image
                src="/assets/limone-logo-monogram.png"
                alt=""
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f0ddb1]">
              Assinatura artesanal de Gramado para momentos especiais
            </p>
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">
            <strong className="text-[var(--ink)]">Onde comprar:</strong> {salesLocationNames}, em Gramado/RS.
          </p>
          <a className="mt-3 inline-block text-sm font-semibold text-[var(--gold)] underline underline-offset-4" href="#onde-encontrar">
            Ver endereços e mapas
          </a>
        </div>
      </div>
    </section>
  );
}

