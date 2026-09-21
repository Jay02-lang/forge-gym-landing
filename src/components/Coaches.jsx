import React from 'react';
import { Award, Dumbbell, ShieldCheck, ChevronRight } from 'lucide-react';

const coaches = [
  {
    name: 'MARCUS "THE ANVIL" VANCE',
    role: 'HEAD OF STRENGTH & POWER',
    credentials: 'CSCS • USAPL NATIONAL RECORD HOLDER',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: '14 years coaching competitive powerlifters and NFL linemen. Master of bar speed biomechanics and progressive overload programming.',
    prs: 'SQUAT: 725 LB • BENCH: 495 LB • DEADLIFT: 810 LB',
  },
  {
    name: 'DR. ELENA ROSTOVA, DPT',
    role: 'DIRECTOR OF RECOVERY & BIOMECHANICS',
    credentials: 'DOCTOR OF PHYSICAL THERAPY • FMS-2',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Former consultant to Olympic weightlifting squads. Specializes in fixing chronic shoulder/hip impingements and restoring full joint range of motion.',
    prs: 'SNATCH: 205 LB • C&J: 260 LB',
  },
  {
    name: 'DAVID CHEN',
    role: 'HEAD TACTICAL & HYROX MASTER COACH',
    credentials: 'EXOS PERFORMANCE SPEC • HYROX PRO TOP 10',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Pioneer of high-density hybrid conditioning. Designed our anaerobic lactate threshold tracks and race simulation protocols.',
    prs: 'HYROX PRO TIME: 57:42 • 5K: 16:15',
  },
  {
    name: 'SARAH JENKINS, M.SC.',
    role: 'HEAD OF NUTRITION & HYPERTROPHY',
    credentials: 'M.SC. EXERCISE PHYSIOLOGY • CISSN',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bio: 'Evidence-based contest prep and body recomposition coach. Combines hormonal health diagnostics with meticulous macronutrient timing.',
    prs: 'IFBB PRO CARD HOLDER',
  },
];

export default function Coaches({ onOpenBooking }) {
  return (
    <section id="coaches" className="py-24 bg-[#09090b] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
            NO TIKTOK TRAINERS • ONLY PROVEN SPECIALISTS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
            MEET THE <span className="text-yellow-400">COACHING STAFF.</span>
          </h2>
          <p className="text-zinc-400 text-base mt-3">
            Every coach holds accredited master credentials and has competed at the national or professional level.
          </p>
        </div>

        {/* Coaches Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-zinc-950">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 group-hover:brightness-90 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 space-y-3">
                  <div className="text-[10px] font-mono font-bold text-yellow-400 uppercase tracking-widest">
                    {coach.role}
                  </div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                    {coach.name}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {coach.credentials}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-2">
                    {coach.bio}
                  </p>
                </div>
              </div>

              {/* PR Footer */}
              <div className="p-6 pt-0">
                <div className="bg-black/60 border border-zinc-800/80 rounded-xl p-3 text-[10px] font-mono text-zinc-300 space-y-1">
                  <div className="text-yellow-400 font-bold uppercase tracking-wider">STATS & HIGHLIGHTS:</div>
                  <div className="truncate">{coach.prs}</div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full mt-4 bg-zinc-800/80 hover:bg-yellow-400 text-zinc-300 hover:text-black font-display font-black text-xs uppercase tracking-wider py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>BOOK 1-ON-1 EVAL</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
