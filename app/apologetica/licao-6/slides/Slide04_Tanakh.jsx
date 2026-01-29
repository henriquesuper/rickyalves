'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, ScrollReveal, colors } from './shared';

// Componente de rolo de pergaminho para cada seção
function TorahScroll({ title, hebrew, books, color, delay = 0, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="relative"
        >
            {/* Topo do rolo */}
            <div
                className="h-4 rounded-full mx-4"
                style={{
                    background: `linear-gradient(180deg, ${colors.aged}, ${colors.libraryWood}, ${colors.aged})`,
                    boxShadow: `0 2px 8px rgba(0,0,0,0.5)`
                }}
            />

            {/* Corpo do rolo */}
            <div
                className="p-6 mx-2 rounded-sm"
                style={{
                    background: `linear-gradient(135deg, ${color}15, ${colors.parchmentDark}10)`,
                    borderLeft: `3px solid ${color}60`,
                    borderRight: `3px solid ${color}60`,
                    minHeight: '200px'
                }}
            >
                {/* Cabeçalho */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{icon}</span>
                    <div>
                        <h3 className="text-2xl font-bold" style={{ color }}>
                            {title}
                        </h3>
                        <span className="text-xl font-serif" style={{ color: `${color}80` }}>
                            {hebrew}
                        </span>
                    </div>
                </div>

                {/* Livros */}
                <div className="space-y-1">
                    {books.map((book, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: delay + 0.3 + i * 0.05 }}
                            className="flex items-center gap-2 text-sm"
                            style={{ color: colors.parchmentLight }}
                        >
                            <span style={{ color }}>▸</span>
                            {book}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Base do rolo */}
            <div
                className="h-4 rounded-full mx-4"
                style={{
                    background: `linear-gradient(180deg, ${colors.aged}, ${colors.libraryWood}, ${colors.aged})`,
                    boxShadow: `0 -2px 8px rgba(0,0,0,0.5)`
                }}
            />
        </motion.div>
    );
}

export default function Slide04_Tanakh() {
    const sections = [
        {
            title: "Torá",
            hebrew: "תּוֹרָה",
            color: "#C9A227",
            icon: "📜",
            books: ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio"]
        },
        {
            title: "Neviim",
            hebrew: "נְבִיאִים",
            color: "#E34234",
            icon: "🔥",
            books: [
                "Profetas Anteriores: Josué, Juízes, Samuel, Reis",
                "Profetas Posteriores: Isaías, Jeremias, Ezequiel",
                "Os Doze Profetas Menores"
            ]
        },
        {
            title: "Ketuvim",
            hebrew: "כְּתוּבִים",
            color: "#1E3A5F",
            icon: "✍️",
            books: [
                "Salmos, Provérbios, Jó",
                "Cinco Rolos: Rute, Ester, Eclesiastes, Cantares, Lamentações",
                "Daniel, Esdras-Neemias, Crônicas"
            ]
        }
    ];

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mb-2"
                        style={{
                            color: colors.goldLeaf,
                            textShadow: `0 0 30px ${colors.goldLeaf}30`
                        }}
                    >
                        Tanakh — A Estrutura Hebraica
                    </h2>
                    <p className="text-3xl font-serif" style={{ color: colors.parchmentMid }}>
                        תַּנַ״ךְ
                    </p>
                </motion.div>

                {/* Explicação do acrônimo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-2 mb-8 flex-wrap"
                >
                    <span className="px-4 py-2 rounded-full text-lg font-bold" style={{ background: `${sections[0].color}30`, color: sections[0].color }}>
                        T = Torá
                    </span>
                    <span className="text-2xl" style={{ color: colors.parchmentMid }}>+</span>
                    <span className="px-4 py-2 rounded-full text-lg font-bold" style={{ background: `${sections[1].color}30`, color: sections[1].color }}>
                        N = Neviim
                    </span>
                    <span className="text-2xl" style={{ color: colors.parchmentMid }}>+</span>
                    <span className="px-4 py-2 rounded-full text-lg font-bold" style={{ background: `${sections[2].color}30`, color: sections[2].color }}>
                        K = Ketuvim
                    </span>
                </motion.div>

                {/* Três rolos */}
                <div className="grid md:grid-cols-3 gap-6">
                    {sections.map((section, i) => (
                        <TorahScroll
                            key={section.title}
                            {...section}
                            delay={0.3 + i * 0.2}
                        />
                    ))}
                </div>

                {/* Referência bíblica */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center"
                >
                    <ParchmentCard highlight className="inline-block">
                        <p style={{ color: colors.parchmentLight }}>
                            <span className="text-xl">📖</span> <strong style={{ color: colors.goldLeaf }}>Lucas 24:44</strong> — Jesus disse:
                            <em className="block mt-2 text-lg">
                                "É necessário que se cumpra tudo o que está escrito na
                                <span style={{ color: sections[0].color }}> Lei de Moisés</span>,
                                nos <span style={{ color: sections[1].color }}>Profetas</span> e
                                nos <span style={{ color: sections[2].color }}>Salmos</span>."
                            </em>
                        </p>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
