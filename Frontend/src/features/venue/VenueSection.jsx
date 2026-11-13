import React from 'react';
import { MapPin, Calendar, Compass, ArrowRight, Navigation } from 'lucide-react';
import { venueContent } from './data';

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="section-bg-warm-glow relative py-24 sm:py-32 md:py-40 text-[#080808] overflow-hidden border-t border-[#E8E6E0]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= EDITORIAL HEADING ================= */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FFD900]" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#626978]">
              {venueContent.label}
            </span>
          </div>

          {/* Main Editorial Heading */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#182538] leading-[1.08] tracking-tight">
            {venueContent.heading}
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#626978] leading-relaxed mt-5">
            {venueContent.description}
          </p>
        </div>

        {/* ================= TWO-COLUMN EDITORIAL LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          {/* Left Column: Venue Photograph */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-[#E8E6E0] shadow-sm group">
              <img
                src={venueContent.image}
                alt={venueContent.venueName}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom Badge inside photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-mono font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FFD900]" />
                  <span>KOLKATA, WEST BENGAL</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {venueContent.venueName}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Event Information & Map Details */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E6E0] shadow-sm">
            <div className="space-y-6 sm:space-y-8">
              {/* Event Dates */}
              <div className="pb-6 border-b border-[#E8E6E0]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#626978] tracking-widest font-semibold mb-2">
                  <Calendar className="w-4 h-4 text-[#182538]" />
                  <span>SUMMIT DATES</span>
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-[#182538] tracking-tight">
                  {venueContent.dates}
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#626978] mt-1">
                  Two full days of immersive keynotes, panel debates, and start-up pitching.
                </p>
              </div>

              {/* Venue Address */}
              <div className="pb-6 border-b border-[#E8E6E0]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#626978] tracking-widest font-semibold mb-2">
                  <Navigation className="w-4 h-4 text-[#182538]" />
                  <span>CAMPUS LOCATION</span>
                </div>
                <div className="font-display font-bold text-lg sm:text-xl text-[#080808]">
                  {venueContent.venueName}
                </div>
                <p className="font-sans text-sm text-[#626978] mt-1 leading-relaxed">
                  {venueContent.address}
                </p>
              </div>

              {/* Transportation Details */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#626978] tracking-widest font-semibold mb-2">
                  <Compass className="w-4 h-4 text-[#182538]" />
                  <span>CONNECTIVITY & ACCESSIBILITY</span>
                </div>
                <p className="font-sans text-sm text-[#626978] leading-relaxed">
                  {venueContent.landmarks}
                </p>
              </div>
            </div>

            {/* Button: VIEW LOCATION */}
            <div className="pt-8 mt-8 border-t border-[#E8E6E0]">
              <a
                href={venueContent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#182538] hover:bg-[#080808] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer w-full sm:w-auto"
              >
                <span>VIEW LOCATION</span>
                <ArrowRight className="w-4 h-4 text-[#FFD900]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
