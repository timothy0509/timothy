import Link from "next/link";

import type { ProjectEntry as ProjectEntryType } from "@/lib/site";

export function ProjectEntry({
  title,
  year,
  tags,
  subtitle,
  description,
  href,
}: ProjectEntryType) {
  const category = tags[0] ?? "";
  const meta = category ? `${year} · ${category}` : year;

  const titleContent = href ? (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link font-semibold text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
    >
      {title}
    </Link>
  ) : (
    <span className="font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
      {title}
    </span>
  );

  return (
    <article className="group border-b border-[var(--border)] py-6 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base tracking-tight">{titleContent}</h3>
        <p className="shrink-0 font-mono text-xs text-[var(--muted)]">{meta}</p>
      </div>

      {subtitle ? (
        <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
      ) : null}

      <p className="mt-3 text-prose text-[var(--muted)]">{description}</p>

      {href ? (
        <p className="mt-2">
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="link font-mono text-xs"
          >
            {href.replace(/^https?:\/\//, "")} ↗
          </Link>
        </p>
      ) : null}
    </article>
  );
}
