import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

export default function Slide10_Criterio1_Coerencia() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            score: 'Média',
            points: [
                'Compostos por diferentes escolas ao longo de séculos',
                'Tensões internas (politeísmo inicial → monismo posterior)',
                'Tradição aceita múltiplas interpretações'
            ]
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            score: 'Baixa',
            points: [
                'Diferentes escolas têm cânones diferentes',
                'Contradições entre escolas sobre questões fundamentais',
                'Pluralismo interno aceito; não há "ortodoxia" única'
            ]
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            score: 'Média',
            points: [
                'Alegação de perfeição verbal',
                'Problema: versos "ab-rogados" (naskh)',
                'Versos posteriores cancelam anteriores'
            ]
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            score: 'Baixa',
            points: [
                'Cita Isaías da KJV (incluindo erros do séc. XVII)',
                'Mudanças textuais significativas desde 1830',
                'Problemas sérios de coerência com alegações'
            ]
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            score: 'Alta',
            points: [
                '40+ autores, 1500 anos — unidade teológica notável',
                'Tensões existem (Tiago vs. Paulo?) — resolvíveis',
                'Progressão teológica coerente'
            ]
        }
    ];

    const getScoreColor = (score) => {
        if (score === 'Alta') return 'text-green-400';
        if (score === 'Média') return 'text-yellow-400';
        return 'text-red-400';
    };

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-6 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <span className="text-4xl mb-2 block">🔗</span>
                    <h2 className="font-['Cinzel'] text-3xl md:text-4xl" style={{ color: colors.goldAncient }}>
                        Critério 1: Coerência Interna
                    </h2>
                    <p className="text-[#E8D5B7]/70 mt-2">
                        O texto se contradiz ou mantém unidade?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-3">
                    {evaluations.map((item, index) => (
                        <motion.div
                            key={item.tradition}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-black/50 backdrop-blur-xl p-4 rounded-xl border"
                            style={{ borderColor: `${item.color}40` }}
                        >
                            <div className="text-center mb-3">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="text-sm font-bold mt-1" style={{ color: item.color }}>
                                    {item.tradition}
                                </h3>
                                <span className={`text-xs font-bold ${getScoreColor(item.score)}`}>
                                    {item.score}
                                </span>
                            </div>
                            <ul className="text-xs text-[#E8D5B7]/80 space-y-2">
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-1">
                                        <span className="text-[#C9A227] mt-0.5">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center bg-[#00D9FF]/10 p-4 rounded-xl border border-[#00D9FF]/30"
                >
                    <p className="text-[#00D9FF] font-medium">
                        💡 "Como 40 pessoas em 1500 anos mantêm essa coerência sem um editor central?"
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
