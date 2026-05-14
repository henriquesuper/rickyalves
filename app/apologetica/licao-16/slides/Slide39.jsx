'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide39({ slideIndex = 38 }) {
    return (
        <div
            className="relative w-full"
            style={{
                background: `linear-gradient(180deg, ${colors.inkDeep} 0%, ${colors.wineDeep} 35%, ${colors.parchment} 95%)`,
                minHeight: '100vh',
                paddingBottom: '80px',
            }}
        >
            <div className="relative z-10 max-w-3xl mx-auto px-8 py-24 flex flex-col items-center justify-center text-center min-h-screen">
                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    O fim
                </SectionLabel>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.9 }}
                    className="mt-8 text-sm md:text-base"
                    style={{
                        color: colors.parchmentDeep,
                        fontFamily: fonts.body,
                        fontStyle: 'italic',
                        maxWidth: '36rem',
                        lineHeight: 1.55,
                    }}
                >
                    Penúltimo capítulo da Bíblia. A visão da consumação final.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 0.9 }}
                    className="h-px mx-auto my-10"
                    style={{ width: '120px', background: colors.gold }}
                />

                <BiblicalQuote
                    reference="Apocalipse 21:3"
                    referenceTone="gold"
                    tone="parchment"
                    lines={[
                        '"Eis o tabernáculo de Deus',
                        'com os homens.',
                        '',
                        'Deus habitará com eles.',
                        '',
                        'Eles serão o seu povo,',
                        'e o próprio Deus estará com eles."',
                    ]}
                    emphasis={['Deus habitará com eles.']}
                    size="md"
                    align="center"
                    delay={2.4}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 6.8, duration: 1.2 }}
                    className="mt-12 text-sm md:text-base italic"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.accent,
                        letterSpacing: '0.03em',
                    }}
                >
                    σκηνώσει — armar tenda. Instalar-se na vizinhança.
                </motion.p>
            </div>
        </div>
    );
}
