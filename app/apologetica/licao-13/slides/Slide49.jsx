'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, VerseCard, colors } from './shared';

export function Slide49() {
    return (
        <LibraryWrapper stratum="mesa-jo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    O veredito divino · Jó 42.7
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
                    Quem, no livro, estava &ldquo;errado&rdquo;?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5"
                >
                    <div
                        className="rounded-xl p-4"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.warnRed}30`,
                            borderLeft: `3px solid ${colors.warnRed}`,
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.warnRed }}>
                            Os três amigos
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Falaram <em>teologia correta no abstrato</em>:
                            Deus é justo, portanto se você sofre, pecou.
                        </p>
                        <p className="text-xs italic mt-2" style={{ color: colors.textMuted }}>
                            Lógica impecável, aplicada na hora errada.
                        </p>
                    </div>

                    <div
                        className="rounded-xl p-4"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.goodGreen}30`,
                            borderLeft: `3px solid ${colors.goodGreen}`,
                        }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.goodGreen }}>
                            Jó
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Discordou, reclamou, acusou Deus, desejou não ter nascido.
                        </p>
                        <p className="text-xs italic mt-2" style={{ color: colors.textMuted }}>
                            E ainda assim...
                        </p>
                    </div>
                </motion.div>

                <VerseCard
                    reference="Jó 42.7"
                    text="Minha ira se acendeu contra ti e contra os teus dois companheiros, porque não dissestes de mim o que era reto como o meu servo Jó."
                    tone="focused"
                    delay={1.1}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="mt-5 p-4 rounded-lg"
                    style={{
                        background: `${colors.inkGold}12`,
                        border: `1px solid ${colors.inkGold}30`,
                    }}
                >
                    <p className="text-base text-center font-bold" style={{ color: colors.inkGold, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Deus disse que Jó — que brigou — falou o que era reto.
                    </p>
                    <p className="text-xs italic text-center mt-2" style={{ color: colors.textMuted }}>
                        O livro canoniza a honestidade áspera acima da ortodoxia fria.
                    </p>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
