// Slide 05 - Introdução à Comparação
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide05_IntroComparacao() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
                {/* Título do bloco */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm uppercase tracking-[0.3em] mb-6"
                    style={{ color: colors.goldAged }}
                >
                    A Comparação Devastadora
                </motion.p>

                {/* Balança visual */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-8xl mb-10"
                >
                    ⚖️
                </motion.div>

                {/* Texto principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="max-w-2xl"
                >
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ color: colors.parchmentLight }}
                    >
                        Comparação com<br />Outros Documentos Antigos
                    </h2>

                    <p
                        className="text-xl mb-4"
                        style={{ color: colors.parchmentMid }}
                    >
                        Se você confia que temos Platão,<br />
                        Aristóteles, Homero, César...
                    </p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-2xl font-bold"
                        style={{ color: colors.goldBright }}
                    >
                        ...você <span style={{ textDecoration: 'underline' }}>PRECISA</span> ver esses números.
                    </motion.p>
                </motion.div>

                {/* Seta de transição */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="mt-12"
                >
                    <motion.span
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-4xl"
                        style={{ color: colors.goldAged }}
                    >
                        ↓
                    </motion.span>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
