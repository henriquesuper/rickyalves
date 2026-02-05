// Slide 11 - O Texto Preservado em P52
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ManuscriptFragment, colors } from './shared';

export default function Slide11_TextoP52() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O Texto Preservado por 1.900 Anos
                </motion.h2>

                {/* Referência */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 px-4 py-2 rounded-full"
                    style={{
                        background: `${colors.inkSepia}30`,
                        color: colors.goldAged
                    }}
                >
                    João 18:37-38
                </motion.div>

                {/* O texto bíblico */}
                <ManuscriptFragment delay={0.4} className="w-full max-w-2xl mb-8">
                    <div
                        className="text-xl md:text-2xl leading-relaxed text-center"
                        style={{
                            fontFamily: "'Crimson Text', Georgia, serif",
                            color: colors.parchmentLight
                        }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mb-4"
                        >
                            <span style={{ color: colors.inkSepia }}>"</span>
                            [...] para isto vim ao mundo: para dar testemunho da{' '}
                            <span style={{ color: colors.goldAged, fontWeight: 'bold' }}>verdade</span>.
                            Todo aquele que é da verdade ouve a minha voz.
                            <span style={{ color: colors.inkSepia }}>"</span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 }}
                            className="text-2xl md:text-3xl font-bold"
                            style={{ color: colors.inkBlood }}
                        >
                            <span style={{ color: colors.inkSepia }}>"</span>
                            Que é a verdade?
                            <span style={{ color: colors.inkSepia }}>"</span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="text-sm mt-4 italic"
                            style={{ color: colors.parchmentMid }}
                        >
                            — Pilatos a Jesus
                        </motion.p>
                    </div>
                </ManuscriptFragment>

                {/* Reflexão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                    className="text-center max-w-lg"
                >
                    <ParchmentCard highlight>
                        <p
                            className="text-lg"
                            style={{ color: colors.parchmentLight }}
                        >
                            💡 A <span style={{ color: colors.goldAged }}>pergunta cética</span> de Pilatos,
                            preservada há quase <span style={{ color: colors.goldAged }}>2.000 anos</span>.
                        </p>
                        <p
                            className="text-sm mt-3 italic"
                            style={{ color: colors.parchmentMid }}
                        >
                            Guga faz perguntas parecidas — e isso é honesto.
                        </p>
                    </ParchmentCard>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
