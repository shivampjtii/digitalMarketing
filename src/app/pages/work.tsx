import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "../components/reveal";
import { PageHero, CTABlock, serif, Eyebrow } from "../components/shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HoverPreviewList } from "../components/hover-preview-list";

const cases = [
  {
    brand: "NovaSkin Cosmetics",
    metric: "1,471%",
    label: "Revenue growth in 7 months",
    tag: "D2C · Beauty",
    desc: "Rebuilt the Meta funnel, launched a UGC creative engine, and ran a 6-week CRO sprint on the PDP.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    bg: "bg-[#D4FF3A] text-[#0E0E0C]",
  },
  {
    brand: "FinEdge Capital",
    metric: "₹2.1Cr",
    label: "Pipeline generated in Q1",
    tag: "B2B · Fintech",
    desc: "ABM on LinkedIn + outbound + a thought-leadership content engine led by the founder.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    bg: "bg-[#0E0E0C] text-[#F5F1EA]",
  },
  {
    brand: "LearnLeap EdTech",
    metric: "62%",
    label: "Lower CAC vs. industry avg.",
    tag: "SaaS · Education",
    desc: "Built a programmatic SEO engine across 12,000 long-tail pages. Now ranking for the buying-intent terms.",
    img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    bg: "bg-[#F5F1EA] text-[#0E0E0C] border border-[#0E0E0C]/15",
  },
  {
    brand: "Verdant Apparel",
    metric: "4.8×",
    label: "ROAS on cold Meta",
    tag: "D2C · Fashion",
    desc: "Founder-led short-form, paired with a creative-testing system that ships 40 variants per month.",
    img: "https://images.unsplash.com/photo-1700938550585-50ab9f83e075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
    bg: "bg-[#E8623D] text-[#F5F1EA]",
  },
];

const testimonials = [
  { quote: "PixelPulse turned our cold ad account into a profit engine. We went from ₹3L MRR to ₹47L MRR in seven months — without raising prices.", name: "Ananya Kapoor", role: "Founder, NovaSkin Cosmetics" },
  { quote: "I've worked with four agencies. None compare. Their reporting is brutally honest and their creative team ships faster than our internal one.", name: "Rohan Mehta", role: "CMO, FinEdge Capital" },
  { quote: "Within six months we ranked #1 for our three highest-intent keywords. Inbound leads now cover the entire retainer eight times over.", name: "Priya Subramanian", role: "Director, LearnLeap EdTech" },
  { quote: "The most senior agency team we've ever worked with. They treat our P&L like their own.", name: "Karan Doshi", role: "Co-founder, Verdant Apparel" },
];

export function Work() {
  return (
    <>
      <PageHero
        eyebrow="Selected work · 2022–2026"
        title="Numbers we're"
        italicWord="proud of."
        description="Every brand below started with a free growth audit. Every one of them is still a client. Click in for the messy, honest breakdown of what we shipped."
        meta={{ left: "Section · Case Studies", right: "Updated quarterly" }}
      />

      {/* Quick index with cursor-following preview */}
      <section className="px-5 sm:px-6 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-6 sm:mb-8">
              <Eyebrow>Index · Hover to preview</Eyebrow>
              <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/55 text-[10px] sm:text-[11px]">{cases.length} case studies</span>
            </div>
            <HoverPreviewList items={cases.map((c) => ({ brand: c.brand, tag: c.tag, metric: c.metric, img: c.img }))} />
          </Reveal>
        </div>
      </section>

      {/* Featured asymmetric case studies */}
      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {cases.map((c, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={c.brand} delay={i * 0.08}>
                <motion.article whileHover="hover" className={`group grid lg:grid-cols-12 gap-0 ${c.bg} overflow-hidden`}>
                  <div className={`lg:col-span-5 aspect-[4/3] lg:aspect-auto relative overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
                    <motion.div variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.7 }} className="w-full h-full">
                      <ImageWithFallback src={c.img} alt={`${c.brand} case study`} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
                    <div className="flex items-center justify-between tracking-[0.15em] uppercase opacity-70 text-[10px] sm:text-[11px]">
                      <span>Case 0{i + 1} · {c.tag}</span>
                      <span>2025–26</span>
                    </div>
                    <div>
                      <div className="tracking-tight" style={{ ...serif, fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.9 }}>
                        {c.metric}
                      </div>
                      <p className="mt-3 opacity-80 text-[15px] sm:text-[17px]">{c.label}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-6 border-t border-current/20">
                      <div className="max-w-md">
                        <h3 className="tracking-tight" style={{ ...serif, fontSize: "clamp(1.5rem, 2.2vw, 1.875rem)", lineHeight: 1.1 }}>{c.brand}</h3>
                        <p className="mt-2 opacity-75 text-[14px] sm:text-[15px] leading-relaxed">{c.desc}</p>
                      </div>
                      <motion.a href="#" variants={{ hover: { x: 4 } }} className="inline-flex items-center gap-2 self-start sm:self-end text-[14px]">
                        Read case study <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Testimonials wall */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-[#F5F1EA] border-t border-[#0E0E0C]/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow>Reviews · 4.9 / 5 on Clutch</Eyebrow>
            <h2 className="tracking-tight max-w-3xl" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
              Words from the founders we <em className="italic text-[#E8623D]">actually work with.</em>
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-14 grid md:grid-cols-2 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <motion.figure whileHover={{ y: -6 }} className="p-6 sm:p-10 bg-[#F5F1EA] border border-[#0E0E0C]/15 h-full">
                  <div className="flex gap-0.5 mb-5">
                    {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-[#E8623D] text-[#E8623D]" />)}
                  </div>
                  <blockquote className="tracking-tight" style={{ ...serif, fontSize: "clamp(1.25rem, 1.8vw, 1.625rem)", lineHeight: 1.25 }}>
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8 pt-5 border-t border-[#0E0E0C]/15 flex items-center justify-between">
                    <div>
                      <div className="text-[14px]" style={{ fontWeight: 600 }}>{t.name}</div>
                      <div className="text-[#0E0E0C]/60 text-[12px]">{t.role}</div>
                    </div>
                    <Link to="/contact" className="text-[12px] tracking-[0.15em] uppercase hover:text-[#E8623D] transition">Work with us →</Link>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Your brand could be" italic="case 09." />
    </>
  );
}
