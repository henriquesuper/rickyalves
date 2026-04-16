'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

const lenses = [
    { n: 1, title: 'Contexto', desc: 'Literário, histórico-cultural, canônico', color: colors.lensTeal },
    { n: 2, title: 'Exegese vs Eisegese', desc: 'Extrair do texto, não inserir nele', color: colors.lensBlue },
    { n: 3, title: 'Escritura Interpreta Escritura', desc: 'Passagens claras iluminam obscuras', color: colors.lensTeal },
    { n: 4, title: 'Intenção Autoral', desc: 'O que o autor quis comunicar?', color: colors.lensBlue },
    { n: 5, title: 'Analogia da Fé', desc: 'A parte harmoniza com o todo', color: colors.lensTeal },
    { n: 6, title: 'Revelação Progressiva', desc: 'Semente → florescimento', color: colors.lensBlue },
    { n: 7, title: 'Sensibilidade ao Pacto', desc: 'Moral, cerimonial, civil', color: colors.lensAmber },
];

export function Slide33() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Seu Sistema Óptico
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.textMuted }}
                >
                    7 lentes calibradas. Você agora tem um método completo.
                </motion.p>

                <div className="space-y-2">
                    {lenses.map((l, i) => (
                        <motion.div
                            key={l.n}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: colors.bgSurface, border: `1px solid ${l.color}15` }}
                        >
                            <span
                                className="text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                style={{ background: `${l.color}20`, color: l.color }}
                            >
                                {l.n}
                            </span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold" style={{ color: colors.textLight }}>{l.title}</p>
                                <p className="text-xs" style={{ color: colors.textMuted }}>{l.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LabWrapper>
    );
}
