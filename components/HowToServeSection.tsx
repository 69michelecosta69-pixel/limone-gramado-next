import Image from "next/image";

const tips = [
  "Sirva o limoncello bem gelado",
  "Em um pequeno copo, após a refeição",
  "Ideal entre -8°C e -4°C",
  "Também pode ser base para drinks leves",
];

export default function HowToServeSection() {
  return (
    <section id="como-servir" className="section-spacing">
      <div className="container-limone grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
        <div className="surface-card p-6 md:p-8">
          <p className="eyebrow">Como servir</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Como servir</h2>
          <p className="mb-6 max-w-2xl text-[var(--muted)]">
            Sirva o Limoncello bem gelado, em um pequeno copo, após a refeição.
          </p>
          <ul className="grid gap-3 text-[var(--muted)] sm:grid-cols-2">
            {tips.map((tip) => (
              <li key={tip} className="rounded-xl border border-[var(--line)] bg-[#13171a] px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <figure className="surface-card w-full overflow-hidden p-2 md:justify-self-end md:max-w-[720px]">
          <Image
            src="/assets/como-servir.jpg"
            alt="Limoncello bem gelado servido em pequeno copo"
            width={760}
            height={1024}
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 720px"
            className="h-[320px] w-full rounded-xl bg-[#0f1628] object-contain sm:h-[420px] md:h-[520px]"
          />
        </figure>
      </div>
    </section>
  );
}
