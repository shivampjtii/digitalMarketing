import { useEffect } from "react";
import { Outlet, useLocation, Link } from "react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "./components/navbar";
import { Grain } from "./components/magnetic";
import { SmoothScroll } from "./components/smooth-scroll";

const serif = { fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 } as const;

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export function Layout() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#0E0E0C] overflow-x-hidden relative" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <SmoothScroll />
      <Grain />
      <motion.div style={{ scaleX }} className="fixed top-0 inset-x-0 h-0.5 bg-[#D4FF3A] z-[60] origin-left" />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0E0E0C] text-[#F5F1EA] pt-20 pb-10 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <p className="tracking-[0.2em] uppercase text-[#D4FF3A] text-[11px] mb-5">Index · Footer</p>
            <h2 className="tracking-tight" style={{ ...serif, fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.95 }}>
              Let's make <em className="italic text-[#D4FF3A]">marketing</em> the most profitable line on your P&L.
            </h2>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 bg-[#D4FF3A] text-[#0E0E0C] px-5 py-3.5 text-[14px] hover:bg-[#F5F1EA] transition">
              Start a project <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="tracking-[0.15em] uppercase text-[#F5F1EA]/40 text-[11px] mb-4">Pages</p>
              <ul className="space-y-2 text-[14px]">
                {navItems.map((n) => (
                  <li key={n.to}><Link to={n.to} className="hover:text-[#D4FF3A]">{n.label}</Link></li>
                ))}
                <li><Link to="/contact" className="hover:text-[#D4FF3A]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="tracking-[0.15em] uppercase text-[#F5F1EA]/40 text-[11px] mb-4">Studio</p>
              <ul className="space-y-2 text-[14px] text-[#F5F1EA]/75">
                <li>14 Indiranagar Lane</li>
                <li>Bengaluru 560038</li>
                <li>India</li>
              </ul>
            </div>
            <div>
              <p className="tracking-[0.15em] uppercase text-[#F5F1EA]/40 text-[11px] mb-4">Contact</p>
              <ul className="space-y-2 text-[14px]">
                <li><a href="mailto:hello@pixelpulse.studio" className="hover:text-[#D4FF3A]">hello@pixelpulse.studio</a></li>
                <li><a href="tel:+919000000000" className="hover:text-[#D4FF3A]">+91 90000 00000</a></li>
                <li className="text-[#F5F1EA]/75">Mon–Fri · 10am–7pm IST</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5F1EA]/15 pt-10">
          <h3 className="tracking-tight leading-[0.85] text-center" style={{ ...serif, fontSize: "clamp(4rem, 18vw, 16rem)" }}>
            Pixel<em className="italic text-[#E8623D]">Pulse</em>
          </h3>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[#F5F1EA]/55 text-[12px]">
          <div className="flex gap-5 tracking-[0.1em] uppercase">
            <a href="#" className="hover:text-[#D4FF3A]">Privacy</a>
            <a href="#" className="hover:text-[#D4FF3A]">Terms</a>
            <a href="#" className="hover:text-[#D4FF3A]">Instagram</a>
            <a href="#" className="hover:text-[#D4FF3A]">LinkedIn</a>
          </div>
          <div>© 2026 PixelPulse Studio — Made in Bengaluru.</div>
        </div>
      </div>
    </footer>
  );
}
