import React from 'react';
import { siteConfig } from '../../../config/siteConfig';

export default function StoryPanel({ panel, index, totalPanels, onScrollDown }) {
  const isFinal = panel.isFinal || index === totalPanels - 1;
  const isRegister = panel.buttonText === 'Register Now';

  return (
    <div className="w-screen h-screen flex-shrink-0 flex flex-col justify-start md:justify-center items-center pt-20 sm:pt-24 md:pt-0 p-4 sm:p-6 lg:p-8 relative z-20 pointer-events-none select-none">

      {/* Central Window Container - On mobile it is a centered glassmorphism box */}
      <div className="pointer-events-auto max-w-sm sm:max-w-md md:max-w-2xl w-full text-center flex flex-col items-center justify-center p-6 sm:p-8 md:p-0 rounded-3xl md:rounded-none hero-mobile-glass-box md:bg-transparent md:backdrop-blur-none md:border-transparent md:shadow-none mx-auto relative transition-all duration-300">

        {/* Top Pill Badge (centered) */}
        <div className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1 rounded-full hero-glass-pill text-[11px] sm:text-xs font-sans font-medium text-white/95 shadow-sm mb-3 sm:mb-4 mx-auto text-center">
          <span>{panel.tag}</span>
        </div>

        {/* Main Headline (centered) */}
        <h1 className="hero-text-title font-sans font-bold tracking-[-0.035em] text-[clamp(24px,5.2vw,56px)] leading-[1.1] mb-2.5 sm:mb-4 text-center">
          <span className="block">{panel.titleLine1}</span>
          <span className="block">{panel.titleLine2}</span>
        </h1>

        {/* Editorial Subtitle (centered) */}
        <p className="hero-text-subtitle text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-5 sm:mb-7 font-sans px-1 text-center">
          {panel.subtitle}
        </p>

        {/* Action Info & Button Container (centered) */}
        <div className="w-full flex flex-col items-center justify-center mt-1">
          {/* Centered Capsule Bar */}
          <div className="hero-glass-bar flex flex-col sm:flex-row items-center justify-between p-2 sm:p-1.5 sm:pl-5 sm:pr-1.5 rounded-2xl sm:rounded-full w-full max-w-xs sm:max-w-md shadow-lg gap-2 sm:gap-0 mx-auto text-center sm:text-left">
            <span className="text-[11px] sm:text-sm text-[#18222F] font-semibold truncate sm:pr-2 text-center sm:text-left w-full sm:w-auto">
              {panel.actionText}
            </span>

            {isRegister ? (
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-2 rounded-full bg-white hover:bg-white/95 text-[#0F172A] font-bold text-xs shadow-md transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center"
              >
                {panel.buttonText}
              </a>
            ) : (
              <button
                onClick={onScrollDown}
                className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-2 rounded-full bg-white hover:bg-white/95 text-[#0F172A] font-bold text-xs shadow-md transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {panel.buttonText}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
