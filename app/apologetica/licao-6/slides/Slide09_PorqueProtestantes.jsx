'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

export default function Slide09_PorqueProtestantes() {
    const criteria = [
        {
            icon: "📜",
            title: "Escrito em Hebraico",
            description: "A maioria dos deuterocanônicos foi escrita em grego, não hebraico"
        },
        {
            icon: "✝️",
            title: "Reconhecido por Jesus",
            description: "Jesus nunca citou os deuterocanônicos como Escritura"
        },
        {
            icon: "✍️",
            title: "Citado pelos Apóstolos",
            description: "O NT não cita esses livros como Escritura (há alusões, mas não citações)"
        }
    ];

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
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Por Que Protestantes Não os Incluem?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10 text-lg italic"
                    style={{ color: colors.parchmentMid }}
                >
                    Ad Fontes — "Voltando às Fontes"
                </motion.p>

                {/* Lutero */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8 flex items-center gap-6"
                >
                    <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl flex-shrink-0"
                        style={{
                            background: `linear-gradient(135deg, ${colors.libraryWood}, ${colors.sepia})`,
                            boxShadow: `0 4px 20px rgba(0,0,0,0.4)`
                        }}
                    >
                        📚
                    </div>
                    <ParchmentCard className="flex-1">
                        <p style={{ color: colors.parchmentLight }}>
                            <strong style={{ color: colors.goldLeaf }}>Lutero (1534)</strong> incluiu os apócrifos
                            em seção separada com a nota:
                            <em className="block mt-2 text-lg" style={{ color: colors.parchmentMid }}>
                                "Estes livros não são iguais às Sagradas Escrituras,
                                mas são úteis e bons para ler."
                            </em>
                        </p>
                    </ParchmentCard>
                </motion.div>

                {/* Critérios */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {criteria.map((criterion, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.15 }}
                        >
                            <ParchmentCard highlight>
                                <div className="text-center">
                                    <span className="text-4xl block mb-3">{criterion.icon}</span>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.goldLeaf }}>
                                        {criterion.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: colors.parchmentLight }}>
                                        {criterion.description}
                                    </p>
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    ))}
                </div>

                {/* Jerônimo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <ParchmentCard>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">⚓</span>
                            <div style={{ color: colors.parchmentLight }}>
                                <p>
                                    <strong style={{ color: colors.goldLeaf }}>Jerônimo (~405 d.C.)</strong>,
                                    tradutor da Vulgata Latina, já preferia o texto hebraico e chamava
                                    esses livros de <em>"apocrypha"</em> — úteis, mas não canônicos.
                                </p>
                                <p className="text-sm mt-2" style={{ color: colors.parchmentMid }}>
                                    Essa distinção existia séculos antes da Reforma!
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
