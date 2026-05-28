'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, colors, fonts } from './shared';

export function Slide45({ slideIndex = 44 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-3xl mx-auto px-8 py-32 text-center flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.65 }}
                    transition={{ delay: 0.4, duration: 1.0 }}
                    className="text-xs md:text-sm tracking-[0.45em] uppercase mb-10"
                    style={{
                        color: colors.gold,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    pergunta clínica
                </motion.p>

                <QuietTitle size="lg" align="center" delay={0.9} weight={500} italic>
                    O que você faz
                    <br />
                    com alguém que vem
                    <br />
                    de noite?
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                    className="mt-14 h-px"
                    style={{ width: '120px', background: colors.gold }}
                />
            </div>
        </ParchmentWrapper>
    );
}
