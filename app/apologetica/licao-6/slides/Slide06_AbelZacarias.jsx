'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Componente de livro na ordem
function BookBlock({ name, position, color, isHighlight = false, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            className={`relative px-3 py-2 rounded text-xs font-medium text-center ${isHighlight ? 'ring-2 ring-offset-2' : ''
                }`}
            style={{
                background: isHighlight
                    ? `linear-gradient(135deg, ${color}, ${color}80)`
                    : `${color}60`,
                color: colors.parchmentLight,
                ringColor: isHighlight ? colors.goldLeaf : 'transparent',
                ringOffsetColor: 'transparent',
                boxShadow: isHighlight ? `0 0 15px ${color}60` : 'none'
            }}
        >
            {name}
            {isHighlight && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: delay + 0.2 }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-sm"
                    style={{ background: colors.goldLeaf }}
                >
                    {position === 'first' ? '①' : '②'}
                </motion.span>
            )}
        </motion.div>
    );
}

export default function Slide06_AbelZacarias() {
    // Ordem hebraica simplificada
    const hebrewOrder = [
        { name: "Gênesis", highlight: "first" },
        { name: "Êxodo" },
        { name: "Levítico" },
        { name: "..." },
        { name: "Profetas" },
        { name: "..." },
        { name: "Salmos" },
        { name: "Provérbios" },
        { name: "..." },
        { name: "Crônicas", highlight: "last" },
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
                    De Abel a Zacarias
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                    style={{ color: colors.parchmentMid }}
                >
                    Jesus define os limites do cânon hebraico
                </motion.p>

                {/* Citação de Lucas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <ParchmentCard highlight>
                        <p className="text-lg leading-relaxed" style={{ color: colors.parchmentLight }}>
                            <strong style={{ color: colors.goldLeaf }}>Lucas 11:50-51</strong> — Jesus disse:
                            <em className="block mt-2 text-xl">
                                "...desde o sangue de <span style={{ color: colors.vermillion }}>Abel</span> até
                                ao sangue de <span style={{ color: colors.vermillion }}>Zacarias</span>,
                                que foi morto entre o altar e o santuário."
                            </em>
                        </p>
                    </ParchmentCard>
                </motion.div>

                {/* Explicação visual */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Abel */}
                    <ParchmentCard delay={0.5}>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl">🩸</span>
                            <div>
                                <h3 className="text-2xl font-bold" style={{ color: colors.goldLeaf }}>Abel</h3>
                                <p style={{ color: colors.parchmentMid }}>Gênesis 4</p>
                            </div>
                        </div>
                        <p style={{ color: colors.parchmentLight }}>
                            O <strong>primeiro mártir</strong> inocente da Bíblia.
                            Morto por Caim no início de Gênesis —
                            o <span style={{ color: colors.vermillion }}>primeiro livro</span> da Bíblia hebraica.
                        </p>
                    </ParchmentCard>

                    {/* Zacarias */}
                    <ParchmentCard delay={0.7}>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl">⚔️</span>
                            <div>
                                <h3 className="text-2xl font-bold" style={{ color: colors.goldLeaf }}>Zacarias</h3>
                                <p style={{ color: colors.parchmentMid }}>2 Crônicas 24:20-21</p>
                            </div>
                        </div>
                        <p style={{ color: colors.parchmentLight }}>
                            <strong>Não</strong> é o último cronologicamente!
                            Mas está no <span style={{ color: colors.vermillion }}>último livro</span> da ordem hebraica
                            — <strong>Crônicas</strong>, não Malaquias.
                        </p>
                    </ParchmentCard>
                </div>

                {/* Ordem visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8"
                >
                    <p className="text-center text-sm mb-4" style={{ color: colors.parchmentMid }}>
                        Ordem dos livros na Bíblia hebraica:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                        {hebrewOrder.map((book, i) => (
                            <BookBlock
                                key={i}
                                name={book.name}
                                position={book.highlight}
                                color={book.highlight === 'first' ? colors.forest : book.highlight === 'last' ? colors.vermillion : colors.aged}
                                isHighlight={!!book.highlight}
                                delay={1 + i * 0.05}
                            />
                        ))}
                    </div>

                    {/* Linha conectando Abel a Zacarias */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-4 mx-auto max-w-md h-1 rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${colors.forest}, ${colors.goldLeaf}, ${colors.vermillion})`
                        }}
                    />
                </motion.div>

                {/* Conclusão */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="mt-8 text-center"
                >
                    <p className="text-lg" style={{ color: colors.parchmentLight }}>
                        <span className="text-xl">💡</span> Jesus dizia:
                        <strong style={{ color: colors.goldLeaf }}> "De Gênesis a Crônicas"</strong>
                        — toda a Escritura hebraica que Ele reconhecia.
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
