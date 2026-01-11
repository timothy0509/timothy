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
              <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(163,183,255,0.14)] blur-3xl" />
              <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[rgba(255,255,255,0.06)] blur-3xl" />
            </div>

            <div className="grid gap-10">
              <div className="grid gap-5">
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "Finance",
                    "Economics",
                    "Information Technology",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-3 py-1 text-xs font-medium tracking-tight text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-pretty text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl">
                  Building practical, user-centric systems.
                </h1>

                <p className="max-w-2xl text-pretty text-[15px] leading-7 text-[var(--muted)] sm:text-base">
                  I’m {site.name}, a multidisciplinary student with a focus on
                  applying technical solutions to real-world problems—combining
                  analytical rigor with hands-on implementation.
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <LinkButton href="#projects">View projects</LinkButton>
                  <LinkButton href="#contact" variant="secondary">
                    Contact
                  </LinkButton>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <Card
                  title="A professional profile"
                  subtitle="Finance, Economics, Technology"
                >
                  A multidisciplinary foundation bridging business context and
                  practical implementation.
                </Card>
                <Card title="Strategic + technical" subtitle="How I work">
                  I think about tradeoffs and outcomes, then build systems that
                  are simple to use and reliable.
                </Card>
                <Card title="Impactful delivery" subtitle="Hands-on projects">
                  Self-directed work showcasing resourcefulness, usability focus,
                  and tangible results.
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section id="about" eyebrow="About" title="A multidisciplinary foundation">
        <div className="grid gap-6">
          <p>
            My academic path blends Finance and Economics with Information
            Technology. That combination gives me a perspective for work where
            technology intersects with business and resource management.
          </p>
          <p>
            I approach challenges both technically (building systems and
            implementing solutions) and strategically (considering context,
            tradeoffs, and outcomes).
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5">
              <p className="text-sm font-medium text-[var(--text)]">
                Analytical rigor
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Finance & economics framing to reason clearly and make decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5">
              <p className="text-sm font-medium text-[var(--text)]">
                Practical application
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Implementing user-centric systems that solve concrete problems.
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
                className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5"
              >
                <p className="text-sm font-medium text-[var(--text)]">
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
                className="text-[var(--text)] underline decoration-white/20 underline-offset-4 hover:decoration-white/40"
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

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Websites
            </p>
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
