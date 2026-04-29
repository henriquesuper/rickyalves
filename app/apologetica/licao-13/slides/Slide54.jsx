'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide54() {
    return (
        <LibraryWrapper stratum="saida" withCandle>
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono mb-6"
                    style={{ color: colors.textMuted }}
                >
                    O efeito terapêutico do gênero
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl leading-relaxed mb-5"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Quando a gente entende gênero, a Bíblia volta a ser o que ela sempre foi:
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                    style={{
                        color: colors.inkGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    uma biblioteca viva.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="rounded-xl p-5"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.inkGold}25`,
                    }}
                >
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        Textos que <span style={{ color: colors.genreSea }}>choram</span>.
                        Textos que <span style={{ color: colors.genreWine }}>gritam</span>.
                        Textos que <span style={{ color: colors.genrePurple }}>argumentam</span>.
                        Textos que <span style={{ color: colors.genreAmber }}>duvidam</span>.
                        Textos que <span style={{ color: colors.genreBlue }}>promulgam</span>.
                        Textos que <span style={{ color: colors.inkGold }}>celebram</span>.
                    </p>
                    <p className="text-sm italic mt-4" style={{ color: colors.textMedium }}>
                        Cada um com seu contrato. Cada um com sua voz.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
