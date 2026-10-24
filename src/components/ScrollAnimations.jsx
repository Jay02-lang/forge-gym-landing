import React from 'react';
import { motion } from 'framer-motion';

/**
 * First 5 Scrolling Effects from D:\SROLLING_ANIM8N\modern:
 * 1. Anim01_FadeIn: Smooth opacity fade in
 * 2. Anim02_SlideUp: Y-axis vertical slide up with opacity
 * 3. Anim03_StaggeredCascade: Container orchestrating staggered cascading entrance for children
 * 4. Anim04_ScaleUpReveal: Subtle scaling from 0.94 -> 1 with fade
 * 5. Anim05_DirectionalSlide: Horizontal directional slides (SlideFromLeft, SlideFromRight)
 *
 * NOTE: As designed in D:\SROLLING_ANIM8N\modern, once is set to false so animations
 * trigger reliably every time the user scrolls through any page or section.
 */

// Effect 1: Fade In (Anim01_FadeIn)
export function FadeIn({ children, className = '', delay = 0, duration = 0.6, once = true, amount = 0.1, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Effect 2: Slide Up (Anim02_SlideUp)
export function SlideUp({ children, className = '', delay = 0, y = 28, duration = 0.6, once = true, amount = 0.1, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Effect 3: Staggered Cascade (Anim03_StaggeredCascade)
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerContainer({ children, className = '', delayChildren = 0, staggerChildren = 0.08, once = true, amount = 0.08, ...props }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { delayChildren, staggerChildren },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', ...props }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Effect 4: Scale Up Reveal (Anim04_ScaleUpReveal)
export function ScaleUpReveal({ children, className = '', delay = 0, duration = 0.6, scale = 0.96, once = true, amount = 0.1, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Effect 5: Directional Slide (Anim05_DirectionalSlide)
export function SlideFromLeft({ children, className = '', delay = 0, x = -24, duration = 0.6, once = true, amount = 0.1, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideFromRight({ children, className = '', delay = 0, x = 24, duration = 0.6, once = true, amount = 0.1, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
