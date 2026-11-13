import React from 'react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/animations/Reveal';
import { summitData } from '../../data/summitData';
import { CheckCircle2, ArrowUpRight, Lightbulb, Users2, Rocket } from 'lucide-react';

export default function WhySection() {
  const getThemeIcon = (id) => {
    switch (id) {
      case 'innovate':
        return <Lightbulb className="w-7 h-7 text-[#F4B51B]" />;
      case 'collaborate':
        return <Users2 className="w-7 h-7 text-[#38BDF8]" />;
      case 'transform':
        return <Rocket className="w-7 h-7 text-emerald-400" />;
      default:
        return <Lightbulb className="w-7 h-7 text-[#F4B51B]" />;
    }
  };

  return (
    <section id="why" className="relative py-24 sm:py-32 bg-[#03050C] overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F4B51B]/5 blur-[160px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="SECTION 02 // WHY ELEVATE 360?"
          title="SCRIPTING THE NEXT UNICORNS."
          subtitle="Three Strategic Pillars Powering Bengal's AI Renaissance"
          description="ELEVATE 360 bridges the gap between deep-tech intellect and exponential venture scale through three interconnected engines of change."
        />

        {/* 3 Editorial Theme Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {summitData.pillars.map((pillar, idx) => (
            <Reveal key={pillar.id} delay={idx * 0.2}>
              <div className="glass-card relative h-full rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden group">
                {/* Accent Top Border */}
                <div
                  className="absolute top-0 inset-x-0 h-1 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getThemeIcon(pillar.id)}
                    </div>
                    <span className="text-4xl font-mono font-extrabold text-white/20 group-hover:text-white/40 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Header */}
                  <span
                    className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold"
                    style={{ color: pillar.accent }}
                  >
                    THEME // {pillar.id.toUpperCase()}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#E9EAEB] mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-[#AEB3B8] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {pillar.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2.5 text-xs text-[#D2D6DC]">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: pillar.accent }}
                        />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action tag */}
                <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#AEB3B8]">
                  <span>CATALYST TRACK</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

