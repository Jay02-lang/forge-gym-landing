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
  ChevronUp
} from 'lucide-react';

const TRAINERS_DATA = [
  {
    id: 'coach-1',
    name: 'ALEX MORGAN',
    role: 'HEAD OF STRENGTH & POWER',
    specialty: 'Powerlifting / CNS Adaptation / Periodization',
    creds: 'CSCS • USAPL Senior Coach • 780kg Raw Total',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    bio: 'Former national collegiate powerlifting champion with 12 years coaching elite powerlifters and strength competitors on calibrated steel.'
  },
  {
    id: 'coach-2',
    name: 'SARAH LEE',
    role: 'CONDITIONING & HYROX DIRECTOR',
    specialty: 'Metabolic Conditioning / Aerobic Threshold / Hyrox',
    creds: 'MS Exercise Physiology • Hyrox Elite Tier • Exos XPS',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    bio: 'Specializes in high-density lactate clearance, VO2 kinetics, and structuring endurance blocks for athletes seeking hybrid stamina.'
  },
  {
    id: 'coach-3',
    name: 'MIKE JOHNSON',
    role: 'HEAD OF NUTRITION & HYPERTROPHY',
    specialty: 'Hypertrophy / Mechanical Tension / Sports Nutrition',
    creds: 'M.Sc. Kinesiology • CISSN • IFBB Pro Coach',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop',
    bio: 'Combines hormonal health diagnostics with meticulous macronutrient periodization and motor unit recruitment strategies.'
  },
  {
    id: 'coach-4',
    name: 'EMMA DAVIS',
    role: 'BIOMECHANICS & RECOVERY PROTOCOL',
    specialty: 'Joint Articulation / FMS-2 / Thermal Contrast Therapy',
    creds: 'Doctor of Physical Therapy (DPT) • CSCS',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    bio: 'Oversees contrast immersion thermal shock protocols, infrared recovery scheduling, and joint mobility rehabilitation for athletes.'
  }
];

