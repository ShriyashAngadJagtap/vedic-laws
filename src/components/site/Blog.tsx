import { Link } from "@tanstack/react-router";
import { JOURNAL_POSTS } from "./data";

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
          <Link to="/journal" className="btn-ghost self-start md:self-end">
            All essays →
          </Link>
        </div>

        <div className="mt-16 grid gap-px bg-[color-mix(in_oklab,var(--forest)_14%,transparent)] md:grid-cols-2">
          {JOURNAL_POSTS.map((p, i) => (
            <article
              key={p.slug}
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
              <Link
                to="/journal/$slug"
                params={{ slug: p.slug }}
                className="mt-6 inline-flex items-center gap-2 story-link text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]"
              >
                Read essay →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
