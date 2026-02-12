// Slide 23 - NVI, NVT e Outras
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const otherVersions = [
    {
        abbr: 'NVI',
        name: 'Nova Versão Internacional',
        year: '1993/2001',
        approach: 'Equilíbrio formal/dinâmica',
        notes: 'Tradução por equipe internacional. Bem popular.',
        color: colors.portPrimary,
    },
    {
        abbr: 'NVT',
        name: 'Nova Versão Transformadora',
        year: '2020',
        approach: 'Clareza + fidelidade ao texto',
        notes: 'Notas de estudo excelentes. Linguagem contemporânea.',
        color: colors.goldAged,
    },
    {
        abbr: 'NTLH',
        name: 'Nova Tradução na Linguagem de Hoje',
        year: '2000',
        approach: 'Equivalência dinâmica plena',
        notes: 'Ideal p/ novos leitores e crianças. Muito acessível.',
        color: colors.portSecondary,
    },
    {
        abbr: 'BJ',
        name: 'Bíblia de Jerusalém',
        year: '2002',
        approach: 'Acadêmica, notas extensas',
        notes: 'Tradição católica. Referência para estudo.',
        color: colors.hebrewPrimary,
    },
];

export default function Slide23_NVI_NVT_Outras() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    OUTRAS VERSÕES EM PORTUGUÊS
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
                    {otherVersions.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                        >
                            <PrismCard variant="neutral" className="h-full">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: `${v.color}15`,
                                            border: `1px solid ${v.color}40`
                                        }}
                                    >
                                        <span className="text-lg font-bold" style={{ color: v.color }}>{v.abbr}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold" style={{ color: colors.textLight }}>{v.name}</p>
                                        <p className="text-xs" style={{ color: colors.textMedium }}>{v.year}</p>
                                        <p className="text-xs mt-1" style={{ color: v.color }}>{v.approach}</p>
                                        <p className="text-xs mt-1" style={{ color: colors.textMedium }}>{v.notes}</p>
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
