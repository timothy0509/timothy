import type { ReactNode } from "react";

import { Container } from "@/components/Container";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div className="relative flex flex-col gap-4 pl-6">
            <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="absolute left-[3px] top-6 h-[calc(100%-0.5rem)] w-px bg-[rgba(16,24,32,0.18)]" />
            {eyebrow ? (
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[rgba(16,24,32,0.25)]" />
                <p className="eyebrow text-xs font-medium uppercase text-[var(--muted)]">
                  {eyebrow}
                </p>
              </div>
            ) : null}
            <h2 className="heading-display text-pretty text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
              {title}
            </h2>
            <span className="h-px w-12 bg-[rgba(16,24,32,0.25)]" />
          </div>
          <div className="relative rounded-3xl border border-[var(--border)] bg-[var(--paper)] p-7 shadow-[0_30px_60px_rgba(16,24,32,0.08)]">
            <span className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full bg-[var(--accent)] opacity-60" />
            <div className="text-[15px] leading-7 text-[var(--muted)]">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
