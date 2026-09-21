import React, { useState } from 'react';
import { Eye, Shield, Wind, Sparkles } from 'lucide-react';

const facilitySpaces = [
  {
    title: 'THE POWER PIT',
    category: 'STRENGTH',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    specs: '14 Rogue Monster Racks • 4 Competition Monolifts • Calibrated Plates',
  },
  {
    title: 'COLD PLUNGE & THERMAL SUITE',
    category: 'RECOVERY',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    specs: '38°F Chilled Constant Plunges • 195°F Dry Cedar Finnish Sauna',
  },
  {
    title: '60M TACTICAL TURF TRACK',
    category: 'CONDITIONING',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    specs: 'Prowler Sleds • Torque Tanks • Concept2 SkiErgs & Echo Bikes',
  },
  {
    title: 'DUMBBELL VAULT (UP TO 175 LBS)',
    category: 'STRENGTH',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    specs: 'Solid Urethane Dumbbells • Custom Flat & Incline Benches',
  },
  {
    title: 'BIO-COMPOSITION LAB',
    category: 'DIAGNOSTICS',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    specs: 'InBody 770 Medical Body Composition • 3D Posture Mapping',
  },
  {
    title: 'FUEL & AMINO APOTHECARY',
    category: 'NUTRITION',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    specs: 'Nitro Cold Brew on Tap • Pure Whey Shakes • Electrolyte Bar',
  },
];

export default function Facilities() {
  const [filter, setFilter] = useState('ALL');

  const filtered = filter === 'ALL'
    ? facilitySpaces
    : facilitySpaces.filter(f => f.category === filter);

  return (
    <section id="facilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
            ARCHITECTURAL EXCELLENCE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
            THE FACILITY <span className="text-yellow-400">BLUEPRINT.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-2">
            Built from the slab up for heavy iron. Custom acoustic dampening, hospital-grade air exchange, and zero clutter.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {['ALL', 'STRENGTH', 'CONDITIONING', 'RECOVERY'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((space, idx) => (
          <div
            key={idx}
            className="group relative h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-yellow-400/80 transition-all duration-300"
          >
            <img
              src={space.image}
              alt={space.title}
              className="w-full h-full object-cover filter brightness-50 group-hover:scale-105 group-hover:brightness-75 transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="bg-yellow-400 text-black font-mono font-black text-[10px] uppercase px-2.5 py-1 rounded">
                {space.category}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 space-y-1 z-10">
              <h3 className="font-display font-black text-xl text-white uppercase tracking-tight group-hover:text-yellow-400 transition-colors">
                {space.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                {space.specs}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Infrastructure Badges */}
      <div className="mt-12 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6 text-xs font-mono">
        <div className="flex items-center gap-3">
          <Wind className="w-6 h-6 text-yellow-400 shrink-0" />
          <div>
            <div className="text-white font-bold uppercase">100% FRESH AIR TURNOVER</div>
            <div className="text-zinc-500">HEPA & UV-C air scrubbers cycle air every 8 minutes.</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-yellow-400 shrink-0" />
          <div>
            <div className="text-white font-bold uppercase">ACOUSTIC RUBBER SLABS</div>
            <div className="text-zinc-500">2.5-inch dense vulcanized rubber drop pads.</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-yellow-400 shrink-0" />
          <div>
            <div className="text-white font-bold uppercase">SURGICAL CLEANLINESS</div>
            <div className="text-zinc-500">Sanitized continuously by our on-site facilities crew.</div>
          </div>
        </div>
      </div>

    </section>
  );
}
