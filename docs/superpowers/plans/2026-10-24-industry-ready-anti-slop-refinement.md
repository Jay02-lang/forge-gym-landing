# Industry-Ready Anti-Slop Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the entire Ironforge Gym landing site into an industry-ready, world-class athletic sanctuary web platform, completely eliminating AI slop, cheap template artifacts (diagonal candy stripes, ghost cutout PNGs, fake monospace fonts), deadweight dependencies, and clunky UX hops.

**Architecture:** 
- Clean 60-30-10 design system with high-contrast slate surfaces (`#F8FAFC` background, `#0F172A` deep slate text/accents, `#E2E8F0` hairline borders).
- Two-font typographic system: Plus Jakarta Sans for refined display/body copy and JetBrains Mono for authentic tabular telemetry, specs, timestamps, and coordinates.
- Architectural, art-directed editorial heroes on all 3 pages (Home, Programs, Trainers) featuring high-resolution photography of calibrated Eleiko platforms and authentic athletic focus rather than cheesy floating cutouts.
- Universal, frictionless `BookingModal` dialog for instant tour scheduling and membership applications across all pages, complementing the dedicated inline admissions intake on the home page.
- Purged dead code, orphaned legacy components, and unused heavy libraries (`three.js`).

**Tech Stack:** React 19, Vite 8, Tailwind CSS v4, Framer Motion 12, Lucide React, JetBrains Mono, Plus Jakarta Sans.

## Global Constraints
- Maximum 2 font families: Plus Jakarta Sans (display/body) + JetBrains Mono (telemetry/monospace).
- 60-30-10 Color Rule: 60% neutral background (`#F8FAFC`), 30% structural text/borders, 10% focal accent (`#0F172A`).
- Single Focal CTA per viewport with immediate, frictionless response.
- 8pt Baseline Grid: All spacing, padding, and layout gaps mathematically aligned.
- ZERO green blip dots, status lights, radar pulses, `animate-ping`, or `animate-pulse`.
- ZERO developer demo widgets or theme pickers.
- ZERO unsolicited audio or synthesizer code.
- ZERO urgency or FOMO clutter (no fake countdowns, no sales toasts).
- ZERO gimmicky custom cursors or 3D viewports.
- ZERO "24/7" claims (operational hours strictly 5:00 AM – 11:00 PM).
- ZERO "guest pass", "free entry", or "free trial" phrasing (strictly "Schedule a Facility Tour", "Apply for Membership").
- Strict agent safety: Never use destructive git commands (`git reset --hard`, `git checkout -- .`).

## Review Focus
1. Mobile layout integrity: No horizontal overflow or cut-off cards on 360px–420px viewports.
2. Typography alignment: All telemetry numbers and specifications use genuine JetBrains Mono with tabular figures.
3. Modal usability: ESC key dismisses the dialog, outside click dismisses, focus is trapped, form validation works seamlessly.
4. Navigation continuity: Navigating between Home, Programs, and Trainers maintains scroll position at top without jumpy anchor bugs.
5. Contrast & Accessibility: All text meets WCAG AA standards (minimum 4.5:1 contrast against light slate backgrounds).

---

### Task 1: Typography System, Palette Calibration & Clean Stylesheet

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: Google Fonts (`Plus Jakarta Sans`, `JetBrains Mono`)
- Produces: CSS custom properties `--font-display`, `--font-sans`, `--font-mono`, clean frost card utilities, and button states.

- [ ] **Step 1: Update `index.html` font links**
Load `Plus Jakarta Sans` (400, 500, 600, 700, 800) and `JetBrains Mono` (400, 500, 600, 700).

- [ ] **Step 2: Update `src/index.css`**
Set `--font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;`.
Remove legacy unused classes (`diagonal-stripe-frost`, `diagonal-stripe-frost-flipped`, `.hl-*`, `.hero-blur-panel`).
Clean up and enforce the 60-30-10 color tokens and button hover/active states.

- [ ] **Step 3: Verify build**
Run: `npm run build`
Expected: PASS with no CSS syntax errors.

---

