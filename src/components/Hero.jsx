import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Compass, Activity } from 'lucide-react';

const PLATFORM_PROFILES = {
  powerlifting: {
    id: 'PL-01',
    title: 'IPF POWERLIFTING PLATFORM',
    badge: 'IPF SANCTIONED SPECIFICATION',
    bar: 'Eleiko IPF Powerlifting Bar // 215,000 PSI // 29mm Shaft // Zero Bar Whip',
    discs: 'Eleiko Calibrated Cast Steel Discs // ±10g Tolerance // IPF Certified',
    surface: '60mm Solid Hardwood Oak Inset + 30mm High-Density SBR Acoustic Drop Zones',
    metrics: [
      { label: 'TENSILE STRENGTH', val: '215,000 PSI' },
      { label: 'CALIBRATION', val: '±10g MAX' },
      { label: 'BAR DIAMETER', val: '29 MM' },
      { label: 'KNURL PROFILE', val: '1.2mm Volcano' },
    ]
  },
  olympic: {
    id: 'WL-02',
    title: 'IWF WEIGHTLIFTING PLATFORM',
    badge: 'IWF SANCTIONED SPECIFICATION',
    bar: 'Eleiko IWF Weightlifting Bar // Precision Needle Bearings // 28mm // Calibrated Dynamic Whip',
    discs: 'Eleiko Competition Bumpers // Shore A 92 Durometer // Dead-Blow Zero Rebound',
    surface: '3m x 3m Hard Maple Lifting Deck + Integrated Vibration Isolation Sub-Floor',
    metrics: [
      { label: 'BEARING SYSTEM', val: 'Multi-Roller' },
      { label: 'CALIBRATION', val: '±10g MAX' },
      { label: 'BAR DIAMETER', val: '28 MM' },
      { label: 'SPIN RATE', val: 'Free Dynamic' },
    ]
  },
  recovery: {
    id: 'RC-03',
    title: 'CONTRAST RECOVERY SUITE',
    badge: 'SPORTS SCIENCE RECOVERY',
    bar: 'Dual Commercial Cold Plunge Tubs // Constant 38°F Chilled Circulation',
    discs: '200°F Finnish Dry Cedar Sauna // Thermal Shock Protocol // Chromotherapy',
    surface: 'Antimicrobial Non-Slip Decking + Dual Micron Ozone & UV-C Water Sterilization',
    metrics: [
      { label: 'WATER TEMP', val: '38°F CONSTANT' },
      { label: 'SAUNA TEMP', val: '200°F DRY' },
      { label: 'FILTRATION', val: 'Dual 5-Micron' },
      { label: 'SANITIZATION', val: 'Ozone + UV-C' },
    ]
  }
};

