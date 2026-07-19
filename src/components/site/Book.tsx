import book from "@/assets/book.jpg";

export function Book() {
  return (
    <section id="book" className="relative overflow-hidden py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--gold) 12%, transparent), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <img
              src={book}
              alt="Lead From Within — a book by Dr. Shrikant Kallurkar"
              loading="lazy"
              width={900}
              height={1100}
              className="relative w-full transition-transform duration-700 hover:-rotate-2 hover:scale-[1.03]"
              style={{
                transform: "rotate(-3deg)",
                filter: "drop-shadow(0 36px 50px color-mix(in oklab, var(--forest-deep) 35%, transparent))",
              }}
            />
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="eyebrow">The Book</span>
            </div>
            <h2 className="display text-4xl md:text-5xl">
              Lead From Within
              <span className="mt-2 block italic-quote text-3xl text-[var(--gold-deep)] md:text-4xl">
                The Vedic path to conscious leadership.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--charcoal)]/75 md:text-lg">
              A distillation of forty years of teaching, research and mentoring. Lead From Within
              translates the five laws of the Vedic Success System into practical daily discipline
              for the modern leader.
            </p>

            <ul className="mt-8 grid max-w-lg gap-3">
              {[
                "The five laws — Yadnya, Dana, Tapa, Karma, Swadhyaya",
                "Daily practices to build clarity and inner authority",
                "Case studies from thirty years of institutional leadership",
                "A blueprint for legacy, meaning and quiet influence",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-[var(--charcoal)]/80">
                  <span className="mt-2 h-1 w-3 shrink-0 bg-[var(--gold)]" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="btn-primary">
                Buy on Amazon
              </a>
              <a href="#" className="btn-gold">
                Google Books
              </a>
              <a href="#" className="btn-ghost">
                Read a Sample →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