### Task 2: Purge Dead Dependencies and Legacy Orphaned Files

**Files:**
- Modify: `package.json`
- Remove: Unused legacy components (`CustomCursor.jsx`, `Hero3D.jsx`, `audio.js`, `TacticalHud.jsx`, `BeginnerGuide.jsx`, `Coaches.jsx`, `EquipmentKnowledge.jsx`, `Facilities.jsx`, `Faq.jsx`, `Hero.jsx`, `Manifesto.jsx`, `Marquee.jsx`, `Pricing.jsx`, `Programs.jsx`, `Testimonials.jsx`, `WeightLab.jsx`)
- Verify/Update: `src/components/BookingModal.jsx`

**Interfaces:**
- Produces: Lean `package.json` without `three`, minimal bundle size, and modernized `BookingModal`.

- [ ] **Step 1: Remove `three` from `package.json`**
Remove `"three": "^0.186.0"` from dependencies.

- [ ] **Step 2: Clean up unused legacy files from `src/components` and `src/utils`**
Remove files that are not referenced in the application.

- [ ] **Step 3: Modernize `BookingModal.jsx`**
Ensure it accepts `isOpen`, `onClose`, `initialContext` ({ faculty, program, plan }), handles keyboard ESC, backdrop click, form input, validation, and realistic reservation code output.

- [ ] **Step 4: Verify build**
Run: `npm run build`
Expected: PASS with significant drop in JS bundle size (down from ~492 kB).

---

### Task 3: Universal Booking Dialog & State Management in `App.jsx`

**Files:**
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `BookingModal` component
- Produces: Global booking modal trigger `handleOpenBooking(context)` passed to `Navbar`, `HomePage`, `ProgramsPage`, `TrainersPage`, and `Footer`.

- [ ] **Step 1: Add modal state to `App.jsx`**
Add `isBookingOpen`, `bookingContext` state.
Create `handleOpenBooking(context)` which opens the modal on any page with the requested coach/program/plan.

- [ ] **Step 2: Render `BookingModal` at root level in `App.jsx`**
Mount `BookingModal` with `isOpen={isBookingOpen}`, `onClose={() => setIsBookingOpen(false)}`, and `initialContext={bookingContext}`.

- [ ] **Step 3: Verify build and modal behavior**
Run: `npm run build`
Expected: PASS.

---

### Task 4: High-End Architectural Hero & HomePage Refinement

**Files:**
- Modify: `src/components/HomePage.jsx`

**Interfaces:**
- Consumes: `ScrollAnimations`, `lucide-react`, `onNavigate`, `onOpenBooking`
- Produces: Refined HomePage with architectural hero, purposeful training cards, authentic protocol previews, clean equipment guide, and admissions intake.

- [ ] **Step 1: Eliminate dead state in `HomePage.jsx`**
Remove unused `sliderPos`, `containerRef`, `handleSliderChange`.

- [ ] **Step 2: Replace cheesy diagonal stripe and cutout image with an architectural editorial hero**
Build an editorial split hero:
- Left: "Stronger. Healthier. You.", concise sports science value proposition, focal primary CTA, and 3 baseline monospace telemetry badges (`01 STRENGTH PERIODIZATION`, `02 IPF/IWF PLATFORMS`, `03 SPORTS SCIENCE RECOVERY`).
- Right: Architectural photo frame of authentic Eleiko barbell training in sharp focus, subtle frosted telemetry badge (`ELEIKO CALIBRATED STEEL // COMPETITION PLATFORMS`).

- [ ] **Step 3: Refine Section 02 (Train with Purpose) & Section 03 (Find Your Training)**
Align typography, ensure 8pt spacing rhythm, ensure card contrast and clean hover micro-interactions.

- [ ] **Step 4: Refine Section 04 (Equipment Guide)**
Replace "Free knowledge..." phrasing with professional domain copy ("A comprehensive guide to calibrated machinery..."). Ensure responsive grid integrity.

- [ ] **Step 5: Refine Section 05 (Faculty & Admissions Intake)**
Polish the 2-step intake form with high-contrast inputs, clear focus states, validation, and zero gimmicks.

