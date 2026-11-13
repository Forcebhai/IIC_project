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
