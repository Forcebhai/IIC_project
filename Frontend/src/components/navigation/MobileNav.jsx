import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { siteConfig } from '../../config/siteConfig';

export default function MobileNav({
  isOpen,
  onClose,
  links,
  activeSection,
  onNavigate,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#050814]/98 backdrop-blur-2xl text-white p-6 sm:p-8 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
      {/* Top Header Row: Logo & Close Button */}
      <div className="flex items-center justify-between pb-5 border-b border-white/10">
        <img
          src="/assets/logos/Elevate360_logo.png"
          alt="Elevate 360 Official Logo"
          className="h-8 w-auto max-w-[150px] object-contain"
        />

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation Links List */}
      <nav className="flex flex-col gap-2 py-6 overflow-y-auto">
        {links.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.href, link.id);
                onClose();
              }}
              className={cn(
                'flex items-center justify-between px-4 py-3 rounded-xl font-display font-bold text-lg tracking-wide uppercase transition-all',
                isActive
                  ? 'bg-[#F4C430] text-[#111111]'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              )}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-5 h-5 opacity-70" />
            </a>
          );
        })}
      </nav>

      {/* Bottom Footer Actions */}
      <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
        <a
          href={siteConfig.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full py-4 rounded-xl bg-[#F4C430] hover:bg-[#E6B91F] text-[#111111] font-display font-black text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 cursor-pointer"
        >
          <span>REGISTER NOW</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-center font-mono text-xs text-neutral-400">
          Sister Nivedita University • 17–19 November 2026
        </p>
      </div>
    </div>
  );
}
