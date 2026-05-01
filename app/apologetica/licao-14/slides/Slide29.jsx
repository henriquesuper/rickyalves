'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, ComparisonPanel, colors } from './shared';

export function Slide29() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.vectorSea }}
                >
                    Categoria B · Tipologia
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O que é — e o que NÃO é
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm md:text-base italic mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Personagens, instituições e eventos do AT que prefiguram Cristo. Não é alegorese livre.
                </motion.p>

                <ComparisonPanel
                    leftTitle="⊘ ALEGORESE LIVRE"
                    leftColor={colors.warnRose}
                    leftContent={
                        <div className="space-y-2">
                            <p>Cada palavra esconde sentido oculto, sem critério textual.</p>
                            <p className="text-xs italic" style={{ color: colors.textMuted }}>
                                Filo de Alexandria dissolvendo o AT em filosofia platônica.
                            </p>
                            <p className="text-xs italic" style={{ color: colors.textMuted }}>
                                Risco: leitura inventada, não ancorada.
                            </p>
                        </div>
                    }
                    rightTitle="◎ TIPOLOGIA LEGÍTIMA"
                    rightColor={colors.vectorSea}
                    rightContent={
                        <div className="space-y-2">
                            <p>Personagem ou evento que prefigura Cristo, com critérios.</p>
                            <p className="text-xs italic" style={{ color: colors.textMuted }}>
                                Adão como tipo do "último Adão" (1 Co 15:45).
                            </p>
                            <p className="text-xs italic" style={{ color: colors.textMuted }}>
                                Cordeiro pascal como tipo do "Cordeiro de Deus" (1 Co 5:7).
                            </p>
                        </div>
                    }
                    delay={0.7}
                />
            </div>
        </ConvergenceWrapper>
    );
}
