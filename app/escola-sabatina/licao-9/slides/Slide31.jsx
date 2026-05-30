'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, StruckSeal, colors, fonts } from './shared';

export function Slide31() {
    return (
        <ParchmentWrapper deepGradient>
            <div className="max-w-3xl mx-auto px-8 py-24 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ delay: 0.4, duration: 1.0 }}
                    className="text-sm uppercase tracking-[0.35em] mb-8"
                    style={{ color: colors.inkMuted, fontFamily: fonts.body, fontVariant: 'small-caps' }}
                >
                    O veredito para quem está em Cristo
                </motion.p>

                <div className="mb-10 flex justify-center">
                    <StruckSeal delay={1.0} strikeDelay={2.5} rotate={-5}>
                        <span
                            className="block text-3xl md:text-4xl uppercase"
                            style={{ color: colors.wine, fontFamily: fonts.display, fontWeight: 600, letterSpacing: '0.18em', textShadow: `0 1px 0 ${colors.wineDeep}55` }}
                        >
                            Condenado
                        </span>
                    </StruckSeal>
                </div>

                <BiblicalQuote
                    reference="Romanos 8:1"
                    referenceTone="gold"
                    tone="wine"
                    lines={[
                        'Agora, pois, nenhuma condenação há',
                        'para os que estão em Cristo Jesus.',
                    ]}
                    emphasis={['nenhuma condenação']}
                    size="xl"
                    align="center"
                    delay={3.4}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.2, duration: 1.2 }}
                    className="mt-16 text-lg md:text-xl"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display, fontStyle: 'italic', maxWidth: '32rem', textAlign: 'center', lineHeight: 1.5 }}
                >
                    A obediência continua importando profundamente.
                    Mas ela é a resposta de quem já foi absolvido —
                    não o suborno de quem ainda teme o veredito.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
