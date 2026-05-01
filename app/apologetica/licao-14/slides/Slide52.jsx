'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, VerseCard, colors } from './shared';

export function Slide52() {
    return (
        <ConvergenceWrapper stratum="porta-joao" withGlow glowIntensity={0.8}>
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    O propósito declarado
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O único evangelho que diz por que foi escrito
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Para uma cética, transparência sobre intenção é respeitável.
                </motion.p>

                <VerseCard
                    reference="João 20:31"
                    text="Estes [sinais] foram registrados para que vocês creiam que Jesus é o Cristo, o Filho de Deus."
                    tone="focused"
                    delay={0.7}
                />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="mt-6 rounded-xl p-5"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}30`,
                    }}
                >
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.textStarlight }}>
                        Mateus, Marcos e Lucas têm propósitos identificáveis pela crítica, mas só João{' '}
                        <span style={{ color: colors.haloGold, fontWeight: 600 }}>declara o seu</span> dentro do próprio texto.
                    </p>
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
