// Slide 19 - Caso 3: YHWH — O Nome Impronunciável ★
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, OriginalText, colors } from './shared';

const renderings = [
    { name: 'SENHOR', desc: 'Maiúsculas – tradição de reverência', versions: 'NAA, NVI, ARA', color: colors.hebrewPrimary },
    { name: 'Deus', desc: 'Substituição total', versions: 'NTLH', color: colors.portPrimary },
    { name: 'Jeová', desc: 'Hibridismo YHWH + Adonai', versions: 'ARC antiga, Tradução do Novo Mundo', color: colors.alertTerracota },
    { name: 'JAVÉ', desc: 'Pronúncia provável reconstruída', versions: 'Bíblia de Jerusalém', color: colors.goldAged },
];

export default function Slide19_YHWH() {
    return (
        <SlideWrapper variant="golden">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm uppercase tracking-widest mb-2"
                    style={{ color: colors.goldAged }}
                >Caso #3</motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="mb-2"
                >
                    <OriginalText text="יהוה" language="hebrew" size="xl" delay={0.3} className="justify-center flex" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-4xl font-bold mb-2"
                    style={{ color: colors.goldBright }}
                >
                    O NOME IMPRONUNCIÁVEL
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-sm mb-8"
                    style={{ color: colors.textMedium }}
                >
                    6.828 ocorrências no AT — como traduzir?
                </motion.p>

                <div className="grid md:grid-cols-2 gap-3 w-full max-w-3xl mb-6">
                    {renderings.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.2 }}
                        >
                            <PrismCard variant="neutral" className="h-full">
                                <p className="text-xl font-bold" style={{ color: r.color }}>{r.name}</p>
                                <p className="text-sm" style={{ color: colors.textLight }}>{r.desc}</p>
                                <p className="text-xs mt-1" style={{ color: colors.textMedium }}>{r.versions}</p>
                            </PrismCard>
                        </motion.div>
                    ))}
                </div>

                <PrismCard delay={1.8} variant="neutral" highlight className="max-w-2xl">
                    <div className="text-center">
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="font-bold" style={{ color: colors.alertTerracota }}>«Jeová»</span> nunca existiu como nome real —
                            é uma fusão medieval das consoantes YHWH com as vogais de Adonai.
                        </p>
                        <p className="text-sm mt-2 font-bold" style={{ color: colors.goldAged }}>
                            SENHOR (maiúsculas) é a convenção mais respeitada hoje.
                        </p>
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
