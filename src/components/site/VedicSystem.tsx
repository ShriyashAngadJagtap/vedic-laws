import { useState } from "react";
import mandala from "@/assets/mandala.png";
import { VEDIC_LAWS } from "./data";
import { SectionHeading } from "./Shared";

export function VedicSystem() {
  const [active, setActive] = useState(0);
  const law = VEDIC_LAWS[active];

  return (
    <section id="vedic-system" className="relative overflow-hidden py-28 md:py-40 surface-ink">
      <img
        src={mandala}
        alt=""
        className="pointer-events-none absolute -right-40 top-0 h-[900px] w-[900px] opacity-[0.07] animate-mandala mix-blend-screen"
      />
      <img
        src={mandala}
        alt=""
        className="pointer-events-none absolute -left-60 -bottom-40 h-[700px] w-[700px] opacity-[0.05] animate-mandala mix-blend-screen"
        style={{ animationDirection: "reverse" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          eyebrow="The Centrepiece"
          title="The Vedic Success System"
          italic="Five laws. One life."
          subtitle="A living framework distilled from millennia of Vedic thought — translated into daily practices for modern leaders, learners and seekers."
          light
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--lotus)_35%,transparent)]" />
            <div className="absolute inset-8 rounded-full border border-[color-mix(in_oklab,var(--lotus)_18%,transparent)]" />
            <div className="absolute inset-16 rounded-full border border-[color-mix(in_oklab,var(--forest)_25%,transparent)]" />
            <img src={mandala} alt="" className="absolute inset-0 h-full w-full opacity-25 animate-mandala mix-blend-screen" />

            <div className="absolute inset-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[var(--lotus)]/45 bg-[color-mix(in_oklab,var(--forest-deep)_85%,black)] text-center">
              <div className="italic-quote text-lg text-[var(--lotus)]">Vedic</div>
              <div className="display text-2xl text-[var(--ivory)]">Success</div>
              <div className="italic-quote text-lg text-[var(--lotus)]">System</div>
            </div>

            {VEDIC_LAWS.map((l, i) => {
              const angle = (i / VEDIC_LAWS.length) * 2 * Math.PI - Math.PI / 2;
              const r = 44;
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              const isActive = i === active;
              return (
                <button
                  key={l.key}
                  onClick={() => setActive(i)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "h-24 w-24 bg-[var(--gold)] text-[var(--forest-deep)]"
                      : "h-20 w-20 border border-[var(--lotus)]/35 bg-[color-mix(in_oklab,var(--forest)_55%,black)] text-[var(--ivory)] hover:border-[var(--lotus)]"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <div className="italic-quote text-lg">{l.devanagari}</div>
                    <div className="text-[0.62rem] uppercase tracking-[0.14em]">{l.key}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div key={active} className="animate-fade-up">
            <div className="italic-quote text-6xl text-[var(--lotus)]">{law.devanagari}</div>
            <div className="mt-2 display text-4xl text-[var(--ivory)]">{law.key}</div>
            <div className="eyebrow mt-2 !text-[var(--lotus)]">{law.meaning}</div>
            <p className="mt-6 max-w-lg leading-relaxed text-[var(--ivory)]/80">{law.body}</p>

            <div className="mt-8 grid gap-6">
              <div>
                <div className="eyebrow !text-[var(--lotus)]/80">Daily Practice</div>
                <p className="mt-1 text-[var(--ivory)]/85">{law.practice}</p>
              </div>
              <div>
                <div className="eyebrow !text-[var(--lotus)]/80">Leadership Outcome</div>
                <p className="mt-1 text-[var(--ivory)]/85">{law.outcome}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              {VEDIC_LAWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all ${i === active ? "w-10 bg-[var(--gold)]" : "w-4 bg-[var(--ivory)]/25"}`}
                  aria-label={`Show law ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
