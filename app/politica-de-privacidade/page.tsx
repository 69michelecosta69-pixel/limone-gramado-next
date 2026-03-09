import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Limone Gramado",
  description: "Política de Privacidade da Limone Gramado para uso do site, formulário de contato e atendimento.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Legal</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Política de Privacidade</h1>

        <p className="text-[var(--muted)]">
          A Limone Gramado respeita sua privacidade e protege os dados pessoais informados neste site.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">1. Dados coletados</h2>
        <p className="text-[var(--muted)]">
          Podemos coletar nome, e-mail, telefone e mensagem quando você preenche o formulário de contato, além de
          dados técnicos básicos de navegação (como IP, navegador e páginas acessadas).
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">2. Finalidade do uso</h2>
        <p className="text-[var(--muted)]">
          Os dados são usados para responder solicitações, prestar atendimento comercial, melhorar a experiência do
          site e cumprir obrigações legais.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">3. Compartilhamento</h2>
        <p className="text-[var(--muted)]">
          Não comercializamos dados pessoais. O compartilhamento pode ocorrer apenas com provedores necessários para
          operação do site e atendimento (por exemplo, hospedagem, e-mail e formulário), sempre com medidas de
          segurança adequadas.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">4. Armazenamento e segurança</h2>
        <p className="text-[var(--muted)]">
          Adotamos medidas razoáveis de segurança para proteger os dados contra acesso não autorizado, alteração,
          divulgação ou destruição indevida.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">5. Seus direitos (LGPD)</h2>
        <p className="text-[var(--muted)]">
          Você pode solicitar confirmação de tratamento, acesso, correção, exclusão e outras medidas previstas na Lei
          Geral de Proteção de Dados (LGPD), conforme aplicável.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">6. Contato</h2>
        <p className="text-[var(--muted)]">
          Para assuntos de privacidade, entre em contato em <a className="text-[#e7d6a8]" href="mailto:info@limonegramado.com.br">info@limonegramado.com.br</a>.
        </p>

        <p className="mt-8 text-sm text-[var(--muted)]">Última atualização: 09/03/2026</p>
      </section>
    </main>
  );
}
