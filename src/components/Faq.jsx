import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Can I use chalk and drop deadlifts?',
    a: '100% yes. We supply industrial chalk stands throughout every platform. All 14 deadlift stations feature sound-dampened 2.5-inch vulcanized rubber drop pads. We only ask that you strip your bar and return all calibrated plates to their designated racks when your session is finished.'
  },
  {
    q: 'Can I tour the facility before applying for membership?',
    a: 'Yes. Click "Schedule a Tour" to select your preferred time window. A certified coach will guide you through our platforms, demonstrate our equipment, and help you select the ideal training track based on your goals.'
  },
  {
    q: 'What are the hygiene and temperature standards for the Cold Plunge and Sauna?',
    a: 'Our cold plunge tubs are continuously chilled to 38°F (3.3°C) and utilize hospital-grade commercial ozone generators, 20-micron microfiltration, and dual UV-C sterilization chambers. The cedar sauna operates at 195°F with clean negative-ion circulation.'
  },
  {
    q: 'What are the facility hours for members?',
    a: 'FORGE is open daily from 5:00 AM to 11:00 PM for all active members via encrypted keycard entry. Staffed coaching hours and recovery suite consultations run from 8:00 AM to 8:00 PM daily.'
  },
  {
    q: 'Is there an initiation fee or long-term contract lock-in?',
    a: 'Zero contracts. All memberships are month-to-month and can be paused or canceled anytime with 7 days written notice before your billing cycle. No hidden maintenance fees or surprise annual charges.'
  },
  {
    q: 'What equipment brands do you feature on the floor?',
    a: 'Our floor is 100% Eleiko and Rogue competition certified. We feature Eleiko IWF weightlifting bars, IPF power bars, calibrated steel discs, 4 Rogue Monster Monolifts, Kabuki specialty bars, Hammer Strength iso-lateral machines, and solid urethane dumbbells up to 175 lbs.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>EVERYTHING YOU NEED TO KNOW</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
          FREQUENTLY ASKED <span className="text-yellow-400">QUESTIONS.</span>
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-zinc-900/80 border-yellow-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                  : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <span className="font-display font-black text-lg text-white uppercase tracking-tight">
                  {faq.q}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen ? 'bg-yellow-400 text-black' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans border-t border-zinc-800/60 mt-1">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
