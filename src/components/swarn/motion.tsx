import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Ambient floating gold particles */
export function GoldParticles({ count = 26 }: { count?: number }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [dots] = useState(() =>
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      dur: 6 + Math.random() * 8,
      delay: Math.random() * 6,
      op: 0.25 + Math.random() * 0.5,
    })),
  );
  useEffect(() => setMounted(true), []);
  if (reduce || !mounted) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: "radial-gradient(circle, #f3d98b, #d4af37)",
            boxShadow: "0 0 8px #d4af37",
          }}
          animate={{ y: [0, -40, 0], opacity: [0, d.op, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* Gold sparkles trailing the cursor */
export function SparkleCursor() {
  const reduce = useReducedMotion();
  const layer = useRef<HTMLDivElement>(null);
  const last = useRef(0);

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last.current < 45) return;
      last.current = now;
      const el = layer.current;
      if (!el) return;
      const s = document.createElement("span");
      const size = 4 + Math.random() * 6;
      s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:${size}px;height:${size}px;border-radius:9999px;pointer-events:none;transform:translate(-50%,-50%);background:radial-gradient(circle,#f3d98b,#d4af37);box-shadow:0 0 10px #d4af37;transition:transform .9s ease-out,opacity .9s ease-out;z-index:60;opacity:.9;`;
      el.appendChild(s);
      requestAnimationFrame(() => {
        s.style.transform = `translate(-50%,-50%) translateY(${18 + Math.random() * 22}px) scale(0)`;
        s.style.opacity = "0";
      });
      setTimeout(() => s.remove(), 950);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return <div ref={layer} aria-hidden className="pointer-events-none fixed inset-0 z-[60]" />;
}
