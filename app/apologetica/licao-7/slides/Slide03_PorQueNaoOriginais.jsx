// Slide 03 - Por Que Não Temos os Originais?
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

const reasons = [
    {
        icon: "📜",
        title: "Papiro (feito de junco)",
        detail: "dura ~200 anos em condições normais",
        color: colors.parchmentMid
    },
    {
        icon: "📜",
        title: "Pergaminho (pele de animal)",
        detail: "mais durável, mas ainda se degrada",
        color: colors.parchmentMid
    },
    {
        icon: "🌊",
        title: "Clima do Mediterrâneo",
        detail: "úmido → acelera decomposição",
        color: colors.goldAged
    },
    {
        icon: "🔥",
        title: "Perseguições romanas",
        detail: "destruíram textos cristãos primitivos",
        color: colors.inkBlood
    },
    {
        icon: "♻️",
        title: "Manuscritos eram copiados",
        detail: "originais se tornavam \"dispensáveis\"",
        color: colors.goldAged
    }
];

export default function Slide03_PorQueNaoOriginais() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-center"
                    style={{ color: colors.parchmentLight }}
                >
                    O que aconteceu com os originais?
                </motion.h2>

                {/* Lista de razões */}
                <div className="space-y-4 w-full">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.15 }}
                            className="flex items-center gap-4 p-4 rounded-lg"
                            style={{
                                background: `${colors.bgSurface}80`,
                                border: `1px solid ${colors.inkSepia}30`
                            }}
                        >
                            <span className="text-3xl">{reason.icon}</span>
                            <div className="flex-1">
                                <h4
                                    className="font-bold text-lg"
                                    style={{ color: reason.color }}
                                >
                                    {reason.title}
                                </h4>
                                <p
                                    className="text-sm"
                                    style={{ color: `${colors.parchmentLight}90` }}
                                >
                                    → {reason.detail}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 p-4 rounded-lg text-center"
                    style={{
                        background: `${colors.goldAged}15`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p style={{ color: colors.parchmentLight }}>
                        💡 <strong>Copiar era preservar.</strong> Quando você tem uma cópia boa,
                        o original vira "dispensável".
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
