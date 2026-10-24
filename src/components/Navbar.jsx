import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, ArrowRight, Phone, MapPin } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll and close on ESC when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'trainers', label: 'Coaches & Tiers' },
  ];

  const handleItemClick = (id) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 pt-safe ${
          isScrolled 
            ? 'bg-[#07080A]/95 backdrop-blur-xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-2xl' 
            : 'bg-[#07080A]/85 backdrop-blur-md border-b border-white/[0.05] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand: IRONFORGE */}
            <button 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer text-left focus:outline-none min-h-[44px]"
            >
              <div className="w-8 h-8 bg-[#FF5500] text-black flex items-center justify-center font-black rounded-lg shadow-[0_0_14px_rgba(255,85,0,0.4)] group-hover:scale-105 transition-transform shrink-0">
                <Zap className="w-4 h-4 fill-black text-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-white leading-none">
                  IRONFORGE
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#FF5500] uppercase mt-0.5 font-bold">
                  PREMIUM STRENGTH &amp; FITNESS
                </span>
              </div>
            </button>

            {/* Desktop & Tablet Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative py-2 px-1 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer group min-h-[44px] inline-flex items-center ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#FF5500] rounded-full shadow-[0_0_10px_rgba(255,85,0,0.8)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: High-Contrast Focal Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#FF5500] hover:bg-[#FF6A1A] text-black text-xs font-mono font-black uppercase tracking-wider px-4 lg:px-6 py-2.5 rounded-full cursor-pointer flex items-center gap-2 shadow-[0_0_16px_rgba(255,85,0,0.35)] transition-all active:scale-95 min-h-[40px]"
              >
                <span>SCHEDULE TOUR</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Button (44x44px minimum touch target) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-300 hover:text-white active:bg-white/10 focus:outline-none cursor-pointer transition-colors"
                aria-label="Toggle Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Overlay Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Dim Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 top-[60px] bg-black/70 backdrop-blur-sm z-40 md:hidden"
                aria-hidden="true"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-50 md:hidden bg-[#07080A]/98 backdrop-blur-2xl border-b border-white/[0.1] px-5 pt-4 pb-7 space-y-4 text-sm font-bold text-slate-200 shadow-2xl max-h-[calc(100dvh-64px)] overflow-y-auto"
              >
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`relative w-full text-left py-3 px-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between min-h-[48px] ${
                          isActive ? 'bg-white/[0.06] text-white font-black' : 'text-slate-300 active:bg-white/[0.04]'
                        }`}
                      >
                        <span className="font-mono uppercase tracking-wider text-xs">{item.label}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Primary CTA */}
                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full bg-[#FF5500] hover:bg-[#FF6A1A] text-black text-xs font-mono font-black uppercase tracking-wider py-3.5 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(255,85,0,0.35)] min-h-[48px] active:scale-[0.98] transition-transform"
                  >
                    <span>SCHEDULE FACILITY TOUR</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  {/* Direct Contact Links in Mobile Drawer */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono text-slate-400">
                    <a
                      href="tel:+918041224766"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>CALL DESK</span>
                    </a>
                    <div className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 min-h-[44px]">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>CIVIL LINES</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer with Safe Area Support */}
      <div className="h-[60px] sm:h-[70px] pt-safe" aria-hidden="true" />
    </>
  );
}
