'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ScrollSection - Wrapper para seções com scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Conteúdo da seção
 * @param {string} props.id - ID único para a seção
 * @param {'light' | 'dark' | 'warm'} props.theme - Tema visual
 * @param {boolean} props.fullHeight - Se deve ocupar altura total da viewport
 * @param {number} props.minHeight - Altura mínima em vh (para seções pinned)
 * @param {string} props.className - Classes CSS adicionais
 */
export function ScrollSection({
    children,
    id,
    theme = 'light',
    fullHeight = true,
    minHeight = 100,
    className = ''
}) {
    const ref = useRef(null);

    const themes = {
        light: {
            bg: 'bg-[#F5F0E6]',
            text: 'text-[#1A1A1A]',
            border: ''
        },
        dark: {
            bg: 'bg-[#0A0A0A]',
            text: 'text-white',
            border: 'shadow-[inset_0_0_100px_rgba(59,130,246,0.1)]'
        },
        warm: {
            bg: 'bg-[#F5E6C8]',
            text: 'text-[#1A1A1A]',
            border: ''
        }
    };

    const currentTheme = themes[theme] || themes.light;

    return (
        <section
            ref={ref}
            id={id}
            className={`
                relative w-full
                ${currentTheme.bg}
                ${currentTheme.text}
                ${currentTheme.border}
                ${fullHeight ? 'min-h-screen' : ''}
                ${className}
            `}
            style={{ minHeight: fullHeight ? `${minHeight}vh` : 'auto' }}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </section>
    );
}

/**
 * ScrollProgress - Hook wrapper para obter progresso de scroll de uma seção
 */
export function useScrollSection(ref) {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    return { scrollYProgress };
}

export default ScrollSection;
