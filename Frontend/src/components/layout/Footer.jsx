import React from 'react';
import { scrollTo } from '../../lib/lenis';
import { ArrowUpRight } from 'lucide-react';

/**
 * Editorial Footer Component — Elevate 360: Bengal AI Start-up Summit 2026
 *
 * Combines minimalist architectural drafting aesthetics, Victoria Memorial heritage engraving,
 * refined editorial typography, and the signature oversized black-to-white gradient wordmark.
 *
 * Mobile layout follows the reference mockup strictly:
 * 1. Brand title and event name at the top (left-aligned)
 * 2. Event dates and venue in small uppercase typography
 * 3. Short event description
 * 4. Startup competition information inside a compact rounded white card
 * 5. Victoria Memorial architectural illustration card (text on left, engraving on right)
 * 6. Three compact navigation columns: THE SUMMIT, EXPLORE, and CONNECT
 * 7. Oversized ELEVATE 360 wordmark at the very bottom, full width edge-to-edge on phone and laptop
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

      {/* ========================================================================= */}
      {/* ======================= MOBILE FOOTER (Items 1 - 6) ===================== */}
      {/* ========================================================================= */}
      <div className="block md:hidden relative z-10 w-full px-5 pt-8 pb-4">
        {/* 1, 2, 3. BRAND INFO, DATES & DESCRIPTION */}
        <div className="space-y-2 mb-5">
          {/* Brand title with yellow accent dot */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4C430] shrink-0" />
            <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
              ELEVATE 360
            </span>
          </div>

          {/* Event Full Title */}
          <h2 className="font-sans font-bold text-sm text-[#111111] tracking-tight">
            Bengal AI Start-up Summit 2026
          </h2>

          {/* Event Dates & Venue in small uppercase typography */}
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#62666B] flex flex-wrap items-center gap-x-2 gap-y-0.5 pt-0.5">
            <span className="inline-flex items-center gap-1 font-semibold text-[#111111]">
              <span className="text-[#F4C430]">●</span> 17–19 NOVEMBER 2026
            </span>
            <span>|</span>
            <span>SISTER NIVEDITA UNIVERSITY, KOLKATA</span>
          </div>

          {/* Event Description */}
          <p className="font-sans text-xs text-[#62666B] leading-relaxed pt-1">
            Bringing together innovators, researchers, entrepreneurs, and technology leaders to
            explore the possibilities of Artificial Intelligence and build the future.
          </p>
        </div>

        {/* 4. STARTUP COMPETITION CARD */}
        <div className="rounded-2xl bg-white border border-[#DADADA] p-4 shadow-sm mb-4">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-[#FEF7DA] text-[#111111] border border-[#F4C430]/40">
              PITCH STAGE
            </span>
            <span className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-wider">
              THE NEXT BIG IDEA STARTS HERE.
            </span>
          </div>
          <p className="font-sans text-[11px] text-[#62666B] leading-snug mb-3">
            Discover emerging AI startups and innovative solutions shaping tomorrow.
          </p>
          <div className="pt-2 border-t border-[#DADADA] grid grid-cols-2 gap-2 text-[10.5px] font-mono">
            <div>
              <span className="text-[#62666B] block text-[9px] uppercase tracking-wider">SEMI-FINAL</span>
              <strong className="font-bold text-[#111111]">18 Nov · Top 15</strong>
            </div>
            <div>
              <span className="text-[#62666B] block text-[9px] uppercase tracking-wider">GRAND FINAL</span>
              <strong className="font-bold text-[#111111]">19 Nov · Top 5</strong>
            </div>
          </div>
        </div>

        {/* 5. VICTORIA MEMORIAL ARCHITECTURAL ILLUSTRATION CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-white/95 border border-[#DADADA] p-3.5 shadow-sm mb-5">
          {/* Subtle Technical Blueprint Drafting Grid Inside Frame */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <svg className="w-full h-full stroke-[#DADADA]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="archGridMobile" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" strokeWidth="0.7" />
                  <circle cx="0" cy="0" r="1.2" fill="#62666B" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#archGridMobile)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-3">
            {/* Left side: descriptive text */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="inline-block px-1.5 py-0.5 rounded bg-[#F7F7F4] border border-[#DADADA] text-[8px] font-mono tracking-widest text-[#62666B] uppercase mb-1">
                ARCH-REF // 22°32&apos;N 88°20&apos;E
              </div>
              <h3 className="font-display font-bold text-xs text-[#111111] leading-tight mb-1">
                Kolkata: The Cradle of Innovation & Intellect
              </h3>
              <p className="font-sans text-[9px] text-[#62666B] leading-tight line-clamp-3 mb-1.5">
                From historic marble monuments to East India&apos;s emerging AI startup frontier,
                ELEVATE 360 script the next chapter of Indian technological leadership.
              </p>
              <div className="text-[8px] font-mono text-[#888888] tracking-wider">
                SCALE: 1:500 • VICTORIA MEMORIAL ARCHIVE
              </div>
            </div>

            {/* Right side: architectural pencil illustration */}
            <div className="w-[110px] shrink-0 flex items-center justify-center">
              <img
                src="/assets/images/about/victoria_memorial.png"
                alt="Victoria Memorial Kolkata Architectural Engraving"
                className="w-full h-auto max-h-[85px] object-contain mix-blend-multiply opacity-95 contrast-[1.08]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 6. THREE COMPACT NAVIGATION COLUMNS */}
        <div className="pt-4 border-t border-[#DADADA] grid grid-cols-3 gap-2">
          {/* Column 1: THE SUMMIT */}
          <div>
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center gap-1">
              <span className="text-[#F4C430] font-black text-xs leading-none">-</span>
              THE SUMMIT
            </h3>
            <ul className="space-y-1.5">
              {summitNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.href);
                    }}
                    className="font-sans text-[11px] text-[#62666B] hover:text-[#111111] transition-colors duration-150 block truncate"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: EXPLORE */}
          <div>
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center gap-1">
              <span className="text-[#F4C430] font-black text-xs leading-none">-</span>
              EXPLORE
            </h3>
            <ul className="space-y-1.5">
              {exploreNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.href);
                    }}
                    className="font-sans text-[11px] text-[#62666B] hover:text-[#111111] transition-colors duration-150 block truncate"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONNECT */}
          <div>
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#111111] mb-2.5 flex items-center gap-1">
              <span className="text-[#F4C430] font-black text-xs leading-none">-</span>
              CONNECT
            </h3>
            <ul className="space-y-1.5">
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
                    className="font-sans text-[11px] text-[#62666B] hover:text-[#111111] transition-colors duration-150 flex items-center gap-1 truncate"
                  >
                    <span>{item.label}</span>
                    {item.external && <ArrowUpRight className="w-2.5 h-2.5 shrink-0 opacity-70" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ======================= DESKTOP & TABLET FOOTER (Items A - B) =========== */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative z-10 max-w-[1600px] w-full mx-auto px-8 md:px-14 lg:px-20 pt-16 md:pt-24 pb-4">
        {/* A. TOP SECTION — BRAND INTRODUCTION & NAVIGATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-14 sm:pb-18 border-b border-[#DADADA]">
          {/* LEFT SIDE: Brand & Event Information + Startup Pitch Card */}
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

            {/* STARTUP COMPETITION HIGHLIGHT (Editorial Callout) */}
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
            <div className="grid grid-cols-3 gap-8 sm:gap-10">
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

        {/* B. ARCHITECTURAL VISUAL SECTION — VICTORIA MEMORIAL */}
        <div className="relative w-full my-10 sm:my-14 overflow-hidden rounded-2xl bg-white/70 border border-[#DADADA] p-6 sm:p-10">
          {/* Subtle Technical Blueprint Drafting Grid Inside Frame */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full stroke-[#DADADA]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="archGridDesktop" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#62666B" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#archGridDesktop)" />
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
      </div>

      {/* ========================================================================= */}
      {/* ===== 7. FULL-WIDTH OVERSIZED ELEVATE 360 WORDMARK (Phone & Laptop) ===== */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full overflow-hidden flex justify-center items-center text-center pt-4 sm:pt-6 md:pt-15 pb-2 sm:pb-4 md:pb-5 select-none pointer-events-none">
        <h1
          className="footer-wordmark font-bebas font-bold tracking-[0.015em] text-[24vw] leading-[0.9] whitespace-nowrap uppercase text-center w-full block m-0 p-0"
          style={{
            background: 'linear-gradient(90deg, #111111 0%, #777777 50%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.8,
          }}
        >
          ELEVATE<span className="inline-block ml-[0.12em]">360</span>
        </h1>
      </div>
    </footer>
  );
}
