import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Clock, 
  Check, 
  Zap,
  Activity,
  UserCheck,
  Flame,
  Layers,
  ThermometerSnowflake
} from 'lucide-react';
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
  SlideFromLeft,
  SlideFromRight
} from './ScrollAnimations';

// Short, curious hardware catalog with authentic contextual images (Plain layout, zero navy blue)
const HARDWARE_ITEMS = [
  {
    category: 'FREE WEIGHTS',
    name: 'Eleiko Competition Barbells',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=700&auto=format&fit=crop',
    curiousHook: 'Why do ordinary barbells hurt your wrists?',
    desc: 'Eleiko bars rotate freely on precision Swedish needle bearings. Zero wrist torque, smooth spin, and flawless balance.',
    spec: '20kg Swedish steel • 215,000 PSI knurling',
    feature: 'SWEDISH NEEDLE BEARINGS'
  },
  {
    category: 'FREE WEIGHTS',
    name: 'Calibrated Competition Plates',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=700&auto=format&fit=crop',
    curiousHook: 'How exact is your 100kg lift?',
    desc: 'Commercial plates are often off by up to 2kg. Ours are calibrated to within 10 grams so every personal record counts.',
    spec: '0.25kg to 25kg thin-profile steel discs',
    feature: '10-GRAM ACCURACY'
  },
  {
    category: 'CABLES & TURF',
    name: 'Dual Motion Towers & Sled Track',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=700&auto=format&fit=crop',
    curiousHook: 'Can you build pure power without joint wear?',
    desc: 'Aircraft-grade cable pulleys and a 40-meter indoor turf sled runway give you joint-friendly athletic power.',
    spec: '2x 100kg stacks • 40m sprint runway',
    feature: 'ZERO-IMPACT POWER'
  },
  {
    category: 'CARDIO & ENGINE',
    name: 'Concept2 Rowers & SkiErgs',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=700&auto=format&fit=crop',
    curiousHook: 'What makes air resistance so brutal yet gentle on joints?',
    desc: 'The harder you pull, the more resistance the wind flywheel pushes back. Pure lung-burning stamina with zero joint impact.',
    spec: 'Dual wind flywheels • PM5 performance monitors',
    feature: 'ALL-DAY ENGINE'
  },
  {
    category: 'RECOVERY LAB',
    name: '38°F Contrast Plunge & Cedar Sauna',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=700&auto=format&fit=crop',
    curiousHook: 'Can three minutes in ice erase days of muscle soreness?',
    desc: 'Drop into 38°F chilled water, then warm up in 190°F Finnish cedar heat to flush stiffness on contact.',
    spec: 'Micro-filtered ice plunge • Cedar dry heat',
    feature: 'FAST MUSCLE RECOVERY'
  }
];

