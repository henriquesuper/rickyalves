'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, Breath, colors, fonts } from './shared';

export function Slide23() {
    return (
        <ParchmentWrapper deepGradient>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Eles perguntaram pelas &ldquo;obras&rdquo;. Jesus respondeu:
                </SectionLabel>

                <div className="mt-12">
                    <Breath color={colors.gold} size={520} delay={1.4} intensity={0.22}>
                        <BiblicalQuote
                            reference="João 6:29"
                            referenceTone="gold"
                            tone="gold"
                            lines={[
                                'A obra de Deus é esta:',
                                'que creiais naquele que Ele enviou.',
                            ]}
                            emphasis={['creiais']}
                            size="xl"
                            align="center"
                            delay={1.0}
                        />
                    </Breath>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 1.0 }}
                    className="mt-16 text-lg md:text-xl"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display, fontStyle: 'italic', maxWidth: '32rem', textAlign: 'center' }}
                >
                    A obra que Deus pede primeiro não é o esforço.
                    É a fé.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
