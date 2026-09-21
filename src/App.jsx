import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProgramsPage from './components/ProgramsPage';
import TrainersPage from './components/TrainersPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedFaculty, setSelectedFaculty] = useState('ANY SENIOR FACULTY COACH');

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
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct smooth scroll to integrated Membership & Faculty Initiation form (replaces popup modal)
  const handleOpenBooking = (coachName) => {
    if (typeof coachName === 'string' && coachName) {
      setSelectedFaculty(coachName);
    }
    if (currentPage !== 'home') {
      setCurrentPage('home');
      window.location.hash = 'home';
    }
    setTimeout(() => {
      const el = document.getElementById('membership-initiation-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col relative selection:bg-[#CADDEE] selection:text-[#0F172A] frost-page-bg">
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Dynamic 3-Page Active View */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenBooking={handleOpenBooking}
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

      {/* Redesigned Frost Architectural Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking} 
      />
    </div>
  );
}
