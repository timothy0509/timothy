import type { ReactNode } from "react";

type SectionVariant = "default" | "inset" | "compact";

export function Section({
  id,
  number,
  title,
  variant = "default",
  children,
}: {
  id?: string;
  number?: string;
  title: string;
  variant?: SectionVariant;
  children: ReactNode;
}) {
  const spacing =
    variant === "compact" ? "py-12 sm:py-16" : "py-20 sm:py-28";

  const inner = (
    <div className="grid gap-6">
      <div className="grid gap-2">
        {number ? (
          <p className="section-number">{number}</p>
        ) : null}
        <h2 className="heading-display text-pretty text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          {title}
        </h2>
      </div>
      {variant !== "compact" ? <hr className="rule" /> : null}
      <div className="text-prose text-[var(--muted)]">{children}</div>
    </div>
  );

  if (variant === "inset") {
    return (
      <section id={id} className={`scroll-mt-24 ${spacing}`}>
        <div className="-mx-5 bg-[var(--surface-inset)] px-5 py-10 sm:-mx-8 sm:px-8 sm:py-12">
          {inner}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={`scroll-mt-24 ${spacing}`}>
      {inner}
    </section>
  );
}
