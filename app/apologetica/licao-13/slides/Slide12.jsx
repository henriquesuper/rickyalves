'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

export function Slide12() {
    return (
        <LibraryWrapper stratum="vestibulo" withCandle>
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
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs uppercase tracking-[0.4em] mb-8 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Pausa. Pergunta.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl md:text-2xl leading-relaxed mb-6"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Quando você abre a Bíblia...
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="text-2xl md:text-3xl font-bold mb-8"
                    style={{
                        color: colors.inkGold,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    qual é o modo padrão que liga automaticamente?
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="p-5 rounded-xl max-w-md mx-auto"
                    style={{
                        background: `${colors.genrePurple}10`,
                        border: `1px solid ${colors.genrePurple}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.textMedium }}>
                        Narrativa histórica? Manual de vida? Código moral? Poesia devocional?
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                    className="mt-6 text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    Sua resposta é preciosa para o resto da aula.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
