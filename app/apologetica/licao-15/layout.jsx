'use client';

import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
});

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-cormorant',
    display: 'swap',
    weight: ['300', '400', '500', '600'],
    style: ['normal', 'italic'],
});

export default function Licao15Layout({ children }) {
    return (
        <div
            className={`${playfair.variable} ${cormorant.variable}`}
            style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                backgroundColor: '#F4ECD8',
                color: '#2A1F14',
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    );
}
