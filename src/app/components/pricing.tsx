import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const plans = [
  { name: "Brand Kickstart", num: "01", price: "₹24,999", gst: "+ 18% GST", period: "/mo", target: "For new D2C brands & solo founders launching their first digital presence.", cta: "Buy Kickstart", featured: false, dark: false, features: ["Brand audit & positioning sprint", "Logo refresh + 1-page brand guideline", "2 social platforms (12 posts/mo)", "Basic on-page SEO (10 pages)", "1 monthly strategy call", "Email support (48hr SLA)"] },
  { name: "Growth Engine", num: "02", price: "₹64,999", gst: "+ 18% GST", period: "/mo", target: "For growing SMBs ready to scale leads, traffic, and recurring revenue.", cta: "Buy Growth", featured: true, dark: false, features: ["Everything in Brand Kickstart", "Google + Meta Ads (up to ₹2L spend)", "Full SEO program (30 keywords)", "3 social platforms + reels (20/mo)", "Bi-weekly strategy calls", "Conversion-rate optimization", "Monthly performance dashboard"] },
  { name: "Revenue Accelerator", num: "03", price: "₹1,29,999", gst: "+ 18% GST", period: "/mo", target: "For scaling brands chasing ₹1Cr+ MRR with multi-channel orchestration.", cta: "Buy Accelerator", featured: false, dark: false, features: ["Everything in Growth Engine", "Paid ads up to ₹8L spend managed", "Advanced SEO + link-building", "Dedicated content studio (30 assets)", "Influencer & UGC campaigns", "Weekly strategy + dedicated PM", "CRO + landing page builds"] },
  { name: "Infinity Enterprise", num: "04", price: "Custom", gst: "Tailored to scope", period: "", target: "For enterprise & funded brands needing a full in-house growth team on retainer.", cta: "Talk to Sales", featured: false, dark: true, features: ["Everything in Revenue Accelerator", "Unlimited ad spend management", "Dedicated 6-person pod", "24/7 priority Slack channel", "Custom analytics warehouse", "Quarterly business reviews", "Performance-based fee options"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 px-5 sm:px-6 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#E8623D]" />
              <span className="tracking-[0.2em] uppercase text-[#E8623D] text-[11px] sm:text-[12px]">Pricing · Transparent</span>
            </div>
            <h2 className="tracking-tight text-[#0E0E0C]" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1, fontWeight: 400 }}>
              Plans that scale with your <em className="italic text-[#E8623D]">revenue —</em> not your headcount.
            </h2>
            <p className="mt-5 text-[#0E0E0C]/65 max-w-xl text-[15px] sm:text-[17px] leading-relaxed">
              No hidden fees. No 12-month lock-ins. Cancel anytime after the first 90 days.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => {
            const dark = p.dark;
            const featured = p.featured;
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  className={`relative p-7 sm:p-8 flex flex-col h-full border-t border-l border-[#0E0E0C]/15 ${i === plans.length - 1 ? "lg:border-r" : ""} ${i % 2 === 1 ? "md:border-r lg:border-r-0" : ""} ${i === plans.length - 1 ? "md:border-r" : ""} border-b ${
                    dark ? "bg-[#0E0E0C] text-[#F5F1EA]" : featured ? "bg-[#D4FF3A] text-[#0E0E0C]" : "bg-[#F5F1EA] text-[#0E0E0C]"
                  }`}
                >
                  {featured && (
                    <motion.span initial={{ scale: 0, rotate: -12 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring", stiffness: 200 }} className="absolute top-4 right-4 px-2.5 py-1 bg-[#0E0E0C] text-[#D4FF3A] tracking-[0.15em] uppercase text-[10px]">
                      Most Popular
                    </motion.span>
                  )}
                  <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <span className="tracking-[0.15em] uppercase opacity-60 text-[11px]">Plan {p.num}</span>
                  </div>

                  <h3 className="tracking-tight" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.5rem, 2.2vw, 1.875rem)", lineHeight: 1.05, fontWeight: 400 }}>
                    {p.name}
                  </h3>
                  <p className={`mt-3 min-h-[60px] text-[14px] leading-relaxed ${dark ? "text-[#F5F1EA]/65" : "text-[#0E0E0C]/65"}`}>
                    {p.target}
                  </p>

                  <div className={`mt-7 pb-5 border-b ${dark ? "border-[#F5F1EA]/15" : "border-[#0E0E0C]/15"}`}>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="tracking-tight" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.25rem, 3.5vw, 2.75rem)", fontWeight: 400, lineHeight: 1 }}>
                        {p.price}
                      </span>
                      <span className={`text-[14px] ${dark ? "text-[#F5F1EA]/60" : "text-[#0E0E0C]/60"}`}>{p.period}</span>
                    </div>
                    <span className={`text-[13px] ${dark ? "text-[#F5F1EA]/60" : "text-[#0E0E0C]/60"}`}>{p.gst}</span>
                  </div>

                  <ul className="mt-5 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px] leading-snug">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? "text-[#D4FF3A]" : featured ? "text-[#0E0E0C]" : "text-[#E8623D]"}`} strokeWidth={2.5} />
                        <span className={dark ? "text-[#F5F1EA]/90" : "text-[#0E0E0C]/85"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    whileHover="hover"
                    className={`group mt-7 inline-flex items-center justify-between px-5 py-4 text-[14px] sm:text-[15px] transition-colors ${
                      dark ? "bg-[#D4FF3A] text-[#0E0E0C] hover:bg-[#F5F1EA]" : featured ? "bg-[#0E0E0C] text-[#D4FF3A] hover:bg-[#E8623D] hover:text-[#F5F1EA]" : "bg-[#0E0E0C] text-[#F5F1EA] hover:bg-[#E8623D]"
                    }`}
                  >
                    <span>{p.cta}</span>
                    <motion.span variants={{ hover: { rotate: 45 } }} transition={{ duration: 0.3 }}>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-[#0E0E0C]/60 text-[13px] sm:text-[14px]">
          All plans include onboarding, a dedicated account manager, and full access to our reporting dashboard.
        </p>
      </div>
    </section>
  );
}
