'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, ThreeCardsRow, colors, fonts } from './shared';

const cards = [
    { ref: 'Perdão · 1 Jo 1:9', text: 'Ele é fiel e justo para nos perdoar e nos purificar de toda injustiça.', bg: colors.gold },
    { ref: 'Justificação · Rm 3:24', text: 'Justificados gratuitamente, pela Sua graça, mediante a redenção em Cristo.', bg: colors.gold },
    { ref: 'Expiação · Rm 3:25', text: 'A quem Deus propôs como propiciação, pela fé, no Seu sangue.', bg: colors.gold },
];

export function Slide16() {
    return (
        <ParchmentWrapper>
            <div className="max-w-5xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl md:text-3xl mb-12"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display, textAlign: 'center' }}
                >
                    O evangelho faz por nós o que a lei jamais poderia:
                </motion.p>

                <ThreeCardsRow cards={cards} delay={1.0} />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.8, duration: 1.0 }}
                    className="mt-12 text-lg md:text-xl italic"
                    style={{ color: colors.wine, fontFamily: fonts.display, textAlign: 'center' }}
                >
                    A lei aponta o problema. O Calvário paga a conta.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
