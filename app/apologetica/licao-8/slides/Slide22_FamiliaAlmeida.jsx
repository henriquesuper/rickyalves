// Slide 22 - A Família Almeida
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

const almeidaVersions = [
    {
        abbr: 'ARC',
        name: 'Almeida Revista e Corrigida',
        year: '1898',
        style: 'Mais literal, linguagem arcaica',
        use: 'Memorização, liturgia tradicional',
        color: colors.hebrewPrimary,
    },
    {
        abbr: 'ARA',
        name: 'Almeida Revista e Atualizada',
        year: '1959',
        style: 'Formal, português mais moderno',
        use: 'Estudo, universidades, IASD',
        color: colors.greekPrimary,
    },
    {
        abbr: 'NAA',
        name: 'Nova Almeida Atualizada',
        year: '2017',
        style: 'Equilíbrio formal/legibilidade',
        use: 'Estudo + leitura devocional',
        color: colors.portPrimary,
    },
];

export default function Slide22_FamiliaAlmeida() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    A FAMÍLIA{' '}
                    <span style={{ color: colors.goldBright }}>ALMEIDA</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-4 w-full max-w-5xl mb-6">
                    {almeidaVersions.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.2 }}
                        >
                            <PrismCard variant="neutral" className="h-full">
                                <div className="text-center">
                                    <p className="text-3xl font-bold mb-1" style={{ color: v.color }}>{v.abbr}</p>
                                    <p className="text-xs mb-1" style={{ color: colors.textMedium }}>{v.name} ({v.year})</p>
                                    <div className="border-t my-3" style={{ borderColor: `${colors.goldAged}20` }} />
                                    <p className="text-sm" style={{ color: colors.textLight }}>{v.style}</p>
                                    <p className="text-xs mt-2" style={{ color: colors.goldAged }}>
                                        Melhor para: {v.use}
                                    </p>
                                </div>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-sm text-center"
                    style={{ color: colors.textMedium }}
                >
                    Todas as versões Almeida tendem para o lado <span className="font-bold" style={{ color: colors.greekPrimary }}>FORMAL</span> do espectro.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
