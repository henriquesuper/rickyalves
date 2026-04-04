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
          '--seep-dark': '#141418',
          '--seep-accent': '#1A1A22',
          '--seep-gold': '#8B2336',
          '--seep-light-gold': '#F5E0E4',
          '--seep-silver': '#B8B8C4',
          '--seep-warm-bg': '#F7F6F4',
          '--seep-light-bg': '#EFEEEC',
          '--seep-text-dark': '#1A1A1A',
          '--seep-text-med': '#4A4A4A',
          '--seep-border': '#D4D0CC',
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
