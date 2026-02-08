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
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:-translate-y-1 hover:border-[rgba(42,111,115,0.35)]"
    >
      <div className="pointer-events-none absolute left-6 top-6 h-px w-10 bg-[rgba(16,24,32,0.12)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-28 left-12 h-72 w-72 rounded-full bg-[rgba(42,111,115,0.16)] blur-3xl" />
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
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.7)] text-[var(--text)] transition-colors group-hover:border-[rgba(42,111,115,0.35)]">
          <span className="text-base leading-none">↗</span>
        </div>
      </div>

      <p className="relative mt-4 text-xs font-medium tracking-[0.16em] text-[rgba(42,111,115,0.75)]">
        {href.replace(/^https?:\/\//, "")}
      </p>
    </Link>
  );
}
