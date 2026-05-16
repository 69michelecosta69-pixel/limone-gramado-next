"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#produto", label: "Produto" },
  { href: "#parcerias", label: "Parcerias" },
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
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,13,27,0.88)] backdrop-blur-md">
      <div className="container-limone flex min-h-[74px] items-center justify-between gap-4">
        <a href="#inicio" className="inline-flex items-center gap-2" aria-label="Limone Gramado, voltar ao topo">
          <span className="inline-grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[radial-gradient(circle_at_30%_30%,#1a2e5a,#0e1b39)] font-[var(--font-heading)] text-xl text-[#e6cb8e]">
            L
          </span>
          <span className="font-[var(--font-heading)] text-[1.9rem] tracking-tight text-[#f2e7cc]">Limone Gramado</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-[13px] font-medium tracking-[0.01em] text-[var(--muted)] transition hover:bg-[rgba(201,167,91,0.08)] hover:text-[var(--ink)]"
            >
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
