'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

function LonelyFigure({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 0.92, y: 0 }}
            transition={{ delay, duration: 1.2 }}
            width="140"
            height="220"
            viewBox="0 0 140 220"
            style={{ display: 'block' }}
        >
            {/* Solo */}
            <line x1="10" y1="215" x2="130" y2="215" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 4" />
            {/* Cabeça */}
            <circle cx="70" cy="35" r="14" fill={colors.wine} />
            {/* Corpo — vestes longas */}
            <path
                d="M 50 50 L 90 50 L 105 215 L 35 215 Z"
                fill={colors.wine}
                opacity="0.92"
            />
            {/* Mão/cajado */}
            <line x1="95" y1="60" x2="115" y2="215" stroke={colors.inkDeep} strokeWidth="2" opacity="0.6" />
        </motion.svg>
    );
}

export function Slide16({ slideIndex = 15 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <SectionLabel align="left" delay={0.2}>
                        Dentro da catástrofe
                    </SectionLabel>

                    <div className="mt-6">
                        <QuietTitle size="lg" align="left" delay={0.6} weight={500}>
                            Jeremias
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.9 }}
                        className="mt-5 text-lg md:text-2xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                            lineHeight: 1.45,
                        }}
                    >
                        O profeta solitário
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ delay: 2.2, duration: 0.9 }}
                        className="mt-6 text-sm md:text-base"
                        style={{
                            color: colors.inkSoft,
                            fontFamily: fonts.body,
                            lineHeight: 1.55,
                            maxWidth: '28rem',
                        }}
                    >
                        Profetizou de 627 a depois de 586 a.C. Quarenta anos
                        anunciando algo que ninguém queria ouvir — em voz alta,
                        no espaço público, sozinho.
                    </motion.p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <LonelyFigure delay={1.0} />
                </div>
            </div>
        </ParchmentWrapper>
    );
}
