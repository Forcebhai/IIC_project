import React, { useRef } from 'react';
import StoryPanel from './StoryPanel';
import { useAboutStoryAnimation } from '../hooks/useAboutStoryAnimation';
import { siteConfig } from '../../../config/siteConfig';
import { scrollTo } from '../../../lib/lenis';
import '../styles/about.css';

export default function AboutSection() {
  const containerRef = useRef(null);
  const { activeIndex } = useAboutStoryAnimation(containerRef, 6);

  const handleNavigate = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      scrollTo(el, { offset: -70 });
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="about-grid-bg relative w-full h-screen overflow-hidden"
    >
      {/* ================= STATIC BACKGROUND ILLUSTRATION ================= */}
      {/* Restored to user's preferred desktop configuration: grounded at bottom-left with w-[78%] lg:w-[72%].
          On mobile (< md), elevated to top-[180px] sm:top-[200px] so monument is clearly visible above the white card. */}
      <div className="absolute inset-x-0 bottom-0 z-0 flex items-end justify-start overflow-hidden pointer-events-none">
        <img
          src="/assets/images/about/victoria_memorial.png"
          alt="Victoria Memorial Kolkata Architectural Illustration"
          className="block w-[125%] sm:w-[105%] md:w-[78%] lg:w-[72%] max-w-none md:max-w-[1250px] h-auto object-contain object-bottom -ml-4 sm:-ml-6 lg:-ml-8 opacity-95 translate-y-4"
          loading="eager"
        />
      </div>

      {/* ================= STATIC TOP HEADER COMPOSITION ================= */}
      {/* Restored to user's preferred desktop positioning: md:top-[8%] md:left-[24%] right-0,
          perfectly balanced over the white panel on the right.
          On mobile, centered at top-[82px] sm:top-[90px] left-0 right-0 below the navbar. */}
      <div className="about-top-header absolute top-[82px] sm:top-[90px] md:top-[17%] left-0 md:left-[10%] right-0 flex flex-col items-center justify-center text-center px-4 select-none z-10">

        {/* Line 1: More than a (Clean baseline alignment) */}
        <div className="inline-flex items-baseline justify-center gap-2 sm:gap-3 text-center">
          <span className="font-alice about-top-more text-2xl sm:text-3xl md:text-[clamp(28px,4.5vw,50px)] leading-none">
            More
          </span>
          <span className="font-canva about-top-than-a text-2xl sm:text-2xl md:text-[clamp(24px,4vw,45px)] leading-none">
            than a
          </span>
        </div>

        {/* Line 2: Summit. (Large bold italic with dot) */}
        <h2 className="font-times about-top-summit text-5xl sm:text-5xl md:text-[clamp(44px,7.5vw,60px)] leading-[0.95] tracking-tight mt-1 sm:mt-2 text-center">
          Summit.
        </h2>

        {/* Line 3: Subtitle */}
        <p className="about-top-subtitle text-[10px] sm:text-xs md:text-sm font-sans font-bold tracking-[0.24em] text-[#475569] uppercase mt-2 sm:mt-2.5 text-center">
          A MOVEMENT FOR INNOVATION.
        </p>

        {/* Line 4: Register Pill Button (Centered directly below subtitle) */}
        <div className="about-top-btn flex justify-center mt-2.5 sm:mt-3.5">
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center"
          >
            Register
          </a>
        </div>
      </div>

      {/* ================= SCROLL-DRIVEN WHITE STORYTELLING PANEL ================= */}
      <StoryPanel
        activeIndex={activeIndex}
        onNavigate={handleNavigate}
      />

      {/* Seamless bottom fade into Section 02 dark theme (At z-10 behind the white panel z-20) */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent via-[#050814]/20 to-[#050814] pointer-events-none z-10" />
    </section>
  );
}
