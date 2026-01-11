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
        className={`${base} border border-[rgba(163,183,255,0.30)] bg-[rgba(163,183,255,0.12)] text-[var(--text)] shadow-[0_10px_40px_rgba(163,183,255,0.12)] hover:border-[rgba(163,183,255,0.42)] hover:bg-[rgba(163,183,255,0.18)]`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--text)] hover:bg-[rgba(255,255,255,0.04)]`}
    >
      {children}
    </Link>
  );
}
