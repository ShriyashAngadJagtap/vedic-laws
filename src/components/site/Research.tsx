import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { RESEARCH } from "./data";
import { SectionHeading } from "./Shared";

const TYPES = ["All", "Book", "Paper", "Case Study"] as const;

export function Research() {
  const [filter, setFilter] = useState<(typeof TYPES)[number]>("All");
  const items = filter === "All" ? RESEARCH : RESEARCH.filter((r) => r.type === filter);

  return (
    <section id="research" className="relative py-28 md:py-36 bg-[color-mix(in_oklab,var(--sand)_55%,var(--ivory))]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Four decades of"
          italic="scholarship."
          subtitle="Selected works, papers and case studies from an ongoing life of research."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-1">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`px-5 py-2 text-[0.7rem] uppercase tracking-[0.16em] transition-all ${
                filter === t
                  ? "bg-[var(--forest)] text-[var(--ivory)]"
                  : "text-[var(--charcoal)]/55 hover:text-[var(--forest-deep)]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-px bg-[color-mix(in_oklab,var(--forest)_16%,transparent)] md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <article key={r.slug} className="group bg-[var(--ivory)] p-8 transition-colors hover:bg-[var(--chalk)]">
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow">{r.type}</span>
                <span className="text-right text-[0.7rem] text-[var(--charcoal)]/45">{r.meta}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl leading-tight text-[var(--forest-deep)]">{r.title}</h3>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--charcoal)]/60">{r.excerpt}</p>
              <div className="mt-6 h-px w-full bg-[color-mix(in_oklab,var(--charcoal)_10%,transparent)]" />
              <Link
                to="/research/$slug"
                params={{ slug: r.slug }}
                className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/70 transition-colors hover:text-[var(--gold-deep)]"
              >
                Read <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
