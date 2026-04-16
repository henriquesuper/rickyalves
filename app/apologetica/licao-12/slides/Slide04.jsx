'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide04() {
    return (
        <LabWrapper stratum="naked-eye">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                {/* WhatsApp icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="text-5xl mb-8"
                >
                    💬
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Imagina que alguém pega uma mensagem de WhatsApp sua de três anos atrás...
                </motion.p>

                {/* Simulated message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="inline-block rounded-2xl px-6 py-4 mb-6 text-left max-w-sm"
                    style={{
                        background: '#1E3A2F',
                        borderRadius: '18px 18px 18px 4px',
                    }}
                >
                    <p className="text-base" style={{ color: '#E8F5E9' }}>
                        Eu não aguento mais.
                    </p>
                    <p className="text-xs text-right mt-1" style={{ color: '#81C784' }}>
                        15:42 ✓✓
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-sm mb-4"
                    style={{ color: colors.textMuted }}
                >
                    Tira do contexto da conversa. Ignora o tom. Ignora pra quem você estava escrevendo.
                    Ignora o que aconteceu naquele dia.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-lg font-medium"
                    style={{ color: colors.lensAmber }}
                >
                    E usa como &ldquo;prova&rdquo; de que você pensa X.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.3 }}
                    className="text-sm mt-6 italic"
                    style={{ color: colors.textMuted }}
                >
                    Você ficaria furiosa, certo?
                </motion.p>
            </div>
        </LabWrapper>
    );
}
