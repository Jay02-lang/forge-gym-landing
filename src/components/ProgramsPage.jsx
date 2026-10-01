import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  ShieldCheck, 
  Dumbbell, 
  Flame, 
  Activity, 
  Award, 
  Calendar, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const PROGRAMS_DATA = [
  {
    id: '01',
    category: 'STRENGTH',
    title: 'STRENGTH PROTOCOL',
    sub: 'BUILD RAW POWER',
    duration: '12 WEEKS',
    frequency: '4 DAYS / WEEK',
    level: 'ADVANCED',
    progress: 82,
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
    desc: 'Periodized barbell progression emphasizing sub-maximal velocity, central nervous system adaptation, and calibrated 1RM testing.',
    focus: ['Competition Squat', 'Competition Bench', 'Competition Deadlift', 'Heavy Carries']
  },
  {
    id: '02',
    category: 'MUSCLE',
    title: 'HYPERTROPHY BLUEPRINT',
    sub: 'MAXIMUM RECRUITMENT',
    duration: '10 WEEKS',
    frequency: '5 DAYS / WEEK',
    level: 'INTERMEDIATE',
    progress: 64,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    desc: 'Metabolic stress and mechanical tension targeting high-threshold motor units. Full-range contraction with strict tempo control.',
    focus: ['Dumbbell Incline', 'Hack Squat', 'Chest-Supported Row', 'Arm Hypertrophy']
  },
  {
    id: '03',
    category: 'FAT LOSS',
    title: 'METABOLIC RECOMPOSITION',
    sub: 'LEAN TISSUE RETENTION',
    duration: '8 WEEKS',
    frequency: '4 DAYS / WEEK',
    level: 'ALL LEVELS',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop',
    desc: 'Strength preservation paired with high-density anaerobic conditioning complexes. Designed to oxidize fat while shielding muscle mass.',
    focus: ['Kettlebell Swings', 'Sled Push Intervals', 'Barbell Complexes', 'Zone 2 Cardio']
  },
  {
    id: '04',
    category: 'CONDITIONING',
    title: 'ENGINE CAPACITY',
    sub: 'AEROBIC THRESHOLD',
    duration: '8 WEEKS',
    frequency: '3 DAYS / WEEK',
    level: 'INTERMEDIATE',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=800&auto=format&fit=crop',
    desc: 'Lactate clearance, VO2 max intervals, and sustained cardiac output utilizing air bikes, rowers, and skiergs.',
    focus: ['Echo Bike Sprints', 'Concept2 Ergometer', 'SkiErg Intervals', 'Heavy Sled Drags']
  },
  {
    id: '05',
    category: 'ATHLETIC',
    title: 'DYNAMIC ATHLETICISM',
    sub: 'RATE OF FORCE DEVELOPMENT',
    duration: '12 WEEKS',
    frequency: '4 DAYS / WEEK',
    level: 'ADVANCED',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
    desc: 'Olympic lifting derivatives, ballistic medicine ball throws, and plyometric jump deceleration for reactive agility.',
    focus: ['Power Clean', 'Box Jump Deceleration', 'Rotational Med Ball', 'Trap Bar Jump']
  },
  {
    id: '06',
    category: 'STRENGTH',
    title: 'BARBELL MASTERY',
    sub: 'TECHNICAL PRECISION',
    duration: '14 WEEKS',
    frequency: '4 DAYS / WEEK',
    level: 'EXPERT',
    progress: 88,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    desc: 'Deep technical refinement on the competitive lifts with specialized accessory movements, accommodating resistance, and video telemetry.',
    focus: ['Chain Bench Press', 'Banded Box Squat', 'Deficit Deadlift', 'GHD Glute Raises']
  }
];

