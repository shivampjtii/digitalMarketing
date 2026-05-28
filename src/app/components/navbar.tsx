import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { Magnetic } from "./magnetic";

const serif = { fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 } as const;

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

const tickerItems = [
  "Booking Q3 2026 · 4 slots left",
  "₹120Cr+ revenue generated for clients",
  "4.9 / 5 rating on Clutch",
  "Featured in Inc42's Top 30 Marketing Studios",
];

export function AnnouncementTicker() {
  const loop = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div className="bg-[#0E0E0C] text-[#F5F1EA] overflow-hidden h-8 flex items-center border-b border-[#F5F1EA]/10">
      <motion.div
        className="flex gap-12 whitespace-nowrap tracking-[0.15em] uppercase text-[10px]"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 70, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-3">
            <Sparkles className="w-3 h-3 text-[#D4FF3A]" />
            <span className="text-[#F5F1EA]/85">{t}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 30);
  });

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <AnnouncementTicker />
      <header className="sticky top-0 inset-x-0 z-50 px-4 sm:px-6">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto max-w-7xl mt-5 sm:mt-7 transition-[background-color,border-color,box-shadow] duration-500 ${solid ? "bg-[#F5F1EA]/85 backdrop-blur-xl border border-[#0E0E0C]/10 shadow-[0_10px_40px_-20px_rgba(14,14,12,0.2)]" : "bg-[#F5F1EA]/40 backdrop-blur-md border border-transparent"} rounded-full`}
        >
          <div className="h-16 sm:h-[72px] px-4 sm:px-5 flex items-center justify-between gap-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 pl-1 pr-3 py-2 shrink-0 group">
              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="w-9 h-9 bg-[#0E0E0C] flex items-center justify-center rounded-lg"
              >
                <span className="w-2.5 h-2.5 bg-[#D4FF3A]" />
              </motion.span>
              <span className="text-[16px]" style={{ fontWeight: 600 }}>
                Pixel<span style={serif} className="italic">Pulse</span>
              </span>
            </Link>

            {/* Center nav: stable active pill + soft hover underline */}
            <nav className="hidden md:flex items-center relative">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className="relative px-5 py-2.5 text-[14px] text-[#0E0E0C]/65 hover:text-[#0E0E0C] transition-colors duration-300"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 bg-[#0E0E0C] rounded-full"
                          transition={{ type: "spring", stiffness: 180, damping: 26, mass: 0.9 }}
                        />
                      )}
                      <span className={`relative transition-colors duration-300 ${isActive ? "text-[#F5F1EA]" : ""}`}>
                        {n.label}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2">
              <Magnetic strength={0.12}>
                <Link
                  to="/contact"
                  className="group hidden sm:inline-flex items-center gap-2.5 bg-[#D4FF3A] text-[#0E0E0C] pl-5 pr-2 py-2 rounded-full text-[14px] hover:bg-[#E8623D] hover:text-[#F5F1EA] transition-colors duration-300"
                >
                  <span>Book a call</span>
                  <span className="w-9 h-9 rounded-full bg-[#0E0E0C] text-[#D4FF3A] group-hover:bg-[#F5F1EA] group-hover:text-[#E8623D] flex items-center justify-center transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </Magnetic>
              <button
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#0E0E0C] text-[#F5F1EA]"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "x" : "m"}
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mx-auto max-w-6xl mt-2 bg-[#0E0E0C] text-[#F5F1EA] rounded-3xl overflow-hidden"
            >
              <div className="p-5 flex flex-col">
                {navItems.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink to={n.to} end={n.to === "/"} className={({ isActive }) => `flex items-center justify-between py-4 border-b border-[#F5F1EA]/10 ${isActive ? "text-[#D4FF3A]" : ""}`}>
                      <span style={serif} className="text-[22px] italic">{n.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  </motion.div>
                ))}
                <Link to="/contact" className="mt-5 inline-flex items-center justify-between gap-2 bg-[#D4FF3A] text-[#0E0E0C] px-4 py-3 rounded-full text-[14px]">
                  Book a call <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
