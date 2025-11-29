"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const NeuralCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[data-interactive="true"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide cursor until first movement to prevent top-left flash
  // if (!isVisible) return null; // Removed to prevent hydration mismatch

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-emerald-400 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(52, 211, 153, 0.2)" : "transparent",
        borderColor: isHovering ? "rgba(52, 211, 153, 0.8)" : "rgba(52, 211, 153, 1)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {/* Crosshair Center Dot */}
      <motion.div 
        className="w-1 h-1 bg-emerald-400 rounded-full"
        animate={{ scale: isHovering ? 0 : 1 }} 
      />
    </motion.div>
  );
};

export default NeuralCursor;