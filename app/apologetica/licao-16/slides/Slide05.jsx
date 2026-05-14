'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

export function Slide05({ slideIndex = 4 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-24 flex flex-col items-center justify-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.0 }}
                    className="text-2xl md:text-4xl italic"
                    style={{
                        color: colors.inkDeep,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        lineHeight: 1.4,
                        letterSpacing: '-0.005em',
                    }}
                >
                    E se a sua oração mais escura
                    <br />
                    cabe na Bíblia?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 2.6, duration: 1.2 }}
                    className="mt-16"
                >
                    <span
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                            fontSize: '0.85rem',
                            letterSpacing: '0.4em',
                        }}
                    >
                        ·   ·   ·
                    </span>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
