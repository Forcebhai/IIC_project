import React, { forwardRef } from 'react';
import StoryPanel from './StoryPanel';
import { storyPanels } from '../data/storyPanels';

const HorizontalStory = forwardRef(function HorizontalStory(
  { onScrollDown, onOpenRegister },
  ref
) {
  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 h-full flex flex-row flex-nowrap z-20 will-change-transform"
      style={{ width: `${storyPanels.length * 100}vw` }}
    >
      {storyPanels.map((panel, index) => (
        <StoryPanel
          key={panel.id}
          panel={panel}
          index={index}
          totalPanels={storyPanels.length}
          onScrollDown={onScrollDown}
          onOpenRegister={onOpenRegister}
        />
      ))}
    </div>
  );
});

export default HorizontalStory;

