import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const serif = { fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 } as const;

type Item = { brand: string; tag: string; metric: string; img: string };

export function HoverPreviewList({ items }: { items: Item[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.5 });
  const y = useSpring(my, { stiffness: 220, damping: 26, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <div ref={wrapRef} onMouseMove={onMove} className="relative">
      <ul className="divide-y divide-[#0E0E0C]/15 border-y border-[#0E0E0C]/15">
        {items.map((it, i) => (
          <li
            key={it.brand}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((v) => (v === i ? null : v))}
            className="group relative"
          >
            <a href="#" className="flex items-baseline justify-between gap-6 py-6 sm:py-8 px-1 transition-colors">
              <div className="flex items-baseline gap-5 sm:gap-7 min-w-0">
                <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/45 text-[10px] sm:text-[11px] shrink-0">0{i + 1}</span>
                <motion.span
                  animate={{ x: active === i ? 12 : 0, color: active === i ? "#E8623D" : "#0E0E0C" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="tracking-tight truncate italic"
                  style={{ ...serif, fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)", lineHeight: 1 }}
                >
                  {it.brand}
                </motion.span>
              </div>
              <div className="hidden sm:flex items-baseline gap-6 shrink-0">
                <span className="text-[#0E0E0C]/55 tracking-[0.15em] uppercase text-[11px]">{it.tag}</span>
                <span className="text-[14px]" style={{ fontWeight: 600 }}>{it.metric}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none absolute top-0 left-0 z-10 hidden lg:block"
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={items[active].brand}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-72 h-80 overflow-hidden shadow-[0_30px_60px_-20px_rgba(14,14,12,0.45)]"
            >
              <ImageWithFallback src={items[active].img} alt={items[active].brand} className="w-full h-full object-cover" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
