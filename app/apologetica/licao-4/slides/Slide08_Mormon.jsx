'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, traditions } from './shared';

const mormon = traditions.find(t => t.id === 'mormon');

// Cores tradicionais SUD/mórmons
const mormonColors = {
    gold: '#D4AF37',          // Dourado - placas de ouro, anjo Morôni
    brightGold: '#FFD700',    // Ouro brilhante - templos
    ivory: '#FFFFF0',         // Marfim - pureza, roupas do templo
    navyBlue: '#1565C0',      // Azul marinho - cor institucional
    skyBlue: '#87CEEB',       // Azul céu - céus celestiais
    deepBlue: '#1E3A5F',      // Azul profundo - reino celestial
    templeWhite: '#FAFAFA',   // Branco - templos SUD
    bronzed: '#CD7F32',       // Bronze - placas antigas
};

// Componente do Anjo Morôni animado
function AngelMoroni() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Raios de luz divina emanando */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        width: '2px',
                        height: '60px',
                        background: `linear-gradient(to top, transparent, ${mormonColors.brightGold})`,
                        transformOrigin: 'bottom center',
                        transform: `rotate(${i * 30}deg) translateY(-60px)`,
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        height: ['60px', '80px', '60px'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Ondas de glória */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`wave-${i}`}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${mormonColors.gold}40` }}
                    initial={{ width: 80, height: 80, opacity: 0.6 }}
                    animate={{
                        width: [80, 180, 280],
                        height: [80, 180, 280],
                        opacity: [0.4, 0.2, 0],
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
                className="absolute w-40 h-40 rounded-full blur-2xl"
                style={{ background: `radial-gradient(circle, ${mormonColors.brightGold}40, transparent)` }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Anjo Morôni SVG estilizado */}
            <motion.svg
                width="100"
                height="120"
                viewBox="0 0 100 120"
                className="z-10"
                animate={{
                    y: [0, -5, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <defs>
                    <linearGradient id="moroniGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={mormonColors.brightGold} />
                        <stop offset="50%" stopColor={mormonColors.gold} />
                        <stop offset="100%" stopColor={mormonColors.bronzed} />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Figura do anjo (silhueta estilizada com trombeta) */}
                <g filter="url(#glow)">
                    {/* Corpo / Manto */}
                    <ellipse cx="50" cy="85" rx="20" ry="30" fill="url(#moroniGradient)" />

                    {/* Cabeça */}
                    <circle cx="50" cy="40" r="12" fill="url(#moroniGradient)" />

                    {/* Braço direito segurando trombeta */}
                    <path
                        d="M 60 55 Q 75 45 90 50"
                        fill="none"
                        stroke="url(#moroniGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />

                    {/* Trombeta */}
                    <motion.path
                        d="M 88 48 L 100 40 L 100 55 L 88 52 Z"
                        fill={mormonColors.brightGold}
                        animate={{
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />

                    {/* Braço esquerdo */}
                    <path
                        d="M 40 55 Q 30 60 25 75"
                        fill="none"
                        stroke="url(#moroniGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />

                    {/* Placas de ouro na mão esquerda */}
                    <rect x="18" y="70" width="15" height="20" rx="2" fill={mormonColors.bronzed} />
                    <line x1="20" y1="75" x2="31" y2="75" stroke={mormonColors.gold} strokeWidth="1" />
                    <line x1="20" y1="80" x2="31" y2="80" stroke={mormonColors.gold} strokeWidth="1" />
                    <line x1="20" y1="85" x2="31" y2="85" stroke={mormonColors.gold} strokeWidth="1" />
                </g>
            </motion.svg>
        </div>
    );
}

// Padrão de estrelas (representando o reino celestial)
function CelestialStars() {
    const stars = [...Array(25)].map((_, i) => ({
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
                    className="absolute rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        background: mormonColors.brightGold,
                        boxShadow: `0 0 ${star.size * 2}px ${mormonColors.gold}`,
                    }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8],
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

// Placas de ouro flutuantes decorativas
function GoldenPlates({ className = "", size = 300, opacity = 0.1 }) {
    return (
        <motion.svg
            className={`absolute pointer-events-none ${className}`}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ opacity: 0 }}
            animate={{ opacity, y: [0, -10, 0] }}
            transition={{
                opacity: { duration: 2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            <defs>
                <linearGradient id="plateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={mormonColors.brightGold} />
                    <stop offset="50%" stopColor={mormonColors.gold} />
                    <stop offset="100%" stopColor={mormonColors.bronzed} />
                </linearGradient>
            </defs>

            {/* Stack de placas */}
            {[0, 5, 10].map((offset, i) => (
                <g key={i}>
                    <rect
                        x={25 + offset * 0.5}
                        y={30 + offset}
                        width="50"
                        height="35"
                        rx="3"
                        fill="none"
                        stroke="url(#plateGradient)"
                        strokeWidth="1"
                    />
                    {/* Linhas de texto simulado */}
                    {[0, 8, 16, 24].map((lineY, j) => (
                        <line
                            key={j}
                            x1={30 + offset * 0.5}
                            y1={38 + offset + lineY}
                            x2={70 + offset * 0.5}
                            y2={38 + offset + lineY}
                            stroke="url(#plateGradient)"
                            strokeWidth="0.5"
                            opacity="0.5"
                        />
                    ))}
                </g>
            ))}

            {/* Anéis de encadernação */}
            <circle cx="28" cy="48" r="5" fill="none" stroke="url(#plateGradient)" strokeWidth="1" />
            <circle cx="28" cy="58" r="5" fill="none" stroke="url(#plateGradient)" strokeWidth="1" />
        </motion.svg>
    );
}

// Partículas de luz (glória celestial)
function GloryParticles() {
    const particles = [...Array(18)].map((_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 5,
        size: 2 + Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        bottom: '-20px',
                        width: p.size,
                        height: p.size,
                        background: `radial-gradient(circle, ${mormonColors.brightGold}60, ${mormonColors.skyBlue}30)`,
                    }}
                    animate={{
                        y: [0, -700],
                        x: [0, Math.sin(p.id) * 40, Math.cos(p.id) * 20, 0],
                        opacity: [0, 0.5, 0.3, 0],
                        scale: [0.5, 1, 0.7],
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

// Texto decorativo (Reformed Egyptian símbolos fictícios)
function ReformedEgyptianDecor() {
    // Caracteres estilizados que lembram "Reformed Egyptian" (puramente decorativos)
    const symbols = [
        "𓂀 𓃀 𓄿 𓅓",
        "𓆣 𓇌 𓈖 𓉐",
        "𓊃 𓋴 𓌳 𓍿",
        "𓎡 𓏏 𓐍 𓁿",
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {symbols.map((symbol, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl font-serif whitespace-nowrap"
                    style={{
                        color: `${mormonColors.gold}12`,
                        top: `${15 + i * 22}%`,
                        left: i % 2 === 0 ? '-5%' : 'auto',
                        right: i % 2 === 1 ? '-5%' : 'auto',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.08, 0.15, 0.08],
                        x: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: i * 0.7,
                    }}
                >
                    {symbol}
                </motion.div>
            ))}
        </div>
    );
}

// Card estilo templo SUD
function TempleCard({ children, delay = 0, fromLeft = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {/* Ornamento superior estilo templo (Spire/Torre) */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div
                    className="w-3 h-6 rounded-t-full"
                    style={{
                        background: `linear-gradient(180deg, ${mormonColors.brightGold}, ${mormonColors.gold})`,
                    }}
                />
                <div
                    className="w-16 h-1"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${mormonColors.gold}, transparent)`,
                    }}
                />
            </div>

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 pt-4 rounded-2xl border relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.5), rgba(21,101,192,0.15))`,
                    borderColor: `${mormonColors.gold}30`,
                    borderWidth: '1px',
                }}
            >
                {/* Decoração de cantos */}
                <div
                    className="absolute top-0 left-0 w-6 h-6"
                    style={{
                        borderTop: `2px solid ${mormonColors.gold}`,
                        borderLeft: `2px solid ${mormonColors.gold}`,
                        borderTopLeftRadius: '8px',
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-6 h-6"
                    style={{
                        borderTop: `2px solid ${mormonColors.gold}`,
                        borderRight: `2px solid ${mormonColors.gold}`,
                        borderTopRightRadius: '8px',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-6 h-6"
                    style={{
                        borderBottom: `2px solid ${mormonColors.gold}`,
                        borderLeft: `2px solid ${mormonColors.gold}`,
                        borderBottomLeftRadius: '8px',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-6 h-6"
                    style={{
                        borderBottom: `2px solid ${mormonColors.gold}`,
                        borderRight: `2px solid ${mormonColors.gold}`,
                        borderBottomRightRadius: '8px',
                    }}
                />

                {children}
            </div>

            {/* Ornamento inferior */}
            <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${mormonColors.navyBlue}, ${mormonColors.gold}, ${mormonColors.navyBlue}, transparent)`
                }}
            />
        </motion.div>
    );
}

