'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

export function Slide35({ slideIndex = 34 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center text-center w-full">
                <BiblicalQuote
                    reference="Hebreus 4:15"
                    referenceTone="wine"
                    tone="wine"
                    lines={[
                        '"Não temos um sumo sacerdote',
                        'que não possa compadecer-se',
                        'das nossas fraquezas;',
                        '',
                        'antes, foi ele tentado em todas as coisas,',
                        'à nossa semelhança,',
                        'mas sem pecado."',
                    ]}
                    size="md"
                    align="center"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-12 px-7 py-5"
                    style={{
                        background: `${colors.lapis}10`,
                        border: `1px solid ${colors.lapis}55`,
                    }}
                >
                    <p
                        className="text-xs uppercase tracking-[0.3em] mb-3"
                        style={{
                            color: colors.lapis,
                            fontFamily: fonts.mono,
                            letterSpacing: '0.2em',
                        }}
                    >
                        no original grego
                    </p>
                    <p
                        className="text-2xl md:text-4xl italic"
                        style={{
                            color: colors.lapis,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                        }}
                    >
                        sympatheō
                    </p>
                    <p
                        className="mt-2 text-sm md:text-base italic"
                        style={{
                            color: colors.inkSoft,
                            fontFamily: fonts.body,
                        }}
                    >
                        sentir com · sofrer junto
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
