import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import TrainersPage from './components/TrainersPage';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedFaculty, setSelectedFaculty] = useState('ANY COACH (BEST MATCH FOR ME)');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState({});

  // Sync with URL hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'programs', 'trainers'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setCurrentPage(pageId);
    window.location.hash = pageId;
  };

  // Universal handler for booking modal or scrolling to intake on Home
  const handleOpenBooking = (context) => {
    let ctx = {};
    if (typeof context === 'string') {
      ctx = { faculty: context };
      setSelectedFaculty(context);
    } else if (context && typeof context === 'object') {
      ctx = context;
      if (context.faculty) {
        setSelectedFaculty(context.faculty);
      }
    }

    setBookingContext(ctx);
    setIsBookingOpen(true);
  };

  // Scroll to inline admissions section on Home
  const handleScrollToIntake = () => {
    if (currentPage !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('membership-initiation-section');
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 80);
    } else {
      const el = document.getElementById('membership-initiation-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F8FAFC] flex flex-col relative selection:bg-white/20 selection:text-white dark-page-bg overflow-x-clip">
      {/* Tactile Cast Iron Grain Substrate (Option 1) */}
      <div 
        aria-hidden="true" 
        className="cast-iron-grain" 
      />

      {/* Universal Admissions & Tour Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialContext={bookingContext} 
      />

      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Dynamic 3-Page Active View */}
      <main id="main-content" key={currentPage} className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking}
            onScrollToIntake={handleScrollToIntake}
            selectedFaculty={selectedFaculty}
            onSelectFaculty={setSelectedFaculty}
          />
        )}
        
        {currentPage === 'programs' && (
          <ProgramsPage 
            onOpenBooking={handleOpenBooking} 
          />
        )}

        {currentPage === 'trainers' && (
          <TrainersPage 
            onOpenBooking={handleOpenBooking} 
          />
        )}
      </main>

      {/* Architectural Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()} 
      />
    </div>
  );
}
