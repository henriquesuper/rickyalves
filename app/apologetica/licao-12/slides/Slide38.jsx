'use client';
import { motion } from 'framer-motion';
import { LabWrapper, DangerCard, colors } from './shared';

export function Slide38() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <DangerCard number={2} title="Ignorar o Gênero Literário" delay={0.2}
                    description="Ler poesia como ciência, parábola como história, apocalíptico como jornalismo."
                >
                    <div className="space-y-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="p-3 rounded-lg"
                            style={{ background: `${colors.lensAmber}08` }}
                        >
                            <p className="text-sm italic mb-1" style={{ color: colors.textLight }}>
                                &ldquo;Ele te cobrirá com suas penas, e debaixo de suas asas encontrarás refúgio.&rdquo;
                            </p>
                            <p className="text-xs" style={{ color: colors.textMuted }}>
                                Salmo 91:4 — Deus não tem penas. É linguagem poética, metafórica. Todo mundo sabe disso nesse exemplo.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="p-3 rounded-lg"
                            style={{ background: `${colors.lensRed}08` }}
                        >
                            <p className="text-sm mb-1" style={{ color: colors.textLight }}>
                                Mas quando chegamos a gêneros menos óbvios — como apocalíptico — as pessoas esquecem
                                que o mesmo princípio se aplica.
                            </p>
                            <p className="text-xs" style={{ color: colors.textMuted }}>
                                O dragão de Apocalipse 12 não é um réptil literal. 🐉
                            </p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4 text-xs italic"
                        style={{ color: colors.lensBlue }}
                    >
                        Próxima lição (13): vamos mergulhar fundo nos gêneros literários da Bíblia.
                    </motion.p>
                </DangerCard>
            </div>
        </LabWrapper>
    );
}
