import Link from "next/link";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: string;
  variant?: Variant;
};

export function LinkButton({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${base} bg-[var(--accent)] text-white hover:bg-[var(--accent-2)]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)]`}
    >
      {children}
    </Link>
  );
}
