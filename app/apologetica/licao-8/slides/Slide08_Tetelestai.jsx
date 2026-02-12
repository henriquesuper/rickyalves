// Slide 08 - Tetelestai — Está Consumado ★
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, OriginalText, colors } from './shared';

export default function Slide08_Tetelestai() {
    return (
        <SlideWrapper variant="greek">
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
                {/* Palavra grega grande */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="mb-4"
                >
                    <OriginalText text="τετέλεσται" language="greek" size="xl" delay={0.3} className="justify-center flex" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl italic mb-2"
                    style={{ color: colors.greekLight }}
                >
                    tetelestai
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-3xl font-bold mb-1"
                    style={{ color: colors.textLight }}
                >
                    «Está consumado»
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-sm mb-8"
                    style={{ color: colors.textMedium }}
                >
                    — João 19:30
                </motion.p>

                <PrismCard delay={1.3} variant="greek" highlight className="max-w-2xl mb-6">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-wider mb-3" style={{ color: colors.greekPrimary }}>
                            Tempo PERFEITO em grego:
                        </p>
                        <p className="text-base mb-1" style={{ color: colors.textLight }}>
                            → Ação <span className="font-bold" style={{ color: colors.goldBright }}>COMPLETADA</span> no passado
                        </p>
                        <p className="text-base" style={{ color: colors.textLight }}>
                            → Com resultados que <span className="font-bold" style={{ color: colors.goldBright }}>PERMANECEM</span> no presente
                        </p>
                    </div>
                </PrismCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="space-y-2"
                >
                    <p className="text-lg italic" style={{ color: colors.goldAged }}>
                        «A obra foi completada<br />
                        E PERMANECE completada.<br />
                        Está feito, de uma vez por todas,<br />
                        com efeitos que duram PARA SEMPRE.»
                    </p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.4 }}
                        className="text-sm mt-4"
                        style={{ color: colors.textMedium }}
                    >
                        Duas palavras em português.<br />
                        Um universo de significado no grego.
                    </motion.p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
