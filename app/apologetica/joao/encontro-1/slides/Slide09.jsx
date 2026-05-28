'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, LogosTimeline, colors, fonts } from './shared';

export function Slide09({ slideIndex = 8 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        A herança do Lógos
                    </SectionLabel>
                </div>

                <LogosTimeline delay={0.6} />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.4, duration: 0.9 }}
                    className="mt-8 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        letterSpacing: '0.01em',
                        lineHeight: 1.55,
                    }}
                >
                    Mesmo terreno, mesmo vocabulário — e a única conclusão
                    que nenhum dos três faria.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
