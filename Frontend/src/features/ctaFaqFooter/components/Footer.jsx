import React from 'react';
import FooterLinkColumn from './FooterLinkColumn';
import NewsletterForm from './NewsletterForm';
import { exploreLinks, discoverLinks } from '../data/footerNavData';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#fafafa] pt-20 pb-5 max-[900px]:pt-[60px]">
      <div className="max-w-[1100px] w-full mx-auto px-5">
        <div className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-[50px] max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {/* 1. Logo Column */}
          <div>
            <img
              src="https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/Tests/logoipsum-415.svg"
              className="h-6 mb-[15px]"
              style={{ filter: 'brightness(0)' }}
              alt="ELEVATE 360 Logo"
            />
            <p className="text-[0.85rem] text-[#888] leading-[1.6] max-w-[220px]">
              Connecting Bengal&apos;s brightest minds to shape the future of AI, innovation and entrepreneurship.
            </p>
          </div>

          {/* 2. Navigation Column (Explore) */}
          <FooterLinkColumn
            title="Explore"
            links={exploreLinks}
            onNavigate={onNavigate}
          />

          {/* 3. Pages Column (Discover) */}
          <FooterLinkColumn
            title="Discover"
            links={discoverLinks}
            onNavigate={onNavigate}
          />

          {/* 4. Newsletter Column */}
          <NewsletterForm />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f0f0f0] pt-[25px] pb-[10px] flex justify-between text-[0.85rem] text-[#888] max-[480px]:flex-col max-[480px]:gap-[15px] max-[480px]:items-center">
          <span>All rights reserved. © 2026 ELEVATE 360</span>
          <span>Hosted by Sister Nivedita University · Coordinated by SNU-IIC</span>
        </div>
      </div>
    </footer>
  );
}

