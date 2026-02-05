// Slide 25 - Categorias de Variantes
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide25_CategoriasVariantes() {
    const categories = [
        {
            percent: "~75%",
            label: "Triviais",
            description: "Ortografia, artigos, ordem de palavras",
            color: colors.goldAged,
            bgColor: `${colors.goldAged}20`
        },
        {
            percent: "~24%",
            label: "Insignificantes",
            description: "Sinônimos, adições de 'ο' antes de nomes",
            color: colors.parchmentLight,
            bgColor: `${colors.parchmentMid}20`
        },
        {
            percent: "~1%",
            label: "Significantes",
            description: "Afetam o significado de um versículo",
            color: colors.inkBlood,
            bgColor: `${colors.inkBlood}20`
        },
        {
            percent: "0%",
            label: "Doutrinárias",
            description: "Afetam alguma doutrina central",
            color: colors.goldBright,
            bgColor: `${colors.goldBright}20`,
            highlight: true
        }
    ];

    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-center"
                    style={{ color: colors.goldBright }}
                >
                    Categorias de Variantes
                </motion.h2>

                {/* Barras de progresso visual */}
                <div className="w-full space-y-6 mb-10">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.2 }}
                            className="relative"
                        >
                            <div className="flex items-center gap-4">
                                {/* Porcentagem */}
                                <div
                                    className="w-20 text-right text-2xl font-bold"
                                    style={{ color: cat.color }}
                                >
                                    {cat.percent}
                                </div>

                                {/* Barra */}
                                <div className="flex-1">
                                    <div
                                        className="h-12 rounded-lg flex items-center px-4 relative overflow-hidden"
                                        style={{
                                            background: cat.bgColor,
                                            border: cat.highlight ? `2px solid ${cat.color}` : 'none'
                                        }}
                                    >
                                        {/* Preenchimento animado */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: cat.percent.replace('~', '').replace('%', '') + '%' }}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                                            className="absolute left-0 top-0 bottom-0 rounded-lg"
                                            style={{
                                                background: `${cat.color}30`,
                                                maxWidth: cat.percent === "0%" ? "3%" : "100%"
                                            }}
                                        />

                                        <div className="relative z-10">
                                            <span
                                                className="font-bold"
                                                style={{ color: cat.color }}
                                            >
                                                {cat.label}
                                            </span>
                                            <span
                                                className="text-sm ml-3"
                                                style={{ color: colors.parchmentMid }}
                                            >
                                                {cat.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Destaque final */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <ParchmentCard highlight>
                        <p
                            className="text-center text-xl"
                            style={{ color: colors.parchmentLight }}
                        >
                            💡 <span style={{ color: colors.goldAged, fontWeight: 'bold' }}>Zero por cento</span> das variantes
                            afetam qualquer doutrina cristã essencial
                        </p>
                    </ParchmentCard>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
