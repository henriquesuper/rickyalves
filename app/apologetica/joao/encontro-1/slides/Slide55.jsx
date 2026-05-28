'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, colors, fonts } from './shared';

export function Slide55({ slideIndex = 54 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="w-full max-w-3xl mx-auto px-8 py-32 text-center flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.4, duration: 1.4 }}
                    className="text-xs md:text-sm tracking-[0.45em] uppercase mb-12"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    o fim do encontro · sem amém
                </motion.p>

                <QuietTitle size="xxl" align="center" delay={1.4} weight={500} italic color={colors.wine}>
                    Vinde
                    <br />
                    e vede.
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 4.0, duration: 1.4 }}
                    className="mt-16 h-px"
                    style={{ width: '120px', background: colors.gold }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 5.0, duration: 1.4 }}
                    className="mt-12 text-xs md:text-sm tracking-[0.3em] uppercase"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                    }}
                >
                    Jo 1.39 · 1.46 — pergunta aberta
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
