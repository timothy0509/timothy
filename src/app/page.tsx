import Link from "next/link";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { ProductTile } from "@/components/ProductTile";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section id="home" className="scroll-mt-24">
        <Container>
          <div className="relative py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-8 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[var(--accent-glass)] blur-[90px]" />
              <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[var(--glass-border)] blur-[70px]" />
            </div>

            <div className="grid gap-12">
              <div className="page-reveal grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="grid gap-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      "Information Technology",
                      "Systems",
                      "Economics",
                      "Accounting",
                    ].map((tag) => (
<span
                         key={tag}
                         className="glass-pill rounded-full px-3 py-1 text-xs font-medium tracking-tight text-[var(--muted)]"
                       >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="heading-display text-pretty text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl">
                    Designing dependable systems with a tech-first lens.
                  </h1>

                  <p className="max-w-2xl text-pretty text-[15px] leading-7 text-[var(--muted)] sm:text-base">
                    I’m {site.name}, a student in Hong Kong focused on Information
                    Technology. I build practical systems and user-facing tools,
                    applying economics and accounting as decision-making context.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <LinkButton href="#projects">View projects</LinkButton>
                    <LinkButton href="#contact" variant="secondary">
                      Contact
                    </LinkButton>
                  </div>
                </div>

                <div className="tech-grid hero-band glass-card rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-xs font-medium uppercase text-[var(--muted)]">
                      hk tech ledger
                    </p>
                    <p className="text-xs font-medium text-[var(--muted)]">
                      updated · 2026
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[var(--muted)]">
<span className="glass-pill inline-flex h-6 items-center rounded-full px-3">
                       Hong Kong
                     </span>
                     <span className="glass-pill inline-flex h-6 items-center rounded-full px-3">
                       IT · Economics · Accounting
                     </span>
                  </div>
                  <div className="mt-6 grid gap-4">
                    <div className="ledger-lines">
                      <p className="text-sm font-semibold text-[var(--text)]">
                        Focus
                      </p>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        Systems design · Web apps · Reliability
                      </p>
                    </div>
                    <div className="ledger-lines">
                      <p className="text-sm font-semibold text-[var(--text)]">
                        Built With
                      </p>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        Next.js · API integrations · Infrastructure
                      </p>
                    </div>
                    <div className="ledger-lines">
                      <p className="text-sm font-semibold text-[var(--text)]">
                        Context
                      </p>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        Economics and accounting for practical decisions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <Card
                  title="Tech-forward profile"
                  subtitle="Systems, interfaces, delivery"
                >
                  IT-first work focused on building tools that are reliable,
                  usable, and grounded in real constraints.
                </Card>
                <Card title="Strategic + technical" subtitle="How I work">
                  I model the problem, prototype quickly, then refine into
                  dependable systems that people actually use.
                </Card>
                <Card title="Applied outcomes" subtitle="Projects">
                  Self-directed projects that prioritize data integrity,
                  performance, and clean user experience.
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section id="about" eyebrow="About" title="A multidisciplinary foundation">
        <div className="grid gap-6">
          <p>
            My academic path centers on Information Technology, with Economics
            and Accounting as supporting disciplines. That blend helps me make
            grounded technical decisions that map to real-world constraints.
          </p>
          <p>
            I approach challenges technically (building systems and
            implementing solutions) and strategically (considering context,
            tradeoffs, and outcomes).
          </p>

          <div className="glass-card grid gap-4 rounded-2xl p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Signal 01
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text)]">
                  Analytical rigor
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Economics and accounting framing to reason clearly and justify
                  decisions.
                </p>
              </div>
              <div className="glass-card grid gap-4 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Signal 02
                </p>
                <p className="mt-2 text-sm font-medium text-[var(--text)]">
                  Practical application
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Building user-centric systems that solve concrete problems.
                </p>
              </div>
            </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected work">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            title="Hong Kong Public Transport Real‑Time ETA"
            subtitle="KMB buses • MTR • Light Rail"
            className="lg:col-span-2"
          >
            <p>
              Built a web application that aggregates real-time estimated arrival
              information across multiple transport services and presents it in a
              clean, accessible experience.
            </p>
            <ul className="mt-3 list-disc pl-5">
              <li>KMB buses</li>
              <li>MTR</li>
              <li>Light Rail</li>
            </ul>
          </Card>

          <Card title="Minecraft server" subtitle="Repurpose + management">
            Repurposed and upgraded a 10-year-old desktop all-in-one PC into a
            dedicated Minecraft server for friends—demonstrating troubleshooting,
            maintenance, and ongoing operational ownership.
          </Card>

          <Card
            title="Shared subscriptions"
            subtitle="Resource management"
            className="lg:col-span-3"
          >
            Manages shared subscriptions across streaming, music, and cloud
            services with a focus on cost optimization for friends and family.
          </Card>
        </div>
      </Section>

      <Section
        id="ctfs"
        eyebrow="CTFs"
        title="Cybersecurity CTF results"
      >
        <div className="grid gap-6">
          <p>
            Competing in the secondary school category with team Sing Yin Jockey
            Club, I focus on practical defense skills and consistent results.
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="CUHK CTF" subtitle="2025">
              5th place in the secondary school category.
            </Card>
            <Card title="HKCERT CTF" subtitle="2025">
              Gold award in the secondary school category.
            </Card>
            <Card title="HKUST Firebird CTF" subtitle="2026">
              7th place overall, 1st place in the secondary school category.
            </Card>
          </div>
        </div>
      </Section>

      <Section id="aspirations" eyebrow="Aspirations" title="Where I’m heading">
        <div className="grid gap-6">
          <p>
            I want to leverage my technical foundation and independent project
            experience to contribute in environments where technology drives
            innovation and efficiency.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Proactive learner",
                body: "I grow quickly by building, iterating, and staying curious.",
              },
              {
                title: "Problem-solver",
                body: "I enjoy producing clear solutions that work under constraints.",
              },
              {
                title: "Tangible outcomes",
                body: "I’m most motivated by systems that ship and provide value.",
              },
            ].map((item) => (
<div
                 key={item.title}
                 className="glass-card rounded-2xl p-5"
               >
                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                   Priority
                 </p>
                 <p className="mt-2 text-sm font-medium text-[var(--text)]">
                   {item.title}
                 </p>
                 <p className="mt-2 text-sm text-[var(--muted)]">{item.body}</p>
               </div>
            ))}
          </div>

          <p>
            I’m committed to continuous growth and to delivering systems that are
            simple, useful, and reliable.
          </p>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s connect">
        <div className="grid gap-10">
          <div className="grid gap-4 lg:grid-cols-3">
            <Card title="Email" subtitle="Fastest way to reach me">
