'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

export function Slide64({ slideIndex = 63 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center justify-center">
                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    Revelação da História
                </SectionLabel>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs tracking-[0.2em] font-mono mt-4 mb-14"
                    style={{ color: colors.inkMuted }}
                >
                    João 4.16–19
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
                    className="max-w-2xl px-6 py-8"
                >
                    <p
                        className="text-2xl md:text-4xl italic font-serif leading-relaxed"
                        style={{
                            color: colors.parchment,
                            fontFamily: fonts.display,
                            fontWeight: 400,
                            letterSpacing: '0.01em',
                            textShadow: `0 2px 4px ${colors.inkDeep}aa`
                        }}
                    >
                        &ldquo;Ser completamente conhecida e, ainda assim, não ser descartada.&rdquo;
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 2.8, duration: 1.0 }}
                    className="h-px w-24 my-8"
                    style={{ background: colors.gold }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ delay: 3.4, duration: 0.8 }}
                    className="text-xs uppercase tracking-[0.3em] font-mono"
                    style={{
                        color: colors.parchmentEdge,
                    }}
                >
                    Sem ironia · Sem desprezo · Só verdade
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
