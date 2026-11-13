import React from 'react';
import { cn } from '../../utils/cn';

export default function NavLink({
  label,
  href,
  isActive = false,
  onClick,
  className = '',
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'relative px-4 py-1.5 text-sm font-normal tracking-wide transition-all duration-200 rounded-full select-none cursor-pointer',
        isActive
          ? 'text-[#050814] bg-white font-bold shadow-md'
          : 'text-white hover:text-white hover:bg-white/20 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]',
        className
      )}
    >
      <span>{label}</span>
    </a>
  );
}
