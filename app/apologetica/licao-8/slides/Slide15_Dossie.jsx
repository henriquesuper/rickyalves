// Slide 15 - Dossiê de Tradução: Casos Famosos
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const cases = [
    { icon: '👤', title: 'Nephesh', desc: 'alma/vida/garganta', ref: 'Gênesis 2:7' },
    { icon: '⚔️', title: 'Golias', desc: '4 ou 6 côvados de altura?', ref: '1 Samuel 17:4' },
    { icon: '✡️', title: 'YHWH', desc: 'Deus, SENHOR, Jeová...', ref: 'Êxodo 3:14' },
    { icon: '🎯', title: 'Hilasterion', desc: 'propiciação ou expiação?', ref: 'Romanos 3:25' },
    { icon: '👩', title: 'Almah', desc: 'virgem ou jovem mulher?', ref: 'Isaías 7:14' },
];

export default function Slide15_Dossie() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-2 text-center"
                    style={{ color: colors.goldBright }}
                >
                    DOSSIÊ DE TRADUÇÃO
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 text-lg"
                    style={{ color: colors.textMedium }}
                >
                    Casos famosos que vale a pena conhecer
                </motion.p>

                <div className="grid md:grid-cols-5 gap-3 w-full">
                    {cases.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.15, type: 'spring' }}
                        >
                            <PrismCard variant="neutral" className="h-full text-center">
                                <span className="text-3xl block mb-2">{c.icon}</span>
                                <h3 className="text-sm font-bold" style={{ color: colors.goldBright }}>
                                    {c.title}
                                </h3>
                                <p className="text-xs" style={{ color: colors.textLight }}>{c.desc}</p>
                                <p className="text-xs mt-1" style={{ color: colors.textMedium }}>{c.ref}</p>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 text-center text-sm"
                    style={{ color: colors.goldAged }}
                >
                    Vamos abrir cada um...
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
