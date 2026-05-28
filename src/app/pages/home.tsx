import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, ArrowRight, Star, TrendingDown, Clock, Target, DollarSign, Quote, Zap } from "lucide-react";
import { Reveal, Marquee } from "../components/reveal";
import { serif, Eyebrow } from "../components/shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Magnetic, CountUp } from "../components/magnetic";
import { UnderlineWord } from "../components/underline-word";

const outcomes = [
  { value: 4.8, decimals: 1, suffix: "×", label: "Avg ROAS · 90 days" },
  { value: 312, suffix: "%", label: "Organic traffic growth" },
  { value: 62, suffix: "%", label: "Lower CPA" },
  { value: 150, suffix: "+", label: "Brands scaled" },
];

const painPoints = [
  { num: "01", icon: TrendingDown, title: "Flatlining revenue", desc: "Marketing spend climbs every quarter — but leads and sales refuse to follow." },
  { num: "02", icon: Clock, title: "Time-starved teams", desc: "Founders running ads at midnight. Internal teams stretched across 14 tools." },
  { num: "03", icon: Target, title: "No clear strategy", desc: "Random posts. Random ads. Random vendors. Zero compounding system." },
  { num: "04", icon: DollarSign, title: "Wasted ad spend", desc: "Burning ₹50K+/month with zero ROAS clarity. Agencies that ghost." },
];

const logos = ["NovaSkin", "FinEdge", "LearnLeap", "Verdant", "Maple&Co", "Orbital", "Kinetic", "Halo Labs"];

