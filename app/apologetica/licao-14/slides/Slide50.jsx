'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, ComparisonPanel, VerseCard, colors } from './shared';

export function Slide50() {
    return (
        <ConvergenceWrapper stratum="metodo" withGlow glowIntensity={0.6}>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Os dois princípios juntos
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-3 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Sola Scriptura <span style={{ color: colors.haloGold }}>+</span> Cristo como centro
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm md:text-base italic mb-8"
                    style={{ color: colors.haloGold }}
                >
                    Evita dois extremos opostos.
                </motion.p>

                <ComparisonPanel
                    leftTitle="⊘ BIBLIOLATRIA FUNDAMENTALISTA"
                    leftColor={colors.warnRed}
                    leftContent={
                        <p>
                            Tratar o texto como objeto de adoração em si, sem perceber que ele aponta para alguém.
                            <span className="block mt-2 italic text-xs" style={{ color: colors.textMuted }}>
                                Jo 5:39 é a vacina exata: &ldquo;são elas que testificam de mim — contudo não quereis vir a mim.&rdquo;
                            </span>
                        </p>
                    }
                    rightTitle="⊘ SUBJETIVISMO SEM TEXTO"
                    rightColor={colors.warnRose}
                    rightContent={
                        <p>
                            Dizer &ldquo;o que importa é Jesus, não a Bíblia&rdquo; — mas então qual Jesus?
                            <span className="block mt-2 italic text-xs" style={{ color: colors.textMuted }}>
                                A Bíblia é como conhecemos Jesus historicamente.
                            </span>
                        </p>
                    }
                    delay={0.7}
                />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6"
                >
                    <VerseCard
                        reference="João 5:39 — a vacina contra ambos"
                        text="Examinais as Escrituras [...] e são elas mesmas que testificam de mim."
                        tone="focused"
                        delay={1.7}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-center text-sm italic mt-6"
                    style={{ color: colors.textNebula, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    A Escritura tem autoridade primária — e ela mesma se interpreta como apontando para Cristo.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
