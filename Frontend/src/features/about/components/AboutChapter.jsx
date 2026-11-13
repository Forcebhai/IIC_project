import React from 'react';
import AboutStats from './AboutStats';
import { scrollTo } from '../../../lib/lenis';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

export default function AboutChapter({ chapter, isActive, progress }) {
  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      scrollTo(el, { offset: -60 });
    }
  };

  const isLeft = chapter.align === 'left';

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-start pt-20 sm:pt-24 md:pt-28 lg:pt-24 px-4 sm:px-8 lg:px-16 transition-opacity duration-700 pointer-events-none overflow-y-auto no-scrollbar ${
        isActive ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-10 pointer-events-none'
      }`}
    >
      {/* Background Soft Scrim for readability */}
      <div
        className={`absolute inset-0 ${
          isLeft ? 'about-editorial-scrim-left' : 'about-editorial-scrim'
        }`}
      />

      <div
        className={`relative z-10 w-full ${
          isLeft ? 'max-w-4xl text-left mr-auto' : 'max-w-5xl text-center mx-auto'
        }`}
      >
        {/* Small Label Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full about-glass-pill text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 sm:mb-4 ${
            isLeft ? 'mr-auto' : 'mx-auto'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] animate-pulse" />
          <span>{chapter.label}</span>
        </div>

        {/* Main Heading */}
        <h2 className="about-headline-title font-display font-extrabold tracking-[-0.035em] text-[clamp(28px,5vw,64px)] leading-[1.06] mb-4 sm:mb-6">
          <span className="block">{chapter.headingLine1}</span>
          <span className="block text-[#1C2733]">{chapter.headingLine2}</span>
        </h2>

        {/* CHAPTER 01: Supporting Text */}
        {chapter.supportingText && !chapter.stats && !chapter.pillars && (
          <p className="about-body-text text-sm sm:text-base lg:text-lg font-sans font-medium leading-relaxed max-w-xl mb-4">
            {chapter.supportingText}
          </p>
        )}

        {/* CHAPTER 02: Paragraphs Line-by-Line */}
        {chapter.supportingParagraphs && (
          <div className="space-y-3 max-w-2xl mb-4">
            {chapter.supportingParagraphs.map((p, i) => (
              <p
                key={i}
                className="about-body-text text-xs sm:text-sm md:text-base font-sans font-medium leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        )}

        {/* CHAPTER 03: The Ecosystem Stats */}
        {chapter.stats && (
          <div className="mt-4">
            <AboutStats
              stats={chapter.stats}
              supportingText={chapter.supportingText}
            />
          </div>
        )}

        {/* CHAPTER 04: Our Purpose (01 Innovate, 02 Collaborate, 03 Transform) */}
        {chapter.pillars && (
          <div className="mt-4">
            <p className="about-body-text text-xs sm:text-sm font-sans font-medium mb-6 max-w-lg">
              {chapter.supportingText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
              {chapter.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#F4B51B]/60 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#F4B51B]">
                      {pillar.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#F4B51B]/60 group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#1C2733] mb-2 tracking-tight group-hover:text-[#C9910D] transition-colors">
                    {pillar.keyword}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#334155] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHAPTER 05: The Grand Closing & CTAs */}
        {chapter.supportingStatement && (
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-2">
            <p className="about-body-text text-sm sm:text-base lg:text-lg font-sans font-medium leading-relaxed mb-6 text-center">
              {chapter.supportingStatement}
            </p>

            {/* Brand Identity Plaque */}
            <div className="inline-flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/75 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] mb-8 text-center max-w-md w-full">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#1C2733]">
                {chapter.brand.name}
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#F4B51B] font-bold mt-0.5">
                {chapter.brand.tagline}
              </span>
              <span className="text-xs font-serif italic text-[#253649] mt-1">
                "{chapter.brand.theme}"
              </span>
              <span className="text-[10px] font-mono text-[#475569] mt-2 pt-2 border-t border-black/5 w-full">
                Hosted by: {chapter.brand.host}
              </span>
            </div>

            {/* Two Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo(chapter.primaryCta.targetId)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm about-btn-primary flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                <span>{chapter.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo(chapter.secondaryCta.targetId)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm about-btn-secondary flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                <span>{chapter.secondaryCta.label}</span>
                <Compass className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
