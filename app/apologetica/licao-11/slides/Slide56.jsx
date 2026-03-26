'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StampBadge, colors } from './shared';

export function Slide56() {
    return (
        <ExcavationWrapper stratum="bedrock">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Seal */}
                <motion.div className="flex justify-center mb-6">
                    <ExcavationSeal number={11} size="lg" delay={0.3} />
                </motion.div>

                {/* Stamp */}
                <motion.div className="mb-8">
                    <StampBadge text="ESCAVAÇÃO CONCLUÍDA" delay={0.8} color={colors.fieldGreen} />
                </motion.div>

                {/* Decorative amber gradient line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="h-0.5 max-w-md mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.excavationAmber}, transparent)`,
                    }}
                />

                {/* Text lines */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg mb-2"
                    style={{ color: colors.textLight }}
                >
                    A Bíblia não é um livro que flutua acima da história.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-lg font-bold mb-8"
                    style={{ color: colors.excavationAmber }}
                >
                    Ela tem raízes no chão — e as raízes são verificáveis.
                </motion.p>

                {/* Protocol */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 2.2 }}
                    className="text-xs uppercase tracking-[0.3em] font-mono mb-6"
                    style={{ color: colors.textMuted }}
                >
                    Estudo Bíblico Apologético · Lição 11
                </motion.p>

                {/* Prayer emoji */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 2.5 }}
                    className="text-3xl"
                >
                    🙏
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
