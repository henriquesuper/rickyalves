'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide61() {
    const points = [
        { icon: '🗺️', text: 'Israel era um território espremido entre impérios — não um país isolado.' },
        { icon: '📜', text: 'Alianças (berit) são o conceito central — não contratos, mas relações.' },
        { icon: '🏛️', text: 'Roma providenciou a infraestrutura que o evangelho usou para se espalhar.' },
        { icon: '🕍', text: 'O Templo era centro religioso, político e econômico — não uma "igreja."' },
        { icon: '👑', text: 'Dizer "Jesus é Senhor" era ato político tão forte quanto religioso.' },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O QUE COBRIMOS HOJE</motion.h2>
                <div className="space-y-3">
                    {points.map((p, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: `${colors.bgSurface}CC`, border: `1px solid ${colors.amber}15` }}>
                            <span className="text-2xl shrink-0">{p.icon}</span>
                            <p className="text-base" style={{ color: colors.textLight }}>{p.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
