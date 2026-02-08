import type { ReactNode } from "react";

export function Card({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_0_0_1px_rgba(16,24,32,0.02),0_18px_40px_rgba(16,24,32,0.08)] transition-transform duration-300 hover:-translate-y-1 " +
        (className ?? "")
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(42,111,115,0.16)] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute right-5 top-5 h-2 w-2 rounded-full bg-[var(--accent)] opacity-60" />
      <div className="pointer-events-none absolute left-5 top-5 h-px w-10 bg-[rgba(16,24,32,0.12)]" />

      <div className="relative flex flex-col gap-1">
        <h3 className="text-base font-semibold tracking-tight text-[var(--text)]">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-sm text-[var(--muted)]">{subtitle}</p>
        ) : null}
      </div>

      <div className="relative mt-4 text-[15px] leading-7 text-[var(--muted)]">
        {children}
      </div>
    </div>
  );
}
