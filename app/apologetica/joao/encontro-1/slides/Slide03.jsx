'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, PrologueFunnel, colors, fonts } from './shared';

export function Slide03({ slideIndex = 2 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        O arco do prólogo
                    </SectionLabel>
                </div>

                <PrologueFunnel delay={0.6} />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.4, duration: 0.9 }}
                    className="mt-10 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        letterSpacing: '0.02em',
                    }}
                >
                    Um funil — do cosmos até um rosto humano.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
