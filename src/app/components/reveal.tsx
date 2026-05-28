import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({ children, delay = 0, y = 24, className, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F1EA] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F1EA] to-transparent z-10" />
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {loop.map((l, i) => (
          <span
            key={`${l}-${i}`}
            className="text-[#0E0E0C]/40 hover:text-[#E8623D] transition tracking-tight italic"
            style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            {l}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
