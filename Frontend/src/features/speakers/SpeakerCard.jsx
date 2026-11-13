import React from 'react';

export default function SpeakerCard({ speaker }) {
  return (
    <div className="group flex flex-col cursor-default">
      {/* Monochrome Portrait with Clean Rounded Corners */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E6E0] border border-[#E8E6E0]">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />

        {/* Subtle yellow tag pill */}
        <div className="absolute top-3 left-3 bg-[#182538]/90 text-white font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
          Keynote
        </div>
      </div>

      {/* Speaker Name with Subtle Yellow Hover Underline */}
      <div className="mt-4 sm:mt-5">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#182538] tracking-tight">
          <span className="inline-block border-b-2 border-transparent group-hover:border-[#FFD900] transition-colors duration-200">
            {speaker.name}
          </span>
        </h3>

        {/* Professional Designation */}
        <p className="font-sans text-xs sm:text-sm font-semibold text-[#080808] mt-1">
          {speaker.designation}
        </p>

        {/* Organisation */}
        <p className="font-sans text-xs text-[#626978] mt-0.5">
          {speaker.organization}
        </p>
      </div>
    </div>
  );
}
