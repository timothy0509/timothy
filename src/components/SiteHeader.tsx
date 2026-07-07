"use client";

import Link from "next/link";

import { Container } from "@/components/Container";
import { useActiveSection } from "@/components/useActiveSection";
import { sections, site } from "@/lib/site";

export function SiteHeader() {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] lg:hidden">
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            href="#home"
            className="heading-display text-base font-semibold tracking-tight text-[var(--text)]"
          >
            {site.name}
          </Link>

          <details className="group relative">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-[var(--border)] text-[var(--text)] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4.5h14M2 9h14M2 13.5h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </summary>

            <nav className="absolute right-0 top-full z-50 mt-2 min-w-44 rounded-md border border-[var(--border)] bg-[var(--surface)] py-2 shadow-sm">
              {sections.map((item) => {
                const isActive = active === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={
                      "block px-4 py-2 text-sm transition-colors " +
                      (isActive
                        ? "font-medium text-[var(--text)]"
                        : "text-[var(--muted)] hover:text-[var(--text)]")
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
