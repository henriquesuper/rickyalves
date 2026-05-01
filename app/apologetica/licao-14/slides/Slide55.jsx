'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide55() {
    return (
        <ConvergenceWrapper stratum="pastoral" withGlow glowIntensity={0.6}>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Aviso
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-5xl mb-6"
                >
                    ⚠
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl leading-relaxed mb-6"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Cristocentrismo, mal feito, vira <span style={{ color: colors.warnRose }}>reducionismo</span>:
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="rounded-xl p-5 mb-6"
                    style={{
                        background: `${colors.warnRose}10`,
                        border: `1px solid ${colors.warnRose}30`,
                    }}
                >
                    <p
                        className="text-base md:text-lg italic"
                        style={{ color: colors.warnRose, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        &ldquo;Tudo gira em torno de Jesus, e basta isso.&rdquo;
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-sm md:text-base leading-relaxed mb-8"
                    style={{ color: colors.textNebula }}
                >
                    Para alguém que rejeita a religião institucional, isso pode soar como mais uma fórmula. Não é o que se quer aqui.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 }}
                    className="text-3xl"
                    style={{ color: colors.haloGold }}
                >
                    ↓
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-base font-bold mt-3"
                    style={{
                        color: colors.haloGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O que cristocentrismo bem feito significa
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
