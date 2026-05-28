import { motion } from "motion/react";
import { Link } from "react-router";
import { Check, ArrowUpRight, X } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, CTABlock, serif, Eyebrow } from "../components/shared";
import { Pricing as PricingGrid } from "../components/pricing";

const compareRows = [
  { feature: "Brand audit & positioning", values: [true, true, true, true] },
  { feature: "Logo & identity system", values: [true, true, true, true] },
  { feature: "SEO program", values: ["Basic", "30 KW", "Advanced", "Unlimited"] },
  { feature: "Paid ad management", values: [false, "₹2L spend", "₹8L spend", "Unlimited"] },
  { feature: "Content studio (assets/mo)", values: ["12", "20", "30", "Unlimited"] },
  { feature: "Strategy calls", values: ["Monthly", "Bi-weekly", "Weekly", "On demand"] },
  { feature: "Dedicated PM", values: [false, false, true, true] },
  { feature: "Performance-fee option", values: [false, false, true, true] },
  { feature: "Priority Slack", values: [false, false, false, true] },
];

const planNames = ["Kickstart", "Growth", "Accelerator", "Enterprise"];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="w-4 h-4 text-[#E8623D] mx-auto" strokeWidth={2.5} />;
  if (v === false) return <X className="w-4 h-4 text-[#0E0E0C]/25 mx-auto" />;
  return <span className="text-[13px]">{v}</span>;
}

export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing · Transparent"
        title="Built to scale with"
        italicWord="your revenue."
        description="Four plans. No hidden fees. No 12-month lock-ins. Cancel anytime after the first 90-day commitment. GST applies on all India-based engagements."
        meta={{ left: "Section · Pricing", right: "INR · Effective May 2026" }}
      />

      <PricingGrid />

      {/* Comparison table */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-[#0E0E0C] text-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow color="#D4FF3A">Compare plans · Feature matrix</Eyebrow>
            <h2 className="tracking-tight max-w-3xl" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
              Side-by-side. <em className="italic text-[#D4FF3A]">No fine print.</em>
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-14 overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-[#F5F1EA]/15">
                  <th className="text-left py-4 tracking-[0.15em] uppercase text-[#F5F1EA]/60 text-[11px]">Feature</th>
                  {planNames.map((n, i) => (
                    <th key={n} className={`py-4 tracking-tight ${i === 1 ? "text-[#D4FF3A]" : ""}`} style={{ ...serif, fontSize: "1.25rem" }}>
                      {n}
                      {i === 1 && <div className="tracking-[0.15em] uppercase text-[10px] mt-1 text-[#D4FF3A]/80" style={{ fontFamily: "'Inter', sans-serif" }}>Most popular</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <motion.tr key={row.feature} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="border-b border-[#F5F1EA]/10 hover:bg-[#F5F1EA]/5 transition-colors">
                    <td className="py-4 text-[14px]">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="py-4 text-center text-[#F5F1EA]/85">
                        <Cell v={v} />
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="group inline-flex items-center justify-between gap-6 bg-[#D4FF3A] text-[#0E0E0C] px-6 py-4 hover:bg-[#F5F1EA] transition text-[14px] sm:text-[15px]">
              Talk to sales <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Pricing FAQ</Eyebrow>
            <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
              What founders <em className="italic text-[#E8623D]">always ask.</em>
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {[
              { q: "Are there setup fees?", a: "No. Onboarding, kickoff, audits, and dashboards are included in your first month." },
              { q: "Do prices include GST?", a: "No. India-based engagements add 18% GST. International billing is GST-exempt." },
              { q: "Can I upgrade or downgrade?", a: "Anytime — pro-rated to the day. Most clients upgrade within 90 days as ROAS proves out." },
              { q: "Is there a contract?", a: "A 90-day initial commitment, then month-to-month. 14-day exit window after that." },
              { q: "Do you offer performance fees?", a: "Yes, on Accelerator and Enterprise — a reduced base plus a % of incremental revenue." },
            ].map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group border-t border-[#0E0E0C]/15 py-6 last:border-b">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="tracking-tight pr-4" style={{ ...serif, fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)" }}>{f.q}</span>
                    <span className="w-8 h-8 rounded-full border border-[#0E0E0C]/25 flex items-center justify-center shrink-0 transition group-open:bg-[#E8623D] group-open:text-[#F5F1EA] group-open:rotate-45">
                      <span className="text-lg leading-none -mt-0.5">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-[#0E0E0C]/70 max-w-2xl text-[14px] sm:text-[15px] leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Still unsure?" italic="Let's chat — no decks." />
    </>
  );
}
