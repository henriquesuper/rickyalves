'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, SourceCard, colors } from './shared';

export function Slide41() {
    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6"
                    style={{ color: colors.textLight }}
                >
                    A SEGUNDA REFERÊNCIA — QUASE INDISCUTÍVEL
                </motion.h2>

                {/* Source Card */}
                <SourceCard
                    author="Josefo"
                    work="Antiquitates Judaicae XX.200"
                    date="93-94 d.C."
                    quote="...a execução de Tiago, irmão de Jesus, que era chamado Cristo."
                    stance="neutral"
                    analysis="'Que era chamado Cristo' funciona como identificador — 'qual Jesus? Aquele que era chamado Cristo' — não como confissão de fé."
                    delay={0.4}
                />

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="mt-5 p-4 rounded-xl"
                    style={{ background: `${colors.fieldGreen}12`, border: `1px solid ${colors.fieldGreen}30` }}
                >
                    <p className="text-sm font-bold" style={{ color: colors.fieldGreen }}>
                        Esta passagem é aceita como autêntica pela maioria esmagadora dos estudiosos — inclusive céticos.
                    </p>
                </motion.div>

                {/* Logic */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-4 text-sm"
                    style={{ color: colors.textMedium }}
                >
                    Se Josefo menciona Jesus casualmente em XX.200, pressupõe que já o apresentou antes — apoiando a existência de um Testimonium original em XVIII.
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
