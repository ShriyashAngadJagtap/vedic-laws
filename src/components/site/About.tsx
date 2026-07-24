import portrait from "@/assets/portrait.png";
import { FOUNDER } from "./data";
import { GoldDivider, SectionHeading } from "./Shared";

function SubHead({ children }: { children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-6 bg-[var(--gold)]" />
      <h3 className="eyebrow text-[var(--forest-deep)]">{children}</h3>
    </div>
  );
}

function DashList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[var(--charcoal)]/80">
          <span className="mt-2 h-1 w-3 shrink-0 bg-[var(--gold)]" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative lg:sticky lg:top-32">
            <div className="relative overflow-hidden">
              <img
                src={portrait}
                alt="Dr. Shrikant Kallurkar"
                loading="lazy"
                width={912}
                height={1200}
                className="w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  boxShadow:
                    "inset 0 -140px 100px -50px color-mix(in oklab, var(--forest-deep) 55%, transparent)",
                }}
              />
            </div>
            <blockquote className="mt-6 border-l-2 border-[var(--gold)] bg-[var(--chalk)] py-6 pl-6 pr-4">
              <p className="italic-quote text-2xl leading-snug text-[var(--forest-deep)]">
                “{FOUNDER.motto}”
              </p>
              <footer className="mt-4 eyebrow text-[var(--charcoal)]/55">
                — {FOUNDER.name}
              </footer>
            </blockquote>
          </div>

          <div>
            <SectionHeading
              eyebrow="The Founder"
              title={FOUNDER.name}
              italic="Forty-five years of teaching, research, and conscious leadership."
              subtitle={FOUNDER.roles}
              center={false}
            />

            <div className="mt-8 space-y-5 max-w-2xl">
              {FOUNDER.bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-[var(--charcoal)]/75 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14">
              <SubHead>Educational Qualifications</SubHead>
              <ul className="grid gap-5">
                {FOUNDER.education.map((item) => (
                  <li key={item.degree}>
                    <div className="font-display text-xl text-[var(--forest-deep)]">
                      {item.degree}
                    </div>
                    <p className="mt-1 text-[var(--charcoal)]/70">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <SubHead>Leadership Positions</SubHead>
              <DashList items={FOUNDER.leadership} />
            </div>

            <div className="mt-14">
              <SubHead>Areas of Expertise</SubHead>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {FOUNDER.expertise.map((area, i) => (
                  <li key={area} className="text-[var(--charcoal)]/80">
                    <span>{area}</span>
                    {i < FOUNDER.expertise.length - 1 && (
                      <span className="ml-2 text-[var(--gold)]" aria-hidden>
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <GoldDivider className="my-20 md:my-28" />

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SubHead>Signature Programmes</SubHead>
            <div className="grid gap-8">
              {FOUNDER.programmes.map((programme) => (
                <article key={programme.title}>
                  <h4 className="font-display text-2xl text-[var(--forest-deep)]">
                    {programme.title}
                  </h4>
                  <p className="mt-2 leading-relaxed text-[var(--charcoal)]/75">
                    {programme.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            <div>
              <SubHead>Publications</SubHead>
              <p className="mb-3 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--charcoal)]/45">
                Books
              </p>
              <DashList items={FOUNDER.books} />
              <p className="mb-3 mt-8 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--charcoal)]/45">
                Forthcoming
              </p>
              <DashList items={FOUNDER.forthcoming} />
            </div>

            <div>
              <SubHead>Research Highlights</SubHead>
              <DashList items={FOUNDER.researchHighlights} />
            </div>

            <div>
              <SubHead>Professional Contributions</SubHead>
              <DashList items={FOUNDER.contributions} />
            </div>
          </div>
        </div>

        <GoldDivider className="my-20 md:my-28" />

        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Current Research"
            title="Bridging Indian Knowledge Systems"
            italic="with contemporary science and management."
            subtitle={FOUNDER.initiativesIntro}
          />

          <ul className="mt-12 flex flex-wrap justify-center gap-x-3 gap-y-3">
            {FOUNDER.initiatives.map((item) => (
              <li
                key={item}
                className="border-b border-[color-mix(in_oklab,var(--forest)_25%,transparent)] pb-1 font-display text-lg text-[var(--forest-deep)] md:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-[var(--charcoal)]/70">
            {FOUNDER.initiativesOutro}
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-3xl border-t border-[color-mix(in_oklab,var(--forest)_18%,transparent)] pt-14 text-center md:mt-28">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--gold)]" />
            <span className="eyebrow">Vision</span>
            <span className="h-px w-8 bg-[var(--gold)]" />
          </div>
          <p className="font-display text-2xl leading-snug text-[var(--forest-deep)] md:text-3xl">
            {FOUNDER.vision}
          </p>
          <p className="mt-8 italic-quote text-xl text-[var(--gold-deep)] md:text-2xl">
            {FOUNDER.motto}
          </p>
        </div>
      </div>
    </section>
  );
}
