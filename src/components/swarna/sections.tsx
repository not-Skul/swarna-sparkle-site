import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Star,
  Mic2,
  Users,
  Flower2,
  Crown,
  Gem,
  ArrowRight,
} from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "./motion";
import { GOOGLE_FORM_URL } from "@/lib/site";

const eyebrow = "text-xs font-300 tracking-luxe text-gold-light";

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className={eyebrow}>{kicker}</p>
      <h2 className="mt-4 font-display text-4xl font-700 tracking-wide sm:text-5xl">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-gold" />
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
const aboutCards = [
  {
    icon: Crown,
    title: "What Is Swarna Shakti?",
    text: "More than a pageant — a movement celebrating the elegance, confidence and inner strength of every woman.",
  },
  {
    icon: Star,
    title: "Our Mission",
    text: "To empower women to embrace their individuality, express themselves fearlessly and step into new opportunities.",
  },
  {
    icon: Gem,
    title: "Our Vision",
    text: "A world where beauty meets confidence, fashion meets personality, and strength meets grace.",
  },
  {
    icon: Heart,
    title: "Holistic Growth",
    text: "Fashion, wellness, personality development and meaningful connections — a true journey of transformation.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle kicker="EMPOWERED WOMEN EMPOWER THE WORLD" title="About Swarna Shakti" />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] border-gold-soft">
              <img
                src={aboutImg}
                alt="Elegant woman in a shimmering gown"
                width={1200}
                height={1504}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 font-serif text-2xl italic text-gold-light">
                “When women rise, nations rise.”
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                  <c.icon className="h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-serif text-xl font-600 text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
const stats = [
  { value: 500, suffix: "+", label: "Registrations" },
  { value: 50, suffix: "+", label: "Mentors" },
  { value: 2, suffix: "", label: "Categories" },
  { value: 100, suffix: "%", label: "Empowerment" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  return (
    <motion.span
      onViewportEnter={() => {
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
      viewport={{ once: true }}
    >
      {n}
      {suffix}
    </motion.span>
  );
}

export function Stats() {
  return (
    <section className="relative border-y border-gold/10 bg-gradient-royal py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <div className="font-display text-4xl font-700 text-gradient-gold sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs uppercase tracking-widest text-foreground/70 sm:text-sm">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WHY PARTICIPATE ---------------- */
const perks = [
  { icon: Sparkles, title: "Personality Development", text: "Refine your presence and unlock your most confident self." },
  { icon: ShieldCheck, title: "Confidence Building", text: "Sessions designed to help you own every room you walk into." },
  { icon: Flower2, title: "Fashion & Grooming", text: "Professional styling, poise and elegance from expert mentors." },
  { icon: Star, title: "Stage Presence", text: "Master the ramp, the spotlight and the art of the runway." },
  { icon: Mic2, title: "Communication Skills", text: "Speak with clarity, grace and conviction on any stage." },
  { icon: Users, title: "Networking", text: "Connect with like-minded women, mentors and industry leaders." },
  { icon: Heart, title: "Wellness", text: "Nurture mental strength, self-care and holistic well-being." },
  { icon: Crown, title: "Recognition", text: "Step onto a prestigious platform that celebrates your journey." },
];

export function WhyParticipate() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle kicker="YOUR TIME · YOUR STAGE · YOUR STORY" title="Why Participate" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border-gold-soft bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:glow-gold">
                <div className="mb-5 inline-flex rounded-xl bg-gradient-royal p-3 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-600">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
const categories = [
  {
    name: "Miss Delhi NCR",
    tag: "For the aspiring icon",
    desc: "A celebration of youthful confidence, ambition and boundless potential.",
    eligibility: "Unmarried women, 16–29 years",
  },
  {
    name: "Mrs Delhi NCR",
    tag: "For the empowered woman",
    desc: "Honouring grace, poise and the strength of the modern married woman.",
    eligibility: "Married women, 25–49 years",
  },
];

export function Categories() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle kicker="TWO CROWNS · ONE PRESTIGIOUS STAGE" title="Event Categories" />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border-gold-soft bg-card p-8 transition-all duration-500 hover:glow-gold sm:p-10">
                <div className="absolute -right-10 -top-10 opacity-10 transition-opacity group-hover:opacity-20">
                  <Crown className="h-40 w-40 text-gold" />
                </div>
                <p className="text-xs uppercase tracking-widest text-accent">{c.tag}</p>
                <h3 className="mt-3 font-display text-3xl font-700 text-gradient-gold sm:text-4xl">
                  {c.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-6 rounded-xl bg-muted/60 p-4">
                  <p className="text-xs uppercase tracking-widest text-gold-light">Eligibility</p>
                  <p className="mt-1 text-sm text-foreground/90">{c.eligibility}</p>
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-500 text-primary-foreground shadow-gold transition-transform hover:scale-105"
                >
                  Register for {c.name.split(" ")[0]}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
const journey = [
  { title: "Registration", text: "Begin your journey — complete your online registration to enter." },
  { title: "Auditions", text: "Present yourself before the panel and make your first impression." },
  { title: "Professional Grooming", text: "Personality, confidence, communication & self-presentation sessions." },
  { title: "Ramp Walk", text: "Command the runway with elegance, poise and confidence." },
  { title: "Talent Round", text: "Showcase your unique talent and creative individuality." },
  { title: "Questionnaire Round", text: "Engage the judges with intelligence, wit and authenticity." },
  { title: "Grand Finale", text: "Finalists crowned across Miss & Mrs categories — 1st, 2nd & 3rd." },
];

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(232,90,168,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <SectionTitle kicker="FROM DREAM TO CROWN" title="The Swarna Journey" />
        <div className="relative mt-16">
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-gold via-accent to-transparent sm:left-1/2" />
          <div className="space-y-10">
            {journey.map((step, i) => (
              <Reveal key={step.title} delay={0.05}>
                <div
                  className={`relative flex items-start gap-6 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:ml-auto sm:pl-10" : "sm:mr-auto sm:flex-row-reverse sm:pr-10 sm:text-right"
                  }`}
                >
                  <div className="absolute left-4 z-10 -translate-x-1/2 sm:left-0 sm:right-auto">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold font-display text-sm font-700 text-primary-foreground shadow-gold ${
                        i % 2 === 0 ? "" : "sm:-translate-x-0"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="ml-10 glass rounded-2xl p-6 sm:ml-0">
                    <h3 className="font-serif text-xl font-600 text-gold-light">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
