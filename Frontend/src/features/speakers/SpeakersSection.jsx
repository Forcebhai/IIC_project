import React, { useEffect, useRef, useState, useMemo } from 'react';
import SpeakerCard from './SpeakerCard';
import { speakersContent } from './speakersData';

/**
 * SpeakersSection Component — Architectural Editorial Showcase
 *
 * Recreates the exact visual composition from the reference UI:
 * - Architectural drafting grid background
 * - Victoria Memorial monument background aligned with dome centered under heading at 80% opacity
 * - Bold uppercase "SPEAKERS" heading with vertical light-to-dark gradient and dividing line
 * - Infinite loop horizontal carousel with oversized editorial speaker cards
 * - Zero bottom buttons or pagination under the infinite scroll
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
    // Initial measurement after layout
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

    const baseDriftSpeed = 1.0; // smooth right-to-left continuous drift (px/frame)

    const tick = () => {
      const setWidth = setWidthRef.current || 4400;

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
    velocityRef.current = Math.max(-22, Math.min(22, velocityRef.current));
  };

  return (
    <section
      id="speakers"
      ref={containerRef}
      className="relative w-full min-h-[760px] sm:min-h-[860px] md:min-h-[960px] lg:min-h-[1020px] bg-[#F7F7F4] text-[#111111] overflow-hidden flex flex-col justify-between pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 select-none border-b border-[#DADADA]"
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
          className="w-full h-full object-cover object-[center_30%] md:object-[center_22%] select-none pointer-events-none mix-blend-multiply opacity-80"
          style={{ opacity: 0.8 }}
          loading="eager"
        />
      </div>

      {/* ================= 3. TOP HEADING & DIVIDER LINE ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Main "SPEAKERS" Header with vertical gradient */}
        <h2 className="speakers-title-gradient font-display font-black tracking-[0.05em] sm:tracking-[0.07em] text-[50px] xs:text-[62px] sm:text-7xl md:text-8xl lg:text-9xl uppercase select-none leading-none">
          {speakersContent.heading}
        </h2>

        {/* Thin horizontal dividing line below SPEAKERS */}
        <div className="w-[92%] max-w-5xl mx-auto h-[1.5px] bg-[#B0B0B0] opacity-80 mt-4 sm:mt-6 mb-3 sm:mb-4" />
      </div>

      {/* ================= 4. INFINITE LOOP CAROUSEL TRACK ================= */}
      <div
        className="relative z-10 w-full overflow-hidden my-auto py-6 sm:py-8 md:py-12 cursor-grab active:cursor-grabbing select-none"
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
          className="inline-flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 will-change-transform"
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

      {/* ================= 5. CLEAN BOTTOM SPACING (Zero buttons as requested) ================= */}
      <div className="relative z-10 w-full h-4 sm:h-6 md:h-8 pointer-events-none" />
    </section>
  );
}
