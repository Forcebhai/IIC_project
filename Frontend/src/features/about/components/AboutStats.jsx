import React from 'react';
import AnimatedCounter from '../../../components/animations/AnimatedCounter';

export default function AboutStats({ stats, supportingText }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 4 Stats in Editorial Minimal Grid (No ordinary boring rectangular cards) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-6">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Number with Summit Yellow Accent */}
            <div className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F4B51B] tracking-tight mb-2 drop-shadow-[0_2px_12px_rgba(244,181,27,0.3)]">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={2.2}
              />
            </div>

            {/* Label in Editorial Monospace / Modern Sans */}
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest text-[#253649] uppercase leading-tight max-w-[180px]">
              {stat.label}
            </span>

            {/* Subtle Minimal Accent Line */}
            <div className="w-6 h-[2px] bg-[#F4B51B]/40 mt-3 rounded-full group-hover:w-10 group-hover:bg-[#F4B51B] transition-all" />
          </div>
        ))}
      </div>

      {/* Supporting Text */}
      {supportingText && (
        <p className="text-xs sm:text-sm font-sans text-[#334155] max-w-lg mx-auto text-center leading-relaxed mt-4">
          {supportingText}
        </p>
      )}
    </div>
  );
}

