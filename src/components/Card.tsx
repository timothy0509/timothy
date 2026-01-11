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
        "group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_60px_rgba(0,0,0,0.40)] " +
        (className ?? "")
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(163,183,255,0.14)] blur-3xl" />
      </div>

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
