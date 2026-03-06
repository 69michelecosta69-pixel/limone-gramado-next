import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/5562981347722?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Limoncello%20Limone%20Gramado%20e%20disponibilidade%20para%20compra%2Fdegusta%C3%A7%C3%A3o%20em%20Gramado.";

export default function Hero() {
  return (
    <section id="inicio" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="eyebrow">Limoncello artesanal premium</p>
          <h1 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.03] sm:text-5xl md:text-7xl">
            Limoncello artesanal para brindar o extraordinário
          </h1>
          <p className="max-w-2xl text-[var(--muted)]">
            Inspirado na Itália e feito na Serra Gaúcha com limões selecionados em pequenos lotes.
          </p>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Produzido com cuidado e tradição, o Limone Gramado nasce para acompanhar encontros, celebrações e
            experiências únicas em Gramado.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#eventos">
              Degustações em breve
            </a>
            <a className="btn-secondary" href="#contato">
              Entrar na lista de espera
            </a>
          </div>

          <p className="mt-4 text-xs text-[var(--muted)]">Disponível em breve. Venda somente após regularização.</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="text-sm font-semibold text-[#e7d6a8] transition hover:text-[#f0ddb1]" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="text-sm font-semibold text-[#e7d6a8] transition hover:text-[#f0ddb1]" href="https://instagram.com/limonegramado" target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>

        <figure className="surface-card w-full overflow-hidden p-2 md:justify-self-end md:max-w-[860px]">
          <Image
            src="/assets/hero-limoncello.jpg"
            alt="Gramado Limone Limoncello artesanal"
            width={512}
            height={512}
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 50vw, 860px"
            className="h-[320px] w-full rounded-xl object-cover sm:h-[420px] md:h-[560px]"
          />
        </figure>
      </div>
    </section>
  );
}
