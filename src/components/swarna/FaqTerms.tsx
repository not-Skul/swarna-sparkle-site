import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./motion";

const faqs = [
  {
    q: "Who can participate?",
    a: "Ambitious, talented women from all backgrounds who are passionate about fashion, beauty, wellness and self-expression — across both Miss and Mrs categories.",
  },
  {
    q: "What is the age limit?",
    a: "Participation is open to women in the 19–49 years age group. Miss category is for younger, unmarried contestants; Mrs category welcomes married women.",
  },
  {
    q: "What is the selection process?",
    a: "Registration is followed by auditions. Selected participants advance through grooming, ramp walk, talent, and questionnaire rounds to the Grand Finale.",
  },
  {
    q: "How do I register?",
    a: "Simply complete the official registration form online till End of July 2026. Submission is subject to screening and approval by the organizing committee.",
  },
  {
    q: "Where is the event held?",
    a: "Venues for grooming sessions, questionnaire rounds and the Grand Finale will be announced by the organizing team.",
  },
  {
    q: "What are the judging criteria?",
    a: "Contestants are evaluated on confidence, elegance, talent, communication abilities and stage presence throughout the competition rounds.",
  },
  {
    q: "Is there a dress code?",
    a: "Present yourself with confidence, elegance and professionalism. Outfits, makeup and performances should align with the dignity and values of the event.",
  },
  {
    q: "How are winners selected?",
    a: "Based on cumulative performance across all rounds, finalists are chosen for the Grand Finale where winners are crowned 1st, 2nd and 3rd in both Miss and Mrs categories.",
  },
];

const terms = [
  { t: "Eligibility", d: "Open to women aged 19–49. Accurate, complete information is required; false details may lead to disqualification." },
  { t: "Registration", d: "Registration is open till End of July 2026. Submission does not guarantee selection — entries are subject to screening." },
  { t: "Code of Conduct", d: "Respectful, professional behaviour is expected. Misconduct or harassment results in immediate disqualification." },
  { t: "Media Rights", d: "Participants grant organizers rights to use photos, videos and content for promotional purposes." },
  { t: "Judging & Results", d: "Decisions of the judges and organizing committee are final and binding, with no dispute or reconsideration." },
  { t: "Health & Wellness", d: "Participants are responsible for their own well-being; organizers are not liable for any personal injury or loss." },
  { t: "Event Modifications", d: "Organizers may modify schedules, rules, categories or terms; updates are shared via official platforms." },
  { t: "Acceptance", d: "By registering, participants acknowledge and agree to abide by all terms and conditions of the contest." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-300 tracking-luxe text-gold-light">EVERYTHING YOU NEED TO KNOW</p>
          <h2 className="mt-4 font-display text-4xl font-700 tracking-wide sm:text-5xl">
            <span className="text-gradient-gold">Frequently Asked</span>
          </h2>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-gold" />
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.03}>
              <div className="overflow-hidden rounded-2xl border-gold-soft bg-card">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg font-600 text-foreground">{f.q}</span>
                  {open === i ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Terms() {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? terms : terms.slice(0, 4);
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-300 tracking-luxe text-gold-light">PLEASE READ CAREFULLY</p>
          <h2 className="mt-4 font-display text-3xl font-700 tracking-wide sm:text-4xl">
            <span className="text-gradient-gold">Terms &amp; Conditions</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {shown.map((t) => (
            <div key={t.t} className="glass rounded-xl p-5">
              <h3 className="font-serif text-lg font-600 text-gold-light">{t.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-gold/40 px-6 py-2.5 text-sm text-gold-light transition-colors hover:bg-gold/10"
          >
            {expanded ? "Show less" : "View complete terms"}
          </button>
        </div>
      </div>
    </section>
  );
}
