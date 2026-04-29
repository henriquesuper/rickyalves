'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, VerseCard, colors } from './shared';

export function Slide28() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Regra de ouro da apocalíptica
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O texto se interpreta.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.textMedium }}
                >
                    O símbolo quase sempre é decifrado dentro do próprio texto ou em material bíblico anterior.
                </motion.p>

                <VerseCard
                    reference="Dn 7.17"
                    text='"Estas grandes bestas... são quatro reis que se levantarão da terra." — o próprio anjo explica.'
                    tone="deep"
                    delay={0.7}
                />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                    <div
                        className="p-4 rounded-lg"
                        style={{
                            background: `${colors.warnRed}10`,
                            border: `1px solid ${colors.warnRed}25`,
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.warnRed }}>
                            ⊘ Correlacionar com jornal
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Buscar a identidade do símbolo nas manchetes de hoje, sem ancoragem no texto.
                        </p>
                    </div>
                    <div
                        className="p-4 rounded-lg"
                        style={{
                            background: `${colors.goodGreen}10`,
                            border: `1px solid ${colors.goodGreen}25`,
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.goodGreen }}>
                            ◎ Deixar o texto falar
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Procurar onde o símbolo já aparece, onde é explicado, onde ecoa outros livros.
                        </p>
                    </div>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
