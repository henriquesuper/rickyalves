// Slide 26 - Analogia da Eleição
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide26_AnalogiaEleicao() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    A Analogia da Eleição
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Mais votos = mais certeza
                </motion.p>

                {/* Comparação lado a lado */}
                <div className="grid md:grid-cols-2 gap-8 w-full mb-10">
                    {/* Poucos manuscritos */}
                    <ParchmentCard delay={0.4} danger>
                        <div className="text-center">
                            <span className="text-4xl block mb-4">🗳️</span>
                            <h3
                                className="text-xl font-bold mb-4"
                                style={{ color: colors.inkBlood }}
                            >
                                Poucos Manuscritos
                            </h3>

                            <div className="space-y-2 mb-4">
                                <div
                                    className="py-2 px-4 rounded"
                                    style={{ background: `${colors.bgSurface}80` }}
                                >
                                    <span style={{ color: colors.parchmentLight }}>Leitura A: 2 votos</span>
                                </div>
                                <div
                                    className="py-2 px-4 rounded"
                                    style={{ background: `${colors.bgSurface}80` }}
                                >
                                    <span style={{ color: colors.parchmentLight }}>Leitura B: 1 voto</span>
                                </div>
                            </div>

                            <p
                                className="text-sm"
                                style={{ color: colors.parchmentMid }}
                            >
                                Resultado: <span style={{ color: colors.inkBlood }}>Incerto</span>
                            </p>
                        </div>
                    </ParchmentCard>

                    {/* Muitos manuscritos */}
                    <ParchmentCard delay={0.6} highlight>
                        <div className="text-center">
                            <span className="text-4xl block mb-4">🗳️🗳️🗳️</span>
                            <h3
                                className="text-xl font-bold mb-4"
                                style={{ color: colors.goldAged }}
                            >
                                Muitos Manuscritos
                            </h3>

                            <div className="space-y-2 mb-4">
                                <div
                                    className="py-2 px-4 rounded"
                                    style={{
                                        background: `${colors.goldAged}20`,
                                        border: `1px solid ${colors.goldAged}50`
                                    }}
                                >
                                    <span style={{ color: colors.goldAged, fontWeight: 'bold' }}>
                                        Leitura A: 9.850 votos
                                    </span>
                                </div>
                                <div
                                    className="py-2 px-4 rounded"
                                    style={{ background: `${colors.bgSurface}80` }}
                                >
                                    <span style={{ color: colors.parchmentMid }}>Leitura B: 150 votos</span>
                                </div>
                            </div>

                            <p
                                className="text-sm"
                                style={{ color: colors.parchmentMid }}
                            >
                                Resultado: <span style={{ color: colors.goldAged }}>Padrão claro!</span>
                            </p>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="p-6 rounded-xl text-center max-w-2xl"
                    style={{
                        background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}60)`,
                        border: `2px solid ${colors.goldAged}40`
                    }}
                >
                    <p
                        className="text-xl"
                        style={{ color: colors.parchmentLight }}
                    >
                        💡 <span style={{ color: colors.goldAged }}>Paradoxo:</span>
                    </p>
                    <p
                        className="text-lg mt-2"
                        style={{ color: colors.parchmentLight }}
                    >
                        Mais manuscritos = mais variantes <em>contadas</em>
                        <br />
                        MAS também = mais <strong style={{ color: colors.goldAged }}>certeza</strong> sobre o original
                    </p>
                </motion.div>

                {/* Conclusão */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-8 text-sm text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    O NT tem tantos "votos" que podemos identificar o original com 99%+ de certeza.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
