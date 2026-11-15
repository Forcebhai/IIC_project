import React from 'react';
import { ArrowUpRight, Linkedin, Sparkles } from 'lucide-react';

/**
 * SpeakerCard Component — Curved 3D Perspective Showcase Card
 *
 * Designed to represent confirmed keynote leaders and researchers:
 * - Large crisp portrait photograph with top-aligned cropping
 * - Deep dark gradient overlay at bottom for optimal typography contrast
 * - High-hierarchy typography: Name, Designation, and Organization
 * - Circular interactive social and profile controls
 * - Subtle architectural border and soft elevation shadow
 */
export default function SpeakerCard({
  speaker,
  isActive = false,
  isSide = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative select-none cursor-pointer overflow-hidden rounded-[22px] sm:rounded-[24px] bg-[#111111] border transition-all duration-300 ${
        isActive
          ? 'border-[#F4C430] shadow-[0_22px_50px_rgba(0,0,0,0.22)]'
          : 'border-[#DADADA]/60 hover:border-[#F4C430]/70 shadow-[0_14px_35px_rgba(0,0,0,0.10)]'
      }`}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* ================= 1. PORTRAIT IMAGE ================= */}
      <div className="absolute inset-0 w-full h-full bg-[#182538] overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          draggable="false"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top filter grayscale contrast-105 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />

        {/* Top subtle tone filter */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

        {/* Session Track Top Pill */}
        {speaker.topic && (
          <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono font-medium text-[#F4C430] tracking-wide uppercase truncate max-w-[85%]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] shrink-0" />
              <span className="truncate">{speaker.sessionDate?.split('·')[0]?.trim() || 'SUMMIT 2026'}</span>
            </span>
          </div>
        )}

        {/* Deep Bottom Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 via-40% to-transparent pointer-events-none" />
      </div>

      {/* ================= 2. CONTENT HIERARCHY AT BOTTOM ================= */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end z-10 text-left">
        {/* Organization / Affiliation Badge */}
        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#F4C430] tracking-wider uppercase truncate block mb-1">
          {speaker.organization}
        </span>

        {/* Speaker Name */}
        <h3 className="font-display font-extrabold text-base sm:text-lg text-white leading-tight uppercase tracking-tight line-clamp-1 mb-1 group-hover:text-[#F4C430] transition-colors">
          {speaker.name}
        </h3>

        {/* Professional Designation */}
        <p className="font-sans text-[11px] sm:text-xs text-neutral-300 leading-snug line-clamp-2 mb-3">
          {speaker.designation}
        </p>

        {/* Social / Profile Action Row */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/10">
          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href={speaker.linkedin || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${speaker.name} LinkedIn Profile`}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#F4C430] hover:text-[#111111] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
            </a>

            {/* Website / Bio Link */}
            <a
              href={speaker.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${speaker.name} Institutional Profile`}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#F4C430] hover:text-[#111111] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
          </div>

          <span className="text-[10px] font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <span>View</span>
            <ArrowUpRight className="w-3 h-3 text-[#F4C430]" />
          </span>
        </div>
      </div>
    </div>
  );
}
