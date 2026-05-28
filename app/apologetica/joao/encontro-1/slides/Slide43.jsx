'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, RomanNumeral, QuietTitle, colors, fonts } from './shared';

function NightStars({ delay = 0 }) {
    const stars = [
        { x: 60, y: 40, r: 1.0 },
        { x: 130, y: 70, r: 1.4 },
        { x: 220, y: 30, r: 0.9 },
        { x: 310, y: 90, r: 1.2 },
        { x: 400, y: 50, r: 1.0 },
        { x: 480, y: 110, r: 1.3 },
        { x: 540, y: 60, r: 0.9 },
        { x: 600, y: 25, r: 1.5 },
        { x: 80, y: 130, r: 0.8 },
        { x: 360, y: 145, r: 1.1 },
        { x: 240, y: 160, r: 0.9 },
        { x: 540, y: 175, r: 1.0 },
    ];
    return (
        <svg viewBox="0 0 660 200" width="100%" height="auto" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
            {stars.map((s, i) => (
                <motion.circle
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.85, 0.4, 0.85] }}
                    transition={{ delay: delay + i * 0.18, duration: 4.0, repeat: Infinity, repeatType: 'reverse' }}
                    cx={s.x}
                    cy={s.y}
                    r={s.r}
                    fill={colors.gold}
                />
            ))}
        </svg>
    );
}

export function Slide43({ slideIndex = 42 }) {
    return (
        <ParchmentWrapper lapisDark>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center flex flex-col items-center">
                <div className="w-full max-w-3xl mb-10 opacity-60">
                    <NightStars delay={0.4} />
                </div>

                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    Movimento IV · capítulo 3
                </SectionLabel>

                <div className="mt-4 mb-10">
                    <RomanNumeral value="IV" size="xl" delay={0.5} color={colors.gold} opacity={0.9} weight={300} />
                </div>

                <QuietTitle size="lg" align="center" delay={1.0} weight={500} color={colors.parchment}>
                    Nicodemos,
                    <br />
                    à noite.
                </QuietTitle>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 2.0, duration: 1.0 }}
                    className="mt-10 text-base md:text-lg italic max-w-xl"
                    style={{
                        color: colors.parchmentEdge,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    O encontro mais carregado dos três capítulos.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
