import Image from "next/image";
import { whatsappLink } from "@/lib/company";

export default function EventsSection() {
  return (
    <section id="eventos" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow">Eventos / Carrinho</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Experiências Limone</h2>
          <p className="mb-6 max-w-3xl text-[var(--muted)]">
            Degustações em eventos e feiras de Gramado com serviço especial do carrinho Limone.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="surface-card p-6">
              <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Degustações</h3>
              <p className="mb-5 text-[var(--muted)]">Sessões especiais de apresentação do limoncello em ambientes selecionados.</p>
              <a className="btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">Solicitar informações</a>
            </article>

            <article className="surface-card p-6">
              <h3 className="mb-2 font-[var(--font-heading)] text-3xl">Eventos</h3>
              <p className="mb-5 text-[var(--muted)]">Experiência de serviço com carrinho Limone para celebrações e encontros especiais.</p>
              <a className="btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">Solicitar informações</a>
            </article>
          </div>
        </div>

        <figure className="surface-card w-full overflow-hidden p-2 md:justify-self-end md:max-w-[720px]">
          <Image
            src="/assets/degustacao-wm.jpg"
            alt="Degustação de Limoncello em eventos"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 720px"
            className="h-[340px] w-full rounded-xl bg-[#0f1628] object-contain sm:h-[420px] md:h-[520px]"
          />
        </figure>
      </div>
    </section>
  );
}

