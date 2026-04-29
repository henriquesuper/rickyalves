'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, TherapyParallel, colors } from './shared';

export function Slide20() {
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
                    Especialmente para você
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
                    O que os Salmos fazem
                </motion.h2>

                <TherapyParallel
                    therapeutic="Um paciente finalmente consegue falar o inominável na sessão. Dá forma emocional ao que não tem forma racional. A chamada abriga o grito."
                    hermeneutic="Os Salmos são a Bíblia dando permissão para fazer exatamente isso. O cânon abriga o lamento — inclusive o lamento que escandaliza."
                    delay={0.5}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="mt-6 p-5 rounded-xl text-center"
                    style={{
                        background: `${colors.inkGold}10`,
                        border: `1px solid ${colors.inkGold}30`,
                    }}
                >
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkGold,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Você já conhece esse trabalho.
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        O texto só ficou explícito sobre o que você já fazia com os seus pacientes.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
