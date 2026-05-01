'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide56() {
    return (
        <ConvergenceWrapper stratum="pastoral" withGlow glowIntensity={1.6}>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-8 font-mono"
                    style={{ color: colors.coreGlow }}
                >
                    O versículo central
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1.0, type: 'spring' }}
                    className="text-7xl mb-8"
                    style={{
                        color: colors.coreGlow,
                        textShadow: `0 0 40px ${colors.haloGold}A0, 0 0 80px ${colors.haloGold}50`,
                    }}
                >
                    ✦
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 1.0 }}
                    className="rounded-2xl p-8 md:p-10"
                    style={{
                        background: `radial-gradient(ellipse at 50% 50%, ${colors.bgSurface} 0%, ${colors.bgVoid} 100%)`,
                        border: `2px solid ${colors.haloGold}50`,
                        boxShadow: `0 0 60px ${colors.haloGold}30, 0 8px 40px ${colors.bgVoid}`,
                    }}
                >
                    <p
                        className="text-3xl md:text-5xl font-bold leading-tight mb-6"
                        style={{
                            color: colors.coreGlow,
                            fontFamily: "'Playfair Display', Georgia, serif",
                            textShadow: `0 2px 30px ${colors.haloGold}50`,
                        }}
                    >
                        &ldquo;Quem me viu a mim,
                    </p>
                    <p
                        className="text-3xl md:text-5xl font-bold leading-tight"
                        style={{
                            color: colors.haloWhite,
                            fontFamily: "'Playfair Display', Georgia, serif",
                            textShadow: `0 2px 30px ${colors.haloGold}50`,
                        }}
                    >
                        viu o Pai.&rdquo;
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="text-sm font-mono mt-6"
                        style={{ color: colors.haloGold }}
                    >
                        — João 14:9
                    </motion.p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 }}
                    className="mt-8 text-base md:text-lg italic leading-relaxed"
                    style={{ color: colors.textStarlight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Não há dois Deuses. Não há um Pai severo escondido atrás de um Filho misericordioso.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.9 }}
                    className="mt-3 text-base md:text-lg font-bold"
                    style={{ color: colors.coreGlow, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O caráter do Pai é o caráter de Jesus.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
