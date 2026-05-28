import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Reveal } from "../components/reveal";
import { serif, Eyebrow } from "../components/shared";

const services = ["SEO", "Paid Ads", "Social Media", "Branding", "Content", "Everything"];
const budgets = ["Under ₹50K", "₹50K – ₹2L", "₹2L – ₹10L", "₹10L+"];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", budget: budgets[1], services: [] as string[] });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setForm((f) => ({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-6 border-b border-[#0E0E0C]/10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-between mb-8 sm:mb-12 text-[#0E0E0C]/55 tracking-[0.15em] uppercase text-[10px] sm:text-[11px]">
              <span>Section · Contact</span>
              <span className="hidden sm:block">24h reply · guaranteed</span>
            </div>
            <Eyebrow>Let's talk</Eyebrow>
            <h1 className="tracking-tight max-w-5xl" style={{ ...serif, fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.94 }}>
              Get a free <em className="italic text-[#E8623D]">growth audit —</em> built around your business.
            </h1>
            <p className="mt-8 text-[#0E0E0C]/70 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed">
              Tell us what you're working on. We'll teardown your funnel, find the leaks, and send back a recorded video walkthrough with a 90-day roadmap. Zero obligation. Zero sales pressure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-16 sm:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/60 text-[10px]">01 · Full name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full px-0 py-3 bg-transparent border-b border-[#0E0E0C]/25 focus:border-[#E8623D] focus:outline-none transition text-[15px]" placeholder="Ananya Kapoor" />
                </label>
                <label className="block">
                  <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/60 text-[10px]">02 · Work email</span>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full px-0 py-3 bg-transparent border-b border-[#0E0E0C]/25 focus:border-[#E8623D] focus:outline-none transition text-[15px]" placeholder="you@brand.com" />
                </label>
              </div>
              <label className="block">
                <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/60 text-[10px]">03 · Company</span>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-2 w-full px-0 py-3 bg-transparent border-b border-[#0E0E0C]/25 focus:border-[#E8623D] focus:outline-none transition text-[15px]" placeholder="NovaSkin Cosmetics" />
              </label>

              <div>
                <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/60 text-[10px]">04 · What do you need help with?</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((s) => {
                    const active = form.services.includes(s);
                    return (
                      <motion.button
                        key={s}
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleService(s)}
                        className={`px-4 py-2 border text-[13px] transition ${active ? "bg-[#0E0E0C] text-[#F5F1EA] border-[#0E0E0C]" : "border-[#0E0E0C]/25 hover:border-[#0E0E0C]"}`}
                      >
                        {s}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/60 text-[10px]">05 · Monthly budget</span>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => {
                    const active = form.budget === b;
                    return (
                      <motion.button
                        key={b}
                        type="button"
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-3 py-3 border text-[13px] transition ${active ? "bg-[#E8623D] text-[#F5F1EA] border-[#E8623D]" : "border-[#0E0E0C]/25 hover:border-[#0E0E0C]"}`}
                      >
                        {b}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <label className="block">
                <span className="tracking-[0.15em] uppercase text-[#0E0E0C]/60 text-[10px]">06 · Tell us about your goals</span>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full px-0 py-3 bg-transparent border-b border-[#0E0E0C]/25 focus:border-[#E8623D] focus:outline-none transition resize-none text-[15px]" placeholder="We want to scale from ₹10L to ₹1Cr MRR in the next 12 months…" />
              </label>

              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto inline-flex items-center justify-between gap-6 bg-[#0E0E0C] text-[#F5F1EA] px-6 py-4 sm:py-5 hover:bg-[#E8623D] transition-colors text-[14px] sm:text-[15px]"
              >
                <AnimatePresence mode="wait">
                  <motion.span key={submitted ? "done" : "send"} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} transition={{ duration: 0.25 }}>
                    {submitted ? "Request received — we'll reply within 24h" : "Send my audit request"}
                  </motion.span>
                </AnimatePresence>
                {submitted ? <Check className="w-5 h-5" /> : <motion.span whileHover={{ rotate: 45 }}><ArrowUpRight className="w-5 h-5" /></motion.span>}
              </motion.button>
              <p className="text-[#0E0E0C]/55 text-[12px]">No spam. GDPR & DPDP compliant. Your details stay between us.</p>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 space-y-8">
            <div className="bg-[#0E0E0C] text-[#F5F1EA] p-6 sm:p-8">
              <p className="tracking-[0.15em] uppercase text-[#D4FF3A] text-[10px] mb-5">Direct lines</p>
              <ul className="space-y-5">
                {[
                  { icon: Mail, label: "hello@pixelpulse.studio", href: "mailto:hello@pixelpulse.studio" },
                  { icon: Phone, label: "+91 90000 00000", href: "tel:+919000000000" },
                  { icon: Calendar, label: "Book a 30-min audit call", href: "#" },
                  { icon: MapPin, label: "14 Indiranagar Lane, Bengaluru 560038", href: "#" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label}>
                      <a href={c.href} className="group flex items-start gap-4 hover:text-[#D4FF3A] transition">
                        <span className="w-9 h-9 border border-[#F5F1EA]/20 flex items-center justify-center shrink-0 group-hover:border-[#D4FF3A] transition">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="text-[15px] leading-snug">{c.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border border-[#0E0E0C]/15 p-6 sm:p-8">
              <p className="tracking-[0.15em] uppercase text-[#0E0E0C]/55 text-[10px] mb-5">What you'll get back</p>
              <ul className="space-y-3 text-[14px]">
                {["A recorded 20-min funnel teardown", "Competitor ad-account analysis", "90-day growth roadmap PDF", "A single Slack channel with us — no gatekeeping"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 text-[#E8623D] shrink-0" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 tracking-tight" style={{ ...serif, fontSize: "1.35rem", lineHeight: 1.25 }}>
                "Their audit alone was worth 3 months of agency fees."
              </p>
              <p className="mt-2 text-[#0E0E0C]/60 text-[12px]">— Priya, LearnLeap</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
