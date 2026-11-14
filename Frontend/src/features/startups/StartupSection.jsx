import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Award, Rocket, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

/**
 * StartupSection Component — From Ideas to Enterprises
 *
 * Fully redesigned to match the website's refined architectural editorial system:
 * - Light ivory/warm glow background with subtle ambient lighting
 * - Onyx and deep navy typography with selective Summit Yellow accents
 * - High-impact 100+ student teams flagship card with stage timeline
 * - 4 architectural innovation pillars with clean hover transitions
 */
export default function StartupSection({ onOpenPitchModal }) {
  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-[#182538] group-hover:text-[#080808] transition-colors" />,
      title: 'Pitch Deck Competition',
      description:
        'Mainstage presentations before active venture capitalists, angel syndicates, and institutional seed investors.',
      tag: 'COMPETITION',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#182538] group-hover:text-[#080808] transition-colors" />,
      title: 'Student Innovation',
      description:
        'Transforming laboratory research, patents, and campus prototypes into market-ready commercial deep-tech ventures.',
      tag: 'RESEARCH TO MARKET',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#182538] group-hover:text-[#080808] transition-colors" />,
      title: 'Start-up Ecosystem',
      description:
        'Direct access to Sister Nivedita University IIC incubation facilities, cloud credits, and compliance advisory.',
      tag: 'INCUBATION & GRANTS',
    },
    {
      icon: <Users className="w-5 h-5 text-[#182538] group-hover:text-[#080808] transition-colors" />,
      title: 'Industry Exposure',
      description:
        'High-leverage networking with enterprise technology leaders, seasoned unicorn founders, and venture partners.',
      tag: 'NETWORKING',
    },
  ];

  const highlights = [
    'Direct Pitching to VC & Angel Syndicates',
    'Pre-Seed Incubation Support via SNU-IIC',
    'Cloud Credits & Technical Prototyping Tools',
    'One-on-One Advisory with Unicorn Founders',
  ];

  const handleAction = (e) => {
    if (onOpenPitchModal) {
      e.preventDefault();
      onOpenPitchModal('startup');
    }
  };

  return (
    <section
      id="startups"
      className="section-bg-warm-glow relative py-24 sm:py-32 md:py-40 text-[#080808] overflow-hidden border-t border-[#E8E6E0]"
    >
      {/* Subtle Yellow Ambient Aura */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FFD900]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        {/* ================= 1. SPLIT EDITORIAL HEADING ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20 items-end">
          <div className="lg:col-span-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD900] shadow-sm" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#626978]">
                FROM IDEAS TO ENTERPRISES
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#182538] leading-[1.06] tracking-tight">
              WHERE THE NEXT <br />
              <span className="text-[#080808] relative inline-block">
                UNICORNS
                <span className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-[#FFD900] rounded-full" />
              </span>{' '}
              BEGIN.
            </h2>
          </div>

          {/* Right Supporting Description */}
          <div className="lg:col-span-4 lg:pl-4">
            <p className="font-sans text-base sm:text-lg text-[#626978] leading-relaxed">
              A high-stakes platform for ambitious student founders, researchers, and early-stage
              entrepreneurs to present bold deep-tech solutions and build tomorrow&apos;s commercial ventures.
            </p>
          </div>
        </div>

        {/* ================= 2. HIGHLIGHT BANNER: 100+ STUDENT START-UP TEAMS ================= */}
        <div className="p-7 sm:p-10 md:p-12 lg:p-14 rounded-3xl bg-white border border-[#E8E6E0] shadow-sm mb-14 relative overflow-hidden group">
          {/* Top Architectural Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#182538] via-[#FFD900] to-[#182538]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Massive Metric Block */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#FFD900]/20 text-[#182538] border border-[#FFD900]/40">
                  Flagship Competition Scale
                </span>
              </div>
              <div className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-[#182538] tracking-tight leading-none my-1 flex items-baseline">
                100<span className="text-[#FFD900] ml-1">+</span>
              </div>
              <div className="font-display font-bold text-xl sm:text-2xl text-[#080808] mt-2 uppercase tracking-wide">
                Student Start-up Pitching Teams
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#626978] mt-2">
                Representing Bengal and top universities across East India.
              </p>
            </div>

            {/* Narrative Callout & Timeline Milestones */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#E8E6E0] pt-6 lg:pt-0 lg:pl-10 flex flex-col justify-between">
              <p className="font-sans text-sm sm:text-base text-[#626978] leading-relaxed mb-6">
                ELEVATE 360 brings together student innovators from across Bengal and India to compete,
                receive critical venture mentorship from seasoned operators, and pitch viable deep-tech
                and AI solutions directly to seed funds and angel syndicates.
              </p>

              {/* Pitch Stages Timeline Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#F8F7F3] border border-[#E8E6E0] mb-6">
                <div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#626978] block font-semibold uppercase tracking-wider">
                    STAGE 01 · SEMI-FINAL
                  </span>
                  <div className="font-display font-bold text-base sm:text-lg text-[#182538]">
                    18 Nov · Top 15 Shortlist
                  </div>
                  <span className="text-[11px] text-[#626978] block mt-0.5">
                    Closed-door jury evaluation & deck review
                  </span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-[#E8E6E0] pt-3 sm:pt-0 sm:pl-4">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#B8860B] block font-semibold uppercase tracking-wider">
                    STAGE 02 · GRAND FINAL
                  </span>
                  <div className="font-display font-bold text-base sm:text-lg text-[#080808]">
                    19 Nov · Top 5 Mainstage
                  </div>
                  <span className="text-[11px] text-[#626978] block mt-0.5">
                    Live investor pitch & grand award ceremony
                  </span>
                </div>
              </div>

              {/* Single Prominent CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleAction}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#182538] hover:bg-[#080808] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer group"
                >
                  <span>REGISTER PITCH COMPETITION</span>
                  <ArrowRight className="w-5 h-5 text-[#FFD900] group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-xs font-mono text-[#626978] inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38A169]" />
                  Supported by SNU-IIC Incubation Cell
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. FOUR ARCHITECTURAL PILLARS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E6E0] shadow-sm hover:shadow-md hover:border-[#FFD900] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#FFD900] transition-colors" />

              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F7F3] border border-[#E8E6E0] group-hover:bg-[#FFD900] group-hover:border-[#FFD900] flex items-center justify-center transition-all duration-300 shadow-sm">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest font-semibold text-[#626978] bg-[#F8F7F3] border border-[#E8E6E0] px-2 py-0.5 rounded">
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#182538] group-hover:text-[#080808] mb-2.5 tracking-tight transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#626978] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-[#E8E6E0]/60 flex items-center gap-1.5 text-[11px] font-mono text-[#182538] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFD900]" />
              </div>
            </div>
          ))}
        </div>

        {/* ================= 4. FOUNDER INCENTIVES & INCUBATION STRIP ================= */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/70 border border-[#E8E6E0] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FFD900]/20 border border-[#FFD900]/40 flex items-center justify-center text-[#182538] shrink-0">
              <Award className="w-5 h-5 text-[#182538]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#182538]">
                What Winning Teams Receive
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#626978]">
                Exclusive seed-funding access, SNU-IIC incubation space, and commercial scaling credits.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#182538]">
            {highlights.map((highlight) => (
              <span key={highlight} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD900] shrink-0" />
                <span className="font-medium">{highlight}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
