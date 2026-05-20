import Image from "next/image";
import { whatsappLink } from "@/lib/company";

export default function ContactSection() {
  return (
    <section id="contato" className="section-spacing">
      <div className="container-limone grid gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Fale conosco</h2>
          <p className="text-[var(--muted)]">
            Quer saber mais sobre o Limone Gramado ou receber novidades sobre degustações e eventos? Entre em contato
            conosco.
          </p>
          <p className="mt-3 text-sm text-[#e5cf97]">Resposta em até 24 horas úteis.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="btn-secondary" href="https://instagram.com/limone_gramado" target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>

        <form
          action="https://formsubmit.co/32f3485ad8208f3fe295002ef1f321a2"
          method="POST"
          className="surface-card grid gap-3 p-6"
          aria-label="Formulário de contato"
        >
          <div className="mb-2 flex items-center gap-4 border-b border-[var(--line)] pb-4">
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[rgba(236,215,165,0.42)] bg-black shadow-[0_0_24px_rgba(201,167,91,0.20)]">
              <Image
                src="/assets/limone-logo-monogram.png"
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <span className="grid">
              <span className="font-[var(--font-heading)] text-2xl font-semibold text-[#f6dfab]">Limone Gramado</span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                Atendimento e parcerias
              </span>
            </span>
          </div>
          <input type="hidden" name="_subject" value="Contato site Limone Gramado" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.limonegramado.com.br/contato?enviado=1" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="text-sm font-semibold" htmlFor="nome">Nome</label>
          <input id="nome" name="nome" required className="min-h-11 rounded-xl border border-[var(--line)] bg-[#12161a] px-3" />

          <label className="text-sm font-semibold" htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" required className="min-h-11 rounded-xl border border-[var(--line)] bg-[#12161a] px-3" />

          <label className="text-sm font-semibold" htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={5} required className="rounded-xl border border-[var(--line)] bg-[#12161a] px-3 py-2" />

          <button type="submit" className="btn-primary mt-2">Enviar contato</button>
        </form>
      </div>
    </section>
  );
}


