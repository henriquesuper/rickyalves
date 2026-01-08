import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide11_Criterio2_Verificabilidade() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            score: 'N/A',
            summary: 'Não fazem alegações históricas verificáveis',
            detail: 'Não é o tipo de texto que faz claims históricas'
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            score: 'Baixa',
            summary: 'Buda é figura histórica real',
            detail: 'Textos compilados 400+ anos depois'
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            score: 'Baixa',
            summary: 'Maomé bem documentado',
            detail: 'Onde toca história bíblica, diverge (nega crucificação)'
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            score: 'Falha',
            summary: 'Zero evidência arqueológica',
            detail: 'Nefitas, lamanitas, jareditas — não encontrados'
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            score: 'Alta*',
            summary: 'Muitas confirmações arqueológicas',
            detail: 'Se expõe à verificação — e sobrevive'
        }
    ];

    const getScoreColor = (score) => {
        if (score.includes('Alta')) return 'text-green-400';
        if (score === 'Baixa') return 'text-yellow-400';
        if (score === 'Falha') return 'text-red-500';
        return 'text-gray-400';
    };

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto px-6 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <span className="text-4xl mb-2 block">🔍</span>
                    <h2 className="font-['Cinzel'] text-3xl md:text-4xl" style={{ color: colors.goldAncient }}>
                        Critério 2: Verificabilidade Histórica
                    </h2>
                    <p className="text-[#E8D5B7]/70 mt-2">
                        As alegações históricas podem ser testadas contra evidências externas?
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {evaluations.map((item, index) => (
                        <motion.div
                            key={item.tradition}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="flex items-center gap-4 bg-black/40 backdrop-blur-xl p-4 rounded-xl border-l-4"
                            style={{ borderColor: item.color }}
                        >
                            <span className="text-3xl">{item.icon}</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-bold" style={{ color: item.color }}>{item.tradition}</h3>
                                    <span className={`text-sm font-bold px-2 py-0.5 rounded ${getScoreColor(item.score)} bg-black/30`}>
                                        {item.score}
                                    </span>
                                </div>
                                <p className="text-[#E8D5B7] text-sm mt-1">{item.summary}</p>
                                <p className="text-white/50 text-xs">{item.detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 grid md:grid-cols-2 gap-4"
                >
                    <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/30">
                        <h4 className="text-red-400 font-bold mb-2">❌ Mórmon - Problemas Graves</h4>
                        <p className="text-sm text-red-200/80">
                            Alega milhões de pessoas, civilizações com cavalos, trigo, aço —
                            <strong> nada encontrado</strong> na América pré-colombiana.
                        </p>
                    </div>
                    <div className="bg-[#00D9FF]/10 p-4 rounded-xl border border-[#00D9FF]/30">
                        <h4 className="text-[#00D9FF] font-bold mb-2">✓ Bíblia - *Com tensões</h4>
                        <p className="text-sm text-[#E8D5B7]">
                            Problemas de datação e interpretação existem (Jericó, censo de Quirinius),
                            mas <strong>não são refutações categóricas</strong>.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
