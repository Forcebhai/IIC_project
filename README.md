# ELEVATE 360 — Bengal AI Start-up Summit 2026
> **Theme:** *"Scripting Next Unicorns."*  
> **Host:** Sister Nivedita University (SNU) & SNU-IIC  
> **Dates:** October 7 – 8, 2026 • Kolkata, West Bengal  

---

## 🌟 Overview & Architecture

ELEVATE 360 is built as a two-phase immersive web application:

1. **Phase 1: Cinematic, Scroll-Controlled Horizontal Train Journey**
   - High-performance canvas-based image sequence renderer using all 241 sequential train frames (`frame_001.jpg` to `frame_241.jpg`).
   - Preloads and decodes frames efficiently using `HTMLImageElement.decode()` with nearest-neighbor fallback to prevent blank/flickering frames.
   - Synchronized with a GSAP ScrollTrigger horizontal translation timeline traversing 7 storytelling stages.
   - Concludes at Howrah Bridge with the train halting completely and releasing the pin naturally into the page flow.

2. **Phase 2: Conventional Smooth Vertical Website**
   - Seamlessly takes over the scroll flow with **Lenis** smooth scrolling.
   - Features 9 full-depth sections:
     - **Section 01 — About Elevate 360:** "MORE THAN A SUMMIT. A MOVEMENT." (Sister Nivedita University & SNU-IIC)
     - **Section 02 — Why Elevate 360?:** "SCRIPTING THE NEXT UNICORNS." (Innovate, Collaborate, Transform)
     - **Section 03 — Summit Experiences:** Keynotes, Panels, Workshops, Pitch Competition, Tech Expo
     - **Section 04 — Summit Agenda:** Accurate 2-Day Programme Timeline (Day 1: Oct 7 & Day 2: Oct 8)
     - **Section 05 — Speakers & Experts:** Reusable speaker cards with bios, tracks, and social links
     - **Section 06 — Start-up Pitching Competition:** "YOUR IDEA COULD BE THE NEXT UNICORN." (₹25L+ prize pool)
     - **Section 07 — Sponsors & Partners:** Professional tier showcase (Host, Title, Cloud, Gold, Silver)
     - **Section 08 — Venue & Location:** Sister Nivedita University, Kolkata, maps, amenities & transit guides
     - **Section 09 — Final CTA, Passes & Footer:** Ticket tiers, interactive registration modal with confetti, and summit contact info.

3. **iPhone-Inspired Floating Glass Navigation**
   - Translucent capsule navbar floating at the top with backdrop blur (`blur(20px)`), silver-grey tones, and summit-yellow accents.
   - Seamlessly navigates between both horizontal hero panels and vertical sections.
   - Automatic active section tracking during scroll.
   - iPhone-inspired expanding mobile drawer navigation.

---

## 📁 Directory Structure

```text
Frontend/
├── public/
│   ├── assets/
│   │   ├── images/          # Venue, campus & auditorium photographs
│   │   ├── speakers/        # Speaker headshots
│   │   ├── sponsors/        # Partner logos & badges
│   │   └── logos/
│   ├── frame-sequence/
│   │   └── train/           # 241 Sequential high-res journey frames (frame_001.jpg - frame_241.jpg)
│   └── favicon.svg
│
├── src/
│   ├── app/
│   │   ├── App.jsx          # Main application orchestrating Phase 1 and Phase 2
│   │   └── AppProviders.jsx # Lenis smooth scroll and context providers
│   │
│   ├── components/
│   │   ├── common/          # Reusable Button, Container, SectionHeading, Loader
│   │   ├── navigation/      # Floating iPhone capsule Navbar, DesktopNav, MobileNav, NavLink
│   │   └── animations/      # Reveal, TextReveal, AnimatedCounter
│   │
│   ├── features/
│   │   ├── hero/            # Phase 1: TrainCanvas, HorizontalStory, StoryPanel, HeroProgress, hooks
│   │   ├── about/           # Section 01 (About) & Section 02 (Why Elevate 360)
│   │   ├── experiences/     # Section 03 (Summit Tracks)
│   │   ├── agenda/          # Section 04 (Two-day schedule & timeline)
│   │   ├── speakers/        # Section 05 (Speakers grid & cards)
│   │   ├── startups/        # Section 06 (Pitch competition & prize pool)
│   │   ├── sponsors/        # Section 07 (Sponsor tier showcase)
│   │   ├── venue/           # Section 08 (SNU Kolkata campus, map, transport)
│   │   └── registration/    # Section 09 (Ticket passes, modal & global footer)
│   │
│   ├── hooks/               # useLenis, useMediaQuery, useReducedMotion
│   ├── config/              # navigation, siteConfig, animationConfig
│   ├── data/                # Centralized summitData
│   ├── lib/                 # Centralized gsap and lenis singleton managers
│   ├── styles/              # globals.css, variables.css, index.css
│   ├── utils/               # cn, helpers (lerp, clamp, padZero)
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd Frontend
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` with hot module reloading.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, minified production bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```
Previews the built production site at `http://localhost:4173`.


# IIC_project
