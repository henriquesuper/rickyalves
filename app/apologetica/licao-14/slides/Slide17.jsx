'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide17() {
    return (
        <ConvergenceWrapper stratum="nucleo" withGlow glowIntensity={0.8}>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Transição
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl leading-relaxed mb-8"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Vimos o núcleo: <span style={{ color: colors.haloGold }}>Jesus se interpreta cristocentricamente</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="rounded-2xl p-6 mb-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}35`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80`,
                    }}
                >
                    <p
                        className="text-base md:text-lg leading-relaxed"
                        style={{ color: colors.textNebula, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Mas a tese fica mais forte se essa releitura também aparece nos primeiros pregadores e cartas — datadas dos anos imediatamente após a crucificação.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-base md:text-lg font-bold"
                    style={{
                        color: colors.haloGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Veremos a seguir: o NT inteiro lê o AT cristocentricamente.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 2.2 }}
                    className="mt-10 text-2xl"
                    style={{ color: colors.haloGold }}
                >
                    ↓ ↓ ↓
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
