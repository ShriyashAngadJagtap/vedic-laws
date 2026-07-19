import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VedicSystem } from "@/components/site/VedicSystem";
import { Leadership } from "@/components/site/Leadership";
import { Services } from "@/components/site/Services";
import { Book } from "@/components/site/Book";
import { Research } from "@/components/site/Research";
import { Testimonials } from "@/components/site/Testimonials";
import { Achievements, WhatsAppFab } from "@/components/site/Shared";
import { Gallery } from "@/components/site/Gallery";
import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <VedicSystem />
        <Leadership />
        <Services />
        <Book />
        <Achievements />
        <Research />
        <Testimonials />
        <Gallery />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
