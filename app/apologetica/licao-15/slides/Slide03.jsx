'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

export function Slide03({ slideIndex = 2 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-3xl mx-auto px-8 text-center flex flex-col items-center justify-center py-8">
                <div className="mb-12">
                    <SectionLabel align="center" delay={0.2}>
                        A tese desta lição
                    </SectionLabel>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1.0, ease: 'easeOut' }}
                    style={{ maxWidth: '36rem' }}
                >
                    <p
                        className="text-xl md:text-3xl"
                        style={{
                            color: colors.inkAntique,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                            lineHeight: 1.45,
                            letterSpacing: '-0.005em',
                        }}
                    >
                        A Bíblia tem uma única história.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.9 }}
                        className="mt-7"
                    >
                        <p
                            className="text-xl md:text-3xl"
                            style={{
                                color: colors.inkAntique,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                                lineHeight: 1.45,
                            }}
                        >
                            E essa história é sobre como
                        </p>
                        <p
                            className="text-xl md:text-3xl"
                            style={{
                                color: colors.inkAntique,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                                lineHeight: 1.45,
                            }}
                        >
                            a morte entra no mundo
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.4, duration: 0.9 }}
                        className="text-xl md:text-3xl mt-7"
                        style={{
                            color: colors.inkAntique,
                            fontFamily: fonts.display,
                            fontWeight: 600,
                            lineHeight: 1.45,
                        }}
                    >
                        e como ela é finalmente vencida.
                    </motion.p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
