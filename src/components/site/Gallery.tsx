import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SectionHeading } from "./Shared";

import img01 from "@/assets/images-section/3140adc5-8f13-4498-9f60-0e1276953813.jpg";
import img02 from "@/assets/images-section/810a693e-d0f3-4b04-a9f1-a22d1c4f47ea.jpg";
import img03 from "@/assets/images-section/bda89d07-1cc2-4465-8986-127703ae5aab.jpg";
import img04 from "@/assets/images-section/24cd16e0-1205-4256-b718-24dcba694200.jpg";
import img05 from "@/assets/images-section/f326821f-861f-4548-80c3-751aaf698cb6.jpg";
import img06 from "@/assets/images-section/a6fc1b92-0844-426a-a744-3c7abda6fd0d.jpg";
import img07 from "@/assets/images-section/3179aa40-e25f-492c-8292-a37d64d0247b.jpg";
import img08 from "@/assets/images-section/be795c6a-43c0-4c75-902e-11612ecc281e.jpg";
import img09 from "@/assets/images-section/0c8a2e19-0abf-412b-a818-98d786234988.jpg";
import img10 from "@/assets/images-section/bf2106a6-ad9b-465d-a682-c80482ac8408.jpg";
import img11 from "@/assets/images-section/7d61e249-a7eb-47d8-a526-4833bdcbe12b.jpg";
import img12 from "@/assets/images-section/debfcec7-6431-4a45-ad9b-202090e171ed.jpg";
import img13 from "@/assets/images-section/142dbaeb-e4db-4065-8d58-8fa29c26a509.jpg";
import img14 from "@/assets/images-section/0ca4e4e4-0f18-4b99-a8d6-c0ab61b750d7.jpg";
import img15 from "@/assets/images-section/478efcb1-b5d0-4edd-b987-b3f365bb7b9a.jpg";
import img16 from "@/assets/images-section/kallurkar-sir-visionary-leadership.png";

const IMAGES = [
  { src: img01, alt: "Speaking at a seminar" },
  { src: img02, alt: "Portrait moment" },
  { src: img03, alt: "Audience engagement" },
  { src: img04, alt: "Session in progress" },
  { src: img16, alt: "Visionary Leadership session" },
  { src: img05, alt: "Workshop gathering" },
  { src: img06, alt: "One-on-one mentoring" },
  { src: img07, alt: "Corporate workshop" },
  { src: img08, alt: "Stage presence" },
  { src: img09, alt: "Program highlight" },
  { src: img10, alt: "Guided conversation" },
  { src: img11, alt: "Leadership session" },
  { src: img12, alt: "Quiet reflection" },
  { src: img13, alt: "Wide room view" },
  { src: img14, alt: "Shared moment" },
  { src: img15, alt: "Event gathering" },
] as const;

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3200,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const goPrev = () => setLightbox((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
  const goNext = () => setLightbox((i) => (i === null ? i : (i + 1) % IMAGES.length));

  return (
    <section id="gallery" className="relative overflow-hidden py-28 md:py-36 surface-ink">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading eyebrow="Moments" title="A life in the room." italic="Presence, always." light />

        <div className="mt-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {IMAGES.map((img, idx) => (
                <CarouselItem
                  key={img.src}
                  className="basis-[85%] pl-3 sm:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <button
                    type="button"
                    onClick={() => setLightbox(idx)}
                    className="group relative block w-full overflow-hidden"
                    aria-label={`View photo: ${img.alt}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-10 flex items-center justify-center gap-5">
              <CarouselPrevious
                variant="ghost"
                className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-[color-mix(in_oklab,var(--lotus)_35%,transparent)] bg-transparent text-[var(--ivory)] hover:bg-[color-mix(in_oklab,var(--lotus)_12%,transparent)] hover:text-[var(--lotus)] disabled:opacity-40"
              />
              <p className="min-w-[4.5rem] text-center text-[0.7rem] tracking-[0.22em] text-[var(--ivory)]/55">
                {String(current + 1).padStart(2, "0")}
                <span className="mx-2 text-[var(--gold)]/70">/</span>
                {String(IMAGES.length).padStart(2, "0")}
              </p>
              <CarouselNext
                variant="ghost"
                className="static h-11 w-11 translate-x-0 translate-y-0 rounded-full border border-[color-mix(in_oklab,var(--lotus)_35%,transparent)] bg-transparent text-[var(--ivory)] hover:bg-[color-mix(in_oklab,var(--lotus)_12%,transparent)] hover:text-[var(--lotus)] disabled:opacity-40"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--forest-deep)]/95 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <img
            src={IMAGES[lightbox].src}
            alt={IMAGES[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-3xl leading-none text-[var(--ivory)]/90 transition-colors hover:text-[var(--lotus)]"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-2 text-2xl text-[var(--ivory)]/80 transition-colors hover:text-[var(--lotus)] md:left-8"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-2 text-2xl text-[var(--ivory)]/80 transition-colors hover:text-[var(--lotus)] md:right-8"
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.2em] text-[var(--ivory)]/55">
            {lightbox + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
