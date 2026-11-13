import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Award } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function StartupSection({ onOpenPitchModal }) {
  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-[#FFD900]" />,
      title: 'Pitch Deck Competition',
      description: 'Mainstage presentations before active venture capitalists and institutional investors.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#FFD900]" />,
      title: 'Student Innovation',
      description: 'Bridging university laboratory research and market-ready commercial technology ventures.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#FFD900]" />,
      title: 'Start-up Ecosystem',
      description: 'Direct institutional access to SNU-IIC incubation facilities, mentorship and legal advisory.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#FFD900]" />,
      title: 'Industry Exposure',
      description: 'High-leverage networking with corporate technology executives, founders and syndicate leaders.',
    },
  ];

  return (
    <section
      id="startups"
      className="relative py-24 sm:py-32 md:py-40 bg-[#182538] text-white overflow-hidden border-t border-white/10"
    >
      {/* Subtle Yellow Ambient Aura */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#FFD900]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= EDITORIAL HEADING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 items-end">
          <div className="lg:col-span-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FFD900]" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#FFD900]">
                FROM IDEAS TO ENTERPRISES
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              WHERE THE NEXT <br />
              <span className="text-[#FFD900]">UNICORNS</span> BEGIN.
            </h2>
          </div>

          {/* Right Supporting Description */}
          <div className="lg:col-span-4 lg:pl-4">
            <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed">
              A platform for ambitious student founders to present bold ideas, showcase innovation and explore the possibilities of building tomorrow&apos;s ventures.
            </p>
          </div>
        </div>

        {/* ================= HIGHLIGHT BANNER: 100+ STUDENT START-UP TEAMS ================= */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-md mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Massive Stat */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-mono text-xs sm:text-sm text-[#FFD900] uppercase tracking-widest font-semibold mb-2 block">
                FLAGSHIP COMPETITION SCALE
              </span>
              <div className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-[#FFD900] tracking-tight leading-none">
                100+
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white mt-3 uppercase tracking-wide">
                Student Start-up Pitching Teams
              </div>
            </div>

            {/* Narrative Callout */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
              <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                ELEVATE 360 brings together student innovators from across Bengal and India to compete, receive critical mentorship from seasoned founders, and pitch viable deep-tech and AI solutions to seed and angel investors.
              </p>

              {/* Single Prominent CTA */}
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#FFD900] hover:bg-[#FFE500] text-[#080808] font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(255,217,0,0.3)] cursor-pointer"
              >
                <span>EXPLORE THE PITCHING COMPETITION</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= 4 PILLARS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FFD900]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFD900]/15 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
