import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/lib/site";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky floating register button */}
      <motion.a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-500 text-primary-foreground shadow-gold transition-transform hover:scale-105 sm:left-auto sm:right-6 sm:translate-x-0"
      >
        <Sparkles className="h-4 w-4" />
        Register
      </motion.a>

      <AnimatePresence>
        {show && (
          <motion.button
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 right-6 z-40 rounded-full border border-gold/40 bg-background/70 p-3 text-gold backdrop-blur-md transition-colors hover:bg-gold/10 sm:bottom-6 sm:right-auto sm:left-6"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
