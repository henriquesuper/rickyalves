'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide48() {
    const types = [
        { emoji: '⚔️', title: 'Messias Guerreiro', desc: 'Rei davídico que expulsaria Roma. Expectativa mais popular.', color: colors.stampDebate },
        { emoji: '📜', title: 'Messias Sacerdotal', desc: 'Purificaria o culto. Manuscritos do Mar Morto mencionam dois messias.', color: colors.amber },
        { emoji: '☁️', title: 'Messias Cósmico', desc: '"Filho do Homem" de Daniel 7 — figura sobrenatural que vem com as nuvens.', color: colors.mapBlue },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>EXPECTATIVAS MESSIÂNICAS</motion.h2>
                <div className="space-y-4 mb-6">
                    {types.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: `${t.color}10`, border: `1px solid ${t.color}30` }}>
                            <span className="text-3xl shrink-0">{t.emoji}</span>
                            <div>
                                <h3 className="font-bold text-lg" style={{ color: t.color }}>{t.title}</h3>
                                <p className="text-base" style={{ color: colors.textLight }}>{t.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="p-5 rounded-xl text-center" style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}>
                    <p className="text-lg" style={{ color: colors.textLight }}>Jesus combinou elementos dos três — e frustrou todos. <span style={{ fontWeight: 'bold', color: colors.amber }}>Messias sofredor</span> não estava no cardápio.</p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
