'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, VerseCard, colors } from './shared';

export function Slide52() {
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
                    Texto 2 · Pv 22.6 · Sabedoria
                </motion.p>

                <VerseCard
                    reference="Pv 22.6"
                    text="Instrui o menino no caminho em que deve andar, e ainda quando for velho não se desviará dele."
                    tone="warm"
                    delay={0.4}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-5 rounded-xl p-5"
                    style={{
                        background: colors.bgSurface,
                        border: `1px solid ${colors.genreAmber}30`,
                    }}
                >
                    <p className="text-xs uppercase tracking-wider mb-2 font-bold" style={{ color: colors.genreAmber }}>
                        Pergunta de gênero
                    </p>
                    <p
                        className="text-lg"
                        style={{
                            color: colors.textLight,
                            fontFamily: "'Playfair Display', Georgia, serif",
                        }}
                    >
                        Isso é <em>promessa contratual</em> ou <em>princípio observacional</em>?
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-4 rounded-xl p-5"
                    style={{
                        background: `${colors.genrePurple}10`,
                        border: `1px solid ${colors.genrePurple}28`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        Lembra da Dona Marlene da lição passada? A mãe que fez tudo que o texto parecia dizer —
                        e o filho se afastou mesmo assim.
                    </p>
                    <p className="text-sm mt-3" style={{ color: colors.textMedium }}>
                        Na leitura como <span style={{ color: colors.warnRed }}>promessa</span>, ela virou culpada.
                        Na leitura como <span style={{ color: colors.goodGreen }}>princípio</span>,
                        ela continuou sendo uma mãe que semeou bem — e a liberdade do filho continua sendo dele.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-center text-xs italic mt-5"
                    style={{ color: colors.inkGold }}
                >
                    O gênero é o que faz a diferença entre conforto e esmagamento.
                </motion.p>
            </div>
        </LibraryWrapper>
    );
}
