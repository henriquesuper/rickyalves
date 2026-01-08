import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide14_Criterio5_Frutos() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            good: ['Filosofia profunda', 'Tradição de não-violência (ahimsa)', 'Ricos rituais comunitários'],
            bad: ['Sistema de castas', 'Mulheres como propriedade (sati)', 'Justificação religiosa de opressão']
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            good: ['Compaixão universal', 'Mindfulness moderno', 'Monastérios como centros de paz'],
            bad: ['Violência budista (Sri Lanka, Myanmar)', 'Passividade social', 'Menos base para justiça social']
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            good: ['Preservação do conhecimento (Idade Média)', 'Caridade (zakat)', 'Coesão comunitária forte'],
            bad: ['Jihad como guerra santa', 'Apostasia = morte (em muitos contextos)', 'Direitos das mulheres problemáticos']
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            good: ['Comunidades fortes', 'Ênfase na família', 'Obras de caridade'],
            bad: ['Racismo histórico (até 1978)', 'Poligamia original', 'Controle institucional']
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            good: ['Hospitais, universidades, ciência moderna', 'Abolição da escravatura', 'Direitos humanos universais'],
            bad: ['Inquisição, cruzadas', 'Colonialismo "cristão"', 'Abusos em nome de Cristo']
        }
    ];

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4 z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <span className="text-4xl mb-2 block">🌳</span>
                    <h2 className="font-['Cinzel'] text-3xl md:text-4xl" style={{ color: colors.goldAncient }}>
                        Critério 5: Frutos Históricos
                    </h2>
                    <p className="text-[#E8D5B7]/70 mt-2">
                        O que produziu quando levada a sério? (Bom E ruim)
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-3">
                    {evaluations.map((item, index) => (
                        <motion.div
                            key={item.tradition}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-black/40 backdrop-blur-xl rounded-xl border overflow-hidden"
                            style={{ borderColor: `${item.color}40` }}
                        >
                            <div className="text-center py-3 bg-gradient-to-r from-transparent via-white/5 to-transparent">
                                <span className="text-2xl">{item.icon}</span>
                                <h3 className="text-xs font-bold mt-1" style={{ color: item.color }}>{item.tradition}</h3>
                            </div>

                            <div className="p-3">
                                <div className="mb-3">
                                    <span className="text-[10px] text-green-400 font-bold">✓ BOM</span>
                                    <ul className="text-[10px] text-green-200/70 mt-1 space-y-0.5">
                                        {item.good.map((g, i) => <li key={i}>• {g}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-[10px] text-red-400 font-bold">✗ RUIM</span>
                                    <ul className="text-[10px] text-red-200/70 mt-1 space-y-0.5">
                                        {item.bad.map((b, i) => <li key={i}>• {b}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-6 bg-[#C9A227]/10 p-4 rounded-xl border border-[#C9A227]/30"
                >
                    <p className="text-center text-[#E8D5B7]">
                        <strong className="text-[#C9A227]">Honestidade é crucial:</strong> Cristãos falharam terrivelmente.
                        A pergunta é: <span className="text-[#00D9FF]">isso foi apesar ou por causa do texto?</span>
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
