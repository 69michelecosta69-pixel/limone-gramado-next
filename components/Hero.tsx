import Image from "next/image";
import { partnerWhatsappLink, whatsappLink } from "@/lib/company";

export default function Hero() {
  return (
    <section id="inicio" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-4 rounded-full border border-[var(--line)] bg-[rgba(201,167,91,0.10)] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-[rgba(236,215,165,0.48)] bg-black shadow-[0_0_30px_rgba(201,167,91,0.28)]">
              <Image
                src="/assets/limone-logo-monogram.png"
                alt=""
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </span>
            <span className="grid leading-none">
              <span className="font-[var(--font-heading)] text-2xl uppercase tracking-[0.18em] text-[#f2d68a]">
                Limone
              </span>
              <span className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d8c08b]">
                Gramado
              </span>
            </span>
          </div>
          <p className="eyebrow">Limoncello artesanal premium</p>
          <h1 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.03] sm:text-5xl md:text-7xl">
            Limoncello artesanal para brindar o extraordinário
          </h1>
          <p className="max-w-2xl text-[var(--muted)]">
            Inspirado na Itália e feito na Serra Gaúcha com limões selecionados em pequenos lotes.
          </p>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Criado para experiências em Gramado: carta de drinks, welcome drink, eventos especiais e parcerias com
            hotéis e restaurantes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#parcerias">
              Parcerias para hotéis
            </a>
            <a className="btn-secondary" href={partnerWhatsappLink} target="_blank" rel="noreferrer">
              Solicitar proposta
            </a>
          </div>

          <p className="mt-4 text-xs text-[var(--muted)]">Disponível em breve. Venda somente após regularização.</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a className="text-sm font-semibold text-[#e7d6a8] transition hover:text-[#f0ddb1]" href={whatsappLink} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="text-sm font-semibold text-[#e7d6a8] transition hover:text-[#f0ddb1]" href="https://instagram.com/limone_gramado" target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>

        <figure className="surface-card relative w-full overflow-hidden p-2 md:justify-self-end md:max-w-[860px]">
          <div className="absolute left-5 top-5 z-10 grid place-items-center rounded-full border border-[rgba(236,215,165,0.42)] bg-black/82 p-2 shadow-[0_18px_36px_rgba(0,0,0,0.38)] backdrop-blur-sm">
            <span className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
              <Image
                src="/assets/limone-logo-monogram.png"
                alt=""
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover"
              />
            </span>
          </div>
          <Image
            src="/assets/hero-limoncello-wm.jpg"
            alt="Limoncello artesanal Limone Gramado"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 50vw, 860px"
            className="h-[320px] w-full rounded-xl bg-[#0f1628] object-contain sm:h-[420px] md:h-[560px]"
          />
        </figure>
      </div>
    </section>
  );
}


