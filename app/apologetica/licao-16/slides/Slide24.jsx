'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, ThinRule, colors, fonts } from './shared';

function CrownSilhouette({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ delay, duration: 1.2 }}
            width="120"
            height="70"
            viewBox="0 0 120 70"
        >
            <path
                d="M 10 60 L 10 30 L 30 50 L 50 18 L 70 50 L 90 18 L 110 50 L 110 30 L 110 60 Z"
                fill={colors.gold}
                opacity="0.85"
                stroke={colors.goldSoft}
                strokeWidth="0.6"
            />
            <rect x="10" y="60" width="100" height="6" fill={colors.gold} opacity="0.85" />
            <circle cx="30" cy="22" r="3" fill={colors.lapisDeep} />
            <circle cx="50" cy="12" r="3" fill={colors.lapisDeep} />
            <circle cx="70" cy="22" r="3" fill={colors.lapisDeep} />
            <circle cx="90" cy="12" r="3" fill={colors.lapisDeep} />
        </motion.svg>
    );
}

export function Slide24({ slideIndex = 23 }) {
    return (
        <ParchmentWrapper lapisDark>
            <div className="max-w-4xl mx-auto px-8 py-20 flex flex-col items-center text-center">
                <SectionLabel align="center" delay={0.2} color={colors.gold}>
                    O imperador que Deus chamou de &quot;meu servo&quot;
                </SectionLabel>

                <div className="mt-10">
                    <CrownSilhouette delay={0.8} />
                </div>

                <div className="mt-8">
                    <QuietTitle size="lg" delay={1.6} weight={500} color={colors.parchment}>
                        Nabucodonosor
                    </QuietTitle>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.9 }}
                    className="mt-6 text-lg md:text-2xl italic"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.accent,
                    }}
                >
                    O rei solitário
                </motion.p>

                <div className="mt-10">
                    <ThinRule width="140px" color={colors.gold} delay={3.2} opacity={0.5} />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
