import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="glass border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {site.name}
          </p>

          <div className="flex gap-5">
            <Link
              href={site.links.github}
              className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              href={site.links.linkedin}
              className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href={site.links.instagram}
              className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
