import React, { useState } from 'react';
import { Flame, Zap, Shield, HeartPulse, ChevronRight, Check, Clock, Trophy } from 'lucide-react';

const programsData = [
  {
    id: 'power',
    title: 'POWERLIFTING & HYPERTROPHY',
    tag: 'STRENGTH TRACK',
    duration: '60-75 MIN',
    frequency: '5 DAYS / WEEK',
    level: 'INTERMEDIATE TO ADVANCED',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Precision periodized training designed to build dense contractile muscle tissue and shatter 1RM PRs on the Big 3: Squat, Bench, and Deadlift.',
    features: [
      'Calibrated Eleiko steel plates & competition monolifts',
      'Velocity-based training with linear position transducers',
      'Specialty bars: Safety Squat Bar, Kabuki Duffalo, Football Bar',
      'Targeted accessory blocks for weak point correction'
    ],
    targetOutcome: 'Average +45lb to Big 3 total in 12 weeks'
  },
  {
    id: 'tactical',
    title: 'TACTICAL METABOLIC CONDITIONING',
    tag: 'HYBRID & FAT LOSS',
    duration: '45-55 MIN',
    frequency: '4 DAYS / WEEK',
    level: 'ALL LEVELS (SCALABLE)',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'High-intensity anaerobic work designed to build an unbreakable work capacity. Sled drags, kettlebell complexes, assault bike sprints, and sandbag carries.',
    features: [
      'Heart-rate zoned cardiovascular monitoring',
      '60-meter indoor turf sprint & prowler track',
      'Echo Bikes, Concept2 SkiErgs, and heavy slam balls',
      'Lactate threshold testing & threshold expansion'
    ],
    targetOutcome: 'Burn 650-900 kcal / session & amplify VO2 Max'
  },
  {
    id: 'hyrox',
    title: 'HYBRID ATHLETE / HYROX LAB',
    tag: 'COMPETITIVE RACING',
    duration: '60 MIN',
    frequency: '4-5 DAYS / WEEK',
    level: 'ATHLETIC',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Specialized hybrid race preparation combining endurance running intervals with functional fitness stations to conquer HYROX and DEKA events.',
    features: [
      'Simulated HYROX race simulator stations',
      'Wall ball pacing, burpee broad jump mechanics',
      'Heavy sled push/pull cadence development',
      'Race-day nutritional fueling protocols'
    ],
    targetOutcome: 'Full race readiness & sub-65min simulation times'
  },
  {
    id: 'recovery',
    title: 'CRYOTHERAPY & BIO-RECOVERY',
    tag: 'CNS RESTORATION',
    duration: '30-45 MIN',
    frequency: 'OPEN ACCESS',
    level: 'EVERYONE',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'You do not grow inside the gym; you grow when you recover. Accelerate tissue remodeling and calm the central nervous system with thermal contrast therapies.',
    features: [
      '38°F Chilled circulation cold plunge tubs',
      '195°F Dry cedar Finnish infrared saunas',
      'Normatec 3 pneumatic compression boots',
      'Percussive massage therapy & mobility straps'
    ],
    targetOutcome: '-50% delayed onset muscle soreness (DOMS)'
  }
];

export default function Programs({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPrograms = activeTab === 'all' 
    ? programsData 
    : programsData.filter(p => p.id === activeTab);

  return (
    <section id="programs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
          SCIENTIFIC PROGRESSION • NO RANDOM WORKOUTS
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
          PROGRAMS ENGINEERED FOR <span className="text-yellow-400">MAXIMUM ADAPTATION.</span>
        </h2>
        <p className="text-zinc-400 text-base mt-3 leading-relaxed">
          Every track is periodized by elite strength and conditioning specialists. Pick your discipline and execute with intent.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'all' 
                ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All Tracks
          </button>
          <button
            onClick={() => setActiveTab('power')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'power' 
                ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Power & Hypertrophy
          </button>
          <button
            onClick={() => setActiveTab('tactical')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'tactical' 
                ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Tactical HIIT
          </button>
          <button
            onClick={() => setActiveTab('hyrox')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'hyrox' 
                ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            HYROX / Hybrid
          </button>
          <button
            onClick={() => setActiveTab('recovery')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'recovery' 
                ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            Recovery & Plunge
          </button>
        </div>
      </div>

      {/* Program Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPrograms.map((prog) => (
          <article
            key={prog.id}
            className="bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/70 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] group"
          >
            {/* Top Photo Header */}
            <div className="relative h-56 overflow-hidden bg-zinc-950">
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-full object-cover filter brightness-[0.5] group-hover:scale-105 group-hover:brightness-[0.65] transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-black font-mono font-black text-[10px] uppercase px-3 py-1 rounded-md tracking-wider">
                {prog.tag}
              </div>

              {/* Duration Specs */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  {prog.duration}
                </span>
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-yellow-400 font-bold">
                  {prog.frequency}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {prog.description}
                </p>

                {/* Features List */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
                    SPECIFICATIONS:
                  </span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {prog.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target Outcome & CTA */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Trophy className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>{prog.targetOutcome}</span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-yellow-400 text-white hover:text-black font-display font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
                >
                  <span>TEST THIS TRACK</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
