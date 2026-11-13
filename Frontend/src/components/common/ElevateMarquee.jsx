import React from 'react';

const REPEATED_ITEMS = new Array(12).fill('ELEVATE 360');

export default function ElevateMarquee() {
  return (
    <div
      id="infinity-marquee"
      className="relative z-10 w-full overflow-hidden select-none border-y border-neutral-900/10 shadow-sm"
      aria-label="Elevate 360 Infinite Marquee"
    >
      {/* ================= RIBBON 1 (TOP: YELLOW BG, BLACK TEXT) ================= */}
      <div className="relative w-full overflow-hidden bg-[#FFE500] py-2 sm:py-2.5 md:py-3 border-b border-black/10">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {/* Track Segment A */}
          <div className="flex items-center shrink-0">
            {REPEATED_ITEMS.map((text, idx) => (
              <span
                key={`top-a-${idx}`}
                className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-black font-bold uppercase leading-none mr-10 sm:mr-14 md:mr-20 inline-block whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>

          {/* Track Segment B (Seamless Clone) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {REPEATED_ITEMS.map((text, idx) => (
              <span
                key={`top-b-${idx}`}
                className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-black font-bold uppercase leading-none mr-10 sm:mr-14 md:mr-20 inline-block whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIBBON 2 (BOTTOM: BLACK BG, WHITE TEXT) ================= */}
      <div className="relative w-full overflow-hidden bg-black py-2 sm:py-2.5 md:py-3">
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {/* Track Segment A */}
          <div className="flex items-center shrink-0">
            {REPEATED_ITEMS.map((text, idx) => (
              <span
                key={`bottom-a-${idx}`}
                className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-white font-bold uppercase leading-none mr-10 sm:mr-14 md:mr-20 inline-block whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>

          {/* Track Segment B (Seamless Clone) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {REPEATED_ITEMS.map((text, idx) => (
              <span
                key={`bottom-b-${idx}`}
                className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-white font-bold uppercase leading-none mr-10 sm:mr-14 md:mr-20 inline-block whitespace-nowrap"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

