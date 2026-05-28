'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, colors, fonts } from './shared';

export function Slide36({ slideIndex = 35 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        João nunca chama de "milagre"
                    </SectionLabel>
                </div>

                <GreekGloss
                    word="σημεῖα"
                    transliteration="sēmeia"
                    gloss="sinais — não truques de poder"
                    note="Um sinal não é uma demonstração que pede aplauso. É uma placa que aponta para além de si mesma — para quem Jesus é."
                    tone="gold"
                    size="md"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 1.0 }}
                    className="mt-14 max-w-2xl mx-auto p-6 text-center"
                    style={{
                        background: `${colors.gold}10`,
                        border: `1px dashed ${colors.gold}99`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-3"
                        style={{
                            color: colors.gold,
                            fontFamily: fonts.mono,
                        }}
                    >
                        a regra do estudo
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        Não pergunte "você acredita?" — pergunte:
                    </p>
                    <p
                        className="mt-3 text-base md:text-lg italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.display,
                            lineHeight: 1.5,
                            fontWeight: 500,
                        }}
                    >
                        "Supondo que algo aconteceu — para o que João está dizendo que isso aponta?"
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
