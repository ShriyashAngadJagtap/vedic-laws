import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import { NAV_LINKS } from "./data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep hero flush under the real nav height
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--site-nav-height",
        `${el.offsetHeight}px`,
      );
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty("--site-nav-height");
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-[var(--ivory)] transition-all duration-500 ${
        scrolled
          ? "border-b border-[color-mix(in_oklab,var(--forest)_14%,transparent)] shadow-[0_8px_24px_-18px_color-mix(in_oklab,var(--forest)_35%,transparent)]"
          : "border-b border-[color-mix(in_oklab,var(--forest)_8%,transparent)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-3 md:px-10 md:py-3.5">
        <a href="#top" className="group shrink-0" aria-label="Vedic Success System — Home">
          <img
            src={logo}
            alt="Vedic Success System — Inspire · Align · Transform"
            className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] md:h-14 lg:h-[4.25rem]"
          />
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="story-link text-[0.72rem] uppercase tracking-[0.16em] text-[var(--forest-deep)]/75 transition-colors hover:text-[var(--gold-deep)] after:!bg-[var(--gold)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden lg:inline-flex btn-primary shrink-0 text-[0.7rem]">
          Book Consultation
        </a>

        <button
          type="button"
          className="xl:hidden flex h-10 w-10 items-center justify-center rounded-md bg-[var(--forest-deep)]/8 text-[var(--forest-deep)] transition-colors hover:bg-[var(--forest-deep)]/12"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[color-mix(in_oklab,var(--forest)_12%,transparent)] bg-[var(--ivory)] xl:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm uppercase tracking-[0.16em] text-[var(--forest-deep)]/80"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 btn-primary self-start">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
