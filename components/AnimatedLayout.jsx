'use client';

import * as React from 'react';
import { AnimatePresence } from 'framer-motion';

const AnimatedLayout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default AnimatedLayout; 