import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/Shared";
import { getResearchBySlug, RESEARCH } from "@/components/site/data";

export const Route = createFileRoute("/research/$slug")({
  loader: ({ params }) => {
    const article = getResearchBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — Dr. Shrikant Kallurkar`
          : "Publication — Dr. Shrikant Kallurkar",
      },
      {
        name: "description",
        content: loaderData?.excerpt ?? "Research and publications by Dr. Shrikant Kallurkar.",
      },
    ],
  }),
  component: ResearchArticlePage,
});

function ResearchArticlePage() {
  const article = Route.useLoaderData();
  const related = RESEARCH.filter((r) => r.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--ivory)]">
      <Nav />
      <main>
        <article className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 0%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-3xl px-6 md:px-10">
            <Link
              to="/"
              hash="research"
              className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/65 transition-colors hover:text-[var(--gold-deep)]"
            >
              ← Back to publications
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="eyebrow">{article.type}</span>
              <span className="text-[var(--charcoal)]/30">·</span>
              <span className="text-[0.75rem] text-[var(--charcoal)]/50">{article.meta}</span>
              <span className="text-[var(--charcoal)]/30">·</span>
              <span className="text-[0.75rem] text-[var(--charcoal)]/50">{article.readTime}</span>
            </div>

            <h1 className="mt-6 font-display text-3xl leading-tight text-[var(--forest-deep)] md:text-5xl md:leading-[1.15]">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[var(--charcoal)]/70 md:text-xl">
              {article.excerpt}
            </p>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[var(--forest)]/25 to-transparent" />

            <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--charcoal)]/80 md:text-lg md:leading-relaxed">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 rounded-sm border border-[color-mix(in_oklab,var(--forest)_14%,transparent)] bg-[color-mix(in_oklab,var(--sand)_40%,var(--ivory))] p-6 md:p-8">
              <p className="italic-quote text-xl text-[var(--forest-deep)] md:text-2xl">
                “Ancient Wisdom. Contemporary Science. Conscious Leadership. Sustainable Future.”
              </p>
              <p className="mt-4 text-sm text-[var(--charcoal)]/60">— Dr. Shrikant Kallurkar</p>
              <Link to="/" hash="contact" className="btn-primary mt-6 inline-flex">
                Request a conversation
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-[color-mix(in_oklab,var(--forest)_12%,transparent)] bg-[color-mix(in_oklab,var(--sand)_55%,var(--ivory))] py-20">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="eyebrow">More publications</span>
              </div>
              <div className="grid gap-px bg-[color-mix(in_oklab,var(--forest)_16%,transparent)] md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/research/$slug"
                    params={{ slug: item.slug }}
                    className="group bg-[var(--ivory)] p-8 transition-colors hover:bg-[var(--chalk)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">{item.type}</span>
                      <span className="text-[0.7rem] text-[var(--charcoal)]/45">{item.meta}</span>
                    </div>
                    <h2 className="mt-4 font-display text-xl leading-tight text-[var(--forest-deep)] md:text-2xl">
                      {item.title}
                    </h2>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/70 group-hover:text-[var(--gold-deep)]">
                      Read <span aria-hidden>→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
