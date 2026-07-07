import Link from "next/link";

import { LinkButton } from "@/components/LinkButton";
import { PageShell } from "@/components/PageShell";
import { ProjectEntry } from "@/components/ProjectEntry";
import { Section } from "@/components/Section";
import { projects, site } from "@/lib/site";

const ctfResults = [
  {
    event: "CUHK CTF",
    year: "2025",
    result: "5th place, secondary school category",
    highlight: true,
  },
  {
    event: "HKCERT CTF",
    year: "2025",
    result: "Gold award, secondary school category",
    highlight: true,
  },
  {
    event: "HKUST Firebird CTF",
    year: "2026",
    result: "7th overall, 1st in secondary school category",
    highlight: true,
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <PageShell>
        <section
          id="home"
          className="scroll-mt-[5.5rem] flex flex-col justify-center py-12 sm:py-20 lg:min-h-[70dvh] lg:scroll-mt-24 lg:py-28"
        >
          <div className="grid gap-6">
            <h1 className="text-display-xl text-[var(--text)]">{site.name}</h1>
            <p className="font-mono text-sm text-[var(--muted)]">
              IT · Hong Kong · Economics & Accounting
            </p>
            <div className="grid max-w-xl gap-4">
              <div className="h-0.5 w-12 bg-[var(--accent)]" />
              <p className="text-lead">
                I study Information Technology and build things I actually use
                — transport tools, servers, web apps. Economics and accounting
                help me think about tradeoffs, not just code.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <LinkButton href="#projects">View projects</LinkButton>
              <LinkButton href={`mailto:${site.email}`} variant="secondary">
                Email me
              </LinkButton>
            </div>
          </div>
        </section>

        <Section id="about" number="01" title="Background">
          <div className="grid gap-6">
            <p>
              My focus is Information Technology. I also study Economics and
              Accounting — they give me a way to weigh costs, constraints, and
              outcomes when I&apos;m building something.
            </p>
            <p>
              I like working on problems end to end: figure out what&apos;s
              needed, build a first version, then make it reliable enough that
              people can depend on it.
            </p>
            <dl className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  term: "Information Technology",
                  detail: "Systems, web, infrastructure",
                },
                { term: "Economics", detail: "Tradeoffs and decision-making" },
                { term: "Accounting", detail: "Cost and resource tracking" },
              ].map((item) => (
                <div key={item.term}>
                  <dt className="text-sm font-medium text-[var(--text)]">
                    {item.term}
                  </dt>
                  <dd className="mt-1 text-sm text-[var(--muted)]">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section
          id="projects"
          number="02"
          title="Selected work"
          variant="inset"
        >
          <div>
            {projects.map((project) => (
              <ProjectEntry key={project.title} {...project} />
            ))}
          </div>
        </Section>

        <Section
          id="ctfs"
          number="03"
          title="Cybersecurity competitions"
          variant="inset"
        >
          <div className="grid gap-6">
            <p>
              I compete in the secondary school category with team Sing Yin
              Jockey Club. CTFs are where I practice defense skills under time
              pressure.
            </p>
            <div className="sm:hidden">
              {ctfResults.map((row) => (
                <article
                  key={row.event}
                  className="border-b border-[var(--border)] py-4 last:border-b-0"
                >
                  <p className="font-medium text-[var(--text)]">{row.event}</p>
                  <p className="mt-1 font-mono text-xs text-[var(--muted)]">
                    {row.year}
                  </p>
                  <p
                    className={
                      row.highlight
                        ? "mt-2 text-sm font-medium text-[var(--text)]"
                        : "mt-2 text-sm text-[var(--muted)]"
                    }
                  >
                    {row.result}
                  </p>
                </article>
              ))}
            </div>
            <table className="hidden w-full text-left text-sm sm:table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="pb-2 pr-4 font-medium text-[var(--text)]">
                      Event
                    </th>
                    <th className="pb-2 pr-4 font-medium text-[var(--text)]">
                      Year
                    </th>
                    <th className="pb-2 font-medium text-[var(--text)]">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ctfResults.map((row) => (
                    <tr
                      key={row.event}
                      className="border-b border-[var(--border)]"
                    >
                      <td className="py-3 pr-4 text-[var(--text)]">
                        {row.event}
                      </td>
                      <td className="py-3 pr-4 text-[var(--muted)]">
                        {row.year}
                      </td>
                      <td
                        className={
                          row.highlight
                            ? "py-3 font-medium text-[var(--text)]"
                            : "py-3 text-[var(--muted)]"
                        }
                      >
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </Section>

        <Section id="aspirations" number="04" title={"Where I'm heading"}>
          <p>
            I want to keep building useful systems and get better at doing it in
            teams and organizations. Right now that means shipping personal
            projects, competing in CTFs, and learning how real infrastructure
            holds up over time. I&apos;m looking for environments where
            technical work has clear impact — not just slides about impact.
          </p>
        </Section>

        <Section
          id="contact"
          number="05"
          title="Get in touch"
          variant="compact"
        >
          <div className="grid gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Email</p>
                <Link
                  href={`mailto:${site.email}`}
                  className="link mt-1 inline-block text-sm"
                >
                  {site.email}
                </Link>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Social</p>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  <Link
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-sm"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-sm"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={site.links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-sm"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-[var(--text)]">Websites</p>
              <ul className="mt-2 flex flex-col gap-2">
                {site.websites.map((website) => (
                  <li key={website.url}>
                    <Link
                      href={website.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link inline-flex flex-wrap items-baseline gap-2 text-sm"
                    >
                      <span>{website.name}</span>
                      <span className="font-mono text-xs text-[var(--muted)]">
                        {website.url.replace(/^https?:\/\//, "")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </PageShell>
    </main>
  );
}
