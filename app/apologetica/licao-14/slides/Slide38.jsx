'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide38() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="text-5xl mb-6"
                >
                    ⚖
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Aviso de rigor
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg md:text-xl leading-relaxed mb-6"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    A leitura cristocêntrica do AT <span style={{ color: colors.haloGold }}>não é homogênea</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.7 }}
                    className="rounded-2xl p-6 md:p-7"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        borderLeft: `4px solid ${colors.haloGold}`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80`,
                    }}
                >
                    <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Identificar as <span style={{ color: colors.haloGold, fontWeight: 600 }}>cinco categorias</span> dá rigor à leitura. Cada uma opera com critérios próprios.
                    </p>
                    <p
                        className="text-base md:text-lg leading-relaxed mt-3"
                        style={{ color: colors.textNebula }}
                    >
                        Profecia direta ≠ tipologia ≠ tema ≠ estrutura ≠ citação.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-sm italic mt-6"
                    style={{ color: colors.textMuted }}
                >
                    Misturar as categorias é o que produz alegorese livre.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
