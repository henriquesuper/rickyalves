'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ScribeWriting, colors } from './shared';

export function Slide17() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.1 }} className="text-xs uppercase tracking-[0.3em] mb-4 font-mono" style={{ color: colors.textMuted }}>Tipos de Aliança · 2 de 2</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    CONCESSÃO REAL
                </motion.h2>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg mb-8" style={{ color: colors.textLight }}>
                    O rei concede algo unilateralmente. <span style={{ color: colors.amber, fontWeight: 'bold' }}>Sem condições.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="p-8 rounded-xl mb-8"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-base mb-4" style={{ color: colors.textLight }}>
                        <span style={{ color: colors.amber, fontWeight: 'bold' }}>Gênesis 15</span> — Deus faz promessas a Abraão.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-5xl mb-4"
                    >
                        😴
                    </motion.div>
                    <ScribeWriting text="Abraão... dorme. Literalmente." className="text-xl mb-4" delay={1.2} />
                    <p className="text-base" style={{ color: colors.textMedium }}>
                        Deus passa entre os pedaços dos animais <span style={{ fontWeight: 'bold', color: colors.textLight }}>sozinho</span>.
                    </p>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-xl font-semibold" style={{ color: colors.amber }}>
                    Mensagem: essa aliança depende de Deus, não de Abraão.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
