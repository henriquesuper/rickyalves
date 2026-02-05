// Slide 19 - Quem Eram os Massoretas
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide19_QuemEramMassoretas() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    Os Massoretas
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Os guardiões obsessivos do texto hebraico
                </motion.p>

                {/* Selo central */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="mb-8"
                >
                    <WaxSeal icon="✍️" size="lg" />
                </motion.div>

                {/* Info cards */}
                <div className="grid md:grid-cols-2 gap-6 w-full mb-8">
                    <ParchmentCard delay={0.5}>
                        <h3
                            className="text-xl font-bold mb-4 flex items-center gap-2"
                            style={{ color: colors.goldAged }}
                        >
                            📅 Quem Eram?
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Escribas judeus especializados",
                                "Ativos ~500 — 1000 d.C.",
                                "Centros em Tiberíades, Babilônia, Palestina"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    className="flex items-start gap-2"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span style={{ color: colors.goldAged }}>•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </ParchmentCard>

                    <ParchmentCard delay={0.6} highlight>
                        <h3
                            className="text-xl font-bold mb-4 flex items-center gap-2"
                            style={{ color: colors.goldAged }}
                        >
                            📖 O Nome
                        </h3>
                        <p style={{ color: colors.parchmentLight }} className="mb-3">
                            <strong style={{ color: colors.goldAged }}>Masorah</strong> = "tradição" em hebraico
                        </p>
                        <p style={{ color: colors.parchmentMid }}>
                            Eles criaram sistemas para preservar não só as palavras,
                            mas a pronúncia exata do texto hebraico.
                        </p>
                    </ParchmentCard>
                </div>

                {/* O legado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-4 rounded-xl text-center"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p style={{ color: colors.parchmentLight }}>
                        💡 Desenvolveram um <span style={{ color: colors.goldAged }}>sistema obsessivo</span> de
                        verificação que não tem paralelo na história antiga
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
