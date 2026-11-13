import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollTo } from '../../lib/lenis';

export default function FinalCTASection() {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      scrollTo(el, { offset: -70 });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 md:py-44 bg-[#080808] text-white overflow-hidden border-t border-white/10"
    >
      {/* Subtle Yellow Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFD900]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20 text-center flex flex-col items-center">
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono uppercase tracking-[0.2em] text-[#FFD900] mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD900]" />
          <span>ELEVATE 360 — BENGAL AI START-UP SUMMIT 2026</span>
        </div>

        {/* Main Heading & Second Heading */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F8F7F3] leading-[1.02] tracking-tight mb-4">
          THE FUTURE DOESN&apos;T WAIT.
        </h2>

        <h3 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FFD900] tracking-tight mb-8">
          LET&apos;S BUILD WHAT COMES NEXT.
        </h3>

        {/* Supporting Description */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
          Ideas into ventures. Connections into collaborations. Innovation into impact.
        </p>

        {/* Prominent CTA Button */}
        <button
          type="button"
          onClick={handleScrollToAbout}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#FFD900] hover:bg-[#FFE500] text-[#080808] font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-200 hover:-translate-y-1 shadow-[0_12px_30px_rgba(255,217,0,0.35)] cursor-pointer group"
        >
          <span>EXPLORE ELEVATE 360</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Brand Callout */}
        <div className="mt-16 pt-12 border-t border-white/10 w-full max-w-xl text-center">
          <span className="font-display font-black text-xl sm:text-2xl text-white tracking-wider block">
            ELEVATE 360
          </span>
          <span className="font-mono text-xs sm:text-sm text-[#FFD900] tracking-[0.25em] uppercase font-semibold mt-1 block">
            SCRIPTING NEXT UNICORNS.
          </span>
        </div>
      </div>
    </section>
  );
}

