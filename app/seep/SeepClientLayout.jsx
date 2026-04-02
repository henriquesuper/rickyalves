'use client';

import { Inter, Montserrat, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export default function SeepLayout({ children }) {
  return (
    <>
      {/* Override root layout's cursor-none and bg-black */}
      <style jsx global>{`
        html.cursor-none { cursor: auto !important; }
        html.cursor-none * { cursor: inherit !important; }
        body { background: transparent !important; }
      `}</style>
      <div
        className={`${inter.variable} ${montserrat.variable} ${jetbrains.variable}`}
        style={{
          '--seep-dark': '#1B1B2F',
          '--seep-accent': '#162447',
          '--seep-gold': '#C6A94D',
          '--seep-light-gold': '#F5E6B8',
          '--seep-warm-bg': '#FAF8F4',
          '--seep-light-bg': '#F2F0EA',
          '--seep-text-dark': '#2C2C2C',
          '--seep-text-med': '#4A4A4A',
          '--seep-border': '#D4C9A8',
          '--seep-danger': '#C94444',
          '--seep-success': '#4A9B6E',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          cursor: 'auto',
          position: 'relative',
          zIndex: 50,
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </>
  );
}
