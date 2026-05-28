'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

export function Slide54({ slideIndex = 53 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16 text-center">
                <SectionLabel align="center" delay={0.2}>
                    A costura do encontro
                </SectionLabel>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.9 }}
                        className="text-center md:text-right"
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.4em] mb-3"
                            style={{ color: colors.gold, fontFamily: fonts.mono }}
                        >
                            Jo 1.14
                        </p>
                        <p
                            className="text-3xl md:text-4xl italic"
                            style={{
                                color: colors.wine,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                            }}
                        >
                            ἐσκήνωσεν
                        </p>
                        <p
                            className="mt-3 text-sm md:text-base italic"
                            style={{ color: colors.inkBody, fontFamily: fonts.display }}
                        >
                            armou tenda
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 0.7, scaleX: 1 }}
                        transition={{ delay: 1.4, duration: 1.0 }}
                        className="hidden md:block h-px"
                        style={{
                            width: '100px',
                            background: `linear-gradient(to right, ${colors.gold}, ${colors.wine})`,
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.0, duration: 0.9 }}
                        className="text-center md:text-left"
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.4em] mb-3"
                            style={{ color: colors.gold, fontFamily: fonts.mono }}
                        >
                            Jo 1.18
                        </p>
                        <p
                            className="text-3xl md:text-4xl italic"
                            style={{
                                color: colors.wine,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                            }}
                        >
                            ἐξηγήσατο
                        </p>
                        <p
                            className="mt-3 text-sm md:text-base italic"
                            style={{ color: colors.inkBody, fontFamily: fonts.display }}
                        >
                            tornou conhecido
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                    className="mt-14 text-base md:text-xl italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.5,
                    }}
                >
                    Duas palavras gregas — abrem e fecham o arco.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-5 text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    O Deus que armou tenda — agora se deixa ler.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