const EXERCISES_DATABASE = [
  {
    id: 'ex-1',
    name: 'BARBELL BACK SQUAT',
    muscle: 'QUADS / GLUTES',
    equipment: 'Eleiko IPF Bar & Calibrated Discs',
    difficulty: 'ADVANCED',
    sets: '5 SETS × 3 REPS',
    reps: '85% 1RM • 0.45 m/s velocity',
    cues: 'Root feet into platform, maintain 360° intra-abdominal brace, break at knees and hips simultaneously.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-2',
    name: 'COMPETITION BENCH PRESS',
    muscle: 'CHEST / TRICEPS',
    equipment: 'Eleiko Competition Bench & Bar',
    difficulty: 'INTERMEDIATE',
    sets: '4 SETS × 5 REPS',
    reps: '80% 1RM • 1-sec pause on chest',
    cues: 'Retract and depress scapulae, leg drive directed horizontally, bar path curves gently back toward face.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-3',
    name: 'CONVENTIONAL DEADLIFT',
    muscle: 'POSTERIOR CHAIN',
    equipment: 'Eleiko Calibrated Bar & Jack',
    difficulty: 'ADVANCED',
    sets: '3 SETS × 3 REPS',
    reps: '87.5% 1RM • Reset each rep',
    cues: 'Pull slack out of barbell, wedge hips down, push the floor away without allowing bar to drift forward.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-4',
    name: 'TURF SLED SPRINTS',
    muscle: 'CONDITIONING / GLUTES',
    equipment: 'Rogue Dog Sled on 40m Turf',
    difficulty: 'ALL LEVELS',
    sets: '6 ROUNDS × 30m',
    reps: '90s rest • Maximum propulsion',
    cues: 'Low body angle at 45°, aggressive triple extension through ankles, knees, and hips on turf.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-5',
    name: 'ECHO BIKE INTERVALS',
    muscle: 'AEROBIC THRESHOLD',
    equipment: 'Rogue Echo Bike',
    difficulty: 'ADVANCED',
    sets: '10 ROUNDS × 20s ON / 40s OFF',
    reps: 'Max Watts / Lactate clearance',
    cues: 'Full body pull-push cadence, controlled diaphragmatic nasal recovery during the 40s rest cycle.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-6',
    name: 'CHEST-SUPPORTED ROW',
    muscle: 'UPPER BACK / LATS',
    equipment: 'Incline Bench & Dumbbells',
    difficulty: 'INTERMEDIATE',
    sets: '4 SETS × 10-12 REPS',
    reps: '2-sec peak contraction',
    cues: 'Sternum pinned to pad, pull through elbows, zero lumbar momentum with complete scapular squeeze.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ProgramsPage({ onOpenBooking }) {
  const [selectedObjective, setSelectedObjective] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('ALL');

  // Daily Exercise Routine Guide for Beginners
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const beginnerDailyGuide = [
    {
      day: 'DAY 01',
      title: 'UPPER BODY PUSH & PULL',
      split: 'FOUNDATION',
      target: 'Chest, Back, Shoulders & Triceps',
      summary: 'Build upper body posture, pressing mechanics, and baseline pulling strength.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'BENCH PRESS & LAT PULLS',
      quote: 'Control the descent on every press. Stable shoulders build resilient strength.',
      exercises: [
        { name: 'Dumbbell Bench Press', muscles: 'Chest, Front Deltoids, Triceps', sets: '3 sets × 10 reps', cue: 'Keep elbows at 45°, squeeze chest at the top' },
        { name: 'Lat Pulldown (Cable)', muscles: 'Latissimus Dorsi, Biceps, Upper Back', sets: '3 sets × 12 reps', cue: 'Pull down toward upper chest, avoid leaning back excessively' },
        { name: 'Dumbbell Shoulder Press', muscles: 'Deltoids, Upper Traps, Triceps', sets: '3 sets × 10 reps', cue: 'Neutral grip, core tight, press straight overhead' },
        { name: 'Seated Cable Row', muscles: 'Rhomboids, Middle Trapezius, Lats', sets: '3 sets × 12 reps', cue: 'Shoulders down and back, pull handle toward navel' },
        { name: 'Cable Triceps Pushdown', muscles: 'Triceps Brachii', sets: '2 sets × 15 reps', cue: 'Pin elbows by your ribcage, extend arms down fully' }
      ]
    },
    {
      day: 'DAY 02',
      title: 'LOWER BODY COMPOUND',
      split: 'STRENGTH',
      target: 'Quadriceps, Glutes, Hamstrings & Calves',
      summary: 'Master the fundamental hinge and squat patterns with balanced knee & hip loading.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'GOBLET SQUAT & RDL',
      quote: 'Root your feet firmly into the platform. Pure force originates from the floor up.',
      exercises: [
        { name: 'Goblet Squat (Kettlebell/DB)', muscles: 'Quadriceps, Glutes, Core', sets: '3 sets × 10 reps', cue: 'Chest upright, knees tracking over toes, sit back between hips' },
        { name: 'Romanian Deadlift (Dumbbell)', muscles: 'Hamstrings, Gluteus Maximus, Erector Spinae', sets: '3 sets × 10 reps', cue: 'Soft knee bend, push hips backward until hamstrings stretch' },
        { name: 'Seated Leg Press Machine', muscles: 'Quadriceps, Adductors', sets: '3 sets × 12 reps', cue: 'Feet shoulder-width on platform, controlled eccentric phase' },
        { name: 'Standing Calf Raise', muscles: 'Gastrocnemius, Soleus', sets: '3 sets × 15 reps', cue: 'Pause at top peak contraction for 1 full second' },
        { name: 'Dead Bug / Plank Hold', muscles: 'Transverse Abdominis, Deep Core', sets: '3 sets × 30s holds', cue: 'Press lower back flush against the mat, brace stomach' }
      ]
    },
    {
      day: 'DAY 03',
      title: 'ACTIVE RECOVERY & MOBILITY',
      split: 'REPAIR',
      target: 'Hip Flexors, Spine, Thoracic Mobility & Heart',
      isRest: true,
      summary: 'Promote tissue restoration, clear metabolic waste, and relieve muscular stiffness.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'MOBILITY & ZONE 2 AEROBIC',
      quote: 'Adaptation and muscle growth happen between sessions, not during them.',
      exercises: [
        { name: 'Low-Intensity Incline Walk', muscles: 'Cardiovascular System, Calves', sets: '20-30 minutes', cue: 'Steady conversational pace, heart rate in Zone 2' },
        { name: 'Cat-Cow & Thoracic Rotations', muscles: 'Spinal Erectors, Thoracic Spine', sets: '2 sets × 10 breaths', cue: 'Synchronize movement with slow deep diaphragmatic breaths' },
        { name: 'Couch Stretch (Hip Flexor)', muscles: 'Psoas, Rectus Femoris (Quads)', sets: '2 sets × 45s per side', cue: 'Tuck pelvis under, feel deep stretch in front of back hip' },
        { name: 'Pigeon Pose / Glute Stretch', muscles: 'Gluteus Medius, Piriformis', sets: '2 sets × 60s per side', cue: 'Hips square to the floor, lean gently forward from chest' }
      ]
    },
    {
      day: 'DAY 04',
      title: 'FULL BODY POSTERIOR & CORE',
      split: 'STABILITY',
      target: 'Back, Glutes, Hamstrings, Abdominals',
      summary: 'Counteract desk-bound posture by reinforcing the entire back side of your body.',
      image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'TRAP BAR DEADLIFT & ROWS',
      quote: 'A fortified posterior chain protects the spine and produces explosive drive.',
      exercises: [
        { name: 'Hex / Trap Bar Deadlift', muscles: 'Glutes, Hamstrings, Quads, Traps', sets: '3 sets × 8 reps', cue: 'Neutral spine, drive the floor away through mid-foot' },
        { name: 'Chest-Supported Dumbbell Row', muscles: 'Mid-Traps, Rhomboids, Rear Deltoids', sets: '3 sets × 10 reps', cue: 'Chest resting on 30° incline bench to eliminate cheat swinging' },
        { name: 'Lying Hamstring Leg Curl', muscles: 'Hamstrings (Biceps Femoris)', sets: '3 sets × 12 reps', cue: 'Keep hips glued to pad, control weight all the way down' },
        { name: 'Face Pulls with Cable Rope', muscles: 'Rear Deltoids, Rotator Cuff, Traps', sets: '3 sets × 15 reps', cue: 'Pull hands toward eye level, externally rotate knuckles back' },
        { name: 'Hanging / Lying Knee Tucks', muscles: 'Rectus Abdominis, Hip Flexors', sets: '3 sets × 12 reps', cue: 'Curl pelvis up toward chest rather than just swinging knees' }
      ]
    },
    {
      day: 'DAY 05',
      title: 'ARMS, SHOULDERS & ATHLETIC CONDITIONING',
      split: 'CAPACITY',
      target: 'Biceps, Triceps, Lateral Delts, Aerobic Base',
      summary: 'Enhance arm/shoulder stability followed by smooth low-impact metabolic cardio work.',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'DELTS, ARMS & ROWERG',
      quote: 'Finish the microcycle with relentless conditioning and precision accessory volume.',
      exercises: [
        { name: 'Dumbbell Lateral Raise', muscles: 'Lateral Deltoids (Side Shoulders)', sets: '3 sets × 12-15 reps', cue: 'Lead with elbows, slight forward lean, pause at parallel' },
        { name: 'Incline Dumbbell Bicep Curl', muscles: 'Biceps Brachii (Long Head)', sets: '3 sets × 12 reps', cue: 'Full stretch at bottom, curl without swinging elbows forward' },
        { name: 'Overhead Rope Tricep Extension', muscles: 'Triceps (Long Head)', sets: '3 sets × 12 reps', cue: 'Keep upper arms still next to ears, extend fully at top' },
        { name: 'Concept2 RowErg Steady Intervals', muscles: 'Full Body Endurance (Kinetic Chain)', sets: '12-15 minutes', cue: 'Drive with legs first, lean core, then pull arms to ribs' }
      ]
    }
  ];

  const objectives = ['ALL', 'STRENGTH', 'MUSCLE', 'FAT LOSS', 'CONDITIONING', 'ATHLETIC'];
  const muscles = ['ALL', 'QUADS / GLUTES', 'CHEST / TRICEPS', 'POSTERIOR CHAIN', 'CONDITIONING / GLUTES', 'AEROBIC THRESHOLD', 'UPPER BACK / LATS'];

  const filteredPrograms = PROGRAMS_DATA.filter(p => {
    if (selectedObjective === 'ALL') return true;
    return p.category === selectedObjective;
  });

  const filteredExercises = EXERCISES_DATABASE.filter(ex => {
    const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ex.cues.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMuscle = selectedMuscle === 'ALL' || ex.muscle === selectedMuscle;
    return matchesSearch && matchesMuscle;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen frost-page-bg">
      
      {/* =========================================================================
          SECTION 01: OPTION 3 FROST BLUE PROTOCOLS HERO
          - Full-bleed image filling the card completely (zero white bars)
          - Active clothed athlete: female athlete slamming battle ropes
          - Light Film covering over photography
          - Dark high-contrast slate typography
          - Zero video cards, zero review badges
      ========================================================================= */}
      {/* =========================================================================
          SECTION 01: DYNAMIC DIAGONAL SPORTS HERO (FLIPPED LAYOUT)
          - Female athlete cutout (/fitness_PNG100.png) positioned on LEFT
          - Flipped Frost Ice & Lavender diagonal stripe behind her
          - Full 3-line headline and content positioned on RIGHT: Focused. Relentless. Proven.
          - Frosted white glass cards, badges, and action buttons
      ========================================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-16 max-w-7xl mx-auto">
        <div className="relative rounded-[36px] overflow-hidden border border-[#CBD5E1] bg-[#F8FAFC] shadow-2xl min-h-[580px] sm:min-h-[680px] lg:min-h-[740px] flex flex-col justify-between p-5 sm:p-8 lg:p-14 select-none">
          
          {/* LAYER 1 (z-10): FLIPPED SIGNATURE FROST ICE & LAVENDER DIAGONAL STRIPE */}
          <div className="diagonal-stripe-frost-flipped z-10" />

          {/* LAYER 2 (z-20): SOLO FEMALE ATHLETE (POSITIONED ON LEFT) */}
          <div className="absolute inset-y-0 left-0 sm:left-4 md:left-10 lg:left-20 z-20 flex items-end justify-start pointer-events-none pb-0">
            <img
              src={`${import.meta.env.BASE_URL}fitness_PNG100.png`}
              alt="Female strength and athletic conditioning athlete"
              className="h-[65%] sm:h-[80%] md:h-[90%] lg:h-[96%] max-h-[640px] object-contain object-bottom transform translate-y-2 lg:translate-y-4 athlete-cutout-shadow pointer-events-none opacity-25 sm:opacity-40 md:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* LAYER 3 (z-30): TOP STATUS BAR */}
          <div className="relative z-30 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono font-bold tracking-wider">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs text-slate-900">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>COMMAND CENTER • VERIFIED PERIODIZATION</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600 font-mono font-semibold bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs">
              <span className="text-slate-950 font-bold">PROTOCOL DATABASE</span>
              <span>/</span>
              <span>6 ACTIVE DIRECTIVES</span>
            </div>
          </div>

          {/* LAYER 4 (z-30): FULL 3-LINE HEADLINE, SUBTEXT & BUTTONS (ALIGNED RIGHT) */}
          <div className="relative z-30 w-full md:max-w-md lg:max-w-xl my-auto pt-6 sm:pt-8 pb-6 md:ml-auto flex flex-col items-start text-left">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-[0.9] text-slate-950 drop-shadow-xs">
              Focused.<br />
              Relentless.<br />
              <span className="text-slate-700">Proven.</span>
            </h1>

            {/* Original Subtext in Frosted White Glass Card */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-4.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xs max-w-md">
              <p className="text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                Choose from six sports science disciplines. From IPF calibrated powerlifting to high-density metabolic complexes.
              </p>
            </div>

            {/* Original Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 mt-6 sm:mt-8">
              <button
                onClick={onOpenBooking}
                className="dark-pill-btn px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-display tracking-wide uppercase inline-flex items-center justify-center gap-3 cursor-pointer shadow-sm"
              >
                <span>Apply for Protocol</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* LAYER 5 (z-30): BOTTOM FROSTED TELEMETRY PILLS (RIGHT-ALIGNED / DISTRIBUTED) */}
          <div className="relative z-30 flex flex-wrap items-center justify-start md:justify-end gap-2 sm:gap-3 pt-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">01</span>
              <span>PERIODIZED PROGRESSION</span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">02</span>
              <span>ELEIKO IPF &amp; IWF SPEC</span>
            </div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-2xs text-[10px] sm:text-xs font-mono text-slate-600">
              <span className="font-bold text-slate-950">03</span>
              <span>CNS &amp; HYPERTROPHY RECOVERY</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 02: 6 TRAINING PROGRAM CARDS
          Frosted Cards with Light Film Covered Photography and Dark Slate Typography
      ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 font-mono text-xs">
            <span className="text-slate-950 font-black uppercase tracking-wider">
              ACTIVE PROTOCOL CATALOG ({filteredPrograms.length})
            </span>
            <span className="text-slate-500">STANDARDIZED IPF &amp; IWF SPEC</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map(p => (
              <div 
                key={p.id}
                className="frost-card frost-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group shadow-sm transition-all p-6"
              >
                <div className="space-y-5">
                  {/* Distinct Program Image Container with Light Film */}
                  <div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover filter brightness-105 contrast-95 group-hover:scale-105 transition-all duration-500" 
                    />
                    
                    {/* Light Film Overlay */}
                    <div className="film-overlay-light" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950 text-white font-mono text-[10px] font-bold">
                        {p.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/90 text-slate-800 border border-slate-200 font-mono text-[10px] font-bold">
                        {p.level}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 text-2xl font-black font-mono text-slate-900/60">
                      {p.id}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                      {p.title}
                    </h3>
                    <div className="text-xs font-sans font-semibold text-slate-600 uppercase tracking-wider">
                      {p.sub}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans pt-1">
                      {p.desc}
                    </p>
                  </div>

                  {/* Core Focus Tags */}
                  <div className="space-y-2 pt-1 border-t border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block">
                      KEY MOVEMENTS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.focus.map((f, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-mono text-slate-800 font-semibold border border-slate-200/60">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>

                <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-xs font-mono text-slate-600 font-semibold">
                    <span>{p.duration}</span> • <span>{p.frequency}</span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="dark-pill-btn px-4 py-1.5 text-xs font-mono font-bold uppercase cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>APPLY</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: EXERCISE DATABASE WITH LIGHT FILM IMAGES
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                <span>TECHNICAL CURRICULUM</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
                EXERCISE TECHNICAL LIBRARY.
              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-600">
                Calibrated biomechanical execution standards maintained on the gym floor.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search cue or exercise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full px-4 py-2.5 pl-10 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Muscle Group Filter (Black default, hover up, active/clicked white with black text) */}
          <div className="flex flex-wrap gap-2">
            {muscles.map(m => (
              <button
                key={m}
                onClick={() => setSelectedMuscle(m)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                  selectedMuscle === m
                    ? 'bg-white text-slate-950 border-2 border-slate-950 font-black shadow-sm'
                    : 'bg-slate-950 text-white border border-slate-950 hover:-translate-y-1 hover:shadow-md active:bg-white active:text-slate-950'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Exercise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExercises.map(ex => (
              <div 
                key={ex.id}
                className="frost-card frost-card-hover rounded-3xl overflow-hidden p-6 space-y-4 shadow-sm transition-all"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100">
                  <img 
                    src={ex.image} 
                    alt={ex.name} 
                    className="w-full h-full object-cover filter brightness-105 contrast-95" 
                  />
                  <div className="film-overlay-light" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950 text-white font-mono text-[9px] font-bold">
                    {ex.muscle}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-slate-900 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">
                    <span className="truncate">{ex.equipment}</span>
                    <span className="font-black text-slate-950 ml-2 shrink-0">{ex.sets}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-black text-lg text-slate-950 uppercase tracking-tight">
                    {ex.name}
                  </h4>
                  <div className="font-mono text-xs text-slate-700 font-bold">
                    {ex.reps}
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                    {ex.cues}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: THIS WEEK'S TRAINING & MOTIVATIONAL CARD
          Frosted styling with light film overlays
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>ACTIVE MICROCYCLE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
              THIS WEEK'S TRAINING.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left (7 cols): Daily Exercise Routine Guide with Exercise Names & Target Muscles */}
            <div className="lg:col-span-7 frost-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-md flex flex-col justify-between">
              <div className="space-y-5">
                {/* Header with Day Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
                      STRUCTURED PROTOCOL FOR BEGINNERS
                    </span>
                    <h3 className="font-display font-black text-xl text-slate-950 uppercase tracking-tight">
                      {beginnerDailyGuide[activeDayIdx].title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {beginnerDailyGuide.map((d, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDayIdx(i)}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                          activeDayIdx === i
                            ? 'bg-slate-950 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {d.day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Muscle Focus Banner */}
                <div className="p-3.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
                      TARGET MUSCLE GROUPS:
                    </span>
                    <span className="font-display font-bold text-sm text-slate-950">
                      {beginnerDailyGuide[activeDayIdx].target}
                    </span>
                  </div>
                  <span className="self-start sm:self-center text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-full bg-white text-slate-900 border border-slate-200 shadow-2xs">
                    {beginnerDailyGuide[activeDayIdx].split}
                  </span>
                </div>

                {/* Routine Summary */}
                <p className="text-xs font-sans text-slate-600 leading-relaxed">
                  {beginnerDailyGuide[activeDayIdx].summary}
                </p>

                {/* Exercise Routine Table/List */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase block">
                    PRESCRIBED EXERCISE SEQUENCE ({beginnerDailyGuide[activeDayIdx].exercises.length} MOVEMENTS):
                  </span>
                  <div className="space-y-2">
                    {beginnerDailyGuide[activeDayIdx].exercises.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all space-y-1.5 shadow-2xs"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-slate-950 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                              0{exIdx + 1}
                            </span>
                            <h4 className="font-display font-bold text-sm sm:text-base text-slate-950">
                              {ex.name}
                            </h4>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-slate-950 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full shrink-0">
                            {ex.sets}
                          </span>
                        </div>

                        <div className="pl-7 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600">
                            <span className="font-bold text-slate-900">TARGET:</span>
                            <span className="font-medium text-slate-700">{ex.muscles}</span>
                          </div>
                          <div className="text-[11px] font-sans text-slate-500 italic">
                            Cue: {ex.cue}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>WARMUP: 5-8 MIN DYNAMIC MOBILITY</span>
                <span className="text-slate-950 font-bold uppercase">BEGINNER CALIBRATED</span>
              </div>
            </div>

            {/* Right (5 cols): Dynamic Day Exercise Spotlight & Guidance */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden relative shadow-md flex flex-col justify-between p-8 sm:p-10 min-h-[420px] border border-slate-200/90">
              <img 
                src={beginnerDailyGuide[activeDayIdx].image} 
                alt={beginnerDailyGuide[activeDayIdx].title} 
                key={beginnerDailyGuide[activeDayIdx].day}
                className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-95 transition-all duration-500" 
              />
              
              {/* Light Film Overlay */}
              <div className="film-overlay-light" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/75 to-transparent" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3.5 py-1 rounded-full bg-slate-950 text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  {beginnerDailyGuide[activeDayIdx].day} • FOCUS
                </div>
                <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-900 font-mono text-[10px] font-bold uppercase shadow-2xs">
                  {beginnerDailyGuide[activeDayIdx].focusBadge}
                </div>
              </div>

              {/* Bottom Editorial Content */}
              <div className="relative z-10 space-y-4 pt-28">
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-black shadow-sm">
                  <Award className="w-5 h-5 stroke-[2.2]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block">
                    DAILY COACHING CUE
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-950 leading-tight">
                    {beginnerDailyGuide[activeDayIdx].title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-700 leading-relaxed font-medium">
                    "{beginnerDailyGuide[activeDayIdx].quote}"
                  </p>
                </div>

                <div className="pt-2 font-mono text-xs text-slate-800 flex items-center gap-3 font-bold border-t border-slate-200/60">
                  <span className="text-slate-950">{beginnerDailyGuide[activeDayIdx].exercises.length} MOVEMENTS</span>
                  <span>•</span>
                  <span>{beginnerDailyGuide[activeDayIdx].split} PHASE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: NUTRITION & ESSENTIAL DIET BLUEPRINTS
          Nutrients, whole foods, and macro strategies calibrated for distinct goals
      ========================================================================= */}
      <section className="py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-2xs font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span>METABOLIC &amp; DIETARY PROTOCOLS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950">
              FUEL YOUR OBJECTIVE.
            </h2>
            <p className="text-sm font-sans text-slate-600">
              Targeted macronutrient ratios, micro-density sources, and essential whole foods engineered for specific athletic adaptations.
            </p>
          </div>

          {/* 3 Goal-Specific Nutritional Frameworks */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Goal 1: Muscle Hypertrophy & Strength */}
            <div className="frost-card frost-card-hover rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                {/* Real High-Protein Beef & Rice Meal Photo */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop"
                    alt="High protein lean steak and complex carbohydrates"
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  <div className="film-overlay-light" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest uppercase bg-slate-950 text-white px-3 py-1 rounded-full shadow-xs">
                    SURPLUS • +400 KCAL
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      GOAL 01
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-900 border border-slate-200 font-mono text-[10px] font-bold uppercase">
                      MUSCLE &amp; POWER
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                      HYPERTROPHY ANABOLISM
                    </h3>
                    <div className="text-xs font-mono font-bold text-slate-700">
                      TARGET: HIGH MECHANICAL TENSION
                    </div>
                  </div>

                  {/* Macro Distribution */}
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200/80 space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">PROTEIN:</span>
                      <span className="font-black text-slate-950">2.0 – 2.2g / kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">CARBOHYDRATES:</span>
                      <span className="font-black text-slate-950">4.5 – 6.0g / kg (Glycogen)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">HEALTHY FATS:</span>
                      <span className="font-black text-slate-950">0.8 – 1.0g / kg</span>
                    </div>
                  </div>

                  {/* Essential Foods */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      KEY NUTRITIONAL STAPLES:
                    </span>
                    <ul className="text-xs font-sans text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong className="text-slate-950">Proteins:</strong> Grass-fed beef, chicken breast, eggs, Greek yogurt</li>
                      <li><strong className="text-slate-950">Carbs:</strong> Jasmine rice, oats, sweet potatoes, bananas</li>
                      <li><strong className="text-slate-950">Fats:</strong> Extra virgin olive oil, almonds, avocado</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-200/60 mt-4 text-[11px] font-mono text-slate-500 flex justify-between items-center">
                <span>TIMING: 4-5 MEALS / 3-4 HR INTERVALS</span>
              </div>
            </div>

            {/* Goal 2: Fat Loss & Recomposition */}
            <div className="frost-card frost-card-hover rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                {/* Real Lean Chicken & High-Volume Salad Meal Photo */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
                    alt="High volume nutrient dense salad and lean protein"
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  <div className="film-overlay-light" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest uppercase bg-slate-950 text-white px-3 py-1 rounded-full shadow-xs">
                    DEFICIT • -400 KCAL
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      GOAL 02
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-900 border border-slate-200 font-mono text-[10px] font-bold uppercase">
                      FAT LOSS &amp; LEAN
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                      LEAN RECOMPOSITION
                    </h3>
                    <div className="text-xs font-mono font-bold text-slate-700">
                      TARGET: MUSCLE SPARING DEFICIT
                    </div>
                  </div>

                  {/* Macro Distribution */}
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200/80 space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">PROTEIN:</span>
                      <span className="font-black text-slate-950">2.2 – 2.5g / kg (High Satiety)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">CARBOHYDRATES:</span>
                      <span className="font-black text-slate-950">2.0 – 2.5g / kg (Peri-Workout)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">HEALTHY FATS:</span>
                      <span className="font-black text-slate-950">0.6 – 0.8g / kg</span>
                    </div>
                  </div>

                  {/* Essential Foods */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      KEY NUTRITIONAL STAPLES:
                    </span>
                    <ul className="text-xs font-sans text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong className="text-slate-950">Proteins:</strong> White fish, egg whites, lean turkey, cottage cheese</li>
                      <li><strong className="text-slate-950">High-Volume Carbs:</strong> Steamed broccoli, asparagus, berries, quinoa</li>
                      <li><strong className="text-slate-950">Micronutrients:</strong> Chia seeds, walnuts, hydration electrolytes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-200/60 mt-4 text-[11px] font-mono text-slate-500 flex justify-between items-center">
                <span>PRIORITY: MAXIMUM SATIETY &amp; LBM RETENTION</span>
              </div>
            </div>

            {/* Goal 3: Endurance & Aerobic Performance */}
            <div className="frost-card frost-card-hover rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                {/* Real Grilled Salmon & Complex Grain Bowl Photo */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop"
                    alt="Grilled salmon with wild rice and vegetable stamina fuel"
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  <div className="film-overlay-light" />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold tracking-widest uppercase bg-slate-950 text-white px-3 py-1 rounded-full shadow-xs">
                    ISO-CALORIC • MATCH OUTPUT
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                      GOAL 03
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-900 border border-slate-200 font-mono text-[10px] font-bold uppercase">
                      ENDURANCE &amp; STAMINA
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-950">
                      METABOLIC STAMINA
                    </h3>
                    <div className="text-xs font-mono font-bold text-slate-700">
                      TARGET: MITOCHONDRIAL GLYCOGEN
                    </div>
                  </div>

                  {/* Macro Distribution */}
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200/80 space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">PROTEIN:</span>
                      <span className="font-black text-slate-950">1.6 – 1.8g / kg (Tissue Repair)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">CARBOHYDRATES:</span>
                      <span className="font-black text-slate-950">6.0 – 8.0g / kg (Endurance Fuel)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">HEALTHY FATS:</span>
                      <span className="font-black text-slate-950">1.0 – 1.2g / kg</span>
                    </div>
                  </div>

                  {/* Essential Foods */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      KEY NUTRITIONAL STAPLES:
                    </span>
                    <ul className="text-xs font-sans text-slate-700 space-y-1.5 list-disc list-inside">
                      <li><strong className="text-slate-950">Complex Carbs:</strong> Rolled oats, brown rice, whole grain pasta, beet juice</li>
                      <li><strong className="text-slate-950">Lean Recovery:</strong> Wild salmon (Omega-3s), whey, lean poultry</li>
                      <li><strong className="text-slate-950">Hydration &amp; Salts:</strong> Coconut water, sea salt, magnesium glycinate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-200/60 mt-4 text-[11px] font-mono text-slate-500 flex justify-between items-center">
                <span>INTRA-WORKOUT: GLUCOSE + ELECTROLYTE FLUIDS</span>
              </div>
            </div>

          </div>

          {/* Quick Dietary Principles Checklist Bar */}
          <div className="frost-card rounded-3xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6 font-mono shadow-sm border border-slate-200">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">DAILY HYDRATION</span>
              <div className="font-display font-black text-xl sm:text-2xl text-slate-950">3.5 – 4.5 LITERS</div>
              <p className="text-xs font-sans text-slate-600">With 500mg sodium per liter during high sweat rate training sessions.</p>
            </div>

            <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-slate-200 py-4 sm:py-0 sm:px-6">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">PROTEIN LEUCINE THRESHOLD</span>
              <div className="font-display font-black text-xl sm:text-2xl text-slate-950">3.0G PER FEEDING</div>
              <p className="text-xs font-sans text-slate-600">Triggers maximal mTOR muscle protein synthesis per main meal.</p>
            </div>

            <div className="space-y-1 sm:pl-6">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">MICRONUTRIENT RATIO</span>
              <div className="font-display font-black text-xl sm:text-2xl text-slate-950">80/20 WHOLE FOOD RULE</div>
              <p className="text-xs font-sans text-slate-600">80% minimally processed single-ingredient nutrient-dense staples.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: CALLOUT BANNER
      ========================================================================= */}
      <section className="py-20 border-b border-slate-200/80 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#BFC9E2] via-[#D4DAF0] to-[#CADDEE] p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 border border-white shadow-lg">
            <div className="film-grain absolute inset-0 opacity-20 pointer-events-none" />

            <div className="relative z-10 space-y-2 text-center sm:text-left max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/70 text-slate-900 font-mono text-[10px] font-bold tracking-wider uppercase">
                COMMISSION YOUR PROTOCOL
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-slate-950 leading-tight">
                READY TO START? <br />
                JOIN IRONFORGE.
              </h3>
              <p className="text-sm sm:text-base font-sans text-slate-700">
                Choose your athletic protocol and begin training under certified strength coaches today.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onOpenBooking}
                className="dark-pill-btn px-9 py-4 text-sm font-display tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>JOIN IRONFORGE</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
