'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

function ProphetSilhouette({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay, duration: 1.0 }}
            viewBox="0 0 140 200"
            width="120"
            height="180"
        >
            <circle cx="70" cy="32" r="13" fill={colors.parchment} />
            <path d="M 50 48 L 90 48 L 105 195 L 35 195 Z" fill={colors.parchment} opacity="0.95" />
            <line x1="95" y1="58" x2="115" y2="195" stroke={colors.parchmentDeep} strokeWidth="2" />
        </motion.svg>
    );
}

function KingSilhouette({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay, duration: 1.0 }}
            viewBox="0 0 140 200"
            width="120"
            height="180"
        >
            <path d="M 50 32 L 50 16 L 60 26 L 70 8 L 80 26 L 90 16 L 90 32 Z" fill={colors.gold} />
            <circle cx="70" cy="44" r="13" fill={colors.lapisDeep} />
            <path d="M 50 60 L 90 60 L 105 195 L 35 195 Z" fill={colors.lapisDeep} opacity="0.95" />
            <line x1="95" y1="68" x2="105" y2="195" stroke={colors.gold} strokeWidth="2" />
        </motion.svg>
    );
}

export function Slide29({ slideIndex = 28 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Dois retratos
                    </SectionLabel>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-2 items-center">
                    {/* Jeremias */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 1.0 }}
                        className="p-6 text-center"
                        style={{
                            background: colors.wine,
                            borderTop: `2px solid ${colors.wineDeep}`,
                        }}
                    >
                        <div className="flex justify-center">
                            <ProphetSilhouette delay={1.2} />
                        </div>
                        <p
                            className="mt-4 text-lg md:text-xl"
                            style={{
                                color: colors.parchment,
                                fontFamily: fonts.display,
                                fontWeight: 600,
                            }}
                        >
                            Jeremias
                        </p>
                        <p
                            className="mt-1 text-xs uppercase tracking-[0.3em]"
                            style={{
                                color: colors.parchmentDeep,
                                fontFamily: fonts.body,
                                fontVariant: 'small-caps',
                                opacity: 0.85,
                            }}
                        >
                            O santo sozinho
                        </p>
                        <p
                            className="mt-4 text-sm md:text-base italic"
                            style={{
                                color: colors.parchment,
                                fontFamily: fonts.body,
                                lineHeight: 1.55,
                                opacity: 0.9,
                            }}
                        >
                            Chegou pela fidelidade.
                        </p>
                    </motion.div>

                    {/* Eixo entre os dois */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 0.6, scaleY: 1 }}
                        transition={{ delay: 2.4, duration: 0.9 }}
                        className="hidden md:flex justify-center items-center"
                    >
                        <div
                            style={{
                                width: '1px',
                                height: '180px',
                                background: `linear-gradient(to bottom, transparent, ${colors.inkSoft}, transparent)`,
                            }}
                        />
                    </motion.div>

                    {/* Nabucodonosor */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.8, duration: 1.0 }}
                        className="p-6 text-center"
                        style={{
                            background: colors.lapis,
                            borderTop: `2px solid ${colors.lapisDeep}`,
                        }}
                    >
                        <div className="flex justify-center">
                            <KingSilhouette delay={3.2} />
                        </div>
                        <p
                            className="mt-4 text-lg md:text-xl"
                            style={{
                                color: colors.parchment,
                                fontFamily: fonts.display,
                                fontWeight: 600,
                            }}
                        >
                            Nabucodonosor
                        </p>
                        <p
                            className="mt-1 text-xs uppercase tracking-[0.3em]"
                            style={{
                                color: colors.goldFaint,
                                fontFamily: fonts.body,
                                fontVariant: 'small-caps',
                                opacity: 0.95,
                            }}
                        >
                            O pecador sozinho
                        </p>
                        <p
                            className="mt-4 text-sm md:text-base italic"
                            style={{
                                color: colors.parchment,
                                fontFamily: fonts.body,
                                lineHeight: 1.55,
                                opacity: 0.9,
                            }}
                        >
                            Chegou pela soberba.
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.0, duration: 0.9 }}
                    className="mt-10 text-center text-lg md:text-2xl italic"
                    style={{
                        color: colors.inkDeep,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        maxWidth: '40rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: 1.5,
                    }}
                >
                    Ambos chegaram ao mesmo lugar —
                    <br />
                    o fim da capacidade própria.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