<Link
                 href={`mailto:${site.email}`}
                 className="text-[var(--text)] underline decoration-[var(--accent-border)] underline-offset-4 hover:decoration-[var(--accent)]"
               >
                {site.email}
              </Link>
            </Card>

            <Card title="Social" subtitle="Profiles">
              <div className="flex flex-col gap-2">
                <Link
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text)] hover:underline"
                >
                  LinkedIn
                </Link>
                <Link
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text)] hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href={site.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text)] hover:underline"
                >
                  Instagram
                </Link>
              </div>
            </Card>

            <Card title="One sentence" subtitle="Quick summary">
              {site.description}
            </Card>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-xs font-medium uppercase text-[var(--muted)]">
                Websites
              </p>
              <span className="text-xs font-medium text-[var(--muted)]">hk stack</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <ProductTile
                name="TimoDrive"
                href="https://drive.hkjc.uk"
                description="Personal drive and file space."
              />
              <ProductTile
                name="TimoETA"
                href="https://eta.hkjc.uk"
                description="Hong Kong transport ETA viewer."
              />
              <ProductTile
                name="TimoForums"
                href="https://forums.hkjc.uk"
                description="Discussion and community forums."
              />
              <ProductTile
                name="TimoJournal"
                href="https://journal.hkjc.uk"
                description="Notes and journaling space."
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
