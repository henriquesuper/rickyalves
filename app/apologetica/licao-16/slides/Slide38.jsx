'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const points = [
    { label: 'Jó',             ref: 'Jó 1—2',          x: 14 },
    { label: 'Salmo 88',       ref: 'Sl 88',           x: 25 },
    { label: 'Exílio',         ref: '586 a.C.',        x: 37 },
    { label: 'Jeremias',       ref: 'Jr 20',           x: 48 },
    { label: 'Nabucodonosor',  ref: 'Dn 4',            x: 59 },
    { label: 'A Cruz',         ref: 'Mt 27:46',        x: 73 },
    { label: 'Jesus chorou',   ref: 'Jo 11:35',        x: 84 },
];

export function Slide38({ slideIndex = 37 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-16">
                <div className="text-center mb-12">
                    <SectionLabel align="center" delay={0.2}>
                        O arco
                    </SectionLabel>
                </div>

                <div className="relative mx-auto" style={{ maxWidth: '960px' }}>
                    <svg viewBox="0 0 100 28" width="100%" preserveAspectRatio="none" style={{ display: 'block', height: 'auto' }}>
                        {/* Linha base */}
                        <motion.line
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.85 }}
                            transition={{ delay: 0.6, duration: 2.0, ease: 'easeInOut' }}
                            x1="3" y1="14" x2="97" y2="14"
                            stroke={colors.gold}
                            strokeWidth="0.35"
                            strokeLinecap="round"
                        />
                        {/* Pontos */}
                        {points.map((p, i) => (
                            <motion.g
                                key={p.label}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 2.6 + i * 0.45, duration: 0.5 }}
                            >
                                <circle
                                    cx={p.x}
                                    cy="14"
                                    r="0.85"
                                    fill={colors.wine}
                                />
                            </motion.g>
                        ))}
                    </svg>

                    {/* Labels HTML — posicionados sobre o SVG */}
                    <div className="relative mt-2" style={{ height: '70px' }}>
                        {points.map((p, i) => (
                            <motion.div
                                key={p.label}
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.0 + i * 0.45, duration: 0.6 }}
                                className="absolute text-center"
                                style={{
                                    left: `${p.x}%`,
                                    transform: 'translateX(-50%)',
                                    width: '110px',
                                }}
                            >
                                <p
                                    className="text-xs md:text-sm"
                                    style={{
                                        color: colors.wine,
                                        fontFamily: fonts.display,
                                        fontWeight: 600,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {p.label}
                                </p>
                                <p
                                    className="text-[10px] mt-0.5"
                                    style={{
                                        color: colors.inkSoft,
                                        fontFamily: fonts.mono,
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {p.ref}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Extremos */}
                    <div className="flex justify-between mt-8 px-2">
                        <motion.div
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.9 }}
                        >
                            <p
                                className="text-xs uppercase tracking-[0.3em]"
                                style={{
                                    color: colors.inkMuted,
                                    fontFamily: fonts.body,
                                    fontVariant: 'small-caps',
                                }}
                            >
                                Gênesis 2:18
                            </p>
                            <p
                                className="mt-1 text-base md:text-lg italic"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                }}
                            >
                                Solidão
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 6.8, duration: 0.9 }}
                            className="text-right"
                        >
                            <p
                                className="text-xs uppercase tracking-[0.3em]"
                                style={{
                                    color: colors.gold,
                                    fontFamily: fonts.body,
                                    fontVariant: 'small-caps',
                                }}
                            >
                                Apocalipse 21:3
                            </p>
                            <p
                                className="mt-1 text-base md:text-lg italic"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                }}
                            >
                                Habitação
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
