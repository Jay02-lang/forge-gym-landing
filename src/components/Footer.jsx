import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ArrowUp,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePageNav = (pageId) => {
    if (onNavigate) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      onNavigate(pageId);
    }
  };

  return (
    <footer className="relative bg-[#07080A] text-[#F8FAFC] border-t border-white/[0.08] font-sans selection:bg-[#FF5500] selection:text-black overflow-hidden">
      
      {/* Subtle Architectural Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] font-display font-black text-[18vw] leading-none tracking-tighter text-white whitespace-nowrap z-0"
      >
        IRONFORGE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 pb-safe text-left space-y-10 sm:space-y-12">
        
        {/* Tier 1: Lean Conversion Bar */}
        <div className="pb-8 sm:pb-10 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-widest">
              CIVIL LINES • NAGPUR
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              STEP ONTO THE PLATFORM.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Schedule a 15-minute facility walkthrough or meet our coaches in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-[#FF5500] hover:bg-[#FF6A1A] text-black px-6 py-3.5 rounded-full text-xs font-display font-black uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] active:scale-[0.98] min-h-[48px]"
            >
              <span>SCHEDULE FACILITY TOUR</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="tel:+918041224766"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-white/15 hover:border-white text-white text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[48px] active:bg-white/[0.05]"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>+91 (80) 4122-4766</span>
            </a>
          </div>
        </div>

        {/* Tier 2: Reduced, High-Legibility Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-2 border-b border-white/[0.08]">
          
          {/* Brand & Direct Contact (6 Columns) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FF5500] text-black flex items-center justify-center font-black text-lg font-display shadow-[0_0_15px_rgba(255,85,0,0.35)] shrink-0">
                <Zap className="w-4 h-4 fill-black text-black" />
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-tight text-white block leading-none">
                  IRONFORGE
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono font-semibold mt-1 block">
                  STRENGTH &amp; RECOVERY CLUB
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-md">
              Eleiko competition platforms, athletic conditioning, and 38°F contrast plunge suites.
            </p>

            {/* Essential Contact Details (Clean, single-line items) */}
            <div className="pt-2 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                <span>Civil Lines, Near Reserve Bank Square, Nagpur</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                <span>05:00 – 23:00 Daily • Keycard Access</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                <a href="mailto:ops@ironforge.in" className="hover:text-white transition-colors">
                  ops@ironforge.in
                </a>
              </div>
            </div>
          </div>

          {/* Programs Navigation (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-bold font-mono pb-2 border-b border-white/[0.08]">
              PROGRAMS
            </div>

            <ul className="space-y-2 text-xs font-mono">
              {[
                { label: 'Barbell & Strength', page: 'programs' },
                { label: 'Hypertrophy & Shape', page: 'programs' },
                { label: 'Fat Loss & Conditioning', page: 'programs' },
                { label: 'Cold Plunge & Sauna', page: 'programs' }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handlePageNav(item.page)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 py-0.5 text-left w-full group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#FF5500] group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation / Facility (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider text-white font-bold font-mono pb-2 border-b border-white/[0.08]">
              FACILITY
            </div>

            <ul className="space-y-2 text-xs font-mono">
              {[
                { label: 'Eleiko Platforms', page: 'trainers' },
                { label: 'Equipment Specs', page: 'home' },
                { label: 'Coaching Team', page: 'trainers' },
                { label: 'Facility Floorplan', page: 'home' }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handlePageNav(item.page)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 py-0.5 text-left w-full group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#FF5500] transition-colors" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tier 3: Minimal Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 pt-2">
          <div>
            © {new Date().getFullYear()} IRONFORGE. CIVIL LINES, NAGPUR.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white hover:text-black border border-white/10 text-slate-400 hover:text-black text-xs font-mono font-medium transition-all cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
