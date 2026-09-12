import { salesLocations } from "@/lib/company";

export default function SalesLocationsCompact() {
  return (
    <aside className="mt-8 border-t border-[var(--line)] pt-6" aria-labelledby="pontos-de-venda">
      <p id="pontos-de-venda" className="eyebrow">
        Onde comprar
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {salesLocations.map((location) => (
          <article key={location.name} className="rounded-xl border border-[var(--line)] bg-[rgba(201,167,91,0.06)] p-4">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-[var(--ink)]">{location.name}</h2>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{location.shortAddress}</p>
            <a
              className="mt-3 inline-block text-sm font-semibold text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4"
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no mapa
            </a>
          </article>
        ))}
      </div>
    </aside>
  );
}
