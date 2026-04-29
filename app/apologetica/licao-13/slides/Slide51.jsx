'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, VerseCard, colors } from './shared';

export function Slide51() {
    return (
        <LibraryWrapper stratum="bancada">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Texto 1 · Salmo 23 · Poesia
                </motion.p>

                <VerseCard
                    reference="Sl 23.1"
                    text="O Senhor é o meu pastor: nada me faltará."
                    tone="sea"
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-5 rounded-xl p-5"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.genreSea}30`,
                    }}
                >
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreSea }}>
                        Pergunta de gênero
                    </p>
                    <p
                        className="text-lg"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        O que este texto está tentando <em>fazer em mim</em>?
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                    <div
                        className="p-4 rounded-lg"
                        style={{ background: `${colors.warnRed}08`, border: `1px solid ${colors.warnRed}22` }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.warnRed }}>
                            ⊘ Fora do gênero
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            &ldquo;Nada me faltará&rdquo; lido como contrato de prosperidade garantida.
                        </p>
                    </div>
                    <div
                        className="p-4 rounded-lg"
                        style={{ background: `${colors.goodGreen}08`, border: `1px solid ${colors.goodGreen}22` }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.goodGreen }}>
                            ◎ No gênero
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            Confiança formada pela imagem do pastor — o texto dá colo antes de ensinar.
                        </p>
                    </div>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
