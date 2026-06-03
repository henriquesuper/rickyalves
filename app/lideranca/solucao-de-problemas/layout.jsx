'use client';

import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const grotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-grotesk',
    display: 'swap',
    weight: ['400', '500', '600', '700'],
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    weight: ['400', '500', '600'],
});

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
    weight: ['400', '500'],
});

export default function SolucaoProblemasLayout({ children }) {
    return (
        <div
            className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}
            style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                backgroundColor: '#0E1217',
                color: '#F3F5F8',
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    );
}
