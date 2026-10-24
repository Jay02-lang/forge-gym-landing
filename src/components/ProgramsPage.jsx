import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  ChevronRight,
  Dumbbell,
  Clock,
  Layers,
  Filter
} from 'lucide-react';
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  StaggerItem,
  SlideFromLeft,
  SlideFromRight
} from './ScrollAnimations';

const PROGRAMS_DATA = [
  {
    id: '01',
    category: 'STRENGTH',
    title: 'STRENGTH FOUNDATIONS',
    sub: 'BUILD FULL-BODY POWER & CONFIDENCE',
    duration: '12 WEEKS',
    frequency: '4 DAYS PER WEEK',
    level: 'BEGINNER TO ADVANCED',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    desc: 'Learn proper squat, bench, and deadlift technique with safe, steady weekly weight increases.',
    focus: ['Barbell Squat', 'Bench Press', 'Deadlift', 'Farmer Carries']
  },
  {
    id: '02',
    category: 'MUSCLE',
    title: 'LEAN MUSCLE BLUEPRINT',
    sub: 'SHAPING AND MUSCLE DEFINITION',
    duration: '10 WEEKS',
    frequency: '5 DAYS PER WEEK',
    level: 'ALL LEVELS',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    desc: 'Build balanced muscle tone and overall definition with guided exercises that remove all guesswork.',
    focus: ['Dumbbell Incline Press', 'Hack Squat', 'Chest-Supported Row', 'Arm Training']
  },
  {
    id: '03',
    category: 'FAT LOSS',
    title: 'FAT LOSS & TONING',
    sub: 'BURN CALORIES AND STAY STRONG',
    duration: '8 WEEKS',
    frequency: '4 DAYS PER WEEK',
    level: 'ALL LEVELS',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop',
    desc: 'Combine weight training with energizing cardio circuits to burn fat while staying strong and toned.',
    focus: ['Kettlebell Swings', 'Sled Pushes', 'Dumbbell Circuits', 'Incline Walks']
  },
  {
    id: '04',
    category: 'CONDITIONING',
    title: 'CARDIO & STAMINA (HYROX)',
    sub: 'HEART HEALTH, ENERGY AND ENDURANCE',
    duration: '8 WEEKS',
    frequency: '3 DAYS PER WEEK',
    level: 'ALL LEVELS',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop',
    desc: 'Boost your endurance, stamina, and daily energy with rowers, ski ergs, air bikes, and turf sled work.',
    focus: ['Air Bike Sprints', 'Concept2 Rower', 'SkiErg Intervals', 'Turf Sled Drags']
  },
  {
    id: '05',
    category: 'ATHLETIC',
    title: 'ATHLETIC AGILITY',
    sub: 'COORDINATION, BALANCE AND POWER',
    duration: '12 WEEKS',
    frequency: '4 DAYS PER WEEK',
    level: 'ALL LEVELS',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    desc: 'Improve your athletic balance, jump power, and whole-body coordination with dynamic movements.',
    focus: ['Power Clean', 'Box Jumps', 'Medicine Ball Throws', 'Trap Bar Jumps']
  },
  {
    id: '06',
    category: 'STRENGTH',
    title: 'BARBELL MASTERY',
    sub: 'TECHNIQUE REFINEMENT AND CONTROL',
    duration: '14 WEEKS',
    frequency: '4 DAYS PER WEEK',
    level: 'INTERMEDIATE TO ADVANCED',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Fine-tune your competitive lifting technique with direct coach video feedback and assistance exercises.',
    focus: ['Paused Bench Press', 'Box Squats', 'Deficit Deadlifts', 'Core Reinforcement']
  }
];

