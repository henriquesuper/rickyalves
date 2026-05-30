'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, Breath, colors, fonts } from './shared';

function Pill({ children, tone, struck = false }) {
    return (
        <span
            className="px-4 py-2 text-base md:text-lg"
            style={{
                color: tone,
                fontFamily: fonts.display,
                border: `1px solid ${tone}66`,
                background: `${tone}10`,
                textDecoration: struck ? 'line-through' : 'none',
                whiteSpace: 'nowrap',
            }}
        >
            {children}
        </span>
    );
}

export function Slide25() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="João 14:15"
                    referenceTone="gold"
                    tone="wine"
                    lines={['Se Me amais,', 'guardareis os Meus mandamentos.']}
                    emphasis={['Se Me amais']}
                    size="lg"
                    align="center"
                    delay={0.5}
                />

                <div className="mt-16 flex flex-col gap-10 items-center">
                    {/* Ordem do legalismo — aparece e se apaga */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: [0, 1, 1, 0.32], y: 0 }}
                        transition={{ delay: 2.0, duration: 3.2, times: [0, 0.18, 0.7, 1], ease: 'easeInOut' }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: colors.wine, fontFamily: fonts.mono }}>
                            A ordem do legalismo
                        </p>
                        <div className="flex items-center gap-3">
                            <Pill tone={colors.wine} struck>Obedecer</Pill>
                            <span style={{ color: colors.wine, fontSize: '1.3rem' }}>→</span>
                            <Pill tone={colors.wine} struck>Ser aceito</Pill>
                        </div>
                    </motion.div>

                    {/* Ordem do evangelho — surge iluminada */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 4.4, duration: 1.0, ease: 'easeOut' }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: colors.gold, fontFamily: fonts.mono }}>
                            A ordem do evangelho
                        </p>
                        <Breath color={colors.gold} size={460} delay={5.0} intensity={0.2}>
                            <div className="flex items-center gap-3 flex-wrap justify-center">
                                <Pill tone={colors.gold}>Ser amado e salvo</Pill>
                                <span style={{ color: colors.gold, fontSize: '1.3rem' }}>→</span>
                                <Pill tone={colors.gold}>Obedecer (fruto)</Pill>
                            </div>
                        </Breath>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.8, duration: 1.0 }}
                    className="mt-14 text-lg md:text-xl italic"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display, textAlign: 'center' }}
                >
                    O amor vem primeiro. A obediência é a resposta — nunca a moeda.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
