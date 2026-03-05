export default function WhereToFindSection() {
  return (
    <section id="onde-encontrar" className="section-spacing">
      <div className="container-limone">
        <p className="eyebrow">Onde encontrar</p>
        <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Onde encontrar</h2>
        <p className="mb-6 max-w-3xl text-[var(--muted)]">
          O Limone Gramado está em fase de lançamento. Em breve estaremos presentes em degustações, eventos e pontos
          selecionados na Serra Gaúcha. Cadastre-se para receber novidades.
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
    </section>
  );
}