const EXERCISES_DATABASE = [
  {
    id: 'ex-1',
    name: 'BARBELL BACK SQUAT',
    muscle: 'QUADS • GLUTES',
    equipment: 'Eleiko IPF Bar & Calibrated Discs',
    difficulty: 'ALL LEVELS',
    sets: '3 SETS × 8-10 REPS',
    reps: 'Controlled tempo • Comfortable weight',
    cues: 'Keep your chest tall, push knees out over toes, and sit down between your hips with flat feet.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-2',
    name: 'COMPETITION BENCH PRESS',
    muscle: 'CHEST • TRICEPS',
    equipment: 'Eleiko Competition Bench & Bar',
    difficulty: 'ALL LEVELS',
    sets: '3 SETS × 8-10 REPS',
    reps: 'Smooth touch on chest • Controlled press',
    cues: 'Squeeze your shoulder blades back, plant feet flat on the floor, and press bar straight up.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-3',
    name: 'CONVENTIONAL DEADLIFT',
    muscle: 'BACK • GLUTES • HAMSTRINGS',
    equipment: 'Eleiko Calibrated Bar & Jack',
    difficulty: 'ALL LEVELS',
    sets: '3 SETS × 5 REPS',
    reps: 'Reset briefly on the floor each rep',
    cues: 'Keep your back flat, hold bar close to your shins, and stand up tall by pushing the floor away.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-4',
    name: 'TURF SLED SPRINTS',
    muscle: 'LEGS • CARDIO STAMINA',
    equipment: 'Rogue Dog Sled on 40m Turf',
    difficulty: 'ALL LEVELS',
    sets: '6 ROUNDS × 30 METERS',
    reps: '60 seconds rest between pushes',
    cues: 'Lean forward into the handles, keep arms straight, and drive steadily through the balls of your feet.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-5',
    name: 'ECHO BIKE INTERVALS',
    muscle: 'WHOLE BODY CARDIO',
    equipment: 'Rogue Echo Bike',
    difficulty: 'ALL LEVELS',
    sets: '10 ROUNDS × 20s WORK • 40s REST',
    reps: 'Smooth cadence • Deep nasal breathing',
    cues: 'Push and pull with your arms while pedaling smooth and steady. Breathe deeply during the rest.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ex-6',
    name: 'CHEST-SUPPORTED ROW',
    muscle: 'UPPER BACK • POSTURE',
    equipment: 'Incline Bench & Dumbbells',
    difficulty: 'ALL LEVELS',
    sets: '3 SETS × 10-12 REPS',
    reps: '1-second squeeze at the top',
    cues: 'Keep your chest flat on the pad and pull the dumbbells back toward your hips without swinging.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ProgramsPage({ onOpenBooking }) {
  const [selectedObjective, setSelectedObjective] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuscle, setSelectedMuscle] = useState('ALL');
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  const beginnerDailyGuide = [
    {
      day: 'DAY 01',
      title: 'UPPER BODY STRENGTH',
      split: 'CHEST, BACK & ARMS',
      target: 'Chest, Back, Shoulders & Arms',
      summary: 'Build upper body pressing and pulling strength with safe dumbbell movements.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'BENCH PRESS & ROWS',
      quote: 'Control the weight on the way down. Good form builds great strength.',
      exercises: [
        { name: 'Dumbbell Bench Press', muscles: 'Chest & Arms', sets: '3 sets × 10 reps', cue: 'Keep elbows at a comfortable 45-degree angle and press smoothly' },
        { name: 'Lat Pulldown', muscles: 'Back & Biceps', sets: '3 sets × 12 reps', cue: 'Pull handle down to collarbone while sitting upright' },
        { name: 'Dumbbell Shoulder Press', muscles: 'Shoulders', sets: '3 sets × 10 reps', cue: 'Sit tall, keep core braced, and press gently overhead' },
        { name: 'Seated Cable Row', muscles: 'Middle Back', sets: '3 sets × 12 reps', cue: 'Pull handle toward your navel while keeping shoulders relaxed' },
        { name: 'Triceps Cable Pushdown', muscles: 'Arms', sets: '2 sets × 15 reps', cue: 'Keep elbows still by your ribs and extend down fully' }
      ]
    },
    {
      day: 'DAY 02',
      title: 'LOWER BODY & LEGS',
      split: 'LEGS & CORE',
      target: 'Quadriceps, Glutes & Hamstrings',
      summary: 'Learn foundational squat and leg movements with comfortable weights.',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'GOBLET SQUAT & LEG PRESS',
      quote: 'Push through your whole foot. Steady balance comes from the ground up.',
      exercises: [
        { name: 'Goblet Squat (Dumbbell or Kettlebell)', muscles: 'Legs & Core', sets: '3 sets × 10 reps', cue: 'Hold weight at chest, sit back smoothly, and stand tall' },
        { name: 'Dumbbell Romanian Deadlift', muscles: 'Hamstrings & Glutes', sets: '3 sets × 10 reps', cue: 'Slight knee bend, push hips back until you feel a gentle stretch' },
        { name: 'Seated Leg Press Machine', muscles: 'Thighs & Legs', sets: '3 sets × 12 reps', cue: 'Feet shoulder-width on footplate, smooth down and up' },
        { name: 'Standing Calf Raise', muscles: 'Calves', sets: '3 sets × 15 reps', cue: 'Pause at the top for one full second' },
        { name: 'Plank Hold', muscles: 'Core Stability', sets: '3 sets × 30s holds', cue: 'Keep your body in a straight line and breathe naturally' }
      ]
    },
    {
      day: 'DAY 03',
      title: 'ACTIVE REST & MOBILITY',
      split: 'RELAXATION & STRETCHING',
      target: 'Hips, Back, Shoulders & Heart',
      isRest: true,
      summary: 'Gentle walking, light stretching, and deep breathing to feel refreshed.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'LIGHT STRETCH & WALK',
      quote: 'Rest and sleep are when your body actually builds muscle and recharges energy.',
      exercises: [
        { name: 'Relaxed Incline Walk', muscles: 'Heart & General Stamina', sets: '20-30 minutes', cue: 'Comfortable walking pace where you can easily speak full sentences' },
        { name: 'Cat-Cow Back Stretch', muscles: 'Spine & Lower Back', sets: '2 sets × 10 gentle breaths', cue: 'Arch and round your back slowly with calm breathing' },
        { name: 'Hip Flexor Stretch', muscles: 'Hips & Thighs', sets: '2 sets × 45s each side', cue: 'Kneel gently and lean forward slightly until you feel a comfortable stretch' },
        { name: 'Glute & Hamstring Stretch', muscles: 'Hips & Legs', sets: '2 sets × 45s each side', cue: 'Sit comfortably and lean forward from your chest' }
      ]
    },
    {
      day: 'DAY 04',
      title: 'BACK, GLUTES & POSTURE',
      split: 'POSTURE & STABILITY',
      target: 'Back, Glutes, Hamstrings & Core',
      summary: 'Strengthen your back and core to counter sitting at a desk all day.',
      image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'TRAP BAR & ROWS',
      quote: 'A strong back keeps your posture upright and your lower back feeling great.',
      exercises: [
        { name: 'Trap Bar Deadlift', muscles: 'Legs, Glutes & Back', sets: '3 sets × 8 reps', cue: 'Stand inside the hexagonal bar, keep chest up, and stand up smoothly' },
        { name: 'Incline Dumbbell Row', muscles: 'Upper & Middle Back', sets: '3 sets × 10 reps', cue: 'Chest on incline bench to support your spine while pulling' },
        { name: 'Hamstring Leg Curl', muscles: 'Hamstrings', sets: '3 sets × 12 reps', cue: 'Smooth curl up and controlled lowering on the machine' },
        { name: 'Cable Face Pulls', muscles: 'Shoulders & Posture', sets: '3 sets × 15 reps', cue: 'Pull rope toward eye level to reinforce upper back posture' },
        { name: 'Hanging Knee Raises', muscles: 'Abdominals', sets: '3 sets × 12 reps', cue: 'Smoothly bring knees up toward chest without swinging' }
      ]
    },
    {
      day: 'DAY 05',
      title: 'ARMS, SHOULDERS & CARDIO',
      split: 'ARMS & STAMINA',
      target: 'Arms, Shoulders & Light Cardio',
      summary: 'Tone your shoulders and enjoy smooth low-impact rowing for extra energy.',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=800&auto=format&fit=crop',
      focusBadge: 'SHOULDERS & ROWING',
      quote: 'Finish the week feeling accomplished and full of energy.',
      exercises: [
        { name: 'Dumbbell Side Raises', muscles: 'Shoulders', sets: '3 sets × 12 reps', cue: 'Lift dumbbells out to sides until arms are parallel to the floor' },
        { name: 'Dumbbell Bicep Curls', muscles: 'Biceps', sets: '3 sets × 12 reps', cue: 'Keep elbows tucked by your sides and curl with control' },
        { name: 'Overhead Rope Tricep Extension', muscles: 'Triceps', sets: '3 sets × 12 reps', cue: 'Extend arms overhead with smooth, steady motion' },
        { name: 'Concept2 Rower Steady Cardio', muscles: 'Full-Body Conditioning', sets: '12-15 minutes', cue: 'Push with legs first, lean back slightly, then pull arms to ribs' }
      ]
    }
  ];

  const objectives = ['ALL', 'STRENGTH', 'MUSCLE', 'FAT LOSS', 'CONDITIONING', 'ATHLETIC'];
  const muscles = ['ALL', 'QUADS • GLUTES', 'CHEST • TRICEPS', 'BACK • GLUTES • HAMSTRINGS', 'LEGS • CARDIO STAMINA', 'WHOLE BODY CARDIO', 'UPPER BACK • POSTURE'];

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
    <div className="bg-[#07080A] text-[#F8FAFC] min-h-screen selection:bg-[#FF5500] selection:text-black">
      
      {/* =========================================================================
          SECTION 01: CARD-FREE PROTOCOLS HERO
          - Zero cards, zero slashes, zero coordinates
          - Simple, welcoming, high-impact language
          - Competition Orange Accent (#FF5500)
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.08] min-h-[85svh] flex flex-col justify-between">
        
        {/* Full-Bleed Atmospheric Background Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1800&auto=format&fit=crop"
            alt="Athletes on competition platforms"
            className="w-full h-full object-cover filter brightness-[0.2] contrast-125 saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-[#07080A]/85" />
          <div className="film-grain absolute inset-0 opacity-40" />
        </div>

        {/* Top Wireframe Architectural Line */}
        <div className="relative z-10 border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-[#07080A]/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[#FF5500] font-bold tracking-wider">[ 06 DISCIPLINES ]</span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="hidden sm:inline">CLEAR STEPS • SAFE PROGRESS</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-[#FF5500] font-bold tracking-wider">ALL FITNESS LEVELS</span>
              <span className="text-white/20">•</span>
              <span>COACH SUPERVISED</span>
            </div>
          </div>
        </div>

        {/* Hero Stage (No Cards, Short Sentences, Approachable English) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24 my-auto text-left">
          <div className="space-y-6 sm:space-y-8 max-w-5xl">
            
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-black">
                PROVEN WORKOUT PROGRAMS
              </span>
              <span className="text-white/30 hidden xs:inline">•</span>
              <span className="text-slate-400 hidden xs:inline text-[11px]">STEP-BY-STEP PROGRESS FOR EVERYONE</span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="hero-monument-title text-white">
                SIMPLE.<br />
                EFFECTIVE.<br />
                <span className="text-[#FF5500]">PROVEN.</span>
              </h1>
            </div>

            <p className="hero-editorial-lead text-slate-300 max-w-2xl font-normal">
              Six clear workout programs. Friendly coach guidance. Steady progress from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking ? onOpenBooking({ program: 'TRAINING PROGRAMS' }) : null}
                className="bg-[#FF5500] hover:bg-[#FF6A1A] text-black px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-display font-black uppercase tracking-wider inline-flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.35)] transition-all duration-150 min-h-[48px] active:scale-[0.98]"
              >
                <span>FIND YOUR PROGRAM</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 02: EDITORIAL PROGRAM DIRECTORY (CLEAR & APPROACHABLE)
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[#FF5500] block">
                ACTIVE TRAINING PROGRAMS ({filteredPrograms.length})
              </span>
              <p className="text-xs font-sans text-slate-400">
                Clear workout pathways tailored to your specific personal goals.
              </p>
            </div>

            {/* Objective Filter Pills - Mobile Horizontal Scrollable */}
            <div className="flex overflow-x-auto no-scrollbar py-1 gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              {objectives.map(obj => (
                <button
                  key={obj}
                  onClick={() => setSelectedObjective(obj)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap min-h-[38px] ${
                    selectedObjective === obj
                      ? 'bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.35)]'
                      : 'text-slate-400 hover:text-white border border-white/10 hover:border-white/20 active:bg-white/[0.05]'
                  }`}
                >
                  {obj}
                </button>
              ))}
            </div>
          </div>

          {/* Expansive Protocol Rows */}
          <div className="divide-y divide-white/[0.08]">
            {filteredPrograms.map(p => (
              <div 
                key={p.id} 
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start hover:bg-white/[0.02] transition-colors px-1 sm:px-4"
              >
                {/* Photo Plate */}
                <div className="lg:col-span-4 relative h-56 sm:h-64 lg:h-60 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 w-full">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-105" 
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#FF5500] text-black font-mono text-[10px] font-bold">
                      {p.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#07080A]/90 text-slate-300 border border-white/15 font-mono text-[10px] font-bold">
                      {p.level}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-xl font-black text-[#FF5500]">
                    {p.id}
                  </div>
                </div>

                {/* Narrative & Focus */}
                <div className="lg:col-span-6 space-y-3 w-full">
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {p.sub} • <span className="text-white">{p.duration}</span> • <span>{p.frequency}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {p.desc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold block">
                      KEY MOVEMENTS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.focus.map((f, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-full bg-white/[0.05] text-[10px] font-mono text-slate-300 font-semibold border border-white/10">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end w-full sm:w-auto">
                  <button
                    onClick={() => onOpenBooking ? onOpenBooking({ program: p.title }) : null}
                    className="w-full sm:w-auto bg-white hover:bg-[#FF5500] hover:text-black text-black px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase cursor-pointer inline-flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-[0.98] min-h-[44px]"
                  >
                    <span>START PROGRAM</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: KEY EXERCISE LIBRARY (SIMPLE FORM TIPS)
      ========================================================================= */}
      <section className="py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-[#FF5500] font-bold">02</span>
                <span>•</span>
                <span>EXERCISE LIBRARY</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
                HOW TO DO THE KEY LIFTS.
              </h2>
            </div>

            {/* Search Input (16px on mobile prevents zoom) */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search exercise or tip..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/10 rounded-full px-4 py-2.5 pl-10 text-base sm:text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500]/50 transition-colors min-h-[44px]"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Muscle Group Filter - Mobile Horizontal Swipe */}
          <div className="flex overflow-x-auto no-scrollbar py-1 gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {muscles.map(m => (
              <button
                key={m}
                onClick={() => setSelectedMuscle(m)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[38px] ${
                  selectedMuscle === m
                    ? 'bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.35)]'
                    : 'text-slate-400 hover:text-white border border-white/10 hover:border-white/20 active:bg-white/[0.05]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Exercise Rows */}
          <div className="divide-y divide-white/[0.08]">
            {filteredExercises.map(ex => (
              <div 
                key={ex.id}
                className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-start lg:items-center hover:bg-white/[0.02] transition-colors px-1 sm:px-4"
              >
                <div className="lg:col-span-3 space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#FF5500] uppercase tracking-wider block">
                    {ex.muscle}
                  </span>
                  <h4 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    {ex.name}
                  </h4>
                </div>

                <div className="lg:col-span-3 font-mono text-xs space-y-0.5">
                  <div className="text-white font-bold">{ex.sets}</div>
                  <div className="text-slate-400">{ex.reps}</div>
                  <div className="text-slate-500 text-[11px] truncate">{ex.equipment}</div>
                </div>

                <div className="lg:col-span-6 text-xs font-sans text-slate-300 leading-relaxed italic">
                  "{ex.cues}"
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: SAMPLE WEEKLY SCHEDULE (CLEAR & PRACTICAL)
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 text-left">
          
          <div className="space-y-2 pb-6 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span className="text-[#FF5500] font-bold">03</span>
              <span>•</span>
              <span>SAMPLE WEEKLY SCHEDULE</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              HOW YOUR WEEK LOOKS.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 7 cols: Day Selector & Movement Sequence */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Day Pills - Horizontal Touch Swipe on Mobile */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap border-b border-white/[0.08]">
                {beginnerDailyGuide.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveDayIdx(i)}
                    className={`px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-150 cursor-pointer whitespace-nowrap min-h-[40px] ${
                      activeDayIdx === i
                        ? 'bg-[#FF5500] text-black shadow-[0_0_12px_rgba(255,85,0,0.35)]'
                        : 'text-slate-400 hover:text-white border border-white/10 active:bg-white/[0.05]'
                    }`}
                  >
                    {d.day}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF5500] block">
                  {beginnerDailyGuide[activeDayIdx].split} • TARGET: {beginnerDailyGuide[activeDayIdx].target}
                </span>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                  {beginnerDailyGuide[activeDayIdx].title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                  {beginnerDailyGuide[activeDayIdx].summary}
                </p>
              </div>

              {/* Movement Sequence List */}
              <div className="divide-y divide-white/[0.08] pt-2">
                {beginnerDailyGuide[activeDayIdx].exercises.map((ex, exIdx) => (
                  <div key={exIdx} className="py-3.5 sm:py-4 flex items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-xs font-bold text-[#FF5500]">0{exIdx + 1}</span>
                        <h4 className="font-display font-bold text-sm sm:text-base text-white">{ex.name}</h4>
                      </div>
                      <div className="text-[11px] font-sans text-slate-400 pl-6 sm:pl-7">
                        Form Tip: {ex.cue}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-white shrink-0 bg-white/[0.04] px-2.5 sm:px-3 py-1 rounded-full border border-white/10 text-right">
                      {ex.sets}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right 5 cols: Photographic Spotlight */}
            <div className="lg:col-span-5 space-y-4 w-full">
              <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 w-full">
                <img 
                  src={beginnerDailyGuide[activeDayIdx].image} 
                  alt={beginnerDailyGuide[activeDayIdx].title} 
                  key={beginnerDailyGuide[activeDayIdx].day}
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-transparent" />
                
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#FF5500] text-black font-bold text-[11px]">
                    {beginnerDailyGuide[activeDayIdx].day}
                  </span>
                  <span className="text-white/80 text-[11px] truncate max-w-[180px]">
                    {beginnerDailyGuide[activeDayIdx].focusBadge}
                  </span>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-1.5 sm:space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                    COACHING TIP OF THE DAY
                  </span>
                  <p className="text-xs sm:text-sm font-sans text-white italic leading-relaxed">
                    "{beginnerDailyGuide[activeDayIdx].quote}"
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: SIMPLE NUTRITION & MEAL GUIDELINES
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 text-left">
          
          <div className="space-y-2 pb-6 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span className="text-[#FF5500] font-bold">04</span>
              <span>•</span>
              <span>SIMPLE NUTRITION GUIDELINES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              EAT FOR YOUR GOAL.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'EAT TO BUILD MUSCLE',
                tag: 'SLIGHT CALORIE SURPLUS',
                target: 'STEADY MUSCLE GROWTH',
                p: 'Paneer, Eggs, Chicken, Tofu, Whey',
                c: 'Rice, Oats, Sweet Potatoes, Fruits',
                f: 'Nuts, Seeds, Olive Oil, Peanut Butter',
                timing: '3-4 balanced meals spaced throughout your day'
              },
              {
                num: '02',
                title: 'EAT TO BURN FAT',
                tag: 'HEALTHY DEFICIT',
                target: 'FAT LOSS & LEAN TONE',
                p: 'Lean Protein with every meal',
                c: 'Whole Grains, Green Veggies, Berries',
                f: 'Moderate Avocado, Almonds, Ghee',
                timing: 'High-protein meals with plenty of fresh vegetables'
              },
              {
                num: '03',
                title: 'ALL-DAY ENERGY & STAMINA',
                tag: 'BALANCED DAILY FUEL',
                target: 'DAILY ENERGY & WORKOUT FUEL',
                p: 'Quality protein to aid muscle recovery',
                c: 'Bananas, Whole Oats, Brown Rice',
                f: 'Omega-rich Walnuts, Chia, Flax Seeds',
                timing: 'Balanced carbs and clean hydration for active days'
              }
            ].map((f, i) => (
              <div key={i} className="space-y-6 pb-6 border-b md:border-b-0 md:border-r border-white/[0.08] md:pr-8 last:border-r-0">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-[#FF5500] font-bold">GUIDE {f.num}</span>
                    <span className="text-white font-bold">{f.tag}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                    {f.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    FOCUS: {f.target}
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs border-y border-white/[0.08] py-4">
                  <div className="space-y-0.5">
                    <span className="text-slate-400 text-[11px] block">PROTEIN SOURCES:</span>
                    <span className="text-white font-bold block">{f.p}</span>
                  </div>
                  <div className="space-y-0.5 pt-1">
                    <span className="text-slate-400 text-[11px] block">ENERGY CARBS:</span>
                    <span className="text-white font-bold block">{f.c}</span>
                  </div>
                  <div className="space-y-0.5 pt-1">
                    <span className="text-slate-400 text-[11px] block">HEALTHY FATS:</span>
                    <span className="text-white font-bold block">{f.f}</span>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400">
                  {f.timing}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: CALLOUT
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                READY TO START?
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                BEGIN YOUR TRAINING <br />
                AT IRONFORGE.
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-400">
                Choose your workout program and begin training under friendly, certified strength coaches today.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <button
                onClick={() => onOpenBooking ? onOpenBooking({ program: 'JOIN IRONFORGE' }) : null}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FF5500] text-black font-display font-black text-xs uppercase tracking-wider hover:bg-[#FF6A1A] transition-all cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.35)] inline-flex items-center justify-center gap-2 active:scale-[0.98] min-h-[48px]"
              >
                <span>CHOOSE YOUR PROGRAM</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
