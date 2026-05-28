import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function UnderlineWord({ children, color = "#E8623D", delay = 0.6 }: { children: ReactNode; color?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline-block italic" style={{ color }}>
      {children}
      <svg
        aria-hidden
        viewBox="0 0 240 14"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 -bottom-1 sm:-bottom-2 w-full h-[0.32em] pointer-events-none"
      >
        <motion.path
          d="M2 9 C 60 2, 120 2, 178 7 S 235 11, 238 6"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </span>
  );
}
