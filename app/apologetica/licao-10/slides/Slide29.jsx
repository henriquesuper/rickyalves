'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export function Slide29() {
    const places = [
        { name: 'Jerusalém', emoji: '🏔️', detail: '~750m altitude. "Subir a Jerusalém" não é metáfora.', color: colors.amber },
        { name: 'Mar Morto', emoji: '🌊', detail: '~430m abaixo do nível do mar. Ponto mais baixo da Terra.', color: colors.mapBlue },
        { name: 'Galileia', emoji: '🌾', detail: 'Fértil, cosmopolita, desprezada pelo sul. "Pode vir algo bom de Nazaré?"', color: colors.stampVerified },
        { name: 'Samaria', emoji: '🚧', detail: 'Judeus faziam desvio enorme para evitá-la. Jesus "precisava" passar (Jo 4:4).', color: colors.stampDebate },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    JERUSALÉM, JORDÃO, GALILEIA
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-5">
                    {places.map((p, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="p-5 rounded-xl" style={{ background: `${p.color}10`, border: `1px solid ${p.color}30` }}>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl">{p.emoji}</span>
                                <h3 className="font-bold text-lg" style={{ color: p.color }}>{p.name}</h3>
                            </div>
                            <p className="text-base" style={{ color: colors.textLight }}>{p.detail}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-center mt-6 text-sm italic" style={{ color: colors.textMuted }}>
                    Jerusalém → Jericó: ~1.000m de desnível em 27km — o cenário real da parábola do Bom Samaritano.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
