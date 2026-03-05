"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#produto", label: "Produto" },
  { href: "#historia", label: "Nossa História" },
  { href: "#eventos", label: "Eventos" },
  { href: "#como-servir", label: "Como servir" },
  { href: "#onde-encontrar", label: "Onde encontrar" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#0e1113e0] backdrop-blur">
      <div className="container-limone flex min-h-[74px] items-center justify-between gap-4">
        <a href="#inicio" className="inline-flex items-center gap-2" aria-label="Limone Gramado, voltar ao topo">
          <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#dfc286] to-[var(--gold)] font-[var(--font-heading)] text-xl text-[#3c2f05]">
            L
          </span>
          <span className="font-[var(--font-heading)] text-2xl">Limone Gramado</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--ink)]">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav id="mobile-nav" className="container-limone mb-3 grid gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-3 md:hidden" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
