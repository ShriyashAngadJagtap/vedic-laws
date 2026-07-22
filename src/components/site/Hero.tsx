import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1Desktop from "@/assets/herosection/herosection1-desktop.jpg";
import hero1Mobile from "@/assets/herosection/herosection1-mobile.jpg";
import hero2Desktop from "@/assets/herosection/herosection2-desktop.png";
import hero2Mobile from "@/assets/herosection/herosection2-mobile.png";
import hero3Desktop from "@/assets/herosection/herosection3-desktop.png";
import hero3Mobile from "@/assets/herosection/herosection3-mobile.png";

const slides = [
  {
    desktop: hero1Desktop,
    mobile: hero1Mobile,
    alt: "Dr. Shrikant Kallurkar — Vedic Success System",
  },
  {
    desktop: hero2Desktop,
    mobile: hero2Mobile,
    alt: "Vedic Success System — Inspire, Align, Transform",
  },
  {
    desktop: hero3Desktop,
    mobile: hero3Mobile,
    alt: "Vedic Success System — Leadership and wisdom",
  },
];

const AUTOPLAY_MS = 5000;
const FADE_MS = 1200;

export function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (slides.length < 2) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[var(--forest-deep)]">
      <div className="relative w-full">
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              className={active ? "relative w-full" : "pointer-events-none absolute inset-x-0 top-0 w-full"}
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                zIndex: active ? 1 : 0,
              }}
              aria-hidden={!active}
            >
              <picture className="block w-full">
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img
                  src={slide.desktop}
                  alt={active ? slide.alt : ""}
                  className="block h-auto w-full align-top"
                  fetchPriority={i === 0 ? "high" : "auto"}
                  draggable={false}
                />
              </picture>
            </div>
          );
        })}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/50 md:left-6 md:h-11 md:w-11"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/50 md:right-6 md:h-11 md:w-11"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5 md:bottom-7">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-500 ease-out ${
                  i === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
