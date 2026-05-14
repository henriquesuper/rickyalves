'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

// Slide 7 — Conselho celestial. Duas camadas verticais:
// Embaixo (terra parchment) e em cima (céu lapis profundo).
// Silhuetas estilizadas — sem rostos.

function HouseSilhouette({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay, duration: 1.0 }}
            width="140"
            height="80"
            viewBox="0 0 140 80"
            style={{ display: 'block' }}
        >
            {/* Solo */}
            <line x1="0" y1="78" x2="140" y2="78" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 3" />
            {/* Casa */}
            <path
                d="M 30 78 L 30 45 L 70 22 L 110 45 L 110 78 Z"
                fill={colors.inkBody}
                opacity="0.85"
            />
            <rect x="62" y="58" width="16" height="20" fill={colors.parchment} opacity="0.85" />
        </motion.svg>
    );
}

function CelestialFigures({ delay = 0 }) {
    const figures = [
        { x: 30,  scale: 1.0, accent: false },
        { x: 70,  scale: 1.15, accent: false },
        { x: 110, scale: 1.0, accent: false },
        { x: 150, scale: 1.1, accent: true },  // ha-satan
        { x: 190, scale: 1.0, accent: false },
    ];
    return (
        <svg width="240" height="100" viewBox="0 0 240 100" style={{ display: 'block' }}>
            {figures.map((f, i) => (
                <motion.g
                    key={i}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: f.accent ? 0.95 : 0.65, y: 0 }}
                    transition={{ delay: delay + i * 0.25, duration: 1.0 }}
                    transform={`translate(${f.x} 70) scale(${f.scale})`}
                >
                    {/* Cabeça */}
                    <circle cx="0" cy="-30" r="4" fill={f.accent ? colors.gold : colors.parchment} />
                    {/* Corpo (forma de longas vestes) */}
                    <path
                        d="M -7 -24 L 7 -24 L 9 0 L -9 0 Z"
                        fill={f.accent ? colors.gold : colors.parchment}
                        opacity={f.accent ? 0.95 : 0.75}
                    />
                </motion.g>
            ))}
        </svg>
    );
}

export function Slide07({ slideIndex = 6 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10">
                <div className="text-center mb-2">
                    <SectionLabel align="center" delay={0.2}>
                        O que Jó nunca soube
                    </SectionLabel>
                </div>

                {/* Camada superior — Céu */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.0 }}
                    className="relative mt-6 mx-auto"
                    style={{
                        maxWidth: '560px',
                        background: `linear-gradient(to bottom, ${colors.lapisDeep}, ${colors.lapis})`,
                        padding: '36px 24px 28px',
                        border: `1px solid ${colors.lapisSoft}`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-4 text-center"
                        style={{
                            color: colors.goldFaint,
                            fontFamily: fonts.mono,
                        }}
                    >
                        Conselho celestial · Jó 1:6
                    </p>
                    <div className="flex justify-center">
                        <CelestialFigures delay={1.4} />
                    </div>
                </motion.div>

                {/* Linha separadora — o "véu" */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.7, scaleX: 1 }}
                    transition={{ delay: 3.0, duration: 1.2 }}
                    className="h-px mx-auto my-4"
                    style={{
                        maxWidth: '560px',
                        background: `linear-gradient(to right, transparent, ${colors.gold}, transparent)`,
                    }}
                />

                {/* Camada inferior — Terra */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.4, duration: 1.0 }}
                    className="relative mx-auto"
                    style={{
                        maxWidth: '560px',
                        background: colors.parchmentDeep,
                        padding: '28px 24px 32px',
                        border: `1px solid ${colors.inkFaint}`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-4 text-center"
                        style={{
                            color: colors.inkMuted,
                            fontFamily: fonts.mono,
                        }}
                    >
                        Terra de Uz · a casa de Jó
                    </p>
                    <div className="flex justify-center">
                        <HouseSilhouette delay={4.0} />
                    </div>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
