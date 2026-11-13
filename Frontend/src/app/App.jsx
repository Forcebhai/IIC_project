import React, { useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import TrainHero from '../features/hero/components/TrainHero';
import ElevateMarquee from '../components/common/ElevateMarquee';
import AboutSection from '../features/about/AboutSection';
import ExperienceSection from '../features/experiences/ExperienceSection';
import AgendaSection from '../features/agenda/AgendaSection';
import SpeakersSection from '../features/speakers/SpeakersSection';
import StartupSection from '../features/startups/StartupSection';
import SponsorsSection from '../features/sponsors/SponsorsSection';
import VenueSection from '../features/venue/VenueSection';
import FinalCTASection from '../features/contact/FinalCTASection';
import FooterSection from '../components/navigation/FooterSection';
import RegistrationModal from '../features/registration/RegistrationModal';
import { siteConfig } from '../config/siteConfig';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('student');

  const handleOpenRegister = (tier = 'student') => {
    setSelectedTier(tier);
    // Open official registration link directly
    window.open(siteConfig.registrationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#F8F7F3] text-[#080808] overflow-x-hidden selection:bg-[#FFD900] selection:text-[#080808]">
      {/* Floating iPhone Glass Capsule Navigation */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* PHASE 1: Cinematic Scroll-Controlled Horizontal Train Journey */}
      <TrainHero onOpenRegister={handleOpenRegister} />

      {/* PHASE 2: Conventional Smooth Vertical Website */}
      <main className="relative z-10 w-full">
        {/* Infinite Scroll Marquee Ribbon: Yellow & Black Elevate 360 */}
        <ElevateMarquee />

        {/* Section 01: About Elevate 360 (Victoria Memorial 6-Chapter Storytelling) */}
        <AboutSection />

        {/* Section 02: Summit Experiences (5 Large Editorial Rows) */}
        <ExperienceSection />

        {/* Section 03: Summit Agenda (2 Days Interactive Tabs & Timeline) */}
        <AgendaSection />

        {/* Section 04: Speakers & Keynote Leaders (Monochrome Showcase) */}
        <SpeakersSection />

        {/* Section 05: Start-up Pitching Competition (100+ Teams Deep Navy & Yellow) */}
        <StartupSection onOpenPitchModal={handleOpenRegister} />

        {/* Section 06: Sponsors & Innovation Partners (Architectural Crosshair Grid) */}
        <SponsorsSection />

        {/* Section 07: Venue & Campus Location (Sister Nivedita University) */}
        <VenueSection />

        {/* Section 08: Final Closing CTA (The Future Doesn't Wait) */}
        <FinalCTASection />
      </main>

      {/* Global Editorial Footer */}
      <FooterSection />

      {/* Global Interactive Registration & Pitch Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        defaultTier={selectedTier}
      />
    </div>
  );
}
