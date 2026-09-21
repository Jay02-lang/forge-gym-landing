import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Crosshair, Shield, Award, Check, X } from 'lucide-react';

export default function TacticalHud({ onOpenBooking }) {
  const [activeTrack, setActiveTrack] = useState('power');
  const [cadCallout, setCadCallout] = useState('Click any CAD marker to inspect engineering specifications.');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const canvasRef = useRef(null);

  // Real-Time 3D Wireframe Force Mesh Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    let animationId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.45)'; // Tactical Bronze
      ctx.lineWidth = 1;

      const cols = 24;
      const rows = 14;
      const cellW = canvas.width / cols;
      const cellH = canvas.height / rows;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const x = c * cellW;
          const centerDist = Math.sin((c / cols) * Math.PI);
          const y = (r * cellH) + Math.sin(c * 0.45 + r * 0.35 + frame * 0.03) * 12 * centerDist;

          if (c === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      frame++;
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-300 font-sans p-2 sm:p-4 lg:p-6 select-none">
      
      {/* Outer Cockpit Framing Box */}
      <div className="max-w-[1520px] mx-auto border border-zinc-800/80 bg-[#09090b]/95 relative overflow-hidden shadow-2xl">

        {/* Top HUD Telemetry Bar */}
        <div className="border-b border-zinc-800 px-4 sm:px-8 py-2.5 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-950/80">
          <div className="flex items-center gap-4">
            <span className="text-zinc-400 font-bold tracking-wider">
              DESIGNED FOR MAXIMUM FORCE OUTPUT. ENGINEERED FOR DOMINANCE.
            </span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline text-[#c5a059]">
              COORDINATES: 30.2672° N, 97.7431° W // AUSTIN, TX
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400">HOURS: 5:00 AM – 11:00 PM DAILY</span>
            <span className="text-[#c5a059] font-bold">SYS: NORMAL // 60HZ</span>
          </div>
        </div>

        {/* Cockpit Navigation Header */}
        <header className="border-b border-zinc-800/80 px-4 sm:px-8 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md relative z-30">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 border border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center font-display text-sm font-black transform -skew-x-12">
              &lt;F&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-wider text-white leading-none">
                FORGE<span className="text-[#c5a059]">.</span>
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500 uppercase mt-0.5">
                TACTICAL ATHLETICS & IRON LAB
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-mono font-bold tracking-widest text-zinc-400">
            <a href="#hero" className="text-[#c5a059] transition-colors">OVERVIEW</a>
            <a href="#tracks" className="hover:text-[#c5a059] transition-colors">DISCIPLINES</a>
            <a href="#blueprint" className="hover:text-[#c5a059] transition-colors">RIGGING CAD</a>
            <a href="#specs" className="hover:text-[#c5a059] transition-colors">BIOMECHANICS</a>
            <a href="#cohort" className="hover:text-[#c5a059] transition-colors">COHORT</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right font-mono text-[10px] text-zinc-500">
              <div>IPF REGIONAL RTC</div>
              <div className="text-zinc-400 font-bold">SECTOR 04 LAB</div>
            </div>
            <button
              onClick={openModal}
              className="bg-[#c5a059] hover:bg-[#d8b268] text-black font-display text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-all cursor-pointer shadow-md shadow-[#c5a059]/10 active:scale-95"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
              }}
            >
              SCHEDULE TOUR &gt;&gt;
            </button>
          </div>
        </header>

        {/* Dual Side Rails & Workspace Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[900px]">

          {/* LEFT HUD SIDE RAIL */}
          <aside className="hidden lg:flex lg:col-span-1 border-r border-zinc-800/80 bg-zinc-950/60 p-4 flex-col justify-between items-center text-center font-mono relative z-20">
            <div className="space-y-4 pt-2">
              <div className="w-10 h-10 mx-auto relative flex items-center justify-center">
                <svg className="w-full h-full text-[#c5a059]/70" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                  <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-zinc-500 uppercase">RIGGING</div>
                <div className="text-xs text-[#c5a059] font-bold">08 / 24</div>
              </div>
            </div>

            <div className="space-y-6 text-[10px] text-zinc-500 uppercase tracking-widest py-8">
              <div className="hover:text-zinc-200 transition-colors cursor-pointer flex flex-col items-center gap-1">
                <span className="text-xs">⌖</span>
                <span className="text-[8px]">SQUAT</span>
              </div>
              <div className="hover:text-zinc-200 transition-colors cursor-pointer flex flex-col items-center gap-1">
                <span className="text-xs">⌗</span>
                <span className="text-[8px]">BENCH</span>
              </div>
              <div className="text-[#c5a059] flex flex-col items-center gap-1 border-l-2 border-[#c5a059] pl-2 -ml-2">
                <span className="text-xs font-bold">⊞</span>
                <span className="text-[8px] font-bold">DEADLIFT</span>
              </div>
              <div className="hover:text-zinc-200 transition-colors cursor-pointer flex flex-col items-center gap-1">
                <span className="text-xs">⊡</span>
                <span className="text-[8px]">BALLISTIC</span>
              </div>
              <div className="hover:text-zinc-200 transition-colors cursor-pointer flex flex-col items-center gap-1">
                <span className="text-xs">⋇</span>
                <span className="text-[8px]">CONTRAST</span>
              </div>
            </div>

            <div className="space-y-3 pb-2 text-[8px] text-zinc-500">
              <div className="border border-zinc-800 p-2 rounded bg-black/40">
                <div className="text-[#c5a059] font-bold">AUSTIN // TX</div>
                <div className="text-[7px] text-zinc-600">CENTRAL PLATFORM</div>
              </div>
              <div className="text-[7px] tracking-tighter text-zinc-600">
                IPF // IWF 2026
              </div>
            </div>
          </aside>

          {/* MAIN CENTER WORKSPACE */}
          <main className="lg:col-span-10 relative z-10 flex flex-col">

            {/* HERO SECTION */}
            <section id="hero" className="relative pt-12 pb-16 px-4 sm:px-8 lg:px-12 border-b border-zinc-800/80 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6 text-left relative z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 bg-zinc-950/80 text-[10px] font-mono uppercase tracking-wider text-[#c5a059]">
                    <span>SANCTIONED STRENGTH LABORATORY</span>
                  </div>

                  <div>
                    <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] uppercase">
                      TACTICAL<br />
                      <span className="text-[#c5a059]">ATHLETICS</span>
                    </h1>
                    <div className="flex items-center gap-3 pt-2 text-xs font-mono text-zinc-500">
                      <span className="text-[#c5a059]">VER. 4.8</span>
                      <span>//////</span>
                      <span>IPF REGIONAL RIGGING CENTER</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-lg leading-relaxed">
                    BUILT FOR MAXIMUM FORCE OUTPUT. DESIGNED FOR DOMINANCE.
                    <br />
                    An uncompromising strength and human performance laboratory. Calibrated Eleiko platforms, medical-grade cold contrast recovery, and sports science telemetry without commercial distractions.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href="#tracks"
                      className="inline-flex items-center gap-3 bg-[#c5a059] hover:bg-[#d8b268] text-black font-display font-bold text-xs uppercase tracking-wider px-7 py-3.5 transition-all cursor-pointer shadow-lg shadow-[#c5a059]/10"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                      }}
                    >
                      <span>EXPLORE DISCIPLINES</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={openModal}
                      className="border border-zinc-700 hover:border-[#c5a059] text-zinc-300 hover:text-white font-mono text-xs uppercase px-6 py-3.5 transition-colors cursor-pointer bg-zinc-950/60"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                      }}
                    >
                      SCHEDULE PRIVATE WALKTHROUGH
                    </button>
                  </div>
                </div>

                {/* Right Visual: Powerlifter + Pinned Specification Card */}
                <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
                  <div className="absolute inset-0 bg-[#c5a059]/5 blur-3xl rounded-full pointer-events-none" />

                  <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-950">
                    <img
                      src={`${import.meta.env.BASE_URL}tactical_gym_athlete.jpg`}
                      alt="Elite Powerlifter on Platform"
                      className="w-full h-auto object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-[#c5a059] bg-black/70 px-2 py-0.5 border border-zinc-800">
                      ATHLETE TELEMETRY // LOAD: 280 KG
                    </div>
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-400 bg-black/80 px-2 py-0.5 border border-zinc-800">
                      ELEIKO SWEDISH STEEL
                    </div>
                  </div>

                  {/* Pinned Platform Spec HUD Card */}
                  <div 
                    className="absolute -bottom-8 -left-4 sm:-left-8 w-72 sm:w-80 bg-black/90 border border-zinc-700/80 p-5 shadow-2xl backdrop-blur-md z-30 font-mono"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))'
                    }}
                  >
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                      <span className="text-[10px] uppercase font-bold text-[#c5a059] tracking-wider">
                        PLATFORM SPECIFICATION
                      </span>
                      <span className="text-zinc-500 text-xs">⋇</span>
                    </div>

                    <h3 className="text-xs font-bold text-white uppercase tracking-tight mb-2">
                      ELEIKO CALIBRATED SWEDISH STEEL & OAK
                    </h3>

                    <div className="grid grid-cols-12 gap-3 items-center mb-3">
                      <ul className="col-span-8 space-y-1 text-[9px] text-zinc-400 uppercase tracking-tighter">
                        <li className="flex items-center justify-between"><span>TENSILE STRENGTH:</span> <strong className="text-zinc-200">215,000 PSI</strong></li>
                        <li className="flex items-center justify-between"><span>KNURL PROFILE:</span> <strong className="text-zinc-200">1.2MM DIAMOND</strong></li>
                        <li className="flex items-center justify-between"><span>CALIBRATION:</span> <strong className="text-[#c5a059]">±10G IPF SPEC</strong></li>
                        <li className="flex items-center justify-between"><span>ACOUSTIC CORE:</span> <strong className="text-zinc-200">DUAL DAMPING</strong></li>
                        <li className="flex items-center justify-between"><span>SURFACE:</span> <strong className="text-zinc-200">SOLID WHITE OAK</strong></li>
                      </ul>
                      <div className="col-span-4 border border-zinc-700 rounded overflow-hidden">
                        <img
                          src={`${import.meta.env.BASE_URL}tactical_fabric_macro.jpg`}
                          alt="Knurl & Steel Weave"
                          className="w-full h-16 object-cover"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-zinc-800/80 text-center">
                      <div className="space-y-0.5">
                        <div className="w-6 h-6 mx-auto rounded border border-zinc-700 flex items-center justify-center text-[10px] text-[#c5a059]">⌖</div>
                        <div className="text-[7px] text-zinc-400 font-bold">CALIBRATED</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="w-6 h-6 mx-auto rounded border border-zinc-700 flex items-center justify-center text-[10px] text-[#c5a059]">♒</div>
                        <div className="text-[7px] text-zinc-400 font-bold">ABSORB</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="w-6 h-6 mx-auto rounded border border-zinc-700 flex items-center justify-center text-[10px] text-[#c5a059]">❖</div>
                        <div className="text-[7px] text-zinc-400 font-bold">1.2MM GRIP</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="w-6 h-6 mx-auto rounded border border-zinc-700 flex items-center justify-center text-[10px] text-[#c5a059]">🛡</div>
                        <div className="text-[7px] text-zinc-400 font-bold">11-GAUGE</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* ATHLETIC DISCIPLINES (4 TRACKS) */}
            <section id="tracks" className="py-14 px-4 sm:px-8 lg:px-12 border-b border-zinc-800/80 bg-zinc-950/40">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-[#c5a059] font-mono text-sm font-bold">┌</span>
                  <h2 className="font-display font-bold text-lg sm:text-xl text-white tracking-wider uppercase">
                    ATHLETIC DISCIPLINES
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-600">////// SANCTIONED TRACKS</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { id: 'power', spec: 'IPF SPEC', title: 'IPF POWERLIFTING', desc: 'Maximal slow-speed absolute force production. Calibrated cast iron discs (±10g), 29mm stiff power bars, and competition monolift uprights.', metric: '1,500 LBS', label: 'LOAD CAPACITY' },
                  { id: 'oly', spec: 'IWF SPEC', title: 'IWF WEIGHTLIFTING', desc: 'Explosive triple extension and turnover velocity. 28mm needle-bearing Swedish barbells, competition urethane bumper plates, and hardwood drop inserts.', metric: 'NEEDLE BEARING', label: 'TURNOVER SPIN' },
                  { id: 'tactical', spec: 'HYBRID SPEC', title: 'TACTICAL METABOLIC', desc: 'Work-capacity under extreme fatigue. Concept2 flywheel ergometers, heavy steel prowlers, 40m indoor sprint turf, and farmer walk implements.', metric: 'GLYCOLYTIC / AEROBIC', label: 'ENERGY PATHWAY' },
                  { id: 'contrast', spec: 'MED SPEC', title: 'CONTRAST THERAPY', desc: 'Vascular dilation and systemic inflammation flush. 38°F filtration ice plunge baths followed by 200°F dry Finnish infrared sauna suites.', metric: '162°F DIFFERENTIAL', label: 'TEMPERATURE DELTA' },
                ].map((track, idx) => (
                  <div
                    key={track.id}
                    onClick={() => setActiveTrack(track.id)}
                    className={`relative p-6 space-y-4 transition-all cursor-pointer group ${
                      activeTrack === track.id
                        ? 'bg-[#c5a059]/10 border-2 border-[#c5a059] shadow-lg shadow-[#c5a059]/10'
                        : 'bg-zinc-900/50 border border-zinc-800 hover:border-[#c5a059]'
                    }`}
                  >
                    {/* Targeting Corner Brackets */}
                    <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#c5a059]" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#c5a059]" />
                    <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#c5a059]" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#c5a059]" />

                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#c5a059] font-bold">0{idx + 1} // TRACK</span>
                      <span className="text-zinc-600">{track.spec}</span>
                    </div>

                    <h3 className="font-display font-bold text-base text-white group-hover:text-[#c5a059] transition-colors">
                      {track.title}
                    </h3>

                    <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                      {track.desc}
                    </p>

                    <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <span>{track.label}</span>
                      <strong className="text-[#c5a059]">{track.metric}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3D FORCE TERRAIN & RIGGING CAD SCHEMATIC */}
            <section id="blueprint" className="py-16 px-4 sm:px-8 lg:px-12 border-b border-zinc-800/80 bg-black/60 relative">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                
                {/* 3D Force Wave Canvas */}
                <div className="lg:col-span-5 space-y-6">
                  <div 
                    className="border border-zinc-800 bg-zinc-950 p-4 relative overflow-hidden"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))'
                    }}
                  >
                    <div className="text-[9px] font-mono text-zinc-500 flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2">
                      <span>KINETIC FORCE DISTRIBUTION MESH</span>
                      <span className="text-[#c5a059]">GRF TELEMETRY // 3D</span>
                    </div>
                    <canvas ref={canvasRef} width="400" height="220" className="w-full h-44 block" />
                    <div className="pt-2 text-[9px] font-mono text-zinc-500 flex items-center justify-between">
                      <span>GROUND REACTION FORCE: 3.4x BODYWEIGHT</span>
                      <span className="text-[#c5a059]">DAMPED</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                      BUILT FOR ANY LOAD
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                      From maximal 800lb squat attempts to explosive ballistic snatch drops, our structural steel rigging absorbs kinetic shockwaves while providing rigid stability.
                    </p>
                    <button
                      onClick={openModal}
                      className="border border-zinc-700 hover:border-[#c5a059] text-xs font-mono uppercase px-5 py-2.5 text-zinc-300 hover:text-white transition-colors cursor-pointer bg-zinc-900/60"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                      }}
                    >
                      INSPECT FACILITY RIGGING &rarr;
                    </button>
                  </div>
                </div>

                {/* Right Vector CAD Blueprint */}
                <div className="lg:col-span-7 bg-zinc-950/80 border border-zinc-800 p-6 sm:p-8 relative">
                  <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#c5a059]" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#c5a059]" />
                  <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#c5a059]" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#c5a059]" />

                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-6 font-mono text-xs">
                    <span className="text-[#c5a059] font-bold uppercase tracking-widest">
                      ORTHOGRAPHIC RIGGING SCHEMATIC // REV. 3
                    </span>
                    <span className="text-zinc-500">11-GAUGE 3X3" STEEL</span>
                  </div>

                  <div className="relative w-full aspect-[16/10] bg-[#0b0b0e] border border-zinc-800/80 flex items-center justify-center p-4">
                    <svg className="w-full h-full text-zinc-600" viewBox="0 0 600 360" fill="none" stroke="currentColor">
                      <defs>
                        <pattern id="cadGridReact" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="600" height="360" fill="url(#cadGridReact)" stroke="none" />

                      <rect x="140" y="40" width="24" height="280" stroke="#71717a" strokeWidth="1.5" fill="rgba(255,255,255,0.02)"/>
                      <rect x="340" y="40" width="24" height="280" stroke="#71717a" strokeWidth="1.5" fill="rgba(255,255,255,0.02)"/>

                      <g stroke="#3f3f46" strokeWidth="1">
                        {[70, 95, 120, 145, 170, 195, 220, 245, 270, 295].map((y, i) => (
                          <React.Fragment key={i}>
                            <circle cx="152" cy={y} r="3" />
                            <circle cx="352" cy={y} r="3" />
                          </React.Fragment>
                        ))}
                      </g>

                      <rect x="140" y="40" width="224" height="20" stroke="#a1a1aa" strokeWidth="1.5" fill="none"/>
                      <line x1="100" y1="320" x2="400" y2="320" stroke="#a1a1aa" strokeWidth="2"/>

                      <rect x="70" y="166" width="364" height="8" stroke="#c5a059" strokeWidth="1.5" fill="#c5a059" fillOpacity="0.3"/>
                      <rect x="70" y="160" width="60" height="20" stroke="#c5a059" strokeWidth="1.2" fill="none"/>
                      <rect x="374" y="160" width="60" height="20" stroke="#c5a059" strokeWidth="1.2" fill="none"/>

                      <rect x="120" y="120" width="10" height="100" stroke="#c5a059" strokeWidth="1.5" fill="rgba(197, 160, 89, 0.2)"/>
                      <rect x="110" y="125" width="8" height="90" stroke="#c5a059" strokeWidth="1" fill="none"/>
                      <rect x="374" y="120" width="10" height="100" stroke="#c5a059" strokeWidth="1.5" fill="rgba(197, 160, 89, 0.2)"/>
                      <rect x="386" y="125" width="8" height="90" stroke="#c5a059" strokeWidth="1" fill="none"/>

                      {/* Interactive Markers */}
                      <g className="cursor-pointer" onClick={() => setCadCallout('3x3" 11-Gauge Structural Steel: Laser-cut box tube with 2,500lb capacity.')}>
                        <circle cx="152" cy="95" r="5" stroke="#c5a059" strokeWidth="1.5" fill="#c5a059"/>
                        <line x1="152" y1="95" x2="60" y2="70" stroke="#c5a059" strokeWidth="1" strokeDasharray="2 2"/>
                        <text x="55" y="65" textAnchor="end" fill="#e4e4e7" fontFamily="Space Mono" fontSize="9">3X3" 11-GAUGE STEEL</text>
                      </g>

                      <g className="cursor-pointer" onClick={() => setCadCallout('1" Westside Hole Spacing: 5/8" laser cut holes for precise bench/squat height adjustments.')}>
                        <circle cx="152" cy="195" r="5" stroke="#c5a059" strokeWidth="1.5" fill="#c5a059"/>
                        <line x1="152" y1="195" x2="60" y2="210" stroke="#c5a059" strokeWidth="1" strokeDasharray="2 2"/>
                        <text x="55" y="215" textAnchor="end" fill="#e4e4e7" fontFamily="Space Mono" fontSize="9">1" HOLE SPACING</text>
                      </g>

                      <g className="cursor-pointer" onClick={() => setCadCallout('UHMW Magnetic J-Cups: Ultra-high molecular weight polyethylene lining prevents bar knurl damage.')}>
                        <circle cx="340" cy="166" r="5" stroke="#c5a059" strokeWidth="1.5" fill="#c5a059"/>
                        <line x1="340" y1="166" x2="480" y2="130" stroke="#c5a059" strokeWidth="1" strokeDasharray="2 2"/>
                        <text x="485" y="132" fill="#e4e4e7" fontFamily="Space Mono" fontSize="9">UHMW J-CUP PADDING</text>
                      </g>

                      <g className="cursor-pointer" onClick={() => setCadCallout('1.2mm Swedish Diamond Knurl: Aggressive grip pattern for maximum palm contact without tearing.')}>
                        <circle cx="250" cy="170" r="5" stroke="#c5a059" strokeWidth="1.5" fill="#c5a059"/>
                        <line x1="250" y1="170" x2="300" y2="230" stroke="#c5a059" strokeWidth="1" strokeDasharray="2 2"/>
                        <text x="305" y="235" fill="#e4e4e7" fontFamily="Space Mono" fontSize="9">1.2MM DIAMOND KNURL</text>
                      </g>

                      <g className="cursor-pointer" onClick={() => setCadCallout('Acoustic Drop Platform: Multi-tier high density rubber with solid Appalachian oak center.')}>
                        <circle cx="250" cy="320" r="5" stroke="#c5a059" strokeWidth="1.5" fill="#c5a059"/>
                        <line x1="250" y1="320" x2="320" y2="345" stroke="#c5a059" strokeWidth="1" strokeDasharray="2 2"/>
                        <text x="325" y="348" fill="#e4e4e7" fontFamily="Space Mono" fontSize="9">ACOUSTIC DAMPING OAK</text>
                      </g>
                    </svg>
                  </div>

                  <div className="mt-4 p-3 border border-zinc-800 bg-zinc-900/60 rounded text-[11px] font-mono text-zinc-300 flex items-center justify-between">
                    <div>
                      <span className="text-[#c5a059] font-bold">STATUS:</span> {cadCallout}
                    </div>
                    <span className="text-zinc-500">IPF RIGGING VERIFIED</span>
                  </div>
                </div>

              </div>
            </section>

            {/* BOTTOM SPEC TICKER */}
            <section className="border-t border-zinc-800/80 bg-black py-8 px-4 sm:px-8 lg:px-12 font-mono">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-1.5 border-r border-zinc-800/80 last:border-r-0">
                  <div className="text-[#c5a059] text-base">⌖</div>
                  <div className="text-xs font-bold text-white uppercase">IPF / IWF RIGGING</div>
                  <div className="text-[9px] text-zinc-500">Sanctioned Swedish Steel</div>
                </div>
                <div className="space-y-1.5 border-r border-zinc-800/80 last:border-r-0">
                  <div className="text-[#c5a059] text-base">♒</div>
                  <div className="text-xs font-bold text-white uppercase">ACOUSTIC DAMPING</div>
                  <div className="text-[9px] text-zinc-500">Zero Floor Shock Waves</div>
                </div>
                <div className="space-y-1.5 border-r border-zinc-800/80 last:border-r-0">
                  <div className="text-[#c5a059] text-base">❖</div>
                  <div className="text-xs font-bold text-white uppercase">SPORTS SCIENCE LAB</div>
                  <div className="text-[9px] text-zinc-500">Force-Velocity VBT Units</div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[#c5a059] text-base">🛡</div>
                  <div className="text-xs font-bold text-white uppercase">PRIVATE COHORT</div>
                  <div className="text-[9px] text-zinc-500">No Commodity Crowds</div>
                </div>
              </div>
            </section>

          </main>

          {/* RIGHT HUD SIDE RAIL */}
          <aside className="hidden lg:flex lg:col-span-1 border-l border-zinc-800/80 bg-zinc-950/60 p-4 flex-col justify-between items-center text-center font-mono relative z-20">
            <div className="space-y-4 pt-2">
              <div className="w-10 h-10 mx-auto relative flex items-center justify-center">
                <svg className="w-full h-full text-zinc-500" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="20" cy="20" rx="18" ry="8" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="0.75" />
                </svg>
              </div>
              <div className="text-[8px] text-zinc-500 uppercase">
                <div>MMXXVI</div>
                <div className="text-[#c5a059] font-bold">SANCTIONED</div>
              </div>
            </div>

            <div className="space-y-8 text-[9px] text-zinc-500 tracking-widest py-8">
              <div className="rotate-90 origin-center whitespace-nowrap text-[8px] tracking-widest text-zinc-500">
                30.2672° N // 97.7431° W
              </div>
              <div className="text-zinc-700 text-xs">//////</div>
              <div className="rotate-90 origin-center whitespace-nowrap text-[8px] tracking-widest text-[#c5a059]">
                ELEIKO RTC RIG
              </div>
            </div>

            <div className="space-y-2 pb-2 text-[8px] text-zinc-500 font-mono">
              <div className="text-[#c5a059] font-bold">SECTOR 04</div>
              <div className="text-zinc-600">AUSTIN // TX</div>
            </div>
          </aside>

        </div>

        {/* Bottom Authority Bar */}
        <div className="border-t border-zinc-800 px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-zinc-500 uppercase bg-zinc-950">
          <div>© 2026 FORGE TACTICAL ATHLETICS LLC. UNCOMPROMISING PERFORMANCE.</div>
          <div className="flex items-center gap-6 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#c5a059] transition-colors">SAFETY PROTOCOLS</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">IPF COMPLIANCE</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">CHALK &amp; RIGGING BYLAWS</a>
          </div>
        </div>

      </div>

      {/* Facility Tour Reservation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 max-w-lg w-full p-6 sm:p-8 relative font-mono shadow-2xl">
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#c5a059]" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#c5a059]" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#c5a059]" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#c5a059]" />

            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-6">
              <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest">
                FACILITY TOUR // RESERVATION PROTOCOL
              </span>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!formSubmitted ? (
              <div className="space-y-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Experience our calibrated Swedish steel, custom acoustic platforms, and contrast recovery suites firsthand. Book a private facility walkthrough with a senior coach.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-3 pt-2">
                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase block mb-1">Athlete Name</label>
                    <input type="text" required placeholder="Marcus Vance" className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059]" />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase block mb-1">Athlete Contact (Email or Tel)</label>
                    <input type="email" required placeholder="athlete@forgeathletics.com" className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#c5a059]" />
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 uppercase block mb-1">Preferred Time Window (Staffed: 8am - 8pm)</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]">
                      <option>Morning (8:00 AM – 12:00 PM)</option>
                      <option>Afternoon (12:00 PM – 4:00 PM)</option>
                      <option>Evening (4:00 PM – 8:00 PM)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#c5a059] hover:bg-[#d8b268] text-black font-display font-bold text-xs uppercase tracking-wider py-3.5 mt-2 transition-colors cursor-pointer shadow-lg shadow-[#c5a059]/10"
                  >
                    CONFIRM PRIVATE TOUR RESERVATION
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 border-2 border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center text-xl font-bold font-display">✓</div>
                <h4 className="font-display font-bold text-lg text-white uppercase">RESERVATION CONFIRMED</h4>
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-[#c5a059] font-mono text-sm font-bold">
                  SECURITY CODE: FORGE-RTC-9941
                </div>
                <p className="text-xs text-zinc-400">
                  Present this code at Sector 04 front desk. A senior strength coach will guide your 30-minute private walkthrough.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono uppercase px-6 py-2 transition-colors cursor-pointer"
                >
                  CLOSE DISPATCH
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
