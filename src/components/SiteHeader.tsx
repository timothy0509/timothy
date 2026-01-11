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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(5,6,8,0.65)] backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="#home"
            className="text-sm font-medium tracking-tight text-[var(--text)]"
          >
            Timothy Wong
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-1 sm:flex">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "relative rounded-full px-3 py-2 text-sm transition-colors " +
                    (isActive
                      ? "text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]")
                  }
                >
                  {isActive ? (
                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[rgba(163,183,255,0.10)] shadow-[0_0_0_1px_rgba(163,183,255,0.25),0_8px_30px_rgba(163,183,255,0.12)]" />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="#contact"
            className="rounded-full border border-[rgba(163,183,255,0.30)] bg-[rgba(163,183,255,0.10)] px-4 py-2 text-sm text-[var(--text)] transition-colors hover:bg-[rgba(163,183,255,0.16)]"
          >
            Let’s connect
          </Link>
        </div>
      </Container>
    </header>
  );
}
