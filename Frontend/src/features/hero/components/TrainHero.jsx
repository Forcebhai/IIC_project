import React, { useRef } from 'react';
import TrainCanvas from './TrainCanvas';
import HorizontalStory from './HorizontalStory';
import Loader from '../../../components/common/Loader';
import { useFrameSequence } from '../hooks/useFrameSequence';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import { scrollTo } from '../../../lib/lenis';
import '../styles/hero.css';

export default function TrainHero({ onOpenRegister }) {
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const storyTrackRef = useRef(null);

  const { loadingProgress, isInitialReady, getFrame } = useFrameSequence();

  const { currentFrameIndex } = useHorizontalScroll({
    containerRef,
    pinWrapperRef,
    storyTrackRef,
    isReady: isInitialReady,
  });

  // Action to jump immediately down to vertical Phase 2
  const handleScrollToPhaseTwo = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      scrollTo(aboutSection, { offset: -60 });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative z-10 w-full bg-[#050814] overflow-hidden"
    >
      {/* Loading Screen until initial frames are ready */}
      <Loader progress={loadingProgress} isComplete={isInitialReady} />

      {/* Pinned Viewport Container */}
      <div
        ref={pinWrapperRef}
        className="relative z-10 w-full h-screen overflow-hidden"
      >
        {/* Background Train Frame Canvas Renderer - Unobstructed full visibility */}
        <TrainCanvas
          currentFrameIndex={currentFrameIndex}
          getFrame={getFrame}
          isReady={isInitialReady}
        />

        {/* Top-to-bottom White Gradient Overlay to highlight Navbar, Logo, and Links */}
        <div
          className="absolute top-0 inset-x-0 h-44 sm:h-56 md:h-72 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.82) 28%, rgba(255, 255, 255, 0.4) 62%, rgba(255, 255, 255, 0) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Horizontal Story Panels floating inside central window */}
        <HorizontalStory
          ref={storyTrackRef}
          onScrollDown={handleScrollToPhaseTwo}
          onOpenRegister={onOpenRegister}
        />
      </div>
    </section>
  );
}