export default function HomePage({ 
  onNavigate, 
  onOpenBooking, 
  onScrollToIntake,
  selectedFaculty, 
  onSelectFaculty 
}) {
  // Hardware Filter State
  const [activeHardwareFilter, setActiveHardwareFilter] = useState('ALL');
  const hardwareCategories = ['ALL', 'FREE WEIGHTS', 'CABLES & TURF', 'CARDIO & ENGINE', 'RECOVERY LAB'];

  const filteredHardware = HARDWARE_ITEMS.filter(item => {
    if (activeHardwareFilter === 'ALL') return true;
    return item.category === activeHardwareFilter;
  });

  // Interactive Tour Enquiry Form State
  const [formError, setFormError] = useState('');
  const [initiationData, setInitiationData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'BARBELL & STRENGTH',
    faculty: selectedFaculty || 'ANY COACH (BEST MATCH)',
    timeSlot: 'MORNING (08:00 – 12:00)',
    objective: ''
  });
  const [initiationSubmitted, setInitiationSubmitted] = useState(false);

  useEffect(() => {
    if (selectedFaculty) {
      setInitiationData(prev => ({ ...prev, faculty: selectedFaculty }));
    }
  }, [selectedFaculty]);

  const handleInitiationSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    if (!initiationData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!initiationData.phone.trim()) {
      setFormError('Please enter your phone or WhatsApp number.');
      return;
    }
    if (!initiationData.email.trim()) {
      setFormError('Please enter your email address.');
      return;
    }
    setInitiationSubmitted(true);
  };

  return (
    <div className="bg-[#07080A] text-[#F8FAFC] min-h-screen selection:bg-[#FF5500] selection:text-black">
      
      {/* =========================================================================
          SECTION 01: MONUMENTAL CARD-FREE HERO
          - Zero cards, zero slashes, zero coordinates, zero marquee
          - Simple, welcoming, high-impact language
          - Competition orange (#FF5500) focal accent
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.08] min-h-[85svh] flex flex-col justify-between">
        
        {/* Full-Bleed Atmospheric Background Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
            alt="Ironforge Eleiko platform"
            className="w-full h-full object-cover filter brightness-[0.24] contrast-125 saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-[#07080A]/80" />
          <div className="film-grain absolute inset-0 opacity-40" />
        </div>

        {/* Top Wireframe Architectural Telemetry Line */}
        <div className="relative z-10 border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-[#07080A]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[#FF5500] font-bold tracking-wider">CIVIL LINES, NAGPUR</span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="hidden sm:inline">RAMDASPETH</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-[#FF5500] font-bold tracking-wider">PREMIUM STRENGTH GYM</span>
              <span className="text-white/20">•</span>
              <span>05:00 – 23:00 ACCESS</span>
            </div>
          </div>
        </div>

        {/* Hero Core Stage (No Cards Anywhere, Clear & Simple Language) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 my-auto text-left">
          <div className="space-y-5 sm:space-y-6 max-w-5xl">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-mono font-bold text-[10px]">
                OPEN TO ALL FITNESS LEVELS
              </span>
              <span className="text-white/30 hidden xs:inline">•</span>
              <span className="text-slate-400 hidden xs:inline text-[11px]">PREMIUM STRENGTH GYM</span>
            </div>

            {/* Monumental Macro-Typography with Orange Accent */}
            <div className="space-y-1">
              <h1 className="hero-monument-title text-white">
                UNCOMPROMISING<br />
                STRENGTH <span className="text-[#FF5500]">TRAINING</span>
              </h1>
            </div>

            {/* Simple, Punchy Hero Sentences (Zero Jargon) */}
            <p className="hero-editorial-lead text-slate-300 max-w-2xl font-normal">
              World-class equipment. Friendly expert coaches. Ice plunge and cedar sauna. Built for anyone ready to get stronger.
            </p>

            {/* Dominant Focal Action (Single Dominant CTA in Competition Orange) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onOpenBooking ? onOpenBooking({ program: 'FACILITY TOUR' }) : null}
                className="bg-[#FF5500] hover:bg-[#FF6A1A] text-black px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-display font-black uppercase tracking-wider inline-flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.35)] transition-all duration-150 min-h-[48px] active:scale-[0.98]"
              >
                <span>SCHEDULE FACILITY TOUR</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              
              <button
                onClick={onScrollToIntake || (() => onNavigate('trainers'))}
                className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white px-5 sm:px-6 py-3.5 sm:py-4 transition-colors cursor-pointer inline-flex items-center justify-center sm:justify-start gap-2 group min-h-[48px]"
              >
                <span>APPLY FOR MEMBERSHIP</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform text-[#FF5500]" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 02: WHY IRONFORGE (PLAIN EDITORIAL LAYOUT, NO CARDS, NO NAVY BLUE)
          - Unboxed, plain editorial columns directly on the obsidian canvas
          - Short, curiosity-driven copy with contextual photography
          - Zero slashes, zero navy blue colors
      ========================================================================= */}
      <section className="py-20 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="space-y-2 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-[#FF5500] font-bold">01</span>
                <span>•</span>
                <span>WHY IRONFORGE</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight mt-1">
                BUILT DIFFERENT. ON PURPOSE.
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-md">
              Three things you will notice the moment you walk through our doors.
            </p>
          </div>

          {/* 3 Plain Editorial Columns (No Cards, No Navy Blue) */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Item 01: Genuine Swedish Steel */}
            <div className="space-y-4">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=900&auto=format&fit=crop"
                  alt="Athlete chalking hands for Eleiko barbell lift"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#FF5500] border border-white/15 uppercase">
                  01 • THE HARDWARE
                </span>
                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 bg-black/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  18 ELEIKO PLATFORMS
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                  NO BENT BARS. NO PLASTIC.
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                  Ever wondered why ordinary gym bars hurt your wrists while others feel weightless? Genuine Eleiko calibrated steel spins smoothly on needle bearings and stays perfectly balanced.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#FF5500] font-bold">
                  <span>SWEDISH CALIBRATION</span>
                  <span className="text-slate-400">ZERO WOBBLE</span>
                </div>
              </div>
            </div>

            {/* Item 02: Contrast Therapy Suite */}
            <div className="space-y-4">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop"
                  alt="Clear contrast ice plunge bath and sauna atmosphere"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#FF5500] border border-white/15 uppercase">
                  02 • THE CONTRAST
                </span>
                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 bg-black/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  38°F COLD • 190°F HEAT
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                  RESET AT 38°F &amp; 190°F.
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                  Why wait two full days for muscle soreness to fade? Three minutes in our chilled water drops inflammation instantly so you wake up refreshed and ready to train again.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#FF5500] font-bold">
                  <span>FINNISH CEDAR HEAT</span>
                  <span className="text-slate-400">ZERO SORENESS</span>
                </div>
              </div>
            </div>

            {/* Item 03: Pure Focus Culture */}
            <div className="space-y-4">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop"
                  alt="Coach guiding an athlete on proper lifting technique"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-[#FF5500] border border-white/15 uppercase">
                  03 • THE CULTURE
                </span>
                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 bg-black/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  CAPPED FLOOR ACCESS
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                  ZERO WAITING. ZERO EGOS.
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                  Tired of waiting twenty minutes for a bench or feeling intimidated? We cap capacity and keep helpful coaches on the floor to check your form whenever you want.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#FF5500] font-bold">
                  <span>RESIDENT COACHES</span>
                  <span className="text-slate-400">NO OVERCROWDING</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: TARGETED WORKOUT PATHS (PLAIN EDITORIAL ROWS, NO CARDS)
          - Plain horizontal editorial rows with authentic contextual photography
          - Short, magnetic hooks that spark curiosity
          - Zero card boxes, zero navy blue colors
      ========================================================================= */}
      <section className="py-20 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-[#FF5500] font-bold">02</span>
                <span>•</span>
                <span>TARGETED WORKOUT PATHS</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                WHAT IS YOUR MAIN GOAL?
              </h2>
            </div>

            <button
              onClick={() => onNavigate('programs')}
              className="bg-white hover:bg-[#FF5500] hover:text-black text-black px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer self-start sm:self-auto shadow-md"
            >
              <span>EXPLORE ALL 6 PROGRAMS</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Plain Editorial Program Rows (No Cards, No Navy Blue) */}
          <div className="divide-y divide-white/[0.08]">
            {[
              {
                id: '01',
                title: 'BARBELL & POWER',
                badge: '12 WEEKS • STRENGTH',
                image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
                curiousHook: 'How strong could you get with proper form?',
                teaser: 'Master the squat, bench, and deadlift with calibrated bars and zero wasted reps.',
                highlight: '+20% STRONGER ON LIFTS'
              },
              {
                id: '02',
                title: 'SCULPT & LEAN MUSCLE',
                badge: '10 WEEKS • PHYSIQUE',
                image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
                curiousHook: 'What if every rep actually built definition?',
                teaser: 'Joint-friendly cable and dumbbell circuits that sculpt noticeable muscle week after week.',
                highlight: 'HIGH-IMPACT DEFINITION'
              },
              {
                id: '03',
                title: 'TURF SLED & HYROX',
                badge: '8 WEEKS • STAMINA',
                image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop',
                curiousHook: 'What if you never ran out of breath?',
                teaser: 'Heavy sled pushes, Concept2 rowers, and SkiErgs to build relentless energy and stamina.',
                highlight: 'ALL-DAY ENGINE'
              },
              {
                id: '04',
                title: 'ICE PLUNGE & SAUNA',
                badge: 'WEEKLY • RECOVERY',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
                curiousHook: 'Why live with sore, stiff muscles?',
                teaser: 'Plunge into 38°F cold water, then recharge in cedar heat. Flush fatigue in twenty minutes.',
                highlight: 'INSTANT RECHARGE'
              }
            ].map((p) => (
              <div
                key={p.id}
                className="py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 hover:bg-white/[0.02] transition-colors"
              >
                {/* Plain Contextual Image Frame */}
                <div className="relative w-full md:w-56 h-48 sm:h-40 md:h-36 rounded-2xl overflow-hidden shrink-0 border border-white/[0.08]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#FF5500]">
                    {p.id}
                  </div>
                </div>

                {/* Plain Text Body */}
                <div className="flex-1 space-y-1.5 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-white bg-white/[0.06] px-2 py-0.5 rounded-full border border-white/10 uppercase">
                      {p.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#FF5500]">
                      {p.highlight}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs font-bold font-sans text-[#FF5500]">
                    {p.curiousHook}
                  </p>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed max-w-xl">
                    {p.teaser}
                  </p>
                </div>

                {/* Plain CTA */}
                <div className="shrink-0 w-full sm:w-auto self-stretch md:self-center">
                  <button
                    onClick={() => onOpenBooking ? onOpenBooking({ program: p.title }) : null}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#FF5500] hover:text-black text-black text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-[0.98] min-h-[44px]"
                  >
                    <span>EXPLORE PATH</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OUR EQUIPMENT (PLAIN EDITORIAL ROWS, SHORT, CURIOUS & VISUAL)
          - Plain horizontal divider rows directly on the canvas (NO CARDS)
          - Contextual photography for every piece of gear
          - Short, curious hooks (zero boring technical syllabi)
          - Zero navy blue colors
      ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8 sm:space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-[#FF5500] font-bold">03</span>
                <span>•</span>
                <span>OUR EQUIPMENT</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                TRAIN WITH THE BEST GEAR.
              </h2>
            </div>

            {/* Filter Pills with Horizontal Touch Scrolling on Mobile */}
            <div className="flex overflow-x-auto no-scrollbar py-1 gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {hardwareCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveHardwareFilter(cat)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                    activeHardwareFilter === cat
                      ? 'bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.35)]'
                      : 'text-slate-400 hover:text-white border border-white/10 hover:border-white/20 active:bg-white/[0.05]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Plain Editorial Equipment Rows (No Cards, With Contextual Images) */}
          <div className="divide-y divide-white/[0.08]">
            {filteredHardware.map((item, idx) => (
              <div 
                key={idx}
                className="py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 hover:bg-white/[0.02] transition-colors"
              >
                {/* Contextual Equipment Photo */}
                <div className="relative w-full md:w-56 h-48 sm:h-40 md:h-36 rounded-2xl overflow-hidden shrink-0 border border-white/[0.08]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#FF5500]">
                    {item.category}
                  </div>
                </div>

                {/* Plain Content Body */}
                <div className="flex-1 space-y-1.5 w-full">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {item.spec}
                  </div>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs font-bold font-sans text-[#FF5500]">
                    {item.curiousHook}
                  </p>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                {/* Feature Pill Badge */}
                <div className="shrink-0 self-start md:self-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-mono text-[10px] font-bold tracking-wider inline-block">
                    {item.feature}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: MEET YOUR COACHES & SIMPLE TOUR INTAKE
      ========================================================================= */}
      <section id="membership-initiation-section" className="py-20 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-[#FF5500] font-bold">04</span>
                <span>•</span>
                <span>MEET YOUR COACHES</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                FRIENDLY COACHES. REAL RESULTS.
              </h2>
            </div>

            <button
              onClick={() => onNavigate('trainers')}
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 group self-start sm:self-auto"
            >
              <span>MEET ALL COACHES</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] text-[#FF5500]" />
            </button>
          </div>

          {/* 4 Senior Coaches (Friendly, approachable copy) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'ALEX MORGAN',
                role: 'HEAD STRENGTH COACH',
                creds: 'CSCS • 12 YEARS COACHING',
                image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
                bio: 'Helps lifters of all levels master proper form and build lasting strength safely.'
              },
              {
                name: 'SARAH LEE',
                role: 'CARDIO & STAMINA DIRECTOR',
                creds: 'EXERCISE PHYSIOLOGY • HYROX COACH',
                image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
                bio: 'Specialist in building all-day energy, heart health, and athletic endurance.'
              },
              {
                name: 'MIKE JOHNSON',
                role: 'MUSCLE & NUTRITION LEAD',
                creds: 'NUTRITION COACH • KINESIOLOGY',
                image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop',
                bio: 'Helps you eat well and lift smart so you see real body changes without burnout.'
              },
              {
                name: 'EMMA DAVIS',
                role: 'MOBILITY & RECOVERY SPECIALIST',
                creds: 'DOCTOR OF PHYSICAL THERAPY (DPT)',
                image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
                bio: 'Focuses on posture, joint mobility, and helping your body stay pain-free.'
              }
            ].map((c, i) => (
              <div key={i} className="space-y-3">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                  <img 
                    src={c.image} 
                    alt={c.name} 
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-105"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#07080A]/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[9px] font-mono font-bold text-white text-center border border-white/15">
                    {c.creds}
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-display font-black text-lg uppercase text-white truncate">{c.name}</h3>
                  <div className="text-[11px] font-mono text-[#FF5500] font-bold uppercase tracking-wider">{c.role}</div>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed">{c.bio}</p>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => onOpenBooking ? onOpenBooking({ faculty: c.name }) : null}
                    className="w-full py-2 px-3 rounded-full bg-white hover:bg-[#FF5500] hover:text-black text-black text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                  >
                    <span>TALK WITH {c.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              INTERACTIVE TOUR & FACILITY ENQUIRY DESK (NO CARDS, NO NAVY BLUE)
              - 12-Col split: Left is Walkthrough Guarantees & Hours, Right is Interactive Form
              - Interactive Goal Chips, Visit Windows & Coach Selector
              - Seamless inline validation (zero browser alerts)
          ========================================================================= */}
          <div className="border-t border-white/[0.08] pt-16">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left 5 Columns: Walkthrough Guarantees & Operational Telemetry */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>05 • SCHEDULE A VISIT</span>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                    SEE THE FACILITY. TEST THE BARS.
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                    Take a relaxed 15-minute walkthrough with an experienced coach. Inspect our calibrated Eleiko stations, explore the contrast recovery lab, and get your questions answered.
                  </p>
                </div>

                {/* 3 Walkthrough Guarantees */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500]">
                      <span>01</span>
                      <span>•</span>
                      <span>ZERO SALES PRESSURE</span>
                    </div>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">
                      Strictly an honest walkthrough. We let the equipment and atmosphere speak for themselves.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500]">
                      <span>02</span>
                      <span>•</span>
                      <span>FREE FORM &amp; GOAL CHECK</span>
                    </div>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">
                      Ask any lifting, programming, or nutrition questions with a certified coach on duty.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500]">
                      <span>03</span>
                      <span>•</span>
                      <span>IMMEDIATE KEYCARD SETUP</span>
                    </div>
                    <p className="text-xs font-sans text-slate-300 leading-relaxed">
                      If you decide to join, your digital keycard access can be activated right at the reception desk.
                    </p>
                  </div>
                </div>

                {/* Physical Location & Hours Notice */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2.5 text-xs font-mono">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold">Civil Lines, Wardha Road</div>
                      <div className="text-slate-400 text-[11px]">Nagpur, Maharashtra 440001</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-white/[0.06]">
                    <Clock className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-bold">STAFFED TOURS: 08:00 – 20:00 DAILY</div>
                      <div className="text-slate-400 text-[11px]">Keycard Access: 05:00 – 23:00 (Monday to Sunday)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 7 Columns: Interactive Walkthrough Enquiry Console */}
              <div className="lg:col-span-7">
                {initiationSubmitted ? (
                  /* Confirmation State: Digital Walkthrough Pass */
                  <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-[#FF5500]/40 space-y-5 text-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-[#FF5500] text-black rounded-2xl mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.4)]">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#FF5500] uppercase tracking-wider block">
                        TOUR CONFIRMED • PASS ACTIVE
                      </span>
                      <h4 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                        WELCOME, {initiationData.name.split(' ')[0].toUpperCase()}.
                      </h4>
                      <p className="text-xs sm:text-sm font-sans text-slate-300 max-w-md mx-auto leading-relaxed">
                        Your facility visit has been scheduled. Our coaching desk has sent confirmation details to <strong className="text-white">{initiationData.email}</strong>.
                      </p>
                    </div>

                    {/* Digital Admission Ticket */}
                    <div className="bg-black/60 border border-white/10 rounded-2xl p-4 sm:p-5 max-w-md mx-auto space-y-2 text-left text-xs font-mono">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-500 uppercase text-[10px]">BOOKING CODE:</span>
                        <span className="font-black text-[#FF5500] tracking-wider">FORGE-TOUR-9241</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5 text-[11px]">
                        <span className="text-slate-500">MEMBER:</span>
                        <span className="font-bold text-white">{initiationData.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5 text-[11px]">
                        <span className="text-slate-500">FOCUS:</span>
                        <span className="font-bold text-white truncate max-w-[200px]">{initiationData.discipline}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5 text-[11px]">
                        <span className="text-slate-500">COACH:</span>
                        <span className="font-bold text-white truncate max-w-[200px]">{initiationData.faculty}</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-500">WINDOW:</span>
                        <span className="font-bold text-white">{initiationData.timeSlot}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => setInitiationSubmitted(false)}
                        className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white hover:text-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        BOOK ANOTHER VISIT
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Form View */
                  <form onSubmit={handleInitiationSubmit} className="space-y-6 text-left">
                    
                    {/* Control 01: Interactive Goal Selector Chips */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
                        01 • WHAT IS YOUR PRIMARY FITNESS GOAL?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'BARBELL & STRENGTH',
                          'LEAN MUSCLE & SHAPE',
                          'FAT LOSS & TONING',
                          'HYROX & STAMINA',
                          'COLD PLUNGE & SAUNA'
                        ].map((goal) => {
                          const isSelected = initiationData.discipline === goal;
                          return (
                            <button
                              key={goal}
                              type="button"
                              onClick={() => setInitiationData({ ...initiationData, discipline: goal })}
                              className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer min-h-[38px] ${
                                isSelected
                                  ? 'bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.35)]'
                                  : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 active:bg-white/[0.08]'
                              }`}
                            >
                              {goal}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Control 02: Interactive Time Window Chips */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
                        02 • WHEN WOULD YOU LIKE TO VISIT?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {[
                          { id: 'MORNING (08:00 – 12:00)', label: 'MORNING', time: '08:00 – 12:00' },
                          { id: 'AFTERNOON (12:00 – 17:00)', label: 'AFTERNOON', time: '12:00 – 17:00' },
                          { id: 'EVENING (17:00 – 20:00)', label: 'EVENING', time: '17:00 – 20:00' }
                        ].map((slot) => {
                          const isSelected = initiationData.timeSlot === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setInitiationData({ ...initiationData, timeSlot: slot.id })}
                              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer font-mono min-h-[46px] ${
                                isSelected
                                  ? 'bg-[#FF5500] text-black border-[#FF5500] shadow-[0_0_14px_rgba(255,85,0,0.35)]'
                                  : 'bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/20 active:bg-white/[0.08]'
                              }`}
                            >
                              <div className="text-xs font-bold">{slot.label}</div>
                              <div className={`text-[10px] ${isSelected ? 'text-black/80 font-bold' : 'text-slate-400'}`}>
                                {slot.time}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Control 03: Contact Details (Clean Large Inputs - 16px on mobile prevents zoom) */}
                    <div className="space-y-3 pt-1">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block">
                        03 • YOUR CONTACT DETAILS
                      </label>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <input
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Your full name *"
                            value={initiationData.name}
                            onChange={(e) => {
                              setFormError('');
                              setInitiationData({ ...initiationData, name: e.target.value });
                            }}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-3 text-base sm:text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors min-h-[46px]"
                          />
                        </div>

                        <div className="space-y-1">
                          <input
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            required
                            placeholder="Phone or WhatsApp *"
                            value={initiationData.phone}
                            onChange={(e) => {
                              setFormError('');
                              setInitiationData({ ...initiationData, phone: e.target.value });
                            }}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-3 text-base sm:text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors min-h-[46px]"
                          />
                        </div>

                        <div className="space-y-1">
                          <input
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            autoCapitalize="none"
                            autoCorrect="off"
                            required
                            placeholder="Email address *"
                            value={initiationData.email}
                            onChange={(e) => {
                              setFormError('');
                              setInitiationData({ ...initiationData, email: e.target.value });
                            }}
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-3 text-base sm:text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors min-h-[46px]"
                          />
                        </div>
                      </div>

                      {/* Coach Preference Selector */}
                      <div className="space-y-1 pt-1">
                        <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          CHOOSE YOUR PREFERRED COACH (OPTIONAL)
                        </label>
                        <select
                          value={initiationData.faculty}
                          onChange={(e) => setInitiationData({ ...initiationData, faculty: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-3 text-base sm:text-xs font-mono text-white focus:outline-none focus:border-[#FF5500] transition-colors min-h-[46px]"
                        >
                          <option className="bg-[#07080A]">ANY COACH (BEST MATCH)</option>
                          <option className="bg-[#07080A]">ALEX MORGAN (Barbells &amp; Form)</option>
                          <option className="bg-[#07080A]">SARAH LEE (Cardio &amp; Stamina)</option>
                          <option className="bg-[#07080A]">MIKE JOHNSON (Muscle &amp; Nutrition)</option>
                          <option className="bg-[#07080A]">EMMA DAVIS (Mobility &amp; Recovery)</option>
                        </select>
                      </div>

                      {/* Optional Notes */}
                      <div className="space-y-1">
                        <textarea
                          rows={2}
                          placeholder="Tell us about your fitness goals or any past injuries (optional)..."
                          value={initiationData.objective}
                          onChange={(e) => setInitiationData({ ...initiationData, objective: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-base sm:text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Inline Error Notice (No browser alerts) */}
                    {formError && (
                      <div className="p-3 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/30 text-xs font-mono font-bold text-[#FF5500] animate-in fade-in">
                        {formError}
                      </div>
                    )}

                    {/* Submit Action */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#FF6A1A] text-black font-display font-black text-xs uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,85,0,0.35)] transition-all min-h-[50px] active:scale-[0.98]"
                      >
                        <span>CONFIRM FACILITY WALKTHROUGH</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>

                    <div className="text-[11px] font-sans text-slate-400 text-center">
                      Zero sales pressure. Free 15-minute facility inspection with a coach.
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
