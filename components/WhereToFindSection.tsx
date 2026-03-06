import Image from "next/image";

export default function WhereToFindSection() {
  return (
    <section id="onde-encontrar" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow">Atmosfera de Gramado</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Inspirado em Gramado</h2>
          <p className="mb-6 max-w-3xl text-[var(--muted)]">
            Inspirado na atmosfera única de Gramado, o Limone Gramado combina tradição italiana com hospitalidade da
            Serra Gaúcha para criar momentos especiais.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="surface-card p-6">
              <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Gramado/RS</h3>
              <p className="text-[var(--muted)]">Em breve</p>
            </article>
            <article className="surface-card p-6">
              <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Pontos parceiros</h3>
              <p className="text-[var(--muted)]">Em breve</p>
            </article>
            <article className="surface-card p-6">
              <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Eventos</h3>
              <p className="text-[var(--muted)]">Em breve</p>
            </article>
          </div>
        </div>

        <figure className="surface-card w-full overflow-hidden p-2 md:justify-self-end md:max-w-[720px]">
          <Image
            src="/assets/gramado-atmosfera.jpg"
            alt="Atmosfera de Gramado"
            width={512}
            height={512}
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 720px"
            className="h-[320px] w-full rounded-xl bg-[#0f1628] object-contain sm:h-[420px] md:h-[500px]"
          />
        </figure>
      </div>
    </section>
  );
}
