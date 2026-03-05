import Image from "next/image";

export default function StorySection() {
  return (
    <section id="historia" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="eyebrow">Nossa história</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Maria & Michele</h2>
          <p className="text-[var(--muted)]">O Limone Gramado nasceu do encontro entre duas culturas.</p>
          <p className="mt-4 text-[var(--muted)]">
            Maria, criada na Serra Gaúcha, sempre teve uma paixão especial por receber pessoas e criar momentos de
            convivência.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Michele trouxe a inspiração da tradição italiana do limoncello - uma bebida ligada à celebração, à família
            e às noites de verão.
          </p>
          <p className="mt-4 text-[var(--muted)]">
            Dessa união surgiu o Limone Gramado: um limoncello artesanal criado para transformar encontros simples em
            experiências memoráveis.
          </p>
          <a href="#contato" className="mt-5 inline-flex text-sm font-semibold text-[#e4cc8c] transition hover:text-[#f0dda8]">
            Saiba mais
          </a>
        </div>

        <figure className="surface-card overflow-hidden p-2">
          <Image
            src="/assets/story.png"
            alt="Maria servindo limoncello no carrinho Limone Gramado em evento"
            width={1200}
            height={900}
            sizes="(max-width: 768px) 92vw, 44vw"
            className="h-[320px] w-full rounded-xl bg-[#0f1628] object-contain md:h-[500px]"
          />
          <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Eventos & degustações (em breve)
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
