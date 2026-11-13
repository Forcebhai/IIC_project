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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start p-4 bg-black/60 backdrop-blur-xl animate-in fade-in duration-200 pointer-events-auto">
      {/* Frosted Glass Capsule Drawer */}
      <div className="w-full rounded-3xl p-6 bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl text-white relative overflow-hidden">

        {/* Header inside drawer */}
        <div className="flex items-center justify-between pb-4 border-b border-white/15">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base tracking-tight text-white">Elevate 360</span>
            <span className="text-[11px] text-white/70 font-mono">Kolkata 2026</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Links list */}
        <div className="flex flex-col gap-1.5 py-4">
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
                  'flex items-center justify-between px-4 py-2.5 rounded-xl font-medium text-sm transition-all',
                  isActive
                    ? 'bg-white text-[#0F172A] font-bold shadow-md'
                    : 'text-white/90 hover:bg-white/10'
                )}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>
            );
          })}
        </div>

        {/* Register CTA inside mobile nav linking directly to Vybe Cerkle */}
        <div className="pt-4 border-t border-white/15 flex flex-col gap-2">
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-white text-[#0F172A] font-bold text-sm flex items-center justify-center shadow-lg hover:bg-white/90"
          >
            Register Now
          </a>
          <p className="text-center text-[10px] text-white/70 font-mono">
            Sister Nivedita University • Oct 7–8, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
