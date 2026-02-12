// Slide 31 - O Que Você Pode Fazer Agora
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const actions = [
    {
        num: '1',
        title: 'COMPARE',
        desc: 'Use pelo menos DUAS versões para cada estudo.',
        sub: '(uma formal + uma dinâmica)',
        color: colors.greekPrimary,
    },
    {
        num: '2',
        title: 'CONSULTE',
        desc: 'Quando uma passagem parecer estranha, olhe no original via BibleHub.',
        sub: '(strong numbers são seus amigos)',
        color: colors.portPrimary,
    },
    {
        num: '3',
        title: 'CONTEXTUALIZE',
        desc: 'Pergunte: por que traduções divergem aqui? O que o original dizia?',
        sub: '(o contexto resolve 90% das dúvidas)',
        color: colors.hebrewPrimary,
    },
    {
        num: '4',
        title: 'NÃO ENTRE EM PÂNICO',
        desc: 'Diferenças entre versões são riqueza, não ameaça.',
        sub: '(cada ângulo ilumina o todo)',
        color: colors.goldAged,
    },
];

export default function Slide31_OQueFazer() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.goldBright }}
                >
                    O QUE VOCÊ <span style={{ color: colors.portPrimary }}>PODE FAZER</span> AGORA
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl mb-8">
                    {actions.map((a, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}
                        >
                            <PrismCard variant="neutral" className="h-full">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: `${a.color}20`,
                                            border: `2px solid ${a.color}60`
                                        }}
                                    >
                                        <span className="text-lg font-bold" style={{ color: a.color }}>{a.num}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm" style={{ color: a.color }}>{a.title}</p>
                                        <p className="text-sm" style={{ color: colors.textLight }}>{a.desc}</p>
                                        <p className="text-xs italic" style={{ color: colors.textMedium }}>{a.sub}</p>
                                    </div>
                                </div>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
