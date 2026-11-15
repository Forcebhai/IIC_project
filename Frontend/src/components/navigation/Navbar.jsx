import React, { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { navLinks } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import { scrollTo } from '../../lib/lenis';
import { Menu, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['venue', 'sponsors', 'startups', 'speakers', 'agenda', 'experiences', 'about', 'hero'];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href, id) => {
    setActiveSection(id);
    if (href === '#hero') {
      scrollTo(0);
      return;
    }
    const targetEl = document.querySelector(href);
    if (targetEl) {
      scrollTo(targetEl, { offset: -70 });
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 sm:px-8 lg:px-12 pt-3.5 sm:pt-6 pointer-events-none">

        {/* Left: Minimal Clean Brand Logo & Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('#hero', 'hero');
          }}
          className="pointer-events-auto flex items-center gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-2xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-[#F4C430]/70 hover:bg-black/45 transition-all duration-300 group cursor-pointer"
        >
          <img
            src="/assets/logos/Elevate360_logo.png"
            alt="Elevate 360 Official Logo"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
          <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:text-[#F4C430] transition-colors pr-1">
            Elevate 360
          </span>
        </a>

        {/* Center: Pure Glassmorphic Pill Capsule (Slightly larger, rich contrast) */}
        <div className="pointer-events-auto">
          <DesktopNav
            links={navLinks.filter(l => l.id !== 'hero')}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        </div>

        {/* Right: Clean White Pill Button linking to Vybe Cerkle */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white hover:bg-white/95 text-[#0F172A] font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center"
          >
            Register Now
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/25 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks.filter(l => l.id !== 'hero')}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
}
