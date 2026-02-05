// Slide 34 - Resumo Final
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide34_ResumoNumeros() {
    const stats = [
        {
            category: "Novo Testamento",
            items: [
                { label: "Manuscritos", value: "25.000+", highlight: true },
                { label: "Intervalo mínimo", value: "~25 anos", highlight: true },
                { label: "Certeza textual", value: "99%+", highlight: true }
            ]
        },
        {
            category: "Melhor clássico (Platão)",
            items: [
                { label: "Manuscritos", value: "7" },
                { label: "Intervalo mínimo", value: "~1.300 anos" },
                { label: "Certeza textual", value: "Aceita" }
            ]
        }
    ];

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
                    Resumo Final
                </motion.h2>

                {/* Comparação lado a lado */}
                <div className="grid md:grid-cols-2 gap-8 w-full mb-10">
                    {stats.map((group, groupIndex) => (
                        <ParchmentCard
                            key={groupIndex}
                            delay={0.3 + groupIndex * 0.2}
                            highlight={groupIndex === 0}
                        >
                            <h3
                                className="text-xl font-bold mb-6 text-center"
                                style={{ color: groupIndex === 0 ? colors.goldAged : colors.parchmentMid }}
                            >
                                {group.category}
                            </h3>
                            <div className="space-y-4">
                                {group.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: groupIndex === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + groupIndex * 0.2 + i * 0.1 }}
                                        className="flex justify-between items-center"
                                    >
                                        <span
                                            className="text-sm"
                                            style={{ color: colors.parchmentMid }}
                                        >
                                            {item.label}:
                                        </span>
                                        <span
                                            className="text-xl font-bold"
                                            style={{
                                                color: item.highlight ? colors.goldAged : colors.parchmentLight
                                            }}
                                        >
                                            {item.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </ParchmentCard>
                    ))}
                </div>

                {/* Varientes desmistificadas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="w-full max-w-2xl p-6 rounded-xl text-center"
                    style={{
                        background: `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}60)`,
                        border: `2px solid ${colors.goldAged}40`
                    }}
                >
                    <p
                        className="text-lg mb-3"
                        style={{ color: colors.parchmentLight }}
                    >
                        <span style={{ color: colors.inkBlood }}>400.000 variantes?</span>
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { pct: "75%", label: "Triviais" },
                            { pct: "24%", label: "Insignificantes" },
                            { pct: "1%", label: "Significantes" },
                            { pct: "0%", label: "Doutrinárias" }
                        ].map((item, i) => (
                            <div key={i}>
                                <p
                                    className="text-xl font-bold"
                                    style={{ color: colors.goldAged }}
                                >
                                    {item.pct}
                                </p>
                                <p
                                    className="text-xs"
                                    style={{ color: colors.parchmentMid }}
                                >
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
