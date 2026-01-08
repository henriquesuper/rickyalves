'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import AnimatedLayout from './AnimatedLayout';
import SystemHeader from './Navigation/SystemHeader';
import CommandDock from './Navigation/CommandDock';

export default function LayoutContentRenderer({ children }) {
  const pathname = usePathname();

  // Rotas que devem ter layout limpo (sem header/footer)
  const cleanLayoutRoutes = ['/salmos', '/mobile-interface', '/apologetica'];
  const showNavbarAndFooter = !cleanLayoutRoutes.some(route => pathname?.startsWith(route));

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