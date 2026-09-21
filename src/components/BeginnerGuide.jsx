import React, { useState } from 'react';
import { Dumbbell, Utensils, Calendar, ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2, Flame, Sparkles } from 'lucide-react';

export default function BeginnerGuide({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('exercises');
  const [goal, setGoal] = useState('muscle'); // 'fatloss' | 'muscle' | 'longevity'
  const [bodyWeight, setBodyWeight] = useState(175);

  // Compute nutrition recommendations based on bodyweight and goal
  const dailyProtein = Math.round(bodyWeight * (goal === 'fatloss' ? 1.0 : 0.85));
  const calorieBaseline = Math.round(
    goal === 'fatloss'
      ? bodyWeight * 11.5 // Moderate deficit
      : goal === 'muscle'
      ? bodyWeight * 15.5 // Moderate surplus
      : bodyWeight * 13.5 // Maintenance
  );
  const waterOz = Math.round(bodyWeight * 0.6);

  return (
    <section id="beginner-guide" className="py-24 bg-[#09090b] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>FOUNDATIONS TRACK • ZERO EXPERIENCE REQUIRED</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
            START HERE: <span className="text-yellow-400">THE NEWBIE BLUEPRINT.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
            Elite facilities shouldn&apos;t feel intimidating. Here is the exact, evidence-based roadmap for your first 8 weeks—no bro-science, no gatekeeping, and no complex routines.
          </p>
        </div>

        {/* Interactive Starter Estimator */}
        <div className="bg-[#0e0e12] border-2 border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 mb-16">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-800 pb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-yellow-400 block mb-1">
                STEP 1: SELECT YOUR PRIMARY GOAL
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  { id: 'muscle', label: 'BUILD MUSCLE & STRENGTH' },
                  { id: 'fatloss', label: 'FAT LOSS & RECOMPOSITION' },
                  { id: 'longevity', label: 'GENERAL HEALTH & LONGEVITY' },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                      goal === g.id
                        ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]'
                        : 'bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Slider */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 min-w-[260px] space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-400 uppercase">CURRENT WEIGHT</span>
                <span className="text-yellow-400 font-bold text-base">{bodyWeight} LBS</span>
              </div>
              <input
                type="range"
                min="100"
                max="320"
                step="5"
                value={bodyWeight}
                onChange={(e) => setBodyWeight(parseInt(e.target.value))}
                className="w-full accent-yellow-400 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>100 LBS</span>
                <span>210 LBS</span>
                <span>320 LBS</span>
              </div>
            </div>
          </div>

          {/* Real-time Personalized Targets */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">DAILY PROTEIN TARGET</span>
              <div className="font-display font-black text-3xl text-yellow-400 mt-1">
                {dailyProtein} <span className="text-sm font-mono text-white">G / DAY</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 mt-1 block">
                {goal === 'fatloss' ? '1.0g per lb (Muscle preservation)' : '0.85g per lb (Optimal synthesis)'}
              </span>
            </div>

            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">CALORIE BASELINE</span>
              <div className="font-display font-black text-3xl text-white mt-1">
                {calorieBaseline} <span className="text-sm font-mono text-zinc-400">KCAL</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 mt-1 block">
                {goal === 'fatloss' ? 'Moderate deficit for fat loss' : goal === 'muscle' ? 'Controlled lean surplus' : 'Maintenance fuel'}
              </span>
            </div>

            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">TRAINING FREQUENCY</span>
              <div className="font-display font-black text-3xl text-white mt-1">
                3 <span className="text-sm font-mono text-zinc-400">DAYS / WK</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 mt-1 block">
                Full-body foundational split
              </span>
            </div>

            <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800/80">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">MINIMUM HYDRATION</span>
              <div className="font-display font-black text-3xl text-white mt-1">
                {waterOz} <span className="text-sm font-mono text-zinc-400">OZ / DAY</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 mt-1 block">
                Maintains joint fluid & cellular energy
              </span>
            </div>
          </div>

        </div>

        {/* Tabbed Foundations Content */}
        <div className="space-y-8">
          
          {/* Tabs Navigation */}
          <div className="flex border-b border-zinc-800 gap-6">
            <button
              onClick={() => setActiveTab('exercises')}
              className={`pb-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
                activeTab === 'exercises'
                  ? 'border-yellow-400 text-yellow-400'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>THE 5 ESSENTIAL MOVEMENTS</span>
            </button>

            <button
              onClick={() => setActiveTab('routine')}
              className={`pb-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
                activeTab === 'routine'
                  ? 'border-yellow-400 text-yellow-400'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>3-DAY STARTER SCHEDULE</span>
            </button>

            <button
              onClick={() => setActiveTab('diet')}
              className={`pb-4 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 border-b-2 ${
                activeTab === 'diet'
                  ? 'border-yellow-400 text-yellow-400'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>NO-NONSENSE NUTRITION RULES</span>
            </button>
          </div>

          {/* TAB 1: 5 Essential Movements */}
          {activeTab === 'exercises' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-xs font-bold">01. SQUAT PATTERN</span>
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">LOWER BODY</span>
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">GOBLET SQUAT</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Hold a dumbbell vertically against your chest. Squat down between your hips with feet shoulder-width apart. Teaches upright torso posture without spinal strain.
                </p>
                <div className="pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                  <strong className="text-white">Goal:</strong> 3 sets of 8-10 reps • Rest 90 sec
                </div>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-xs font-bold">02. HINGE PATTERN</span>
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">POSTERIOR CHAIN</span>
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">ROMANIAN DEADLIFT (RDL)</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  With dumbbells at your thighs, push your hips back like you&apos;re closing a car door with your glutes. Keeps the lower back neutral and strengthens hamstrings safely.
                </p>
                <div className="pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                  <strong className="text-white">Goal:</strong> 3 sets of 8-10 reps • Rest 90 sec
                </div>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-xs font-bold">03. HORIZONTAL PUSH</span>
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">CHEST & ARMS</span>
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">DUMBBELL BENCH PRESS</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Dumbbells allow natural wrist and shoulder rotation compared to a locked barbell. Lower weights to chest level with forearms vertical, then press back up.
                </p>
                <div className="pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                  <strong className="text-white">Goal:</strong> 3 sets of 8-12 reps • Rest 90 sec
                </div>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-xs font-bold">04. HORIZONTAL PULL</span>
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">UPPER BACK</span>
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">CHEST-SUPPORTED ROW</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Lie face down on an incline bench to support your chest. Pull dumbbells toward your ribcage, squeezing your shoulder blades together. Reverses desk posture.
                </p>
                <div className="pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                  <strong className="text-white">Goal:</strong> 3 sets of 10-12 reps • Rest 60 sec
                </div>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-xs font-bold">05. LOADED CARRY</span>
                  <span className="text-[10px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded">CORE & GRIP</span>
                </div>
                <h4 className="font-display font-black text-xl text-white uppercase">FARMER&apos;S WALK</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pick up two moderate kettlebells or dumbbells at your sides. Walk tall with shoulders back and core tight for 40 meters. Simple, functional, and builds iron grip.
                </p>
                <div className="pt-2 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                  <strong className="text-white">Goal:</strong> 3 sets of 40 meters • Rest 60 sec
                </div>
              </div>

              <div className="bg-yellow-400/10 border border-yellow-400/40 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-yellow-400 font-mono text-xs font-bold uppercase">THE PROGRESSION LAW</span>
                  <h4 className="font-display font-black text-xl text-white uppercase mt-1">PROGRESSIVE OVERLOAD</h4>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    Once you can comfortably complete all reps with clean form, increase the load by 2.5–5 lbs on your next workout. This simple law drives 90% of all adaptations.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-yellow-400 mt-4 block font-bold">
                  ✓ Form First • Load Second
                </span>
              </div>

            </div>
          )}

          {/* TAB 2: 3-Day Starter Routine */}
          {activeTab === 'routine' && (
            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="font-display font-black text-lg text-white">DAY 1: MONDAY</span>
                  <span className="text-[10px] font-mono bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">FULL BODY A</span>
                </div>
                <ul className="space-y-3 text-xs font-mono text-zinc-300">
                  <li className="flex items-start justify-between">
                    <span>1. Goblet Squat</span>
                    <span className="text-yellow-400">3 x 8-10</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>2. DB Flat Bench Press</span>
                    <span className="text-yellow-400">3 x 8-10</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>3. Chest-Supported DB Row</span>
                    <span className="text-yellow-400">3 x 10-12</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>4. Dumbbell Romanian Deadlift</span>
                    <span className="text-yellow-400">3 x 8-10</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>5. Farmer&apos;s Carry</span>
                    <span className="text-yellow-400">3 x 40m</span>
                  </li>
                </ul>
                <div className="text-[11px] text-zinc-500 font-mono pt-3 border-t border-zinc-800">
                  Total Time: 45 Minutes • Focus: Movement mastery
                </div>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="font-display font-black text-lg text-white">DAY 2: WEDNESDAY</span>
                  <span className="text-[10px] font-mono bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">FULL BODY B</span>
                </div>
                <ul className="space-y-3 text-xs font-mono text-zinc-300">
                  <li className="flex items-start justify-between">
                    <span>1. Leg Press (or Box Squat)</span>
                    <span className="text-yellow-400">3 x 10-12</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>2. Seated DB Shoulder Press</span>
                    <span className="text-yellow-400">3 x 8-10</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>3. Lat Pulldown</span>
                    <span className="text-yellow-400">3 x 10-12</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>4. Hamstring Leg Curl</span>
                    <span className="text-yellow-400">3 x 12-15</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>5. Forearm Plank</span>
                    <span className="text-yellow-400">3 x 30 sec</span>
                  </li>
                </ul>
                <div className="text-[11px] text-zinc-500 font-mono pt-3 border-t border-zinc-800">
                  Total Time: 45 Minutes • Focus: Upper push & pull
                </div>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="font-display font-black text-lg text-white">DAY 3: FRIDAY</span>
                  <span className="text-[10px] font-mono bg-yellow-400 text-black px-2 py-0.5 rounded font-bold">FULL BODY C</span>
                </div>
                <ul className="space-y-3 text-xs font-mono text-zinc-300">
                  <li className="flex items-start justify-between">
                    <span>1. Trap Bar Deadlift</span>
                    <span className="text-yellow-400">3 x 6-8</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>2. Incline DB Bench Press</span>
                    <span className="text-yellow-400">3 x 8-10</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>3. Seated Cable Cable Row</span>
                    <span className="text-yellow-400">3 x 10-12</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>4. Walking Lunges</span>
                    <span className="text-yellow-400">3 x 10/leg</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span>5. Sled Push (Light/Moderate)</span>
                    <span className="text-yellow-400">4 x 20m</span>
                  </li>
                </ul>
                <div className="text-[11px] text-zinc-500 font-mono pt-3 border-t border-zinc-800">
                  Total Time: 45 Minutes • Followed by 38°F Plunge
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Nutrition Rules */}
          {activeTab === 'diet' && (
            <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RULE 01: ANCHOR EVERY MEAL WITH PROTEIN</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white uppercase">THE 30-GRAM BASELINE</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Aim for 25–40 grams of quality protein every 3–4 hours (chicken breast, lean beef, salmon, eggs, Greek yogurt, or whey). Protein stimulates muscle protein synthesis (MPS) and keeps hunger at bay.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RULE 02: EAT REAL FOOD 80% OF THE TIME</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white uppercase">THE 80/20 WHOLE-FOOD RATIO</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  You do not need restrictive diets or juice cleanses. Build 80% of your meals around single-ingredient whole foods: potatoes, rice, oats, berries, vegetables, and clean meats. Leave 20% flexibility for social life.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RULE 03: PRE & POST WORKOUT FUELING</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white uppercase">SIMPLE WORKOUT TIMING</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Eat a light carbohydrate and protein snack (like a banana and a scoop of whey, or oatmeal) 60–90 minutes before lifting. Within 2 hours after your session, consume a balanced meal to replenish muscle glycogen.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RULE 04: SLEEP IS WHERE MUSCLE GROWS</span>
                </div>
                <h4 className="font-display font-bold text-xl text-white uppercase">THE 7-8 HOUR ANABOLIC WINDOW</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Training breaks down muscle tissue; sleep repairs it. Deep sleep triggers natural human growth hormone release and normalizes hunger hormones (ghrelin/leptin). Aim for a cold, dark room and 7+ hours nightly.
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Confidence Onboarding Banner */}
        <div className="mt-12 bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-transparent border-2 border-yellow-400/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-yellow-400 font-bold">
              NEVER FEEL LOST ON THE FLOOR
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              EVERY MEMBERSHIP INCLUDES 1-ON-1 COACH ONBOARDING.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              When you join FORGE, a certified coach conducts your comprehensive movement screen, sets up your platform rack heights, and designs your first 8-week periodized protocol.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-display font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <span>BOOK A TOUR & COACH CONSULTATION</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