const FACILITIES_DATA = [
  {
    id: 'fac-1',
    zone: 'ZONE 01',
    name: 'WEIGHT ROOM',
    specs: '18 Competition Platforms • Eleiko Calibrated Discs • Monolifts',
    desc: 'Heavy powerlifting and Olympic weightlifting zones outfitted with certified Eleiko IPF bars, calibrated steel discs, and drop pads.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fac-2',
    zone: 'ZONE 02',
    name: 'FUNCTIONAL TURF',
    specs: '40m High-Traction Turf • Rogue Dog Sleds • Ballistic Rigs',
    desc: 'Dedicated indoor turf runway designed for sprint acceleration, heavy prowler pushes, kettlebell complexes, and plyometrics.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fac-3',
    zone: 'ZONE 03',
    name: 'CARDIO & ERG BAY',
    specs: 'Concept2 Ergometers • SkiErgs • Echo Bikes • Woodway Curve',
    desc: 'Motorless curved treadmills and air resistance machinery engineered for anaerobic threshold intervals and VO2 max expansion.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'fac-4',
    zone: 'ZONE 04',
    name: 'RECOVERY LAB',
    specs: '38°F Chilled Ice Plunges • 200°F Finnish Cedar Sauna • Normatec',
    desc: 'Continuous microfiltered cold immersion and dry Finnish heat shock suites for immediate central nervous system recovery.',
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
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen frost-page-bg">
      
      {/* =========================================================================
          SECTION 01: OPTION 3 FROST BLUE COACHES HERO
          - Full-bleed image filling the card completely (zero white bars)
          - Active clothed coach: senior coach demonstrating barbell mechanics
          - Light Film covering over photography
          - Dark high-contrast slate typography
          - Zero video cards, zero review badges
      ========================================================================= */}
      {/* =========================================================================
          SECTION 01: DYNAMIC DIAGONAL SPORTS HERO (FACULTY / TRAINERS)
          - Signature Frost Ice & Lavender diagonal stripe (38° angle)
          - Solo muscular male strength coach cutout (/bodybuilding_PNG50.png)
          - Full 3-line headline: Coaching. Precision. Mastery.
          - Frosted white glass cards, badges, and action button
      ========================================================================= */}
      {/* =========================================================================
          SECTION 01: FLAT DYNAMIC SPORTS HERO (FACULTY / TRAINERS)
          - Flat edge-to-edge section (zero card borders, zero card shadows)
          - Signature Frost Ice & Lavender diagonal stripe (38° angle)
          - Solo muscular male strength coach cutout (/fitness_PNG193.png)
          - Full 3-line headline: Coaching. Precision. Mastery.
          - Frosted white glass cards, badges, and action button
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC] min-h-[560px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between select-none">
        
        {/* LAYER 1 (z-10): SIGNATURE FROST ICE & LAVENDER DIAGONAL STRIPE */}
        <div className="diagonal-stripe-frost z-10" />

        {/* LAYER 2 (z-20): FULL-BODY MALE FITNESS COACH (HEAD TO SNEAKERS) */}
        <div className="absolute inset-y-0 right-0 sm:right-6 md:right-16 lg:right-28 xl:right-36 z-20 flex items-end justify-end pointer-events-none pb-0">
          <img
            src={`${import.meta.env.BASE_URL}fitness_PNG193.png`}
            alt="Full body male fitness coach with clipboard and athletic towel"
            className="h-[65%] sm:h-[80%] md:h-[90%] lg:h-[96%] max-h-[680px] object-contain object-bottom transform translate-y-2 lg:translate-y-4 athlete-cutout-shadow pointer-events-none opacity-25 sm:opacity-40 md:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* INNER CONTENT GRID (MAX-W-7XL ALIGNED WITH THE REST OF THE PAGE) */}
        <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10 sm:pb-12 flex flex-col justify-between flex-1">

          {/* LAYER 3: TOP STATUS BAR */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono font-bold tracking-wider">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs text-slate-900">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>FACULTY &amp; ARCHITECTURE • IPF &amp; IWF CERTIFIED</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 font-mono font-semibold bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs">
              <span className="text-slate-950 font-bold">INDIRANAGAR, BANGALORE</span>
              <span>/</span>
              <span>12.9716° N, 77.5946° E</span>
            </div>
          </div>

          {/* LAYER 4: FULL 3-LINE HEADLINE, SUBTEXT & BUTTONS */}
          <div className="w-full md:max-w-md lg:max-w-xl my-auto pt-8 sm:pt-12 pb-8">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-[0.9] text-slate-950 drop-shadow-xs">
              Coaching.<br />
              Precision.<br />
              <span className="text-slate-700">Mastery.</span>
            </h1>

            {/* Original Subtext in Frosted White Glass Card */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-4.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs max-w-md">
              <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                Our faculty holds elite CSCS, USAW, and IPF certifications with competitive podium pedigrees.
              </p>
            </div>

            {/* Original Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-6 sm:mt-8">
              <button
                onClick={onOpenBooking}
                className="dark-pill-btn px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-display tracking-wide uppercase inline-flex items-center justify-center gap-3 cursor-pointer shadow-sm"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* LAYER 5: BOTTOM FROSTED TELEMETRY PILLS */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">01</span>
              <span>CSCS &amp; USAW FACULTY</span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">02</span>
              <span>1:1 PERIODIZED MENTORSHIP</span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">03</span>
              <span>BIOMECHANICAL SCREENING</span>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 02: 4 SENIOR COACH CARDS WITH LIGHT FILM OVERLAYS
      ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>FACULTY DIRECTORY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
              THE PEOPLE BEHIND THE PERFORMANCE.
            </h2>
            <p className="text-sm sm:text-base font-sans text-slate-600 max-w-2xl">
              Accountable human coaching combining sports biomechanics, calibrated loading, and metabolic science.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
            {TRAINERS_DATA.map((t) => {
              const isExpanded = Boolean(expandedCoaches[t.id]);
              return (
                  <div 
                    key={t.id}
                    className="frost-card frost-card-hover rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between shadow-sm transition-all duration-300 relative"
                  >
                    <div>
                      {/* Photo with Light Film Overlay */}
                      <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 mb-3.5">
                        <img 
                          src={t.image} 
                          alt={t.name} 
                          className="w-full h-full object-cover filter brightness-105 contrast-95" 
                        />
                        <div className="film-overlay-light" />

                        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200 text-[9px] sm:text-[10px] font-mono text-slate-900 font-bold truncate text-center">
                          {t.creds}
                        </div>
                      </div>

                      {/* Name & Role with Normalized Baseline Height for Perfect Horizontal Button Alignment */}
                      <div className="space-y-1 mb-3">
                        <h3 className="font-display font-black text-xl uppercase tracking-tight text-slate-950 truncate">
                          {t.name}
                        </h3>
                        <div className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wide min-h-[36px] flex items-center leading-snug">
                          {t.role}
                        </div>
                      </div>

                      {/* SCHEDULE BUTTON: Prominently placed in the space above More Info */}
                      <div className="mb-3">
                        <button
                          type="button"
                          onClick={() => onOpenBooking(t.name)}
                          className="dark-pill-btn w-full py-2.5 sm:py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:bg-slate-800 transition-all"
                        >
                          <span>SCHEDULE WITH {t.name.split(' ')[0]}</span>
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </button>
                      </div>

                      {/* COLLAPSED STATE: Open visibly frosted blur extending to card edge with unboxed More Info */}
                      {!isExpanded ? (
                        <div 
                          role="button"
                          tabIndex={0}
                          aria-expanded={false}
                          aria-label={`More info about ${t.name}`}
                          onClick={() => toggleExpand(t.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleExpand(t.id);
                            }
                          }}
                          className="relative -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 mt-2 pt-3 pb-4 px-4 sm:px-5 cursor-pointer group select-none overflow-hidden"
                        >
                          {/* Distinct visible frosted glass blur layer extending to card edges */}
                          <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 via-slate-200/70 to-slate-200/95 backdrop-blur-md" />
                          
                          {/* Frosted glass top sheen */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-white/60 pointer-events-none" />

                          <div className="relative z-10 flex flex-col items-center justify-center gap-1">
                            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 group-hover:text-black group-hover:translate-y-0.5 transition-all">
                              <span>MORE INFO</span>
                              <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>

                            {/* Decorative blurred text hidden from screen readers */}
                            <div 
                              aria-hidden="true" 
                              className="w-full text-center text-[10px] font-mono text-slate-500/70 tracking-wider truncate filter blur-[2px] select-none pointer-events-none"
                            >
                              {t.specialty} • {t.creds}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* EXPANDED STATE: Full info revealed with accessible Less Info toggle */
                        <div className="mt-4 space-y-3 animate-in fade-in duration-300 text-left">
                          <div className="space-y-2.5">
                            <div>
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                                SPECIALTY &amp; FOCUS
                              </span>
                              <p className="text-xs font-sans font-semibold text-slate-800 leading-snug mt-0.5">
                                {t.specialty}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-slate-200/70">
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                                COACHING DOSSIER
                              </span>
                              <p className="text-xs font-sans text-slate-600 leading-relaxed mt-0.5">
                                {t.bio}
                              </p>
                            </div>
                          </div>

                          {/* Open Less Info toggle extending to card edge with frosted blur background and 44px+ touch target */}
                          <div 
                            role="button"
                            tabIndex={0}
                            aria-expanded={true}
                            aria-label={`Collapse info for ${t.name}`}
                            onClick={() => toggleExpand(t.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleExpand(t.id);
                              }
                            }}
                            className="relative -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 mt-4 py-3.5 px-4 sm:px-5 cursor-pointer group select-none text-center bg-gradient-to-b from-slate-100/30 via-slate-200/50 to-slate-200/80 backdrop-blur-sm"
                          >
                            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 group-hover:text-black transition-colors">
                              <span>LESS INFO</span>
                              <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: ABOUT IRONFORGE PHILOSOPHY & ARCHITECTURAL INTERIOR
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                <span>OUR CORE PHILOSOPHY</span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-slate-950 leading-tight">
                MORE THAN A GYM. <br />
                WE BUILD ATHLETES.
              </h2>

              <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed max-w-2xl">
                Founded on the uncompromising belief that human adaptation requires precision, calibrated steel, and genuine accountability. We stripped away commercial gym distractions, loud marketing gimmicks, and crowded waiting lines.
              </p>

              {/* Redesigned Architectural Luxury Pillars */}
              <div className="space-y-4 pt-1">
                
                {/* Pillar 01 */}
                <div className="group p-5 sm:p-6 rounded-2xl bg-white/95 border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.07)] hover:border-slate-300 transition-all duration-300 flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center font-display font-black text-sm shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-black text-base uppercase tracking-tight text-slate-950">
                        CALIBRATED STEEL ONLY
                      </h3>
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">
                        IPF &amp; IWF SPEC
                      </span>
                    </div>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                      Every barbell and disc is competition-certified Eleiko and Rogue. Zero loose tolerance cast iron.
                    </p>
                  </div>
                </div>

                {/* Pillar 02 */}
                <div className="group p-5 sm:p-6 rounded-2xl bg-white/95 border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.07)] hover:border-slate-300 transition-all duration-300 flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center font-display font-black text-sm shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-black text-base uppercase tracking-tight text-slate-950">
                        SPORTS SCIENCE PERIODIZATION
                      </h3>
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">
                        CNS RECOVERY
                      </span>
                    </div>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                      Programs structured around fatigue management, rate of force development, and central nervous system recovery.
                    </p>
                  </div>
                </div>

                {/* Pillar 03 */}
                <div className="group p-5 sm:p-6 rounded-2xl bg-white/95 border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.07)] hover:border-slate-300 transition-all duration-300 flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center font-display font-black text-sm shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-black text-base uppercase tracking-tight text-slate-950">
                        CONTRAST RECOVERY LAB
                      </h3>
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-700">
                        38°F PLUNGE • 200°F SAUNA
                      </span>
                    </div>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed font-normal">
                      Continuous microfiltered cold immersion and dry Finnish heat shock suites directly adjacent to the main training floor.
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="dark-pill-btn px-8 py-4 text-sm font-display uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>SCHEDULE A FACILITY TOUR</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Ironforge Architectural Interior" 
                  className="w-full h-full object-cover filter brightness-105 contrast-95" 
                />
                <div className="film-overlay-light" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-200 p-4 rounded-2xl font-mono text-xs text-slate-700 flex justify-between items-center shadow-xs">
                  <span className="font-bold">ARCHITECTURAL SPECIFICATION</span>
                  <span className="font-black text-slate-950">ELEIKO CERTIFIED RTC</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OUR FACILITIES (4 Distinct Zones with Light Film)
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>ARCHITECTURAL HARDWARE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
              OUR FACILITIES.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
            {FACILITIES_DATA.map((f) => {
              const isExpanded = Boolean(expandedFacilities[f.id]);
              return (
                <div 
                  key={f.id}
                  className="frost-card frost-card-hover rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between shadow-sm transition-all duration-300 relative"
                >
                  <div>
                    {/* Facility Image with Film Overlay & Zone Badge */}
                    <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 mb-3.5 shadow-inner">
                      <img 
                        src={f.image} 
                        alt={f.name} 
                        className="w-full h-full object-cover filter brightness-100 contrast-100 group-hover:scale-105 transition-all duration-500" 
                      />
                      <div className="film-overlay-light" />

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200 text-[9px] sm:text-[10px] font-mono text-slate-900 font-bold truncate text-center">
                        {f.zone} • ARCHITECTURAL ZONE
                      </div>
                    </div>

                    {/* Zone Name & Key Specs with Normalized Baseline Height */}
                    <div className="space-y-1 mb-2">
                      <h3 className="font-display font-black text-xl uppercase tracking-tight text-slate-950 truncate">
                        {f.name}
                      </h3>
                      <div className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wide min-h-[36px] flex items-center leading-snug">
                        {f.specs.split('•')[0].trim()}
                      </div>
                    </div>

                    {/* COLLAPSED STATE: Open visibly frosted blur extending to card edge with unboxed More Info */}
                    {!isExpanded ? (
                      <div 
                        role="button"
                        tabIndex={0}
                        aria-expanded={false}
                        aria-label={`More specifications for ${f.name}`}
                        onClick={() => toggleFacilityExpand(f.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleFacilityExpand(f.id);
                          }
                        }}
                        className="relative -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 mt-2 pt-3 pb-4 px-4 sm:px-5 cursor-pointer group select-none overflow-hidden"
                      >
                        {/* Distinct visible frosted glass blur layer extending to card edges */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 via-slate-200/70 to-slate-200/95 backdrop-blur-md" />
                        
                        {/* Frosted glass top sheen */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-white/60 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center justify-center gap-1">
                          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 group-hover:text-black group-hover:translate-y-0.5 transition-all">
                            <span>MORE INFO</span>
                            <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>

                          {/* Decorative blurred text underneath */}
                          <div 
                            aria-hidden="true" 
                            className="w-full text-center text-[10px] font-mono text-slate-500/70 tracking-wider truncate filter blur-[2px] select-none pointer-events-none"
                          >
                            {f.specs}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* EXPANDED STATE: Full specifications and overview revealed with accessible Less Info toggle */
                      <div className="mt-4 space-y-3 animate-in fade-in duration-300 text-left">
                        <div className="space-y-2.5">
                          <div>
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                              HARDWARE SPECIFICATIONS
                            </span>
                            <p className="text-xs font-sans font-semibold text-slate-800 leading-snug mt-0.5">
                              {f.specs}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-200/70">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500">
                              ZONE OVERVIEW
                            </span>
                            <p className="text-xs font-sans text-slate-600 leading-relaxed mt-0.5">
                              {f.desc}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs font-mono text-slate-500">
                            <span className="text-[10px] font-bold uppercase text-slate-500">FACILITY ACCESS</span>
                            <span className="text-slate-950 font-bold bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full text-[9px]">INCLUDED</span>
                          </div>
                        </div>

                        {/* Open Less Info toggle extending to card edge with frosted blur background and 44px+ touch target */}
                        <div 
                          role="button"
                          tabIndex={0}
                          aria-expanded={true}
                          aria-label={`Collapse specifications for ${f.name}`}
                          onClick={() => toggleFacilityExpand(f.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleFacilityExpand(f.id);
                            }
                          }}
                          className="relative -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 mt-4 py-3.5 px-4 sm:px-5 cursor-pointer group select-none text-center bg-gradient-to-b from-slate-100/30 via-slate-200/50 to-slate-200/80 backdrop-blur-sm"
                        >
                          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 group-hover:text-black transition-colors">
                            <span>LESS INFO</span>
                            <ChevronUp className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: MEMBERSHIP PLANS (Strictly Indian Rupee ₹)
          Base: ₹ 2,999 | Performance: ₹ 4,999 (Recommended) | Elite: ₹ 7,999
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>COMMERCIAL COMMITMENT / NO HIDDEN FEES</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-slate-950">
              MEMBERSHIP PLANS.
            </h2>
            <p className="text-sm font-sans text-slate-600 max-w-lg mx-auto">
              Cohort strictly limited to active lifters. Transparent monthly billing in Indian Rupee. Zero lock-in contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-8 pt-4 items-stretch">
            
            {/* Plan 1: BASE (₹ 2,999) */}
            <div className="frost-card rounded-3xl p-6 sm:p-7 lg:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[10px] font-mono font-bold tracking-wider uppercase">
                    TIER 01 • ESSENTIALS
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-slate-950">
                  GYM FLOOR ACCESS
                </h3>
                <div className="font-mono">
                  <span className="font-display font-black text-3xl sm:text-4xl text-slate-950">₹ 2,999</span>
                  <span className="text-xs text-slate-500"> / MONTH</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Full unrestricted access to all 18 competition platforms, Eleiko calibrated steel, and standard training bays.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-medium text-slate-700 pt-4 border-t border-slate-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Member Keycard Access (5am - 11pm)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>IPF &amp; IWF Calibrated Steel Racks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Locker Room &amp; Rain Showers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Ironforge Mobile Progress Tracker</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="dark-pill-btn w-full py-3.5 font-display font-bold text-xs uppercase cursor-pointer tracking-wider mt-4"
              >
                JOIN BASE
              </button>
            </div>

            {/* Plan 2: PERFORMANCE (₹ 4,999 - Most Popular with Dark Accent) */}
            <div className="relative rounded-3xl p-6 sm:p-7 lg:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between shadow-xl bg-gradient-to-b from-[#BFC9E2]/60 via-[#CADDEE]/50 to-white border-2 border-slate-950">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-300">
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                    TIER 02 • PERFORMANCE
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-950 text-white rounded-full text-[9px] font-black tracking-wider">
                    MOST POPULAR
                  </span>
                </div>
                
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-slate-950">
                  GYM + CLASSES + RECOVERY
                </h3>
                
                <div className="font-mono">
                  <span className="font-display font-black text-3xl sm:text-4xl text-slate-950">₹ 4,999</span>
                  <span className="text-xs text-slate-600"> / MONTH</span>
                </div>
                
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  Full platform access, structured small-cohort conditioning, and unlimited contrast plunge &amp; sauna recovery.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-medium text-slate-800 pt-4 border-t border-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span className="font-bold">Everything in Base Plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Unlimited 38°F Plunge &amp; 200°F Sauna</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Structured Microcycle Coaching Classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Turf Runway &amp; Sled Track Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Monthly InBody 770 Composition Scan</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="dark-pill-btn w-full py-4 text-xs font-display uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4"
              >
                <span>JOIN PERFORMANCE</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Plan 3: ELITE (₹ 7,999) */}
            <div className="frost-card rounded-3xl p-6 sm:p-7 lg:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[10px] font-mono font-bold tracking-wider uppercase">
                    TIER 03 • ELITE PRIVATE
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-slate-950">
                  COACHING + PRIVATE LAB
                </h3>
                <div className="font-mono">
                  <span className="font-display font-black text-3xl sm:text-4xl text-slate-950">₹ 7,999</span>
                  <span className="text-xs text-slate-500"> / MONTH</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Comprehensive 1-on-1 coaching, personalized periodization blocks, direct nutrition oversight, and VIP recovery suite access.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-medium text-slate-700 pt-4 border-t border-slate-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span className="font-bold">Everything in Performance Plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>4x 1-on-1 Coaching Sessions / Month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Custom Macro &amp; Nutrition Periodization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Private Competition Platform Booking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Bi-weekly Velocity Telemetry Video Reviews</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="dark-pill-btn w-full py-3.5 font-display font-bold text-xs uppercase cursor-pointer tracking-wider mt-4"
              >
                JOIN ELITE
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: UNIFIED FACULTY INITIATION CALLOUT
      ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="frost-card rounded-[32px] p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6 bg-gradient-to-b from-white/90 to-slate-50/90">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider mx-auto">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>INTEGRATED FACULTY ADMISSION</span>
            </div>
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-slate-950">
                SCHEDULE WITH A SENIOR FACULTY COACH.
              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed">
                Connect directly with our senior mentors for personal technique diagnostics, 
                biomechanical assessments, and an Eleiko platform walkthrough on our unified admission intake.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('ANY SENIOR FACULTY COACH')}
                className="dark-pill-btn px-8 py-4 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>OPEN FACULTY ADMISSION FORM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
