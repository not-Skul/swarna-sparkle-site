import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

// Add more images here as they become available.
const images = [
  { src: g1, alt: "Contestant on the runway", span: "row-span-2" },
  { src: g2, alt: "Finalists celebrating on stage", span: "" },
  { src: g3, alt: "The crown on royal velvet", span: "row-span-2" },
  { src: g4, alt: "Talent round performance", span: "" },
  { src: g5, alt: "Elegant contestant portrait", span: "row-span-2" },
  { src: g6, alt: "Backstage grooming session", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-300 tracking-luxe text-gold-light">MOMENTS OF MAGIC</p>
          <h2 className="mt-4 font-display text-4xl font-700 tracking-wide sm:text-5xl">
            <span className="text-gradient-gold">The Gallery</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-gold" />
        </div>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-3">
          {images.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={img.span}>
              <button
                onClick={() => setActive(i)}
                className={`group relative h-full w-full overflow-hidden rounded-2xl border-gold-soft`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/90 p-6 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 text-gold hover:text-gold-light"
              onClick={() => setActive(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[active].src}
              alt={images[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl border border-gold/30 object-contain shadow-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
