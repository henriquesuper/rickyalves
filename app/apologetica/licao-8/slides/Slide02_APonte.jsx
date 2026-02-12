// Slide 02 - A Ponte
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors, ImpactNumber } from './shared';

export default function Slide02_APonte() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    A Ponte
                </motion.h2>

                {/* Recap da L7 */}
                <PrismCard delay={0.3} variant="neutral" className="w-full mb-6">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-widest mb-3" style={{ color: colors.goldAged }}>
                            Lição 7: Temos o texto preservado ✓
                        </p>
                        <div className="flex justify-center gap-8 mb-4">
                            <ImpactNumber number="5.800+" label="manuscritos gregos" delay={0.5} color={colors.greekPrimary} />
                            <ImpactNumber number="✓" label="Mar Morto confirmou o AT" delay={0.7} color={colors.hebrewPrimary} />
                        </div>
                    </div>
                </PrismCard>

                {/* MAS... */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-center mb-6"
                >
                    <span className="text-4xl font-bold" style={{ color: colors.alertTerracota }}>
                        MAS...
                    </span>
                </motion.div>

                <PrismCard delay={1.2} variant="alert" className="w-full mb-6">
                    <p className="text-lg text-center" style={{ color: colors.textLight }}>
                        Esse texto está em <span style={{ color: colors.hebrewPrimary }} className="font-bold">hebraico</span>,{' '}
                        <span style={{ color: colors.hebrewPrimary }} className="font-bold">aramaico</span> e{' '}
                        <span style={{ color: colors.greekPrimary }} className="font-bold">grego</span>.
                    </p>
                </PrismCard>

                {/* Pergunta de hoje */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-center"
                >
                    <p className="text-sm uppercase tracking-widest mb-3" style={{ color: colors.goldAged }}>
                        Pergunta de Hoje
                    </p>
                    <p className="text-xl md:text-2xl font-bold" style={{ color: colors.textLight }}>
                        Quando você lê a Bíblia em português,<br />
                        <span style={{ color: colors.goldBright }}>está realmente lendo o que foi escrito?</span>
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 2.0 }}
                        className="text-sm mt-4 italic"
                        style={{ color: colors.textMedium }}
                    >
                        Resposta curta: sim, com nuances.<br />
                        Resposta longa: é esta aula inteira.
                    </motion.p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
