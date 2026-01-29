'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

const questions = [
    {
        icon: '🤔',
        question: 'Qual dos critérios do cânon você achou mais convincente? Por quê?',
        type: 'reflection'
    },
    {
        icon: '💬',
        question: 'Como você explicaria a diferença entre Bíblias católicas e protestantes para alguém que perguntasse?',
        type: 'application'
    },
    {
        icon: '📖',
        question: 'O que você aprendeu hoje que não sabia antes?',
        type: 'personal'
    },
    {
        icon: '🎯',
        question: 'Voltando ao quiz inicial: suas respostas mudariam agora?',
        type: 'callback'
    }
];

const typeColors = {
    reflection: `from-purple-900/40 to-purple-950/20 border-purple-500/30`,
    application: `from-blue-900/40 to-blue-950/20 border-blue-500/30`,
    personal: `from-amber-900/40 to-amber-950/20 border-amber-500/30`,
    callback: `from-green-900/40 to-green-950/20 border-green-500/30`
};

export default function Slide19_Discussao() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Discussão
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    Perguntas para reflexão
                </motion.p>

                {/* Grid de perguntas */}
                <div className="grid md:grid-cols-2 gap-6">
                    {questions.map((q, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                            className={`bg-gradient-to-br ${typeColors[q.type]} backdrop-blur-xl p-6 rounded-2xl border`}
                        >
                            <div className="text-4xl mb-4 text-center">{q.icon}</div>
                            <p className="text-lg text-center font-medium" style={{ color: colors.parchmentLight }}>
                                {q.question}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Chamada para conversa */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 text-center"
                >
                    <p className="text-xl font-medium" style={{ color: colors.goldLeaf }}>
                        💬 Vamos conversar!
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
