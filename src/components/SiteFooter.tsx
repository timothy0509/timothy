import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {site.name}
          </p>

          <Link
            href={site.links.github}
            className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </div>
      </Container>
    </footer>
  );
}
