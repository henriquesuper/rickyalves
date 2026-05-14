'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

export function Slide40({ slideIndex = 39 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-10 py-20">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-7 md:col-start-2">
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.9 }}
                            className="text-xl md:text-3xl"
                            style={{
                                color: colors.inkDeep,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                                lineHeight: 1.4,
                            }}
                        >
                            A aposta segue aberta.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.9 }}
                            className="mt-4 text-xl md:text-3xl"
                            style={{
                                color: colors.inkDeep,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                                lineHeight: 1.4,
                            }}
                        >
                            O mundo ainda é contestado.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.0, duration: 0.9 }}
                            className="mt-4 text-xl md:text-3xl"
                            style={{
                                color: colors.inkDeep,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                                lineHeight: 1.4,
                            }}
                        >
                            A solidão é real.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 0.55, scaleX: 1 }}
                            transition={{ delay: 4.4, duration: 1.0 }}
                            className="h-px my-10"
                            style={{ width: '180px', background: colors.gold }}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 5.4, duration: 1.0 }}
                            className="text-xl md:text-3xl italic"
                            style={{
                                color: colors.wine,
                                fontFamily: fonts.display,
                                fontWeight: 500,
                                lineHeight: 1.4,
                            }}
                        >
                            Mas há direção.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 7.0, duration: 1.0 }}
                            className="mt-3 text-xl md:text-3xl italic"
                            style={{
                                color: colors.wine,
                                fontFamily: fonts.display,
                                fontWeight: 600,
                                lineHeight: 1.4,
                            }}
                        >
                            E Deus é o personagem
                            <br />
                            que mais sofre.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.55 }}
                            transition={{ delay: 9.2, duration: 1.4 }}
                            className="mt-16 text-xs uppercase"
                            style={{
                                color: colors.inkMuted,
                                fontFamily: fonts.body,
                                letterSpacing: '0.3em',
                                fontVariant: 'small-caps',
                            }}
                        >
                            Lição 16 · O Mundo Quebrado
                        </motion.p>
                    </div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
