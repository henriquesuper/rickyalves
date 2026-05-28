'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

function ScourgeIcon({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0, rotate: -8 }}
            animate={{ opacity: 0.8, rotate: 0 }}
            transition={{ delay, duration: 1.0 }}
            width="120"
            height="120"
            viewBox="0 0 120 120"
            style={{ display: 'block' }}
        >
            {/* Cabo */}
            <line x1="40" y1="20" x2="60" y2="60" stroke={colors.parchmentEdge} strokeWidth="3" strokeLinecap="round" />
            {/* Chicote — três cordas */}
            <path d="M 60 60 Q 70 80 65 105"  stroke={colors.parchmentEdge} strokeWidth="1.4" fill="none" />
            <path d="M 60 60 Q 80 80 85 105"  stroke={colors.parchmentEdge} strokeWidth="1.4" fill="none" />
            <path d="M 60 60 Q 90 75 100 95"  stroke={colors.parchmentEdge} strokeWidth="1.4" fill="none" />
        </motion.svg>
    );
}

export function Slide39({ slideIndex = 38 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                        O templo · Jo 2.13—22
                    </SectionLabel>
                </div>

                <div className="flex justify-center mb-8">
                    <ScourgeIcon delay={0.6} />
                </div>

                <BiblicalQuote
                    reference="Jo 2.16"
                    lines={[
                        '"Tirem isto daqui!"',
                        '"Não façam da casa de meu Pai',
                        'casa de mercado!"',
                    ]}
                    emphasis={['Tirem isto daqui!', 'casa de meu Pai']}
                    tone="parchment"
                    referenceTone="gold"
                    size="xl"
                    delay={1.4}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-12 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.parchmentEdge,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Fúria moral contra a exploração religiosa.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 4.4, duration: 1.0 }}
                    className="mt-5 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    Amor não é a mesma coisa que complacência.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
