import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/swarna/Navbar";
import { Hero } from "@/components/swarna/Hero";
import { About, Stats, WhyParticipate, Categories, Journey } from "@/components/swarna/sections";
import { Gallery } from "@/components/swarna/Gallery";
import { Faq, Terms } from "@/components/swarna/FaqTerms";
import { Register, Community, Footer } from "@/components/swarna/RegisterCommunity";
import { FloatingButtons } from "@/components/swarna/FloatingButtons";
import { SparkleCursor } from "@/components/swarna/motion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <SparkleCursor />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyParticipate />
      <Categories />
      <Journey />
      <Gallery />
      <Faq />
      <Terms />
      <Register />
      <Community />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
