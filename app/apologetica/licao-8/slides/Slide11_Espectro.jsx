// Slide 11 - O Espectro da Tradução
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, TranslationSpectrum, PrismCard, colors } from './shared';

const translations = [
    { name: 'ARC', position: 0.05 },
    { name: 'ARA', position: 0.18 },
    { name: 'NAA', position: 0.32 },
    { name: 'NVI', position: 0.58 },
    { name: 'NVT', position: 0.75 },
    { name: 'NTLH', position: 0.92 },
];

export default function Slide11_Espectro() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-center"
                    style={{ color: colors.textLight }}
                >
                    O ESPECTRO DA TRADUÇÃO
                </motion.h2>

                <div className="w-full max-w-4xl mb-10 pt-8">
                    <TranslationSpectrum translations={translations} delay={0.4} />
                </div>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl">
                    <PrismCard delay={1.2} variant="greek">
                        <div className="text-center">
                            <p className="text-sm font-bold mb-2" style={{ color: colors.greekPrimary }}>
                                ← FORMAL
                            </p>
                            <p className="text-xs" style={{ color: colors.textLight }}>
                                Mais fiel à <span className="font-bold">FORMA</span> do original
                            </p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                Pode soar estranho em português
                            </p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                Preserva ambiguidades
                            </p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                Menos interpretação do tradutor
                            </p>
                        </div>
                    </PrismCard>

                    <PrismCard delay={1.4} variant="portuguese">
                        <div className="text-center">
                            <p className="text-sm font-bold mb-2" style={{ color: colors.portPrimary }}>
                                DINÂMICA →
                            </p>
                            <p className="text-xs" style={{ color: colors.textLight }}>
                                Mais fiel ao <span className="font-bold">IMPACTO</span> original
                            </p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                Leitura fluida e acessível
                            </p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                Resolve ambiguidades
                            </p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>
                                Mais interpretação do tradutor
                            </p>
                        </div>
                    </PrismCard>
                </div>
            </div>
        </SlideWrapper>
    );
}
