import React from 'react';
import { BlurWords } from './BlurText';
import { ArrowRight, Compass } from 'lucide-react';

export default function StoryContent({ stage, index, onNavigate }) {
  const isElevate360Title = stage.title === 'ELEVATE 360';

  return (
    <div
      className={`stage-layer stage-layer-${index} absolute inset-0 p-3.5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto no-scrollbar`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 md:gap-8 h-full items-center">
        
        {/* ================= LEFT COLUMN ================= */}
        {/* Step Badge + Small Section Label + Massive Display Title */}
        <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center h-full pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#D5D0C7] pb-2 sm:pb-3 md:pb-0 text-left">
          
          {/* Step Number Circle Badge (❶) */}
          <div className={`stage-${index}-badge mb-1 sm:mb-2`}>
            <div className="about-step-badge">
              {stage.badgeNumber}
            </div>
          </div>

          {/* Small Section Label (e.g. THE SUMMIT / THE VISION / THE FUTURE) */}
          <div className={`stage-${index}-label text-[11px] sm:text-xs md:text-sm font-sans font-bold tracking-[0.08em] text-[#1E293B] uppercase mb-0.5 sm:mb-1`}>
            {stage.label}
          </div>

          {/* Display Title */}
          {isElevate360Title ? (
            <div className={`stage-${index}-title-word text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-none`}>
              360
            </div>
          ) : (
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tight text-[#111827] leading-[1.1]">
              <BlurWords
                text={stage.title}
                wordClassName={`stage-${index}-title-word`}
              />
            </h3>
          )}

          {/* Subtitle tag below title */}
          {stage.subtitle && (
            <p className={`stage-${index}-subtitle text-[11px] sm:text-xs md:text-sm font-medium text-[#475569] mt-1 sm:mt-1.5 leading-snug line-clamp-2`}>
              {stage.subtitle}
            </p>
          )}
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        {/* Supporting Description, Statistics, Experiences, Pillars, CTAs */}
        <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center h-full pl-0 md:pl-2 text-left">
          
          {/* STAGE 01 & 02: Description Paragraph */}
          {stage.type === 'description' && stage.description && (
            <p className={`stage-${index}-desc text-[11px] sm:text-xs md:text-sm lg:text-base font-sans text-[#374151] leading-relaxed max-w-xl`}>
              <BlurWords
                text={stage.description}
                wordClassName={`stage-${index}-desc-word`}
              />
            </p>
          )}

          {/* STAGE 03: The Ecosystem (4 Statistics) */}
          {stage.type === 'statistics' && (
            <div className={`stage-${index}-stats grid grid-cols-2 gap-2 sm:gap-4`}>
              {stage.statistics.map((stat) => (
                <div
                  key={stat.label}
                  className={`stage-${index}-stat-item p-2 sm:p-3 rounded-xl bg-neutral-50/90 border border-neutral-200/80 shadow-sm`}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-[#F4B51B] tracking-tight">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-[10px] sm:text-[11px] md:text-xs font-mono font-semibold tracking-wide text-[#334155] uppercase leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STAGE 04: The Experience (5 Tracks) */}
          {stage.type === 'experiences' && (
            <div className={`stage-${index}-exp space-y-1 sm:space-y-1.5`}>
              {stage.experiences.map((exp) => (
                <div
                  key={exp.number}
                  className={`stage-${index}-exp-item flex items-center justify-between p-1.5 sm:p-2 rounded-lg bg-neutral-50/80 border border-neutral-200/70`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#F4B51B]">
                      {exp.number}
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#1E293B]">
                      {exp.title}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-sans text-neutral-500 hidden sm:inline">
                    {exp.desc}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* STAGE 05: Our Purpose (3 Pillars) */}
          {stage.type === 'purpose' && (
            <div className={`stage-${index}-pillars space-y-1.5 sm:space-y-2`}>
              {stage.pillars.map((pillar, pIdx) => (
                <div
                  key={pillar.keyword}
                  className={`stage-${index}-pillar-item p-2 sm:p-2.5 rounded-xl bg-neutral-50/90 border border-neutral-200/80 shadow-sm`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#F4B51B]">
                      0{pIdx + 1}
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wide text-[#1E293B]">
                      {pillar.keyword}
                    </span>
                    <span className="text-neutral-400 text-xs">—</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-[#475569]">
                      {pillar.tagline}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] md:text-xs text-neutral-500 leading-relaxed pl-5">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* STAGE 06: The Future & CTAs */}
          {stage.type === 'closing' && (
            <div className={`stage-${index}-closing space-y-2 sm:space-y-2.5`}>
              <p className={`stage-${index}-desc text-[11px] sm:text-xs md:text-sm font-sans text-[#374151] leading-relaxed max-w-xl`}>
                <BlurWords
                  text={stage.description}
                  wordClassName={`stage-${index}-desc-word`}
                />
              </p>

              {/* Closing Brand Callout */}
              <div className={`stage-${index}-brand inline-block px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] sm:text-xs font-mono font-bold text-[#1E293B]`}>
                {stage.closing}
              </div>

              {/* Dual CTA Buttons (Clean 2-col on mobile, flex row on desktop - NEVER CUT OFF) */}
              <div className={`stage-${index}-buttons grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center sm:gap-3 pt-1 w-full sm:w-auto`}>
                {stage.buttons.map((btn) => (
                  <button
                    key={btn.label}
                    onClick={() => onNavigate(btn.targetId)}
                    className={
                      btn.primary
                        ? 'about-cta-primary flex items-center justify-center gap-1.5 sm:gap-2 text-center w-full sm:w-auto text-[11px] sm:text-xs md:text-sm py-2 sm:py-2.5 px-2.5 sm:px-5 cursor-pointer whitespace-nowrap'
                        : 'about-cta-secondary flex items-center justify-center gap-1.5 sm:gap-2 text-center w-full sm:w-auto text-[11px] sm:text-xs md:text-sm py-2 sm:py-2.5 px-2.5 sm:px-5 cursor-pointer whitespace-nowrap'
                    }
                  >
                    <span>{btn.label}</span>
                    {btn.primary ? (
                      <ArrowRight className="w-3.5 h-3.5" />
                    ) : (
                      <Compass className="w-3.5 h-3.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
