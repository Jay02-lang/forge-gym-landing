import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, QrCode, ArrowRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeSlot: 'MORNING (8:00 AM - 12:00 PM)',
    track: 'POWERLIFTING & STRENGTH',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans overflow-y-auto"
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white/95 backdrop-blur-xl p-5 sm:p-8 rounded-3xl shadow-2xl border border-slate-200 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="text-left space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Calendar className="w-3 h-3 text-slate-900" />
                <span>FACILITY WALKTHROUGH &amp; MEMBERSHIP</span>
              </div>
              <h3 className="font-display font-black text-3xl text-slate-950 uppercase tracking-tight">
                STEP ONTO THE PLATFORM.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Tour our calibrated Eleiko steel, inspect the thermal recovery suite, and consult with a certified coach before membership initiation.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left font-mono">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  FULL ATHLETE NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@athlete.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    TIME WINDOW (STAFFED)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors font-mono"
                  >
                    <option value="MORNING (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="AFTERNOON (12:00 PM - 5:00 PM)">Afternoon (12:00 PM - 5:00 PM)</option>
                    <option value="EVENING (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    PRIMARY TRAINING FOCUS
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors font-mono"
                  >
                    <option value="POWERLIFTING & STRENGTH">Powerlifting &amp; Strength</option>
                    <option value="OLYMPIC WEIGHTLIFTING">Olympic Weightlifting</option>
                    <option value="TACTICAL CONDITIONING">Conditioning / HYROX</option>
                    <option value="THERMAL RECOVERY">Contrast Recovery &amp; Longevity</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="dark-pill-btn w-full py-4 text-xs font-display uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>CONFIRM WALKTHROUGH &amp; MEMBERSHIP</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                <span>Zero high-pressure sales. Direct facility inspection.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center space-y-6 font-mono">
            <div className="w-16 h-16 bg-slate-950 text-white rounded-full mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-slate-600 text-xs uppercase font-bold tracking-widest">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-display font-black text-3xl text-slate-950 uppercase tracking-tight">
                SEE YOU ON THE FLOOR, {formData.name.split(' ')[0].toUpperCase()}!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto font-sans">
                Confirmation code dispatched to <strong className="text-slate-950">{formData.email}</strong>. Present this code at our Indiranagar reception:
              </p>
            </div>

            {/* Confirmation Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-xs mx-auto space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-left border-b border-slate-200 pb-2">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">RESERVATION CODE</div>
                  <div className="font-mono font-black text-xl text-slate-950 tracking-wider">
                    FORGE-TOUR-8842
                  </div>
                </div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg p-1 flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-slate-950" />
                </div>
              </div>
              <div className="text-left text-[11px] text-slate-600 space-y-1">
                <div>FOCUS: {formData.track}</div>
                <div>WINDOW: {formData.timeSlot}</div>
                <div>LOCATION: 100-Ft Road, Indiranagar</div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="dark-pill-btn px-8 py-3.5 text-xs font-display uppercase tracking-wider cursor-pointer"
            >
              DONE &amp; RETURN TO SITE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
