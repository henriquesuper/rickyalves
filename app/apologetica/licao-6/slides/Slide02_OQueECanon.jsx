'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, IlluminatedLetter, colors } from './shared';

// Componente de régua animada
function AnimatedRuler() {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-16 mx-auto max-w-md mb-8"
        >
            {/* Régua */}
            <div
                className="absolute inset-0 rounded"
                style={{
                    background: `linear-gradient(180deg, ${colors.aged}, ${colors.libraryWood}, ${colors.aged})`,
                    boxShadow: `0 4px 12px rgba(0,0,0,0.4)`
                }}
            >
                {/* Marcações */}
                <div className="absolute inset-x-0 top-0 flex justify-between px-4 pt-1">
                    {[...Array(11)].map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center"
                        >
                            <div
                                className={`w-0.5 ${i % 5 === 0 ? 'h-4' : 'h-2'}`}
                                style={{ background: colors.goldLeaf }}
                            />
                            {i % 5 === 0 && (
                                <span className="text-xs mt-0.5" style={{ color: colors.goldLeaf }}>
                                    {i}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Texto grego */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-2xl font-serif italic"
                style={{ color: colors.goldLeaf }}
            >
                κανών
            </motion.span>
        </motion.div>
    );
}

export default function Slide02_OQueECanon() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-8"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    O Que É um Cânon?
                </motion.h2>

                {/* Régua animada */}
                <AnimatedRuler />

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* Etimologia */}
                    <ParchmentCard delay={0.3}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>📖</span> Etimologia
                        </h3>
                        <div style={{ color: colors.parchmentLight }}>
                            <IlluminatedLetter letter="K" delay={0.5} />
                            <p className="text-lg leading-relaxed">
                                <strong style={{ color: colors.goldLeaf }}>Kanōn</strong> (κανών) em grego
                                significava originalmente "<em style={{ color: colors.vermillion }}>vara de medir</em>"
                                ou "<em style={{ color: colors.vermillion }}>régua</em>".
                            </p>
                            <p className="mt-3 text-sm" style={{ color: `${colors.parchmentMid}90` }}>
                                Na agricultura, era o bastão usado para medir propriedades.
                                Na construção, garantia que paredes estivessem retas.
                            </p>
                        </div>
                    </ParchmentCard>

                    {/* Significado teológico */}
                    <ParchmentCard delay={0.5} highlight>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>⚖️</span> Significado Teológico
                        </h3>
                        <div style={{ color: colors.parchmentLight }}>
                            <p className="text-lg leading-relaxed">
                                Quando aplicamos à Bíblia, significa:
                            </p>
                            <ul className="mt-3 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span style={{ color: colors.vermillion }}>▸</span>
                                    Livros que servem como <strong>padrão normativo</strong> da fé
                                </li>
                                <li className="flex items-start gap-2">
                                    <span style={{ color: colors.vermillion }}>▸</span>
                                    <strong>Autoritativos</strong> — a Palavra de Deus escrita
                                </li>
                                <li className="flex items-start gap-2">
                                    <span style={{ color: colors.vermillion }}>▸</span>
                                    A <strong>régua</strong> pela qual medimos tudo mais
                                </li>
                            </ul>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Citação */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 text-center"
                >
                    <p
                        className="text-xl italic max-w-2xl mx-auto"
                        style={{ color: `${colors.parchmentMid}90` }}
                    >
                        "Se você quer saber o que Deus disse, você vai a
                        <span style={{ color: colors.goldLeaf }}> esses livros</span>,
                        não a outros."
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