export function Home() {
  return (
    <>
      {/* HERO — split layout with image card */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-10 sm:mb-12 text-[#0E0E0C]/60 tracking-[0.15em] uppercase text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-3">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#E8623D] animate-ping opacity-75" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-[#E8623D]" />
                </span>
                Booking Q3 2026 · 4 slots left
              </div>
              <div className="hidden sm:block">Bengaluru · est. 2019</div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2.75rem, 8.5vw, 8rem)", lineHeight: 0.93 }}>
                <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="inline">Marketing that </motion.span>
                <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
                  <UnderlineWord delay={0.9}>earns</UnderlineWord>
                </motion.span>
                <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="inline"> its keep — </motion.span>
                <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }} className="italic inline">measured in rupees,</motion.span>
                <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }} className="inline"> not impressions.</motion.span>
              </h1>
            </div>
            <Reveal delay={0.5} className="lg:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#0E0E0C]/15 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="PixelPulse team strategy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-[#F5F1EA]">
                  <p className="tracking-[0.15em] uppercase text-[10px] text-[#D4FF3A] mb-2">Inside the studio</p>
                  <p style={{ ...serif, fontSize: "1.35rem", lineHeight: 1.2 }}>A 6-person growth pod. One Slack channel. Zero excuses.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.7}>
            <div className="mt-10 sm:mt-14 grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="text-[#0E0E0C]/70 max-w-xl text-[15px] sm:text-[17px] leading-relaxed">
                  PixelPulse is a performance-first digital studio helping 150+ ambitious brands turn ad spend into compounding revenue. No fluff. No 60-page decks. Just measurable growth — on the timeline you actually need.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Magnetic>
                    <Link to="/contact" className="group inline-flex items-center justify-between gap-6 bg-[#0E0E0C] text-[#F5F1EA] px-5 sm:px-6 py-3.5 sm:py-4 hover:bg-[#E8623D] transition text-[14px] sm:text-[15px] w-full sm:w-auto">
                      Get my free growth audit <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </Link>
                  </Magnetic>
                  <Link to="/services" className="group inline-flex items-center justify-between gap-6 border border-[#0E0E0C]/25 px-5 sm:px-6 py-3.5 sm:py-4 hover:bg-[#0E0E0C] hover:text-[#F5F1EA] transition text-[14px] sm:text-[15px]">
                    Explore services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
              <div className="border-l border-[#0E0E0C]/15 pl-5 sm:pl-6">
                <div className="flex items-center gap-1 mb-2">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-[#0E0E0C] text-[#0E0E0C]" />)}
                </div>
                <p className="tracking-tight" style={{ ...serif, fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)", lineHeight: 1.25 }}>
                  "Easily the best 90-day decision we made all year."
                </p>
                <p className="mt-3 text-[#0E0E0C]/60 text-[13px]">— Rohan Mehta, CMO at FinEdge</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-[#0E0E0C] text-[#F5F1EA] py-12 sm:py-16 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.08}>
              <div className={`px-2 sm:px-6 ${i !== outcomes.length - 1 ? "md:border-r border-[#F5F1EA]/15" : ""}`}>
                <div className="tracking-tight text-[#D4FF3A] tabular-nums" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
                  <CountUp to={o.value} suffix={o.suffix} decimals={o.decimals ?? 0} />
                </div>
                <div className="mt-3 text-[#F5F1EA]/60 tracking-[0.1em] uppercase text-[10px] sm:text-[11px]">{o.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-12 sm:py-14 border-b border-[#0E0E0C]/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#0E0E0C]/50 tracking-[0.2em] uppercase mb-8 text-[10px] sm:text-[11px] px-5">Trusted by category leaders</p>
          <Marquee items={logos} />
        </div>
      </section>

      {/* PAIN POINTS preview */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 mb-12 sm:mb-16 items-end">
              <div>
                <Eyebrow>The honest truth</Eyebrow>
                <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
                  If your growth feels <em className="italic text-[#E8623D]">stuck —</em> you're not alone.
                </h2>
              </div>
              <p className="text-[#0E0E0C]/65 text-[15px] sm:text-[17px] leading-relaxed">
                We've audited 1,000+ ad accounts in the last five years. The same four problems show up in 9 out of every 10. Recognise any of these?
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#0E0E0C]/15">
            {painPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="group p-6 sm:p-8 border-r border-b border-[#0E0E0C]/15 hover:bg-[#0E0E0C] hover:text-[#F5F1EA] transition-colors duration-500 h-full">
                    <div className="flex items-center justify-between mb-10 sm:mb-12">
                      <span className="tracking-tight opacity-60" style={{ ...serif, fontSize: "1.75rem" }}>{p.num}</span>
                      <Icon className="w-5 h-5 opacity-60 group-hover:opacity-100 transition" />
                    </div>
                    <h3 className="tracking-tight" style={{ ...serif, fontSize: "1.5rem", lineHeight: 1.1 }}>{p.title}</h3>
                    <p className="mt-3 opacity-65 text-[14px] leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY preview */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-[#D4FF3A] text-[#0E0E0C] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow color="#0E0E0C">Featured · Case 01</Eyebrow>
              <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.95 }}>
                How <em className="italic">NovaSkin</em> went from ₹3L to ₹47L MRR in 7 months.
              </h2>
              <p className="mt-6 text-[#0E0E0C]/75 text-[15px] sm:text-[17px] leading-relaxed max-w-md">
                A complete teardown of their Meta funnel, a UGC-led creative system, and a CRO sprint that lifted conversions 2.4×.
              </p>
              <Link to="/work" className="group mt-8 inline-flex items-center gap-3 bg-[#0E0E0C] text-[#D4FF3A] px-5 py-3.5 hover:bg-[#E8623D] hover:text-[#F5F1EA] transition text-[14px] sm:text-[15px]">
                Read the case study <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
              </Link>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="aspect-square bg-[#0E0E0C] text-[#F5F1EA] p-6 sm:p-8 flex flex-col justify-between">
                  <span className="tracking-[0.15em] uppercase text-[10px] text-[#D4FF3A]">Revenue ▲</span>
                  <div className="tracking-tight" style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9 }}>1,471<span className="text-[#D4FF3A]">%</span></div>
                </div>
                <div className="aspect-square overflow-hidden border border-[#0E0E0C]/20">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Strategy meeting" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square overflow-hidden border border-[#0E0E0C]/20">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Team workshop" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-[#E8623D] text-[#F5F1EA] p-6 sm:p-8 flex flex-col justify-between">
                  <span className="tracking-[0.15em] uppercase text-[10px]">ROAS</span>
                  <div className="tracking-tight" style={{ ...serif, fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9 }}>6.2×</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process strip */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="tracking-tight max-w-3xl" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
              A simple four-step <em className="italic text-[#E8623D]">growth loop —</em> repeated every 30 days.
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { n: "01", t: "Audit", d: "We teardown your funnel, ad accounts, and competitors. 50+ data points." },
              { n: "02", t: "Strategy", d: "A 90-day roadmap with hypotheses, KPIs, and weekly milestones." },
              { n: "03", t: "Build", d: "Creative, copy, landing pages, automations — shipped in 7-day sprints." },
              { n: "04", t: "Compound", d: "Review, double-down on winners, kill losers. Repeat monthly." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="relative p-6 sm:p-8 border border-[#0E0E0C]/15 h-full hover:border-[#0E0E0C] transition">
                  <div className="tracking-tight text-[#E8623D]" style={{ ...serif, fontSize: "2.5rem", lineHeight: 1 }}>{s.n}</div>
                  <h3 className="mt-8 tracking-tight" style={{ ...serif, fontSize: "1.5rem", lineHeight: 1.1 }}>{s.t}</h3>
                  <p className="mt-3 text-[#0E0E0C]/65 text-[14px] leading-relaxed">{s.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-8 mb-12 items-end">
              <div>
                <Eyebrow>Inside the studio</Eyebrow>
                <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
                  Built for <em className="italic text-[#E8623D]">compounding</em> — not campaigns.
                </h2>
              </div>
              <p className="text-[#0E0E0C]/65 text-[15px] sm:text-[17px] leading-relaxed">
                A glimpse of how the studio runs day-to-day — the rituals, numbers, and people behind every growth pod.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px]">
            {/* Big quote card */}
            <motion.div whileHover={{ y: -4 }} className="col-span-2 md:col-span-2 md:row-span-2 bg-[#0E0E0C] text-[#F5F1EA] p-6 sm:p-8 flex flex-col justify-between">
              <Quote className="w-7 h-7 text-[#D4FF3A]" />
              <div>
                <p className="tracking-tight" style={{ ...serif, fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)", lineHeight: 1.25 }}>
                  We measure ourselves on the only number that matters: <em className="italic text-[#D4FF3A]">your bottom line.</em>
                </p>
                <p className="mt-5 tracking-[0.15em] uppercase text-[#F5F1EA]/55 text-[10px]">Our operating principle 01</p>
              </div>
            </motion.div>

            {/* Stat */}
            <motion.div whileHover={{ y: -4 }} className="col-span-1 md:col-span-1 bg-[#D4FF3A] text-[#0E0E0C] p-5 sm:p-6 flex flex-col justify-between">
              <span className="tracking-[0.15em] uppercase text-[10px] opacity-70">Avg engagement</span>
              <div className="tracking-tight tabular-nums" style={{ ...serif, fontSize: "clamp(2.25rem, 4vw, 3.25rem)", lineHeight: 0.9 }}>
                <CountUp to={4.2} decimals={1} suffix=" yrs" />
              </div>
            </motion.div>

            {/* Stat */}
            <motion.div whileHover={{ y: -4 }} className="col-span-1 md:col-span-1 bg-[#E8623D] text-[#F5F1EA] p-5 sm:p-6 flex flex-col justify-between">
              <span className="tracking-[0.15em] uppercase text-[10px] opacity-80">Creatives shipped</span>
              <div className="tracking-tight tabular-nums" style={{ ...serif, fontSize: "clamp(2.25rem, 4vw, 3.25rem)", lineHeight: 0.9 }}>
                <CountUp to={420} suffix="/mo" />
              </div>
            </motion.div>

            {/* Image card */}
            <motion.div whileHover={{ y: -4 }} className="col-span-2 md:col-span-2 row-span-1 overflow-hidden border border-[#0E0E0C]/15 group relative">
              <ImageWithFallback src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" alt="Team workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0E0E0C]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-[#F5F1EA] flex items-end justify-between">
                <p className="tracking-tight" style={{ ...serif, fontSize: "1.25rem", lineHeight: 1.2 }}>Weekly war-room sessions.</p>
                <span className="tracking-[0.15em] uppercase text-[10px] text-[#D4FF3A]">Live now</span>
              </div>
            </motion.div>

            {/* Process card */}
            <motion.div whileHover={{ y: -4 }} className="col-span-2 md:col-span-2 border border-[#0E0E0C]/15 p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="tracking-[0.15em] uppercase text-[10px] text-[#0E0E0C]/55">Sprint rhythm</span>
                <Zap className="w-4 h-4 text-[#E8623D]" />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {["Mon", "Tue", "Wed", "Thu"].map((d, i) => (
                  <div key={d} className="text-center">
                    <div className={`h-2 rounded-full ${i < 3 ? "bg-[#E8623D]" : "bg-[#0E0E0C]/15"}`} />
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#0E0E0C]/55 mt-2 block">{d}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#0E0E0C]/75 text-[13px] sm:text-[14px] leading-relaxed mt-4">7-day creative sprints. Every Friday: review, kill, scale.</p>
            </motion.div>

            {/* Stat */}
            <motion.div whileHover={{ y: -4 }} className="col-span-1 md:col-span-1 border border-[#0E0E0C]/15 p-5 sm:p-6 flex flex-col justify-between">
              <span className="tracking-[0.15em] uppercase text-[10px] text-[#0E0E0C]/55">Senior operators</span>
              <div className="tracking-tight tabular-nums" style={{ ...serif, fontSize: "clamp(2.25rem, 4vw, 3.25rem)", lineHeight: 0.9 }}>
                <CountUp to={22} />
              </div>
            </motion.div>

            {/* Big number card */}
            <motion.div whileHover={{ y: -4 }} className="col-span-1 md:col-span-1 bg-[#0E0E0C] text-[#D4FF3A] p-5 sm:p-6 flex flex-col justify-between">
              <span className="tracking-[0.15em] uppercase text-[10px] opacity-70">Revenue generated</span>
              <div className="tracking-tight tabular-nums" style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 0.9 }}>
                ₹<CountUp to={120} suffix="Cr+" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial big block */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-[#0E0E0C] text-[#F5F1EA]">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <div className="flex justify-center gap-1 mb-8">
              {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-[#D4FF3A] text-[#D4FF3A]" />)}
            </div>
            <blockquote className="tracking-tight" style={{ ...serif, fontSize: "clamp(1.75rem, 4vw, 3.25rem)", lineHeight: 1.15 }}>
              "PixelPulse turned our cold ad account into a profit engine. Seven months in — <em className="italic text-[#D4FF3A]">we're a different company.</em>"
            </blockquote>
            <p className="mt-10 tracking-[0.15em] uppercase text-[#F5F1EA]/60 text-[11px]">Ananya Kapoor · Founder, NovaSkin Cosmetics</p>
            <Link to="/work" className="group mt-10 inline-flex items-center gap-3 text-[14px] hover:text-[#D4FF3A] transition">
              Read more testimonials <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
