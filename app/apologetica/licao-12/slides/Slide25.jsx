'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, colors } from './shared';

export function Slide25() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensTeal }}
                >
                    Lente 5 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O Caso do Batismo pelos Mortos
                </motion.h2>

                <VerseCard
                    reference="1 Coríntios 15:29"
                    text="De outro modo, que farão os que se batizam por causa dos mortos? Se, absolutamente, os mortos não ressuscitam, por que se batizam por causa deles?"
                    readingType="blurry"
                    delay={0.5}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-5 p-4 rounded-xl"
                    style={{ background: colors.bgSurface, border: `1px solid ${colors.lensAmber}15` }}
                >
                    <p className="text-sm mb-3" style={{ color: colors.textMedium }}>
                        Este versículo é genuinamente misterioso — estudiosos debatem há séculos o que Paulo quis dizer.
                    </p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        Construir uma prática doutrinária inteira a partir desse versículo (como fazem os mórmons) viola a
                        analogia da fé, porque <span style={{ color: colors.lensTeal, fontWeight: 600 }}>todo o resto do Novo Testamento</span> apresenta
                        o batismo como decisão pessoal do vivo.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-4 text-xs text-center italic"
                    style={{ color: colors.textMuted }}
                >
                    Um versículo obscuro não pode governar cem versículos claros.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
