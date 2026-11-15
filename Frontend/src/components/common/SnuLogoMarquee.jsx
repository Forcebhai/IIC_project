import React from 'react';

/**
 * SnuLogoMarquee Component — Elevate 360: Bengal AI Start-up Summit 2026
 *
 * Infinite scrolling marquee ribbon showcasing the official institutional logos:
 * 1. Sister Nivedita University (Official Black Logo)
 * 2. SNU Institution's Innovation Council (SNU-IIC / MoE)
 * 3. SNU Internal Quality Assurance Cell (SNU-IQAC)
 *
 * Positioned right after the About Section, mirroring ElevateMarquee's seamless two-tier ribbon design.
 */

const SNU_LOGOS = [
  {
    id: 'snu-main',
    name: 'Sister Nivedita University',
    role: 'Host & Patron Institution',
    src: '/assets/SNU_Logo/SNU%20Logo%20(Black)%20(1).png',
    alt: 'Sister Nivedita University Official Logo',
    url: 'https://snuniv.ac.in',
    imgClass: 'h-8 sm:h-10 md:h-11 w-auto max-w-[160px] sm:max-w-[200px]',
  },
  {
    id: 'snu-iic',
    name: "Institution's Innovation Council",
    role: 'SNU - IIC (MoE Innovation Cell)',
    src: '/assets/SNU_Logo/SNU%20IIC%20LOGO%20PNG.png',
    alt: "SNU Institution's Innovation Council Logo",
    url: 'https://snuniv.ac.in',
    imgClass: 'h-9 sm:h-11 md:h-12 w-auto max-w-[120px] sm:max-w-[140px]',
  },
  {
    id: 'snu-iqac',
    name: 'Internal Quality Assurance Cell',
    role: 'SNU - IQAC',
    src: '/assets/SNU_Logo/SNU%20IQAC%20LOGO.jpeg',
    alt: 'SNU Internal Quality Assurance Cell Logo',
    url: 'https://snuniv.ac.in',
    imgClass: 'h-9 sm:h-11 md:h-12 w-auto max-w-[120px] sm:max-w-[140px]',
  },
];

// Repeat 6 times per track segment to ensure infinite loop seamlessly spans ultra-wide displays
const REPEATED_LOGOS = [...SNU_LOGOS, ...SNU_LOGOS, ...SNU_LOGOS, ...SNU_LOGOS, ...SNU_LOGOS, ...SNU_LOGOS];

const TEXT_ITEMS = [
  'SISTER NIVEDITA UNIVERSITY',
  'HOST & ORGANIZING INSTITUTION',
  "INSTITUTION'S INNOVATION COUNCIL (IIC)",
  'INTERNAL QUALITY ASSURANCE CELL (IQAC)',
  'MINISTRY OF EDUCATION INNOVATION CELL',
  'CAMPUS VENUE: NEW TOWN, KOLKATA',
  'EMPOWERING START-UPS & RESEARCH',
];

const REPEATED_TEXT_ITEMS = [...TEXT_ITEMS, ...TEXT_ITEMS, ...TEXT_ITEMS, ...TEXT_ITEMS];

export default function SnuLogoMarquee() {
  return (
    <section
      id="snu-marquee"
      className="relative z-10 w-full overflow-hidden select-none bg-[#F7F7F4] border-y border-[#DADADA] shadow-sm"
      aria-label="Sister Nivedita University Institutional Partners Marquee"
    >
      {/* ================= ARCHITECTURAL TOP HEADER STRIP ================= */}


      {/* ================= RIBBON 1: OFFICIAL LOGOS SCROLLING LEFT ================= */}
      <div className="relative w-full overflow-hidden bg-[#FFFFFF] py-3.5 sm:py-4 md:py-5 border-b border-[#DADADA]">
        <div
          className="flex w-max animate-marquee-left hover:[animation-play-state:paused]"
          style={{ animationDuration: '60s' }}
        >
          {/* Track Segment A */}
          <div className="flex items-center shrink-0">
            {REPEATED_LOGOS.map((logo, idx) => (
              <a
                key={`snu-logo-a-${idx}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${logo.name} (${logo.role})`}
                className="inline-flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-2.5 sm:py-3 mx-2 sm:mx-3 rounded-2xl bg-[#FFFFFF] border border-[#DADADA] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-[#F4C430] hover:shadow-[0_8px_20px_rgba(244,196,48,0.18)] transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="h-10 sm:h-12 md:h-13 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className={`${logo.imgClass} object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>
                <div className="flex flex-col text-left border-l border-neutral-200 pl-3">
                  <span className="font-display font-bold text-xs sm:text-[13px] text-[#111111] whitespace-nowrap leading-tight group-hover:text-[#F4C430] transition-colors">
                    {logo.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#62666B] uppercase tracking-wider">
                    {logo.role}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Track Segment B (Seamless Clone) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {REPEATED_LOGOS.map((logo, idx) => (
              <a
                key={`snu-logo-b-${idx}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${logo.name} (${logo.role})`}
                tabIndex={-1}
                className="inline-flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-2.5 sm:py-3 mx-2 sm:mx-3 rounded-2xl bg-[#FFFFFF] border border-[#DADADA] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:border-[#F4C430] hover:shadow-[0_8px_20px_rgba(244,196,48,0.18)] transition-all duration-300 group cursor-pointer shrink-0"
              >
                <div className="h-10 sm:h-12 md:h-13 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    className={`${logo.imgClass} object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>
                <div className="flex flex-col text-left border-l border-neutral-200 pl-3">
                  <span className="font-display font-bold text-xs sm:text-[13px] text-[#111111] whitespace-nowrap leading-tight group-hover:text-[#F4C430] transition-colors">
                    {logo.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#62666B] uppercase tracking-wider">
                    {logo.role}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIBBON 2: SUMMIT YELLOW RIBBON SCROLLING RIGHT ================= */}
      <div className="relative w-full overflow-hidden bg-[#FFE500] py-2 sm:py-2.5 md:py-3 border-t border-black/10">
        <div
          className="flex w-max animate-marquee-right hover:[animation-play-state:paused]"
          style={{ animationDuration: '60s' }}
        >
          {/* Track Segment A */}
          <div className="flex items-center shrink-0">
            {REPEATED_TEXT_ITEMS.map((text, idx) => (
              <span
                key={`snu-text-a-${idx}`}
                className="inline-flex items-center font-bebas text-xl sm:text-2xl md:text-3xl tracking-wider text-black font-bold uppercase leading-none mr-8 sm:mr-12 md:mr-16 whitespace-nowrap"
              >
                <span>{text}</span>
                <span className="inline-block ml-8 sm:ml-12 md:ml-16 text-black/60 font-black text-sm sm:text-base">
                  ◆
                </span>
              </span>
            ))}
          </div>

          {/* Track Segment B (Seamless Clone) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {REPEATED_TEXT_ITEMS.map((text, idx) => (
              <span
                key={`snu-text-b-${idx}`}
                className="inline-flex items-center font-bebas text-xl sm:text-2xl md:text-3xl tracking-wider text-black font-bold uppercase leading-none mr-8 sm:mr-12 md:mr-16 whitespace-nowrap"
              >
                <span>{text}</span>
                <span className="inline-block ml-8 sm:ml-12 md:ml-16 text-black/60 font-black text-sm sm:text-base">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
