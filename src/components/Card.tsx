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
        "glass-card group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[var(--glass-shadow-hover)] " +
        (className ?? "")
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent-glass)] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute right-5 top-5 h-2 w-2 rounded-full bg-[var(--accent)] opacity-60" />
      <div className="pointer-events-none absolute left-5 top-5 h-px w-10 bg-[var(--glass-border)]" />

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