export default function Slide08_Mormon() {
    return (
        <SlideWrapper>
            {/* Camadas de fundo decorativas */}
            <GoldenPlates className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={500} opacity={0.06} />
            <GoldenPlates className="-top-16 -left-16" size={300} opacity={0.08} />
            <GoldenPlates className="-bottom-16 -right-16" size={300} opacity={0.08} />

            {/* Estrelas celestiais */}
            <CelestialStars />

            {/* Partículas de glória */}
            <GloryParticles />

            {/* Texto decorativo "Reformed Egyptian" */}
            <ReformedEgyptianDecor />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${mormonColors.navyBlue}15 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${mormonColors.gold}08 0%, transparent 50%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10 relative"
            >
                {/* Header com Anjo Morôni animado */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-10"
                >
                    <AngelMoroni />

                    <motion.h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-6"
                        style={{
                            color: mormonColors.brightGold,
                            textShadow: `0 0 20px ${mormonColors.gold}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Livro de Mórmon
                    </motion.h2>

                    {/* Subtítulo */}
                    <motion.p
                        className="text-lg mt-2 font-serif italic"
                        style={{ color: `${mormonColors.skyBlue}80` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        "Outro Testamento de Jesus Cristo"
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <TempleCard delay={0.3} fromLeft={true}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: mormonColors.brightGold }}>
                            <span>📜</span> Alegação
                            <span className="text-sm font-normal opacity-60 ml-2">Tradução</span>
                        </h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong style={{ color: mormonColors.navyBlue }}>Tradução de placas de ouro antigas</strong> por Joseph Smith
                            através de instrumentos divinos (<em className="text-[#87CEEB]">Urim e Tumim</em>).
                            Registro de povos hebreus que <span className="text-[#00D9FF]">migraram para as Américas</span>.
                        </p>
                    </TempleCard>

                    {/* Cosmovisão */}
                    <TempleCard delay={0.5} fromLeft={false}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: mormonColors.brightGold }}>
                            <span>🌍</span> Cosmovisão
                            <span className="text-sm font-normal opacity-60 ml-2">Restauração</span>
                        </h3>
                        <ul className="text-[#E8D5B7] text-lg space-y-3">
                            <li className="flex items-start gap-2">
                                <span style={{ color: mormonColors.skyBlue }}>✦</span>
                                <span><strong>Restauracionismo</strong> — cristianismo original foi corrompido</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: mormonColors.skyBlue }}>✦</span>
                                <span>Restaurado por Joseph Smith</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: mormonColors.skyBlue }}>✦</span>
                                <span>Deus tem <em className="text-orange-400">corpo físico</em></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: mormonColors.skyBlue }}>✦</span>
                                <span>Potencial humano de tornar-se como Deus</span>
                            </li>
                        </ul>
                    </TempleCard>
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
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-sm font-bold"
                        style={{
                            background: `linear-gradient(90deg, ${mormonColors.navyBlue}, ${mormonColors.gold}, ${mormonColors.navyBlue})`,
                            color: '#FFF'
                        }}
                    >
                        📚 Textos Principais
                    </div>

                    <div
                        className="p-6 pt-8 rounded-2xl border relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${mormonColors.navyBlue}10, ${mormonColors.gold}05, transparent)`,
                            borderColor: `${mormonColors.gold}25`,
                        }}
                    >
                        {/* Pequeno símbolo decorativo no canto */}
                        <span
                            className="absolute top-2 right-4 text-3xl opacity-15"
                            style={{ color: mormonColors.gold }}
                        >
                            𓂀
                        </span>

                        <p className="text-[#E8D5B7] leading-relaxed">
                            <strong style={{ color: mormonColors.brightGold }}>
                                Livro de Mórmon
                            </strong>{' '}
                            (publicado{' '}
                            <span className="px-2 py-0.5 rounded" style={{ background: `${mormonColors.navyBlue}30`, color: mormonColors.skyBlue }}>
                                1830
                            </span>), também Doutrina e Convênios, Pérola de Grande Valor.
                            Narrativa histórica de civilizações nas Américas{' '}
                            <span className="text-white/50">(c. 2200 a.C. - 421 d.C.)</span>
                        </p>
                    </div>
                </motion.div>

                {/* Nota importante */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6"
                >
                    <div
                        className="p-4 rounded-xl border text-center"
                        style={{
                            background: `linear-gradient(90deg, ${mormonColors.deepBlue}15, transparent, ${mormonColors.deepBlue}15)`,
                            borderColor: `${mormonColors.bronzed}30`,
                        }}
                    >
                        <p className="text-white/70 text-sm italic flex items-center justify-center gap-2">
                            <span className="text-lg">⚠️</span>
                            <span>Alega civilizações massivas nas Américas — <strong className="text-orange-400">veremos as evidências</strong></span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
