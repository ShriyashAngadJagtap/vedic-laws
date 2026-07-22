import hero1Desktop from "@/assets/herosection/herosection1-desktop.jpg";
import hero1Mobile from "@/assets/herosection/herosection1-mobile.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    desktop: hero1Desktop,
    mobile: hero1Mobile,
    alt: "Dr. Shrikant Kallurkar — Vedic Success System",
  },
  // Add more slides as:
  // { desktop: hero2Desktop, mobile: hero2Mobile, alt: "..." },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Carousel
        opts={{ loop: true }}
        className="h-[100svh] w-full"
      >
        <CarouselContent className="ml-0 h-[100svh]">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="basis-full pl-0">
              <picture className="block h-full w-full">
                <source media="(max-width: 767px)" srcSet={slide.mobile} />
                <img
                  src={slide.desktop}
                  alt={slide.alt}
                  className="h-full w-full object-cover object-center"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </picture>
            </CarouselItem>
          ))}
        </CarouselContent>

        {slides.length > 1 && (
          <>
            <CarouselPrevious className="left-4 border-white/30 bg-black/30 text-white hover:bg-black/50 hover:text-white md:left-8" />
            <CarouselNext className="right-4 border-white/30 bg-black/30 text-white hover:bg-black/50 hover:text-white md:right-8" />
          </>
        )}
      </Carousel>
    </section>
  );
}
