'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, IntertextPair, colors, fonts } from './shared';

function SerpentOnPole({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay, duration: 1.2 }}
            width="80"
            height="200"
            viewBox="0 0 80 200"
            style={{ display: 'block' }}
        >
            <line x1="40" y1="20" x2="40" y2="190" stroke={colors.inkBody} strokeWidth="3" />
            <line x1="20" y1="20" x2="60" y2="20" stroke={colors.inkBody} strokeWidth="3" />
            <path
                d="M 40 30 Q 60 50 30 80 Q 10 110 50 140 Q 70 160 35 175"
                stroke={colors.gold}
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
            />
            <circle cx="35" cy="175" r="3" fill={colors.gold} />
        </motion.svg>
    );
}

export function Slide48({ slideIndex = 47 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-14">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Jo 3.14 · "como Moisés levantou..."
                    </SectionLabel>
                </div>

                <div className="flex justify-center mb-10">
                    <SerpentOnPole delay={0.6} />
                </div>

                <IntertextPair
                    left={{
                        ref: 'Números 21.8—9',
                        text: 'Quem olhasse para a serpente de bronze, vivia.',
                        refColor: colors.lapis,
                    }}
                    right={{
                        ref: 'João 3.14',
                        text: 'Assim importa que o Filho do Homem seja levantado.',
                        refColor: colors.gold,
                    }}
                    delay={1.6}
                    connectorDelay={1.0}
                    accentColor={colors.gold}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-12 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    Quem olhava — vivia. A cura não estava na própria força.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
