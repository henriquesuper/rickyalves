// Slide 29 - Isaías 7:14 — Almah vs Parthenos
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, TranslationReveal, OriginalText, colors } from './shared';

export default function Slide29_Isaias714() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold mb-6 text-center"
                    style={{ color: colors.hebrewPrimary }}
                >
                    ISAÍAS 7:14 — O CASO MAIS FAMOSO
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-4xl mb-6">
                    <PrismCard delay={0.3} variant="hebrew" highlight>
                        <div className="text-center">
                            <OriginalText text="עַלְמָה" language="hebrew" size="md" delay={0.3} className="justify-center flex mb-2" />
                            <p className="text-xl font-bold" style={{ color: colors.hebrewPrimary }}>almah</p>
                            <p className="text-sm italic" style={{ color: colors.textMedium }}>Hebraico original (AT)</p>
                            <div className="border-t my-3" style={{ borderColor: `${colors.hebrewPrimary}30` }} />
                            <p className="text-sm" style={{ color: colors.textLight }}>= «jovem mulher em idade de casar»</p>
                            <p className="text-xs mt-1" style={{ color: colors.textMedium }}>
                                NÃO tem implicação automática de virgindade.<br />
                                (betulah seria o termo específico)
                            </p>
                        </div>
                    </PrismCard>

                    <PrismCard delay={0.5} variant="greek" highlight>
                        <div className="text-center">
                            <OriginalText text="παρθένος" language="greek" size="md" delay={0.5} className="justify-center flex mb-2" />
                            <p className="text-xl font-bold" style={{ color: colors.greekPrimary }}>parthenos</p>
                            <p className="text-sm italic" style={{ color: colors.textMedium }}>Septuaginta (LXX) — grego</p>
                            <div className="border-t my-3" style={{ borderColor: `${colors.greekPrimary}30` }} />
                            <p className="text-sm" style={{ color: colors.textLight }}>= «virgem»</p>
                            <p className="text-xs mt-1" style={{ color: colors.textMedium }}>
                                Os tradutores judeus (séc. III a.C.)<br />
                                ESCOLHERAM este termo.
                            </p>
                        </div>
                    </PrismCard>
                </div>

                <PrismCard delay={0.8} variant="neutral" className="max-w-3xl mb-4">
                    <div className="text-center">
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Mateus 1:23 cita a <span className="font-bold" style={{ color: colors.greekPrimary }}>LXX</span> (parthenos/virgem) —
                            não traduz direto do hebraico.
                        </p>
                        <p className="text-sm mt-2" style={{ color: colors.textLight }}>
                            O NT valida a interpretação <span className="font-bold" style={{ color: colors.greekPrimary }}>grega</span> do AT,
                            não a <span className="font-bold" style={{ color: colors.hebrewPrimary }}>hebraica</span> literal.
                        </p>
                    </div>
                </PrismCard>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-sm text-center font-bold"
                    style={{ color: colors.goldAged }}
                >
                    A tradução é mais do que troca de palavras.<br />
                    É TEOLOGIA em ação.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
