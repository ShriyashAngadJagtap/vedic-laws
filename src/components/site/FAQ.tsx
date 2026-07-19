import { useState } from "react";
import { FAQS } from "./data";
import { SectionHeading } from "./Shared";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 md:py-36 bg-[color-mix(in_oklab,var(--sand)_45%,var(--ivory))]">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <SectionHeading eyebrow="Questions" title="Answers to the" italic="most-asked." />

        <div className="mt-14 divide-y divide-[color-mix(in_oklab,var(--forest)_18%,transparent)] border-y border-[color-mix(in_oklab,var(--forest)_18%,transparent)]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl text-[var(--forest-deep)] md:text-2xl">{f.q}</span>
                  <span className={`mt-1 text-2xl text-[var(--gold)] transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div className="grid transition-all duration-500" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-12 leading-relaxed text-[var(--charcoal)]/75">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
