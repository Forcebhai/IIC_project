import React from 'react';
import CtaCard from './components/CtaCard';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import { faqData } from './data/faqData';
import { scrollTo } from '../../lib/lenis';

export default function CtaFaqFooterSection() {
  const handleNavigate = (targetId) => {
    if (!targetId) return;

    if (targetId.startsWith('#')) {
      const el = document.querySelector(targetId);
      if (el) {
        scrollTo(el, { offset: -70 });
        return;
      }
    }

    const fallbackEl = document.getElementById(targetId.replace('#', ''));
    if (fallbackEl) {
      scrollTo(fallbackEl, { offset: -70 });
    }
  };

  return (
    <div
      className="bg-white text-neutral-900 w-full"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main CTA + FAQ Section */}
      <main className="py-20 max-[900px]:py-[60px]">
        <div className="max-w-[1100px] w-full mx-auto px-5">
          <div className="grid grid-cols-[1.6fr_1fr] gap-[30px] items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
            {/* Left Column: Animated Gradient CTA Card */}
            <CtaCard onExplore={() => handleNavigate('#about')} />

            {/* Right Column: FAQ Accordion */}
            <FaqAccordion items={faqData} />
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

