import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[var(--forest-deep)] text-[var(--ivory)]/65">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="inline-block" aria-label="Vedic Success System — Home">
              <img
                src={logo}
                alt="Vedic Success System — Inspire · Align · Transform"
                className="h-28 w-auto object-contain md:h-32"
              />
            </a>
            <p className="mt-6 max-w-md italic-quote text-lg leading-snug text-[var(--ivory)]/80">
              "Lead from within. Live from purpose. Leave what is worthy."
            </p>
          </div>

          <div>
            <div className="eyebrow !text-[var(--lotus)]/80">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Vedic System", href: "#vedic-system" },
                { label: "Programs", href: "#services" },
                { label: "Book", href: "#book" },
                { label: "Research", href: "#research" },
                { label: "Journal", href: "#blog" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="story-link after:!bg-[var(--lotus)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow !text-[var(--lotus)]/80">Newsletter</div>
            <p className="mt-4 text-sm text-[var(--ivory)]/55">Occasional essays on Vedic wisdom, leadership and life.</p>
            <form className="mt-4 flex border-b border-[var(--lotus)]/35" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent py-2 text-sm text-[var(--ivory)] outline-none placeholder:text-[var(--ivory)]/35"
              />
              <button className="text-lg text-[var(--lotus)]" aria-label="Subscribe">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--ivory)]/10 pt-8 text-xs text-[var(--ivory)]/45 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div>© {new Date().getFullYear()} Dr. Shrikant Kallurkar. All rights reserved.</div>
            <div>
              Designed and maintained by{" "}
              <a
                href="https://wa.me/919579774265"
                target="_blank"
                rel="noopener noreferrer"
                className="story-link text-[var(--lotus)] after:!bg-[var(--lotus)]"
              >
                Shriyash Jagtap
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="story-link after:!bg-[var(--lotus)]">
              Privacy
            </a>
            <a href="#" className="story-link after:!bg-[var(--lotus)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
