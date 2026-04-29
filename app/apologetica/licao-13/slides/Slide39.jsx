'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide39() {
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
                    A distinção crucial
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
                    Princípio vs. aplicação cultural
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="rounded-xl p-5"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.genreBlue}30`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreBlue }}>
                            Princípio
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Transcende o contexto original. Aplicável em todas as culturas.
                        </p>
                        <p className="text-xs italic mt-3" style={{ color: colors.inkGold }}>
                            Ex.: honrar o corpo. Cultivar mansidão. Viver o amor.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="rounded-xl p-5"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.genreAmber}30`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreAmber }}>
                            Aplicação cultural
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            A forma específica que o princípio assumia em Corinto, Éfeso, Roma — cultura, tempo, lugar.
                        </p>
                        <p className="text-xs italic mt-3" style={{ color: colors.inkGold }}>
                            Ex.: véus, saudação com ósculo, comer ou não carne sacrificada.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="p-4 rounded-lg"
                    style={{
                        background: `${colors.inkGold}12`,
                        border: `1px solid ${colors.inkGold}28`,
                    }}
                >
                    <p className="text-sm text-center" style={{ color: colors.textLight }}>
                        A Bíblia{' '}
                        <span style={{ color: colors.inkGold, fontWeight: 600 }}>quer que o princípio atravesse</span>.
                        Não pede que a aplicação se fossilize.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
