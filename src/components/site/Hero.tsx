import portrait from "@/assets/portrait.jpg";
import mandala from "@/assets/mandala.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed portrait plane */}
      <div className="absolute inset-0">
        <img
          src={portrait}
          alt=""
          width={912}
          height={1200}
          className="h-full w-full object-cover object-[62%_18%] md:object-[58%_15%] animate-ken"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, color-mix(in oklab, var(--forest-deep) 90%, black) 0%, color-mix(in oklab, var(--forest-deep) 75%, transparent) 40%, color-mix(in oklab, var(--forest-deep) 25%, transparent) 65%, transparent 90%), linear-gradient(to top, color-mix(in oklab, var(--forest-deep) 58%, transparent) 0%, transparent 40%)",
          }}
        />
        {/* Extra mobile readability veil on the left */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[color-mix(in_oklab,var(--forest-deep)_70%,black)] via-[color-mix(in_oklab,var(--forest-deep)_35%,transparent)] to-transparent md:hidden"
        />
        <img
          src={mandala}
          alt=""
          className="pointer-events-none absolute -left-24 -bottom-24 h-[420px] w-[420px] opacity-[0.12] animate-mandala mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32 lg:justify-center lg:pb-20">
        <div className="max-w-xl animate-fade-up text-[var(--ivory)]">
          <p className="font-display text-[clamp(2.2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-[var(--ivory)]">
            Dr. Shrikant Kallurkar
          </p>
          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.32em] text-[var(--lotus)]">
            Vedic Success System
          </p>

          <h1 className="mt-8 display text-[clamp(1.75rem,4vw,3.15rem)] leading-[1.08] text-[var(--ivory)] md:mt-10">
            Lead From Within.
            <span className="mt-2 block italic-quote text-[color-mix(in_oklab,var(--lotus)_90%,white)]">
              Timeless Vedic wisdom for modern life.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[var(--ivory)]/85 md:mt-6 md:text-base md:text-[var(--ivory)]/75">
            Guiding students, professionals, educators and organisations toward clarity,
            discipline, purpose and meaningful success.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <a href="#contact" className="btn-primary">
              Book Consultation
            </a>
            <a
              href="#vedic-system"
              className="btn-gold !border-[var(--gold)] !text-[var(--ivory)] hover:!bg-[color-mix(in_oklab,var(--gold)_18%,transparent)] hover:!border-[var(--lotus)]"
            >
              Explore the System
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--ivory)]/45 md:flex"
      >
        Scroll
        <span className="block h-8 w-px origin-top bg-gradient-to-b from-[var(--lotus)] to-transparent" />
      </a>
    </section>
  );
}
