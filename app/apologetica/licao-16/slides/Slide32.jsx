'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

export function Slide32({ slideIndex = 31 }) {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-4xl mx-auto px-8 py-28 flex flex-col items-center justify-center text-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.5, duration: 1.0 }}
                    className="text-[10px] uppercase tracking-[0.45em] mb-16"
                    style={{
                        color: colors.wineSoft,
                        fontFamily: fonts.mono,
                    }}
                >
                    Sexta-feira · cerca das três da tarde · escuridão de meio-dia
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 2.8 }}
                    className="text-3xl md:text-6xl italic"
                    style={{
                        color: colors.parchment,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        lineHeight: 1.35,
                        letterSpacing: '0.005em',
                    }}
                >
                    Eloí, Eloí,
                    <br />
                    lamá sabactâni?
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.78 }}
                    transition={{ delay: 6.5, duration: 2.0 }}
                    className="mt-12 text-base md:text-xl italic"
                    style={{
                        color: colors.inkFaint,
                        fontFamily: fonts.body,
                        lineHeight: 1.45,
                    }}
                >
                    Meu Deus, meu Deus,
                    <br />
                    por que me abandonaste?
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 9.0, duration: 1.4 }}
                    className="mt-14 text-xs uppercase tracking-[0.4em]"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                    }}
                >
                    Mateus 27:46 · Marcos 15:34
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
