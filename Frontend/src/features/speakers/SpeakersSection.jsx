import React, { useEffect, useRef, useState, useMemo } from 'react';
import SpeakerCard from './SpeakerCard';
import { speakersContent } from './speakersData';

/**
 * SpeakersSection — Cinematic Curved Reelmark-style Speaker Carousel
 *
 * Implements cylindrical curve geometry:
 * - Center cards upright and smaller
 * - Edge cards progressively taller and tilted outward
 * - Continuous smooth right-to-left RAF ticker
 * - Interactive pointer & touch dragging with physics-based momentum
 * - Hand-drawn SVG annotations and dashed outline CTA pill
 */
export default function SpeakersSection() {
  const containerRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const cardElementsRef = useRef([]);

  // Generate 12 items for seamless infinite looping (3 sets of the 4 real speakers)
  const loopItems = useMemo(() => {
    const raw = speakersContent.speakers;
    const items = [];
    for (let set = 0; set < 3; set++) {
      raw.forEach((speaker, index) => {
        items.push({
          uniqueKey: `speaker-loop-${set}-${speaker.id}`,
          speaker,
          isClone: set > 0,
        });
      });
    }
    return items;
  }, []);

  const totalCards = loopItems.length;

  // Interaction & motion refs
  const scrollXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const scrollStartXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const reqAnimIdRef = useRef(null);

  // Layout metrics state
  const [viewportWidth, setViewportWidth] = useState(1440);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setViewportWidth(containerRef.current.clientWidth);
      } else {
        setViewportWidth(window.innerWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous animation and geometry update loop
  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;

    // Carousel dimensions based on viewport
    const width = viewportWidth || 1440;
    const scale = Math.max(0.65, Math.min(1.15, width / 1440));
    const cardPitch = 210 * scale;
    const totalTrackWidth = totalCards * cardPitch;
    const centerX = width / 2;
    const carouselCenterY = (width < 640 ? 210 : 240) * scale;
    const autoScrollSpeed = 0.75; // slow right-to-left continuous drift

    const updateGeometry = () => {
      // Automatic drift & momentum physics when not dragging
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.05) {
          scrollXRef.current += velocityRef.current;
          velocityRef.current *= 0.94; // smooth friction decay
        } else {
          velocityRef.current = 0;
          scrollXRef.current += autoScrollSpeed;
        }
      }

      // Keep scroll within [0, totalTrackWidth)
      scrollXRef.current = ((scrollXRef.current % totalTrackWidth) + totalTrackWidth) % totalTrackWidth;

      const currentScroll = scrollXRef.current;

      // Position each card according to cylindrical reference formulas
      for (let i = 0; i < totalCards; i++) {
        const el = cardElementsRef.current[i];
        if (!el) continue;

        // Compute relative horizontal offset wrapped symmetrically around center
        let rawOffset = (i * cardPitch - currentScroll) % totalTrackWidth;
        if (rawOffset < -totalTrackWidth / 2) rawOffset += totalTrackWidth;
        if (rawOffset > totalTrackWidth / 2) rawOffset -= totalTrackWidth;

        const cardCenterX = centerX + rawOffset;

        // Normalized distance from center (d = 0 at center, ~1 at outer bounds)
        const d = Math.abs(cardCenterX - centerX) / (706 * scale);
        const clampedD = Math.min(1.35, d);

        // Cylindrical geometry formulas from prompt:
        // width = (170 + 48 * d * d) * scale
        // height = (280 + 92 * Math.pow(d, 2.6)) * scale
        const cardW = (170 + 48 * clampedD * clampedD) * scale;
        const cardH = (280 + 92 * Math.pow(clampedD, 2.6)) * scale;

        // Vertical center curve: center cards sit lower/higher according to inverted cylinder
        const verticalCenter = carouselCenterY - (16 * clampedD * clampedD * scale);
        const cardTop = verticalCenter - cardH / 2;
        const cardLeft = cardCenterX - cardW / 2;

        // Cylindrical tilt: left cards lean left (-), right cards lean right (+)
        const rotation = Math.max(-12, Math.min(12, ((cardCenterX - centerX) / (706 * scale)) * 9.2));

        // Depth & z-index
        const zIndex = Math.round(100 - clampedD * 40);

        // Visibility & 3D styling
        el.style.width = `${Math.round(cardW)}px`;
        el.style.height = `${Math.round(cardH)}px`;
        el.style.transform = `translate3d(${Math.round(cardLeft)}px, ${Math.round(cardTop)}px, 0px) rotateZ(${rotation.toFixed(2)}deg)`;
        el.style.zIndex = zIndex;
        el.style.opacity = clampedD > 1.25 ? Math.max(0, 1 - (clampedD - 1.25) * 4) : 1;
      }

      reqAnimIdRef.current = requestAnimationFrame(updateGeometry);
    };

    reqAnimIdRef.current = requestAnimationFrame(updateGeometry);

    return () => {
      if (reqAnimIdRef.current) cancelAnimationFrame(reqAnimIdRef.current);
    };
  }, [viewportWidth, totalCards]);

  // Pointer event handlers for desktop mouse drag & mobile touch
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    velocityRef.current = 0;
    pointerStartXRef.current = e.clientX;
    scrollStartXRef.current = scrollXRef.current;
    lastPointerXRef.current = e.clientX;
    lastTimeRef.current = performance.now();

    if (carouselTrackRef.current) {
      carouselTrackRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const currentX = e.clientX;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = currentX - lastPointerXRef.current;

    // Drag delta updates scrollX (inverted so dragging left moves cards left)
    const totalDelta = currentX - pointerStartXRef.current;
    scrollXRef.current = scrollStartXRef.current - totalDelta;

    // Instantaneous velocity for natural momentum release
    velocityRef.current = -((dx / dt) * 16);

    lastPointerXRef.current = currentX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (carouselTrackRef.current) {
      try {
        carouselTrackRef.current.releasePointerCapture(e.pointerId);
      } catch (err) {
        // ignore if already released
      }
    }
  };

  return (
    <section
      id="speakers"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#070B18] text-white overflow-hidden border-t border-white/10"
      style={{
        background: 'radial-gradient(ellipse at 50% 25%, rgba(99, 102, 241, 0.12) 0%, #070B18 70%)',
      }}
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/15 to-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12">
        {/* ================= 1. HEADING & INTRODUCTORY CONTENT ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono tracking-[0.2em] uppercase font-semibold mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            {speakersContent.label}
          </div>

          {/* Large Two-line Centered Heading */}
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.06] mb-5">
            {speakersContent.headingLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#FFD900]">
              {speakersContent.headingLine2}
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
            {speakersContent.description}
          </p>
        </div>

        {/* ================= 2. CURVED REELMARK CAROUSEL STAGE ================= */}
        <div className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] my-4 select-none touch-pan-y">
          {/* Hand-drawn Annotation: Upper Right */}
          <div className="hidden lg:flex absolute top-2 right-12 flex-col items-center pointer-events-none z-30 transform rotate-6">
            <span
              className="font-serif italic font-medium text-cyan-300 text-sm tracking-wide mb-1"
              style={{ fontFamily: "'Caveat', cursive, serif" }}
            >
              Meet the visionaries
            </span>
            <svg
              className="w-20 h-14 text-cyan-400 stroke-current fill-none"
              viewBox="0 0 80 50"
            >
              <path
                d="M 15 5 Q 45 10 55 35 Q 58 42 62 45"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                strokeLinecap="round"
              />
              <path d="M 52 42 L 62 46 L 64 36" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>

          {/* Hand-drawn Annotation: Lower Left */}
          <div className="hidden lg:flex absolute bottom-8 left-12 flex-col items-center pointer-events-none z-30 transform -rotate-6">
            <svg
              className="w-20 h-14 text-amber-300 stroke-current fill-none mb-1"
              viewBox="0 0 80 50"
            >
              <path
                d="M 65 42 Q 35 38 25 15 Q 22 8 18 5"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                strokeLinecap="round"
              />
              <path d="M 28 8 L 18 4 L 16 14" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span
              className="font-serif italic font-medium text-amber-300 text-sm tracking-wide"
              style={{ fontFamily: "'Caveat', cursive, serif" }}
            >
              Ideas that move us
            </span>
          </div>

          {/* Interactive Continuous Track */}
          <div
            ref={carouselTrackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-full cursor-grab active:cursor-grabbing overflow-visible"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
            }}
          >
            {loopItems.map((item, idx) => (
              <SpeakerCard
                key={item.uniqueKey}
                ref={(el) => {
                  cardElementsRef.current[idx] = el;
                }}
                speaker={item.speaker}
                isClone={item.isClone}
              />
            ))}
          </div>
        </div>

        {/* ================= 3. BOTTOM CTA WITH DASHED RING ================= */}
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-10 relative z-20">
          {/* Subtle CTA Note */}
          <div className="flex items-center gap-2 mb-3 pointer-events-none">
            <span
              className="font-serif italic font-medium text-white/60 text-xs sm:text-sm tracking-wide"
              style={{ fontFamily: "'Caveat', cursive, serif" }}
            >
              All 20+ Keynotes & Sessions
            </span>
            <svg className="w-5 h-5 text-cyan-400 stroke-current fill-none" viewBox="0 0 24 24">
              <path d="M12 4v12m0 0l-3-3m3 3l3-3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Dashed outer ring wrapper */}
          <div className="relative inline-flex items-center justify-center p-2 rounded-full border border-dashed border-cyan-400/40 hover:border-cyan-300 transition-colors duration-300">
            <button
              onClick={() => {
                const target = document.querySelector('#agenda') || document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#182538] via-[#1F3354] to-[#0A1224] text-white font-sans font-semibold text-sm sm:text-base tracking-wide border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:shadow-[0_0_45px_rgba(6,182,212,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD900] group-hover:scale-125 transition-transform" />
              <span>Explore All Speakers</span>
              <svg
                className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
