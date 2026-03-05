const WHATSAPP_LINK = "https://wa.me/5562981347722?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Limoncello%20Limone%20Gramado%20e%20disponibilidade%20para%20compra%2Fdegusta%C3%A7%C3%A3o%20em%20Gramado.";

export default function EventsSection() {
  return (
    <section id="eventos" className="section-spacing">
      <div className="container-limone">
        <p className="eyebrow">Eventos / Carrinho</p>
        <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Experiências Limone</h2>
        <p className="mb-6 max-w-3xl text-[var(--muted)]">
          O Limone Gramado também nasce para criar experiências. Nosso carrinho de degustação foi pensado para eventos
          especiais, hotéis e momentos exclusivos onde o limoncello se torna parte da celebração.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="surface-card p-6">
            <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Degustações</h3>
            <p className="mb-5 text-[var(--muted)]">Sessões especiais de apresentação do limoncello em ambientes selecionados.</p>
            <a className="btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Solicitar informações</a>
          </article>

          <article className="surface-card p-6">
            <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Eventos</h3>
            <p className="mb-5 text-[var(--muted)]">Experiência de serviço com carrinho Limone para celebrações e encontros especiais.</p>
            <a className="btn-secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Solicitar informações</a>
          </article>
        </div>
      </div>
    </section>
  );
}

