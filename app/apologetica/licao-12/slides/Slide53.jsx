'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, colors } from './shared';

export function Slide53() {
    return (
        <LabWrapper stratum="full-clarity">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs font-bold uppercase tracking-wider text-center mb-4"
                    style={{ color: colors.lensBlue }}
                >
                    O versículo mais mal interpretado
                </motion.p>

                <VerseCard
                    reference="Mateus 7:1"
                    text="Não julgueis, para que não sejais julgados."
                    readingType="blurry"
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 p-4 rounded-xl"
                    style={{ background: `${colors.lensRed}08`, border: `1px solid ${colors.lensRed}15` }}
                >
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensRed }}>
                        ⊘ Leitura popular
                    </p>
                    <p className="text-sm italic" style={{ color: colors.textMedium }}>
                        "Nunca avalie o comportamento de ninguém. Todas as escolhas são válidas. Quem critica está pecando."
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="mt-4 text-sm text-center"
                    style={{ color: colors.textMedium }}
                >
                    Vamos aplicar <span style={{ color: colors.lensBlue, fontWeight: 600 }}>todas as lentes</span> e ver o que aparece.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
