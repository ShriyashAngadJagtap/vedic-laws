import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/Shared";
import { getJournalBySlug, JOURNAL_POSTS } from "@/components/site/data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getJournalBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — The Journal`
          : "Essay — The Journal",
      },
      {
        name: "description",
        content: loaderData?.excerpt ?? "Essays on wisdom, work and the way by Dr. Shrikant Kallurkar.",
      },
    ],
  }),
  component: JournalArticlePage,
});

function JournalArticlePage() {
  const article = Route.useLoaderData();
  const related = JOURNAL_POSTS.filter((p) => p.slug !== article.slug).slice(0, 3);

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
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/"
                hash="blog"
                className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/65 transition-colors hover:text-[var(--gold-deep)]"
              >
                ← Back to journal
              </Link>
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/65 transition-colors hover:text-[var(--gold-deep)]"
              >
                All essays
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="eyebrow">{article.category}</span>
              <span className="text-[var(--charcoal)]/30">·</span>
              <span className="text-[0.75rem] text-[var(--charcoal)]/50">{article.read}</span>
            </div>

            <h1 className="mt-6 font-display text-3xl leading-tight text-[var(--forest-deep)] md:text-5xl md:leading-[1.15]">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[var(--charcoal)]/70 md:text-xl">
              {article.excerpt}
            </p>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[var(--forest)]/25 to-transparent" />

            <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--charcoal)]/80 md:text-lg">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 rounded-sm border border-[color-mix(in_oklab,var(--forest)_14%,transparent)] bg-[color-mix(in_oklab,var(--sand)_40%,var(--ivory))] p-6 md:p-8">
              <p className="text-sm leading-relaxed text-[var(--charcoal)]/70">
                Prefer a conversation over an essay? Reach out for mentoring, speaking, or institutional programmes.
              </p>
              <Link to="/" hash="contact" className="btn-primary mt-6 inline-flex">
                Begin a conversation
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-[color-mix(in_oklab,var(--forest)_12%,transparent)] bg-[color-mix(in_oklab,var(--sand)_40%,var(--ivory))] py-20">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--gold)]" />
                <span className="eyebrow">More essays</span>
              </div>
              <div className="grid gap-px bg-[color-mix(in_oklab,var(--forest)_14%,transparent)] md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/journal/$slug"
                    params={{ slug: item.slug }}
                    className="group bg-[var(--ivory)] p-8 transition-colors hover:bg-[var(--chalk)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="eyebrow">{item.category}</span>
                      <span className="text-[0.7rem] text-[var(--charcoal)]/45">{item.read}</span>
                    </div>
                    <h2 className="mt-4 font-display text-xl leading-tight text-[var(--forest-deep)] md:text-2xl">
                      {item.title}
                    </h2>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/70 group-hover:text-[var(--gold-deep)]">
                      Read essay →
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
