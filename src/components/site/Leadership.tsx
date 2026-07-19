import { FIVE_C } from "./data";
import { SectionHeading } from "./Shared";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="The Leadership Framework"
          title="The Five Cs of"
          italic="conscious leadership."
          subtitle="A framework for leading self and others — refined over four decades of teaching and mentoring."
        />

        <div className="mt-20 grid gap-4 md:grid-cols-5">
          {FIVE_C.map((c, i) => (
            <div
              key={c.key}
              className="group relative flex flex-col justify-between overflow-hidden bg-[var(--chalk)] p-7 ring-1 ring-[color-mix(in_oklab,var(--forest)_12%,transparent)] transition-all duration-500 hover:-translate-y-1.5 hover:bg-[var(--forest-deep)] hover:ring-[var(--forest)]"
            >
              <div>
                <div className="number text-3xl text-[var(--gold)] transition-colors group-hover:text-[var(--lotus)]">
                  0{i + 1}
                </div>
                <h3 className="mt-5 font-display text-2xl text-[var(--forest-deep)] transition-colors group-hover:text-[var(--ivory)]">
                  {c.key}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--charcoal)]/70 transition-colors group-hover:text-[var(--ivory)]/75">
                  {c.body}
                </p>
              </div>
              <div className="mt-8 h-px w-full origin-left bg-gradient-to-r from-[var(--gold)] to-transparent transition-all duration-700 group-hover:from-[var(--lotus)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
