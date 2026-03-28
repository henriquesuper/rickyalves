'use client';

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function MateusLayout({ children }) {
  return (
    <div
      className={`${playfair.variable} ${inter.variable} font-sans`}
      style={{
        '--color-gold': '#D4A853',
        '--color-blue': '#2C3E6B',
        '--color-offwhite': '#FAF6F0',
        '--color-charcoal': '#2D2926',
        '--color-terracotta': '#C47A5A',
        '--color-graphite': '#3D3835',
        '--color-olive': '#7A8B5C',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
        backgroundColor: '#FAF6F0',
        color: '#3D3835',
        minHeight: '100vh',
        cursor: 'auto',
        position: 'relative',
        zIndex: 50,
      }}
    >
      {children}
    </div>
  );
}
