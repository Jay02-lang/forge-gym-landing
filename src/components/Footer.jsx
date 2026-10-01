import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  Compass,
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
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home Sanctuary', pageId: 'home', code: '01' },
    { label: 'Programs & Periodization', pageId: 'programs', code: '02' },
    { label: 'Faculty & Head Coaches', pageId: 'trainers', code: '03' },
    { label: 'Facility Blueprint & Specs', pageId: 'trainers', code: '04' },
    { label: 'Contrast Recovery Suites', pageId: 'programs', code: '05' },
    { label: 'Commercial Membership', action: onOpenBooking, code: '06' },
  ];

  return (
    <footer className="relative bg-[#F8FAFC] text-[#0F172A] border-t border-[#CBD5E1] font-sans selection:bg-[#CADDEE] selection:text-[#0F172A] overflow-hidden">
      
      {/* =========================================================================
          BACKGROUND LAYER: CLEARLY VISIBLE ATHLETIC WORKOUT SCENE
      ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
          alt="Athletes training at calibrated workout platforms"
          className="w-full h-full object-cover opacity-35 sm:opacity-45 filter contrast-115 brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/80 via-[#F8FAFC]/60 to-[#F8FAFC]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        
        {/* =========================================================================
            TIER 1: ARCHITECTURAL INITIATION & BRAND BAR
        ========================================================================= */}
        <div className="pb-10 border-b border-[#CBD5E1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-black text-2xl font-display shadow-md">
              <Zap className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <span className="font-display text-2xl font-black tracking-tight text-[#0F172A] block leading-none">
                IRONFORGE.
              </span>
              <span className="text-[11px] tracking-widest text-slate-600 uppercase font-mono font-bold mt-1 block">
                HUMAN PERFORMANCE SANCTUARY // BENGALURU
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#CBD5E1] text-xs font-mono text-slate-800 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span>IPF &amp; IWF SPECIFICATION • ELEIKO RTC</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#0F172A] hover:bg-black text-white font-display text-xs font-black uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:bg-slate-900 cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <span>SCHEDULE FACILITY TOUR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            TIER 2: THE 3-COLUMN AUTHORITY GRID (NO NEWSLETTER)
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-[#CBD5E1]">
          
          {/* Column 1: Monolith Ethos & Facility Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs uppercase tracking-wider text-[#0F172A] font-black pb-1 border-b border-[#CBD5E1] font-mono flex items-center justify-between">
              <span>SANCTUARY ETHOS &amp; COORDINATES</span>
              <span className="text-[10px] text-slate-500 font-bold">ZONE 00</span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-sans max-w-md">
              An uncompromising strength and human performance sanctuary engineered with certified Eleiko IPF competition platforms, sports science periodization, and continuous contrast recovery suites.
            </p>

            <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-[#CBD5E1] shadow-xs space-y-2.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0F172A] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="text-[#0F172A] font-bold">100-Ft Road, HAL 2nd Stage</div>
                  <div className="text-slate-600">Indiranagar, Bangalore 560038</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-600 font-mono pt-1.5 border-t border-[#CBD5E1]/60">
                <Compass className="w-3.5 h-3.5 text-slate-700" />
                <span>COORDINATES: 12.9716° N, 77.5946° E</span>
              </div>
            </div>
          </div>

          {/* Column 2: Architectural Sitemap Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#0F172A] font-black pb-1 border-b border-[#CBD5E1] font-mono flex items-center justify-between">
              <span>FACILITY DIRECTORY</span>
              <span className="text-[10px] text-slate-500 font-bold">INDEX</span>
            </div>

            <div className="space-y-1.5">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action ? item.action : () => handlePageNav(item.pageId)}
                  className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-[#CBD5E1] hover:shadow-xs text-left transition-all duration-150 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold text-slate-500 group-hover:text-[#0F172A] transition-colors">
                      {item.code}
                    </span>
                    <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-700 group-hover:text-[#0F172A] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Operational Reality & Direct Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#0F172A] font-black pb-1 border-b border-[#CBD5E1] font-mono flex items-center justify-between">
              <span>OPERATIONAL HOURS</span>
              <span className="text-[10px] text-slate-500 font-bold">SCHEDULE</span>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-[#CBD5E1] shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold font-mono text-xs">
                  <Clock className="w-3.5 h-3.5 text-[#0F172A]" />
                  <span>5:00 AM – 11:00 PM DAILY</span>
                </div>
                <div className="text-slate-600 text-[11px]">
                  Keycard Facility Access (Mon – Sun)
                </div>
                <div className="text-[11px] text-slate-900 font-semibold pt-1.5 border-t border-[#CBD5E1]/60">
                  Staffed Tours: 8:00 AM – 8:00 PM
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2.5 text-[#0F172A] font-mono text-xs">
                  <Phone className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span className="font-bold">+91 (80) 4122-IRON (4766)</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-600 font-mono text-xs">
                  <Mail className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span>ops@ironforge.in</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            TIER 3: ACCREDITED HARDWARE SPEC STRIP & SMOOTH BACK TO TOP
            (NO LEGAL BASELINE, NO NEWSLETTER)
        ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px]">
            <span className="text-slate-950 font-bold">CERTIFIED HARDWARE:</span>
            <span>ELEIKO CALIBRATED DISCS</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span>CONCEPT2 ERG BAY</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span>38°F CHILLED IMMERSION</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span>FINNISH CEDAR SAUNA</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#0F172A] hover:text-white border border-[#CBD5E1] text-[#0F172A] text-xs font-mono font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer shrink-0 group"
            aria-label="Scroll to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
