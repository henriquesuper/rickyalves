'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide19() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-8"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O Teste da Exegese
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-6 rounded-2xl text-left"
                    style={{ background: colors.bgSurface, border: `1px solid ${colors.lensBlue}15` }}
                >
                    <p className="text-lg italic mb-6" style={{ color: colors.lensBlue }}>
                        Antes de interpretar qualquer texto, pergunte:
                    </p>

                    {[
                        'Estou perguntando o que o texto diz?',
                        'Ou estou buscando que ele diga o que eu já quero ouvir?',
                    ].map((q, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.3 }}
                            className="flex items-start gap-3 mb-4"
                        >
                            <span className="text-lg" style={{ color: i === 0 ? colors.lensTeal : colors.lensRed }}>
                                {i === 0 ? '◎' : '⊘'}
                            </span>
                            <p className="text-base" style={{ color: colors.textLight }}>{q}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    Se a resposta que você encontra no texto é sempre a que você já queria, desconfie da lente, não do texto.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
