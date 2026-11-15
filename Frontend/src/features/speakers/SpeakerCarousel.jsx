import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SpeakerCard from './SpeakerCard';

/**
 * SpeakerCarousel Component — Curved 3D Perspective Architecture
 *
 * Implements a true 3D cylindrical arc using hardware-accelerated CSS transforms:
 * - Center card: upright, prominent, scaled, highest depth & visual prominence
 * - Adjacent cards: progressively rotated inward on Y-axis and pushed back in Z-space
 * - Outer cards: curved along a gentle horizontal arc with smooth edge falloff
 * - Continuous smooth auto-drift (pauses on hover)
 * - Inertial touch swiping and mouse dragging
 * - Precision Prev/Next circular controls with Summit Yellow accents
 */
export default function SpeakerCarousel({
  speakers = [],
  onSpeakerSelect,
}) {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const animFrameIdRef = useRef(null);

  // Core physics & position refs (direct DOM manipulation for butter-smooth 60/120fps)
  const posRef = useRef(0); // continuous fractional index
  const targetPosRef = useRef(0);
  const isSnappingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const posAtDragStartRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Responsive geometry metrics
  const [metrics, setMetrics] = useState({
    cardWidth: 250,
    cardHeight: 390,
    spacing: 230,
    perspective: 1200,
    arcAngle: 15,
    zDepth: 60,
  });

  const [activeCenterIndex, setActiveCenterIndex] = useState(0);
  const isVisibleRef = useRef(true);

  // Pause expensive 3D animation loop when carousel is off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute responsive layout metrics on mount & resize
  const updateMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;

    if (width >= 1200) {
      setMetrics({
        cardWidth: 250,
        cardHeight: 390,
        spacing: 230,
        perspective: 1200,
        arcAngle: 15,
        zDepth: 65,
      });
    } else if (width >= 768) {
      setMetrics({
        cardWidth: 220,
        cardHeight: 360,
        spacing: 195,
        perspective: 1000,
        arcAngle: 13,
        zDepth: 50,
      });
    } else {
      // Mobile
      const mobWidth = Math.min(280, Math.floor(width * 0.74));
      setMetrics({
        cardWidth: mobWidth,
        cardHeight: 380,
        spacing: Math.floor(mobWidth * 0.94),
        perspective: 800,
        arcAngle: 12,
        zDepth: 40,
      });
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics, { passive: true });
    return () => window.removeEventListener('resize', updateMetrics);
  }, [updateMetrics]);

  // Main 3D render loop
  useEffect(() => {
    const N = speakers.length;
    if (N === 0) return;

    // Respect reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const baseDriftSpeed = prefersReducedMotion ? 0 : 0.0022; // ~1 card per 7 seconds

    const tick = (now) => {
      // Skip geometry updates when off-screen to preserve mobile CPU/GPU
      if (!isVisibleRef.current) {
        animFrameIdRef.current = requestAnimationFrame(tick);
        return;
      }

      // 1. Position update logic
      if (!isDraggingRef.current) {
        if (isSnappingRef.current) {
          // Smooth spring to target
          const diff = targetPosRef.current - posRef.current;
          if (Math.abs(diff) < 0.002) {
            posRef.current = targetPosRef.current;
            isSnappingRef.current = false;
          } else {
            posRef.current += diff * 0.12;
          }
        } else if (Math.abs(velocityRef.current) > 0.002) {
          // Inertial release decay
          posRef.current += velocityRef.current;
          velocityRef.current *= 0.92; // friction
        } else {
          // Subtle continuous drift if not hovered
          velocityRef.current = 0;
          if (!isHoveredRef.current) {
            posRef.current += baseDriftSpeed;
          }
        }
      }

      // Modulo normalize to keep numbers in comfortable numerical range
      if (posRef.current > N * 100 || posRef.current < -N * 100) {
        posRef.current = ((posRef.current % N) + N) % N;
      }

      const currentPos = posRef.current;
      const roundedCenter = Math.round(currentPos);
      const normalizedCenter = ((roundedCenter % N) + N) % N;

      // Update state for active index if changed (debounced)
      if (roundedCenter !== activeCenterIndex) {
        setActiveCenterIndex(normalizedCenter);
      }

      // 2. Direct 3D transform updates for each card
      for (let i = 0; i < N; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // Calculate shortest circular difference from currentPos
        let diff = i - currentPos;
        while (diff < -N / 2) diff += N;
        while (diff > N / 2) diff -= N;

        const absDiff = Math.abs(diff);

        // Cull cards outside the curved viewing window
        if (absDiff > 2.8) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          el.style.visibility = 'hidden';
          continue;
        }

        // 3D Geometry calculations
        const x = diff * metrics.spacing;
        const z = -Math.pow(absDiff, 1.25) * metrics.zDepth;
        const rotY = -diff * metrics.arcAngle;
        const scale = Math.max(0.72, 1.05 - absDiff * 0.10);
        const zIndex = Math.round(100 - absDiff * 20);

        // Natural smooth opacity falloff at edges
        let opacity = 1;
        if (absDiff > 1.6) {
          opacity = Math.max(0, 1 - (absDiff - 1.6) * 0.85);
        }

        // Apply hardware-accelerated transforms
        el.style.visibility = 'visible';
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${zIndex}`;
        el.style.pointerEvents = absDiff <= 2.2 ? 'auto' : 'none';
        el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, 0px, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [speakers, metrics, activeCenterIndex]);

  // ================= DRAG / SWIPE INTERACTION =================
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    isSnappingRef.current = false;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    pointerStartXRef.current = clientX;
    posAtDragStartRef.current = posRef.current;
    lastPointerXRef.current = clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - pointerStartXRef.current;

    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }

    // Convert pixel delta to fractional index
    const dragSensitivity = metrics.spacing;
    const deltaIndex = -deltaX / dragSensitivity;
    posRef.current = posAtDragStartRef.current + deltaIndex;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 12) {
      const dx = clientX - lastPointerXRef.current;
      velocityRef.current = (-dx / dragSensitivity) * 0.8;
      lastPointerXRef.current = clientX;
      lastTimeRef.current = now;
    }
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // Apply clamp on release velocity
    velocityRef.current = Math.max(-0.12, Math.min(0.12, velocityRef.current));

    // If velocity is low, snap smoothly to nearest card
    if (Math.abs(velocityRef.current) < 0.02) {
      velocityRef.current = 0;
      targetPosRef.current = Math.round(posRef.current);
      isSnappingRef.current = true;
    }
  };

  // Step carousel backward by 1 position
  const handlePrev = () => {
    targetPosRef.current = Math.round(posRef.current) - 1;
    velocityRef.current = 0;
    isSnappingRef.current = true;
  };

  // Step carousel forward by 1 position
  const handleNext = () => {
    targetPosRef.current = Math.round(posRef.current) + 1;
    velocityRef.current = 0;
    isSnappingRef.current = true;
  };

  // Handle clicking a specific card
  const handleCardClick = (index, speaker) => {
    if (hasDraggedRef.current) return;

    const N = speakers.length;
    let diff = index - posRef.current;
    while (diff < -N / 2) diff += N;
    while (diff > N / 2) diff -= N;

    // If clicking a side card, center it smoothly
    if (Math.abs(diff) > 0.35) {
      targetPosRef.current = posRef.current + diff;
      velocityRef.current = 0;
      isSnappingRef.current = true;
    } else {
      // Center card clicked: trigger speaker select callback
      if (onSpeakerSelect) {
        onSpeakerSelect(speaker);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{
        height: `${metrics.cardHeight + 40}px`,
      }}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        handlePointerUp();
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* ================= 3D VIEWPORT CONTAINER ================= */}
      <div
        className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        style={{
          perspective: `${metrics.perspective}px`,
          perspectiveOrigin: '50% 50%',
          touchAction: 'pan-y',
        }}
      >
        <div
          className="relative w-full h-full pointer-events-none"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {speakers.map((speaker, index) => {
            const isActive = index === activeCenterIndex;
            return (
              <div
                key={speaker.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute top-1/2 left-1/2 will-change-transform"
                style={{
                  width: `${metrics.cardWidth}px`,
                  height: `${metrics.cardHeight}px`,
                  transform: 'translate(-50%, -50%)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <SpeakerCard
                  speaker={speaker}
                  isActive={isActive}
                  onClick={() => handleCardClick(index, speaker)}
                  onMouseEnter={() => {
                    isHoveredRef.current = true;
                  }}
                  onMouseLeave={() => {
                    isHoveredRef.current = false;
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CIRCULAR NAVIGATION ARROWS ================= */}
      {/* Left (Previous) Button */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Speaker"
        className="absolute left-2 sm:left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#DADADA] text-[#111111] hover:bg-[#F4C430] hover:border-[#F4C430] hover:text-[#111111] shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Right (Next) Button */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Speaker"
        className="absolute right-2 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-[#DADADA] text-[#111111] hover:bg-[#F4C430] hover:border-[#F4C430] hover:text-[#111111] shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer group"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}
