import { whatsappLink } from "@/lib/company";

export default function FounderVideoSection() {
  return (
    <section id="mensagem" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
        <figure className="surface-card mx-auto w-full max-w-[420px] overflow-hidden p-2 shadow-[0_28px_58px_rgba(0,0,0,0.48)]">
          <video
            className="aspect-[9/16] w-full rounded-xl bg-[#060b16] object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/assets/video/limone-mensagem-michele-poster.jpg"
            aria-label="Mensagem de Michele sobre o Limone Gramado"
          >
            <source src="/assets/video/limone-mensagem-michele.mp4" type="video/mp4" />
          </video>
        </figure>

        <div>
          <p className="eyebrow">Mensagem da marca</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">
            A alma italiana da Limone Gramado
          </h2>
          <p className="max-w-2xl text-[var(--muted)]">
            Uma mensagem de Michele sobre a origem, a tradição e o cuidado por trás do nosso limoncello artesanal.
          </p>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Entre a inspiração italiana e a elegância da Serra Gaúcha, cada garrafa carrega uma história feita para ser
            compartilhada com calma, afeto e qualidade.
          </p>

          <div className="mt-7 grid gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f0ddb1] sm:grid-cols-3">
            <span className="rounded-xl border border-[var(--line)] bg-[rgba(201,167,91,0.08)] px-4 py-3">
              Tradição
            </span>
            <span className="rounded-xl border border-[var(--line)] bg-[rgba(201,167,91,0.08)] px-4 py-3">
              Família
            </span>
            <span className="rounded-xl border border-[var(--line)] bg-[rgba(201,167,91,0.08)] px-4 py-3">
              Gramado
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href="#historia">
              Conhecer a história
            </a>
            <a className="btn-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
