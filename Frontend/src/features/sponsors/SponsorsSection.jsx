import React, { useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Sparkles } from 'lucide-react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { scrollTo } from '../../lib/lenis';
import { sponsorsData, sponsorsHeading } from './data';

/**
 * SponsorsSection Component — Elevate 360: Bengal AI Start-up Summit 2026
 *
 * Implements the full master specification:
 * 1. Technical architectural drafting grid + Victoria Memorial pencil engraving in upper right
 * 2. Centered heading: "Our Esteemed Sponsors" with "Sponsors" in Summit Yellow
 * 3. Left handwritten editorial annotation: "Powered by Industry Leaders" with curved SVG arrow
 * 4. 5 Columns × 3 Rows clean grid displaying exactly 15 confirmed brand sponsors
 * 5. Interactive sponsor cards:
 *    - On hover: reveals floating Instagram handle pill with Instagram icon & yellow border
 *    - On click: safely navigates directly to the sponsor's Instagram profile in a new tab
 * 6. Bottom CTA: "OUR PARTNERS →" with signature dashed yellow outline
 * 7. Right handwritten editorial annotation: "Building what's next" with curved SVG arrow
 * 8. Bottom-left Summit Yellow circular architectural anchor
 */
export default function SponsorsSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const leftAnnotationRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);
  const rightAnnotationRef = useRef(null);

  // GSAP ScrollTrigger entrance animation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Staggered reveal
      tl.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          headingRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          descRef.current,
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          leftAnnotationRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: 'back.out(1.5)',
          },
          '-=0.3'
        )
        .from(
          gridRef.current ? gridRef.current.children : [],
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .from(
          rightAnnotationRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: 'back.out(1.5)',
          },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    const venueEl = document.querySelector(sponsorsHeading.ctaTarget || '#venue');
    if (venueEl) {
      scrollTo(venueEl, { offset: -70 });
    }
  };

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 md:py-36 border-b border-[#DADADA]"
    >
      {/* ================= 1. ARCHITECTURAL DRAFTING GRID OVERLAY ================= */}
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

      {/* Decorative Technical Crosshairs (+) */}
      <span className="absolute top-12 left-12 font-mono text-sm text-[#DADADA] font-bold select-none pointer-events-none hidden md:block">
        +
      </span>
      <span className="absolute top-12 right-12 font-mono text-sm text-[#DADADA] font-bold select-none pointer-events-none hidden md:block">
        +
      </span>
      <span className="absolute bottom-16 right-16 font-mono text-sm text-[#DADADA] font-bold select-none pointer-events-none hidden md:block">
        +
      </span>

      {/* Short horizontal Summit Yellow line near left edge */}
      <div className="absolute top-36 left-0 w-12 sm:w-16 h-1 bg-[#F4C430] rounded-r-full pointer-events-none hidden lg:block" />

      {/* Technical circular construction diagram near lower-left side */}
      <div className="absolute bottom-32 left-10 w-24 h-24 border border-[#DADADA] rounded-full pointer-events-none opacity-40 hidden xl:block">
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="w-12 h-12 border border-dashed border-[#DADADA] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F4C430] rounded-full" />
        </div>
      </div>

      {/* ================= 2. VICTORIA MEMORIAL ARCHITECTURAL ENGRAVING ================= */}
      <div className="absolute top-2 right-0 w-[55%] sm:w-[45%] max-w-[680px] pointer-events-none overflow-hidden z-0 select-none opacity-[0.22] mix-blend-multiply">
        <img
          src="/assets/images/about/victoria_memorial.png"
          alt="Victoria Memorial Kolkata Architectural Engraving"
          className="w-full h-auto object-contain object-right-top"
          loading="lazy"
        />
      </div>

      {/* ================= 3. BOTTOM-LEFT SUMMIT YELLOW CIRCULAR ANCHOR ================= */}
      <div className="absolute -bottom-24 sm:-bottom-32 md:-bottom-36 -left-24 sm:-left-32 md:-left-36 w-52 sm:w-68 md:w-80 h-52 sm:h-68 md:h-80 rounded-full border-4 sm:border-[6px] border-[#F4C430] pointer-events-none opacity-85 z-0" />

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center text-center">
        {/* ================= EYEBROW BADGE ================= */}
        <div ref={eyebrowRef} className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F4C430] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#111111]">
              {sponsorsHeading.eyebrow}
            </span>
          </div>
        </div>

        {/* ================= MAIN HEADING ================= */}
        <div ref={headingRef} className="max-w-4xl mx-auto mb-3 sm:mb-4">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] leading-[1.04] tracking-tight">
            <span>{sponsorsHeading.headingLine1}</span> <br />
            <span className="text-[#F4C430] relative inline-block">
              {sponsorsHeading.headingLine2}
              {/* Subtle architectural underline stroke */}
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 text-[#F4C430]"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q 50 1, 100 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ================= SUPPORTING DESCRIPTION ================= */}
        <div ref={descRef} className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#62666B] leading-relaxed">
            {sponsorsHeading.description}
          </p>
          {/* Summit Yellow line below description */}
          <div className="w-16 h-1 bg-[#F4C430] rounded-full mx-auto mt-4" />
        </div>

        {/* ================= SPONSOR GRID AREA WITH ANNOTATIONS ================= */}
        <div className="relative w-full max-w-[1360px] mx-auto mb-14 sm:mb-16">
          {/* ================= LEFT-SIDE HANDWRITTEN ANNOTATION ================= */}
          <div
            ref={leftAnnotationRef}
            className="absolute -top-14 -left-4 xl:-left-10 z-20 pointer-events-none hidden lg:block text-left"
          >
            <div className="flex items-start gap-2">
              <div>
                <span
                  className="font-caveat text-2xl xl:text-3xl font-bold text-[#153C30] leading-none block -rotate-6 select-none"
                  style={{ fontFamily: "'Caveat', cursive, serif" }}
                >
                  Powered by <br />
                  Industry Leaders
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4C430] mt-1" />
              </div>

              {/* Hand-drawn Curved Arrow pointing down-right towards grid */}
              <svg
                width="65"
                height="55"
                viewBox="0 0 65 55"
                fill="none"
                className="mt-3 text-[#153C30]"
              >
                <path
                  d="M10 5 C 28 5, 45 16, 50 42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M42 38 L 50 42 L 54 32"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* ================= 5 COLUMNS × 3 ROWS CLEAN GRID (15 SPONSORS) ================= */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5 w-full"
          >
            {sponsorsData.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${sponsor.name} on Instagram (${sponsor.instagramHandle})`}
                className="group relative p-4 sm:p-5 md:p-6 rounded-[18px] sm:rounded-[20px] md:rounded-[22px] bg-white border border-[#DADADA] shadow-[0_4px_18px_rgba(0,0,0,0.03)] hover:border-[#F4C430] hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[155px] cursor-pointer overflow-hidden"
              >
                {/* Subtle top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F4C430] transition-colors duration-300" />

                {/* Centered Sponsor Logo */}
                <div className="w-full h-16 sm:h-20 flex items-center justify-center p-1">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    loading="lazy"
                    className="max-h-14 sm:max-h-16 max-w-[82%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Brand Name (visible always) */}
                <span className="font-display font-bold text-xs sm:text-[13px] text-[#111111] group-hover:text-[#F4C430] transition-colors mt-2 text-center line-clamp-1">
                  {sponsor.name}
                </span>

                {/* Floating Instagram Handle Pill (Reveals on Hover) */}
                <div className="absolute inset-x-0 bottom-2 sm:bottom-2.5 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#DADADA] shadow-md text-[10px] sm:text-[11px] font-mono font-bold text-[#111111]">
                    <Instagram className="w-3 h-3 text-[#E1306C]" />
                    <span className="truncate max-w-[110px]">{sponsor.instagramHandle}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM CTA AREA WITH RIGHT ANNOTATION ================= */}
        <div className="relative flex items-center justify-center mt-2">
          {/* Centred CTA Button with Outer Dashed Yellow Outline */}
          <div ref={ctaRef} className="inline-block p-1.5 rounded-full border border-dashed border-[#F4C430] shadow-sm bg-white/50 backdrop-blur-sm">
            <button
              type="button"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F4C430] hover:bg-[#E6B91F] text-[#111111] font-display font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(244,196,48,0.45)] cursor-pointer group"
            >
              <span>{sponsorsHeading.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

          {/* ================= RIGHT-SIDE HANDWRITTEN ANNOTATION ================= */}
          <div
            ref={rightAnnotationRef}
            className="absolute left-[calc(50%+160px)] sm:left-[calc(50%+180px)] -top-4 pointer-events-none hidden lg:block text-left"
          >
            <div className="flex items-start gap-2">
              {/* Hand-drawn Curved Arrow pointing down-left towards CTA */}
              <svg
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                className="mt-2 text-[#153C30]"
              >
                <path
                  d="M50 5 C 32 5, 18 16, 12 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 34 L 12 38 L 8 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <span
                  className="font-caveat text-2xl xl:text-3xl font-bold text-[#153C30] leading-none block rotate-6 select-none"
                  style={{ fontFamily: "'Caveat', cursive, serif" }}
                >
                  Building <br />
                  what&apos;s next
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4C430] mt-1" />
              </div>
            </div>
          </div>
        </div>

        <p className="font-mono text-[11px] text-[#62666B] mt-5">
          Click any sponsor logo to explore their official Instagram profile
        </p>
      </div>
    </section>
  );
}
