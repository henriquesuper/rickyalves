'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const notes = [
    {
        word: 'ἀπειθῶν · apeithôn',
        gloss: 'recusa ativa, desobediência — não é "dúvida"',
        tone: colors.gold,
    },
    {
        word: 'μένει · ménei',
        gloss: '"permanece" — a ira é condição, não raio',
        tone: colors.gold,
    },
    {
        word: 'Jo 3.17 · dois versos antes',
        gloss: '"não para condenar, mas para salvar"',
        tone: colors.gold,
    },
];

export function Slide52({ slideIndex = 51 }) {
    return (
        <ParchmentWrapper lapisDark>
            <div className="w-full max-w-4xl mx-auto px-8 py-20">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                        Quando a pergunta surgir · 3.36
                    </SectionLabel>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 0.6, duration: 1.0 }}
                    className="text-center text-base md:text-lg italic max-w-2xl mx-auto mb-10"
                    style={{
                        color: colors.parchmentEdge,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Jo 3.36 — "a ira de Deus permanece sobre ele."
                </motion.p>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {notes.map((n, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 + i * 0.6, duration: 0.85 }}
                            className="p-4"
                            style={{
                                background: `${colors.gold}10`,
                                border: `1px dashed ${colors.gold}77`,
                            }}
                        >
                            <p
                                className="text-base md:text-lg italic mb-1"
                                style={{
                                    color: colors.gold,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                }}
                            >
                                {n.word}
                            </p>
                            <p
                                className="text-sm md:text-base"
                                style={{
                                    color: colors.parchmentEdge,
                                    fontFamily: fonts.body,
                                    lineHeight: 1.55,
                                }}
                            >
                                {n.gloss}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-10 text-center text-xs md:text-sm italic max-w-2xl mx-auto"
                    style={{
                        color: colors.goldFaint,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    a ira é a sombra de um amor que se recusa a coagir.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
