'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

const WATER = '#C7CFD3';

function WineJar({ delay = 0, transformDelay = 3.0, idx = 0 }) {
    const jarPath = 'M 12 12 L 48 12 L 52 26 L 50 50 Q 48 70 42 88 L 18 88 Q 12 70 10 50 L 8 26 Z';
    const clipId = `jar-clip-${idx}`;

    return (
        <motion.svg
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9 }}
            width="60"
            height="100"
            viewBox="0 0 60 100"
            style={{ display: 'block', overflow: 'visible' }}
        >
            <defs>
                <clipPath id={clipId}>
                    <path d={jarPath} />
                </clipPath>
            </defs>

            {/* alças (atrás do corpo) */}
            <path
                d="M 12 14 Q 4 14 4 22"
                stroke={colors.inkSoft}
                strokeWidth="1.2"
                fill="none"
                opacity="0.55"
            />
            <path
                d="M 48 14 Q 56 14 56 22"
                stroke={colors.inkSoft}
                strokeWidth="1.2"
                fill="none"
                opacity="0.55"
            />

            {/* corpo da talha — barro */}
            <path
                d={jarPath}
                fill={colors.parchmentDeep}
                opacity="0.92"
            />

            {/* líquido — preenche o interior, animação de água→vinho */}
            <motion.rect
                x="0"
                y="14"
                width="60"
                height="74"
                clipPath={`url(#${clipId})`}
                initial={{ fill: WATER, opacity: 0.78 }}
                animate={{
                    fill: [WATER, WATER, colors.wineSoft, colors.wine],
                    opacity: [0.78, 0.78, 0.86, 0.92],
                }}
                transition={{
                    delay: transformDelay,
                    duration: 1.6,
                    times: [0, 0.25, 0.7, 1],
                    ease: 'easeInOut',
                }}
            />

            {/* "ondulação" muito sutil no momento da transformação — sobe e desce */}
            <motion.rect
                x="0"
                y="20"
                width="60"
                height="6"
                clipPath={`url(#${clipId})`}
                fill={colors.gold}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 0.35, 0], y: [20, 16, 22] }}
                transition={{
                    delay: transformDelay + 0.4,
                    duration: 1.0,
                    times: [0, 0.5, 1],
                    ease: 'easeInOut',
                }}
            />

            {/* contorno fino da talha */}
            <path
                d={jarPath}
                fill="none"
                stroke={colors.inkSoft}
                strokeWidth="0.7"
                opacity="0.85"
            />

            {/* superfície do líquido — anel no topo */}
            <motion.ellipse
                cx="30"
                cy="14"
                rx="18"
                ry="2.5"
                initial={{ fill: WATER, opacity: 0.7 }}
                animate={{
                    fill: [WATER, WATER, colors.wineDeep, colors.goldSoft],
                    opacity: [0.7, 0.55, 0.65, 0.9],
                }}
                transition={{
                    delay: transformDelay,
                    duration: 1.6,
                    times: [0, 0.3, 0.65, 1],
                    ease: 'easeInOut',
                }}
            />

            {/* halo dourado — flash discreto no momento exato */}
            <motion.circle
                cx="30"
                cy="14"
                fill={colors.gold}
                initial={{ r: 0, opacity: 0 }}
                animate={{ r: [0, 16, 26], opacity: [0, 0.4, 0] }}
                transition={{
                    delay: transformDelay + 0.55,
                    duration: 1.3,
                    times: [0, 0.45, 1],
                    ease: 'easeOut',
                }}
            />
        </motion.svg>
    );
}

const JAR_APPEAR_BASE = 0.4;
const JAR_APPEAR_STEP = 0.2;
const TRANSFORM_BASE  = 2.6;
const TRANSFORM_STEP  = 0.22;
const TRANSFORM_END   = TRANSFORM_BASE + 5 * TRANSFORM_STEP + 1.6; // último jar terminando
const QUOTE_DELAY     = TRANSFORM_END + 0.3;
const TEXT1_DELAY     = QUOTE_DELAY + 1.2;
const TEXT2_DELAY     = TEXT1_DELAY + 0.9;

export function Slide37({ slideIndex = 36 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Caná · o primeiro sinal · Jo 2.1—11
                    </SectionLabel>
                </div>

                <div className="flex justify-center items-end gap-4 md:gap-6 mb-10">
                    {[0, 1, 2, 3, 4, 5].map(i => (
                        <WineJar
                            key={i}
                            delay={JAR_APPEAR_BASE + i * JAR_APPEAR_STEP}
                            transformDelay={TRANSFORM_BASE + i * TRANSFORM_STEP}
                            idx={i}
                        />
                    ))}
                </div>

                <BiblicalQuote
                    reference="Jo 2.10"
                    lines={[
                        '"Você guardou o vinho bom até agora."',
                    ]}
                    tone="wine"
                    referenceTone="gold"
                    size="lg"
                    delay={QUOTE_DELAY}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: TEXT1_DELAY, duration: 1.0 }}
                    className="mt-12 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    O primeiro gesto público de Jesus é generosidade extravagante —
                    não julgamento.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: TEXT2_DELAY, duration: 1.0 }}
                    className="mt-5 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    Abundância onde havia falta. O vinho bom guardado para o fim.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
