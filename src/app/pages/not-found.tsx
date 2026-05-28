import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { serif } from "../components/shared";

export function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 sm:px-6 pt-28 pb-20 text-center">
      <div className="max-w-2xl">
        <div className="tracking-tight text-[#E8623D]" style={{ ...serif, fontSize: "clamp(6rem, 18vw, 14rem)", lineHeight: 0.9 }}>404</div>
        <h1 className="mt-4 tracking-tight" style={{ ...serif, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.05 }}>
          This page took the <em className="italic">wrong funnel.</em>
        </h1>
        <p className="mt-5 text-[#0E0E0C]/65 text-[15px] sm:text-[17px] leading-relaxed">
          Don't worry — our actual marketing tracks better than this. Try heading home.
        </p>
        <Link to="/" className="group mt-8 inline-flex items-center gap-3 bg-[#0E0E0C] text-[#F5F1EA] px-6 py-4 hover:bg-[#E8623D] transition text-[14px] sm:text-[15px]">
          Back to home <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
        </Link>
      </div>
    </section>
  );
}
