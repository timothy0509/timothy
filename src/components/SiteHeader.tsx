"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { useActiveSection } from "@/components/useActiveSection";

const nav = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#aspirations", id: "aspirations", label: "Aspirations" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const active = useActiveSection(nav.map((n) => n.id));

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-[var(--border)]">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="#home"
            className="heading-display text-base font-semibold tracking-tight text-[var(--text)]"
          >
            Timothy Wong
          </Link>

          <nav className="glass-pill hidden items-center gap-1 rounded-full p-1 sm:flex">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "relative rounded-full px-3 py-2 text-sm font-medium transition-colors " +
                    (isActive
                      ? "text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]")
                  }
                >
                  {isActive ? (
                    <span className="glass-accent pointer-events-none absolute inset-0 -z-10 rounded-full shadow-[0_0_0_1px_var(--glass-border-accent),0_12px_32px_var(--accent-glass)]" />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#contact"
            className="glass-accent rounded-full px-4 py-2 text-sm font-medium text-[var(--text)] transition-all hover:border-[var(--accent-border-hover)] hover:bg-[var(--accent-glass-hover)]"
          >
            Let’s connect
          </Link>
        </div>
      </Container>
    </header>
  );
}
