import React, { useState } from 'react';
import { Dumbbell, Shield, HelpCircle, Layers, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

const equipmentCategories = [
  {
    id: 'bars',
    label: 'BARBELLS & SPECIALTY BARS',
    items: [
      {
        name: 'Olympic Bearing Bar (20 KG / 28MM)',
        purpose: 'Dynamic Olympic Lifts (Snatch, Clean & Jerk)',
        description: 'Features high-precision needle bearings in each sleeve that rotate smoothly under load. This rotation prevents rotational wrist and elbow torque during explosive turnovers.',
        proTip: 'Use for fast, dynamic pulls. Do not drop an empty barbell on the platform.',
      },
      {
        name: 'IPF Power Bar (20 KG / 29MM)',
        purpose: 'Heavy Slow-Speed Strength (Squat, Bench, Deadlift)',
        description: 'Thicker, ultra-stiff steel alloy with aggressive diamond center knurling. Minimal whip ensures maximum stability when carrying 400+ lbs across your upper back.',
        proTip: 'The center knurl grips your shirt to prevent bar slippage during back squats.',
      },
      {
        name: 'Trap / Hex Bar (25 KG)',
        purpose: 'Lower-Back Friendly Deadlifts & Carries',
        description: 'Hexagonal frame with neutral grip handles. Positions the load directly in line with your body’s center of gravity rather than in front, drastically reducing lumbar shearing forces.',
        proTip: 'Ideal for beginners learning the hip-hinge mechanics safely.',
      },
      {
        name: 'Safety Squat Bar (SSB)',
        purpose: 'Squats with Zero Shoulder/Wrist Strain',
        description: 'Cambered design with a padded neck yoke and forward-facing handles. Shifts weight slightly forward, automatically encouraging an upright chest and deeper quad activation.',
        proTip: 'Perfect if you have tight shoulders or past rotator cuff issues.',
      },
    ],
  },
  {
    id: 'plates',
    label: 'PLATES & WEIGHT DISCS',
    items: [
      {
        name: 'Competition Bumper Plates (IWF Spec)',
        purpose: 'Hardwood Platform Drops & Olympic Lifting',
        description: 'Forged from dense vulcanized rubber with steel hub inserts. Every weight (from 10kg to 25kg) shares an identical 450mm outer diameter so impact force is distributed evenly.',
        proTip: 'Safe to drop from overhead onto rubber lifting platforms.',
      },
      {
        name: 'Calibrated Cast Iron Discs (IPF Spec)',
        purpose: 'Maximal Powerlifting & Deadlifts',
        description: 'Precision-machined cast iron discs weighed to within ±10 grams of competition standard. Ultra-thin profile allows loading over 1,000 lbs onto a single barbell sleeve.',
        proTip: 'Never drop bare iron plates directly on wooden platforms without drop pads.',
      },
      {
        name: 'Fractional Change Plates (0.5 - 2.5 KG)',
        purpose: 'Micro-Loading for Steady Progression',
        description: 'Small rubber-coated discs designed to break through plateaus. Adding just 2.5 lbs total to the bar prevents failing reps while ensuring progressive overload every week.',
        proTip: 'Use micro-plates on upper-body presses where smaller jumps are essential.',
      },
    ],
  },
  {
    id: 'safety',
    label: 'RACKS & SAFETY PROTOCOLS',
    items: [
      {
        name: 'Adjustable Safety Spotter Pins',
        purpose: 'Solo Lifter Protection Without a Human Spotter',
        description: 'Heavy gauge steel arms installed across the uprights. Set them 1 inch below your deepest chest touch on bench press or bottom of squat. If you fail, the pins catch the iron safely.',
        proTip: 'Always adjust safety pins before your first warm-up set begins.',
      },
      {
        name: 'Barbell Locking Collars',
        purpose: 'Plate Security & Bilateral Balance',
        description: 'Precision compression clamps that lock onto the sleeve. They prevent discs from shifting during repetitions, which protects joints from uneven spinal loading.',
        proTip: 'Clamps are mandatory on all barbell lifts in our facility.',
      },
      {
        name: 'Competition Monolifts',
        purpose: 'Walkout Elimination for Heavy Squats',
        description: 'Features counterweighted hooks that automatically pivot away once you stand with the barbell, allowing you to squat from your exact foot stance without taking steps back.',
        proTip: 'Used by competitive powerlifters to conserve energy on heavy attempts.',
      },
    ],
  },
  {
    id: 'cables',
    label: 'CABLES & ERGOMETERS',
    items: [
      {
        name: 'Selectorized Cable Dual Pulley',
        purpose: 'Continuous Muscle Tension at All Joint Angles',
        description: 'Unlike free weights where gravity only pulls downward, cable systems provide uniform directional resistance throughout the entire eccentric and concentric range of motion.',
        proTip: 'Adjust pulley heights to match the exact line of muscle fibers you are training.',
      },
      {
        name: 'Air Flywheel Ergometers (Concept2 / Echo)',
        purpose: 'Non-Impact Anaerobic & Aerobic Conditioning',
        description: 'Resistance scales exponentially to how hard you push or pull. Delivers intense metabolic conditioning without eccentric muscle damage or joint pounding.',
        proTip: 'Pace your breathing rhythm to stroke rate on the monitor for optimal efficiency.',
      },
    ],
  },
];

export default function EquipmentKnowledge() {
  const [activeCategory, setActiveCategory] = useState('bars');

  const currentCategory = equipmentCategories.find((c) => c.id === activeCategory) || equipmentCategories[0];

  return (
    <section id="equipment" className="py-24 bg-[#0a0a0e] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
            <Wrench className="w-3.5 h-3.5" />
            <span>EQUIPMENT LITERACY & BIOMECHANICS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
            GYM EQUIPMENT: <span className="text-yellow-400">WHAT IT IS & HOW TO USE IT.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
            Demystifying the floor. Learn the distinct purpose, biomechanics, and safety protocols behind the professional gear inside our facility.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {equipmentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.3)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Items Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-yellow-400/60 transition-colors"
            >
              {/* Corner Targeting Reticles ┌ ┐ └ ┘ */}
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-yellow-400/80" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-yellow-400/80" />
              <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-yellow-400/80" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-yellow-400/80" />
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    {item.name}
                  </h3>
                </div>

                <div className="inline-block bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800 text-[11px] font-mono text-yellow-400 font-bold uppercase">
                  Primary Use: {item.purpose}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-start gap-2.5 text-xs font-mono text-zinc-300 bg-zinc-950/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Coach Protocol:</strong> {item.proTip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floor Safety Standard Footer */}
        <div className="mt-12 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-yellow-400 shrink-0" />
            <span>Need a form check or equipment walkthrough? Our staff coaches are always on the floor to orient you safely.</span>
          </div>
          <a
            href="#facilities"
            className="text-yellow-400 hover:text-yellow-300 font-bold uppercase shrink-0 transition-colors"
          >
            VIEW FACILITY SPECS &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
