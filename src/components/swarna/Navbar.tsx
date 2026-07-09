import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown } from "lucide-react";
import { NAV_LINKS, GOOGLE_FORM_URL } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/15 bg-background/85 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <Crown className="h-6 w-6 shrink-0 text-gold" />
          <span className="truncate font-display text-lg font-700 tracking-[0.18em] text-gradient-gold sm:text-xl">
            SWARNA SHAKTI
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-300 tracking-wide text-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-500 text-primary-foreground shadow-gold transition-transform hover:scale-105 lg:inline-block"
        >
          Register Now
        </a>

        <button
          aria-label="Toggle menu"
          className="text-gold lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold/10 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-foreground/85 transition-colors hover:bg-muted hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-gradient-gold px-6 py-3 text-center font-500 text-primary-foreground"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
