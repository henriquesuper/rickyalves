'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide16() {
    return (
        <ConvergenceWrapper stratum="nucleo" withGlow glowIntensity={0.6}>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="text-5xl mb-6"
                >
                    🪞
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs uppercase tracking-[0.4em] mb-8 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Pausa. Pergunta.
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
                    Se Jesus se lê assim...
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-2xl md:text-3xl font-bold mb-8"
                    style={{
                        color: colors.haloGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    o que isso muda na sua leitura?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                    className="p-5 rounded-xl max-w-md mx-auto"
                    style={{
                        background: `${colors.vectorPurple}10`,
                        border: `1px solid ${colors.vectorPurple}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.textMedium }}>
                        Antes era projeção. Agora é discipulado. O que mais isso reorganiza?
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                    className="mt-6 text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    A resposta dela é preciosa para o resto da aula.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
