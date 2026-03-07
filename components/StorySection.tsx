import Image from "next/image";

export default function StorySection() {
  return (
    <section id="historia" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">Nossa história</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Michele, da Italia para Gramado</h2>
          <p className="text-[var(--muted)]">Eu nasci na Italia e cresci em uma familia grande, sempre reunida em volta da mesa.</p>
          <p className="mt-4 text-[var(--muted)]">
            Desde pequeno, aprendi com minha mae e minha avo que comida boa, tempo em familia e hospitalidade andam
            juntos. O limoncello sempre esteve presente nesses encontros, como um gesto de carinho depois do jantar.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Com os anos, transformei essa tradicao da minha infancia em metodo artesanal: selecao cuidadosa, processo
            lento e respeito ao sabor autentico.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Hoje, o Limone Gramado leva essa historia para quem visita a Serra Gaucha: um coracao italiano em um
            coracao brasileiro, em cada taca servida.
          </p>
          <a href="#contato" className="mt-5 inline-flex text-sm font-semibold text-[#e4cc8c] transition hover:text-[#f0dda8]">
            Saiba mais
          </a>
        </div>

        <figure className="surface-card overflow-hidden p-2">
          <Image
            src="/assets/maria-story.jpg"
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
