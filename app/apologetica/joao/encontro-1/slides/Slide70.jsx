'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

export function Slide70({ slideIndex = 69 }) {
    const questions = [
        "Por que João colocou Nicodemos e a samaritana lado a lado?",
        "O que muda quando quem sabe tudo sobre você é também quem não te descarta?",
        "\"Nem neste monte, nem em Jerusalém\" — o que isso faz com a pergunta \"qual é a igreja certa?\"",
        "O que essa mulher tinha que a tornou a primeira missionária do evangelho?"
    ];

    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    Aterrissagem · Movimento V
                </SectionLabel>

                <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-serif text-center mt-3 mb-12"
                    style={{ color: colors.inkDeep, fontFamily: fonts.display }}
                >
                    Perguntas para a Conversa
                </motion.h2>

                <div className="flex flex-col gap-6 w-full max-w-2xl text-left">
                    {questions.map((q, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + idx * 0.4, duration: 0.6 }}
                            className="flex gap-4 p-4 border border-dashed border-[#8B7355]20 rounded-sm"
                            style={{ background: `${colors.parchmentDeep}11` }}
                        >
                            <span className="text-sm font-mono font-bold" style={{ color: colors.lapisSoft }}>
                                0{idx + 1}.
                            </span>
                            <p className="text-base font-serif italic" style={{ color: colors.inkBody }}>
                                {q}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
