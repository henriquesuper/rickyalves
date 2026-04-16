'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, colors } from './shared';

export function Slide08() {
    return (
        <LabWrapper stratum="first-lens">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    ἑρμηνεύω
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm mb-8"
                    style={{ color: colors.textMuted }}
                >
                    hermēneuō — interpretar, traduzir, explicar
                </motion.p>

                <VerseCard
                    reference="Lucas 24:27"
                    text="E, começando por Moisés e todos os profetas, explicou-lhes o que constava a respeito dele em todas as Escrituras."
                    readingType="focused"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 p-4 rounded-xl text-center"
                    style={{ background: `${colors.lensBlue}08`, border: `1px solid ${colors.lensBlue}15` }}
                >
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        A palavra <span style={{ color: colors.lensBlue, fontWeight: 600 }}>hermenêutica</span> vem
                        do momento mais icônico de estudo bíblico da história — Jesus no caminho de Emaús,
                        <span style={{ color: colors.lensTeal }}> interpretando</span> as Escrituras para dois discípulos.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-4 text-xs text-center italic"
                    style={{ color: colors.textMuted }}
                >
                    O verbo grego usado por Lucas é diermēneusen — da mesma raiz de hermenêutica.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
