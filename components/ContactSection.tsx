"use client";

const WHATSAPP_LINK = "https://wa.me/5562981347722?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Limoncello%20Limone%20Gramado%20e%20disponibilidade%20para%20compra%2Fdegusta%C3%A7%C3%A3o%20em%20Gramado.";

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

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="btn-secondary" href="https://instagram.com/limonegramado" target="_blank" rel="noreferrer">
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
          <input type="hidden" name="_subject" value="Contato site Limone Gramado" />
          <input type="hidden" name="_captcha" value="false" />
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






