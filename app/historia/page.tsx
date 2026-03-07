import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "História | Limone Gramado",
  description: "Conheça a história de Michele, nascido na Itália, e a tradição familiar que inspira o limoncello Limone Gramado.",
  alternates: {
    canonical: "/historia",
  },
};

export default function HistoriaPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Nossa História</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Da Itália para Gramado</h1>

        <p className="text-[var(--muted)]">
          Nasci na Itália e cresci em uma família grande, sempre reunida em volta de uma mesa cheia. Boas risadas e
          histórias nunca faltavam.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Desde pequeno aprendi com minha nonna que a comida não é apenas alimento — é carinho, tradição e tempo
          compartilhado com quem amamos.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Uma das lembranças mais vivas da minha infância são as viagens de trem para visitar meus avós, no sul da
          Itália. Durante o caminho, quando o trem se aproximava do mar, eu olhava pela janela e via as pessoas já
          nadando na água azul do Mediterrâneo, brilhando ao sol do verão italiano.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Aquele momento sempre trazia uma sensação de alegria e expectativa, porque eu sabia que logo chegaríamos à
          casa da minha avó, onde toda a família nos esperava.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          A mesa era grande, sempre cheia de gente, e depois das refeições tínhamos o hábito de saborear um copo de
          limoncello, servido com carinho e acompanhado de conversas que pareciam nunca terminar.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Com o tempo, essa memória de família virou inspiração. Decidi transformar aquela tradição em algo que pudesse
          compartilhar com outras pessoas.
        </p>

        <p className="mt-4 text-[var(--muted)]">Assim nasceu o Limone Gramado.</p>

        <p className="mt-4 text-[var(--muted)]">
          Um limoncello artesanal inspirado na tradição italiana, preparado com cuidado, paciência e respeito pelos
          sabores autênticos.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Hoje, cada garrafa carrega um pouco dessa história: o calor de uma mesa em família, a brisa do mar italiano
          e a alegria de compartilhar bons momentos.
        </p>

        <p className="mt-4 text-[var(--muted)]">De um coração italiano para Gramado.</p>

        <div className="mt-6">
          <Link href={`${siteUrl}/#historia`} className="btn-secondary">
            Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
