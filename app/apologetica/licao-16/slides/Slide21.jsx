'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, ThinRule, colors, fonts } from './shared';

export function Slide21({ slideIndex = 20 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapis}>
                    Um inimigo estrangeiro
                </SectionLabel>

                <div className="mt-10">
                    <QuietTitle size="lg" delay={0.7} weight={500} color={colors.lapis}>
                        Nabuzaradã
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.9 }}
                    className="mt-6 text-lg md:text-2xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        maxWidth: '34rem',
                        lineHeight: 1.4,
                    }}
                >
                    O pagão que pregou Jeremias
                    <br />
                    para Jeremias
                </motion.p>

                <div className="mt-12">
                    <ThinRule width="120px" color={colors.lapis} delay={2.6} opacity={0.5} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 3.2, duration: 0.9 }}
                    className="mt-8 text-sm md:text-base"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        fontStyle: 'italic',
                        lineHeight: 1.55,
                        maxWidth: '32rem',
                    }}
                >
                    Comandante da guarda imperial de Nabucodonosor.
                    Queimou o Templo. Organizou a deportação.
                    Encontrou Jeremias entre os prisioneiros.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
