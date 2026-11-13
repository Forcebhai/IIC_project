import React from 'react';
import AboutChapter from './AboutChapter';
import { aboutChapters } from '../data/aboutContent';

export default function AboutStory({ progress }) {
  // Determine active chapter based on normalized scroll progress
  const numChapters = aboutChapters.length;
  const activeIndex = Math.min(
    numChapters - 1,
    Math.floor(progress * numChapters)
  );

  return (
    <div className="absolute inset-0 z-20 w-full h-full pointer-events-none">
      {aboutChapters.map((chapter, idx) => (
        <AboutChapter
          key={chapter.id}
          chapter={chapter}
          isActive={idx === activeIndex}
          progress={progress}
        />
      ))}
    </div>
  );
}

