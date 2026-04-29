'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide03() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Um paciente conecta na sessão
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-5xl mb-8"
                >
                    💬
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="inline-block rounded-2xl px-8 py-6 mb-8 text-left max-w-md"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.inkGold}30`,
                        borderRadius: '24px 24px 24px 4px',
                        boxShadow: `0 8px 32px ${colors.bgDeep}80`,
                    }}
                >
                    <p
                        className="text-2xl md:text-3xl"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontStyle: 'italic',
                        }}
                    >
                        &ldquo;Eu tô morrendo, doutora.&rdquo;
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-lg"
                    style={{ color: colors.textMedium }}
                >
                    O que você faz com essa frase?
                </motion.p>

                <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: 2 }}
                    className="mt-8 text-sm italic"
                    style={{ color: colors.inkGold }}
                >
                    ...pausa.
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
