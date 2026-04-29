'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide08() {
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
                    Definição
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="rounded-2xl p-8 md:p-10 mb-8"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.inkGold}30`,
                        boxShadow: `0 8px 32px ${colors.bgDeep}80`,
                    }}
                >
                    <p
                        className="text-lg md:text-xl leading-relaxed"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Gênero literário é o conjunto de{' '}
                        <span style={{ color: colors.inkGold, fontWeight: 600 }}>convenções</span>,{' '}
                        <span style={{ color: colors.inkGold, fontWeight: 600 }}>expectativas</span> e{' '}
                        <span style={{ color: colors.inkGold, fontWeight: 600 }}>regras</span>{' '}
                        que governam como um texto deve ser lido.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="p-5 rounded-xl"
                    style={{
                        background: `${colors.inkGold}10`,
                        border: `1px solid ${colors.inkGold}30`,
                    }}
                >
                    <p
                        className="text-base md:text-lg italic"
                        style={{ color: colors.inkGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        É um pacto entre autor e leitor.
                    </p>
                    <p className="text-sm mt-3" style={{ color: colors.textMedium }}>
                        O autor diz implicitamente: <em>leia isso desta forma</em>.<br />
                        O leitor respeita o gênero — e a comunicação acontece.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="mt-6 text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    Forçar um texto fora do gênero produz distorção. Às vezes, grotesca.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
