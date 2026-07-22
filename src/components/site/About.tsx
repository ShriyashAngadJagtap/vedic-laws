import portrait from "@/assets/portrait.png";
import { SectionHeading } from "./Shared";

const TIMELINE = [
  { year: "Early Years", title: "The Seeker's Path", body: "Rooted in a family that revered learning, discipline and dharma. Studied classical texts alongside modern science." },
  { year: "Education", title: "Doctorate & Beyond", body: "Doctoral research in leadership and human development, integrating Indian philosophical traditions with contemporary practice." },
  { year: "Research", title: "100+ Papers", body: "Two decades of published research on Vedic leadership, education and holistic development across national and international journals." },
  { year: "Leadership", title: "20+ Years as Principal", body: "Led premier institutions to national recognition — building cultures of academic excellence and character formation." },
  { year: "Mentoring", title: "10,000+ Lives", body: "Guided students, scholars, founders and executives across four decades of teaching and one-to-one mentoring." },
  { year: "Today", title: "The Vedic Success System", body: "Founder of the Vedic Success System — a framework translating timeless wisdom into daily practice for modern leaders." },
];

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
                  boxShadow: "inset 0 -140px 100px -50px color-mix(in oklab, var(--forest-deep) 55%, transparent)",
                }}
              />
            </div>
            <blockquote className="mt-6 border-l-2 border-[var(--gold)] bg-[var(--chalk)] py-6 pl-6 pr-4">
              <p className="italic-quote text-2xl leading-snug text-[var(--forest-deep)]">
                "A teacher's work is not to fill a vessel but to kindle a flame — one that lasts a lifetime."
              </p>
              <footer className="mt-4 eyebrow text-[var(--charcoal)]/55">— Dr. Shrikant Kallurkar</footer>
            </blockquote>
          </div>

          <div>
            <SectionHeading
              eyebrow="The Journey"
              title="Four decades of teaching,"
              italic="mentoring, and quiet transformation."
              subtitle="From doctoral scholar to principal, from researcher to author, from teacher to trusted mentor — a life shaped by the discipline of Swadhyaya and the practice of Yadnya."
              center={false}
            />

            <ol className="relative mt-14 border-l border-[color-mix(in_oklab,var(--forest)_28%,transparent)] pl-8">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative mb-12 last:mb-0">
                  <span className="absolute -left-[41px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--ivory)] ring-1 ring-[color-mix(in_oklab,var(--forest)_30%,transparent)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                  </span>
                  <div className="eyebrow">{t.year}</div>
                  <h3 className="mt-2 font-display text-2xl text-[var(--forest-deep)]">{t.title}</h3>
                  <p className="mt-2 leading-relaxed text-[var(--charcoal)]/75">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
