import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  Dumbbell,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialContext = {} }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeSlot: 'MORNING (8:00 AM - 12:00 PM)',
    track: 'GET STRONGER & LIFT HEAVIER',
    faculty: 'ANY COACH (BEST MATCH FOR ME)',
    notes: ''
  });

  // Sync initial context whenever modal opens or context changes
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(prev => ({
        ...prev,
        track: initialContext.program || initialContext.plan || prev.track,
        faculty: initialContext.faculty || prev.faculty
      }));
    }
  }, [isOpen, initialContext]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-sans overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90dvh] sm:max-h-[92vh] overflow-y-auto overscroll-contain bg-white/98 backdrop-blur-xl p-5 sm:p-8 rounded-t-[28px] sm:rounded-3xl shadow-2xl border border-slate-200 text-slate-900 pb-safe"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator Handle */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto sm:hidden mb-3.5" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 active:bg-slate-300 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="text-left space-y-2 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-mono font-bold text-[10px] uppercase tracking-wider">
                <Calendar className="w-3 h-3 text-slate-950 shrink-0" />
                <span>EASY TOUR SIGNUP • ZERO PRESSURE</span>
              </div>
              <h3 
                id="booking-modal-title"
                className="font-display font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight"
              >
                COME VISIT THE GYM.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Walk through our lifting platforms, check out the ice baths and cedar sauna, and chat with friendly coaches before deciding to join.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-4 text-left">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                  <User className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  <span>YOUR FULL NAME *</span>
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium min-h-[46px]"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                    <Mail className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span>EMAIL ADDRESS *</span>
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    required
                    placeholder="alex@athlete.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium min-h-[46px]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                    <Phone className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span>PHONE OR WHATSAPP *</span>
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-950 focus:ring-2 focus:ring-slate-950/10 transition-all font-sans font-medium min-h-[46px]"
                  />
                </div>
              </div>

              {/* Discipline & Coach Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                    <Dumbbell className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span>WHAT IS YOUR GOAL?</span>
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors font-mono font-bold min-h-[46px]"
                  >
                    <option value="GET STRONGER & LIFT HEAVIER">Get Stronger &amp; Lift Confidently</option>
                    <option value="BUILD LEAN MUSCLE">Build Lean Muscle &amp; Shape</option>
                    <option value="BURN FAT & LOSE WEIGHT">Burn Fat &amp; Lose Weight</option>
                    <option value="ATHLETIC SPEED & STAMINA">Athletic Speed &amp; Stamina</option>
                    <option value="CARDIO ENGINE & HYROX">Cardio Fitness &amp; Endurance (HYROX)</option>
                    <option value="RECOVERY & SORENESS RELIEF">Cold Plunge, Sauna &amp; Recovery</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                    <UserCheck className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    <span>CHOOSE A COACH</span>
                  </label>
                  <select
                    value={formData.faculty}
                    onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                    className="w-full bg-slate-50/90 border border-slate-200 rounded-xl sm:rounded-2xl px-3.5 py-3 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-slate-950 transition-colors font-mono font-bold min-h-[46px]"
                  >
                    <option value="ANY COACH (BEST MATCH FOR ME)">Any Coach (Best Match For Me)</option>
                    <option value="ALEX MORGAN">Alex Morgan (Barbells &amp; Form)</option>
                    <option value="SARAH LEE">Sarah Lee (Cardio &amp; Stamina)</option>
                    <option value="MIKE JOHNSON">Mike Johnson (Muscle Growth &amp; Food)</option>
                    <option value="EMMA DAVIS">Emma Davis (Mobility &amp; Soreness Relief)</option>
                  </select>
                </div>
              </div>

              {/* Time Window */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-slate-800 tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  <span>WHEN WOULD YOU LIKE TO VISIT?</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'MORNING (8:00 AM - 12:00 PM)', label: 'MORNING', sub: '8AM – 12PM' },
                    { id: 'AFTERNOON (12:00 PM - 5:00 PM)', label: 'AFTERNOON', sub: '12PM – 5PM' },
                    { id: 'EVENING (5:00 PM - 8:00 PM)', label: 'EVENING', sub: '5PM – 8PM' }
                  ].map((slot) => {
                    const isSelected = formData.timeSlot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot.id })}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer font-mono min-h-[46px] ${
                          isSelected
                            ? 'bg-[#FF5500] text-black border-[#FF5500] font-bold shadow-[0_0_12px_rgba(255,85,0,0.35)]'
                            : 'bg-slate-50/90 text-slate-700 border-slate-200 hover:bg-slate-100 active:bg-slate-200'
                        }`}
                      >
                        <div className="text-[11px] font-bold">{slot.label}</div>
                        <div className={`text-[10px] ${isSelected ? 'text-black/80 font-bold' : 'text-slate-500'}`}>
                          {slot.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#FF5500] hover:bg-[#FF6A1A] text-black rounded-full w-full py-4 text-xs font-display font-black uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_24px_rgba(255,85,0,0.35)] transition-all min-h-[50px] active:scale-[0.98]"
                >
                  <span>CONFIRM FACILITY TOUR &amp; VISIT</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-sans text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Relaxed walkthrough. No pressure, friendly coaches ready to help.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#FF5500] text-black rounded-2xl mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              <Check className="w-8 h-8 text-black stroke-[3]" />
            </div>

            <div className="space-y-1.5">
              <span className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 font-mono text-[10px] font-bold uppercase tracking-wider">
                TOUR CONFIRMED • WE ARE READY FOR YOU
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight">
                WELCOME, {formData.name.split(' ')[0].toUpperCase()}.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto font-sans leading-relaxed">
                Your visit is scheduled! We sent your tour confirmation and directions to <strong className="text-slate-950">{formData.email}</strong>.
              </p>
            </div>

            {/* Confirmation Ticket */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 max-w-sm mx-auto space-y-2.5 text-left text-xs font-mono">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-500 uppercase text-[10px]">BOOKING CODE:</span>
                <span className="font-black text-slate-950 tracking-wider">FORGE-TOUR-9241</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-1.5 text-[11px]">
                <span className="text-slate-500">MEMBER:</span>
                <span className="font-bold text-slate-950">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-1.5 text-[11px]">
                <span className="text-slate-500">GOAL:</span>
                <span className="font-bold text-slate-950 truncate max-w-[190px]">{formData.track}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-1.5 text-[11px]">
                <span className="text-slate-500">COACH:</span>
                <span className="font-bold text-slate-950 truncate max-w-[190px]">{formData.faculty}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-500">TIME:</span>
                <span className="font-bold text-slate-950">{formData.timeSlot}</span>
              </div>
            </div>

            <div className="text-[11px] font-sans text-slate-600 max-w-xs mx-auto leading-relaxed">
              Show your name or code at our front desk in Civil Lines, Nagpur. We look forward to meeting you!
            </div>

            <button
              onClick={handleResetAndClose}
              className="dark-pill-btn px-8 py-3.5 text-xs font-display uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
            >
              <span>RETURN TO WEBSITE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
