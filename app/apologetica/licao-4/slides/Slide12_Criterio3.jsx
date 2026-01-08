import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide12_Criterio3_Realidade() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            issue: 'Mundo é ilusão',
            problem: 'Nega a realidade do sofrimento e da individualidade. Karma: problema = você mesmo (vidas passadas).',
            score: 'Baixa'
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            issue: 'Solução = eliminar desejo',
            problem: 'Funciona para moralidade básica, mas não reconhece necessidade de perdão real.',
            score: 'Média'
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            issue: 'Deus distante',
            problem: 'Submissão como única resposta. Sem garantia de aceitação. Alá não é "próximo" do modo que a Bíblia descreve.',
            score: 'Média'
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            issue: 'Excesso otimista',
            problem: 'Progresso eterno é atraente, mas não confronta profundamente o problema do pecado e egoísmo humano.',
            score: 'Média'
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            issue: 'Diagnóstico: pecado',
            problem: 'Reconhece: somos quebrados, mas valiosos. Problema não é ignorância — é rebelião. Solução: graça, não apenas esforço.',
            score: 'Alta'
        }
    ];

    const getScoreColor = (score) => {
        if (score === 'Alta') return 'bg-green-500/20 border-green-500/40 text-green-400';
        if (score === 'Média') return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400';
        return 'bg-red-500/20 border-red-500/40 text-red-400';
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
                    <span className="text-4xl mb-2 block">❤️</span>
                    <h2 className="font-['Cinzel'] text-3xl md:text-4xl" style={{ color: colors.goldAncient }}>
                        Critério 3: Correspondência com a Realidade Humana
                    </h2>
                    <p className="text-[#E8D5B7]/70 mt-2">
                        Reflete honestamente a experiência humana — sofrimento, culpa, desejo de significado?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-3">
                    {evaluations.map((item, index) => (
                        <motion.div
                            key={item.tradition}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={`p-4 rounded-xl border ${getScoreColor(item.score)}`}
                        >
                            <div className="text-center mb-3">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="text-sm font-bold mt-2" style={{ color: item.color }}>
                                    {item.tradition}
                                </h3>
                            </div>
                            <div className="text-center mb-3">
                                <span className="text-xs font-bold bg-black/30 px-2 py-1 rounded">
                                    {item.issue}
                                </span>
                            </div>
                            <p className="text-xs text-[#E8D5B7]/80 text-center">
                                {item.problem}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 bg-gradient-to-r from-[#00D9FF]/10 to-[#C9A227]/10 p-6 rounded-xl border border-[#C9A227]/30"
                >
                    <p className="text-center text-lg text-[#E8D5B7]">
                        <span className="text-[#00D9FF] font-bold">"A Bíblia lê você"</span> —
                        seus heróis falham (Davi, Pedro), seus vilões são complexos.
                        <strong className="text-[#C9A227]"> Não mascara a condição humana.</strong>
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
