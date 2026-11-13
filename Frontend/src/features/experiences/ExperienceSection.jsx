import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experiencesData } from './data';

export default function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="section-bg-primary relative py-24 sm:py-32 md:py-40 text-[#080808] overflow-hidden border-t border-[#E8E6E0]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= SPLIT EDITORIAL HEADING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 md:mb-24 items-end">
          <div className="lg:col-span-7">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFD900]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#626978]">
                {experiencesData.label}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#182538] leading-[1.08] tracking-tight">
              {experiencesData.heading}
            </h2>
          </div>

          {/* Right Supporting Description */}
          <div className="lg:col-span-5 lg:pl-6">
            <p className="font-sans text-base sm:text-lg text-[#626978] leading-relaxed">
              {experiencesData.description}
            </p>
          </div>
        </div>

        {/* ================= 5 LARGE EDITORIAL ROWS ================= */}
        <div className="border-t border-[#E8E6E0] divide-y divide-[#E8E6E0]">
          {experiencesData.items.map((item) => (
            <div
              key={item.number}
              className="group relative py-8 sm:py-10 md:py-12 px-3 sm:px-6 transition-all duration-300 hover:bg-white/70 rounded-xl cursor-default"
            >
              {/* Subtle yellow hover accent border */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#FFD900] transition-colors rounded-l-xl" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                {/* Number */}
                <div className="md:col-span-2 flex items-center">
                  <span className="font-mono font-bold text-2xl sm:text-3xl md:text-4xl text-[#182538] group-hover:text-[#FFD900] transition-colors duration-300">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                  <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-[#080808] group-hover:text-[#182538] tracking-tight transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="font-sans text-sm sm:text-base text-[#626978] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Directional Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#E8E6E0] flex items-center justify-center text-[#182538] group-hover:border-[#FFD900] group-hover:bg-[#FFD900] group-hover:text-[#080808] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
