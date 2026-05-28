'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

function LambSilhouette({ delay = 0 }) {
    return (
        <motion.svg
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay, duration: 1.0 }}
            width="160"
            height="100"
            viewBox="0 0 160 100"
            style={{ display: 'block' }}
        >
            <line x1="0" y1="92" x2="160" y2="92" stroke={colors.inkSoft} strokeWidth="0.6" strokeDasharray="2 4" />
            {/* Corpo */}
            <ellipse cx="80" cy="60" rx="40" ry="22" fill={colors.gold} opacity="0.85" />
            {/* Cabeça */}
            <ellipse cx="38" cy="56" rx="14" ry="11" fill={colors.gold} opacity="0.95" />
            {/* Pernas */}
            <line x1="58" y1="80" x2="58" y2="92" stroke={colors.inkBody} strokeWidth="2" />
            <line x1="78" y1="82" x2="78" y2="92" stroke={colors.inkBody} strokeWidth="2" />
            <line x1="98" y1="82" x2="98" y2="92" stroke={colors.inkBody} strokeWidth="2" />
            <line x1="113" y1="80" x2="113" y2="92" stroke={colors.inkBody} strokeWidth="2" />
            {/* Orelha */}
            <ellipse cx="32" cy="48" rx="3" ry="6" fill={colors.inkBody} opacity="0.7" />
        </motion.svg>
    );
}

export function Slide27({ slideIndex = 26 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        João aponta — Jo 1.29
                    </SectionLabel>
                </div>

                <BiblicalQuote
                    reference="João 1.29"
                    lines={[
                        'Eis o Cordeiro de Deus,',
                        'que tira o pecado do mundo.',
                    ]}
                    emphasis={['Cordeiro', 'pecado do mundo']}
                    tone="wine"
                    referenceTone="gold"
                    size="xl"
                    delay={0.6}
                />

                <div className="mt-12 flex justify-center">
                    <LambSilhouette delay={2.0} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 3.2, duration: 1.0 }}
                    className="mt-10 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    Primeira nota de sacrifício — apenas plantada.
                    Volta inteira em João 19,
                    quando Jesus morre na hora exata em que os cordeiros
                    da Páscoa eram abatidos.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
