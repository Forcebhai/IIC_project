import React from 'react';
import { cn } from '../../utils/cn';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        isCentered ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-3xl',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4',
            'bg-white/[0.06] border border-white/10 backdrop-blur-md',
            'text-[11px] font-mono uppercase tracking-widest text-[#F4B51B]',
            'shadow-[0_2px_12px_rgba(244,181,27,0.15)]'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B51B] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2
          className={cn(
            'text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white mb-4 leading-tight',
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-base sm:text-lg font-medium text-[#F4B51B] mb-3">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="text-sm sm:text-base text-[#AEB3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

