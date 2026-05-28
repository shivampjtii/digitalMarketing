import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  { num: "01", title: "Search Engine Optimization", tag: "SEO", desc: "Rank where your customers are searching. Technical SEO, topical authority, and link velocity that compound month over month.", benefits: ["+312% organic traffic", "Top-3 keyword rankings", "Domain authority growth"] },
  { num: "02", title: "Paid Advertising", tag: "PPC · Meta · LinkedIn", desc: "Profitable ad spend across every platform that matters. We obsess over ROAS, never vanity clicks.", benefits: ["4.8× average ROAS", "Lower CPA in 30 days", "Full-funnel creative testing"] },
  { num: "03", title: "Social Media Marketing", tag: "Organic Social", desc: "Build a magnetic brand presence. Strategy, content calendars, and community management that drives followers to buy.", benefits: ["8× engagement lift", "Creator-led content", "Daily community management"] },
  { num: "04", title: "Branding & Identity", tag: "Brand Design", desc: "Become unmissable. Strategic positioning, logo systems, and visual identities that earn premium pricing.", benefits: ["Full brand guidelines", "Logo + identity system", "Voice & messaging framework"] },
  { num: "05", title: "Content Creation", tag: "Content Studio", desc: "Stop guessing what to post. Long-form, short-form, and video content engineered to rank, convert, and resonate.", benefits: ["30+ assets per month", "Short-form video studio", "SEO-optimized articles"] },
];

export function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [hovered, setHovered] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, services.length - perView);
  useEffect(() => { if (index > maxIndex) setIndex(maxIndex); }, [maxIndex, index]);

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const onPointerDown = (e: React.PointerEvent) => { startX.current = e.clientX; };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (dx > 60) prev();
    else if (dx < -60) next();
    startX.current = null;
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-[#0E0E0C] text-[#F5F1EA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#D4FF3A]" />
                <span className="tracking-[0.2em] uppercase text-[#D4FF3A] text-[11px] sm:text-[12px]">Capabilities · 05</span>
              </div>
              <h2 className="tracking-tight" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1, fontWeight: 400 }}>
                Five growth engines.<br />
                <em className="text-[#D4FF3A] italic">One unified strategy.</em>
              </h2>
            </div>
            <div className="flex items-center gap-3 self-start md:self-end">
              <motion.button whileTap={{ scale: 0.92 }} onClick={prev} disabled={index === 0} aria-label="Previous" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#F5F1EA]/20 flex items-center justify-center hover:bg-[#F5F1EA] hover:text-[#0E0E0C] transition disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#F5F1EA]">
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.92 }} onClick={next} disabled={index === maxIndex} aria-label="Next" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D4FF3A] text-[#0E0E0C] flex items-center justify-center hover:bg-[#F5F1EA] transition disabled:opacity-30">
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </Reveal>

        <div className="overflow-hidden" onPointerDown={onPointerDown} onPointerUp={onPointerUp} style={{ touchAction: "pan-y" }}>
          <motion.div
            ref={trackRef}
            className="flex gap-4 sm:gap-6"
            animate={{ x: `calc(-${index} * (100% / ${perView}))` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {services.map((s, i) => {
              const isHover = hovered === i;
              return (
                <motion.article
                  key={s.title}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  className={`group relative shrink-0 border p-6 sm:p-8 cursor-pointer transition-colors duration-500 ${isHover ? "bg-[#D4FF3A] text-[#0E0E0C] border-[#D4FF3A]" : "border-[#F5F1EA]/15"}`}
                  style={{ width: `calc((100% - ${(perView - 1) * (perView === 1 ? 16 : 24)}px) / ${perView})` }}
                >
                  <div className="flex items-start justify-between mb-10 sm:mb-12">
                    <span className="tracking-tight opacity-60" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2rem" }}>{s.num}</span>
                    <span className="tracking-[0.15em] uppercase opacity-60 text-[10px] sm:text-[11px]">{s.tag}</span>
                  </div>
                  <h3 className="tracking-tight" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.5rem, 2.2vw, 1.875rem)", lineHeight: 1.05, fontWeight: 400 }}>{s.title}</h3>
                  <p className="mt-4 opacity-70 text-[14px] sm:text-[15px] leading-relaxed">{s.desc}</p>
                  <ul className="mt-7 space-y-2 border-t border-current/15 pt-5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-[13px] sm:text-[14px]">
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <motion.a href="#contact" className="mt-7 inline-flex items-center gap-2 text-[14px] sm:text-[15px]" animate={{ gap: isHover ? 12 : 8 }}>
                    Get a free audit
                    <motion.span animate={{ rotate: isHover ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-6">
          <div className="tracking-tight opacity-50 tabular-nums" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.25rem" }}>
            <AnimatePresence mode="wait">
              <motion.span key={index} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} transition={{ duration: 0.3 }} className="inline-block">
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            <span className="opacity-40"> / {String(maxIndex + 1).padStart(2, "0")}</span>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`} className={`h-px transition-all ${i === index ? "w-10 sm:w-12 bg-[#D4FF3A]" : "w-5 sm:w-6 bg-[#F5F1EA]/30 hover:bg-[#F5F1EA]/60"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
