import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'trainers', label: 'Trainers & Facilities' },
  ];

  const handleItemClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F8FAFC]/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs' 
            : 'bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200/70 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand: IRONFORGE */}
          <button 
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-black rounded-lg shadow-sm">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-slate-950">
              IRONFORGE
            </span>
          </button>

          {/* Desktop Navigation Links with Animated Underline */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer group ${
                    isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-950 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-left rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Dark Contrast Pill CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="dark-pill-btn text-xs uppercase tracking-wider px-6 py-2.5 cursor-pointer flex items-center gap-2"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 text-sm font-bold text-slate-800 animate-in fade-in duration-200">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`relative block w-full text-left py-2.5 transition-colors cursor-pointer ${
                  isActive ? 'text-slate-950 font-black' : 'text-slate-600'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNavUnderline"
                    className="absolute bottom-0 left-0 w-16 h-[2px] bg-slate-950 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full dark-pill-btn text-xs uppercase tracking-wider py-3 cursor-pointer inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
      </header>
      {/* Spacer so the page content never hides behind the fixed navbar */}
      <div className="h-[62px] sm:h-[72px]" aria-hidden="true" />
    </>
  );
}
