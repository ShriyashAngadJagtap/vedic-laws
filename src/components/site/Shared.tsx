import { AnimatedNumber } from "./AnimatedNumber";
import { STATS } from "./data";

export function SectionHeading({
  eyebrow,
  title,
  italic,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className={`h-px w-8 ${light ? "bg-[var(--lotus)]" : "bg-[var(--gold)]"}`} />
          <span className={`eyebrow ${light ? "!text-[var(--lotus)]" : ""}`}>{eyebrow}</span>
          <span className={`h-px w-8 ${light ? "bg-[var(--lotus)]" : "bg-[var(--gold)]"}`} />
        </div>
      )}
      <h2 className={`display text-4xl md:text-5xl lg:text-[3.35rem] ${light ? "!text-[var(--ivory)]" : ""}`}>
        {title}
        {italic && (
          <span className={`mt-2 block italic-quote ${light ? "text-[var(--lotus)]" : "text-[var(--gold-deep)]"}`}>
            {italic}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-base leading-relaxed md:text-lg ${light ? "text-[var(--ivory)]/70" : "text-[var(--charcoal)]/70"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--forest)]/50 to-transparent" />
      <svg width="16" height="16" viewBox="0 0 24 24" className="text-[var(--gold)]">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" opacity="0.85" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--forest)]/50 to-transparent" />
    </div>
  );
}

export function Achievements() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, color-mix(in oklab, var(--forest) 8%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <GoldDivider className="mb-14" />
        <div className="grid gap-10 md:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <AnimatedNumber value={s.value} className="number block text-5xl md:text-6xl text-[var(--forest)]" />
              <div className="mt-3 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--charcoal)]/55">{s.label}</div>
            </div>
          ))}
        </div>
        <GoldDivider className="mt-14" />
      </div>
    </section>
  );
}

/** Official WhatsApp green FAB — always visible */
export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919923203334"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.65)] transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
