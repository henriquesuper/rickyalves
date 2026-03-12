'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide44() {
    const zones = [
        { name: 'Pátio dos Gentios', desc: 'Aberto a todos. Comércio, câmbio. Onde Jesus virou as mesas.', color: colors.mapBlue, emoji: '🌍' },
        { name: 'Pátio das Mulheres', desc: 'Judias podiam ir até aqui — não mais adiante.', color: colors.stampDebate, emoji: '👩' },
        { name: 'Pátio de Israel', desc: 'Apenas homens judeus.', color: colors.amber, emoji: '👤' },
        { name: 'Santo dos Santos', desc: 'Apenas o sumo sacerdote, uma vez por ano (Yom Kippur). Separado por cortina.', color: '#E05555', emoji: '🔥' },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>O TEMPLO — AS BARREIRAS</motion.h2>
                <div className="space-y-3">
                    {zones.map((z, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.2 }} className="flex items-center gap-4 p-4 rounded-xl border-l-4" style={{ background: `${z.color}10`, borderLeftColor: z.color }}>
                            <span className="text-3xl">{z.emoji}</span>
                            <div>
                                <h3 className="font-bold text-base" style={{ color: z.color }}>{z.name}</h3>
                                <p className="text-sm" style={{ color: colors.textLight }}>{z.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-6 text-center text-lg font-bold" style={{ color: colors.stampDebate }}>
                    &quot;A cortina do Templo se rasgou em duas&quot; (Mt 27:51) — cada barreira caiu.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
