'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

export function Slide08({ slideIndex = 7 }) {
    return (
        <ParchmentWrapper lapisDark>
            <div className="max-w-3xl mx-auto px-8 py-24 flex flex-col items-center justify-center text-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xs uppercase tracking-[0.45em] mb-12"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.mono,
                        fontWeight: 600,
                    }}
                >
                    A pergunta do Acusador
                </motion.p>

                <BiblicalQuote
                    reference="Jó 1:9"
                    referenceTone="gold"
                    tone="parchment"
                    lines={[
                        '"Acaso é sem motivo',
                        'que Jó teme a Deus?"',
                    ]}
                    size="xl"
                    align="center"
                    delay={1.2}
                />
            </div>
        </ParchmentWrapper>
    );
}
