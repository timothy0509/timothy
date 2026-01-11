import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main>
      <Container>
        <div className="py-20">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            404
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)]">
            Page not found
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-[var(--muted)]">
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface-2)]"
          >
            Back home
          </Link>
        </div>
      </Container>
    </main>
  );
}
