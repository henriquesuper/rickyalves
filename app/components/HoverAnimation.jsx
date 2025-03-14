'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const HoverAnimation = ({ 
  children, 
  scale = 1.05, 
  rotate = 0, 
  shadow = true,
  className = "" 
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: scale, 
        rotate: rotate,
        boxShadow: shadow ? "0px 10px 30px rgba(0, 0, 0, 0.15)" : "none",
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation; 