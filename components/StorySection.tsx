import Image from "next/image";

export default function StorySection() {
  return (
    <section id="historia" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">Nossa historia</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Da Italia para Gramado</h2>
          <p className="text-[var(--muted)]">
            Nasci na Italia e cresci em uma familia grande, sempre reunida em volta de uma mesa cheia de comida,
            risadas e historias.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Desde pequeno aprendi com minha mae e minha avo que a comida nao e apenas alimento: e carinho, tradicao e
            tempo compartilhado com quem amamos.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Assim nasceu o Limone Gramado: um limoncello artesanal inspirado na tradicao italiana, preparado com
            cuidado, paciencia e respeito pelos sabores autenticos.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Hoje, cada garrafa leva um pouco dessa historia para quem visita Gramado.
          </p>
          <a href="/historia" className="mt-5 inline-flex text-sm font-semibold text-[#e4cc8c] transition hover:text-[#f0dda8]">
            Ler historia completa
          </a>
        </div>

        <figure className="surface-card overflow-hidden p-2">
          <Image
            src="/assets/michele-story.png"
            alt="Historia do fundador do Limone Gramado"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 92vw, 44vw"
            className="h-[320px] w-full rounded-xl bg-[#0f1628] object-contain md:h-[500px]"
          />
          <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Tradicao de familia, experiencia autentica
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
