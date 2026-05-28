import { motion } from "motion/react";
import { Reveal } from "../components/reveal";
import { PageHero, CTABlock, serif, Eyebrow } from "../components/shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const values = [
  { num: "01", t: "Profit, not posts", d: "We measure ourselves on the only number that matters: your bottom line. Vanity metrics are a tax." },
  { num: "02", t: "Senior by default", d: "No juniors learning on your account. Every pod is led by a 10+ year operator with their own scars." },
  { num: "03", t: "Honesty over polish", d: "We'd rather lose the pitch than over-promise. Our audits are infamously direct." },
  { num: "04", t: "Compound, don't sprint", d: "We pick partners we can build with for 3+ years, not 3 months. Slow is fast." },
];

const team = [
  { name: "Ananya Iyer", role: "Founder & Strategy", img: "https://images.unsplash.com/photo-1769636929131-56dd60238266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { name: "Vikram Shah", role: "Head of Paid Media", img: "https://images.unsplash.com/photo-1758600437143-5d77b940b041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { name: "Meera Pillai", role: "Creative Director", img: "https://images.unsplash.com/photo-1572883475077-fb5aca766ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { name: "Arjun Bhat", role: "Head of SEO", img: "https://images.unsplash.com/photo-1769636929130-56648d6e9c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
];

const milestones = [
  { y: "2019", t: "PixelPulse founded above a café in Indiranagar by 3 ex-agency operators." },
  { y: "2021", t: "First ₹10Cr revenue milestone for a client. Studio grows to 8 people." },
  { y: "2023", t: "Featured in Inc42's Top 30 Marketing Studios. Crossed ₹50Cr generated for clients." },
  { y: "2025", t: "Opened the content production studio. Team of 22 spanning 4 disciplines." },
  { y: "2026", t: "₹120Cr+ revenue generated across 150+ brands. Booking Q3." },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="The studio · est. 2019"
        title="A 22-person growth studio with one"
        italicWord="obsession."
        description="We started PixelPulse because every agency we'd worked at sold tactics instead of outcomes. Six years later, we're still doing it the harder, slower, more profitable way."
        meta={{ left: "Section · About", right: "Bengaluru, India" }}
      />

      {/* Big image + manifesto */}
      <section className="px-5 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
                alt="The PixelPulse studio at work"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-16 sm:mt-20">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Manifesto</Eyebrow>
              <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
                We don't do <em className="italic text-[#E8623D]">marketing.</em> We engineer growth.
              </h2>
            </Reveal>
            <div className="lg:col-span-7 space-y-5 text-[#0E0E0C]/75 text-[15px] sm:text-[17px] leading-relaxed">
              <p>Most agencies sell hours. We sell outcomes. The difference shows up in our reporting, our retention rate, and the founders who refer us to their friends without being asked.</p>
              <p>We believe great marketing is 30% creativity, 40% taste, and 30% math. We hire for all three — and we'll never ship work we wouldn't be proud to put our own brand behind.</p>
              <p>And we believe the best client–agency relationships look more like co-founders than vendors. That's why we offer equity options, performance fees, and 3+ year roadmaps. It's why our average client stays 4.2 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-[#0E0E0C] text-[#F5F1EA]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow color="#D4FF3A">What we believe</Eyebrow>
            <h2 className="tracking-tight max-w-3xl" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
              Four operating <em className="italic text-[#D4FF3A]">principles —</em> never up for debate.
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F5F1EA]/15">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="bg-[#0E0E0C] p-6 sm:p-8 h-full">
                  <div className="tracking-tight text-[#D4FF3A]" style={{ ...serif, fontSize: "2.5rem", lineHeight: 1 }}>{v.num}</div>
                  <h3 className="mt-10 tracking-tight" style={{ ...serif, fontSize: "1.5rem", lineHeight: 1.1 }}>{v.t}</h3>
                  <p className="mt-3 text-[#F5F1EA]/65 text-[14px] leading-relaxed">{v.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <Eyebrow>The team · 22 strong</Eyebrow>
            <h2 className="tracking-tight max-w-3xl" style={{ ...serif, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1 }}>
              The pod that will <em className="italic text-[#E8623D]">actually</em> run your account.
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <motion.div whileHover="hover" className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-[#0E0E0C] mb-4">
                    <motion.div variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.7 }} className="w-full h-full">
                      <ImageWithFallback src={m.img} alt={m.name} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="tracking-tight" style={{ ...serif, fontSize: "1.35rem", lineHeight: 1.1 }}>{m.name}</h3>
                    <span className="w-7 h-7 rounded-full border border-[#0E0E0C]/25 flex items-center justify-center group-hover:bg-[#E8623D] group-hover:text-[#F5F1EA] group-hover:border-[#E8623D] transition">
                      <span className="text-[11px]">→</span>
                    </span>
                  </div>
                  <p className="text-[#0E0E0C]/60 text-[13px] mt-1">{m.role}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-[#F5F1EA] border-t border-[#0E0E0C]/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Timeline · 2019 → today</Eyebrow>
            <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
              From <em className="italic text-[#E8623D]">three founders</em> in a café to twenty-two in a studio.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.06}>
                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-6 py-6 border-t border-[#0E0E0C]/15 last:border-b">
                  <div className="tracking-tight text-[#E8623D]" style={{ ...serif, fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>{m.y}</div>
                  <p className="text-[#0E0E0C]/80 text-[15px] sm:text-[17px] leading-relaxed self-center">{m.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Want to build something" italic="with us?" ctaLabel="Start a project" />
    </>
  );
}
