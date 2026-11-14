import React, { useEffect, useRef, useState, useMemo } from 'react';
import SpeakerCard from './SpeakerCard';
import { speakersContent } from './speakersData';

/**
 * SpeakersSection Component — Single-Viewport Architectural Showcase
 *
 * Configured to fit entirely within one screen on computer screens (desktop & laptop):
 * - Floating navbar clearance with generous top padding
 * - Centered "SPEAKERS" gradient title and thin architectural dividing line
 * - Victoria Memorial monument background aligned with dome centered under heading
 * - Infinite loop horizontal carousel with responsive cards scaled to fit a single viewport
 * - Fits 100% in one page without needing any secondary scroll
 */
export default function SpeakersSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Interaction refs for infinite looping & smooth momentum drag
  const scrollOffsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const scrollStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const reqAnimIdRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  // Keep isHovered ref in sync
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Duplicate the 4 speakers 4 times (16 cards total) for seamless infinite wrapping
  const loopedSpeakers = useMemo(() => {
    const original = speakersContent.speakers || [];
    const list = [];
    for (let setIndex = 0; setIndex < 4; setIndex++) {
      original.forEach((speaker) => {
        list.push({
          uniqueKey: `speaker-set-${setIndex}-${speaker.id}`,
          speaker,
          isClone: setIndex > 0,
        });
      });
    }
    return list;
  }, []);

  // Measure the exact pixel width of 1 complete set (4 cards + gaps)
  const measureSetWidth = () => {
    if (trackRef.current && trackRef.current.children.length >= 5) {
      const card0 = trackRef.current.children[0];
      const card4 = trackRef.current.children[4];
      const measured = card4.offsetLeft - card0.offsetLeft;
      if (measured > 100) {
        setWidthRef.current = measured;
      }
    }
  };

  useEffect(() => {
    measureSetWidth();

    const handleResize = () => {
      measureSetWidth();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous animation loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const baseDriftSpeed = 0.9; // smooth right-to-left continuous drift (px/frame)

    const tick = () => {
      const setWidth = setWidthRef.current || 3600;

      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.08) {
          scrollOffsetRef.current += velocityRef.current;
          velocityRef.current *= 0.94; // friction decay
        } else {
          velocityRef.current = 0;
          if (!isHoveredRef.current) {
            scrollOffsetRef.current += baseDriftSpeed;
          }
        }
      }

      // Seamless modulo wrap within [0, setWidth)
      scrollOffsetRef.current =
        ((scrollOffsetRef.current % setWidth) + setWidth) % setWidth;

      // Apply GPU-accelerated transform
      track.style.transform = `translate3d(${-scrollOffsetRef.current}px, 0, 0)`;

      reqAnimIdRef.current = requestAnimationFrame(tick);
    };

    reqAnimIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (reqAnimIdRef.current) {
        cancelAnimationFrame(reqAnimIdRef.current);
      }
    };
  }, []);

  // ================= POINTER / TOUCH DRAGGING =================
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    isDraggingRef.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    pointerStartXRef.current = clientX;
    scrollStartXRef.current = scrollOffsetRef.current;
    lastPointerXRef.current = clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const diff = clientX - pointerStartXRef.current;
    scrollOffsetRef.current = scrollStartXRef.current - diff;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      const dx = clientX - lastPointerXRef.current;
      velocityRef.current = -dx * 0.75;
      lastPointerXRef.current = clientX;
      lastTimeRef.current = now;
    }
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Clamp velocity to comfortable range
    velocityRef.current = Math.max(-20, Math.min(20, velocityRef.current));
  };

  return (
    <section
      id="speakers"
      ref={containerRef}
      className="relative w-full h-auto md:h-screen md:min-h-[640px] md:max-h-[920px] lg:max-h-[1000px] bg-[#F7F7F4] text-[#111111] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 md:pt-26 lg:pt-28 pb-4 sm:pb-6 md:pb-8 select-none border-b border-[#DADADA]"
    >
      {/* ================= 1. ARCHITECTURAL DRAFTING GRID OVERLAY ================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #DADADA 1px, transparent 1px),
            linear-gradient(to bottom, #DADADA 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* ================= 2. VICTORIA MEMORIAL MONUMENT (80% Opacity) ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <img
          src="/assets/speakers/Victoria_memorial_Speaker.png"
          alt="Victoria Memorial Kolkata Architectural Monument"
          className="w-full h-full object-cover object-[center_28%] md:object-[center_24%] select-none pointer-events-none mix-blend-multiply opacity-80"
          style={{ opacity: 0.8 }}
          loading="eager"
        />
      </div>

      {/* ================= 3. TOP HEADING & DIVIDER LINE (Clear of floating navbar) ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center shrink-0">
        {/* Main "SPEAKERS" Header with vertical gradient */}
        <h2 className="speakers-title-gradient font-display font-black tracking-[0.05em] sm:tracking-[0.07em] text-[40px] xs:text-[46px] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl uppercase select-none leading-none">
          {speakersContent.heading}
        </h2>

        {/* Thin horizontal dividing line below SPEAKERS */}
        <div className="w-[88%] max-w-4xl mx-auto h-[1.5px] bg-[#B0B0B0] opacity-80 mt-2.5 sm:mt-3.5 mb-1" />
      </div>

      {/* ================= 4. INFINITE LOOP CAROUSEL TRACK (Centered in remaining height) ================= */}
      <div
        className="relative z-10 w-full overflow-hidden my-auto py-2 sm:py-3 md:py-4 cursor-grab active:cursor-grabbing select-none shrink-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handlePointerUp();
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={trackRef}
          className="inline-flex items-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 will-change-transform"
          style={{
            touchAction: 'pan-y',
          }}
        >
          {loopedSpeakers.map((item) => (
            <SpeakerCard
              key={item.uniqueKey}
              speaker={item.speaker}
              isClone={item.isClone}
            />
          ))}
        </div>
      </div>

      {/* ================= 5. CLEAN BOTTOM SPACING ================= */}
      <div className="relative z-10 w-full h-2 sm:h-3 md:h-4 pointer-events-none shrink-0" />
    </section>
  );
}
