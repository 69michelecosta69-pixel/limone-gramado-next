export default function HowToServeSection() {
  const tips = ["Sirva bem gelado", "Ideal após refeições", "Perfeito com sobremesas", "Também pode ser base para drinks leves"];

  return (
    <section id="como-servir" className="section-spacing">
      <div className="container-limone">
        <div className="surface-card p-6 md:p-8">
          <p className="eyebrow">Como servir</p>
          <h2 className="mb-6 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">Como servir</h2>
          <ul className="grid gap-3 text-[var(--muted)] sm:grid-cols-2">
            {tips.map((tip) => (
              <li key={tip} className="rounded-xl border border-[var(--line)] bg-[#13171a] px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
