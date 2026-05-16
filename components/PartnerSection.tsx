import { partnerWhatsappLink } from "@/lib/company";

const benefits = [
  {
    title: "Carta de drinks",
    text: "Receitas autorais com limoncello para bares, restaurantes e operações de hotelaria.",
  },
  {
    title: "Welcome drink",
    text: "Uma recepção memorável para hóspedes, casamentos, grupos e experiências especiais em Gramado.",
  },
  {
    title: "Eventos exclusivos",
    text: "Degustações, serviço especial e presença Limone para encontros gastronômicos e celebrações.",
  },
  {
    title: "Experiência local",
    text: "Um produto artesanal de Gramado que agrega história, origem e valor percebido ao atendimento.",
  },
];

export default function PartnerSection() {
  return (
    <section id="parcerias" className="section-spacing border-y border-[var(--line)] bg-[rgba(201,167,91,0.055)]">
      <div className="container-limone">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="eyebrow">Para hotéis e restaurantes</p>
            <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">
              Uma experiência italiana para seus clientes
            </h2>
            <p className="max-w-2xl text-[var(--muted)]">
              O Limone Gramado ajuda hotéis, restaurantes e eventos a criarem momentos de hospitalidade com mais
              identidade: carta de drinks, welcome drink, degustações e ações exclusivas.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <article key={item.title} className="surface-card p-5">
                <h3 className="mb-2 font-[var(--font-heading)] text-2xl font-semibold text-[#f6dfab]">{item.title}</h3>
                <p className="text-sm text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.16em] text-[#f0ddb1]">
            Solicite uma proposta de parceria para o seu hotel, restaurante ou evento.
          </p>
          <a className="btn-primary md:min-w-[260px]" href={partnerWhatsappLink} target="_blank" rel="noreferrer">
            Proposta de parceria
          </a>
        </div>
      </div>
    </section>
  );
}
