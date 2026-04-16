'use client';
import { motion } from 'framer-motion';
import { LabWrapper, ComparisonPanel, colors } from './shared';

export function Slide27() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensBlue }}
                >
                    Lente 6 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    A Vida Após a Morte
                </motion.h2>

                <ComparisonPanel
                    leftTitle="📜 ANTIGO TESTAMENTO"
                    leftContent="Sheol — conceito vago e nebuloso. 'Os mortos não louvam ao Senhor' (Salmo 115:17). A vida após a morte é uma sombra, não uma doutrina desenvolvida."
                    rightTitle="📖 NOVO TESTAMENTO"
                    rightContent="A ressurreição é central, explícita, detalhada. 'Eu sou a ressurreição e a vida' (João 11:25). Paulo dedica 1 Coríntios 15 inteiro ao tema."
                    delay={0.5}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-5 p-4 rounded-xl"
                    style={{ background: `${colors.lensPurple}08`, border: `1px solid ${colors.lensPurple}15` }}
                >
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        <span style={{ color: colors.lensPurple, fontWeight: 600 }}>Conexão com Jó:</span> Você leu Jó inteiro e gostou.
                        Jó não tem resposta clara sobre vida após a morte — enquanto Paulo fala de ressurreição com confiança.
                        Não é contradição — é <span style={{ color: colors.lensTeal }}>progressão</span>. Jó tinha a revelação disponível no seu tempo;
                        Paulo tinha mais. Isso é honesto, não problemático.
                    </p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
