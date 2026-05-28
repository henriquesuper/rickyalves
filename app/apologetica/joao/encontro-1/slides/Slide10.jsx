'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

export function Slide10({ slideIndex = 9 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <SectionLabel align="left" delay={0.2}>
                        séc. V a.C. · Éfeso
                    </SectionLabel>

                    <div className="mt-5">
                        <QuietTitle size="lg" align="left" delay={0.5} weight={500}>
                            Heráclito
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="mt-5 text-lg md:text-xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                            lineHeight: 1.45,
                        }}
                    >
                        O lógos como ordem oculta sob o fluxo
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.92 }}
                        transition={{ delay: 2.0, duration: 0.9 }}
                        className="mt-6 text-base md:text-lg"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.body,
                            lineHeight: 1.6,
                        }}
                    >
                        Tudo escoa, nada permanece — mas há uma razão
                        oculta que governa as transformações. As pessoas
                        ouvem o lógos o tempo todo e não o compreendem.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 1.0 }}
                    className="border-l-2 pl-6"
                    style={{ borderColor: `${colors.gold}77` }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-4"
                        style={{
                            color: colors.gold,
                            fontFamily: fonts.mono,
                        }}
                    >
                        Eco em João
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        "A luz brilha nas trevas; o mundo foi feito por ela,
                        e o mundo não a conheceu" — Jo 1.5, 1.10.
                    </p>
                    <p
                        className="mt-5 text-sm italic"
                        style={{
                            color: colors.inkSoft,
                            fontFamily: fonts.body,
                            lineHeight: 1.55,
                        }}
                    >
                        João pega a queixa de Heráclito e diz:
                        agora ele tem rosto.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
