// Slide 15 - 1947: A Descoberta do Mar Morto
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide15_Descoberta1947() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título dramático */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-8"
                >
                    <span
                        className="text-7xl md:text-9xl font-bold block"
                        style={{
                            color: colors.goldBright,
                            textShadow: `0 0 60px ${colors.goldAged}40`
                        }}
                    >
                        1947
                    </span>
                    <p
                        className="text-2xl mt-4"
                        style={{ color: colors.parchmentMid }}
                    >
                        A descoberta que mudou tudo
                    </p>
                </motion.div>

                {/* A história */}
                <div className="grid md:grid-cols-2 gap-8 w-full mb-8">
                    <ParchmentCard delay={0.4}>
                        <div className="space-y-4">
                            <h3
                                className="text-xl font-bold flex items-center gap-2"
                                style={{ color: colors.goldAged }}
                            >
                                🏜️ A História
                            </h3>
                            {[
                                "Um pastor beduíno procurava uma cabra perdida",
                                "Jogou uma pedra numa caverna perto do Mar Morto",
                                "Ouviu o som de cerâmica quebrando",
                                "Dentro dos jarros: rolos de couro envelhecido"
                            ].map((item, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.2 }}
                                    className="flex items-start gap-2"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span style={{ color: colors.goldAged }}>•</span>
                                    {item}
                                </motion.p>
                            ))}
                        </div>
                    </ParchmentCard>

                    <ParchmentCard delay={0.8} highlight>
                        <div className="space-y-4">
                            <h3
                                className="text-xl font-bold flex items-center gap-2"
                                style={{ color: colors.goldAged }}
                            >
                                📜 O Que Foi Encontrado
                            </h3>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                <p style={{ color: colors.parchmentLight }} className="mb-3">
                                    <strong style={{ color: colors.goldAged }}>~900 manuscritos</strong> em 11 cavernas
                                </p>
                                <p style={{ color: colors.parchmentLight }} className="mb-3">
                                    Todos os livros do AT exceto Ester
                                </p>
                                <p
                                    className="text-lg font-bold"
                                    style={{ color: colors.goldAged }}
                                >
                                    Datados: ~250 a.C. — 68 d.C.
                                </p>
                            </motion.div>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Nota importante */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                        background: `${colors.inkBlood}15`,
                        border: `1px solid ${colors.inkBlood}30`
                    }}
                >
                    <WaxSeal icon="⚠️" size="sm" delay={1.7} />
                    <div>
                        <p style={{ color: colors.parchmentLight }}>
                            <strong style={{ color: colors.inkBlood }}>ATENÇÃO:</strong> Manuscritos do{' '}
                            <strong style={{ color: colors.goldAged }}>Antigo Testamento</strong>, não do Novo!
                        </p>
                        <p className="text-sm mt-1" style={{ color: colors.parchmentMid }}>
                            Quiz pergunta 4: "Os Manuscritos do Mar Morto são do NT" — Resposta: NÃO
                        </p>
                    </div>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
