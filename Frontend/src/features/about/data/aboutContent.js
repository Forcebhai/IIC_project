/**
 * Centralized content for the 5-Chapter Cinematic About Section
 * ELEVATE 360 — Bengal AI Start-up Summit 2026
 */

export const aboutChapters = [
  {
    id: "chapter-1",
    chapterNumber: "01",
    label: "DISCOVER ELEVATE 360",
    headingLine1: "MORE THAN A SUMMIT.",
    headingLine2: "A MOVEMENT FOR INNOVATION.",
    supportingText:
      "A platform bringing Bengal's brightest minds together to explore possibilities, challenge boundaries and shape the future of technology.",
    align: "left",
    theme: "introduction",
  },
  {
    id: "chapter-2",
    chapterNumber: "02",
    label: "OUR VISION",
    headingLine1: "WHERE IDEAS MEET",
    headingLine2: "OPPORTUNITY.",
    supportingParagraphs: [
      "Elevate 360 — Bengal AI Start-up Summit 2026 is a flagship entrepreneurship and innovation summit hosted by Sister Nivedita University, Kolkata, and coordinated by the Institution's Innovation Council (SNU-IIC).",
      "Built around the theme \"Scripting Next Unicorns,\" it brings together students, founders, innovators, entrepreneurs and industry leaders to explore Artificial Intelligence, deep technology and entrepreneurship."
    ],
    align: "left",
    theme: "vision",
  },
  {
    id: "chapter-3",
    chapterNumber: "03",
    label: "THE POWER OF COLLECTIVE INNOVATION",
    headingLine1: "BUILT AROUND",
    headingLine2: "POSSIBILITIES.",
    supportingText:
      "Bringing together emerging talent, entrepreneurial minds and industry expertise to create meaningful opportunities.",
    stats: [
      { value: 2500, suffix: "+", label: "ATTENDEES" },
      { value: 100, suffix: "+", label: "CORPORATE & START-UP TEAMS" },
      { value: 25, suffix: "+", label: "INDUSTRY EXPERTS" },
      { value: 100, suffix: "+", label: "STUDENT START-UP PITCHING TEAMS" },
    ],
    align: "center",
    theme: "ecosystem",
  },
  {
    id: "chapter-4",
    chapterNumber: "04",
    label: "OUR PURPOSE",
    headingLine1: "INNOVATE. COLLABORATE.",
    headingLine2: "TRANSFORM.",
    supportingText: "Three core catalysts driving Bengal's entrepreneurial and artificial intelligence renaissance.",
    pillars: [
      {
        number: "01",
        keyword: "INNOVATE",
        description: "Explore emerging possibilities in Artificial Intelligence and deep technology.",
      },
      {
        number: "02",
        keyword: "COLLABORATE",
        description: "Connect students, entrepreneurs, founders and industry leaders.",
      },
      {
        number: "03",
        keyword: "TRANSFORM",
        description: "Turn ambitious ideas into meaningful innovations and future ventures.",
      },
    ],
    align: "center",
    theme: "purpose",
  },
  {
    id: "chapter-5",
    chapterNumber: "05",
    label: "THE FUTURE STARTS HERE",
    headingLine1: "THE FUTURE STARTS",
    headingLine2: "IN BENGAL.",
    supportingStatement:
      "Empowering the next generation of innovators and entrepreneurs to build the technologies, ventures and ideas that will shape tomorrow.",
    brand: {
      name: "ELEVATE 360",
      tagline: "BENGAL AI START-UP SUMMIT 2026",
      theme: "SCRIPTING NEXT UNICORNS.",
      host: "Sister Nivedita University, Kolkata",
    },
    primaryCta: {
      label: "Explore the Summit →",
      targetId: "experiences",
    },
    secondaryCta: {
      label: "View the Programme →",
      targetId: "agenda",
    },
    align: "center",
    theme: "closing",
  },
];
