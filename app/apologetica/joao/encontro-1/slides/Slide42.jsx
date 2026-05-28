'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, TabernacleThread, colors, fonts } from './shared';

export function Slide42({ slideIndex = 41 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        A costura — três quadros
                    </SectionLabel>
                </div>

                <TabernacleThread delay={0.6} />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.2, duration: 1.0 }}
                    className="mt-12 text-center text-sm md:text-base italic max-w-3xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    O motivo do tabernáculo atravessa o evangelho —
                    e a fissura no corpo já está antecipada.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
