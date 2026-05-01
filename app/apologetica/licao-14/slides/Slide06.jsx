'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

export function Slide06() {
    return (
        <ConvergenceWrapper stratum="aproximacao" withGlow glowIntensity={0.7}>
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
                    Pausa. Pergunta para Guga.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg md:text-xl leading-relaxed mb-2"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    A pergunta não é
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-base italic mb-8"
                    style={{ color: colors.textDim }}
                >
                    &ldquo;vamos te ensinar a ler como adventista&rdquo; — nem &ldquo;como cristão.&rdquo;
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-base mb-3"
                    style={{ color: colors.textNebula }}
                >
                    A pergunta é:
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.7 }}
                    className="rounded-2xl p-6 md:p-7"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.haloGold}40`,
                        boxShadow: `0 8px 32px ${colors.bgVoid}80, 0 0 28px ${colors.haloGold}15`,
                    }}
                >
                    <p
                        className="text-xl md:text-2xl font-bold leading-snug mb-3"
                        style={{
                            color: colors.haloGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        A Bíblia tem uma chave de leitura interna que ela mesma propõe?
                    </p>
                    <p
                        className="text-xl md:text-2xl font-bold leading-snug"
                        style={{
                            color: colors.textStarlight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        E essa chave funciona?
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 }}
                    className="mt-6 text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    Exegese aberta. Sem ufanismo. Vamos olhar o que o próprio texto faz.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
