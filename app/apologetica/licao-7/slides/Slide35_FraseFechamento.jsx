// Slide 35 - A Frase de Fechamento
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, WaxSeal, colors } from './shared';

export default function Slide35_FraseFechamento() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto min-h-[80vh]">
                {/* Selo central */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mb-10"
                >
                    <WaxSeal icon="📜" size="lg" />
                </motion.div>

                {/* A frase principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mb-10"
                >
                    <p
                        className="text-2xl md:text-4xl leading-relaxed"
                        style={{ color: colors.parchmentLight }}
                    >
                        Se você não pode confiar na{' '}
                        <span
                            style={{
                                color: colors.goldBright,
                                fontWeight: 'bold',
                                textShadow: `0 0 20px ${colors.goldAged}50`
                            }}
                        >
                            Bíblia
                        </span>...
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mb-10"
                >
                    <p
                        className="text-2xl md:text-4xl"
                        style={{ color: colors.parchmentLight }}
                    >
                        ...você não pode confiar em{' '}
                        <span
                            style={{
                                color: colors.inkBlood,
                                fontWeight: 'bold'
                            }}
                        >
                            NENHUM
                        </span>{' '}
                        texto antigo.
                    </p>
                </motion.div>

                {/* Explicação */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="p-6 rounded-xl text-center max-w-lg"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p
                        className="text-lg"
                        style={{ color: colors.parchmentLight }}
                    >
                        O texto que tem{' '}
                        <span style={{ color: colors.goldAged }}>MIL vezes mais evidência</span>{' '}
                        é questionado...
                    </p>
                    <p
                        className="text-lg mt-2"
                        style={{ color: colors.parchmentLight }}
                    >
                        ...enquanto textos com{' '}
                        <span style={{ color: colors.parchmentMid }}>quase nenhuma</span>{' '}
                        são aceitos sem hesitação?
                    </p>
                </motion.div>

                {/* Conclusão */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="mt-8 text-lg italic text-center"
                    style={{ color: colors.goldAged }}
                >
                    Isso não é ceticismo honesto — é ceticismo seletivo.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
