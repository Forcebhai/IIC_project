import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Instagram } from 'lucide-react';

/**
 * Custom LinkedIn Badge Icon
 */
function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

/**
 * SpeakerCard Component
 *
 * Implements the editorial card UI shown in the reference designs:
 * - Desktop: Horizontal side-by-side layout (photo on left, cursive about section on right)
 * - Mobile: Vertical stacked layout (photo on top, cursive about section in middle)
 * - Bottom Bar: Social channels (LinkedIn, Instagram) on left, 4 reaction badges on right
 */
const SpeakerCard = React.forwardRef(function SpeakerCard(
  { speaker, isClone = false },
  ref
) {
  const [likes, setLikes] = useState(speaker.reactions?.likes || 248);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  return (
    <div
      ref={ref}
      aria-hidden={isClone ? 'true' : undefined}
      className="shrink-0 select-none w-[300px] xs:w-[325px] sm:w-[360px] md:w-[680px] lg:w-[720px] rounded-[24px] md:rounded-[28px] bg-[#FAF9F5]/95 backdrop-blur-sm border border-[#DEDBD2] shadow-[0_12px_36px_rgba(0,0,0,0.07)] p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:border-[#CDC9BF] flex flex-col md:flex-row gap-3.5 sm:gap-4 md:gap-5"
    >
      {/* ================= 1. SPEAKER PHOTOGRAPH ================= */}
      <div className="w-full md:w-[240px] lg:w-[260px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-black/5 bg-[#EAE8E2] relative group">
        <img
          src={speaker.image}
          alt={isClone ? '' : speaker.name}
          draggable="false"
          className="w-full h-full object-cover object-top pointer-events-none transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle photo vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ================= 2. SPEAKERS ABOUT & SOCIALS (Red Circled Section) ================= */}
      <div className="flex-1 flex flex-col justify-between min-w-0 md:pl-1">
        {/* Cursive / Handwritten About Section */}
        <div className="overflow-hidden mb-2">
          <p
            className="font-caveat text-[#222222] text-[13.5px] xs:text-[14.5px] sm:text-base md:text-[16.5px] lg:text-[17.5px] leading-[1.36] md:leading-[1.42] select-none tracking-wide text-justify line-clamp-6 md:line-clamp-7"
            style={{
              fontFamily: "'Caveat', cursive, serif",
              fontOpticalSizing: 'auto',
            }}
          >
            {speaker.about}
          </p>
        </div>

        {/* Bottom Socials & Reaction Actions */}
        <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-[#E5E2D9]">
          {/* Left: Social Media Badges */}
          <div className="flex items-center gap-2">
            {/* LinkedIn Badge */}
            <a
              href={speaker.socials?.linkedin || 'https://linkedin.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded bg-[#0077B5] flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>

            {/* Instagram Badge */}
            <a
              href={speaker.socials?.instagram || 'https://instagram.com'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-lg border-[1.5px] border-[#1A1A1A] bg-transparent flex items-center justify-center text-[#1A1A1A] hover:bg-black/5 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>
          </div>

          {/* Right: Four Circular Reaction Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* 1. Red Heart */}
            <button
              onClick={handleLike}
              type="button"
              aria-label="Like"
              className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm hover:scale-110 active:scale-90 transition-transform cursor-pointer ${
                liked ? 'bg-[#DC2626] ring-2 ring-[#DC2626]/30' : 'bg-[#E53E3E]'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-white stroke-none" />
            </button>

            {/* 2. Yellow Chat Bubble */}
            <button
              type="button"
              aria-label="Comments"
              className="w-7 h-7 rounded-full bg-[#ECC94B] flex items-center justify-center text-[#1A1A1A] shadow-sm hover:scale-110 active:scale-90 transition-transform cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#1A1A1A] stroke-none" />
            </button>

            {/* 3. Green Send / Plane */}
            <button
              type="button"
              aria-label="Share"
              className="w-7 h-7 rounded-full bg-[#38A169] flex items-center justify-center text-white shadow-sm hover:scale-110 active:scale-90 transition-transform cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 fill-white stroke-none -rotate-12 translate-x-[0.5px]" />
            </button>

            {/* 4. Blue Bookmark */}
            <button
              onClick={handleBookmark}
              type="button"
              aria-label="Bookmark"
              className={`w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm hover:scale-110 active:scale-90 transition-transform cursor-pointer ${
                bookmarked ? 'bg-[#1D4ED8] ring-2 ring-[#1D4ED8]/30' : 'bg-[#3182CE]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-white stroke-none" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SpeakerCard;
