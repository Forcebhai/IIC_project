import React from 'react';
import { scrollTo } from '../../lib/lenis';

export default function FooterSection() {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Start-ups', href: '#startups' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Venue', href: '#venue' },
  ];

  const handleNavigate = (href) => {
    if (href === '#hero') {
      scrollTo(0);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      scrollTo(target, { offset: -70 });
    }
  };

  return (
    <footer className="section-bg-footer relative py-16 sm:py-20 text-[#080808] border-t border-[#E8E6E0]">
      <div className="max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[#E8E6E0]">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD900]" />
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#182538] tracking-tight">
                  ELEVATE 360
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#626978] leading-relaxed max-w-sm mb-6">
                Bengal AI Start-up Summit 2026 — Scripting Next Unicorns.
              </p>
            </div>

            <div className="space-y-1 text-xs font-mono text-[#626978]">
              <div>
                Organised by: <strong className="text-[#182538]">Sister Nivedita University, Kolkata</strong>
              </div>
              <div>
                Coordinated by: <strong className="text-[#182538]">Institution&apos;s Innovation Council (SNU-IIC)</strong>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-7">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#182538] mb-6">
              Summit Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.href);
                  }}
                  className="font-sans text-sm text-[#626978] hover:text-[#182538] hover:translate-x-0.5 transition-all duration-200 cursor-pointer block"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#626978]">
          <div>
            © 2026 ELEVATE 360. All rights reserved.
          </div>
          <div>
            Sister Nivedita University · SNU-IIC
          </div>
        </div>
      </div>
    </footer>
  );
}

