'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StampBadge, colors } from './shared';

export function Slide01() {
    return (
        <ExcavationWrapper stratum="surface">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Protocolo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Estudo Bíblico Apologético · Módulo 4
                </motion.p>

                {/* Selo da escavação */}
                <motion.div className="flex justify-center mb-6">
                    <ExcavationSeal number={11} size="lg" delay={0.3} />
                </motion.div>

                {/* Ícone */}
                <motion.div
                    initial={{ opacity: 0, y: -20, rotateY: 90 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                    className="text-6xl mb-4"
                >
                    ⛏️
                </motion.div>

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `0 2px 30px ${colors.excavationAmber}20`,
                    }}
                >
                    ARQUEOLOGIA E EVIDÊNCIAS EXTERNAS
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl italic mb-8"
                    style={{
                        color: colors.excavationAmber,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Quando as pedras falam, o que elas dizem?
                </motion.p>

                {/* Linha decorativa */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 max-w-md mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.excavationAmber}, transparent)`,
                    }}
                />

                {/* Stamp */}
                <StampBadge text="ESCAVAÇÃO INICIADA" delay={1.2} />
            </div>
        </ExcavationWrapper>
    );
}
