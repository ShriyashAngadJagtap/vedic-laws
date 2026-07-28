import { SERVICES } from "./data";
import { SectionHeading } from "./Shared";

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--sand) 70%, transparent) 40%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Programs & Engagements"
          title="Ways to work"
          italic="together."
          subtitle="From private executive coaching to institutional transformation — every engagement is designed around the person or organisation it serves."
        />

        <div className="mt-20 grid gap-px bg-[color-mix(in_oklab,var(--forest)_18%,transparent)] md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <a
              key={s.title}
              href="#contact"
              className="group relative bg-[var(--ivory)] p-8 transition-all duration-500 hover:bg-[var(--forest)]"
            >
              <div className="number text-sm text-[var(--gold)] transition-colors group-hover:text-[var(--lotus)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-display text-xl text-[var(--forest-deep)] transition-colors group-hover:text-[var(--ivory)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--charcoal)]/70 transition-colors group-hover:text-[var(--ivory)]/80">
                {s.body}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--ivory)] opacity-0 transition-opacity group-hover:opacity-100">
                Enquire <span aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
