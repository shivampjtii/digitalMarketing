import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, Search, Megaphone, Share2, Palette, PenTool, Check } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, CTABlock, serif, Eyebrow } from "../components/shared";
import { ServicesCarousel } from "../components/services-carousel";

const detail = [
  { icon: Search, num: "01", tag: "SEO", title: "Search Engine Optimization", desc: "We engineer organic traffic that compounds. Technical foundations, topical authority, and link velocity working together for 6, 12, 24 months out.", deliverables: ["Technical SEO audit + fixes", "Topic-cluster content plan", "30-keyword tracking", "Authority link-building"] },
  { icon: Megaphone, num: "02", tag: "Paid Media", title: "Paid Advertising", desc: "Google, Meta, LinkedIn. We launch tested creative against tight audiences, then scale only what proves out in ROAS — not in click reports.", deliverables: ["Account architecture rebuild", "Creative testing system", "Pixel + conversion audit", "Weekly optimisation"] },
  { icon: Share2, num: "03", tag: "Organic Social", title: "Social Media Marketing", desc: "Founder-led, creator-led, community-led. We build social presences that audiences actually want to follow — and that quietly drive sales.", deliverables: ["Content calendar (3 platforms)", "Short-form video production", "Community management", "Reporting + insights"] },
  { icon: Palette, num: "04", tag: "Brand", title: "Branding & Identity", desc: "Positioning that wins category battles. Identity systems that earn premium pricing. The strategic core every other channel sits on top of.", deliverables: ["Brand positioning sprint", "Logo + visual identity", "Voice & messaging framework", "Brand guidelines doc"] },
  { icon: PenTool, num: "05", tag: "Content Studio", title: "Content Creation", desc: "A full content engine in one team — long-form articles, short-form video, lifecycle email, sales decks. All on-brand, all on-deadline.", deliverables: ["30+ assets / month", "Editorial calendar", "SEO + distribution", "Performance review"] },
];

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities · 05"
        title="Five compounding growth"
        italicWord="engines."
        description="We don't sell tactics. We sell systems. Each capability below works on its own — but they're built to interlock into one accountable growth team."
        meta={{ left: "Section · Services", right: "Last updated · May 2026" }}
      />

      {/* Service detail rows */}
      <section className="px-5 sm:px-6">
        <div className="max-w-7xl mx-auto divide-y divide-[#0E0E0C]/15">
          {detail.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={i * 0.05}>
                <motion.div whileHover="hover" className="group grid lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-16 items-start">
                  <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between gap-4">
                    <span className="tracking-tight text-[#E8623D]" style={{ ...serif, fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1 }}>{s.num}</span>
                    <motion.div variants={{ hover: { rotate: -8, scale: 1.1 } }} className="w-12 h-12 border border-[#0E0E0C]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <div className="lg:col-span-6">
                    <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/55 text-[11px]">{s.tag}</span>
                    <h3 className="mt-3 tracking-tight" style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>{s.title}</h3>
                    <p className="mt-5 text-[#0E0E0C]/70 max-w-xl text-[15px] sm:text-[17px] leading-relaxed">{s.desc}</p>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all text-[14px]">
                      Get a free audit <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
                    </Link>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="tracking-[0.15em] uppercase text-[#0E0E0C]/55 text-[11px] mb-4">What's included</p>
                    <ul className="space-y-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[14px]">
                          <Check className="w-4 h-4 mt-0.5 text-[#E8623D] shrink-0" strokeWidth={2.5} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Carousel feature */}
      <ServicesCarousel />

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
              Questions we get <em className="italic text-[#E8623D]">all the time.</em>
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {[
              { q: "How quickly can we see results?", a: "Paid media: 14–30 days. SEO: 90–180 days. Brand: lifetime. We set expectations transparently in the audit." },
              { q: "Do you take equity?", a: "For select startups, yes. We've taken equity in 4 portfolio brands since 2022 — usually in exchange for reduced fees." },
              { q: "Can we work with just one service?", a: "Yes. Many clients start with paid or SEO and expand later. Our pricing plans reflect this." },
              { q: "What industries do you specialise in?", a: "D2C, B2B SaaS, fintech, and education. We turn down work outside our expertise — better for everyone." },
              { q: "Where are you based?", a: "Bengaluru, India. Our 22-person team works on India + SEA + GCC time zones." },
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

      <CTABlock title="Ready to pick your" italic="growth lever?" />
    </>
  );
}
