'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierSeal, colors } from './shared';

export default function Slide45_Encerramento() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                {/* Protocolo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Caso #09 · Encerramento
                </motion.p>

                {/* Selo */}
                <motion.div className="flex justify-center mb-6">
                    <DossierSeal number={9} size="lg" delay={0.3} />
                </motion.div>

                {/* Folder closing animation */}
                <motion.div
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: [0, -20, 0] }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="text-6xl mb-4"
                >
                    📁
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{
                        color: colors.warmWhite,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    OS AUTORES DA BÍBLIA
                </motion.h2>

                {/* Stamp CASO ENCERRADO */}
                <motion.div
                    initial={{ scale: 0, rotate: 30 }}
                    animate={{ scale: 1, rotate: -5 }}
                    transition={{ delay: 1, type: 'spring', stiffness: 300 }}
                    className="inline-block px-8 py-3 rounded-lg border-3 mb-8"
                    style={{
                        borderWidth: '3px',
                        borderColor: colors.mossGreen,
                        color: colors.mossGreen,
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                    }}
                >
                    CASO ENCERRADO
                </motion.div>

                {/* Linha decorativa */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                    className="h-0.5 max-w-md mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)` }}
                />

                {/* Next lesson hint */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="space-y-2"
                >
                    <p className="text-base" style={{ color: colors.textMedium }}>
                        Próxima semana:
                    </p>
                    <p className="text-xl font-bold" style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Caso #10 — Contexto Histórico e Cultural
                    </p>
                    <p className="text-sm italic" style={{ color: colors.textMuted }}>
                        Entendendo o cenário por trás do texto.
                    </p>
                </motion.div>

                {/* Final prayer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 2 }}
                    className="mt-8 text-sm"
                    style={{ color: colors.textMuted }}
                >
                    🙏 Oração de encerramento
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
