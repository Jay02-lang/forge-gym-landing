import React from 'react';

const partners = [
  { name: 'ELEIKO', tagline: 'OFFICIAL BARBELL PARTNER' },
  { name: 'ROGUE FITNESS', tagline: 'MONOLIFTS & RIGS' },
  { name: 'HAMMER STRENGTH', tagline: 'ISO-LATERAL MACHINES' },
  { name: 'INBODY 770', tagline: 'CLINICAL COMPOSITION' },
  { name: 'HYPERICE', tagline: 'VIBRATION & PERCUSSION' },
  { name: 'RED BULL ATHLETICS', tagline: 'ENERGY & NUTRITION' },
  { name: 'ARSENAL STRENGTH', tagline: 'COMPETITION LOAD' },
  { name: 'TORQUE FITNESS', tagline: 'TANK SLEDS' },
];

export default function Marquee() {
  return (
    <div className="bg-[#050507] border-y border-zinc-800/80 py-6 overflow-hidden relative select-none">
      
      {/* Edge Blur Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...partners, ...partners].map((item, idx) => (
          <div key={idx} className="flex items-center mx-8 group cursor-default">
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-zinc-400 group-hover:text-yellow-400 transition-colors">
                {item.name}
              </span>
              <span className="font-mono text-[9px] text-zinc-600 group-hover:text-zinc-400 tracking-widest uppercase transition-colors">
                {item.tagline}
              </span>
            </div>
            <span className="text-yellow-400/40 text-sm ml-10 font-mono">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
