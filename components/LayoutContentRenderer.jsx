'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedLayout from './AnimatedLayout';

export default function LayoutContentRenderer({ children }) {
  const pathname = usePathname();
  const showNavbarAndFooter = pathname !== '/salmos';

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <AnimatedLayout>
        {children}
      </AnimatedLayout>
      {showNavbarAndFooter && <Footer />}
    </>
  );
} 