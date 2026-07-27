import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/Shared";
import { JOURNAL_POSTS } from "@/components/site/data";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "The Journal — Essays on wisdom, work and the way" },
      {
        name: "description",
        content:
          "Essays by Dr. Shrikant Kallurkar on Vedic wisdom, leadership, education, and personal growth.",
      },
    ],
  }),
  component: JournalIndexPage,
});

function JournalIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--ivory)]">
      <Nav />
      <main className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Link
            to="/"
            hash="blog"
            className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]/65 transition-colors hover:text-[var(--gold-deep)]"
          >
            ← Back to home
          </Link>

          <div className="mt-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="eyebrow">The Journal</span>
            </div>
            <h1 className="display text-4xl md:text-5xl">
              All essays
              <span className="mt-2 block italic-quote text-[var(--gold-deep)]">on wisdom, work and the way.</span>
            </h1>
          </div>

          <div className="mt-16 grid gap-px bg-[color-mix(in_oklab,var(--forest)_14%,transparent)] md:grid-cols-2">
            {JOURNAL_POSTS.map((p) => (
              <Link
                key={p.slug}
                to="/journal/$slug"
                params={{ slug: p.slug }}
                className="group bg-[var(--ivory)] p-10 transition-colors hover:bg-[var(--chalk)]"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{p.category}</span>
                  <span className="text-[0.7rem] text-[var(--charcoal)]/45">{p.read}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl leading-tight text-[var(--forest-deep)] md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--charcoal)]/70">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 story-link text-[0.7rem] uppercase tracking-[0.18em] text-[var(--forest-deep)]">
                  Read essay →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
