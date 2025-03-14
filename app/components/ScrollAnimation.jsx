'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children, delay = 0, direction = 'up' }) => {
  let initial = {};
  
  if (direction === 'up') initial = { opacity: 0, y: 50 };
  if (direction === 'down') initial = { opacity: 0, y: -50 };
  if (direction === 'left') initial = { opacity: 0, x: 50 };
  if (direction === 'right') initial = { opacity: 0, x: -50 };
  if (direction === 'scale') initial = { opacity: 0, scale: 0.8 };
  
  return (
    <motion.div
      initial={initial}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 