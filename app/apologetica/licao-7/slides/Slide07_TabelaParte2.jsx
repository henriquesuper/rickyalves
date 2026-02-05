// Slide 07 - Tabela Comparativa (Parte 2 - O Choque)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors, ImpactNumber } from './shared';

const documentosCompletos = [
    { autor: "Platão", intervalo: "~1.300 anos", manuscritos: "7", highlight: false },
    { autor: "Aristóteles", intervalo: "~1.400 anos", manuscritos: "49", highlight: false },
    { autor: "César", intervalo: "~950 anos", manuscritos: "10", highlight: false },
    { autor: "Tácito", intervalo: "~1.000 anos", manuscritos: "2", highlight: false },
    { autor: "Homero", intervalo: "~400 anos", manuscritos: "~650", highlight: false }
];

export default function Slide07_TabelaParte2() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Tabela resumida */}
                <div className="w-full mb-8 space-y-2">
                    {documentosCompletos.map((doc, index) => (
                        <motion.div
                            key={doc.autor}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="flex justify-between items-center px-4 py-2 rounded"
                            style={{
                                background: `${colors.bgSurface}60`,
                                border: `1px solid ${colors.inkSepia}20`
                            }}
                        >
                            <span style={{ color: colors.parchmentMid }}>{doc.autor}</span>
                            <span style={{ color: colors.parchmentLight }}>{doc.intervalo}</span>
                            <span className="font-bold" style={{ color: colors.parchmentLight }}>
                                {doc.manuscritos} ms
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Linha divisória dramática */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="w-full h-1 mb-8"
                    style={{ background: `linear-gradient(90deg, ${colors.goldAged}, ${colors.goldBright}, ${colors.goldAged})` }}
                />

                {/* O NOVO TESTAMENTO - O Impacto */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="w-full p-6 rounded-xl text-center"
                    style={{
                        background: `linear-gradient(135deg, ${colors.goldAged}20, ${colors.woodMedium}80)`,
                        border: `2px solid ${colors.goldBright}50`,
                        boxShadow: `0 0 30px ${colors.goldAged}30`
                    }}
                >
                    <h3
                        className="text-2xl font-bold mb-4"
                        style={{ color: colors.goldBright }}
                    >
                        📜 NOVO TESTAMENTO 📜
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-sm" style={{ color: colors.parchmentMid }}>Data Original</p>
                            <p className="text-lg font-bold" style={{ color: colors.parchmentLight }}>50-100 d.C.</p>
                        </div>
                        <div>
                            <p className="text-sm" style={{ color: colors.parchmentMid }}>Cópia Mais Antiga</p>
                            <p className="text-lg font-bold" style={{ color: colors.parchmentLight }}>~125 d.C.</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm" style={{ color: colors.parchmentMid }}>Intervalo</p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-3xl font-bold"
                            style={{ color: colors.goldBright }}
                        >
                            ~25-75 anos
                        </motion.p>
                    </div>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <div className="text-center">
                            <p className="text-sm" style={{ color: colors.parchmentMid }}>Grego</p>
                            <span className="text-2xl font-bold" style={{ color: colors.goldBright }}>5.800+</span>
                        </div>
                        <div className="text-center">
                            <p className="text-sm" style={{ color: colors.parchmentMid }}>Latim</p>
                            <span className="text-2xl font-bold" style={{ color: colors.goldBright }}>10.000+</span>
                        </div>
                        <div className="text-center">
                            <p className="text-sm" style={{ color: colors.parchmentMid }}>Outros</p>
                            <span className="text-2xl font-bold" style={{ color: colors.goldBright }}>9.300+</span>
                        </div>
                    </div>
                </motion.div>

                {/* TOTAL */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="mt-8"
                >
                    <ImpactNumber
                        number="25.000+"
                        label="MANUSCRITOS TOTAIS"
                    />
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