export default function Hero({ onOpenBooking }) {
  const [activeProfile, setActiveProfile] = useState('powerlifting');
  const current = PLATFORM_PROFILES[activeProfile];

  return (
    <section className="relative pt-8 pb-20 sm:pb-24 border-b border-zinc-800/80 bg-[#070709] text-white overflow-hidden">
      
      {/* Background Subtle Coordinate Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* 1. Facility Telemetry Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 pb-6 border-b border-zinc-800/80 text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-bold tracking-wider">FACILITY ID: FORGE-ATX-01</span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-zinc-500" />
              <span>AUSTIN, TX // 30.2672° N, 97.7431° W</span>
            </span>
            <span className="text-zinc-600 hidden md:inline">|</span>
            <span className="hidden md:inline text-zinc-500">ELEV. 489 FT</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hidden sm:inline">MEMBER ACCESS: <strong className="text-zinc-200">5:00 AM – 11:00 PM DAILY</strong></span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5 text-yellow-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              ELEIKO REGIONAL TRAINING CENTER
            </span>
          </div>
        </div>

        {/* 2. Main Hero Grid: Asymmetrical Kinetic Statement + Interactive Telemetry Engine */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left / Center Architectural Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                <Activity className="w-3.5 h-3.5 text-yellow-400" />
                <span>PRIVATE ATHLETIC COHORT • CAPPED AT 250 MEMBERS</span>
              </div>
              
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.98] uppercase text-white">
                WHERE IRON <br />
                <span className="text-yellow-400">MEETS INTENT.</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed pt-2">
                An uncompromising strength and human performance facility engineered for competitive powerlifters, Olympic lifters, and dedicated athletes. 18 competition platforms, calibrated Swedish steel, and medical-grade thermal recovery suites without commercial distractions.
              </p>
            </div>

            {/* Single Dominant Conversion CTA (10% color accent) */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="hud-chamfer-btn inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-display font-black text-sm tracking-wider uppercase px-9 py-4 transition-all cursor-pointer shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:shadow-[0_0_40px_rgba(250,204,21,0.35)] active:scale-[0.99]"
                >
                  <span>SCHEDULE A FACILITY TOUR</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href="#pricing"
                  className="inline-flex items-center text-xs font-mono font-bold tracking-wider uppercase text-zinc-400 hover:text-white transition-colors px-4 py-4"
                >
                  EXPLORE MEMBERSHIP TIERS &darr;
                </a>
              </div>

              {/* Minimal Trust & Standards Assurance (No Amazon-style stars) */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono pt-1">
                <span className="text-zinc-300">Cohort Capped At 250 Athletes</span>
                <span>•</span>
                <span>Zero Initiation Fees</span>
                <span>•</span>
                <span>Transparent Monthly Dues</span>
              </div>
            </div>

            {/* Platform Telemetry Switcher Tabs */}
            <div className="pt-6 space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                INSPECT PLATFORM TELEMETRY & RIGGING:
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveProfile('powerlifting')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors cursor-pointer border ${
                    activeProfile === 'powerlifting'
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  [ 01 // POWERLIFTING ]
                </button>

                <button
                  onClick={() => setActiveProfile('olympic')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors cursor-pointer border ${
                    activeProfile === 'olympic'
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  [ 02 // WEIGHTLIFTING ]
                </button>

                <button
                  onClick={() => setActiveProfile('recovery')}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors cursor-pointer border ${
                    activeProfile === 'recovery'
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  [ 03 // CONTRAST SUITE ]
                </button>
              </div>

              {/* Dynamic Telemetry Readout Box */}
              <div className="p-4 sm:p-5 bg-zinc-950/90 border border-zinc-800 font-mono text-xs space-y-3 relative">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80">
                  <span className="text-yellow-400 font-bold tracking-wider">{current.title}</span>
                  <span className="text-[10px] text-zinc-500">{current.badge}</span>
                </div>

                <div className="space-y-1.5 text-zinc-300 text-[11px] leading-relaxed">
                  <div><strong className="text-zinc-500 font-normal">BAR / APPARATUS:</strong> {current.bar}</div>
                  <div><strong className="text-zinc-500 font-normal">RESISTANCE / LOAD:</strong> {current.discs}</div>
                  <div><strong className="text-zinc-500 font-normal">SURFACE SUB-STRUCTURE:</strong> {current.surface}</div>
                </div>

                {/* 4 Micro Telemetry Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-zinc-800/80">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="bg-zinc-900/70 p-2 border border-zinc-800/80">
                      <div className="text-[9px] text-zinc-500 uppercase tracking-wider">{m.label}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Architectural Visual Frame with Tactical Reticles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative border border-zinc-800 bg-zinc-900/90 shadow-2xl p-1 hud-bracket">
              <span className="hud-bracket-tr" />
              <span className="hud-bracket-bl" />

              <div className="relative h-[480px] sm:h-[540px] overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}tactical_gym_athlete.jpg`}
                  alt="Elite Lifter on Competition Platform"
                  className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Atmospheric Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Top Corner Telemetry Badge */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-yellow-400 bg-black/85 px-2.5 py-1 border border-zinc-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-yellow-400" />
                  <span>PLATFORM 04 // ACTIVE LOADED STATE</span>
                </div>

                {/* Bottom Overlay Telemetry Pill */}
                <div className="absolute bottom-3 inset-x-3 bg-black/90 backdrop-blur-md p-3 border border-zinc-800 font-mono text-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase">EQUIPMENT STANDARD</span>
                    <span className="text-white font-bold text-[11px]">ELEIKO COMPETITION RIGGING</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-500 block uppercase">DISC CALIBRATION</span>
                    <span className="text-yellow-400 font-bold text-[11px]">IPF VERIFIED ±10g</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Visual Telemetry Caption */}
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
              <span>PHOTO: COMPETITION PLATFORM 04 (AUSTIN, TX)</span>
              <span>100% HEPA H13 FRESH AIR INTAKE</span>
            </div>
          </div>

        </div>

        {/* 3. Hero Monolithic 4-Metric Bar */}
        <div className="pt-10 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="p-4 sm:p-5 bg-zinc-950/60 border border-zinc-800/80 relative hud-bracket">
            <span className="hud-bracket-tr" />
            <span className="hud-bracket-bl" />
            <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">45,000</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1 font-bold">Square Foot Sanctuary</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-1">Dedicated strength & conditioning bays</div>
          </div>

          <div className="p-4 sm:p-5 bg-zinc-950/60 border border-zinc-800/80 relative hud-bracket">
            <span className="hud-bracket-tr" />
            <span className="hud-bracket-bl" />
            <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">18</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1 font-bold">Competition Platforms</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-1">Eleiko IPF & IWF sanctioned decks</div>
          </div>

          <div className="p-4 sm:p-5 bg-zinc-950/60 border border-zinc-800/80 relative hud-bracket">
            <span className="hud-bracket-tr" />
            <span className="hud-bracket-bl" />
            <div className="font-display font-black text-3xl sm:text-4xl text-yellow-400 tracking-tight">±10g</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1 font-bold">Disc Tolerance</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-1">Individually calibrated cast steel</div>
          </div>

          <div className="p-4 sm:p-5 bg-zinc-950/60 border border-zinc-800/80 relative hud-bracket">
            <span className="hud-bracket-tr" />
            <span className="hud-bracket-bl" />
            <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">5AM - 11PM</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1 font-bold">Member Keycard Access</div>
            <div className="text-[10px] text-zinc-500 font-mono mt-1">Open 7 days / week for athletes</div>
          </div>
        </div>

      </div>
    </section>
  );
}
