import React, { useState } from 'react';
import { Check, X, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0d] border-t border-zinc-800/80 relative">
      
      {/* Background glow behind center card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Toggle */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">
            NO CONTRACTS • CANCEL ANYTIME • 100% TRANSPARENT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">
            MEMBERSHIP <span className="text-yellow-400">TIERS.</span>
          </h2>
          <p className="text-zinc-400 text-base mt-3">
            Choose your level of commitment. Every tier includes our 14-day zero-risk money-back guarantee.
          </p>

          {/* Billing Toggle Switch */}
          <div className="mt-8 inline-flex items-center bg-zinc-900 border border-zinc-800 p-1.5 rounded-2xl shadow-inner">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-yellow-400 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 text-xs font-mono font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? 'bg-yellow-400 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span className="bg-yellow-400/20 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-sans font-black">
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. IRON PASS */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                FOUNDATION
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white mt-1">
                IRON PASS
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Essential access for autonomous lifters who execute their own programming.
              </p>

              <div className="my-6">
                <span className="font-display text-5xl font-black text-white">
                  ${isAnnual ? '49' : '69'}
                </span>
                <span className="text-zinc-400 text-sm font-medium font-mono"> / month</span>
                {isAnnual && (
                  <div className="text-[11px] font-mono text-yellow-400 mt-1">Billed annually ($588/yr)</div>
                )}
              </div>

              <ul className="space-y-3.5 text-sm text-zinc-300 pt-4 border-t border-zinc-800/80">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Full floor & calibrated barbell access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Executive locker rooms & showers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Standard hours access (5am - 11pm)</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-600 line-through">
                  <X className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>RFID Keycard Access (After-hours)</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-600 line-through">
                  <X className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>Cold plunge & cedar sauna suite</span>
                </li>
                <li className="flex items-center gap-3 text-zinc-600 line-through">
                  <X className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>Monthly InBody composition scans</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-8 bg-zinc-800 hover:bg-zinc-700 text-white font-display font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-colors cursor-pointer"
            >
              SELECT IRON PASS
            </button>
          </div>

          {/* 2. THE FORGE PRO (FEATURED) */}
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-yellow-400 rounded-3xl p-8 flex flex-col justify-between relative shadow-[0_0_50px_rgba(250,204,21,0.18)] transform lg:-translate-y-3">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-display font-black text-xs uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>MOST POPULAR FOR ATHLETES</span>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-yellow-400 font-bold">
                ALL-INCLUSIVE ADAPTATION
              </div>
              <h3 className="font-display text-3xl font-black uppercase text-white mt-1">
                THE FORGE PRO
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Unrestricted access to every barbell, turf, and recovery chamber on the property.
              </p>

              <div className="my-6">
                <span className="font-display text-6xl font-black text-white">
                  ${isAnnual ? '89' : '119'}
                </span>
                <span className="text-zinc-400 text-sm font-medium font-mono"> / month</span>
                {isAnnual && (
                  <div className="text-[11px] font-mono text-yellow-400 mt-1">Billed annually ($1,068/yr)</div>
                )}
              </div>

              <ul className="space-y-3.5 text-sm text-zinc-200 pt-4 border-t border-zinc-800/80">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <strong className="text-white">RFID Keycard Access (5am - 11pm Daily)</strong>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Unlimited 38°F Cold Plunge & Cedar Sauna</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>All Tactical & Conditioning Group Clinics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Monthly Medical-grade InBody 770 Scans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Dedicated Locker & Towel Service</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>10% Off Nitro Cold Brew & Shake Bar</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-8 bg-yellow-400 hover:bg-yellow-300 text-black font-display font-black text-sm uppercase tracking-wider py-4 rounded-xl shadow-[0_10px_30px_rgba(250,204,21,0.4)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>JOIN FORGE PRO</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          {/* 3. ELITE BLACK VIP */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                CONCIERGE & COACHED
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white mt-1">
                ELITE BLACK VIP
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Dedicated 1-on-1 private coaching, personalized nutrition, and permanent VIP locker.
              </p>

              <div className="my-6">
                <span className="font-display text-5xl font-black text-white">
                  ${isAnnual ? '199' : '249'}
                </span>
                <span className="text-zinc-400 text-sm font-medium font-mono"> / month</span>
                {isAnnual && (
                  <div className="text-[11px] font-mono text-yellow-400 mt-1">Billed annually ($2,388/yr)</div>
                )}
              </div>

              <ul className="space-y-3.5 text-sm text-zinc-300 pt-4 border-t border-zinc-800/80">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Everything included in Forge Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <strong className="text-white">4 Private 1-on-1 Coaching Sessions / mo</strong>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Custom App-Based Periodized Programming</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Permanent VIP locker with laundry service</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Priority Platform & Equipment Booking</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-8 bg-zinc-800 hover:bg-zinc-700 text-white font-display font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-colors cursor-pointer"
            >
              APPLY FOR ELITE BLACK
            </button>
          </div>

        </div>

        {/* Guarantee Seal */}
        <div className="mt-14 max-w-xl mx-auto flex items-center justify-center gap-3 text-center text-xs font-mono text-zinc-400">
          <ShieldCheck className="w-5 h-5 text-yellow-400 shrink-0" />
          <span>IRONCLAD GUARANTEE: If you do not hit a verifiable PR or love our culture in your first 14 days, receive a 100% full refund. No questions asked.</span>
        </div>

      </div>
    </section>
  );
}
