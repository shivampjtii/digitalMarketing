import type { ReactNode } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const serif = { fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 } as const;

export function Eyebrow({ children, color = "#E8623D" }: { children: ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px" style={{ backgroundColor: color }} />
      <span className="tracking-[0.2em] uppercase text-[11px] sm:text-[12px]" style={{ color }}>{children}</span>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italicWord,
  description,
  ctaTo = "/contact",
  ctaLabel = "Start a project",
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  italicWord?: string;
  description: string;
  ctaTo?: string;
  ctaLabel?: string;
  meta?: { left: string; right: string };
}) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-6 border-b border-[#0E0E0C]/10">
      <div className="max-w-7xl mx-auto">
        {meta && (
          <div className="flex items-center justify-between mb-8 sm:mb-12 text-[#0E0E0C]/55 tracking-[0.15em] uppercase text-[10px] sm:text-[11px]">
            <span>{meta.left}</span>
            <span className="hidden sm:block">{meta.right}</span>
          </div>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="tracking-tight max-w-5xl" style={{ ...serif, fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.94 }}>
          {title}
          {italicWord && <> <em className="italic text-[#E8623D]">{italicWord}</em></>}
        </h1>
        <div className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-7 text-[#0E0E0C]/70 text-[15px] sm:text-[17px] leading-relaxed">{description}</p>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <Link to={ctaTo} className="group inline-flex items-center justify-between gap-6 bg-[#0E0E0C] text-[#F5F1EA] px-5 sm:px-6 py-3.5 sm:py-4 hover:bg-[#E8623D] transition text-[14px] sm:text-[15px] w-full sm:w-auto">
              <span>{ctaLabel}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTABlock({ title, italic, to = "/contact", ctaLabel = "Get a free audit" }: { title: string; italic: string; to?: string; ctaLabel?: string }) {
  return (
    <section className="relative py-20 sm:py-28 px-5 sm:px-6 bg-[#0E0E0C] text-[#F5F1EA] overflow-hidden">
      <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#D4FF3A]/10 blur-3xl rounded-full -translate-y-1/3 translate-x-1/3" />
      <motion.div animate={{ x: [0, -30, 0], y: [0, 20, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#E8623D]/15 blur-3xl rounded-full translate-y-1/3 -translate-x-1/3" />
      <div className="relative max-w-5xl mx-auto text-center">
        <Eyebrow color="#D4FF3A">Next step</Eyebrow>
        <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.95 }}>
          {title} <em className="italic text-[#D4FF3A]">{italic}</em>
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={to} className="group inline-flex items-center justify-between gap-6 bg-[#D4FF3A] text-[#0E0E0C] px-6 py-4 hover:bg-[#F5F1EA] transition text-[14px] sm:text-[15px]">
            {ctaLabel} <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
          <Link to="/work" className="inline-flex items-center justify-between gap-6 border border-[#F5F1EA]/30 px-6 py-4 hover:bg-[#F5F1EA] hover:text-[#0E0E0C] transition text-[14px] sm:text-[15px]">
            See case studies <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
