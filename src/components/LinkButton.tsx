import Link from "next/link";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: string;
  variant?: Variant;
};

export function LinkButton({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} border border-[rgba(42,111,115,0.35)] bg-[rgba(42,111,115,0.12)] text-[var(--text)] shadow-[0_12px_32px_rgba(42,111,115,0.12)] hover:border-[rgba(42,111,115,0.5)] hover:bg-[rgba(42,111,115,0.2)]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-[var(--border)] bg-[rgba(255,255,255,0.6)] text-[var(--text)] hover:bg-[rgba(42,111,115,0.08)]`}
    >
      {children}
    </Link>
  );
}
