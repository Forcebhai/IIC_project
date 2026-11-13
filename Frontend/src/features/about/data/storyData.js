/**
 * Storytelling Data for the 6-Stage Scroll-Driven About Panel
 * ELEVATE 360 — Bengal AI Start-up Summit 2026
 */

export const storyStages = [
  {
    id: 'stage-1',
    stepNumber: '01',
    badgeNumber: '1',
    label: 'THE SUMMIT',
    title: 'ELEVATE 360',
    subtitle: "A New Chapter for Bengal's Innovation Story.",
    description:
      'Elevate 360 — Bengal AI Start-up Summit 2026 brings together students, founders, innovators and industry leaders to explore the future of AI, deep technology and entrepreneurship.',
    type: 'description',
  },
  {
    id: 'stage-2',
    stepNumber: '02',
    badgeNumber: '2',
    label: 'THE VISION',
    title: 'SCRIPTING NEXT UNICORNS.',
    subtitle: 'Big Ideas Deserve Bigger Opportunities.',
    description:
      'We believe the next generation of groundbreaking ventures can emerge from Bengal. Our mission is to connect ambitious minds with the knowledge, mentorship and opportunities to turn ideas into reality.',
    type: 'description',
  },
  {
    id: 'stage-3',
    stepNumber: '03',
    badgeNumber: '3',
    label: 'THE ECOSYSTEM',
    title: 'BUILT BY MANY. POWERED BY INNOVATION.',
    subtitle: 'Where Brilliant Minds Come Together.',
    statistics: [
      { value: 2500, suffix: '+', label: 'Attendees' },
      { value: 100, suffix: '+', label: 'Corporate & Start-up Teams' },
      { value: 25, suffix: '+', label: 'Industry Experts' },
      { value: 100, suffix: '+', label: 'Student Pitching Teams' },
    ],
    type: 'statistics',
  },
  {
    id: 'stage-4',
    stepNumber: '04',
    badgeNumber: '4',
    label: 'THE EXPERIENCE',
    title: 'MORE THAN JUST CONVERSATIONS.',
    subtitle: 'Discover. Learn. Build. Pitch.',
    experiences: [
      { number: '01', title: 'Keynote Addresses', desc: 'Frontier AI visionaries & global leaders' },
      { number: '02', title: 'Expert Panel Discussions', desc: 'Debating AI policy, scale & architecture' },
      { number: '03', title: 'Hands-on AI Workshops', desc: 'Applied LLMs, agents & edge silicon' },
      { number: '04', title: 'Student Start-up Pitch Competition', desc: '₹25 Lakhs+ in grants & seed capital' },
      { number: '05', title: 'AI & Technology Expo', desc: '100+ interactive demos and booths' },
    ],
    type: 'experiences',
  },
  {
    id: 'stage-5',
    stepNumber: '05',
    badgeNumber: '5',
    label: 'OUR PURPOSE',
    title: 'INNOVATE. COLLABORATE. TRANSFORM.',
    subtitle: "Bengal's Three Pillars of Transformation",
    pillars: [
      {
        keyword: 'Innovate',
        tagline: 'Explore emerging technologies.',
        desc: 'Discover breakthroughs in foundation models, autonomous agents and high-performance computing.',
      },
      {
        keyword: 'Collaborate',
        tagline: 'Connect talent with opportunity.',
        desc: 'Bridge ambitious researchers, founders, enterprise leaders and venture partners in intimate rooms.',
      },
      {
        keyword: 'Transform',
        tagline: 'Turn bold ideas into meaningful impact.',
        desc: 'Equip visionary teams with compute credits, regulatory pathways and venture-scale execution.',
      },
    ],
    type: 'purpose',
  },
  {
    id: 'stage-6',
    stepNumber: '06',
    badgeNumber: '6',
    label: 'THE FUTURE',
    title: 'THE FUTURE STARTS IN BENGAL.',
    subtitle: "Let's Build What Comes Next.",
    description:
      "Together, let's strengthen Bengal's position in AI, deep technology and entrepreneurship — empowering the next generation to build tomorrow's innovations.",
    closing: 'ELEVATE 360 — SCRIPTING NEXT UNICORNS.',
    buttons: [
      {
        label: 'Explore the Summit',
        targetId: 'experiences',
        primary: true,
      },
      {
        label: 'View Programme',
        targetId: 'agenda',
        primary: false,
      },
    ],
    type: 'closing',
  },
];

