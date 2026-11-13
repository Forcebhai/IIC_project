import React from 'react';
import { Train, Sparkles } from 'lucide-react';

export default function Loader({ progress = 0, isComplete = false }) {
  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#050814] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-700">
      {/* Background ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#F4B51B]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-[#F4B51B] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F4B51B] animate-spin" style={{ animationDuration: '4s' }} />
          <span>ELEVATE 360 // EXPEDITION PREPARATION</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-2">
          Bengal AI Start-up Summit
        </h2>
        <p className="text-xs sm:text-sm text-[#AEB3B8] font-mono tracking-wide mb-8">
          Preloading Cinematic Train Journey Frames ({Math.round(progress)}%)
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/[0.08] h-2 rounded-full overflow-hidden p-[1px] border border-white/10 relative">
          <div
            className="h-full bg-gradient-to-r from-[#F4B51B] via-[#FFD84D] to-[#F4B51B] rounded-full transition-all duration-150 ease-out shadow-[0_0_15px_rgba(244,181,27,0.8)]"
            style={{ width: `${Math.max(5, progress)}%` }}
          />
        </div>

        {/* Meta stats */}
        <div className="flex items-center justify-between w-full mt-3 text-[11px] font-mono text-[#AEB3B8]">
          <span className="flex items-center gap-1.5">
            <Train className="w-3.5 h-3.5 text-[#F4B51B]" />
            <span>Kolkata Express</span>
          </span>
          <span className="text-white font-bold">{Math.round(progress)}%</span>
          <span>Destination: Howrah</span>
        </div>
      </div>
    </div>
  );
}

