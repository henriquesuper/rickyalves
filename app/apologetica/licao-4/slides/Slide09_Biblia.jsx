'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, traditions } from './shared';

const bible = traditions.find(t => t.id === 'bible');

// Cores tradicionais cristãs/bíblicas
const bibleColors = {
    gold: '#D4AF37',           // Dourado - glória divina, manuscritos iluminados
    brightGold: '#FFD700',     // Ouro brilhante - luz celestial
    royalBlue: '#1E3A8A',      // Azul real - realeza de Cristo
    skyBlue: '#87CEEB',        // Azul céu - esperança, céu
    burgundy: '#722F37',       // Vinho/bordô - sangue redentor
    parchment: '#F4E4C1',      // Pergaminho - manuscritos antigos
    crimson: '#DC143C',        // Carmesim - sacrifício
    ivory: '#FFFFF0',          // Marfim - pureza
    deepPurple: '#4A1259',     // Roxo profundo - realeza
    oliveGreen: '#556B2F',     // Verde oliva - paz, Monte das Oliveiras
};

// Cruz estilizada com luz radiante
function GloryCross() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Raios de luz emanando da cruz */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        width: '3px',
                        height: '80px',
                        background: `linear-gradient(to top, transparent, ${bibleColors.brightGold})`,
                        transformOrigin: 'bottom center',
                        transform: `rotate(${i * 30}deg) translateY(-50px)`,
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        height: ['60px', '90px', '60px'],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.08,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Ondas de glória salvadora */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`wave-${i}`}
                    className="absolute rounded-full"
                    style={{
                        border: `2px solid ${bibleColors.gold}40`,
                    }}
                    initial={{ width: 60, height: 60, opacity: 0.6 }}
                    animate={{
                        width: [60, 160, 260],
                        height: [60, 160, 260],
                        opacity: [0.5, 0.2, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Glow de fundo celestial */}
            <motion.div
                className="absolute w-36 h-36 rounded-full blur-2xl"
                style={{ background: `radial-gradient(circle, ${bibleColors.brightGold}50, ${bibleColors.crimson}20, transparent)` }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
            />

            {/* Cruz SVG estilizada */}
            <motion.svg
                width="90"
                height="110"
                viewBox="0 0 90 110"
                className="z-10"
                animate={{
                    filter: ['drop-shadow(0 0 10px gold)', 'drop-shadow(0 0 20px gold)', 'drop-shadow(0 0 10px gold)'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <defs>
                    <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={bibleColors.brightGold} />
                        <stop offset="40%" stopColor={bibleColors.gold} />
                        <stop offset="100%" stopColor={bibleColors.burgundy} />
                    </linearGradient>
                    <filter id="crossGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                <g filter="url(#crossGlow)">
                    {/* Barra vertical da cruz */}
                    <rect x="35" y="5" width="20" height="100" rx="2" fill="url(#crossGradient)" />

                    {/* Barra horizontal da cruz */}
                    <rect x="10" y="25" width="70" height="18" rx="2" fill="url(#crossGradient)" />

                    {/* Detalhes ornamentais da cruz */}
                    <circle cx="45" cy="34" r="6" fill={bibleColors.crimson} opacity="0.8" />
                    <motion.circle
                        cx="45"
                        cy="34"
                        r="3"
                        fill={bibleColors.brightGold}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </g>
            </motion.svg>
        </div>
    );
}

// Estrelas celestiais (representando a luz divina)
function DivineStars() {
    const stars = [...Array(30)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        background: bibleColors.brightGold,
                        borderRadius: '50%',
                        boxShadow: `0 0 ${star.size * 3}px ${bibleColors.gold}`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
}

// Pergaminho/Manuscrito decorativo flutuante
function ScrollManuscript({ className = "", size = 280, opacity = 0.1 }) {
    return (
        <motion.svg
            className={`absolute pointer-events-none ${className}`}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity, y: [0, -8, 0], rotate: [0, 2, 0] }}
            transition={{
                opacity: { duration: 2 },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            <defs>
                <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={bibleColors.parchment} />
                    <stop offset="50%" stopColor={bibleColors.gold} />
                    <stop offset="100%" stopColor={bibleColors.burgundy} />
                </linearGradient>
            </defs>

            {/* Rolo de pergaminho */}
            <path
                d="M 20 15 L 80 15 L 85 20 L 85 80 L 80 85 L 20 85 L 15 80 L 15 20 Z"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="1.5"
            />

            {/* Linhas de texto simulado */}
            {[0, 12, 24, 36, 48, 60].map((lineY, i) => (
                <line
                    key={i}
                    x1="25"
                    y1={25 + lineY}
                    x2="75"
                    y2={25 + lineY}
                    stroke="url(#scrollGradient)"
                    strokeWidth="0.5"
                    opacity="0.6"
                />
            ))}

            {/* Selo/Emblema */}
            <circle
                cx="75"
                cy="75"
                r="8"
                fill="none"
                stroke="url(#scrollGradient)"
                strokeWidth="1"
            />
            <text
                x="75"
                y="78"
                fontSize="8"
                fill="url(#scrollGradient)"
                textAnchor="middle"
                fontFamily="serif"
            >
                ✝
            </text>
        </motion.svg>
    );
}

// Partículas de luz (Espírito Santo / Pentecostes)
function HolyLightParticles() {
    const particles = [...Array(20)].map((_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 5,
        size: 2 + Math.random() * 4,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: '110%',
                        width: p.size,
                        height: p.size,
                        background: `radial-gradient(circle, ${bibleColors.brightGold}70, ${bibleColors.crimson}30)`,
                    }}
                    animate={{
                        y: [0, -800],
                        x: [0, Math.sin(p.id) * 30, Math.cos(p.id) * 15, 0],
                        opacity: [0, 0.7, 0.4, 0],
                        scale: [0.5, 1.2, 0.8],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
}

// Texto decorativo (versículos e símbolos gregos/hebraicos)
function ScriptureDecor() {
    // Símbolos bíblicos/litúrgicos decorativos
    const symbols = [
        "Α Ω",           // Alfa e Ômega
        "ΙΧ ΘΥ Σ",       // Ichthys (peixe)
        "אֱלֹהִים",      // Elohim em hebraico
        "יהוה",          // YHWH Tetragrammaton
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {symbols.map((symbol, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl font-serif whitespace-nowrap"
                    style={{
                        color: `${bibleColors.gold}15`,
                        top: `${12 + i * 24}%`,
                        left: i % 2 === 0 ? '-3%' : 'auto',
                        right: i % 2 === 1 ? '-3%' : 'auto',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        x: i % 2 === 0 ? [0, 12, 0] : [0, -12, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        delay: i * 0.8,
                    }}
                >
                    {symbol}
                </motion.div>
            ))}
        </div>
    );
}

// Card estilo manuscrito iluminado medieval
function IlluminatedCard({ children, delay = 0, fromLeft = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {/* Ornamento superior estilo manuscrito iluminado */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div
                    className="w-8 h-3 rounded-t"
                    style={{
                        background: `linear-gradient(180deg, ${bibleColors.brightGold}, ${bibleColors.burgundy})`,
                    }}
                />
                <div
                    className="w-20 h-0.5"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${bibleColors.gold}, transparent)`,
                    }}
                />
            </div>

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 pt-5 rounded-xl border relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.55), rgba(114,47,55,0.12))`,
                    borderColor: `${bibleColors.gold}35`,
                    borderWidth: '1px',
                }}
            >
                {/* Decoração de cantos estilo manuscrito iluminado */}
                <div
                    className="absolute top-0 left-0 w-8 h-8"
                    style={{
                        borderTop: `2px solid ${bibleColors.gold}`,
                        borderLeft: `2px solid ${bibleColors.gold}`,
                        borderTopLeftRadius: '6px',
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-8 h-8"
                    style={{
                        borderTop: `2px solid ${bibleColors.gold}`,
                        borderRight: `2px solid ${bibleColors.gold}`,
                        borderTopRightRadius: '6px',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-8 h-8"
                    style={{
                        borderBottom: `2px solid ${bibleColors.gold}`,
                        borderLeft: `2px solid ${bibleColors.gold}`,
                        borderBottomLeftRadius: '6px',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-8 h-8"
                    style={{
                        borderBottom: `2px solid ${bibleColors.gold}`,
                        borderRight: `2px solid ${bibleColors.gold}`,
                        borderBottomRightRadius: '6px',
                    }}
                />

                {/* Pequena cruz decorativa no canto */}
                <span
                    className="absolute top-1 right-2 text-xl opacity-20"
                    style={{ color: bibleColors.gold }}
                >
                    ✝
                </span>

                {children}
            </div>

            {/* Ornamento inferior */}
            <div
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${bibleColors.burgundy}, ${bibleColors.gold}, ${bibleColors.burgundy}, transparent)`
                }}
            />
        </motion.div>
    );
}

// Componente de livros empilhados (66 livros)
function BibleBooks() {
    return (
        <motion.div
            className="absolute bottom-10 right-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
        >
            <svg width="120" height="80" viewBox="0 0 120 80">
                <defs>
                    <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={bibleColors.burgundy} />
                        <stop offset="50%" stopColor={bibleColors.gold} />
                        <stop offset="100%" stopColor={bibleColors.parchment} />
                    </linearGradient>
                </defs>
                {/* Stack de livros representando os 66 livros */}
                {[0, 8, 16, 24, 32, 40].map((y, i) => (
                    <rect
                        key={i}
                        x="10"
                        y={y}
                        width={90 - i * 5}
                        height="7"
                        rx="1"
                        fill="none"
                        stroke="url(#bookGradient)"
                        strokeWidth="0.8"
                    />
                ))}
                <text
                    x="55"
                    y="70"
                    fontSize="10"
                    fill={bibleColors.gold}
                    textAnchor="middle"
                    opacity="0.6"
                    fontFamily="serif"
                >
                    66
                </text>
            </svg>
        </motion.div>
    );
}

export default function Slide09_Biblia() {
    return (
        <SlideWrapper>
            {/* Camadas de fundo decorativas */}
            <ScrollManuscript className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={450} opacity={0.06} />
            <ScrollManuscript className="-top-12 -left-12" size={280} opacity={0.08} />
            <ScrollManuscript className="-bottom-12 -right-12" size={280} opacity={0.08} />

            {/* Estrelas divinas */}
            <DivineStars />

            {/* Partículas de luz santa */}
            <HolyLightParticles />

            {/* Texto decorativo de escrituras */}
            <ScriptureDecor />

            {/* Livros empilhados */}
            <BibleBooks />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${bibleColors.royalBlue}12 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${bibleColors.burgundy}10 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, ${bibleColors.gold}08 0%, transparent 30%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10 relative"
            >
                {/* Header com Cruz Gloriosa animada */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-8"
                >
                    <GloryCross />

                    <motion.h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-6"
                        style={{
                            color: bibleColors.brightGold,
                            textShadow: `0 0 25px ${bibleColors.gold}60, 0 2px 4px rgba(0,0,0,0.5)`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        A Bíblia
                    </motion.h2>

                    {/* Subtítulo */}
                    <motion.p
                        className="text-lg mt-2 font-serif italic"
                        style={{ color: `${bibleColors.skyBlue}90` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        "Palavra de Deus através de autores humanos"
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <IlluminatedCard delay={0.3} fromLeft={true}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: bibleColors.brightGold }}>
                            <span>📜</span> Alegação
                            <span className="text-sm font-normal opacity-60 ml-2">Inspiração</span>
                        </h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong style={{ color: bibleColors.skyBlue }}>Inspiração através de autores humanos</strong>.
                            Deus não ditou (exceto casos específicos) —
                            Ele inspirou pessoas que escreveram em seus próprios{' '}
                            <span className="text-[#C9A227]">estilos, contextos e linguagens</span>.
                        </p>
                    </IlluminatedCard>

                    {/* Cosmovisão */}
                    <IlluminatedCard delay={0.5} fromLeft={false}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: bibleColors.brightGold }}>
                            <span>🌍</span> Cosmovisão
                            <span className="text-sm font-normal opacity-60 ml-2">Redenção</span>
                        </h3>
                        <ul className="text-[#E8D5B7] text-lg space-y-2">
                            <li className="flex items-start gap-2">
                                <span style={{ color: bibleColors.crimson }}>✦</span>
                                <span>Deus <strong className="text-[#00D9FF]">pessoal</strong>, criador</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: bibleColors.crimson }}>✦</span>
                                <span>Se relaciona com a humanidade</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: bibleColors.crimson }}>✦</span>
                                <span>Problema humano: pecado/rebelião</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: bibleColors.crimson }}>✦</span>
                                <span>Solução: <strong className="text-green-400">graça/redenção</strong>, culminando em Jesus</span>
                            </li>
                        </ul>
                    </IlluminatedCard>
                </div>

                {/* Textos e período */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 relative"
                >
                    {/* Badge decorativo */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-sm font-bold z-10"
                        style={{
                            background: `linear-gradient(90deg, ${bibleColors.burgundy}, ${bibleColors.gold}, ${bibleColors.burgundy})`,
                            color: '#FFF',
                            boxShadow: `0 2px 10px ${bibleColors.gold}40`
                        }}
                    >
                        📚 66 Livros Sagrados
                    </div>

                    <div
                        className="p-6 pt-8 rounded-2xl border relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${bibleColors.royalBlue}10, ${bibleColors.gold}05, transparent)`,
                            borderColor: `${bibleColors.gold}25`,
                        }}
                    >
                        {/* Símbolo decorativo no canto */}
                        <span
                            className="absolute top-3 right-4 text-3xl opacity-20"
                            style={{ color: bibleColors.gold }}
                        >
                            ✝
                        </span>

                        <p className="text-[#E8D5B7] leading-relaxed">
                            <strong style={{ color: bibleColors.brightGold }}>
                                39 livros no AT + 27 no NT
                            </strong>, escritos ao longo de{' '}
                            <span className="px-2 py-0.5 rounded" style={{ background: `${bibleColors.burgundy}30`, color: bibleColors.parchment }}>
                                ~1500 anos
                            </span>{' '}
                            por{' '}
                            <span className="px-2 py-0.5 rounded" style={{ background: `${bibleColors.royalBlue}30`, color: bibleColors.skyBlue }}>
                                ~40 autores
                            </span>.
                            Diversos gêneros: narrativa histórica, poesia, profecia, lei, cartas, apocalíptico.
                        </p>
                    </div>
                </motion.div>

                {/* Destaque final */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6"
                >
                    <div
                        className="p-4 rounded-xl border text-center relative overflow-hidden"
                        style={{
                            background: `linear-gradient(90deg, ${bibleColors.gold}08, ${bibleColors.brightGold}15, ${bibleColors.gold}08)`,
                            borderColor: `${bibleColors.gold}30`,
                        }}
                    >
                        {/* Brilho animado */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${bibleColors.brightGold}10, transparent)`,
                            }}
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 2
                            }}
                        />

                        <p className="text-lg font-medium relative z-10" style={{ color: bibleColors.brightGold }}>
                            ✨ Diversos autores, longo período, múltiplos gêneros —{' '}
                            <strong className="text-white">mas uma história unificada</strong>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
