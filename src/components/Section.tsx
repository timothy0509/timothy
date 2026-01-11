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
        <div className="grid gap-8">
          <div className="grid gap-3">
            {eyebrow ? (
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
              {title}
            </h2>
          </div>
          <div className="max-w-3xl text-[15px] leading-7 text-[var(--muted)]">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
