import { ArrowRight, MessageCircle, Mail, Instagram, Facebook, Crown } from "lucide-react";
import { Reveal } from "./motion";
import { GOOGLE_FORM_URL, WHATSAPP_URL, CONTACT_EMAIL, NAV_LINKS } from "@/lib/site";

export function Register() {
  return (
    <section id="register" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 bg-card p-8 shadow-gold sm:p-12">
            <div className="absolute -right-12 -top-12 opacity-10">
              <Crown className="h-52 w-52 text-gold" />
            </div>
            <div className="relative text-center">
              <p className="text-xs font-300 tracking-luxe text-gold-light">
                DREAM · BELIEVE · ACHIEVE
              </p>
              <h2 className="mt-4 font-display text-4xl font-700 tracking-wide sm:text-5xl">
                <span className="text-gradient-gold">Begin Your Journey Today</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-serif text-xl italic text-foreground/85">
                Your time. Your stage. Your story. Claim your place among the women of
                Swarna Shakti 2026.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-10 py-4 text-base font-500 text-primary-foreground shadow-gold transition-transform hover:scale-105"
              >
                Register Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-xs tracking-widest text-muted-foreground">
                REGISTRATIONS CLOSE End of July 2026 — Limited Slots Available
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-2xl border-gold-soft">
              <iframe
                title="Swarna Shakti 2026 Registration Form"
                src={GOOGLE_FORM_URL.replace("?usp=header", "?embedded=true")}
                className="h-[600px] w-full bg-white"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-royal p-10 text-center sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(232,90,168,0.35),transparent_60%)]" />
            <div className="relative">
              <MessageCircle className="mx-auto h-10 w-10 text-gold" />
              <h2 className="mt-5 font-display text-3xl font-700 tracking-wide sm:text-4xl">
                <span className="text-gradient-gold">Stay Connected</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg font-serif text-lg italic text-foreground/85">
                Join the official Swarna Shakti community for updates, mentorship and a
                sisterhood that lifts each other higher.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-500 text-primary-foreground shadow-gold transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp Community
              </a>
                <p className="mx-auto mt-4 max-w-lg font-serif text-lg italic text-foreground/85">
                Mr. Vinay Kumar Srivastava - +91 7234888840<br/>Director
                <br/>
                Mrs. Harpreet Kaur - +91 8826644358<br/>Organizing Secretary
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gold/15 bg-card/50 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Crown className="h-6 w-6 text-gold" />
            <span className="font-display text-lg font-700 tracking-[0.18em] text-gradient-gold">
              SWARNA SHAKTI
            </span>
          </div>
          <p className="mt-4 max-w-xs font-serif text-lg italic text-muted-foreground">
            Celebrating Women. Empowering Lives. Inspiring Generations.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-gold-light">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-gold-light">Contact</h3>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
          </a>
          <div className="mt-5 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold/10"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/swarnshakti.official/"
              aria-label="Instagram"
              className="rounded-full border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold/10"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/SwarnShaktiOrg/"
              aria-label="Facebook"
              className="rounded-full border border-gold/30 p-2.5 text-gold transition-colors hover:bg-gold/10"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© 2026 Swarna Shakti. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#faq" className="transition-colors hover:text-gold">Privacy</a>
            <a href="#faq" className="transition-colors hover:text-gold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
