import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  Zap, 
  Target, 
  BarChart3, 
  ChevronRight, 
  Award, 
  Flame, 
  ShieldCheck, 
  Dumbbell, 
  CheckCircle2, 
  TrendingUp, 
  Activity,
  User,
  Mail,
  Phone,
  Clock,
  Calendar,
  Check,
  RotateCcw,
  MapPin,
  UserCheck,
  FileText
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenBooking, selectedFaculty, onSelectFaculty }) {
  // Before/After comparison slider state (percentage from 0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  // Membership & Faculty Initiation Inline Form State
  const [formStep, setFormStep] = useState(1);
  const [initiationData, setInitiationData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'FUNCTIONAL VITALITY (General Fitness)',
    faculty: selectedFaculty || 'ANY SENIOR FACULTY COACH',
    timeSlot: 'MORNING (8:00 AM - 12:00 PM)',
    objective: '',
    experience: ''
  });
  const [initiationSubmitted, setInitiationSubmitted] = useState(false);

  useEffect(() => {
    if (selectedFaculty) {
      setInitiationData(prev => ({ ...prev, faculty: selectedFaculty }));
    }
  }, [selectedFaculty]);

  const handleInitiationSubmit = (e) => {
    e.preventDefault();
    if (!initiationData.name.trim() || !initiationData.email.trim() || !initiationData.phone.trim()) {
      setFormStep(1);
      return;
    }
    setInitiationSubmitted(true);
  };

  const handleSliderChange = (e) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen frost-page-bg">
      
      {/* =========================================================================
          SECTION 01: OPTION 3 FROST BLUE HERO STAGE
          - Full-bleed image filling the card completely (no white bars)
          - Light Film covering over photography
          - Dark high-contrast slate typography
          - Centered clothed athlete actively lifting with chalk at barbell
          - Zero video cards, zero review badges
          - Clean bottom frosted card with key verified metrics
      ========================================================================= */}
      {/* =========================================================================
          SECTION 01: CRISP MODEL & RIGHT-SIDE FROSTED WHITE BLUR FILM HERO
          - Left side: 100% crisp, sharp, unblurred athlete model
          - Right side: Frosted white blur film covering content area
          - Original content strictly preserved: Stronger. Healthier. You.
          - Massive high-contrast typography and original action buttons
      ========================================================================= */}
      {/* =========================================================================
          SECTION 01: FLAT DYNAMIC SPORTS HERO (MERGED SEAMLESSLY WITH PAGE)
          - Flat edge-to-edge section (zero card borders, zero card shadows)
          - Signature Frost Ice & Lavender diagonal stripe (38° angle)
          - Solo muscular male athlete cutout (/fitness_PNG170.png) grounded on baseline
          - 100% original copy preserved: Stronger. Healthier. You.
          - High-contrast dark typography and action buttons
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] min-h-[560px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between select-none">
        
        {/* LAYER 1 (z-10): SIGNATURE FROST ICE & LAVENDER DIAGONAL STRIPE */}
        <div className="diagonal-stripe-frost z-10" />

        {/* LAYER 2 (z-20): SOLO MUSCULAR MALE ATHLETE (WITH WHITE ELEMENTS & APPAREL) */}
        <div className="absolute inset-y-0 right-0 sm:right-6 md:right-16 lg:right-28 xl:right-36 z-20 flex items-end justify-end pointer-events-none pb-0">
          <img
            src={`${import.meta.env.BASE_URL}fitness_PNG170.png`}
            alt="Muscular male strength athlete with athletic gear"
            className="h-[65%] sm:h-[80%] md:h-[90%] lg:h-[96%] max-h-[680px] object-contain object-bottom transform translate-y-2 lg:translate-y-4 athlete-cutout-shadow pointer-events-none opacity-25 sm:opacity-40 md:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* INNER CONTENT GRID (MAX-W-7XL ALIGNED WITH THE REST OF THE PAGE) */}
        <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10 sm:pb-12 flex flex-col justify-between flex-1">
          
          {/* LAYER 3: TOP STATUS BAR */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono font-bold tracking-wider">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs text-slate-900">
              <span>⚡ IPF &amp; IWF CALIBRATED HUMAN PERFORMANCE</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 font-mono font-semibold bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs">
              <span className="text-slate-950 font-bold">BANGALORE</span>
              <span>/</span>
              <span>12.9716° N, 77.5946° E</span>
            </div>
          </div>

          {/* LAYER 4: FULL 3-LINE HEADLINE, SUBTEXT & BUTTONS */}
          <div className="w-full md:max-w-md lg:max-w-xl my-auto pt-8 sm:pt-12 pb-8">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-[0.9] text-slate-950 drop-shadow-xs">
              Stronger.<br />
              Healthier.<br />
              <span className="text-slate-700">You.</span>
            </h1>

            {/* Subtext in Subtle Frosted Pill Card */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-4.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs max-w-md">
              <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                An uncompromising strength and human performance sanctuary engineered with sports science periodization and calibrated coaching.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-6 sm:mt-8">
              <button
                onClick={onOpenBooking}
                className="dark-pill-btn px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-display tracking-wide uppercase inline-flex items-center justify-center gap-3 cursor-pointer shadow-sm"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => onNavigate('programs')}
                className="dark-pill-btn px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-display tracking-wide uppercase inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Explore Protocols</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* LAYER 5: BOTTOM FROSTED TELEMETRY PILLS */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">01</span>
              <span>STRENGTH PERIODIZATION</span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">02</span>
              <span>IPF/IWF PLATFORMS</span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">03</span>
              <span>SPORTS SCIENCE RECOVERY</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 02: TRAIN WITH PURPOSE
          3 Frosted Cards with Lavender/Ice Accent Badges and Dark Slate Typography
      ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>01 METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
              TRAIN WITH PURPOSE.
            </h2>
            <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed">
              More than just a gym — we build stronger people, healthier lives and a better you through sports science and accountable coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Strength */}
            <div className="frost-card frost-card-hover rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-bold">
                  <Dumbbell className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                  BUILD RAW STRENGTH
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Progressive overload anchored on calibrated competition steel. Master squats, presses, and pulls with biomechanical precision.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">CNS OPTIMIZATION</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">CALIBRATED LOAD</span>
              </div>
            </div>

            {/* Card 2: Healthier */}
            <div className="frost-card frost-card-hover rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-bold">
                  <Flame className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                  HEALTHIER BIOLOGY
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Metabolic conditioning and mitochondrial density without reckless burnout. Aerobic capacity engineered for long-term health.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">INDIVIDUALIZED</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">VOLUME BENCHMARKS</span>
              </div>
            </div>

            {/* Card 3: You */}
            <div className="frost-card frost-card-hover rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-bold">
                  <Activity className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                  A BETTER YOU
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Accountability metrics that keep you consistent. 1-on-1 coach feedback loops that translate gym discipline into personal resilience.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">INBODY 770</span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">TELEMETRY METRICS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: FIND YOUR TRAINING (4 Protocol Cards)
          Photography with Light Film Overlay and High-Contrast Dark Slate Typography
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                <span>02 PROTOCOLS</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
                FIND YOUR TRAINING.
              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-600">
                Different goals. Same result — a stronger, more resilient you.
              </p>
            </div>

            <button
              onClick={() => onNavigate('programs')}
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 hover:text-black transition-colors self-start sm:self-auto cursor-pointer inline-flex items-center gap-1.5 group"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 2x2 Grid of Protocol Cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            
            {/* Card 1: Strength */}
            <div 
              onClick={() => onNavigate('programs')}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                alt="Clothed athlete training barbell squat"
                className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-95 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* LIGHT FILM COVERING OVER IMAGE */}
              <div className="film-overlay-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                  RAW POWERLIFTING
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-950">
                  STRENGTH
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-700 max-w-sm">
                  Build unbreakable raw power and structural joint durability on competition racks.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-slate-950 group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROTOCOL</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Card 2: Muscle Build */}
            <div 
              onClick={() => onNavigate('programs')}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop"
                alt="Clothed athlete performing heavy incline press"
                className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-95 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* LIGHT FILM COVERING OVER IMAGE */}
              <div className="film-overlay-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                  HYPERTROPHY
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-950">
                  MUSCLE BUILD
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-700 max-w-sm">
                  High-tension mechanical overload engineered for dense, functional muscular recruitment.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-slate-950 group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROTOCOL</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Card 3: Fat Loss */}
            <div 
              onClick={() => onNavigate('programs')}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000&auto=format&fit=crop"
                alt="Clothed athlete in training gym session"
                className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-95 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* LIGHT FILM COVERING OVER IMAGE */}
              <div className="film-overlay-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                  METABOLIC RECOMP
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-950">
                  FAT LOSS
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-700 max-w-sm">
                  High-density anaerobic intervals paired with strength work to strip fat and shield lean tissue.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-slate-950 group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROTOCOL</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Card 4: Athletic Performance */}
            <div 
              onClick={() => onNavigate('programs')}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-end"
            >
              <img
                src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop"
                alt="Clothed athlete with sled push sprint"
                className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-95 group-hover:scale-105 transition-all duration-500"
              />
              
              {/* LIGHT FILM COVERING OVER IMAGE */}
              <div className="film-overlay-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/30" />

              <div className="relative z-10 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-950 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
                  EXPLOSIVE SPEED
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-950">
                  ATHLETIC PERFORMANCE
                </h3>
                <p className="text-xs sm:text-sm font-sans font-medium text-slate-700 max-w-sm">
                  Ballistic jumps, reactive sprinting mechanics, and Olympic derivatives for sport agility.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-slate-950 group-hover:translate-x-1 transition-transform">
                  <span>VIEW PROTOCOL</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: EQUIPMENT KNOWLEDGE
          Free education on major gym equipment and machines
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>03 EQUIPMENT GUIDE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
              KNOW YOUR MACHINES.
            </h2>
            <p className="text-sm sm:text-base font-sans text-slate-600 max-w-xl">
              Free knowledge on the equipment inside our facility — what it does, how it targets your body, and why it works.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {[
              {
                tag: 'FREE WEIGHTS',
                name: 'Olympic Barbell',
                desc: 'The cornerstone of strength training. A 20kg steel bar rated for 680kg+ loads. Used for squat, deadlift, bench, overhead press and Olympic lifts. Develops full-body neural drive and compound strength no machine can replicate.',
                stat: '680 KG LOAD RATING',
                img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'FREE WEIGHTS',
                name: 'Hex / Trap Bar',
                desc: 'A hexagonal frame you stand inside. Shifts the centre of gravity over your base, reducing lumbar shear vs. straight bar deadlifts. Ideal for athletes needing high-force output with lower spinal stress.',
                stat: 'NEUTRAL SPINE PULL',
                img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'FREE WEIGHTS',
                name: 'Dumbbells',
                desc: 'Unilateral loading tools that force each limb to work independently, correcting left-right imbalances. Essential for shoulder presses, lateral raises, rows, lunges and accessory hypertrophy work.',
                stat: '2 – 60 KG RANGE',
                img: 'https://images.unsplash.com/photo-1638805981949-260170425660?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'CABLE MACHINES',
                name: 'Functional Trainer',
                desc: 'Dual adjustable cable columns with 180° pivot. Applies constant tension through the full range of motion — something free weights cannot do. Critical for chest flies, cable rows, rotational core and rehab work.',
                stat: 'CONSTANT TENSION ARC',
                img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'CABLE MACHINES',
                name: 'Lat Pulldown / Seated Row',
                desc: 'A weight-stack cable station that isolates the latissimus dorsi (back width) and mid-traps (back thickness). Pull patterns are fundamental to posture correction and upper-body pulling strength.',
                stat: 'VERTICAL PULL AXIS',
                img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'CARDIO',
                name: 'Assault Bike',
                desc: 'Air-resistance fan bike with moving arms. Resistance scales with your output — the harder you push, the harder it gets. Delivers brutal anaerobic conditioning in short intervals. Zero joint impact.',
                stat: 'INFINITE RESISTANCE',
                img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'CARDIO',
                name: 'Concept2 RowErg',
                desc: 'The gold standard rowing machine used by Olympic athletes. Engages complete muscle mass per stroke — legs, core and upper body in one movement. Builds aerobic base and posterior chain strength simultaneously.',
                stat: 'FULL BODY ENGAGEMENT',
                img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'PLATFORMS',
                name: 'IPF Power Rack',
                desc: 'A four-post cage with adjustable safety bars, J-hooks and pull-up stations. Lets you squat, bench and overhead press to full failure safely without a spotter. Every serious strength training session starts here.',
                stat: 'IPF / IWF CERTIFIED',
                img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
              },
              {
                tag: 'RECOVERY',
                name: 'Cold Plunge & Contrast Lab',
                desc: 'Medical-grade 38°F chilled immersion baths and contrast Finnish cedar thermal suites for accelerated inflammation reduction, nervous system recovery, and hormonal replenishment.',
                stat: '38°F CHILLED WATER',
                img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
              },
            ].map((item, i) => (
              <div key={i} className="frost-card frost-card-hover rounded-3xl overflow-hidden shadow-sm flex flex-col">
                {/* Equipment image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover filter brightness-90 contrast-105 transition-transform duration-500 hover:scale-105"
                  />
                  {/* Category tag overlay */}
                  <span className="absolute top-3 left-3 text-[8px] font-mono font-bold tracking-[0.18em] uppercase bg-white/90 text-slate-800 px-2.5 py-1 rounded-full border border-white/80">
                    {item.tag}
                  </span>
                </div>
                {/* Card body */}
                <div className="p-6 space-y-3 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-black text-lg text-slate-950 leading-tight">{item.name}</h3>
                    <span className="shrink-0 text-[8px] font-mono font-bold tracking-widest uppercase text-slate-950 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full text-center leading-tight">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-slate-600 leading-relaxed flex-1">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>




      {/* =========================================================================
          SECTION 05: MEET OUR TRAINERS
          Frosted Coach Cards with Light Film Overlays and Dark Slate Typography
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                <span>04 FACULTY</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
                MEET OUR TRAINERS.
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('trainers')}
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 hover:text-black transition-colors cursor-pointer inline-flex items-center gap-1.5 group"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* 3 Trainer Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="frost-card frost-card-hover rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 shadow-sm transition-all">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop" 
                  alt="Alex Morgan - Strength Coach" 
                  className="w-full h-full object-cover filter brightness-105 contrast-95" 
                />
                <div className="film-overlay-light" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-black text-xl uppercase text-slate-950">ALEX MORGAN</h3>
                <div className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wide min-h-[24px] flex items-center">Head Strength Coach • CSCS</div>
                <p className="text-xs font-sans text-slate-600 pt-1">
                  12 years coaching national powerlifters on IPF calibrated steel and CNS periodization.
                </p>
              </div>
            </div>

            <div className="frost-card frost-card-hover rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 shadow-sm transition-all">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" 
                  alt="Sarah Lee - Conditioning Coach" 
                  className="w-full h-full object-cover filter brightness-105 contrast-95" 
                />
                <div className="film-overlay-light" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-black text-xl uppercase text-slate-950">SARAH LEE</h3>
                <div className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wide min-h-[24px] flex items-center">Conditioning &amp; Hyrox Director</div>
                <p className="text-xs font-sans text-slate-600 pt-1">
                  Specialist in lactate clearance kinetics and aerobic threshold endurance programming.
                </p>
              </div>
            </div>

            <div className="frost-card frost-card-hover rounded-3xl overflow-hidden p-5 sm:p-6 space-y-4 shadow-sm transition-all">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop" 
                  alt="Mike Johnson - Nutrition Coach" 
                  className="w-full h-full object-cover filter brightness-105 contrast-95" 
                />
                <div className="film-overlay-light" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-black text-xl uppercase text-slate-950">MIKE JOHNSON</h3>
                <div className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wide min-h-[24px] flex items-center">Nutrition &amp; Hypertrophy Head</div>
                <p className="text-xs font-sans text-slate-600 pt-1">
                  M.Sc. Kinesiology combining motor recruitment with rigorous macronutrient periodization.
                </p>
              </div>
            </div>

          </div>

          {/* Callout Banner & Complete Membership Initiation Form */}
          <div 
            id="membership-initiation-section" 
            className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] bg-gradient-to-br from-[#CADDEE] via-[#DCE3F4] to-[#BFC9E2] p-3.5 sm:p-6 md:p-10 lg:p-14 xl:p-16 border border-white shadow-2xl"
          >
            {/* Female Athlete Workout Background in Full Original Color with Light Film Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop" 
                alt="Female athlete workout atmosphere in original color" 
                className="w-full h-full object-cover object-top sm:object-center opacity-70 sm:opacity-80 filter saturate-110 contrast-105"
              />
              {/* Adaptive Film Overlay: Top-to-Bottom on Mobile, Left-to-Right on Desktop */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#CADDEE]/50 via-[#DCE3F4]/35 to-[#BFC9E2]/60 sm:bg-gradient-to-r sm:from-[#CADDEE]/35 sm:via-[#DCE3F4]/20 sm:to-transparent" />
            </div>

            <div className="film-grain absolute inset-0 opacity-20 pointer-events-none" />

            {/* Master 2-Column Grid with Adaptive Spacing */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 xl:gap-16 items-start">
              
              {/* Left Column: Authority Narrative & Ethos (5 cols) */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center sm:text-left">
                <div className="space-y-2 sm:space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/85 text-slate-900 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    MEMBERSHIP INITIATION
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950 leading-tight">
                    YOUR NEXT LEVEL <br className="hidden sm:inline" />
                    STARTS HERE.
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-sans text-slate-700 leading-relaxed max-w-md mx-auto sm:mx-0">
                    Stop waiting. Apply for membership or schedule your personal facility walkthrough.
                  </p>
                </div>

                {/* Key Facility Assurance Badges (Compact & Touch Friendly) */}
                <div className="space-y-2 sm:space-y-3 text-left max-w-md mx-auto sm:mx-0">
                  <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-xs">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-slate-950 uppercase font-mono tracking-wider text-[10px] sm:text-xs">ELEIKO IPF COMPETITION RIGS</div>
                      <div className="text-slate-600 mt-0.5 text-[10px] sm:text-xs">Calibrated steel discs, drop pads, and competition bars.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-xs">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-slate-950 uppercase font-mono tracking-wider text-[10px] sm:text-xs">1:1 COACHING ORIENTATION</div>
                      <div className="text-slate-600 mt-0.5 text-[10px] sm:text-xs">Movement screen with certified CSCS &amp; USAW faculty.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-xs">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-slate-950 uppercase font-mono tracking-wider text-[10px] sm:text-xs">5:00 AM – 11:00 PM DAILY ACCESS</div>
                      <div className="text-slate-600 mt-0.5 text-[10px] sm:text-xs">Keycard access for active cohort members.</div>
                    </div>
                  </div>
                </div>

                {/* Location Micro-Card */}
                <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/70 border border-white/60 text-xs font-mono text-slate-700 flex items-center justify-between max-w-md mx-auto sm:mx-0">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                    <span className="font-bold text-[10px] sm:text-xs">INDIRANAGAR, BANGALORE</span>
                  </div>
                  <span className="text-slate-500 font-bold tracking-wider text-[9px] sm:text-[10px]">HAL 2ND STAGE</span>
                </div>
              </div>

              {/* Right Column: Complete Interactive Form Card (7 cols) */}
              <div className="lg:col-span-7 w-full">
                <div className="bg-white/95 backdrop-blur-xl border border-white/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-9 lg:p-10 shadow-2xl text-slate-900">
                  
                  {!initiationSubmitted ? (
                    <form onSubmit={handleInitiationSubmit} className="space-y-4 sm:space-y-5">
                      
                      {/* Form Header with Step Indicator & Progress Pills */}
                      <div className="space-y-2 pb-3 border-b border-slate-200/80">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-black text-sm sm:text-lg uppercase text-slate-950 tracking-tight leading-tight">
                            FACILITY WALKTHROUGH &amp; ROSTER ADMISSION
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase shrink-0">
                            STEP 0{formStep}/02
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-600 font-sans">
                          {formStep === 1 
                            ? 'Part 1: Athletic profile & discipline. You can submit immediately.' 
                            : 'Part 2: Select faculty mentor and preferred walkthrough window.'}
                        </p>

                        {/* Interactive Step Switcher Tabs */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setFormStep(1)}
                            className={`py-2 px-3 rounded-xl font-mono text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                              formStep === 1
                                ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                                : 'bg-slate-50/90 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full text-[8px] flex items-center justify-center font-bold ${
                              formStep === 1 ? 'bg-white text-slate-950' : 'bg-slate-300 text-slate-700'
                            }`}>1</span>
                            <span className="truncate">CORE INTAKE</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setFormStep(2)}
                            className={`py-2 px-3 rounded-xl font-mono text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                              formStep === 2
                                ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                                : 'bg-slate-50/90 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full text-[8px] flex items-center justify-center font-bold ${
                              formStep === 2 ? 'bg-white text-slate-950' : 'bg-slate-300 text-slate-700'
                            }`}>2</span>
                            <span className="truncate">PREFERENCES</span>
                          </button>
                        </div>
                      </div>

                      {/* ================= STEP 1: CORE INTAKE (UP TO PRIMARY TRAINING DISCIPLINE) ================= */}
                      {formStep === 1 && (
                        <div className="space-y-4 sm:space-y-4.5 animate-in fade-in duration-200">
                          {/* Field 1: Full Athlete Name */}
                          <div className="space-y-1.5">
                            <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                              <User className="w-3.5 h-3.5 text-slate-950" />
                              <span>FULL ATHLETE NAME *</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={initiationData.name}
                              onChange={(e) => setInitiationData({ ...initiationData, name: e.target.value })}
                              placeholder="e.g. Alex Morgan"
                              className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium"
                            />
                          </div>

                          {/* Field 2 & 3: Dual Contact Details with Comfortable Mobile Spacing */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                            <div className="space-y-1.5">
                              <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                                <Mail className="w-3.5 h-3.5 text-slate-950" />
                                <span>EMAIL ADDRESS *</span>
                              </label>
                              <input
                                type="email"
                                required
                                value={initiationData.email}
                                onChange={(e) => setInitiationData({ ...initiationData, email: e.target.value })}
                                placeholder="alex@athlete.com"
                                className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                                <Phone className="w-3.5 h-3.5 text-slate-950" />
                                <span>PHONE / WHATSAPP *</span>
                              </label>
                              <input
                                type="tel"
                                required
                                value={initiationData.phone}
                                onChange={(e) => setInitiationData({ ...initiationData, phone: e.target.value })}
                                placeholder="+91 98765 43210"
                                className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium"
                              />
                            </div>
                          </div>

                          {/* Field 4: Training Discipline (2-Column Grid on Both Mobile & Desktop) */}
                          <div className="space-y-1.5">
                            <label className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                              <span className="flex items-center gap-1.5">
                                <Dumbbell className="w-3.5 h-3.5 text-slate-950" />
                                <span>PRIMARY TRAINING DISCIPLINE</span>
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-slate-500 font-normal">TAP TO SELECT</span>
                            </label>
                            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                              {[
                                { 
                                  id: 'FUNCTIONAL VITALITY (General Fitness)', 
                                  fancy: 'FUNCTIONAL VITALITY', 
                                  casual: 'Everyday Energy',
                                  tag: 'FITNESS' 
                                },
                                { 
                                  id: 'CARDIOVASCULAR KINETICS (Cardio & Stamina)', 
                                  fancy: 'CARDIO KINETICS', 
                                  casual: 'Aerobic Engine',
                                  tag: 'CARDIO' 
                                },
                                { 
                                  id: 'PHYSIQUE ARCHITECTURE (Body Recomp & Toning)', 
                                  fancy: 'PHYSIQUE ARCH.', 
                                  casual: 'Recomp & Muscle',
                                  tag: 'TONING' 
                                },
                                { 
                                  id: 'BARBELL CALIBRATION (Maximal Strength)', 
                                  fancy: 'BARBELL CALIB.', 
                                  casual: 'Calibrated Steel',
                                  tag: 'STRENGTH' 
                                },
                                { 
                                  id: 'OLYMPIC BALLISTICS (Weightlifting)', 
                                  fancy: 'OLYMPIC BALL.', 
                                  casual: 'Snatch & Clean',
                                  tag: 'OLYMPIC' 
                                },
                                { 
                                  id: 'THERMAL & CNS RESTORE (Recovery & Longevity)', 
                                  fancy: 'THERMAL & CNS', 
                                  casual: 'Plunge & Sauna',
                                  tag: 'WELLNESS' 
                                }
                              ].map((item) => {
                                const isSelected = initiationData.discipline === item.id;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setInitiationData({ ...initiationData, discipline: item.id })}
                                    className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-left transition-all duration-150 cursor-pointer border ${
                                      isSelected 
                                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm' 
                                        : 'bg-slate-50/90 text-slate-800 border-slate-200/90 hover:bg-slate-100'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between gap-1 mb-1">
                                      <span className={`text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                                        isSelected ? 'bg-white/20 text-[#CADDEE]' : 'bg-slate-200 text-slate-700'
                                      }`}>
                                        {item.tag}
                                      </span>
                                      {isSelected && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CADDEE]"></span>
                                      )}
                                    </div>
                                    <div className="font-mono text-[11px] sm:text-xs font-bold tracking-tight leading-tight">
                                      {item.fancy}
                                    </div>
                                    <div className={`text-[10px] font-sans mt-0.5 line-clamp-1 ${
                                      isSelected ? 'text-slate-300' : 'text-slate-500'
                                    }`}>
                                      {item.casual}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Step 1 Actions: Primary Submit directly active + Option to refine with Step 2 */}
                          <div className="pt-2 space-y-2.5">
                            <button
                              type="submit"
                              className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0F172A] hover:bg-black text-white font-display font-black text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                            >
                              <span>APPLY FOR MEMBERSHIP NOW</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                if (!initiationData.name.trim() || !initiationData.email.trim() || !initiationData.phone.trim()) {
                                  const formEl = document.querySelector('form');
                                  if (formEl && formEl.reportValidity) {
                                    formEl.reportValidity();
                                    return;
                                  }
                                }
                                setFormStep(2);
                              }}
                              className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs hover:border-slate-300"
                            >
                              <span>OR ADD PREFERENCES (STEP 2)</span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                            </button>

                            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-sans text-slate-600 text-center px-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                              <span>Strictly technical walkthrough. Zero sales pressure.</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ================= STEP 2: REMAINING PREFERENCES ================= */}
                      {formStep === 2 && (
                        <div className="space-y-4 sm:space-y-4.5 animate-in fade-in duration-200">
                          {/* Field 5: Faculty Coach Consultation */}
                          <div className="space-y-1.5">
                            <label className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                              <span className="flex items-center gap-1.5">
                                <UserCheck className="w-3.5 h-3.5 text-slate-950" />
                                <span>FACULTY COACH CONSULTATION</span>
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-slate-500 font-normal">1:1 MENTOR</span>
                            </label>
                            <select
                              value={initiationData.faculty}
                              onChange={(e) => {
                                setInitiationData({ ...initiationData, faculty: e.target.value });
                                if (onSelectFaculty) onSelectFaculty(e.target.value);
                              }}
                              className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 font-mono focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all cursor-pointer font-semibold"
                            >
                              <option value="ANY SENIOR FACULTY COACH">⚡ FIRST AVAILABLE SENIOR FACULTY COACH</option>
                              <option value="ALEX MORGAN">ALEX MORGAN (Head of Strength &amp; Power • CSCS)</option>
                              <option value="SARAH LEE">SARAH LEE (Conditioning &amp; Hyrox Director)</option>
                              <option value="MIKE JOHNSON">MIKE JOHNSON (Head of Nutrition &amp; Hypertrophy)</option>
                              <option value="EMMA DAVIS">EMMA DAVIS (Biomechanics &amp; Recovery Protocol)</option>
                            </select>
                          </div>

                          {/* Field 6: Preferred Walkthrough Window (Compact 3-Column Grid on Mobile) */}
                          <div className="space-y-1.5">
                            <label className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-slate-950" />
                                <span>PREFERRED WALKTHROUGH WINDOW</span>
                              </span>
                              <span className="text-[9px] sm:text-[10px] text-slate-500 font-normal">STAFFED HOURS</span>
                            </label>
                            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                              {[
                                { id: 'MORNING (8:00 AM - 12:00 PM)', label: 'MORNING', sub: '8AM – 12PM' },
                                { id: 'AFTERNOON (12:00 PM - 5:00 PM)', label: 'AFTERNOON', sub: '12PM – 5PM' },
                                { id: 'EVENING (5:00 PM - 8:00 PM)', label: 'EVENING', sub: '5PM – 8PM' }
                              ].map((item) => {
                                const isSelected = initiationData.timeSlot === item.id;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setInitiationData({ ...initiationData, timeSlot: item.id })}
                                    className={`py-2.5 px-2 rounded-xl sm:rounded-2xl text-center transition-all duration-150 cursor-pointer border ${
                                      isSelected 
                                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-sm' 
                                        : 'bg-slate-50/90 text-slate-700 border-slate-200 hover:bg-slate-100'
                                    }`}
                                  >
                                    <div className="font-mono text-[11px] sm:text-xs font-bold leading-tight">{item.label}</div>
                                    <div className={`text-[9px] sm:text-[10px] font-sans mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>{item.sub}</div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Field 7: Athletic Background & Goals (Optional) */}
                          <div className="space-y-1.5">
                            <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                              <FileText className="w-3.5 h-3.5 text-slate-950" />
                              <span>ATHLETIC BACKGROUND &amp; GOALS (OPTIONAL)</span>
                            </label>
                            <textarea
                              rows={2}
                              value={initiationData.experience}
                              onChange={(e) => setInitiationData({ ...initiationData, experience: e.target.value })}
                              placeholder="Tell us about your barbell background or goals..."
                              className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium resize-none"
                            />
                          </div>

                          {/* Step 2 Actions */}
                          <div className="pt-2 space-y-2.5">
                            <button
                              type="submit"
                              className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#0F172A] hover:bg-black text-white font-display font-black text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                            >
                              <span>CONFIRM APPLICATION &amp; SCHEDULE TOUR</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() => setFormStep(1)}
                              className="w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs hover:border-slate-300"
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                              <span>BACK TO CORE INTAKE (STEP 1)</span>
                            </button>

                            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-sans text-slate-600 text-center px-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                              <span>Strictly technical walkthrough. Zero sales pressure.</span>
                            </div>
                          </div>

                        </div>
                      )}

                    </form>
                  ) : (
                    /* Submission Confirmation View with Generous Spacing */
                    <div className="py-6 sm:py-8 px-2 text-center space-y-4 sm:space-y-6 animate-in fade-in duration-300">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shadow-lg">
                        <Check className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>

                      <div className="space-y-1.5">
                        <span className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                          APPLICATION TRANSMITTED • ROSTER PENDING
                        </span>
                        <h4 className="font-display font-black text-xl sm:text-3xl uppercase tracking-tight text-slate-950">
                          WALKTHROUGH SCHEDULED
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-sm mx-auto leading-relaxed">
                          Your profile has been logged into our coaching intake system.
                        </p>
                      </div>

                      {/* Admission Summary Card */}
                      <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-[11px] sm:text-xs font-mono">
                        <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                          <span className="text-slate-500 uppercase">ATHLETE:</span>
                          <span className="text-slate-950 font-bold">{initiationData.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                          <span className="text-slate-500 uppercase">FACULTY MENTOR:</span>
                          <span className="text-slate-950 font-bold truncate max-w-[180px]">{initiationData.faculty}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                          <span className="text-slate-500 uppercase">DISCIPLINE:</span>
                          <span className="text-slate-950 font-bold truncate max-w-[180px]">{initiationData.discipline}</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                          <span className="text-slate-500 uppercase">WINDOW:</span>
                          <span className="text-slate-950 font-bold">{initiationData.timeSlot}</span>
                        </div>
                        <div className="flex justify-between pt-0.5 text-[10px] sm:text-[11px]">
                          <span className="text-slate-500 uppercase">LOCATION:</span>
                          <span className="text-slate-950 font-bold">100-Ft Rd, Indiranagar</span>
                        </div>
                      </div>

                      <div className="text-[11px] sm:text-xs text-slate-600 font-sans leading-relaxed">
                        Our Head Strength Coach will review your athletic profile and confirm your entry slot via WhatsApp within 2 hours.
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setInitiationSubmitted(false);
                          setFormStep(1);
                          setInitiationData({
                            name: '',
                            email: '',
                            phone: '',
                            discipline: 'FUNCTIONAL VITALITY (General Fitness)',
                            faculty: selectedFaculty || 'ANY SENIOR FACULTY COACH',
                            timeSlot: 'MORNING (8:00 AM - 12:00 PM)',
                            objective: '',
                            experience: ''
                          });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-mono text-[11px] sm:text-xs font-bold transition-all cursor-pointer shadow-xs"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>SUBMIT ANOTHER REQUEST</span>
                      </button>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
