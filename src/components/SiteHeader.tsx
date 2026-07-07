"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { useActiveSection } from "@/components/useActiveSection";
import { sections, site } from "@/lib/site";

export function SiteHeader() {
  const active = useActiveSection(sections.map((s) => s.id));
  const navSections = sections.filter((item) => item.number !== null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] lg:hidden">
      <Container>
        <div className="flex h-14 items-center">
          <Link
            href="#home"
            className="heading-display text-base font-semibold tracking-tight text-[var(--text)]"
          >
            {site.name}
          </Link>
        </div>

        <nav
          className="-mx-5 flex gap-1 overflow-x-auto px-5 pb-px [scrollbar-width:none] sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Sections"
        >
          {navSections.map((item) => {
            const isActive = active === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={
                  "flex shrink-0 items-center gap-2 border-b-2 px-3 py-2.5 text-sm transition-colors " +
                  (isActive
                    ? "border-[var(--accent)] font-medium text-[var(--text)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--text)]")
                }
              >
                <span className="section-number">{item.number}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
