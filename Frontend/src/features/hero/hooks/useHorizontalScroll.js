import { useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../../../lib/gsap';
import { TOTAL_FRAMES } from '../utils/frameUtils';
import { storyPanels } from '../data/storyPanels';

export function useHorizontalScroll({
  containerRef,
  pinWrapperRef,
  storyTrackRef,
  isReady,
}) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isReady) return;
    const container = containerRef.current;
    const pinWrapper = pinWrapperRef.current;
    const storyTrack = storyTrackRef.current;

    if (!container || !pinWrapper || !storyTrack) return;

    const totalPanels = storyPanels.length;
    // Calculate total horizontal travel distance (6 panels travel distance)
    const getScrollDistance = () => window.innerWidth * (totalPanels - 1);

    const frameState = { frame: 0 };

    const ctx = gsap.context(() => {
      // Main pinned ScrollTrigger timeline with highest priority
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${window.innerHeight * 6}`,
          pin: pinWrapper,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          refreshPriority: 10,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            setScrollProgress(p);

            // Compute active panel index based on 0..0.84 travel phase
            const travelProgress = Math.min(1, p / 0.84);
            const panelIdx = Math.min(
              totalPanels - 1,
              Math.floor(travelProgress * totalPanels)
            );
            setCurrentPanelIndex(panelIdx);
          },
        },
      });

      // 1. Horizontal storytelling panels translation (completes at 0.84)
      tl.to(
        storyTrack,
        {
          x: () => -getScrollDistance(),
          ease: 'none',
          duration: 0.84,
        },
        0
      );

      // 2. Train frame progression synchronized with timeline (completes at 0.84)
      tl.to(
        frameState,
        {
          frame: TOTAL_FRAMES - 1,
          ease: 'power1.out',
          duration: 0.84,
          onUpdate: () => {
            const frameIdx = Math.round(frameState.frame);
            setCurrentFrameIndex(frameIdx);
          },
        },
        0
      );

      // 3. Resting Hold Phase (0.84 to 1.0)
      // The train has completed its journey and reached Kolkata / Howrah Bridge.
      // Panel 7 ("The Future Starts in Bengal") and the final frame remain stationary,
      // allowing the user to comfortably read before Hero unpins and transitions to About.
      tl.to({}, { duration: 0.16 });
    }, container);

    // Refresh ScrollTrigger and ensure strict DOM sorting priority
    ScrollTrigger.sort();
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [containerRef, pinWrapperRef, storyTrackRef, isReady]);

  return {
    currentFrameIndex,
    currentPanelIndex,
    scrollProgress,
  };
}
