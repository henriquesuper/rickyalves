'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors, fonts } from './shared';

function FigueiraSilhouette({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay, duration: 1.4 }}
            width="220"
            height="220"
            viewBox="0 0 220 220"
            style={{ display: 'block' }}
        >
            <line x1="0" y1="200" x2="220" y2="200" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 4" />
            {/* Tronco */}
            <path
                d="M 105 200 L 100 130 L 96 90 L 110 60"
                stroke={colors.inkBody}
                strokeWidth="3"
                fill="none"
                opacity="0.85"
            />
            {/* Galhos */}
            <path d="M 100 130 Q 60 105 40 80" stroke={colors.inkBody} strokeWidth="1.6" fill="none" opacity="0.7" />
            <path d="M 100 130 Q 150 105 175 75" stroke={colors.inkBody} strokeWidth="1.6" fill="none" opacity="0.7" />
            <path d="M 96 90 Q 70 65 55 40"   stroke={colors.inkBody} strokeWidth="1.4" fill="none" opacity="0.7" />
            <path d="M 96 90 Q 130 65 155 35" stroke={colors.inkBody} strokeWidth="1.4" fill="none" opacity="0.7" />
            {/* Folhas — amassados sutis */}
            <ellipse cx="40"  cy="80"  rx="22" ry="14" fill={colors.gold}   opacity="0.35" />
            <ellipse cx="175" cy="75"  rx="24" ry="15" fill={colors.gold}   opacity="0.35" />
            <ellipse cx="55"  cy="40"  rx="20" ry="13" fill={colors.gold}   opacity="0.32" />
            <ellipse cx="155" cy="35"  rx="22" ry="14" fill={colors.gold}   opacity="0.32" />
            <ellipse cx="110" cy="55"  rx="26" ry="16" fill={colors.gold}   opacity="0.4" />
        </motion.svg>
    );
}

export function Slide30({ slideIndex = 29 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center">
                    <FigueiraSilhouette delay={0.4} />
                </div>

                <div>
                    <BiblicalQuote
                        reference="João 1.48"
                        lines={[
                            'Antes que Filipe te chamasse,',
                            'estando tu debaixo da figueira,',
                            'eu te vi.',
                        ]}
                        emphasis={['eu te vi']}
                        tone="wine"
                        referenceTone="gold"
                        size="lg"
                        align="left"
                        delay={1.4}
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 3.4, duration: 1.0 }}
                        className="mt-10 text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        O cético é desarmado não por um argumento —
                        mas por ser conhecido antes de ver.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 4.4, duration: 1.0 }}
                        className="mt-5 text-sm md:text-base italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                            lineHeight: 1.55,
                        }}
                    >
                        Ganho por ser visto, não por ser vencido.
                    </motion.p>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
