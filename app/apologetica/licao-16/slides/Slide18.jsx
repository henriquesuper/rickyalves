'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

// Vista de cima de uma cisterna — círculos concêntricos
// com pequena figura no fundo
function CisternTopView({ delay = 0 }) {
    const rings = [
        { r: 130, opacity: 0.95 },
        { r: 110, opacity: 0.85 },
        { r: 90,  opacity: 0.7  },
        { r: 65,  opacity: 0.55 },
        { r: 40,  opacity: 0.4  },
    ];
    return (
        <svg width="290" height="290" viewBox="-150 -150 300 300" style={{ display: 'block' }}>
            <defs>
                <radialGradient id="cisternDepth" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={colors.inkDeep} />
                    <stop offset="100%" stopColor={colors.inkBody} />
                </radialGradient>
            </defs>
            {rings.map((ring, i) => (
                <motion.circle
                    key={i}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: ring.opacity, scale: 1 }}
                    transition={{ delay: delay + i * 0.15, duration: 0.8 }}
                    cx="0"
                    cy="0"
                    r={ring.r}
                    fill="url(#cisternDepth)"
                    stroke={colors.inkSoft}
                    strokeWidth="0.4"
                />
            ))}
            {/* Figura minúscula no centro */}
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ delay: delay + 1.4, duration: 1.0 }}
            >
                <circle cx="0" cy="-5" r="3" fill={colors.wine} />
                <path d="M -5 0 L 5 0 L 6 12 L -6 12 Z" fill={colors.wine} opacity="0.9" />
            </motion.g>
        </svg>
    );
}

export function Slide18({ slideIndex = 17 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <CisternTopView delay={0.8} />
                </div>

                <div>
                    <SectionLabel align="left" delay={0.2} color={colors.goldFaint}>
                        Jeremias 38
                    </SectionLabel>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.9 }}
                        className="mt-6 text-xl md:text-2xl"
                        style={{
                            color: colors.parchment,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                            lineHeight: 1.45,
                        }}
                    >
                        Oficiais o descem por cordas
                        <br />
                        em uma cisterna lamacenta
                        <br />
                        para que morra de fome.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ delay: 2.4, duration: 0.9 }}
                        className="mt-8 text-sm md:text-base italic"
                        style={{
                            color: colors.inkFaint,
                            fontFamily: fonts.body,
                            lineHeight: 1.55,
                            maxWidth: '24rem',
                        }}
                    >
                        Um eunuco etíope — Ebede-Meleque, um estrangeiro —
                        o resgata.
                    </motion.p>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
