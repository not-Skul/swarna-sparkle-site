import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { GoldParticles } from "./motion";
import { EVENT_DATE, GOOGLE_FORM_URL, WHATSAPP_URL } from "@/lib/site";

function useCountdown(target: string) {
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function diff(target: string) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Hero() {
  const c = useCountdown(EVENT_DATE);
  const units = [
    { label: "Days", value: c.days },
    { label: "Hours", value: c.hours },
    { label: "Minutes", value: c.minutes },
    { label: "Seconds", value: c.seconds },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Swarna Shakti 2026 crowned queen"
          width={1600}
          height={1600}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(75,13,103,0.55),transparent_55%)]" />
      </div>

      <GoldParticles count={30} />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs font-300 tracking-luxe text-gold-light sm:text-sm"
        >
          CELEBRATING WOMEN · EMPOWERING LIVES · INSPIRING GENERATIONS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-5xl font-700 leading-[1.05] tracking-wide sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient-gold">SWARNA SHAKTI</span>
          <span className="mt-2 block font-serif text-3xl font-500 italic text-foreground/90 sm:text-4xl lg:text-5xl">
            2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-6 max-w-xl font-serif text-xl italic text-foreground/85 sm:text-2xl"
        >
          A Celebration of Strength, Grace &amp; Greatness
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-500 tracking-wide text-primary-foreground shadow-gold transition-transform hover:scale-105"
          >
            Register Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/30 px-8 py-4 text-sm font-500 tracking-wide text-gold-light backdrop-blur-sm transition-colors hover:bg-gold/10"
          >
            <MessageCircle className="h-4 w-4" />
            Join WhatsApp Community
          </a>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-14 grid max-w-lg grid-cols-4 gap-3 sm:gap-4"
        >
          {units.map((u) => (
            <div key={u.label} className="glass rounded-2xl px-2 py-4">
              <div className="font-display text-2xl font-700 text-gradient-gold sm:text-4xl">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {u.label}
              </div>
            </div>
          ))}
        </motion.div>
        <p className="mt-4 text-xs tracking-widest text-muted-foreground">
          REGISTRATIONS CLOSE · 22 JUNE 2026
        </p>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/80"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
