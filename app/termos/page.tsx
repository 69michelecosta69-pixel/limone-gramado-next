import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Limone Gramado",
  description: "Termos de uso do site Limone Gramado e condições gerais de contato e informações comerciais.",
  alternates: {
    canonical: "/termos",
  },
};

export default function TermosPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Legal</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Termos de Uso</h1>

        <p className="text-[var(--muted)]">
          Ao acessar este site, você concorda com os presentes Termos de Uso.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">1. Informações do site</h2>
        <p className="text-[var(--muted)]">
          O conteúdo disponibilizado tem finalidade informativa e comercial sobre os produtos e serviços da Limone
          Gramado, podendo ser atualizado sem aviso prévio.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">2. Propriedade intelectual</h2>
        <p className="text-[var(--muted)]">
          Textos, imagens, identidade visual e demais conteúdos deste site são de titularidade da Limone Gramado ou de
          seus licenciantes, sendo vedada reprodução sem autorização.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">3. Contato e atendimento</h2>
        <p className="text-[var(--muted)]">
          As solicitações enviadas pelos canais de contato serão tratadas em horário comercial, conforme disponibilidade
          da equipe.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">4. Limitação de responsabilidade</h2>
        <p className="text-[var(--muted)]">
          A Limone Gramado não se responsabiliza por indisponibilidades temporárias do site, falhas de terceiros ou uso
          inadequado das informações por parte do usuário.
        </p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">5. Informações da empresa</h2>
        <p className="text-[var(--muted)]">Razão/Nome: Limone Gramado</p>
        <p className="text-[var(--muted)]">CNPJ: em regularização</p>
        <p className="text-[var(--muted)]">E-mail: info@limonegramado.com.br</p>
        <p className="text-[var(--muted)]">Telefone: +55 (62) 98134-7722</p>

        <h2 className="mt-8 mb-2 font-[var(--font-heading)] text-2xl">6. Foro e legislação</h2>
        <p className="text-[var(--muted)]">
          Estes termos são regidos pela legislação brasileira. Eventuais controvérsias serão tratadas no foro
          competente, conforme a lei aplicável.
        </p>

        <p className="mt-8 text-sm text-[var(--muted)]">Última atualização: 09/03/2026</p>
      </section>
    </main>
  );
}
