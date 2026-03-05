import Image from "next/image";

export default function ProductSection() {
  return (
    <section id="produto" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
        <figure className="surface-card mx-auto w-full max-w-[450px] overflow-hidden p-2 shadow-[0_22px_42px_rgba(0,0,0,0.36)]">
          <Image
            src="/assets/bottle.png"
            alt="Garrafa de limoncello Limone Gramado com limões"
            width={1000}
            height={1200}
            sizes="(max-width: 768px) 92vw, 450px"
            className="h-auto w-full rounded-xl bg-[#0f1628] object-contain"
          />
        </figure>

        <div>
          <p className="eyebrow">Produto</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">O limoncello</h2>
          <p className="text-[var(--muted)]">
            Nosso limoncello é produzido artesanalmente em pequenos lotes, utilizando limões selecionados e um processo
            cuidadoso que preserva o aroma fresco e o equilíbrio natural da fruta.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Inspirado na tradição italiana e feito com atenção aos detalhes, o resultado é uma bebida elegante,
            refrescante e perfeita para momentos de celebração.
          </p>
          <ul className="mt-5 space-y-3 text-[var(--muted)]">
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e3d188]" />30% vol</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e3d188]" />Limões selecionados</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#e3d188]" />Pequenos lotes artesanais</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
