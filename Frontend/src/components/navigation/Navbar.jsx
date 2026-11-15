import React, { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { navLinks } from '../../config/navigation';
import { siteConfig } from '../../config/siteConfig';
import { scrollTo } from '../../lib/lenis';
import { Menu } from 'lucide-react';

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
      {/* 
        Responsive Navigation Header:
        - Mobile (< lg): Normal edge-to-edge top bar with backdrop blur and border-b (not capsulated)
        - Desktop (lg+): Floating separate glassmorphic capsule design
      */}
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 lg:py-0 lg:pt-6 bg-[#050814]/90 backdrop-blur-xl border-b border-white/10 lg:bg-transparent lg:border-none lg:backdrop-blur-none pointer-events-auto lg:pointer-events-none transition-all duration-300">

        {/* Left: Brand Logo (Normal on mobile, glass capsule on desktop) */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('#hero', 'hero');
          }}
          className="pointer-events-auto flex items-center lg:px-4 lg:py-2 lg:rounded-full lg:bg-black/35 lg:backdrop-blur-2xl lg:border lg:border-white/20 lg:shadow-[0_4px_24px_rgba(0,0,0,0.3)] lg:hover:border-[#F4C430]/80 lg:hover:bg-black/50 transition-all duration-300 group cursor-pointer"
        >
          <img
            src="/assets/logos/Elevate360_logo.png"
            alt="Elevate 360 Official Logo"
            className="h-7 sm:h-8 lg:h-8.5 w-auto max-w-[135px] sm:max-w-[160px] lg:max-w-[195px] object-contain transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
        </a>

        {/* Center: Pure Glassmorphic Pill Capsule for Desktop */}
        <div className="pointer-events-auto hidden lg:block">
          <DesktopNav
            links={navLinks.filter(l => l.id !== 'hero')}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
        </div>

        {/* Right: Actions */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          {/* Register Button */}
          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#F4C430] hover:text-[#111111] text-[#0F172A] font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center uppercase tracking-wider"
          >
            Register Now
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl text-white hover:text-[#F4C430] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </header>

      {/* Mobile Drawer (Normal full-screen drawer on mobile) */}
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
