import Image from "next/image";
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

const steps = [
  "Entendemos o perfil do seu hotel, restaurante ou evento.",
  "Sugerimos drinks, welcome drink, degustação ou ação especial.",
  "Criamos uma proposta simples, personalizada e pronta para apresentar à equipe.",
  "Alinhamos visita, serviço ou carta de drinks conforme a operação.",
];

const drinkIdeas = [
  {
    name: "Limone Spritz",
    description: "Limoncello, espumante, água com gás e limão siciliano.",
    fit: "Ideal para happy hour, terraço e recepção de hóspedes.",
  },
  {
    name: "Serra Lemon",
    description: "Limoncello, tônica, hortelã e gelo em copo alto.",
    fit: "Refrescante para restaurante, piscina e eventos diurnos.",
  },
  {
    name: "Welcome Limone",
    description: "Dose gelada de limoncello servida em taça pequena.",
    fit: "Perfeito como boas-vindas em hotéis, grupos e casamentos.",
  },
  {
    name: "Gramado Sunset",
    description: "Limoncello, cítricos, frutas amarelas e finalização aromática.",
    fit: "Uma assinatura visual para carta de drinks e eventos exclusivos.",
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

        <figure className="surface-card mt-10 overflow-hidden p-2">
          <Image
            src="/assets/parcerias-welcome-drink.png"
            alt="Welcome drink com limoncello para recepção em hotéis"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 92vw, 1120px"
            className="h-[360px] w-full rounded-xl bg-[#0f1628] object-cover object-[center_62%] sm:h-[440px] md:h-[520px]"
          />
        </figure>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <figure className="surface-card overflow-hidden p-2">
            <Image
              src="/assets/parcerias-degustacao-evento.png"
              alt="Degustação de limoncello para eventos e experiências gastronômicas"
              width={1024}
              height={1536}
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 540px"
              className="h-[340px] w-full rounded-xl bg-[#0f1628] object-cover object-[center_58%] sm:h-[420px] md:h-[500px]"
            />
          </figure>

          <div className="flex flex-col justify-center border-y border-[var(--line)] py-8 md:py-10">
            <p className="eyebrow">Eventos e degustações</p>
            <h3 className="mb-4 font-[var(--font-heading)] text-3xl font-semibold md:text-5xl">
              Um ritual de prova para encantar convidados
            </h3>
            <p className="text-[var(--muted)]">
              Para lançamentos, jantares especiais, casamentos e ações de relacionamento, o Limone pode entrar como
              degustação guiada, finalização de menu ou experiência exclusiva para convidados.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h3 className="mb-4 font-[var(--font-heading)] text-3xl font-semibold md:text-5xl">
              Da ideia à experiência no seu espaço
            </h3>
            <ol className="grid gap-3">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 border-b border-[var(--line)] pb-3 text-[var(--muted)] last:border-b-0">
                  <span className="mt-1 inline-grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[rgba(201,167,91,0.12)] text-sm font-semibold text-[#f6dfab]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <figure className="surface-card mt-6 overflow-hidden p-2">
              <Image
                src="/assets/parcerias-drinks.png"
                alt="Drinks com limoncello para carta de hotéis e restaurantes"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 92vw, (max-width: 1280px) 44vw, 520px"
                className="h-[360px] w-full rounded-xl bg-[#0f1628] object-cover sm:h-[440px] md:h-[520px]"
              />
            </figure>
          </div>

          <div>
            <p className="eyebrow">Sugestões para carta</p>
            <h3 className="mb-4 font-[var(--font-heading)] text-3xl font-semibold md:text-5xl">
              Drinks prontos para inspirar a parceria
            </h3>
            <div className="mb-5 grid gap-4 sm:grid-cols-3">
              <figure className="surface-card overflow-hidden p-2">
                <Image
                  src="/assets/parcerias-limone-spritz.png"
                  alt="Limone Spritz em mesa de restaurante"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 16vw, 210px"
                  className="h-[320px] w-full rounded-xl bg-[#0f1628] object-cover object-[center_48%] sm:h-[360px]"
                />
              </figure>
              <figure className="surface-card overflow-hidden p-2">
                <Image
                  src="/assets/parcerias-serra-lemon.png"
                  alt="Serra Lemon com limão e hortelã para carta de drinks"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 16vw, 210px"
                  className="h-[320px] w-full rounded-xl bg-[#0f1628] object-cover object-[center_50%] sm:h-[360px]"
                />
              </figure>
              <figure className="surface-card overflow-hidden p-2">
                <Image
                  src="/assets/parcerias-gramado-sunset.png"
                  alt="Gramado Sunset com tons cítricos para carta de drinks"
                  width={1024}
                  height={1536}
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 16vw, 210px"
                  className="h-[320px] w-full rounded-xl bg-[#0f1628] object-cover object-[center_50%] sm:h-[360px]"
                />
              </figure>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {drinkIdeas.map((drink) => (
                <article key={drink.name} className="surface-card p-5">
                  <h4 className="mb-2 font-[var(--font-heading)] text-2xl font-semibold text-[#f6dfab]">{drink.name}</h4>
                  <p className="text-sm text-[var(--ink)]">{drink.description}</p>
                  <p className="mt-3 border-t border-[var(--line)] pt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {drink.fit}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.16em] text-[#f0ddb1]">
            Quer adaptar uma receita ou experiência para o seu hotel, restaurante ou evento?
          </p>
          <a className="btn-primary md:min-w-[260px]" href={partnerWhatsappLink} target="_blank" rel="noreferrer">
            Proposta de parceria
          </a>
        </div>
      </div>
    </section>
  );
}
