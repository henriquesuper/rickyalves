// Slide 10 - P52: O Fragmento Mais Antigo
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ManuscriptFragment, ImpactNumber, colors } from './shared';

export default function Slide10_P52() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    P52 — O Fragmento Mais Antigo
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10 w-full items-center">
                    {/* Esquerda: Visual do fragmento */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <ManuscriptFragment className="w-64 h-48 flex items-center justify-center">
                            <div className="text-center">
                                <span
                                    className="text-6xl block mb-2"
                                    style={{ fontFamily: "'Crimson Text', serif" }}
                                >
                                    P⁵²
                                </span>
                                <p
                                    className="text-sm italic"
                                    style={{ color: colors.inkSepia }}
                                >
                                    ~8.9 × 6 cm
                                </p>
                            </div>
                        </ManuscriptFragment>
                    </motion.div>

                    {/* Direita: Informações */}
                    <div className="space-y-6">
                        <ParchmentCard delay={0.5} highlight>
                            <div className="text-center">
                                <ImpactNumber number="~125" label="d.C." delay={0.7} />
                                <p
                                    className="mt-4 text-lg"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    Apenas <span style={{ color: colors.goldAged, fontWeight: 'bold' }}>25-30 anos</span> após
                                    o Evangelho de João ser escrito
                                </p>
                            </div>
                        </ParchmentCard>

                        {/* Detalhes */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="space-y-3"
                        >
                            {[
                                { label: "Conteúdo", value: "João 18:31-33, 37-38" },
                                { label: "Descoberto em", value: "Egito (longe de Éfeso!)" },
                                { label: "Localização atual", value: "Biblioteca John Rylands, Manchester" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span style={{ color: colors.goldAged }}>•</span>
                                    <span style={{ color: colors.parchmentMid }}>{item.label}:</span>
                                    <span style={{ color: colors.parchmentLight }}>{item.value}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-10 p-4 rounded-xl text-center"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p style={{ color: colors.parchmentLight }}>
                        💡 Se estava no <span style={{ color: colors.goldAged }}>Egito</span> em 125 d.C.,
                        o original já havia se espalhado décadas antes!
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
