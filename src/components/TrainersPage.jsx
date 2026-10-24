import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Check, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  UserCheck 
} from 'lucide-react';
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
  SlideFromLeft,
  SlideFromRight
} from './ScrollAnimations';

const TRAINERS_DATA = [
  {
    id: 'coach-1',
    name: 'ALEX MORGAN',
    role: 'HEAD STRENGTH COACH',
    specialty: 'Barbell Form • Safe Strength Progress • Lifting Confidence',
    creds: 'CSCS Certified • 12 Years Coaching',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop',
    bio: 'Passionate about teaching beginners and experienced lifters how to squat, bench, and deadlift with safe, confident form.'
  },
  {
    id: 'coach-2',
    name: 'SARAH LEE',
    role: 'CARDIO & STAMINA DIRECTOR',
    specialty: 'Cardio Workouts • Daily Energy • Hyrox Training',
    creds: 'Exercise Physiology Degree • Hyrox Coach',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    bio: 'Specializes in building all-day energy, heart health, and athletic stamina through fun, heart-pumping conditioning.'
  },
  {
    id: 'coach-3',
    name: 'MIKE JOHNSON',
    role: 'MUSCLE & NUTRITION LEAD',
    specialty: 'Muscle Building • Healthy Eating Habits • Sustainable Results',
    creds: 'Certified Nutrition Coach • Kinesiology',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1200&auto=format&fit=crop',
    bio: 'Takes the guesswork out of meal planning and lifting so you gain lean muscle and tone without extreme diets.'
  },
  {
    id: 'coach-4',
    name: 'EMMA DAVIS',
    role: 'MOBILITY & RECOVERY LEAD',
    specialty: 'Joint Mobility • Posture Improvement • Pain-Free Movement',
    creds: 'Doctor of Physical Therapy (DPT)',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop',
    bio: 'Focuses on posture, joint mobility, and helping your body stay pain-free through gentle stretching and recovery.'
  }
];

