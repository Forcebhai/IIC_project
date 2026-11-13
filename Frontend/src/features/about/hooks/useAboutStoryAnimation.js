import { useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../../../lib/gsap';

export function useAboutStoryAnimation(containerRef, totalStages = 6) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const blurInitial = prefersReducedMotion ? 'none' : 'blur(12px)';
    const blurOut = prefersReducedMotion ? 'none' : 'blur(12px)';
    const blurSharp = 'blur(0px)';

    const ctx = gsap.context(() => {
      // Select top header elements
      const topMore = container.querySelector('.about-top-more');
      const topThanA = container.querySelector('.about-top-than-a');
      const topSummit = container.querySelector('.about-top-summit');
      const topSubtitle = container.querySelector('.about-top-subtitle');
      const topBtn = container.querySelector('.about-top-btn');

      const topHeaderElements = [topMore, topThanA, topSummit, topSubtitle, topBtn].filter(Boolean);

      // Initially set top header elements into the blur reveal state
      gsap.set(topHeaderElements, {
        opacity: 0,
        y: 25,
        filter: blurInitial,
      });

      // Initially hide all stage layers except stage 0
      for (let i = 0; i < totalStages; i++) {
        const layer = container.querySelector(`.stage-layer-${i}`);
        if (!layer) continue;

        if (i === 0) {
          gsap.set(layer, {
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'auto',
          });
          gsap.set(
            layer.querySelectorAll(
              `.stage-${i}-title-word, .stage-${i}-label, .stage-${i}-badge, .stage-${i}-desc-word, .stage-${i}-subtitle`
            ),
            {
              opacity: 1,
              y: 0,
              filter: blurSharp,
            }
          );
        } else {
          gsap.set(layer, {
            opacity: 0,
            visibility: 'hidden',
            pointerEvents: 'none',
          });
          gsap.set(
            layer.querySelectorAll(
              `.stage-${i}-title-word, .stage-${i}-label, .stage-${i}-badge, .stage-${i}-desc-word, .stage-${i}-subtitle, .stage-${i}-stat-item, .stage-${i}-exp-item, .stage-${i}-pillar-item, .stage-${i}-buttons, .stage-${i}-brand`
            ),
            {
              opacity: 0,
              y: 25,
              filter: blurInitial,
            }
          );
        }
      }

      // Master scroll timeline scrubbed to ScrollTrigger
      // Configured with lower refreshPriority (5) so Hero's pin spacer (10) calculates first
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${window.innerHeight * (totalStages - 1) * 0.9}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          refreshPriority: 5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const stage = Math.min(
              totalStages - 1,
              Math.floor(self.progress * totalStages)
            );
            setActiveIndex(stage);
          },
        },
      });

      // 1. Blurry Revealing Entrance for the Top Header Text ("More than a Summit. A MOVEMENT FOR INNOVATION.")
      if (topHeaderElements.length > 0) {
        tl.to(
          [topMore, topThanA],
          {
            opacity: 1,
            y: 0,
            filter: blurSharp,
            duration: 0.35,
            ease: 'power2.out',
          },
          0
        );
        tl.to(
          topSummit,
          {
            opacity: 1,
            y: 0,
            filter: blurSharp,
            duration: 0.35,
            ease: 'power2.out',
          },
          0.05
        );
        tl.to(
          [topSubtitle, topBtn],
          {
            opacity: 1,
            y: 0,
            filter: blurSharp,
            duration: 0.35,
            stagger: 0.04,
            ease: 'power2.out',
          },
          0.1
        );
      }

      // 2. Chain Stage Transitions (Stages 0 to 5)
      for (let i = 0; i < totalStages - 1; i++) {
        const currentLayer = container.querySelector(`.stage-layer-${i}`);
        const nextLayer = container.querySelector(`.stage-layer-${i + 1}`);
        if (!currentLayer || !nextLayer) continue;

        const currentElements = currentLayer.querySelectorAll(
          `.stage-${i}-title-word, .stage-${i}-label, .stage-${i}-badge, .stage-${i}-desc-word, .stage-${i}-subtitle, .stage-${i}-stat-item, .stage-${i}-exp-item, .stage-${i}-pillar-item, .stage-${i}-buttons, .stage-${i}-brand`
        );
        const nextElements = nextLayer.querySelectorAll(
          `.stage-${i + 1}-title-word, .stage-${i + 1}-desc-word, .stage-${i + 1}-stat-item, .stage-${i + 1}-exp-item, .stage-${i + 1}-pillar-item, .stage-${i + 1}-buttons, .stage-${i + 1}-brand`
        );
        const nextHeaders = nextLayer.querySelectorAll(
          `.stage-${i + 1}-label, .stage-${i + 1}-badge, .stage-${i + 1}-subtitle`
        );

        // Hold current stage in focus
        tl.to({}, { duration: 0.5 });

        // Blur & Fade OUT current stage
        tl.to(currentElements, {
          opacity: 0,
          y: -20,
          filter: blurOut,
          duration: 0.35,
          stagger: 0.02,
          ease: 'power2.in',
        });
        tl.set(currentLayer, {
          opacity: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
        });

        // Prepare next stage visibility
        tl.set(nextLayer, {
          opacity: 1,
          visibility: 'visible',
          pointerEvents: 'auto',
        });

        // Animate IN next headers
        tl.to(
          nextHeaders,
          {
            opacity: 1,
            y: 0,
            filter: blurSharp,
            duration: 0.35,
            stagger: 0.04,
            ease: 'power2.out',
          },
          '>-0.05'
        );

        // Word-by-word / element blur-to-focus reveal
        tl.to(
          nextElements,
          {
            opacity: 1,
            y: 0,
            filter: blurSharp,
            duration: 0.45,
            stagger: 0.035,
            ease: 'power2.out',
          },
          '<'
        );
      }

      // Hold final stage in sharp focus
      tl.to({}, { duration: 0.5 });

      // 3. Blurry Going Exit Effect for Top Header Text as section unpins into Section 02
      if (topHeaderElements.length > 0) {
        tl.to(
          [topBtn, topSubtitle, topSummit, topThanA, topMore],
          {
            opacity: 0,
            y: -25,
            filter: blurOut,
            duration: 0.4,
            stagger: 0.03,
            ease: 'power2.in',
          },
          '>-0.35'
        );
      }

    }, container);

    ScrollTrigger.sort();
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [totalStages]);

  return { activeIndex };
}
