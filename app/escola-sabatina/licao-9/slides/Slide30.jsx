'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, colors, fonts } from './shared';

const options = [
    { label: 'A minha obediência à lei', tone: '#722F37', wrong: true },
    { label: 'A justiça perfeita de Jesus em meu lugar', tone: '#B8860B', wrong: false },
];

export function Slide30() {
    return (
        <ParchmentWrapper dark>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.0 }}
                    className="text-lg md:text-2xl"
                    style={{ color: colors.parchment, fontFamily: fonts.display, maxWidth: '38rem', textAlign: 'center', lineHeight: 1.55 }}
                >
                    No dia do juízo, quando cada pecado for apresentado
                    diante de um Deus santo e perfeito...
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 1.0 }}
                    className="mt-10 text-2xl md:text-3xl"
                    style={{ color: colors.goldFaint, fontFamily: fonts.display, fontStyle: 'italic', textAlign: 'center' }}
                >
                    ...em que você vai confiar?
                </motion.p>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
                    {options.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.0 + i * 0.8, duration: 0.8 }}
                            className="p-6 text-center"
                            style={{
                                background: `${o.tone}22`,
                                border: `1px solid ${o.tone}`,
                            }}
                        >
                            <p
                                className="text-lg md:text-xl"
                                style={{
                                    color: colors.parchment,
                                    fontFamily: fonts.display,
                                    fontStyle: 'italic',
                                    lineHeight: 1.4,
                                }}
                            >
                                {o.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 5.2, duration: 1.0 }}
                    className="mt-10 text-xs uppercase tracking-[0.3em]"
                    style={{ color: colors.inkFaint, fontFamily: fonts.body }}
                >
                    Sexta · Questão para discussão nº 4
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
