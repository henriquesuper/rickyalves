'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide23() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Dois polos da sabedoria bíblica
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-xl md:text-2xl font-bold text-center mb-8"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O canon abriga a regra <em>e</em> a exceção.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="rounded-xl p-5"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.genreSea}30`,
                        }}
                    >
                        <p
                            className="text-xs font-bold uppercase tracking-wider mb-2"
                            style={{ color: colors.genreSea }}
                        >
                            📖 Eclesiastes
                        </p>
                        <p
                            className="text-lg font-bold mb-2"
                            style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Sabedoria em modo cético
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            A Bíblia explorando, de dentro, o que acontece quando você olha para a vida
                            sem véus religiosos. <span style={{ color: colors.inkGold }}>E é canônico.</span>{' '}
                            Isso importa.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="rounded-xl p-5"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.genrePurple}30`,
                        }}
                    >
                        <p
                            className="text-xs font-bold uppercase tracking-wider mb-2"
                            style={{ color: colors.genrePurple }}
                        >
                            📖 Jó
                        </p>
                        <p
                            className="text-lg font-bold mb-2"
                            style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Sabedoria em modo dialógico
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Debate poético prolongado, irresolvido, incômodo. A pergunta
                            <em> por que o justo sofre? </em>
                            fica aberta por 40 capítulos. <span style={{ color: colors.inkGold }}>Voltamos a ele.</span>
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="text-center mt-8 text-base italic"
                    style={{ color: colors.inkGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Provérbios garante? Eclesiastes blasfema? Nenhum dos dois.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-center text-xs italic mt-1"
                    style={{ color: colors.textMuted }}
                >
                    Cada um opera nas convenções do seu gênero. A tensão é intencional.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
