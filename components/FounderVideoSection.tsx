import { whatsappLink } from "@/lib/company";

const additionalVideos = [
  {
    src: "/assets/video/limone-lasagna-bolognese.mp4",
    poster: "/assets/video/limone-lasagna-bolognese-poster.jpg",
    ariaLabel: "Lasagna alla bolognese servida com Limone Gramado",
    eyebrow: "Tradição à mesa",
    title: "Lasagna alla Bolognese",
    description:
      "Uma receita italiana preparada com afeto, boa conversa e Limone Gramado para brindar os momentos à mesa.",
    detail:
      "Da cozinha à taça, este encontro celebra o sabor, a convivência e o jeito italiano de transformar uma refeição em memória.",
    tags: ["Cucina italiana", "Convivência", "Celebração"],
    link: whatsappLink,
    linkLabel: "Falar com a Limone",
    reverse: false,
  },
  {
    src: "/assets/video/limone-origem-limoes.mp4",
    poster: "/assets/video/limone-origem-limoes-poster.jpg",
    ariaLabel: "Michele apresenta os limões usados no Limone Gramado",
    eyebrow: "Do pomar à garrafa",
    title: "Da fruta nasce a nossa história",
    description:
      "Michele mostra os limões e o cuidado artesanal que estão na origem de cada garrafa de Limone Gramado.",
    detail:
      "A escolha da fruta e o respeito pelo tempo revelam a essência de uma produção pequena, cuidadosa e cheia de identidade.",
    tags: ["Limões", "Artesanal", "Origem"],
    link: "#historia",
    linkLabel: "Conhecer a história",
    reverse: true,
  },
];

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

      <div id="historias-video" className="container-limone mt-16 scroll-mt-28 md:mt-24">
        <div className="mb-12 text-center md:mb-16">
          <p className="eyebrow">Mais histórias da Limone</p>
          <h3 className="font-[var(--font-heading)] text-3xl font-semibold md:text-5xl">
            Sabores, origem e tradição
          </h3>
        </div>

        <div className="space-y-16 md:space-y-24">
          {additionalVideos.map((video) => (
            <article
              key={video.src}
              className="grid items-center gap-8 border-t border-[var(--line)] pt-12 md:grid-cols-[0.92fr_1.08fr] md:gap-14 md:pt-16"
            >
              <figure
                className={`surface-card mx-auto w-full max-w-[420px] overflow-hidden p-2 shadow-[0_28px_58px_rgba(0,0,0,0.48)] ${
                  video.reverse ? "md:order-2" : ""
                }`}
              >
                <video
                  className="aspect-[9/16] w-full rounded-xl bg-[#060b16] object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  aria-label={video.ariaLabel}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </figure>

              <div className={video.reverse ? "md:order-1" : ""}>
                <p className="eyebrow">{video.eyebrow}</p>
                <h4 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-5xl">{video.title}</h4>
                <p className="max-w-2xl text-[var(--muted)]">{video.description}</p>
                <p className="mt-4 max-w-2xl text-[var(--muted)]">{video.detail}</p>

                <div className="mt-7 grid gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f0ddb1] sm:grid-cols-3">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-[var(--line)] bg-[rgba(201,167,91,0.08)] px-4 py-3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <a
                    className="btn-primary"
                    href={video.link}
                    target={video.link.startsWith("http") ? "_blank" : undefined}
                    rel={video.link.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {video.linkLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
