import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide13_Criterio4_Integridade() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            score: 'Boa',
            summary: 'Transmissão oral meticulosa',
            details: ['Linhagens de recitação', 'Sem "autógrafos" — natureza oral', 'Estabilidade respeitável']
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            score: 'Variável',
            summary: 'Compilação tardia (400+ anos)',
            details: ['Cânones diferentes por escola', 'Theravada vs Mahayana', 'Sem consenso universal']
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            score: 'Boa*',
            summary: 'Codificação sob Uthman',
            details: ['Variantes queimadas (destruídas)', 'Estável desde então', '*História antes de Uthman turbulenta']
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            score: 'Fraca',
            summary: 'Placas não disponíveis',
            details: ['Devolvidas ao anjo', 'Testemunhas problemáticas', '4000+ mudanças desde 1830']
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            score: 'Excelente',
            summary: 'Manuscritos abundantes',
            details: ['5800+ MSS gregos do NT', 'Gap mínimo (décadas, não séculos)', 'Variantes 99%+ triviais']
        }
    ];

    const getScoreBg = (score) => {
        if (score === 'Excelente') return 'from-green-900/40 to-green-950/20 border-green-500/40';
        if (score === 'Boa*' || score === 'Boa') return 'from-lime-900/30 to-lime-950/20 border-lime-500/30';
        if (score === 'Variável') return 'from-yellow-900/30 to-yellow-950/20 border-yellow-500/30';
        return 'from-red-900/30 to-red-950/20 border-red-500/30';
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
                    <span className="text-4xl mb-2 block">📜</span>
                    <h2 className="font-['Cinzel'] text-3xl md:text-4xl" style={{ color: colors.goldAncient }}>
                        Critério 4: Integridade das Fontes
                    </h2>
                    <p className="text-[#E8D5B7]/70 mt-2">
                        Podemos confiar que temos o que foi originalmente ensinado?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-3">
                    {evaluations.map((item, index) => (
                        <motion.div
                            key={item.tradition}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={`bg-gradient-to-br ${getScoreBg(item.score)} p-4 rounded-xl border`}
                        >
                            <div className="text-center mb-3">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="text-sm font-bold mt-2" style={{ color: item.color }}>{item.tradition}</h3>
                                <span className="text-xs font-bold text-white/60">{item.score}</span>
                            </div>
                            <p className="text-sm text-[#E8D5B7] text-center mb-3 font-medium">{item.summary}</p>
                            <ul className="text-xs text-white/60 space-y-1">
                                {item.details.map((d, i) => (
                                    <li key={i}>• {d}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 grid md:grid-cols-2 gap-4"
                >
                    <div className="bg-green-900/20 p-4 rounded-xl border border-green-500/30">
                        <h4 className="text-green-400 font-bold mb-2">✓ Novo Testamento</h4>
                        <p className="text-sm text-green-200/80">
                            <strong>Melhor atestado documento antigo.</strong> Papiros de 50-100 anos após originais.
                            Comparação: Platão, Aristóteles têm gap de 1000+ anos.
                        </p>
                    </div>
                    <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/30">
                        <h4 className="text-red-400 font-bold mb-2">✗ Livro de Mórmon</h4>
                        <p className="text-sm text-red-200/80">
                            Impossível verificar. Placas de ouro "devolvidas ao anjo".
                            Texto moderno (1830) com milhares de alterações.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
