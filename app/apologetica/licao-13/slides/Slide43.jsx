'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide43() {
    return (
        <LibraryWrapper stratum="aberracoes">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Erro 2 · Apocalíptica como jornalismo
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-8"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Ler o símbolo como manchete
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="rounded-xl p-5 mb-4"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.warnRed}25`,
                        borderLeft: `3px solid ${colors.warnRed}`,
                    }}
                >
                    <p className="text-sm mb-3" style={{ color: colors.textMedium }}>
                        Cavalos de Apocalipse viram helicópteros. Gafanhotos viram drones.
                        A besta ganha CPF e passaporte. Antecipações de notícia do dia.
                    </p>
                    <p className="text-xs italic" style={{ color: colors.textMuted }}>
                        Toda geração tem feito isso — e todas foram desmentidas pelo calendário.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="rounded-xl p-5"
                    style={{
                        background: `${colors.goodGreen}10`,
                        border: `1px solid ${colors.goodGreen}25`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        O texto{' '}
                        <span style={{ color: colors.goodGreen, fontWeight: 600 }}>sustenta o perseguido</span>{' '}
                        com a certeza de que Deus vence. Ele{' '}
                        <span style={{ color: colors.goodGreen, fontWeight: 600 }}>não entrega cronograma</span>.
                    </p>
                    <p className="text-xs italic mt-2" style={{ color: colors.textMuted }}>
                        Cobrar cronograma é pedir ao gênero o que ele não prometeu entregar.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
