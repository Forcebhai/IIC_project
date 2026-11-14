import React from 'react';

/**
 * SpeakerCard — Curved Carousel Speaker Portrait Card
 * Features full-bleed real speaker photo, subtle gradient readability overlay,
 * track badge, and crisp responsive typography.
 */
export default React.forwardRef(function SpeakerCard(
  { speaker, isClone = false, isCenter = false, onCardClick },
  ref
) {
  return (
    <div
      ref={ref}
      aria-hidden={isClone ? 'true' : undefined}
      onClick={() => onCardClick && onCardClick(speaker)}
      className="absolute top-0 left-0 origin-center select-none cursor-grab active:cursor-grabbing will-change-transform"
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <div
        className={`group relative w-full h-full rounded-[22px] overflow-hidden bg-[#0A1024] border transition-all duration-300 ${
          isCenter
            ? 'border-cyan-400/60 shadow-[0_15px_40px_rgba(6,182,212,0.25)]'
            : 'border-white/15 hover:border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
        }`}
      >
        {/* Full-bleed speaker photograph */}
        <img
          src={speaker.image}
          alt={isClone ? '' : speaker.name}
          draggable="false"
          className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Ambient colored lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-black/90 pointer-events-none" />

        {/* Top category / track tag */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-cyan-300 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Keynote
          </span>
        </div>

        {/* Bottom content overlay with rich contrast gradient */}
        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-[#050814] via-[#050814]/85 to-transparent pointer-events-none">
          {speaker.track && (
            <p className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-cyan-400 font-semibold mb-1 line-clamp-1">
              {speaker.track}
            </p>
          )}

          <h3 className="font-display font-bold text-white text-sm sm:text-base md:text-lg tracking-tight leading-tight line-clamp-1">
            {speaker.name}
          </h3>

          <p className="font-sans text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5">
            {speaker.designation}
          </p>

          <p className="font-sans text-[10px] sm:text-[11px] text-[#AEB3B8] line-clamp-1">
            {speaker.organization}
          </p>
        </div>
      </div>
    </div>
  );
});
