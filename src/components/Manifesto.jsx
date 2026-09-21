import React from 'react';
import { ShieldCheck, Flame, Ban, Zap } from 'lucide-react';

export default function Manifesto() {
  return (
    <section className="py-20 bg-[#060608] border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
            THE FORGE STANDARD
          </span>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase leading-tight">
            MOST GYMS ARE DESIGNED FOR THOSE WHO DON&apos;T SHOW UP. <br />
            <span className="text-yellow-400">FORGE IS ENGINEERED FOR THOSE WHO DO.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Commercial fitness clubs optimize for membership overselling and crowded machines. We cap active athlete membership at 350 to guarantee you never wait for a squat rack, never lift on bent bars, and never train in an environment lacking focus.
          </p>

          <div className="pt-6 grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-xl">
              <div className="text-yellow-400 font-mono font-bold text-xs uppercase flex items-center gap-2">
                <Ban className="w-4 h-4" />
                <span>ZERO COMMERCIAL GIMMICKS</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                No phone tripods clogging the floor. No endless rows of neglected cardio machines.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-xl">
              <div className="text-yellow-400 font-mono font-bold text-xs uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>CALIBRATED ACCURACY</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Every disc weighed within +/- 10 grams of competition IPF standard. No phantom plate discrepancies.
              </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-xl">
              <div className="text-yellow-400 font-mono font-bold text-xs uppercase flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>INTEGRATED RECOVERY</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Direct transition from heavy mechanical strain to 38°F cryo-plunges and Finnish thermal heat.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
