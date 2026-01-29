'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

const debatedBooks = [
    {
        name: "Hebreus",
        icon: "📜",
        issue: "Autor desconhecido",
        resolution: "Aceita no Oriente desde cedo; Ocidente demorou",
        status: "accepted"
    },
    {
        name: "Tiago",
        icon: "✋",
        issue: "Pouca cristologia explícita",
        resolution: "Lutero: 'epístola de palha'. Mas aceita",
        status: "accepted"
    },
    {
        name: "2 Pedro",
        icon: "🪨",
        issue: "Estilo diferente de 1 Pedro",
        resolution: "Questões de autoria. Demorou mais, mas aceita",
        status: "accepted"
    },
    {
        name: "2-3 João",
        icon: "💌",
        issue: "Cartas muito pequenas",
        resolution: "Uso limitado, mas vindas do apóstolo João",
        status: "accepted"
    },
    {
        name: "Judas",
        icon: "⚔️",
        issue: "Cita livros apócrifos (1 Enoque)",
        resolution: "Breve e ortodoxa. Hesitação superada",
        status: "accepted"
    },
    {
        name: "Apocalipse",
        icon: "🔥",
        issue: "Muito simbólico, assustava alguns",
        resolution: "Aceita no Ocidente mais rápido que no Oriente",
        status: "accepted"
    }
];

export default function Slide15_LivrosDebatidos() {
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
                    Livros Debatidos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                    style={{ color: colors.parchmentMid }}
                >
                    Alguns livros levaram mais tempo para consenso universal
                </motion.p>

                {/* Grid de livros */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {debatedBooks.map((book, i) => (
                        <motion.div
                            key={book.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <ParchmentCard>
                                <div className="text-center mb-3">
                                    <span className="text-3xl">{book.icon}</span>
                                    <h3 className="text-lg font-bold mt-2" style={{ color: colors.goldLeaf }}>
                                        {book.name}
                                    </h3>
                                </div>

                                <div
                                    className="text-sm p-2 rounded mb-2"
                                    style={{
                                        background: `${colors.vermillion}15`,
                                        color: colors.parchmentLight
                                    }}
                                >
                                    <strong style={{ color: colors.vermillion }}>Questão:</strong> {book.issue}
                                </div>

                                <div
                                    className="text-sm p-2 rounded"
                                    style={{
                                        background: `${colors.forest}15`,
                                        color: colors.parchmentLight
                                    }}
                                >
                                    <strong style={{ color: colors.forest }}>Resolução:</strong> {book.resolution}
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusão importante */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">💡</span>
                            <div style={{ color: colors.parchmentLight }}>
                                <p className="font-bold" style={{ color: colors.goldLeaf }}>
                                    Nenhum desses livros foi rejeitado!
                                </p>
                                <p className="text-sm mt-1">
                                    O debate era sobre <em>timing de aceitação completa</em>, não sobre rejeição.
                                    As discussões eram públicas, eruditas e piedosas — não havia conspiração.
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
