import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'JAKE T.',
    title: 'COMPETITIVE POWERLIFTER',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    stat: '+140 LBS ON TOTAL IN 6 MONTHS',
    comment:
      'Finding a gym with genuine calibrated Eleiko discs and 4 competition monolifts was a game changer. The lifters here actually cheer on your heavy attempts instead of filing noise complaints.',
    rating: 5,
    tag: 'SQUAT 585 • BENCH 385 • DEADLIFT 660',
  },
  {
    name: 'SARAH K.',
    title: 'HYROX PRO RACER',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    stat: 'SUB-60 MIN RACE TIME',
    comment:
      'The 60-meter turf track with Torque Tank sleds and Concept2 SkiErgs allowed me to dial in my pacing. Plus, taking a 38-degree cold plunge right after high-output anaerobic intervals keeps my CNS fresh all week.',
    rating: 5,
    tag: 'HYROX AGE GROUP WINNER',
  },
  {
    name: 'MICHAEL D.',
    title: 'EXECUTIVE & HYBRID LIFTER',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    stat: '-18 LBS FAT • +25% STRENGTH',
    comment:
      'I train at 5:00 AM before the office. The biometric keycard entry is seamless, the gym is immaculate, and having certified coaches who know actual kinesiology rather than bro-science is worth every dollar.',
    rating: 5,
    tag: 'ACTIVE MEMBER 18 MONTHS',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
          PROOF OVER PROMISES
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
          REAL ATHLETES. <span className="text-yellow-400">UNDENIABLE NUMBERS.</span>
        </h2>
        <p className="text-zinc-400 text-base mt-3">
          Our members don't just work out; they transform their biology. Here is what happens when you train in an elite environment.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, idx) => (
          <article
            key={idx}
            className="bg-zinc-900/50 border border-zinc-800 hover:border-yellow-400/80 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] group relative"
          >
            <div className="space-y-4">
              
              {/* Stars */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/60 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-zinc-400" />
                  <span>VERIFIED MEMBER</span>
                </div>
              </div>

              {/* Stat Pill */}
              <div className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-bold px-3 py-1.5 rounded-xl inline-block">
                {r.stat}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                "{r.comment}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center gap-3.5">
              <img
                src={r.image}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-black text-sm text-white uppercase truncate">
                  {r.name}
                </h4>
                <div className="text-[10px] font-mono text-zinc-400 truncate">
                  {r.title}
                </div>
                <div className="text-[9px] font-mono text-yellow-400/80 truncate">
                  {r.tag}
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
