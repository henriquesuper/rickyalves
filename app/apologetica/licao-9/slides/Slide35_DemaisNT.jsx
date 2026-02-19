'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, StampBadge, colors } from './shared';

const autoresNT = [
    { livro: 'Tiago', autor: 'Irmão de Jesus', detalhe: 'Liderança em Jerusalém · antes de 62 d.C.', stamp: 'verified' },
    { livro: '1 Pedro', autor: 'Pedro + Silvano', detalhe: 'Silvano como secretário (diferença de estilo explicada)', stamp: 'verified' },
    { livro: '2 Pedro', autor: 'Debate legítimo', detalhe: 'Autoria petrina defensável', stamp: 'debate' },
    { livro: 'Cartas de João', autor: 'João', detalhe: 'Consistentes com o quarto evangelho', stamp: 'verified' },
    { livro: 'Judas', autor: 'Irmão de Tiago', detalhe: 'Irmão de Jesus', stamp: 'verified' },
    { livro: 'Apocalipse', autor: 'João em Patmos', detalhe: 'Qual João? debate · sete igrejas confirmadas', stamp: 'debate' },
];

export default function Slide35_DemaisNT() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Demais Autores — Visão Rápida"
                    icon="📋"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-3">
                    {autoresNT.map((a, i) => (
                        <motion.div
                            key={a.livro}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg border"
                            style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.amber}20` }}
                        >
                            <div className="flex-1">
                                <h4 className="font-bold text-sm" style={{ color: colors.warmWhite }}>{a.livro}</h4>
                                <p className="text-xs" style={{ color: colors.amber }}>{a.autor}</p>
                                <p className="text-xs" style={{ color: colors.textMedium }}>{a.detalhe}</p>
                            </div>
                            <StampBadge type={a.stamp} size="sm" delay={0.4 + i * 0.1} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