- [ ] **Step 6: Verify build**
Run: `npm run build`
Expected: PASS.

---

### Task 5: Refine `ProgramsPage.jsx` into an Industry-Ready Protocol Directory

**Files:**
- Modify: `src/components/ProgramsPage.jsx`

**Interfaces:**
- Consumes: `ScrollAnimations`, `lucide-react`, `onOpenBooking`
- Produces: Clean, authentic protocol catalog, interactive exercise technical library with instant search, beginner microcycle routine, and nutritional blueprints.

- [ ] **Step 1: Redesign Programs Hero**
Remove the flipped diagonal candy stripe and cutout PNG.
Create an architectural header: "Focused. Relentless. Proven." with sports science periodization badges and active protocol count.

- [ ] **Step 2: Refine the 6 Protocol Cards**
Ensure verified movement sequences, clear load metrics, duration/frequency, and direct "Apply" button hooked into `onOpenBooking({ program: p.title })`.

- [ ] **Step 3: Refine Exercise Technical Library & Active Microcycle**
Polish search input, muscle group filter pills, daily beginner exercise routine table, and coaching cues.

- [ ] **Step 4: Refine Metabolic & Dietary Blueprints**
Ensure clear macro splits, whole food lists, and hydration guidelines.

- [ ] **Step 5: Verify build**
Run: `npm run build`
Expected: PASS.

---

### Task 6: Refine `TrainersPage.jsx` into an Elite Faculty & Facility Roster

**Files:**
- Modify: `src/components/TrainersPage.jsx`

**Interfaces:**
- Consumes: `ScrollAnimations`, `lucide-react`, `onOpenBooking`
- Produces: Professional faculty directory with collapsible frosted info drawers, luxury philosophy pillars, architectural hardware zones, and transparent Indian Rupee membership plans.

- [ ] **Step 1: Redesign Trainers Hero**
Remove diagonal candy stripe and cutout PNG.
Implement authoritative faculty hero: "Coaching. Precision. Mastery." with CSCS/USAW certification badges.

- [ ] **Step 2: Refine Senior Faculty Directory (4 Coach Cards)**
Clean up card architecture with normalized heights and accessible "More Info / Less Info" frosted drawer with proper ARIA attributes and keyboard support.
Hook "Schedule with [Coach]" button to `onOpenBooking({ faculty: t.name })`.

- [ ] **Step 3: Refine Philosophy Pillars & Architectural Hardware (4 Zones)**
Verify 8pt baseline grid spacing, clean monospace numbers, and high-contrast typography.

- [ ] **Step 4: Refine Membership Plans (Tier 01 Base ₹2,999, Tier 02 Performance ₹4,999, Tier 03 Elite ₹7,999)**
Ensure transparent pricing in Indian Rupee (₹), clear feature checklists, prominent CTA buttons wired to `onOpenBooking({ plan: ... })`.

- [ ] **Step 5: Verify build**
Run: `npm run build`
Expected: PASS.

---

### Task 7: Navbar, Footer & Global Accessibility Verification

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: `onNavigate`, `onOpenBooking`
- Produces: Production-grade sticky header with animated underline, responsive mobile menu drawer, and architectural footer with clear coordinates, verified hours, and clickable contact links.

- [ ] **Step 1: Polish Navbar**
Ensure mobile drawer has proper keyboard focus handling, high contrast, and smooth transitions.
Connect "JOIN NOW" CTA to `onOpenBooking()`.

- [ ] **Step 2: Polish Footer**
Ensure high-contrast readability, clickable `tel:+918041224766` and `mailto:ops@ironforge.in`, verified operational hours (5:00 AM – 11:00 PM Daily), and smooth back-to-top button.

- [ ] **Step 3: Run comprehensive verification checklist**
- Run `npm run build` and ensure zero errors.
- Confirm zero green dots, zero pulsing animations, zero demo widgets, zero audio, zero 24/7 claims, zero free/guest pass phrasing.
- Confirm exactly 2 font families (Plus Jakarta Sans + JetBrains Mono).
- Confirm 60-30-10 color rule.
