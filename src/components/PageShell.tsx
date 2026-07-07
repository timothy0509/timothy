"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { useActiveSection } from "@/components/useActiveSection";
import { sections, site } from "@/lib/site";

export function PageShell({ children }: { children: ReactNode }) {
  const sectionIds = sections.map((s) => s.id);
  const active = useActiveSection(sectionIds);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
      <aside className="hidden lg:block">
        <div className="sticky top-24 py-8">
          <Link
            href="#home"
            className="heading-display block text-base font-semibold tracking-tight text-[var(--text)]"
          >
            {site.name}
          </Link>

          <nav className="mt-8 flex flex-col gap-1">
            {sections
              .filter((item) => item.number !== null)
              .map((item) => {
                const isActive = active === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={
                      "flex items-baseline gap-3 border-l-2 py-1.5 pl-3 text-sm transition-colors " +
                      (isActive
                        ? "border-[var(--accent)] text-[var(--text)]"
                        : "border-transparent text-[var(--muted)] hover:text-[var(--text)]")
                    }
                  >
                    <span className="section-number">{item.number}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
          </nav>
        </div>
      </aside>

      <div className="min-w-0">{children}</div>
    </div>
  );
}
