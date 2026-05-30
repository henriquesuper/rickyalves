'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

export function Slide22() {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-3xl mx-auto px-8 py-24 flex flex-col items-center justify-center w-full text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 0.3, duration: 0.9 }}
                    className="text-base md:text-lg"
                    style={{ color: colors.parchment, fontFamily: fonts.body, letterSpacing: '0.04em' }}
                >
                    Se <em>fazer</em> é o requisito de entrada,
                    a salvação volta a depender de mim.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 1.0, ease: 'easeOut' }}
                    className="mt-10 text-5xl md:text-7xl"
                    style={{ color: colors.wineSoft, fontFamily: fonts.display, fontWeight: 600 }}
                >
                    Isso tem um nome.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.9 }}
                    className="mt-6 text-2xl md:text-3xl italic"
                    style={{ color: colors.goldFaint, fontFamily: fonts.accent, letterSpacing: '0.08em' }}
                >
                    Legalismo.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-16 text-lg md:text-xl"
                    style={{ color: colors.parchment, fontFamily: fonts.display, fontStyle: 'italic' }}
                >
                    Então: o que Jesus quis dizer com
                    &ldquo;fazer a vontade do Pai&rdquo;?
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
