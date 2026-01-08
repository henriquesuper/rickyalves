'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

// Cores para o tema de frutos/resultados históricos
const fruitColors = {
    primary: '#16A34A',       // Verde - crescimento
    secondary: '#84CC16',     // Lima - vida
    gold: '#FFD700',          // Dourado - destaque
    good: '#22C55E',          // Verde - bom
    bad: '#EF4444',           // Vermelho - ruim
    tree: '#7C3AED',          // Roxo - raízes profundas
    leaf: '#10B981',          // Esmeralda - folhas
    fruit: '#F59E0B',         // Laranja - fruto maduro
};

// Componente da árvore animada
function TreeSymbol() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de crescimento emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${fruitColors.primary}40` }}
                    initial={{ width: 60, height: 60, opacity: 0.6 }}
                    animate={{
                        width: [60, 140, 220],
                        height: [60, 140, 220],
                        opacity: [0.4, 0.2, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Glow de fundo */}
            <motion.div
                className="absolute w-28 h-28 rounded-full blur-2xl"
                style={{ background: `radial-gradient(circle, ${fruitColors.primary}40, transparent)` }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Árvore SVG */}
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                className="z-10"
            >
                <defs>
                    <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B4513" />
                        <stop offset="50%" stopColor="#A0522D" />
                        <stop offset="100%" stopColor="#8B4513" />
                    </linearGradient>
                    <linearGradient id="leafGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={fruitColors.primary} />
                        <stop offset="50%" stopColor={fruitColors.leaf} />
                        <stop offset="100%" stopColor={fruitColors.secondary} />
                    </linearGradient>
                    <filter id="treeGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Tronco */}
                <motion.path
                    d="M45 95 L45 60 L40 60 L50 50 L60 60 L55 60 L55 95 Z"
                    fill="url(#trunkGradient)"
                    filter="url(#treeGlow)"
                />

                {/* Copa da árvore */}
                <motion.ellipse
                    cx="50"
                    cy="35"
                    rx="30"
                    ry="28"
                    fill="url(#leafGradient)"
                    filter="url(#treeGlow)"
                    animate={{
                        scale: [1, 1.03, 1],
                        ry: [28, 30, 28]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ transformOrigin: '50px 35px' }}
                />

                {/* Frutos */}
                {[
                    { cx: 35, cy: 30, delay: 0 },
                    { cx: 50, cy: 22, delay: 0.3 },
                    { cx: 65, cy: 30, delay: 0.6 },
                    { cx: 40, cy: 42, delay: 0.9 },
                    { cx: 60, cy: 42, delay: 1.2 },
                ].map((fruit, i) => (
                    <motion.circle
                        key={i}
                        cx={fruit.cx}
                        cy={fruit.cy}
                        r="5"
                        fill={fruitColors.fruit}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: fruit.delay
                        }}
                        style={{ transformOrigin: `${fruit.cx}px ${fruit.cy}px` }}
                    />
                ))}

                {/* Brilho nos frutos */}
                {[
                    { cx: 35, cy: 30 },
                    { cx: 50, cy: 22 },
                    { cx: 65, cy: 30 },
                ].map((fruit, i) => (
                    <motion.circle
                        key={`shine-${i}`}
                        cx={fruit.cx - 1.5}
                        cy={fruit.cy - 1.5}
                        r="1.5"
                        fill="white"
                        fillOpacity="0.6"
                    />
                ))}
            </motion.svg>
        </div>
    );
}

// Rede de raízes e frutos no fundo
function GrowthNetwork() {
    const nodes = [...Array(20)].map((_, i) => ({
        id: i,
        x: 5 + (i % 5) * 20 + Math.random() * 8,
        y: 10 + Math.floor(i / 5) * 22 + Math.random() * 8,
        delay: Math.random() * 2,
        isFruit: Math.random() > 0.6,
    }));

    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dist = Math.sqrt(
                Math.pow(nodes[i].x - nodes[j].x, 2) +
                Math.pow(nodes[i].y - nodes[j].y, 2)
            );
            if (dist < 28 && Math.random() > 0.5) {
                connections.push([i, j]);
            }
        }
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={fruitColors.primary} stopOpacity="0.1" />
                        <stop offset="50%" stopColor={fruitColors.leaf} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={fruitColors.fruit} stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Linhas de conexão (galhos/raízes) */}
                {connections.map(([from, to], i) => (
                    <motion.line
                        key={i}
                        x1={`${nodes[from].x}%`}
                        y1={`${nodes[from].y}%`}
                        x2={`${nodes[to].x}%`}
                        y2={`${nodes[to].y}%`}
                        stroke="url(#growthGrad)"
                        strokeWidth="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            pathLength: { duration: 2, delay: i * 0.05 },
                            opacity: { duration: 4, repeat: Infinity, delay: i * 0.1 }
                        }}
                    />
                ))}

                {/* Nós - folhas e frutos */}
                {nodes.map((node) => (
                    <motion.g key={node.id}>
                        {node.isFruit ? (
                            <motion.circle
                                cx={`${node.x}%`}
                                cy={`${node.y}%`}
                                r="0.8"
                                fill={fruitColors.fruit}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [0.8, 1.2, 0.8],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    delay: node.delay,
                                }}
                            />
                        ) : (
                            <motion.circle
                                cx={`${node.x}%`}
                                cy={`${node.y}%`}
                                r="0.5"
                                fill={fruitColors.leaf}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [0.8, 1.1, 0.8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: node.delay,
                                }}
                            />
                        )}
                    </motion.g>
                ))}
            </svg>
        </div>
    );
}

// Partículas de folhas caindo
function LeafParticles() {
    const particles = [...Array(12)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: -10,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 5,
        size: 3 + Math.random() * 4,
        rotation: Math.random() * 360,
        color: [fruitColors.leaf, fruitColors.primary, fruitColors.secondary, fruitColors.fruit][Math.floor(Math.random() * 4)],
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.startY}%`,
                        width: p.size,
                        height: p.size * 0.7,
                        background: p.color,
                        borderRadius: '50% 0 50% 50%',
                        opacity: 0.6,
                    }}
                    animate={{
                        y: [0, 500],
                        x: [0, 30, -20, 40, 0],
                        rotate: [p.rotation, p.rotation + 720],
                        opacity: [0, 0.6, 0.4, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}

// Card de avaliação com frutos bons e ruins
function EvaluationCard({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            className="relative group"
        >
            {/* Border glow on hover */}
            <motion.div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                style={{ background: `linear-gradient(135deg, ${item.color}50, transparent)` }}
            />

            <div
                className="relative backdrop-blur-xl rounded-xl border overflow-hidden h-full flex flex-col"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.6), ${item.color}10)`,
                    borderColor: `${item.color}40`,
                }}
            >
                {/* Barra superior colorida */}
                <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                    }}
                />

                {/* Header */}
                <div
                    className="text-center py-2 px-3"
                    style={{
                        background: `linear-gradient(180deg, ${item.color}15, transparent)`,
                    }}
                >
                    <span className="text-xl">{item.icon}</span>
                    <h3 className="text-xs font-bold mt-1" style={{ color: item.color }}>
                        {item.tradition}
                    </h3>
                </div>

                {/* Content */}
                <div className="p-3 flex-1 flex flex-col gap-3">
                    {/* Bom */}
                    <div>
                        <motion.div
                            className="flex items-center gap-1 mb-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <span className="text-xs">🍎</span>
                            <span className="text-[9px] font-bold" style={{ color: fruitColors.good }}>
                                BOM
                            </span>
                        </motion.div>
                        <ul className="text-[9px] text-green-200/70 space-y-0.5">
                            {item.good.map((g, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-1"
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                                >
                                    <span style={{ color: fruitColors.good }}>•</span>
                                    <span>{g}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Ruim */}
                    <div>
                        <motion.div
                            className="flex items-center gap-1 mb-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                        >
                            <span className="text-xs">🥀</span>
                            <span className="text-[9px] font-bold" style={{ color: fruitColors.bad }}>
                                RUIM
                            </span>
                        </motion.div>
                        <ul className="text-[9px] text-red-200/70 space-y-0.5">
                            {item.bad.map((b, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-1"
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                                >
                                    <span style={{ color: fruitColors.bad }}>•</span>
                                    <span>{b}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Decoração de canto */}
                <div
                    className="absolute bottom-0 right-0 w-8 h-8 opacity-10"
                    style={{
                        background: `radial-gradient(circle at bottom right, ${item.color}, transparent)`,
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function Slide14_Criterio5_Frutos() {
    const evaluations = [
        {
            tradition: 'Vedas',
            icon: '🕉️',
            color: colors.vedas,
            good: ['Filosofia profunda', 'Tradição de não-violência (ahimsa)', 'Ricos rituais comunitários'],
            bad: ['Sistema de castas', 'Mulheres como propriedade (sati)', 'Justificação religiosa de opressão']
        },
        {
            tradition: 'Budismo',
            icon: '☸️',
            color: colors.buddhism,
            good: ['Compaixão universal', 'Mindfulness moderno', 'Monastérios como centros de paz'],
            bad: ['Violência budista (Sri Lanka, Myanmar)', 'Passividade social', 'Menos base para justiça social']
        },
        {
            tradition: 'Alcorão',
            icon: '☪️',
            color: colors.islam,
            good: ['Preservação do conhecimento (Idade Média)', 'Caridade (zakat)', 'Coesão comunitária forte'],
            bad: ['Jihad como guerra santa', 'Apostasia = morte (em muitos contextos)', 'Direitos das mulheres problemáticos']
        },
        {
            tradition: 'Mórmon',
            icon: '📜',
            color: colors.mormon,
            good: ['Comunidades fortes', 'Ênfase na família', 'Obras de caridade'],
            bad: ['Racismo histórico (até 1978)', 'Poligamia original', 'Controle institucional']
        },
        {
            tradition: 'Bíblia',
            icon: '✝️',
            color: colors.bible,
            good: ['Hospitais, universidades, ciência moderna', 'Abolição da escravatura', 'Direitos humanos universais'],
            bad: ['Inquisição, cruzadas', 'Colonialismo "cristão"', 'Abusos em nome de Cristo']
        }
    ];

    return (
        <SlideWrapper>
            {/* Camadas de fundo */}
            <GrowthNetwork />
            <LeafParticles />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${fruitColors.primary}08 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${fruitColors.fruit}08 0%, transparent 50%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-6 z-10 relative"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-6"
                >
                    <TreeSymbol />

                    <motion.h2
                        className="font-['Cinzel'] text-2xl md:text-3xl mt-4"
                        style={{
                            color: fruitColors.gold,
                            textShadow: `0 0 20px ${fruitColors.primary}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Critério 5: Frutos Históricos
                    </motion.h2>

                    <motion.p
                        className="text-base mt-2"
                        style={{ color: `${fruitColors.primary}` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        O que produziu quando levada a sério? (Bom E ruim)
                    </motion.p>
                </motion.div>

                {/* Grid de avaliações */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    {evaluations.map((item, index) => (
                        <EvaluationCard key={item.tradition} item={item} index={index} />
                    ))}
                </div>

                {/* Ponto chave */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="relative"
                >
                    {/* Badge decorativo */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold z-10"
                        style={{
                            background: `linear-gradient(90deg, ${fruitColors.primary}, ${fruitColors.fruit}, ${fruitColors.primary})`,
                            color: '#fff'
                        }}
                    >
                        🌳 PONTO CRUCIAL
                    </div>

                    <div
                        className="p-5 pt-6 rounded-2xl border text-center relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${fruitColors.gold}10, ${fruitColors.primary}10, transparent)`,
                            borderColor: `${fruitColors.gold}30`,
                        }}
                    >
                        {/* Brilho pulsante */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: `radial-gradient(ellipse at center, ${fruitColors.gold}10, transparent)`,
                            }}
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        <p className="text-base md:text-lg relative z-10">
                            <strong style={{ color: fruitColors.gold }}>Honestidade é crucial:</strong>
                            <span className="text-[#E8D5B7]"> Cristãos falharam terrivelmente.</span>
                            <br />
                            <span className="text-[#E8D5B7]">A pergunta é: </span>
                            <span style={{ color: '#00D9FF' }}>isso foi apesar ou por causa do texto?</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
