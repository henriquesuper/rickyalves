'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensSeal, StampBadge, colors } from './shared';

export function Slide01() {
    return (
        <LabWrapper stratum="naked-eye">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Estudo Bíblico Apologético · Lição 12
                </motion.p>

                <motion.div className="flex justify-center mb-6">
                    <LensSeal number={12} size="lg" delay={0.3} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20, rotateY: 90 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                    className="text-6xl mb-4"
                >
                    🔬
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `0 2px 30px ${colors.lensBlue}20`,
                    }}
                >
                    HERMENÊUTICA BÍBLICA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl italic mb-8"
                    style={{
                        color: colors.lensBlue,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Como Ler um Livro que Todo Mundo Acha que Sabe Ler
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 max-w-md mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.lensBlue}, transparent)`,
                    }}
                />

                <StampBadge text="LABORATÓRIO ABERTO" delay={1.2} />
            </div>
        </LabWrapper>
    );
}
