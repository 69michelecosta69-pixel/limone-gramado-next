import Image from "next/image";
import { salesLocations } from "@/lib/company";

export default function WhereToFindSection() {
  return (
    <section id="onde-encontrar" className="section-spacing">
      <div className="container-limone grid items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0">
          <p className="eyebrow">Onde encontrar</p>
          <h2 className="mb-4 font-[var(--font-heading)] text-4xl font-semibold md:text-6xl">
            Encontre o LIMONE GRAMADO
          </h2>
          <p className="mb-6 max-w-3xl text-[var(--muted)]">
            Compre o seu LIMONE GRAMADO nos nossos pontos parceiros em Várzea Grande, Gramado/RS.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {salesLocations.map((location) => (
              <article key={location.name} className="surface-card flex min-h-[220px] flex-col p-6">
                <h3 className="mb-2 break-words font-[var(--font-heading)] text-2xl leading-tight lg:text-3xl">
                  {location.name}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{location.fullAddress}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{location.availability}</p>
                <a
                  className="mt-auto pt-4 text-sm font-semibold text-[var(--gold)] underline decoration-[var(--gold)]/40 underline-offset-4 transition hover:decoration-[var(--gold)]"
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir no mapa
                </a>
              </article>
            ))}
          </div>
        </div>

        <figure className="surface-card w-full overflow-hidden p-2 lg:justify-self-end lg:max-w-[720px]">
          <Image
            src="/assets/gramado-atmosfera-wm.jpg"
            alt="Atmosfera de Gramado"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 720px"
            className="h-[320px] w-full rounded-xl bg-[#0f1628] object-contain sm:h-[420px] md:h-[500px]"
          />
          <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Gramado, Serra Gaúcha · inspiração e origem da marca
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
