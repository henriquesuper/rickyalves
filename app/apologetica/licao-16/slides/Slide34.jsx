'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

export function Slide34({ slideIndex = 33 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-32 flex flex-col items-center justify-center text-center w-full">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 2.0, ease: 'easeOut' }}
                    className="text-3xl md:text-6xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        letterSpacing: '-0.005em',
                    }}
                >
                    Jesus chorou.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.75 }}
                    transition={{ delay: 5.0, duration: 1.4 }}
                    className="mt-14 text-xs uppercase tracking-[0.45em]"
                    style={{
                        color: colors.inkMuted,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    João 11:35
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
