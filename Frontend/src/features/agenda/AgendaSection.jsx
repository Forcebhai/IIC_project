import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { agendaContent } from './agendaData';

export default function AgendaSection() {
  const [activeDayId, setActiveDayId] = useState('day-01');

  const activeDay =
    agendaContent.days.find((day) => day.id === activeDayId) ||
    agendaContent.days[0];

  return (
    <section
      id="agenda"
      className="section-bg-white relative py-24 sm:py-32 md:py-40 text-[#080808] overflow-hidden border-t border-[#E8E6E0]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= SPLIT EDITORIAL HEADING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 items-end">
          <div className="lg:col-span-7">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFD900]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#626978]">
                {agendaContent.label}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#182538] leading-[1.08] tracking-tight">
              {agendaContent.heading}
            </h2>
          </div>

          {/* Right Supporting Description */}
          <div className="lg:col-span-5 lg:pl-6">
            <p className="font-sans text-base sm:text-lg text-[#626978] leading-relaxed">
              {agendaContent.description}
            </p>
          </div>
        </div>

        {/* ================= PROGRAMME TABS & DATE HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#182538] mb-12">
          {/* Two Interactive Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-white border border-[#E8E6E0] shadow-sm">
            {agendaContent.days.map((day) => {
              const isActive = day.id === activeDayId;
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setActiveDayId(day.id)}
                  className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-lg text-xs sm:text-sm font-bold font-sans tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#182538] text-white shadow-sm'
                      : 'text-[#626978] hover:text-[#080808] hover:bg-neutral-50'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#FFD900]' : 'bg-neutral-300'
                    }`}
                  />
                  <span>{day.dayNumber} — {day.date.split(' ')[0]} {day.date.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Large Date Typography */}
          <div className="text-left md:text-right">
            <span className="block font-mono text-xs text-[#626978] uppercase tracking-widest mb-1">
              Active Programme Schedule
            </span>
            <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#182538] tracking-tight">
              {activeDay.date}
            </div>
          </div>
        </div>

        {/* ================= EDITORIAL TIMELINE LIST ================= */}
        <div className="relative pl-6 sm:pl-10 md:pl-14 border-l border-[#E8E6E0] ml-3 sm:ml-6 md:ml-8 space-y-6 sm:space-y-8">
          {activeDay.sessions.map((session) => (
            <div
              key={session.number}
              className="group relative transition-all duration-200"
            >
              {/* Circular Node on Timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[63px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#182538] flex items-center justify-center group-hover:border-[#FFD900] group-hover:bg-[#FFD900] transition-colors shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#182538] group-hover:bg-black transition-colors" />
              </div>

              {/* Session Content Row */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/70 border border-[#E8E6E0] group-hover:border-[#FFD900]/80 group-hover:bg-white transition-all shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-2.5">
                  {/* Subtle Yellow Accent Number */}
                  <span className="font-mono text-xs sm:text-sm font-bold px-2 py-0.5 rounded bg-[#FFD900]/20 text-[#182538] border border-[#FFD900]/40">
                    #{session.number}
                  </span>

                  {/* Category Label */}
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#626978] bg-[#F8F7F3] border border-[#E8E6E0] px-2.5 py-0.5 rounded">
                    {session.category}
                  </span>
                </div>

                {/* Session Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#080808] group-hover:text-[#182538] tracking-tight leading-snug">
                  {session.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
