import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide17_Discussao() {
    const questions = [
        {
            icon: '🤔',
            question: 'Algum desses critérios não deveria ser usado? Por quê?',
            type: 'reflection'
        },
        {
            icon: '💭',
            question: 'Você conhece alguém de outra tradição? Como esse estudo muda (ou não) sua postura?',
            type: 'application'
        },
        {
            icon: '📚',
            question: 'Qual tradição você conhecia menos e ficou curioso para saber mais?',
            type: 'curiosity'
        },
        {
            icon: '🎯',
            question: 'Se um cético perguntasse "por que você confia na Bíblia?", o que você diria agora?',
            type: 'practical'
        }
    ];

    const typeColors = {
        reflection: 'from-purple-900/40 to-purple-950/20 border-purple-500/30',
        application: 'from-blue-900/40 to-blue-950/20 border-blue-500/30',
        curiosity: 'from-amber-900/40 to-amber-950/20 border-amber-500/30',
        practical: 'from-green-900/40 to-green-950/20 border-green-500/30'
    };

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{ color: colors.goldAncient }}
                >
                    Discussão
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-[#E8D5B7]/70 mb-10 text-lg"
                >
                    Perguntas para reflexão em grupo
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6">
                    {questions.map((q, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.15 }}
                            className={`bg-gradient-to-br ${typeColors[q.type]} backdrop-blur-xl p-6 rounded-2xl border`}
                        >
                            <div className="text-4xl mb-4 text-center">{q.icon}</div>
                            <p className="text-lg text-[#E8D5B7] text-center font-medium">
                                {q.question}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 text-center"
                >
                    <p className="text-[#C9A227] font-medium text-lg">
                        💬 Vamos conversar!
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
