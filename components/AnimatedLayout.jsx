'use client';

import * as React from 'react';
import { AnimatePresence } from 'framer-motion';

const AnimatedLayout = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <main>{children}</main>
    </AnimatePresence>
  );
};

export default AnimatedLayout; 