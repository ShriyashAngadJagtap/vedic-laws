import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { SectionHeading } from "./Shared";
import { useState } from "react";

const IMAGES = [
  { src: g1, alt: "Dr. Kallurkar speaking at a seminar", tag: "Seminar" },
  { src: g5, alt: "Lotus at sunrise", tag: "Reflection" },
  { src: g3, alt: "Corporate workshop audience", tag: "Corporate" },
  { src: g2, alt: "Ancient manuscript with lamp", tag: "Scripture" },
  { src: g6, alt: "One-on-one mentoring session", tag: "Mentoring" },
  { src: g4, alt: "Award ceremony", tag: "Awards" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden py-28 md:py-36 surface-ink">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading eyebrow="Moments" title="A life in the room." italic="Presence, always." light />

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {IMAGES.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setLightbox(idx)}
              className={`group relative overflow-hidden ${
                idx === 0 ? "col-span-2 row-span-2" : idx === 3 ? "col-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-deep)]/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="eyebrow !text-[var(--lotus)]">{img.tag}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--forest-deep)]/95 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <img src={IMAGES[lightbox].src} alt={IMAGES[lightbox].alt} className="max-h-[85vh] max-w-[90vw] object-contain" />
          <button onClick={() => setLightbox(null)} className="absolute right-6 top-6 text-3xl text-[var(--ivory)]" aria-label="Close">
            ×
          </button>
        </div>
      )}
    </section>
  );
}
