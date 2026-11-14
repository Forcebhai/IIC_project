import React from 'react';
import { scrollTo } from '../../lib/lenis';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

/**
 * Editorial Footer Component — Elevate 360: Bengal AI Start-up Summit 2026
 *
 * Combines minimalist architectural drafting aesthetics, Victoria Memorial heritage engraving,
 * refined editorial typography, and the signature oversized black-to-white gradient wordmark.
 */
export default function Footer() {
  const handleNavigate = (href) => {
    if (!href.startsWith('#')) return;
    if (href === '#hero') {
      scrollTo(0);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      scrollTo(target, { offset: -70 });
    }
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    try {
      scrollTo(0);
    } catch (err) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const summitNav = [
    { label: 'About the Summit', href: '#about' },
    { label: 'Tracks', href: '#experiences' },
    { label: 'Schedule', href: '#agenda' },
    { label: 'Speakers', href: '#speakers' },
  ];

  const exploreNav = [
    { label: 'Startup Competition', href: '#startups' },
    { label: 'Partners', href: '#sponsors' },
    { label: 'Venue', href: '#venue' },
    { label: 'FAQs', href: '#contact' },
  ];

  const connectNav = [
    { label: 'Contact', href: '#contact', external: false },
    { label: 'Instagram', href: 'https://instagram.com', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { label: 'YouTube', href: 'https://youtube.com', external: true },
  ];

  return (
    <footer className="relative w-full bg-[#F7F7F4] text-[#111111] overflow-hidden border-t border-[#DADADA]">
      {/* ================= ARCHITECTURAL DRAFTING GRID OVERLAY ================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.38] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #DADADA 1px, transparent 1px),
            linear-gradient(to bottom, #DADADA 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-14 lg:px-20 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        {/* ================= A. TOP SECTION — BRAND INTRODUCTION & NAVIGATION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 sm:pb-18 border-b border-[#DADADA]">
          {/* LEFT SIDE: Brand & Event Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Event Identity with Summit Yellow accent */}
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4C430] shadow-sm" />
                <span className="font-display font-black text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  ELEVATE 360
                </span>
              </div>

              {/* Event Full Title */}
              <h2 className="font-sans font-bold text-base sm:text-lg text-[#111111] tracking-tight mb-2">
                Bengal AI Start-up Summit 2026
              </h2>

              {/* Event Dates & Venue Metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#62666B] mb-5 uppercase tracking-wider">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#111111]">
                  <span className="text-[#F4C430]">●</span> 17–19 November 2026
                </span>
                <span>|</span>
                <span>Sister Nivedita University, Kolkata</span>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-[#62666B] leading-relaxed max-w-md mb-8">
                Bringing together innovators, researchers, entrepreneurs, and technology leaders to
                explore the possibilities of Artificial Intelligence and build the future.
              </p>
            </div>

            {/* C. STARTUP COMPETITION HIGHLIGHT (Editorial Callout) */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-white border border-[#DADADA] shadow-sm max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F4C430]/20 text-[#111111] border border-[#F4C430]/40">
                  Pitch Stage
                </span>
                <span className="font-mono text-xs font-bold text-[#111111] tracking-wider uppercase">
                  The Next Big Idea Starts Here.
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#62666B] leading-snug mb-3">
                Discover emerging AI startups and innovative solutions shaping tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#DADADA] text-[11px] font-mono text-[#111111]">
                <div>
                  <span className="text-[#62666B] block text-[10px]">SEMI-FINAL</span>
                  <strong className="font-semibold">18 Nov · Top 15</strong>
                </div>
                <div>
                  <span className="text-[#62666B] block text-[10px]">GRAND FINAL</span>
                  <strong className="font-semibold">19 Nov · Top 5</strong>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Three Navigation Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              {/* Column 1: THE SUMMIT */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F4C430] rounded-sm" />
                  The Summit
                </h3>
                <ul className="space-y-3">
                  {summitNav.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.href);
                        }}
                        className="group inline-flex items-center gap-1.5 font-sans text-sm text-[#62666B] hover:text-[#111111] transition-colors duration-200 cursor-pointer"
                      >
                        <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#F4C430] transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: EXPLORE */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F4C430] rounded-sm" />
                  Explore
                </h3>
                <ul className="space-y-3">
                  {exploreNav.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.href);
                        }}
                        className="group inline-flex items-center gap-1.5 font-sans text-sm text-[#62666B] hover:text-[#111111] transition-colors duration-200 cursor-pointer"
                      >
                        <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#F4C430] transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: CONNECT */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#111111] mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#F4C430] rounded-sm" />
                  Connect
                </h3>
                <ul className="space-y-3">
                  {connectNav.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        onClick={
                          item.external
                            ? undefined
                            : (e) => {
                                e.preventDefault();
                                handleNavigate(item.href);
                              }
                        }
                        className="group inline-flex items-center gap-1.5 font-sans text-sm text-[#62666B] hover:text-[#111111] transition-colors duration-200 cursor-pointer"
                      >
                        <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#F4C430] transition-colors" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {item.label}
                        </span>
                        {item.external && (
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#62666B] group-hover:text-[#111111] transition-colors" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Institution Badge Strip */}
            <div className="mt-8 pt-6 border-t border-[#DADADA] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#62666B]">
              <div>
                Host: <strong className="text-[#111111]">Sister Nivedita University, Kolkata</strong>
              </div>
              <div>
                Coordination: <strong className="text-[#111111]">SNU-IIC (Institution&apos;s Innovation Council)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ================= B. ARCHITECTURAL VISUAL SECTION — VICTORIA MEMORIAL ================= */}
        <div className="relative w-full my-10 sm:my-14 overflow-hidden rounded-2xl bg-white/70 border border-[#DADADA] p-6 sm:p-10">
          {/* Subtle Technical Blueprint Drafting Grid Inside Frame */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full stroke-[#DADADA]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#62666B" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#archGrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Architectural Annotation Box */}
            <div className="md:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F7F7F4] border border-[#DADADA] text-[10px] font-mono tracking-widest uppercase text-[#62666B]">
                <span>ARCH-REF // 22°32&apos;N 88°20&apos;E</span>
              </div>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-[#111111] tracking-tight">
                Kolkata: The Cradle of Innovation & Intellect
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#62666B] leading-relaxed">
                From historic marble monuments to East India&apos;s emerging AI startup frontier,
                ELEVATE 360 script the next chapter of Indian technological leadership.
              </p>
              <div className="flex items-center gap-4 pt-2 text-[11px] font-mono text-[#62666B]">
                <span>SCALE: 1:500</span>
                <span>•</span>
                <span>VICTORIA MEMORIAL ARCHIVE</span>
              </div>
            </div>

            {/* Right Architectural Pencil Illustration */}
            <div className="md:col-span-7 flex justify-center md:justify-end">
              <img
                src="/assets/images/about/victoria_memorial.png"
                alt="Victoria Memorial Kolkata Architectural Engraving"
                className="max-h-[220px] sm:max-h-[260px] md:max-h-[300px] w-auto object-contain object-right mix-blend-multiply opacity-90 contrast-[1.08] filter"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ================= D. OVERSIZED ELEVATE 360 BOTTOM WORDMARK ================= */}
        <div className="relative w-full pt-4 sm:pt-6 pb-2 sm:pb-4 overflow-hidden text-center sm:text-left">
          <h1 className="footer-wordmark font-display font-black tracking-[-0.04em] text-[clamp(44px,13.2vw,190px)] leading-[0.88] select-none uppercase">
            ELEVATE 360
          </h1>
        </div>

        {/* ================= E. BOTTOM INFORMATION STRIP ================= */}
        <div className="pt-6 sm:pt-8 mt-4 border-t border-[#DADADA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#62666B]">
          {/* Left: Copyright */}
          <div>
            Copyright © 2026 Elevate 360.
          </div>

          {/* Centre: Event subtitle */}
          <div className="text-center font-medium text-[#111111]">
            Bengal AI Start-up Summit 2026
          </div>

          {/* Right: Location & Smooth Back to Top */}
          <div className="flex items-center gap-3">
            <span>Kolkata, India</span>
            <span>|</span>
            <button
              onClick={handleBackToTop}
              className="group inline-flex items-center gap-1.5 text-[#111111] hover:text-[#F4C430] font-semibold transition-colors duration-200 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
