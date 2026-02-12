// Slide 10 - O Problema Fundamental
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DivergenceTree, OriginalText, colors } from './shared';

const meanings = [
    { text: '"alma"', color: colors.alertTerracota },
    { text: '"vida"', color: colors.hebrewPrimary },
    { text: '"pessoa"', color: colors.greekPrimary },
    { text: '"ser vivente"', color: colors.portPrimary },
    { text: '"apetite"', color: colors.goldAged },
    { text: '"garganta"', color: colors.alertTerracota },
    { text: '"ser interior"', color: colors.greekLight },
    { text: '"desejo"', color: colors.hebrewSecondary },
];

export default function Slide10_ProblemaFundamental() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-4xl font-bold mb-8"
                    style={{ color: colors.textLight }}
                >
                    POR QUE TRADUÇÃO PERFEITA É{' '}
                    <span style={{ color: colors.alertTerracota }}>IMPOSSÍVEL</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                >
                    <OriginalText text="נֶפֶשׁ" language="hebrew" size="xl" delay={0.3} className="justify-center flex" />
                    <p className="text-xl mt-2" style={{ color: colors.hebrewPrimary }}>nephesh</p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>Uma palavra hebraica. Traduzida como:</p>
                </motion.div>

                <DivergenceTree
                    original="nephesh (נֶפֶשׁ)"
                    branches={meanings}
                    delay={0.6}
                    className="mb-8"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-center"
                >
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        Nenhuma palavra portuguesa cobre toda essa gama.
                    </p>
                    <p className="text-lg font-bold mt-2" style={{ color: colors.goldAged }}>
                        Cada tradução é uma <span style={{ color: colors.alertTerracota }}>ESCOLHA</span>.
                    </p>
                    <p className="text-lg font-bold" style={{ color: colors.goldAged }}>
                        E toda escolha é um <span style={{ color: colors.alertTerracota }}>RECORTE</span>.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
