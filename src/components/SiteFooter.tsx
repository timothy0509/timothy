import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col gap-3 py-10 sm:flex-row sm:items-center sm:justify-between">
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
