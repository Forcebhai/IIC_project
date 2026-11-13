import React from 'react';
import SpeakerCard from './SpeakerCard';
import { speakersContent } from './speakersData';

export default function SpeakersSection() {
  return (
    <section
      id="speakers"
      className="section-bg-warm relative py-24 sm:py-32 md:py-40 text-[#080808] overflow-hidden border-t border-[#E8E6E0]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= EDITORIAL HEADING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 items-end">
          <div className="lg:col-span-7">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFD900]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#626978]">
                {speakersContent.label}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#182538] leading-[1.08] tracking-tight">
              {speakersContent.heading}
            </h2>
          </div>

          {/* Right Supporting Description */}
          <div className="lg:col-span-5 lg:pl-6">
            <p className="font-sans text-base sm:text-lg text-[#626978] leading-relaxed">
              {speakersContent.description}
            </p>
          </div>
        </div>

        {/* Subheading row with thin line matching UI reference */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E6E0] mb-10">
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#182538]">
            Keynote speakers
          </h3>
          <span className="font-mono text-xs uppercase tracking-wider text-[#626978]">
            Distinguished Voices & Fellows
          </span>
        </div>

        {/* ================= 4-COLUMN SPEAKER SHOWCASE ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {speakersContent.speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
