'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, JacobLadder, colors, fonts } from './shared';

export function Slide31({ slideIndex = 30 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-12">
                <div className="text-center mb-6">
                    <SectionLabel align="center" delay={0.2}>
                        A escada de Jacó cumprida
                    </SectionLabel>
                </div>

                <JacobLadder delay={0.6} />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-4 text-center text-base md:text-lg italic max-w-3xl mx-auto"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    "Vereis o céu aberto, e os anjos de Deus subindo
                    e descendo sobre o Filho do Homem." — Jo 1.51
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.0, duration: 1.0 }}
                    className="mt-5 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    Onde Jacó viu uma escada — Jesus diz: eu sou a conexão.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
