import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Swarn/Navbar";
import { Hero } from "@/components/Swarn/Hero";
import { About, Stats, WhyParticipate, Categories, Journey } from "@/components/Swarn/sections";
import { Gallery } from "@/components/Swarn/Gallery";
import { Faq, Terms } from "@/components/Swarn/FaqTerms";
import { Register, Community, Footer } from "@/components/Swarn/RegisterCommunity";
import { FloatingButtons } from "@/components/Swarn/FloatingButtons";
import { SparkleCursor } from "@/components/Swarn/motion";

const SITE_URL = "https://Swarna-sparkle-site.lovable.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Swarn Shakti 2026",
          description:
            "Delhi NCR's premier women's pageant celebrating strength, grace and greatness — Miss & Mrs Delhi NCR.",
          startDate: "2026-08-29T18:00:00+05:30",
          endDate: "2026-08-29T22:00:00+05:30",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Delhi NCR",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Delhi NCR",
              addressCountry: "IN",
            },
          },
          organizer: { "@type": "Organization", name: "Swarn Shakti", url: SITE_URL },
          url: SITE_URL,
        }),
      },
    ],
  }),
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
