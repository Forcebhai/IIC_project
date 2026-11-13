import React from 'react';
import { cn } from '../../utils/cn';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button',
  iconLeft,
  iconRight,
  ...props
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#F4B51B]/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#F4B51B] via-[#FFD84D] to-[#F4B51B] text-[#050814] font-bold shadow-[0_4px_20px_rgba(244,181,27,0.35)] hover:shadow-[0_6px_28px_rgba(244,181,27,0.55)] hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-white/10 hover:bg-white/15 text-[#E9EAEB] border border-white/20 hover:border-[#F4B51B]/60 backdrop-blur-md hover:shadow-[0_0_20px_rgba(244,181,27,0.2)] hover:scale-[1.02] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#E9EAEB] border border-white/20 hover:border-[#F4B51B] hover:text-[#F4B51B] hover:bg-[#F4B51B]/10 active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#AEB3B8] hover:text-[#F4B51B] hover:bg-white/5 active:scale-[0.98]',
    glassCapsule:
      'bg-gradient-to-r from-white/90 via-[#E9EAEB]/80 to-[#F4B51B]/40 text-[#050814] font-semibold border border-white/50 backdrop-blur-xl shadow-lg hover:shadow-xl hover:scale-[1.02]',
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {iconLeft && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{iconRight}</span>}
    </button>
  );
}

