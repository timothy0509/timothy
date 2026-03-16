import Link from "next/link";

export function ProductTile({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--glass-border-accent)]"
    >
      <div className="pointer-events-none absolute left-6 top-6 h-px w-10 bg-[var(--glass-border)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-28 left-12 h-72 w-72 rounded-full bg-[var(--accent-glass)] blur-3xl" />
      </div>

      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-tight text-[var(--text)]">
            {name}
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full glass-pill text-[var(--text)] transition-colors group-hover:border-[var(--glass-border-accent)]">
          <span className="text-base leading-none">↗</span>
        </div>
      </div>

      <p className="relative mt-4 text-xs font-medium tracking-[0.16em] text-[var(--accent)]">
        {href.replace(/^https?:\/\//, "")}
      </p>
    </Link>
  );
}
