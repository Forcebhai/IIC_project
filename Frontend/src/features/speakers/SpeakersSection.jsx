import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { scrollTo } from '../../lib/lenis';
import SpeakerCarousel from './SpeakerCarousel';
import { speakersContent } from './speakersData';

/**
 * SpeakersSection Component — Curved 3D Perspective Architectural Showcase
 *
 * Implements the full master specification for Elevate 360:
 * 1. Technical architectural drafting grid + Victoria Memorial pencil engraving in upper right
 * 2. Centered editorial heading: "Meet the Minds Shaping Tomorrow" with Summit Yellow highlight
 * 3. Curved 3D perspective speaker carousel with continuous drift, mouse/touch drag, and controls
 * 4. Refined handwritten annotations: "Meet the visionaries" & "Ideas that move us" with curved SVG arrows
 * 5. Prominent bottom CTA "EXPLORE ALL SPEAKERS →" with signature dashed yellow outline
 */
export default function SpeakersSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const carouselWrapperRef = useRef(null);

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
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Staggered reveal
      tl.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from(
          headingRef.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          descRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          carouselWrapperRef.current,
          {
            scale: 0.94,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
          },
          '-=0.4'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    const agendaEl = document.querySelector(speakersContent.ctaTarget || '#agenda');
    if (agendaEl) {
      scrollTo(agendaEl, { offset: -70 });
    }
  };

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-20 sm:py-28 md:py-32 border-b border-[#DADADA]"
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

      {/* Architectural Technical Drafting Guides (Crosshairs & Circles) */}
      <div className="absolute top-12 left-10 w-24 h-24 border border-[#DADADA]/60 rounded-full pointer-events-none opacity-40 hidden md:block" />
      <div className="absolute top-24 left-22 w-1.5 h-1.5 rounded-full bg-[#F4C430] pointer-events-none opacity-60 hidden md:block" />
      <div className="absolute bottom-16 right-12 w-32 h-32 border border-[#DADADA]/60 rounded-full pointer-events-none opacity-30 hidden md:block" />

      {/* ================= 2. VICTORIA MEMORIAL ARCHITECTURAL ENGRAVING ================= */}
      <div className="absolute top-4 right-0 w-[60%] sm:w-[50%] max-w-[720px] pointer-events-none overflow-hidden z-0 select-none opacity-[0.22] mix-blend-multiply">
        <img
          src="/assets/images/about/victoria_memorial.png"
          alt="Victoria Memorial Kolkata Architectural Engraving"
          className="w-full h-auto object-contain object-right-top"
          loading="lazy"
        />
      </div>


      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center text-center">
        {/* ================= 3. EYEBROW LABEL ================= */}
        <div ref={eyebrowRef} className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F4C430] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#111111]">
              {speakersContent.eyebrow}
            </span>
          </div>
        </div>

        {/* ================= 4. MAIN EDITORIAL HEADING ================= */}
        <div ref={headingRef} className="max-w-4xl mx-auto mb-4 sm:mb-5">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-[1.08] tracking-tight">
            {speakersContent.headingLine1} <br />
            <span>Shaping </span>
            <span className="text-[#F4C430] relative inline-block">
              {speakersContent.accentWord}
              {/* Subtle underline stroke accent */}
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

        {/* ================= 5. SUPPORTING DESCRIPTION ================= */}
        <div ref={descRef} className="max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#62666B] leading-relaxed">
            {speakersContent.description}
          </p>
        </div>

        {/* ================= 6. CAROUSEL LAYER WITH EDITORIAL ANNOTATIONS ================= */}
        <div ref={carouselWrapperRef} className="relative w-full max-w-full my-2 sm:my-4">
          {/* DECORATIVE LEFT ANNOTATION ("Meet the visionaries") */}
          <div className="absolute -top-12 left-4 xl:left-8 z-20 pointer-events-none hidden lg:block text-left">
            <div className="flex items-start gap-2">
              <div>
                <span
                  className="font-caveat text-2xl xl:text-3xl font-bold text-[#111111] leading-none block -rotate-6 select-none"
                  style={{ fontFamily: "'Caveat', cursive, serif" }}
                >
                  Meet the visionaries
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4C430] ml-1" />
              </div>

              {/* Hand-drawn Curved Arrow pointing down-right towards cards */}
              <svg
                width="65"
                height="50"
                viewBox="0 0 65 50"
                fill="none"
                className="mt-2 text-[#111111]"
              >
                <path
                  d="M10 5 C 28 5, 45 15, 52 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M44 34 L 52 38 L 56 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* DECORATIVE RIGHT ANNOTATION ("Ideas that move us") */}
          <div className="absolute -top-12 right-4 xl:right-8 z-20 pointer-events-none hidden lg:block text-right">
            <div className="flex items-start justify-end gap-2">
              {/* Hand-drawn Curved Arrow pointing down-left towards cards */}
              <svg
                width="65"
                height="50"
                viewBox="0 0 65 50"
                fill="none"
                className="mt-2 text-[#111111]"
              >
                <path
                  d="M55 5 C 37 5, 20 15, 13 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M21 34 L 13 38 L 9 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <span
                  className="font-caveat text-2xl xl:text-3xl font-bold text-[#111111] leading-none block rotate-6 select-none"
                  style={{ fontFamily: "'Caveat', cursive, serif" }}
                >
                  Ideas that move us
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4C430] mr-1" />
              </div>
            </div>
          </div>

          {/* THE CURVED 3D CAROUSEL COMPONENT */}
          <SpeakerCarousel
            speakers={speakersContent.speakers}
            onSpeakerSelect={handleCtaClick}
          />
        </div>

        {/* ================= 7. EXPLORE ALL SPEAKERS CTA ================= */}
        <div className="mt-8 sm:mt-12">
          {/* Thin dashed yellow outline container inspired by reference */}
          <div className="inline-block p-1.5 rounded-full border border-dashed border-[#F4C430] shadow-sm bg-white/50 backdrop-blur-sm">
            <button
              type="button"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F4C430] hover:bg-[#E6B91F] text-[#111111] font-display font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(244,196,48,0.45)] cursor-pointer group"
            >
              <span>{speakersContent.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

          <p className="font-mono text-[11px] text-[#62666B] mt-3">
            Click any speaker to explore detailed session tracks and schedule
          </p>
        </div>
      </div>
    </section>
  );
}
