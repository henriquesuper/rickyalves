'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

export function Slide23({ slideIndex = 22 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-28 flex flex-col items-center justify-center text-center">
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
                    A primeira pessoa
                    <br />
                    a confirmar Jeremias
                    <br />
                    foi um pagão.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 2.8, duration: 0.9 }}
                    className="mt-12 text-sm md:text-base italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        maxWidth: '34rem',
                        lineHeight: 1.55,
                    }}
                >
                    A verdade às vezes chega pela boca
                    de quem você menos espera.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
