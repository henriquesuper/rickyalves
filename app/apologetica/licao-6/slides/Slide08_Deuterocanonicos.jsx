'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Livros deuterocanônicos
const deuterocanonicals = [
    { name: "Tobias", icon: "📖" },
    { name: "Judite", icon: "⚔️" },
    { name: "Sabedoria", icon: "💎" },
    { name: "Eclesiástico (Sirácida)", icon: "📜" },
    { name: "Baruc", icon: "✍️" },
    { name: "1 Macabeus", icon: "🛡️" },
    { name: "2 Macabeus", icon: "⚔️" },
];

// Componente de livro flutuante
function FloatingBook({ name, icon, delay, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay, type: "spring" }}
            className="relative"
        >
            <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="p-4 rounded-xl text-center"
                style={{
                    background: `linear-gradient(135deg, ${colors.lapis}40, ${colors.libraryWood}80)`,
                    border: `1px solid ${colors.lapis}60`,
                    boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
                }}
            >
                <span className="text-3xl block mb-2">{icon}</span>
                <span className="text-sm font-medium" style={{ color: colors.parchmentLight }}>
                    {name}
                </span>
            </motion.div>
        </motion.div>
    );
}

export default function Slide08_Deuterocanonicos() {
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
                    Os Deuterocanônicos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                    style={{ color: colors.parchmentMid }}
                >
                    Os 7 livros adicionais na Bíblia católica
                </motion.p>

                {/* Explicação de nomenclatura */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap justify-center gap-4">
                        <div
                            className="px-4 py-2 rounded-full"
                            style={{
                                background: `${colors.vermillion}20`,
                                border: `1px solid ${colors.vermillion}40`
                            }}
                        >
                            <span style={{ color: colors.parchmentLight }}>
                                Protestantes chamam: <strong style={{ color: colors.vermillion }}>Apócrifos</strong>
                            </span>
                        </div>
                        <div
                            className="px-4 py-2 rounded-full"
                            style={{
                                background: `${colors.lapis}20`,
                                border: `1px solid ${colors.lapis}40`
                            }}
                        >
                            <span style={{ color: colors.parchmentLight }}>
                                Católicos chamam: <strong style={{ color: colors.lapis }}>Deuterocanônicos</strong>
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Grid de livros */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {deuterocanonicals.map((book, i) => (
                        <FloatingBook
                            key={book.name}
                            {...book}
                            index={i}
                            delay={0.4 + i * 0.1}
                        />
                    ))}
                    {/* Card para adições */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="p-4 rounded-xl text-center"
                        style={{
                            background: `linear-gradient(135deg, ${colors.sepia}30, ${colors.libraryWood}60)`,
                            border: `1px dashed ${colors.goldLeaf}40`
                        }}
                    >
                        <span className="text-2xl block mb-2">➕</span>
                        <span className="text-xs" style={{ color: colors.parchmentMid }}>
                            + Adições a Ester e Daniel
                        </span>
                    </motion.div>
                </div>

                {/* Comparação visual */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ParchmentCard delay={1.2}>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold" style={{ color: colors.vermillion }}>
                                Bíblia Protestante
                            </h3>
                            <span className="text-2xl font-bold" style={{ color: colors.vermillion }}>66</span>
                        </div>
                        <p className="text-sm" style={{ color: colors.parchmentLight }}>
                            39 AT + 27 NT
                        </p>
                        <div
                            className="mt-3 h-2 rounded-full overflow-hidden"
                            style={{ background: `${colors.vermillion}30` }}
                        >
                            <div className="h-full w-full" style={{ background: colors.vermillion }} />
                        </div>
                    </ParchmentCard>

                    <ParchmentCard delay={1.4}>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold" style={{ color: colors.lapis }}>
                                Bíblia Católica
                            </h3>
                            <span className="text-2xl font-bold" style={{ color: colors.lapis }}>73</span>
                        </div>
                        <p className="text-sm" style={{ color: colors.parchmentLight }}>
                            46 AT + 27 NT <span style={{ color: colors.goldLeaf }}>(+7 deuterocanônicos)</span>
                        </p>
                        <div
                            className="mt-3 h-2 rounded-full overflow-hidden"
                            style={{ background: `${colors.lapis}30` }}
                        >
                            <div className="h-full" style={{ background: colors.lapis, width: '90%' }} />
                            <div className="h-full float-right" style={{ background: colors.goldLeaf, width: '10%', marginTop: '-8px' }} />
                        </div>
                    </ParchmentCard>
                </div>
            </motion.div>
        </SlideWrapper>
    );
}
