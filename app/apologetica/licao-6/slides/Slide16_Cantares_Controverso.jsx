'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Pétalas flutuantes
function FloatingPetals() {
    const petals = [...Array(8)].map((_, i) => ({
        x: 10 + Math.random() * 80,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {petals.map((petal, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{ left: `${petal.x}%`, top: '-10%' }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [0, Math.sin(i) * 30, 0],
                        rotate: [0, 360],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        delay: petal.delay,
                        ease: "linear"
                    }}
                >
                    🌸
                </motion.div>
            ))}
        </div>
    );
}

export default function Slide16_Cantares_Controverso() {
    const concerns = [
        {
            icon: "💋",
            text: "Erotismo explícito — descrições físicas detalhadas"
        },
        {
            icon: "❓",
            text: "Deus não é mencionado explicitamente no livro"
        },
        {
            icon: "⚠️",
            text: "Risco de má interpretação por leitores jovens"
        }
    ];

    return (
        <SlideWrapper>
            <FloatingPetals />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.vermillion,
                        textShadow: `0 0 30px ${colors.vermillion}30`
                    }}
                >
                    Cantares — O Controverso
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10 text-lg"
                    style={{ color: colors.parchmentMid }}
                >
                    O livro mais incomum da Bíblia — por que foi debatido?
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* O que é */}
                    <ParchmentCard delay={0.3}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.vermillion }}>
                            <span>❤️</span> O Que É
                        </h3>
                        <p style={{ color: colors.parchmentLight }}>
                            <strong>Poesia de amor erótica.</strong> Um homem e uma mulher
                            expressando desejo apaixonado um pelo outro em imagens vívidas.
                        </p>
                        <div className="mt-4 p-3 rounded-lg italic text-sm" style={{ background: `${colors.vermillion}15` }}>
                            <p style={{ color: colors.parchmentLight }}>
                                "Os teus seios são como filhotes gêmeos de uma gazela...
                                Põe-me como selo sobre o teu coração, porque o amor é forte como a morte..."
                            </p>
                            <p className="text-right text-xs mt-2" style={{ color: colors.parchmentMid }}>
                                — Cantares 4:5; 8:6
                            </p>
                        </div>
                    </ParchmentCard>

                    {/* Preocupações */}
                    <ParchmentCard delay={0.5}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>🤔</span> Preocupações dos Rabinos
                        </h3>
                        <div className="space-y-3">
                            {concerns.map((concern, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-start gap-3"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    <span className="text-xl">{concern.icon}</span>
                                    <span>{concern.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </ParchmentCard>
                </div>

                {/* Rabi Akiva */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <span className="text-5xl">📜</span>
                            <div style={{ color: colors.parchmentLight }}>
                                <p>
                                    <strong style={{ color: colors.goldLeaf }}>Rabi Akiva (séc. I d.C.)</strong> defendeu vigorosamente:
                                </p>
                                <p className="text-xl italic mt-2" style={{ color: colors.vermillion }}>
                                    "Todo o mundo inteiro não vale tanto quanto o dia em que Cantares
                                    foi dado a Israel. Todos os Escritos são santos, mas
                                    <strong> Cantares é o Santo dos Santos</strong>."
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>

                {/* Humor sobre metáforas */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 text-center"
                >
                    <p className="text-sm" style={{ color: colors.parchmentMid }}>
                        😄 <em>E as metáforas? "Seu nariz é como a torre do Líbano",
                            "Seu cabelo como rebanho de cabras"... Vamos explicar no próximo slide!</em>
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
