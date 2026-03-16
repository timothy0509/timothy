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
        className={`${base} glass-accent text-[var(--text)] shadow-[0_12px_32px_var(--accent-glass)] hover:border-[var(--accent-border-hover)] hover:bg-[var(--accent-glass-hover)]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} glass-pill text-[var(--text)] hover:bg-[var(--accent-glass)]`}
    >
      {children}
    </Link>
  );
}
