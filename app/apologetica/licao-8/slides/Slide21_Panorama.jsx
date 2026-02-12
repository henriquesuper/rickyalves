// Slide 21 - Panorama: Bíblias em Português
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, TranslationSpectrum, colors } from './shared';

const timeline = [
    { year: '1753', name: 'Almeida (AT publicado pós-morte)', color: colors.hebrewPrimary },
    { year: '1959', name: 'ARA — Almeida Revista e Atualizada', color: colors.greekPrimary },
    { year: '1993', name: 'NVI — Nova Versão Internacional', color: colors.portPrimary },
    { year: '2000', name: 'NTLH — Nova Tradução na Linguagem de Hoje', color: colors.portPrimary },
    { year: '2017', name: 'NAA — Nova Almeida Atualizada', color: colors.greekPrimary },
    { year: '2020', name: 'NVT — Nova Versão Transformadora', color: colors.goldAged },
];

export default function Slide21_Panorama() {
    return (
        <SlideWrapper variant="portuguese">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{ color: colors.portPrimary }}
                >
                    BÍBLIAS EM PORTUGUÊS
                </motion.h2>

                <div className="w-full max-w-4xl mb-8">
                    {timeline.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                            className="flex items-center gap-4 mb-2"
                        >
                            <div className="w-16 text-right">
                                <span className="text-sm font-bold" style={{ color: t.color }}>{t.year}</span>
                            </div>
                            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: t.color }} />
                            <div
                                className="flex-1 h-[1px]"
                                style={{ background: `${t.color}40` }}
                            />
                            <span className="text-sm" style={{ color: colors.textLight }}>{t.name}</span>
                        </motion.div>
                    ))}
                </div>

                <PrismCard delay={1.3} variant="portuguese" className="max-w-2xl">
                    <p className="text-center text-sm" style={{ color: colors.textLight }}>
                        <span className="font-bold" style={{ color: colors.portPrimary }}>João Ferreira de Almeida</span> foi um
                        português que se converteu ao protestantismo aos 14 anos e dedicou décadas à tradução.
                        Morreu sem terminar o AT.
                    </p>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
