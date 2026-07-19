import { SectionHeading } from "./Shared";

const POSTS = [
  { category: "Vedic Wisdom", title: "Swadhyaya: The forgotten habit of great leaders", excerpt: "Why the discipline of self-study is the quiet engine behind every enduring leader.", read: "6 min read" },
  { category: "Leadership", title: "Karma-centred decisions: acting well in an uncertain world", excerpt: "A framework for decisions when the outcome cannot be known, only the quality of the action.", read: "8 min read" },
  { category: "Education", title: "The teacher as a lamp: notes from thirty years in the classroom", excerpt: "Reflections on presence, pedagogy and the flame we are asked to protect.", read: "5 min read" },
  { category: "Personal Growth", title: "Tapa: choosing the hard, meaningful thing", excerpt: "How one small daily austerity can reshape a decade.", read: "7 min read" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="eyebrow">The Journal</span>
            </div>
            <h2 className="display text-4xl md:text-5xl">
              Essays on wisdom,
              <span className="mt-2 block italic-quote text-[var(--gold-deep)]">work and the way.</span>
            </h2>
          </div>
          <a href="#" className="btn-ghost self-start md:self-end">
            All essays →
          </a>
        </div>

        <div className="mt-16 grid gap-px bg-[color-mix(in_oklab,var(--forest)_14%,transparent)] md:grid-cols-2">
          {POSTS.map((p, i) => (
            <article
              key={p.title}
              className={`group bg-[var(--ivory)] p-10 transition-colors hover:bg-[var(--chalk)] ${i === 0 ? "md:row-span-2 md:p-14" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{p.category}</span>
                <span className="text-[0.7rem] text-[var(--charcoal)]/45">{p.read}</span>
              </div>
              <h3
                className={`mt-5 font-display leading-tight text-[var(--forest-deep)] ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}
              >
                {p.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--charcoal)]/70">{p.excerpt}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 story-link text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]"
              >
                Read essay →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
