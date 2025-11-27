'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import AnimatedLayout from './AnimatedLayout';
import SystemHeader from './Navigation/SystemHeader';
import CommandDock from './Navigation/CommandDock';

export default function LayoutContentRenderer({ children }) {
  const pathname = usePathname();
  const showNavbarAndFooter = pathname !== '/salmos' && pathname !== '/mobile-interface';

  return (
    <>
      {showNavbarAndFooter && <SystemHeader />}
      <AnimatedLayout>
        {children}
      </AnimatedLayout>
      {showNavbarAndFooter && (
        <>
          <CommandDock />
          <Footer />
        </>
      )}
    </>
  );
} 