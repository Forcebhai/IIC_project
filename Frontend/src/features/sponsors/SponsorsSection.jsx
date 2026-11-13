import React from 'react';
import { Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { sponsorsContent } from './data';

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="section-bg-white relative py-24 sm:py-32 md:py-40 text-[#080808] overflow-hidden border-t border-[#E8E6E0]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= EDITORIAL HEADING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 items-end">
          <div className="lg:col-span-7">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFD900]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#626978]">
                {sponsorsContent.label}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#182538] leading-[1.08] tracking-tight">
              {sponsorsContent.heading}
            </h2>
          </div>

          {/* Right Supporting Description */}
          <div className="lg:col-span-5 lg:pl-6">
            <p className="font-sans text-base sm:text-lg text-[#626978] leading-relaxed">
              {sponsorsContent.description}
            </p>
          </div>
        </div>

        {/* ================= HOST & COORDINATOR DUAL CARD ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Host University */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6E0] shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#182538]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#182538] bg-[#E8E6E0]/50 px-3 py-1 rounded">
                  {sponsorsContent.host.role}
                </span>
                <Building2 className="w-5 h-5 text-[#182538]" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#182538] mb-2 tracking-tight">
                {sponsorsContent.host.institution}
              </h3>
              <p className="font-sans text-xs text-[#626978] uppercase tracking-wider font-semibold mb-4">
                {sponsorsContent.host.location}
              </p>
              <p className="font-sans text-sm text-[#626978] leading-relaxed">
                {sponsorsContent.host.description}
              </p>
            </div>
          </div>

          {/* Coordinating Council */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E6E0] shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD900]" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#182538] bg-[#FFD900]/20 px-3 py-1 rounded">
                  {sponsorsContent.coordinator.role}
                </span>
                <Sparkles className="w-5 h-5 text-[#FFD900]" />
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#182538] mb-2 tracking-tight">
                {sponsorsContent.coordinator.name}
              </h3>
              <p className="font-sans text-xs text-[#626978] uppercase tracking-wider font-semibold mb-4">
                Ministry of Education Innovation Cell
              </p>
              <p className="font-sans text-sm text-[#626978] leading-relaxed">
                {sponsorsContent.coordinator.description}
              </p>
            </div>
          </div>
        </div>

        {/* ================= ARCHITECTURAL GRID WITH CORNER CROSSHAIRS ================= */}
        {/* Directly inspired by UI reference image */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-white border border-[#E8E6E0] shadow-sm">
          {/* 4 Architectural Crosshair Marks (+) */}
          <span className="absolute -top-2.5 -left-2.5 font-mono text-xs text-neutral-400 select-none">+</span>
          <span className="absolute -top-2.5 -right-2.5 font-mono text-xs text-neutral-400 select-none">+</span>
          <span className="absolute -bottom-2.5 -left-2.5 font-mono text-xs text-neutral-400 select-none">+</span>
          <span className="absolute -bottom-2.5 -right-2.5 font-mono text-xs text-neutral-400 select-none">+</span>

          {/* Subheading */}
          <div className="text-center mb-8 pb-4 border-b border-[#E8E6E0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#182538] tracking-tight uppercase">
              Ecosystem & Innovation Partners
            </h3>
          </div>

          {/* 6 Grid Cells */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#E8E6E0] rounded-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#E8E6E0]">
            {sponsorsContent.partners.map((partner) => (
              <div
                key={partner.id}
                className={`p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  partner.highlight
                    ? 'bg-[#FFD900] text-[#080808] font-bold shadow-inner'
                    : 'bg-white hover:bg-neutral-50 text-[#182538]'
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest mb-2 px-2 py-0.5 rounded ${
                    partner.highlight
                      ? 'bg-black/10 text-black font-semibold'
                      : 'bg-neutral-100 text-[#626978]'
                  }`}
                >
                  {partner.category}
                </span>

                <div className="font-display font-extrabold text-lg sm:text-xl tracking-tight">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
