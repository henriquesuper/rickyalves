'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, VerseCard, colors } from './shared';

export function Slide53() {
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
                    Texto 3 · Ap 13.1-4 · Apocalíptica
                </motion.p>

                <VerseCard
                    reference="Ap 13.1"
                    text="Vi uma besta subir do mar, que tinha dez chifres e sete cabeças, e sobre os seus chifres dez diademas..."
                    tone="deep"
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-5 rounded-xl p-5"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.genreWine}30`,
                    }}
                >
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreWine }}>
                        Pergunta de gênero
                    </p>
                    <p
                        className="text-lg"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Qual é a pergunta <em>errada</em> aqui?
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
                            ⊘ Pergunta errada
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            &ldquo;Que país da ONU tem dez chifres e sete cabeças?&rdquo;<br />
                            Correlacionar o símbolo com manchete atual sem passar pelo texto.
                        </p>
                    </div>
                    <div
                        className="p-4 rounded-lg"
                        style={{ background: `${colors.goodGreen}08`, border: `1px solid ${colors.goodGreen}22` }}
                    >
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.goodGreen }}>
                            ◎ Pergunta no gênero
                        </p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            &ldquo;Onde os símbolos ecoam Daniel? O que o próprio texto nos diz?
                            Que comunidade perseguida precisava ouvir que Deus vence a besta?&rdquo;
                        </p>
                    </div>
                </motion.div>
            </div>
        </LibraryWrapper>
    );
}
