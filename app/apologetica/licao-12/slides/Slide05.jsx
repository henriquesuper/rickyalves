'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide05() {
    return (
        <LabWrapper stratum="naked-eye">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Agora imagina que fazem isso com um texto de 3.000 anos,
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg mb-8"
                    style={{ color: colors.textMuted }}
                >
                    escrito em outra língua, em outra cultura, pra outra audiência.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="h-0.5 max-w-xs mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.lensBlue}, transparent)`,
                    }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-2xl font-bold mb-6"
                    style={{ color: colors.lensBlue }}
                >
                    É exatamente isso que acontece com a Bíblia todos os dias.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-lg italic"
                    style={{ color: colors.textLight }}
                >
                    Hermenêutica é simplesmente a ciência de <span style={{ color: colors.lensTeal, fontWeight: 700 }}>NÃO</span> fazer isso.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
