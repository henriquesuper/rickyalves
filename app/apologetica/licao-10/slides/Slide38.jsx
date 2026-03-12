'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide38() {
    const layers = [
        { name: 'Províncias Senatoriais', desc: 'Regiões pacificadas, governadas por procônsules. Ex: Acaia (onde Paulo comparece diante de Gálio).', color: colors.stampVerified },
        { name: 'Províncias Imperiais', desc: 'Regiões voláteis, com legiões militares. Ex: Síria.', color: colors.stampDebate },
        { name: 'Reinos-clientes', desc: 'Governantes locais mantidos por Roma enquanto colaboravam. Herodes era um desses.', color: colors.mapBlue },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>QUEM MANDAVA NO QUÊ</motion.h2>
                <div className="space-y-4">
                    {layers.map((l, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }} className="p-5 rounded-xl border-l-4" style={{ background: `${l.color}10`, borderLeftColor: l.color }}>
                            <h3 className="font-bold text-lg mb-1" style={{ color: l.color }}>{l.name}</h3>
                            <p className="text-base" style={{ color: colors.textLight }}>{l.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