const FACILITIES_DATA = [
  {
    id: 'fac-1',
    zone: 'ZONE 01',
    name: 'MAIN LIFTING AREA',
    specs: '18 Weight Stations • Eleiko Swedish Barbells • Safety Catch Racks',
    desc: 'Spacious lifting platforms equipped with the safest racks, bars, and calibrated weight plates in the world.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fac-2',
    zone: 'ZONE 02',
    name: 'INDOOR TURF TRACK',
    specs: '40m Green Turf Track • Push & Pull Sleds • Kettlebells',
    desc: 'Cushioned indoor turf runway designed for fun, low-impact sled pushes, cardio, and bodyweight exercises.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fac-3',
    zone: 'ZONE 03',
    name: 'CARDIO & ROWING BAY',
    specs: 'Concept2 Rowers • SkiErgs • Air Bikes • Curved Treadmills',
    desc: 'Top-tier cardio machines that keep your workouts engaging, low-impact, and great for your heart.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fac-4',
    zone: 'ZONE 04',
    name: 'COLD PLUNGE & SAUNA LAB',
    specs: 'Chilled Cold Plunge Tubs • Traditional Cedar Wood Sauna',
    desc: 'Relaxing cold water immersion and soothing cedar heat to ease post-workout soreness and recharge your body.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function TrainersPage({ onOpenBooking }) {
  const [expandedCoaches, setExpandedCoaches] = useState({});
  const [expandedFacilities, setExpandedFacilities] = useState({});

  const toggleExpand = (id) => {
    setExpandedCoaches(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFacilityExpand = (id) => {
    setExpandedFacilities(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-[#07080A] text-[#F8FAFC] min-h-screen selection:bg-[#FF5500] selection:text-black">
      
      {/* =========================================================================
          SECTION 01: CARD-FREE FACULTY HERO
          - Zero cards, zero slashes, zero coordinates
          - Simple, welcoming language
          - Competition Orange Accent (#FF5500)
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.08] min-h-[85svh] flex flex-col justify-between">
        
        {/* Full-Bleed Atmospheric Background Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1800&auto=format&fit=crop"
            alt="Faculty coaching session"
            className="w-full h-full object-cover filter brightness-[0.2] contrast-125 saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-[#07080A]/85" />
          <div className="film-grain absolute inset-0 opacity-40" />
        </div>

        {/* Top Wireframe Architectural Line */}
        <div className="relative z-10 border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-[#07080A]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[#FF5500] font-bold tracking-wider">[ COACHING DIRECTORS ]</span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="hidden sm:inline">FRIENDLY &amp; CERTIFIED</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-[#FF5500] font-bold tracking-wider">CIVIL LINES, NAGPUR</span>
              <span className="text-white/20">•</span>
              <span>COACHING TEAM</span>
            </div>
          </div>
        </div>

        {/* Hero Architectural Core Stage (Friendly, approachable copy) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 my-auto text-left">
          <div className="space-y-6 sm:space-y-8 max-w-5xl">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-black">
                FRIENDLY COACHES
              </span>
              <span className="text-white/30 hidden xs:inline">•</span>
              <span className="text-slate-400 hidden xs:inline text-[11px]">ZERO INTIMIDATION</span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="hero-monument-title text-white">
                COACHING.<br />
                GUIDANCE.<br />
                <span className="text-[#FF5500]">RESULTS.</span>
              </h1>
            </div>

            <p className="hero-editorial-lead text-slate-300 max-w-2xl font-normal">
              Certified coaches who listen. Personal movement checks. Zero guesswork.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking ? onOpenBooking({ faculty: 'ANY COACH (BEST MATCH FOR ME)' }) : null}
                className="bg-[#FF5500] hover:bg-[#FF6A1A] text-black px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-display font-black uppercase tracking-wider inline-flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.35)] transition-all duration-150 min-h-[48px] active:scale-[0.98]"
              >
                <span>TALK WITH A COACH</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 02: COACHING TEAM (WARM & CLEAR DOSSIERS)
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 text-left">
          
          <div className="space-y-2 pb-6 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span className="text-[#FF5500] font-bold">01</span>
              <span>•</span>
              <span>YOUR COACHING TEAM</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              EXPERTS COMMITTED TO YOUR SUCCESS.
            </h2>
          </div>

          {/* Coach Profiles */}
          <div className="divide-y divide-white/[0.08]">
            {TRAINERS_DATA.map((t) => (
              <div 
                key={t.id}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hover:bg-white/[0.02] transition-colors px-1 sm:px-4"
              >
                {/* Photo Plate */}
                <div className="lg:col-span-4 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 w-full">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-105" 
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#07080A]/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold text-white text-center border border-white/15">
                    {t.creds}
                  </div>
                </div>

                {/* Coach Narrative */}
                <div className="lg:col-span-6 space-y-3 sm:space-y-4 w-full">
                  <div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                      {t.name}
                    </h3>
                    <div className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-wider mt-1">
                      {t.role}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                      SPECIALTY:
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-white font-medium">
                      {t.specialty}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                      ABOUT THIS COACH:
                    </span>
                    <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed font-normal">
                      {t.bio}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onOpenBooking ? onOpenBooking({ faculty: t.name }) : null}
                    className="w-full sm:w-auto bg-white hover:bg-[#FF5500] hover:text-black text-black px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-[0.98] min-h-[44px]"
                  >
                    <span>SCHEDULE WITH {t.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: GYM ZONES (SIMPLE & CLEAR)
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 text-left">
          
          <div className="space-y-2 pb-6 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span className="text-[#FF5500] font-bold">02</span>
              <span>•</span>
              <span>GYM BLUEPRINT</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              EXPLORE THE 4 ZONES.
            </h2>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {FACILITIES_DATA.map((f) => (
              <div 
                key={f.id}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hover:bg-white/[0.02] transition-colors px-1 sm:px-4"
              >
                <div className="lg:col-span-4 relative h-56 sm:h-64 lg:h-60 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 w-full">
                  <img 
                    src={f.image} 
                    alt={f.name} 
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-105" 
                  />
                  <div className="absolute bottom-3 left-3 bg-[#07080A]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white border border-white/15">
                    {f.zone} • {f.name}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-3 w-full">
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                    {f.name}
                  </h3>

                  <div className="text-xs font-mono font-bold text-[#FF5500]">
                    EQUIPMENT: {f.specs}
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: SIMPLE MONTHLY MEMBERSHIPS (TRANSPARENT ₹)
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 text-left">
          
          <div className="space-y-2 pb-6 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span className="text-[#FF5500] font-bold">03</span>
              <span>•</span>
              <span>CLEAR MONTHLY MEMBERSHIPS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              SIMPLE PRICING. NO HIDDEN FEES.
            </h2>
            <p className="text-xs sm:text-sm font-sans text-slate-400 max-w-xl">
              Billed monthly in Indian Rupee. No annual lock-in contracts. Cancel anytime.
            </p>
          </div>

          {/* 3 Tiers Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Tier 1: BASE */}
            <div className="space-y-6 pb-8 md:pb-6 border-b md:border-b-0 md:border-r border-white/[0.08] md:pr-8 last:border-r-0 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  TIER 01 • ESSENTIALS
                </div>
                
                <h3 className="font-display font-black text-2xl uppercase text-white">
                  GYM FLOOR ACCESS
                </h3>

                <div className="font-mono">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white">₹ 2,999</span>
                  <span className="text-xs text-slate-400"> PER MONTH</span>
                </div>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  Full access to all 18 lifting platforms, dumbbells, cable stations, and cardio machines.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-slate-300 pt-4 border-t border-white/[0.08]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Keycard Access (05:00 – 23:00)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Eleiko Swedish Weights &amp; Bars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Clean Locker Rooms &amp; Rain Showers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Ironforge Workout Tracking App</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking ? onOpenBooking({ plan: 'BASE (₹ 2,999)' }) : null}
                  className="w-full py-3.5 rounded-full border border-white/20 hover:border-white active:bg-white/[0.08] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer min-h-[48px]"
                >
                  JOIN GYM FLOOR
                </button>
              </div>
            </div>

            {/* Tier 2: PERFORMANCE (POPULAR) */}
            <div className="space-y-6 pb-8 md:pb-6 border-b md:border-b-0 md:border-r border-white/[0.08] md:pr-8 last:border-r-0 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-widest">
                  <span className="text-[#FF5500]">TIER 02 • POPULAR CHOICE</span>
                  <span className="px-2 py-0.5 rounded bg-[#FF5500] text-black text-[9px] font-black shadow-[0_0_10px_rgba(255,85,0,0.4)]">MOST POPULAR</span>
                </div>
                
                <h3 className="font-display font-black text-2xl uppercase text-white">
                  GYM + ICE PLUNGE &amp; SAUNA
                </h3>

                <div className="font-mono">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white">₹ 4,999</span>
                  <span className="text-xs text-slate-400"> PER MONTH</span>
                </div>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  Full gym access plus unlimited cold plunge tubs, cedar sauna sessions, and group workouts.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-slate-200 pt-4 border-t border-white/[0.08]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span className="font-bold">Everything in Gym Floor Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>Unlimited Cold Plunge &amp; Cedar Sauna</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>Weekly Coach-Led Group Workouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>Turf Runway &amp; Sled Track Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>Monthly InBody Progress Scan</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking ? onOpenBooking({ plan: 'PERFORMANCE (₹ 4,999)' }) : null}
                  className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#FF6A1A] text-black font-mono font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(255,85,0,0.35)] active:scale-[0.98] min-h-[48px]"
                >
                  JOIN GYM + RECOVERY
                </button>
              </div>
            </div>

            {/* Tier 3: ELITE */}
            <div className="space-y-6 pb-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  TIER 03 • COMPLETE COACHING
                </div>
                
                <h3 className="font-display font-black text-2xl uppercase text-white">
                  PERSONAL COACHING + GYM
                </h3>

                <div className="font-mono">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white">₹ 7,999</span>
                  <span className="text-xs text-slate-400"> PER MONTH</span>
                </div>

                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  Dedicated 1-on-1 personal coaching, customized workout &amp; meal plans, and private platform reservations.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-slate-300 pt-4 border-t border-white/[0.08]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span className="font-bold">Everything in Gym + Recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>4 One-on-One Personal Coaching Sessions Monthly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Custom Meal &amp; Nutrition Guidelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-white shrink-0" />
                    <span>Priority Station &amp; Platform Booking</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking ? onOpenBooking({ plan: 'ELITE (₹ 7,999)' }) : null}
                  className="w-full py-3.5 rounded-full border border-white/20 hover:border-white active:bg-white/[0.08] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer min-h-[48px]"
                >
                  JOIN PERSONAL COACHING
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: FACULTY ADMISSION CALLOUT
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                GET IN TOUCH
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                SCHEDULE A RELAXED COACH CONSULTATION.
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-400">
                Connect with a friendly coach to discuss your goals, walk through the facility, and find the right workout path for you.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking ? onOpenBooking({ faculty: 'ANY COACH (BEST MATCH FOR ME)' }) : null}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FF5500] text-black font-display font-black text-xs uppercase tracking-wider hover:bg-[#FF6A1A] transition-all cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.35)] inline-flex items-center justify-center gap-2 active:scale-[0.98] min-h-[48px]"
              >
                <span>BOOK A RELAXED CHAT</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
