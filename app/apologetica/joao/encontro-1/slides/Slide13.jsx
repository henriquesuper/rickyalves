'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

export function Slide13({ slideIndex = 12 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center">
                <SectionLabel align="center" delay={0.2}>
                    O movimento de João
                </SectionLabel>

                <div className="mt-8">
                    <QuietTitle size="md" align="center" delay={0.6} weight={500}>
                        Mesma palavra. Mesma tradição.
                        <br />
                        Conclusão precisamente inversa.
                    </QuietTitle>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1.0 }}
                    className="mt-14 max-w-3xl mx-auto"
                >
                    <div
                        className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch"
                    >
                        <div
                            className="p-5 text-left"
                            style={{
                                background: `${colors.lapis}12`,
                                border: `1px solid ${colors.lapis}55`,
                            }}
                        >
                            <p
                                className="text-[10px] uppercase tracking-[0.3em] mb-3"
                                style={{ color: colors.lapis, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                            >
                                Fílon
                            </p>
                            <p
                                className="text-base italic"
                                style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.55 }}
                            >
                                O Lógos serve para manter Deus <em>fora</em> do mundo.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 0.7, scaleX: 1 }}
                            transition={{ delay: 2.6, duration: 0.9 }}
                            className="hidden md:flex items-center justify-center"
                        >
                            <span
                                className="text-2xl"
                                style={{ color: colors.gold, fontFamily: fonts.display }}
                            >
                                ⇄
                            </span>
                        </motion.div>

                        <div
                            className="p-5 text-left"
                            style={{
                                background: `${colors.gold}12`,
                                border: `1px solid ${colors.gold}77`,
                            }}
                        >
                            <p
                                className="text-[10px] uppercase tracking-[0.3em] mb-3"
                                style={{ color: colors.gold, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                            >
                                João
                            </p>
                            <p
                                className="text-base italic"
                                style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.55 }}
                            >
                                O Lógos serve para anunciar que Deus <em>entrou</em> nele.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 3.4, duration: 0.9 }}
                    className="mt-10 text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    João não copiou os gregos. Ele discutiu com eles —
                    e fez o movimento que nenhum deles faria.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
