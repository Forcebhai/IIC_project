import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  HelpCircle,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { scrollTo } from '../../lib/lenis';
import { siteConfig } from '../../config/siteConfig';

/**
 * FinalCTASection Component — Elevate 360: Bengal AI Start-up Summit 2026
 *
 * Implements the website's signature architectural editorial design language:
 * 1. Warm-white editorial background with technical drafting grid (#DADADA 48px)
 * 2. Technical crosshairs (+), guide circles, and Summit Yellow architectural anchor
 * 3. Centered high-impact editorial heading with Summit Yellow accent underline
 * 4. Handwritten editorial annotations in Caveat font with curved SVG arrows
 * 5. 2-Column Split Composition:
 *    - Left: Luxury Charcoal Action Card with Summit metrics, beacon, and signature dashed yellow CTA
 *    - Right: Interactive 5-Item Editorial FAQ Accordion answering primary attendee questions
 * 6. Bottom Direct Helpdesk & Inquiries strip (Email, Phone, Campus Map)
 */
export default function FinalCTASection() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const handleToggleFaq = (idx) => {
    setActiveFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const handleScrollToSection = (targetId) => {
    const el = document.querySelector(targetId);
    if (el) {
      scrollTo(el, { offset: -70 });
    }
  };

  const faqItems = [
    {
      id: 'faq-01',
      question: 'What is Elevate 360: Bengal AI Start-up Summit?',
      answer:
        'Elevate 360 is eastern India’s flagship three-day summit focused on artificial intelligence, sovereign innovation, and startup venture creation. The summit brings together expert keynotes, technical masterclasses, live pitch rounds, and multi-track discussions across technology, healthcare, agritech, fintech, and humanities.',
    },
    {
      id: 'faq-02',
      question: 'When and where will the summit take place?',
      answer:
        'The summit runs from 17 to 19 November 2026 across Sister Nivedita University’s modern academic complex in New Town, Kolkata. Sessions are held simultaneously across the B Block Auditorium, Boardroom, Classroom, and Seminar Hall.',
    },
    {
      id: 'faq-03',
      question: 'Who is hosting and organising the event?',
      answer:
        'The summit is hosted by Sister Nivedita University under the visionary leadership of Chancellor Shri Satyam Roychowdhury, Pro Chancellor Prof. Dhrubojyoti Chattopadhyay, and Vice Chancellor Dr. Anupam Basu, coordinated by the SNU Institution’s Innovation Council (SNU-IIC).',
    },
    {
      id: 'faq-04',
      question: 'How does the Start-up Pitch Competition work?',
      answer:
        'The flagship Bengal AI Start-up Pitch Deck features a Semi-Final round for the Top 15 shortlisted teams on 18 November, culminating in the Grand Finale for the Top 5 finalists on 19 November in the B Block Auditorium before leading venture capitalists, angel syndicates, and NITI Aayog leadership.',
    },
    {
      id: 'faq-05',
      question: 'Which developer and student communities are participating?',
      answer:
        'Official participating communities include Google Developers Group (Skepsis), Geeks for Geeks (Skepsis), Coding Ninjas (Skepsis), Zero Day Alliance, and Apple Labs.',
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FFFFFF] text-[#111111] overflow-hidden py-24 sm:py-32 md:py-40 border-t border-[#DADADA]"
    >
      {/* ================= 1. ARCHITECTURAL DRAFTING GRID OVERLAY ================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.38] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #DADADA 1px, transparent 1px),
            linear-gradient(to bottom, #DADADA 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative Technical Crosshairs (+) */}
      <span className="absolute top-12 left-12 font-mono text-sm text-[#DADADA] font-bold select-none pointer-events-none hidden md:block">
        +
      </span>
      <span className="absolute top-12 right-12 font-mono text-sm text-[#DADADA] font-bold select-none pointer-events-none hidden md:block">
        +
      </span>
      <span className="absolute bottom-16 right-16 font-mono text-sm text-[#DADADA] font-bold select-none pointer-events-none hidden md:block">
        +
      </span>

      {/* Subtle Technical Circular Guide near upper-left */}
      <div className="absolute top-24 left-8 w-28 h-28 border border-[#DADADA] rounded-full pointer-events-none opacity-40 hidden xl:block">
        <div className="w-full h-full relative flex items-center justify-center">
          <div className="w-14 h-14 border border-dashed border-[#DADADA] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#F4C430] rounded-full" />
        </div>
      </div>

      {/* Summit Yellow Circular Architectural Anchor in bottom-left */}
      <div className="absolute -bottom-28 sm:-bottom-36 md:-bottom-44 -left-28 sm:-left-36 md:-left-44 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 rounded-full border-4 sm:border-[6px] border-[#F4C430] pointer-events-none opacity-85 z-0" />

      {/* Subtle Victoria Memorial Pencil Sketch Watermark in background */}
      <div className="absolute right-0 bottom-12 w-[340px] sm:w-[480px] lg:w-[620px] pointer-events-none opacity-[0.07] mix-blend-multiply z-0 hidden md:block">
        <img
          src="/assets/speakers/Victoria_memorial_Speaker.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain object-right-bottom"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center">
        {/* ================= SECTION EYEBROW ================= */}
        <div className="mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#F4C430] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#111111]">
              ELEVATE 360 · FINALE & INQUIRIES
            </span>
          </div>
        </div>

        {/* ================= MAIN EDITORIAL HEADING ================= */}
        <div className="max-w-4xl mx-auto mb-4 sm:mb-5 text-center">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111111] leading-[1.06] tracking-tight">
            <span>The Future Doesn&apos;t Wait.</span> <br />
            <span className="text-[#F4C430] relative inline-block">
              Build What Comes Next.
              {/* Subtle curved underline accent */}
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 text-[#F4C430]"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q 50 1, 100 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ================= SUPPORTING DESCRIPTION ================= */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#62666B] leading-relaxed">
            Where Bengal&apos;s deep-tech founders, academic researchers, and enterprise leaders connect
            to transform bold ideas into global ventures.
          </p>
          <div className="w-16 h-1 bg-[#F4C430] rounded-full mx-auto mt-4" />
        </div>

        {/* ================= 2-COLUMN SPLIT COMPOSITION WITH ANNOTATIONS ================= */}
        <div className="relative w-full max-w-[1360px] mx-auto mb-14 sm:mb-16">
          {/* Handwritten Annotation 1 (Left): "Your seat is waiting" */}
          <div className="absolute -top-12 left-4 xl:left-8 z-20 pointer-events-none hidden lg:block text-left">
            <div className="flex items-start gap-2">
              <div>
                <span
                  className="font-caveat text-2xl xl:text-3xl font-bold text-[#153C30] leading-none block -rotate-6 select-none"
                  style={{ fontFamily: "'Caveat', cursive, serif" }}
                >
                  Your seat is waiting
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4C430] ml-1" />
              </div>
              <svg
                width="65"
                height="50"
                viewBox="0 0 65 50"
                fill="none"
                className="mt-2 text-[#153C30]"
              >
                <path
                  d="M10 5 C 28 5, 45 15, 52 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M44 34 L 52 38 L 56 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Handwritten Annotation 2 (Right): "Everything you need to know" */}
          <div className="absolute -top-12 right-4 xl:right-8 z-20 pointer-events-none hidden lg:block text-right">
            <div className="flex items-start justify-end gap-2">
              <svg
                width="65"
                height="50"
                viewBox="0 0 65 50"
                fill="none"
                className="mt-2 text-[#153C30]"
              >
                <path
                  d="M55 5 C 37 5, 20 15, 13 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M21 34 L 13 38 L 9 28"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <span
                  className="font-caveat text-2xl xl:text-3xl font-bold text-[#153C30] leading-none block rotate-6 select-none"
                  style={{ fontFamily: "'Caveat', cursive, serif" }}
                >
                  Everything you need to know
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#F4C430] mr-1" />
              </div>
            </div>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* ================= LEFT COLUMN: ARCHITECTURAL GRAND CTA CARD (7 COLS) ================= */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col">
              <div className="relative flex-1 rounded-[26px] sm:rounded-[30px] bg-[#111111] text-white p-7 sm:p-10 md:p-12 border border-[#DADADA]/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden">
                {/* Ambient Yellow Glow */}
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F4C430]/15 rounded-full blur-[90px] pointer-events-none" />
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#F4C430]/10 rounded-full blur-[100px] pointer-events-none" />

                {/* Top Header Row with Date Badge */}
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-[#F4C430] uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#F4C430] animate-pulse" />
                      17–19 NOVEMBER 2026 · KOLKATA
                    </span>

                    <span className="text-xs font-mono text-neutral-400">
                      HOSTED BY SISTER NIVEDITA UNIVERSITY
                    </span>
                  </div>

                  {/* Main Callout Title */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight uppercase tracking-tight mb-4">
                    Step Into Bengal&apos;s <br className="hidden sm:block" />
                    <span className="text-[#F4C430]">Deep-Tech Renaissance.</span>
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mb-8">
                    Be part of 3 immersive days of breakthrough keynotes, cross-vertical masterclasses,
                    and live start-up pitch rounds scripting India&apos;s next global unicorns.
                  </p>

                  {/* 4 Summit Statistics Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-y border-white/10 mb-8">
                    <div>
                      <div className="font-display font-black text-2xl sm:text-3xl text-[#F4C430]">
                        03
                      </div>
                      <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider mt-0.5">
                        Full Days
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-black text-2xl sm:text-3xl text-white">
                        48+
                      </div>
                      <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider mt-0.5">
                        Keynote Leaders
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-black text-2xl sm:text-3xl text-white">
                        100+
                      </div>
                      <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider mt-0.5">
                        Pitching Teams
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-black text-2xl sm:text-3xl text-[#F4C430]">
                        06
                      </div>
                      <div className="font-mono text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider mt-0.5">
                        Deep Verticals
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  {/* Signature Outer Dashed Yellow Outline Button */}
                  <div className="inline-block p-1.5 rounded-full border border-dashed border-[#F4C430] shadow-sm bg-white/5 backdrop-blur-sm">
                    <a
                      href={siteConfig.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#F4C430] hover:bg-[#E6B91F] text-[#111111] font-display font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(244,196,48,0.45)] cursor-pointer group w-full sm:w-auto"
                    >
                      <span>REGISTER NOW</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </a>
                  </div>

                  {/* Secondary Link to Explore Tracks */}
                  <button
                    type="button"
                    onClick={() => handleScrollToSection('#experiences')}
                    className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 hover:text-[#F4C430] transition-colors py-2 cursor-pointer group"
                  >
                    <span>EXPLORE SUMMIT TRACKS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE EDITORIAL FAQ ACCORDION (5 COLS) ================= */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between">
              <div className="space-y-3.5">
                {/* Mini Header */}
                <div className="flex items-center justify-between pb-2 mb-1 border-b border-[#DADADA]">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#F4C430]" />
                    <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#111111]">
                      FREQUENTLY ASKED QUESTIONS
                    </h4>
                  </div>
                  <span className="font-mono text-[11px] text-[#62666B]">
                    05 INQUIRIES
                  </span>
                </div>

                {/* Accordion Items */}
                {faqItems.map((item, idx) => {
                  const isOpen = activeFaqIndex === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleToggleFaq(idx)}
                      className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        isOpen
                          ? 'bg-[#F7F7F4] border-[#F4C430] shadow-[0_8px_24px_rgba(0,0,0,0.06)]'
                          : 'bg-white border-[#DADADA] hover:border-[#F4C430]/70 shadow-sm'
                      }`}
                    >
                      {/* Question Header */}
                      <div className="flex items-center justify-between p-4 sm:p-5 gap-3">
                        <div className="flex items-center gap-3 text-left">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] font-bold shrink-0 transition-colors ${
                              isOpen
                                ? 'bg-[#F4C430] text-[#111111]'
                                : 'bg-[#F7F7F4] text-[#62666B] group-hover:bg-[#F4C430]/20'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-display font-bold text-sm sm:text-[15px] leading-snug transition-colors ${
                              isOpen
                                ? 'text-[#111111]'
                                : 'text-[#222222] group-hover:text-[#111111]'
                            }`}
                          >
                            {item.question}
                          </span>
                        </div>

                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                            isOpen
                              ? 'bg-[#F4C430] text-[#111111] rotate-180'
                              : 'bg-neutral-100 text-[#62666B] group-hover:bg-neutral-200'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                        </div>
                      </div>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-left">
                          <div className="pt-3 border-t border-[#DADADA]/60 font-sans text-xs sm:text-sm text-[#62666B] leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* View Full Schedule / More FAQs Prompt */}
              <div className="mt-4 pt-4 border-t border-[#DADADA] flex items-center justify-between text-xs font-mono text-[#62666B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38A169]" />
                  <span>Official SNU-IIC Secretariat</span>
                </span>
                <button
                  type="button"
                  onClick={() => handleScrollToSection('#agenda')}
                  className="text-[#111111] hover:text-[#F4C430] font-bold underline cursor-pointer"
                >
                  View Full 3-Day Schedule →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. BOTTOM HELPDESK & CAMPUS INQUIRIES STRIP ================= */}
        <div className="w-full max-w-[1360px] mx-auto p-6 sm:p-8 rounded-3xl bg-[#F7F7F4] border border-[#DADADA] shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#DADADA] flex items-center justify-center text-[#111111] shrink-0 shadow-sm">
              <Phone className="w-5 h-5 text-[#F4C430]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#38A169]" />
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#62666B] font-bold">
                  OFFICIAL SUMMIT HELPDESK & STUDENT COORDINATORS
                </span>
              </div>
              <h4 className="font-display font-black text-lg sm:text-xl text-[#111111] tracking-tight">
                Need Help with Passes, Pitch Decks, or Event Logistics?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#62666B] mt-0.5">
                Reach out directly to our student coordinators or write to Secretariat:{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#111111] font-bold underline hover:text-[#F4C430] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Coordinators Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full xl:w-auto shrink-0">
            {/* Coordinator 1: Aparajita Gorai */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#DADADA] shadow-sm flex flex-col justify-between hover:border-[#F4C430] hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-display font-bold text-sm sm:text-base text-[#111111] tracking-tight">
                  Aparajita Gorai
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#F7F7F4] text-[9px] font-mono font-bold text-[#62666B] border border-[#DADADA]">
                  HELPDESK
                </span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <a
                  href="tel:+919933305603"
                  className="flex items-center gap-2 text-[#444444] hover:text-[#111111] hover:font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                  <span>+91 99333 05603</span>
                </a>
                <a
                  href="mailto:aparajita.4343@gmail.com"
                  className="flex items-center gap-2 text-[#444444] hover:text-[#111111] transition-colors truncate max-w-[210px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                  <span className="truncate">aparajita.4343@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Coordinator 2: Soumi Jash */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#DADADA] shadow-sm flex flex-col justify-between hover:border-[#F4C430] hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-display font-bold text-sm sm:text-base text-[#111111] tracking-tight">
                  Soumi Jash
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#F7F7F4] text-[9px] font-mono font-bold text-[#62666B] border border-[#DADADA]">
                  HELPDESK
                </span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <a
                  href="tel:+917001834488"
                  className="flex items-center gap-2 text-[#444444] hover:text-[#111111] hover:font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                  <span>+91 70018 34488</span>
                </a>
                <a
                  href="mailto:soumi06jash@gmail.com"
                  className="flex items-center gap-2 text-[#444444] hover:text-[#111111] transition-colors truncate max-w-[210px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                  <span className="truncate">soumi06jash@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
