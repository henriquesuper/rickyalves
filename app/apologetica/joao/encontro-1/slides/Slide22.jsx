'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, GreekGloss, colors, fonts } from './shared';

export function Slide22({ slideIndex = 21 }) {
    return (
        <ParchmentWrapper deepGradient>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center">
                <GreekGloss
                    word="ἐξηγήσατο"
                    transliteration="exēgēsato"
                    gloss="raiz de exegese — ele o explicou, ele o tornou legível"
                    note="Não há mais véu: o Pai se deu a ler num rosto humano."
                    tone="gold"
                    size="lg"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.55, scaleX: 1 }}
                    transition={{ delay: 3.4, duration: 1.0 }}
                    className="mt-12 h-px"
                    style={{
                        width: '100px',
                        background: colors.gold,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.2, duration: 1.2 }}
                    className="mt-12 text-2xl md:text-4xl italic"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.display,
                        fontWeight: 500,
                        lineHeight: 1.35,
                    }}
                >
                    Jesus é a exegese de Deus.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
