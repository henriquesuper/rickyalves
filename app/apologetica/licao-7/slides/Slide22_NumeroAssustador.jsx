// Slide 22 - O Número Que Assusta
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ImpactNumber, colors } from './shared';

export default function Slide22_NumeroAssustador() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O Número Que Assusta
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    O argumento favorito dos céticos...
                </motion.p>

                {/* O número impactante */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="mb-8"
                >
                    <ImpactNumber number="400.000" label="variantes textuais no NT" />
                </motion.div>

                {/* A reação esperada */}
                <ParchmentCard delay={0.8} danger className="w-full max-w-xl mb-8">
                    <div className="text-center">
                        <p
                            className="text-xl mb-4"
                            style={{ color: colors.parchmentLight }}
                        >
                            😱 <strong>Reação inicial:</strong>
                        </p>
                        <p
                            className="text-lg"
                            style={{ color: colors.inkBlood }}
                        >
                            "A Bíblia está completamente corrompida!"
                        </p>
                        <p
                            className="text-lg mt-2"
                            style={{ color: colors.inkBlood }}
                        >
                            "Não sabemos o que os autores realmente escreveram!"
                        </p>
                    </div>
                </ParchmentCard>

                {/* Mas espera... */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center"
                >
                    <p
                        className="text-2xl font-bold mb-4"
                        style={{ color: colors.goldAged }}
                    >
                        🤔 Mas antes de desesperar...
                    </p>
                    <p
                        className="text-lg"
                        style={{ color: colors.parchmentLight }}
                    >
                        Vamos entender o que esse número <em>realmente</em> significa.
                    </p>
                </motion.div>

                {/* Teaser */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-8 text-sm italic"
                    style={{ color: colors.parchmentMid }}
                >
                    Spoiler: não é o que parece.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
