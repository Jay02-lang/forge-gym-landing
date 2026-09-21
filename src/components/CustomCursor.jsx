import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch screens or if reduced motion is requested
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('canvas') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Central Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      {/* Outer Spring Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-yellow-400 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-yellow-400/15 scale-110 border-yellow-400/80'
            : 'w-8 h-8 scale-100 border-yellow-400/40'
        }`}
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 24 : 16)}px, ${
            pos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </>
  );
}
