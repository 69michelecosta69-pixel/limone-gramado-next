import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Historia | Limone Gramado",
  description: "Conheca a historia de Michele, nascido na Italia, e a tradicao familiar que inspira o limoncello Limone Gramado.",
  alternates: {
    canonical: "/historia",
  },
};

export default function HistoriaPage() {
  return (
    <main className="section-spacing">
      <section className="container-limone surface-card p-6 md:p-10">
        <p className="eyebrow">Nossa historia</p>
        <h1 className="mb-4 font-[var(--font-heading)] text-4xl md:text-6xl">Da Italia para Gramado</h1>

        <p className="text-[var(--muted)]">
          Nasci na Italia e cresci em uma familia grande, sempre reunida em volta de uma mesa cheia de comida,
          risadas e historias.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Desde pequeno aprendi com minha mae e minha avo que a comida nao e apenas alimento: e carinho, tradicao e
          tempo compartilhado com quem amamos.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Uma das lembrancas mais vivas da minha infancia sao as viagens de trem para visitar meus avos, no sul da
          Italia. Durante o caminho, quando o trem se aproximava do mar, eu olhava pela janela e via as pessoas ja
          nadando na agua azul do Mediterraneo. Aquele momento sempre trazia uma sensacao de alegria e expectativa,
          porque eu sabia que logo chegariamos a casa da minha avo, onde toda a familia nos esperava.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          A mesa era grande, sempre cheia de gente, e depois das refeicoes vinha um pequeno ritual: um copo de
          limoncello servido com carinho, acompanhado de conversas que pareciam nunca terminar.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Com o tempo, essa memoria de familia virou inspiracao. Decidi transformar aquela tradicao em algo que eu
          pudesse compartilhar com outras pessoas.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Assim nasceu o Limone Gramado: um limoncello artesanal inspirado na tradicao italiana, preparado com
          cuidado, paciencia e respeito pelos sabores autenticos.
        </p>

        <p className="mt-4 text-[var(--muted)]">
          Hoje, cada garrafa carrega um pouco dessa historia: o calor de uma mesa em familia, a brisa do mar italiano
          e a alegria de compartilhar bons momentos.
        </p>

        <p className="mt-4 text-[var(--muted)]">De um coracao italiano para Gramado.</p>

        <div className="mt-6">
          <Link href={`${siteUrl}/#historia`} className="btn-secondary">
            Voltar para a pagina inicial
          </Link>
        </div>
      </section>
    </main>
  );
}
