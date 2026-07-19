import { useEffect, useState } from "react";
import { TESTIMONIALS } from "./data";
import { SectionHeading } from "./Shared";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section id="voices" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading eyebrow="Voices" title="Words from those" italic="who have walked with him." />

        <div className="relative mx-auto mt-20 max-w-4xl text-center">
          <div className="text-[9rem] leading-none italic-quote text-[var(--forest)]/15">"</div>
          <div key={i} className="animate-fade-up -mt-20">
            <p className="italic-quote text-2xl leading-snug text-[var(--forest-deep)] md:text-4xl">{t.quote}</p>
            <div className="mt-10 flex flex-col items-center gap-2">
              <span className="h-px w-12 bg-[var(--gold)]" />
              <div className="font-display text-lg text-[var(--forest-deep)]">{t.name}</div>
              <div className="eyebrow text-[var(--charcoal)]/55">{t.role}</div>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1 rounded-full transition-all ${idx === i ? "w-10 bg-[var(--gold)]" : "w-4 bg-[var(--charcoal)]/20"}`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
