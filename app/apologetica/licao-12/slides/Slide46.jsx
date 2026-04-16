'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

const mentions = [
    { book: 'Gênesis 3:21', desc: 'Deus mata um animal para cobrir Adão e Eva — sangue derramado para cobrir vergonha', icon: '🌿' },
    { book: 'Gênesis 4:4', desc: 'Abel oferece primogênito do rebanho — sacrifício aceito', icon: '🐑' },
    { book: 'Êxodo 12:7', desc: 'Sangue do cordeiro na porta — proteção contra a morte', icon: '🚪' },
    { book: 'Levítico 17:11', desc: '"A vida da carne está no sangue" — sangue é para expiação', icon: '📜' },
    { book: 'Hebreus 9:22', desc: '"Sem derramamento de sangue não há remissão" — ponto de chegada', icon: '✝️' },
];

export function Slide46() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Lei da Primeira Menção
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-center mb-6 italic"
                    style={{ color: colors.textMuted }}
                >
                    A primeira vez que um conceito aparece na Bíblia frequentemente define o padrão para todo o resto.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs font-bold uppercase tracking-wider text-center mb-4"
                    style={{ color: colors.lensPurple }}
                >
                    Estudo de caso: SANGUE
                </motion.p>

                <div className="space-y-2">
                    {mentions.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.15 }}
                            className="flex items-start gap-3 p-3 rounded-xl"
                            style={{ background: colors.bgSurface, border: `1px solid ${colors.lensPurple}10` }}
                        >
                            <span className="text-lg mt-0.5">{m.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-mono mb-1" style={{ color: colors.lensPurple }}>{m.book}</p>
                                <p className="text-sm" style={{ color: colors.textMedium }}>{m.desc}</p>
                            </div>
                            {i < mentions.length - 1 && (
                                <span className="text-xs self-center" style={{ color: colors.textMuted }}>↓</span>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-4 text-sm text-center"
                    style={{ color: colors.textMedium }}
                >
                    Do Éden ao Calvário: <span style={{ color: colors.lensPurple, fontWeight: 600 }}>uma linha contínua de sangue</span>.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
