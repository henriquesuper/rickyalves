'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

// Cena estilizada — figura ajoelhada com três figuras dormindo ao fundo
function GethsemaneScene({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay, duration: 1.2 }}
            viewBox="0 0 400 220"
            width="100%"
            height="auto"
            style={{ display: 'block', maxWidth: '420px', margin: '0 auto' }}
        >
            {/* Solo */}
            <line x1="10" y1="210" x2="390" y2="210" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="3 5" />
            {/* Três figuras dormindo ao fundo */}
            <g opacity="0.5">
                {[60, 130, 200].map((x, i) => (
                    <g key={i} transform={`translate(${x} 168)`}>
                        <ellipse cx="0" cy="42" rx="24" ry="6" fill={colors.inkSoft} />
                        <path d="M -22 35 Q 0 8 22 35 Z" fill={colors.parchmentDeep} />
                        <circle cx="-12" cy="22" r="6" fill={colors.parchmentDeep} />
                    </g>
                ))}
            </g>
            {/* Figura central ajoelhada */}
            <g transform="translate(310 165)">
                {/* Vestes */}
                <path
                    d="M -22 32 L 22 32 L 30 50 L -30 50 Z"
                    fill={colors.wineDeep}
                    opacity="0.95"
                />
                {/* Cabeça inclinada */}
                <circle cx="-8" cy="14" r="11" fill={colors.parchment} />
                {/* Braços / mãos juntas */}
                <path
                    d="M -8 24 L -2 16 L 6 22 L -2 30 Z"
                    fill={colors.parchment}
                    opacity="0.9"
                />
            </g>
        </motion.svg>
    );
}

export function Slide31({ slideIndex = 30 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-[10px] uppercase tracking-[0.4em] mb-10 text-center"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.mono,
                    }}
                >
                    Gethsêmani — a noite antes
                </motion.p>

                <GethsemaneScene delay={0.9} />

                <div className="mt-10">
                    <BiblicalQuote
                        reference="Mateus 26:38"
                        referenceTone="gold"
                        tone="parchment"
                        lines={[
                            'A minha alma está profundamente triste,',
                            'numa tristeza mortal.',
                            'Fiquem aqui e vigiem comigo.',
                        ]}
                        size="md"
                        align="center"
                        delay={2.4}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ delay: 5.0, duration: 0.9 }}
                    className="mt-10 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.inkFaint,
                        fontFamily: fonts.body,
                        maxWidth: '34rem',
                        lineHeight: 1.55,
                    }}
                >
                    Volta três vezes. Três vezes os encontra dormindo.
                    Nem os mais próximos conseguiram ficar acordados.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
