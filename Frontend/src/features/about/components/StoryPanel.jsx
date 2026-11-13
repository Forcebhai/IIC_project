import React from 'react';
import StoryContent from './StoryContent';
import { storyStages } from '../data/storyData';

export default function StoryPanel({ activeIndex, onNavigate }) {
  return (
    <div className="absolute right-0 bottom-0 w-full md:w-[76%] lg:w-[74%] xl:w-[72%] z-20">
      {/* The White Storytelling Panel */}
      <div className="about-white-panel relative w-full h-[50vh] sm:h-[46vh] md:h-[42vh] lg:h-[40vh] min-h-[340px] md:min-h-[310px] md:max-h-[400px] overflow-hidden flex flex-col justify-between">
        
        {/* Subtle Top Stage Progress Indicator Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-neutral-100 flex z-30">
          {storyStages.map((_, idx) => (
            <div
              key={idx}
              className={`flex-1 h-full transition-all duration-300 ${
                idx <= activeIndex ? 'bg-[#F4B51B]' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* 6 Story Stage Layers */}
        <div className="relative w-full flex-1">
          {storyStages.map((stage, idx) => (
            <StoryContent
              key={stage.id}
              stage={stage}
              index={idx}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Subtle Bottom Divider Line from UI Reference */}
        <div className="w-full border-t border-[#E8E4DC] pointer-events-none" />

      </div>
    </div>
  );
}
