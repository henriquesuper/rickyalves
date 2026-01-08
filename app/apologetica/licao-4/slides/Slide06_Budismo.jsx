'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, traditions } from './shared';

const buddhism = traditions.find(t => t.id === 'buddhism');

// Cores tradicionais budistas
const buddhistColors = {
    saffron: '#FF8C00',       // Açafrão - renúncia e busca espiritual
    gold: '#FFD700',          // Dourado - iluminação e sabedoria
    maroon: '#800020',        // Marrom - terra e humildade
    blue: '#1E90FF',          // Azul - paz e serenidade
    white: '#F5F5F5',         // Branco - pureza e verdade
    lotus: '#F8BBD9',         // Rosa lótus - pureza espiritual
    zen: '#4A7C59',           // Verde zen - natureza e harmonia
};

// Componente da Roda do Dharma (Dharmachakra) animado
function DharmaWheel() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de paz emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${buddhistColors.gold}40` }}
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

            {/* Glow de fundo */}
            <motion.div
                className="absolute w-40 h-40 rounded-full blur-2xl"
                style={{ background: `radial-gradient(circle, ${buddhistColors.gold}30, transparent)` }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Roda do Dharma SVG */}
            <motion.svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                className="z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                    <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={buddhistColors.gold} />
                        <stop offset="100%" stopColor={buddhistColors.saffron} />
                    </linearGradient>
                </defs>

                {/* Círculo externo */}
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#wheelGradient)" strokeWidth="3" />

                {/* Círculo interno (hub) */}
                <circle cx="50" cy="50" r="12" fill="none" stroke="url(#wheelGradient)" strokeWidth="2" />

                {/* 8 raios (representando o Nobre Caminho Óctuplo) */}
                {[...Array(8)].map((_, i) => (
                    <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                        <line
                            x1="50"
                            y1="12"
                            x2="50"
                            y2="5"
                            stroke="url(#wheelGradient)"
                            strokeWidth="2"
                        />
                        <line
                            x1="50"
                            y1="38"
                            x2="50"
                            y2="12"
                            stroke="url(#wheelGradient)"
                            strokeWidth="1.5"
                        />
                    </g>
                ))}

                {/* Centro da roda */}
                <circle cx="50" cy="50" r="5" fill="url(#wheelGradient)" />
            </motion.svg>
        </div>
    );
}

// Flor de Lótus flutuante
function LotusFlower({ x, y, delay, scale = 1 }) {
    return (
        <motion.svg
            className="absolute pointer-events-none"
            style={{ left: x, top: y }}
            width={60 * scale}
            height={60 * scale}
            viewBox="0 0 100 100"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: [0.3, 0.5, 0.3],
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
            }}
        >
            {/* Pétalas de lótus */}
            {[...Array(8)].map((_, i) => (
                <ellipse
                    key={i}
                    cx="50"
                    cy="35"
                    rx="12"
                    ry="25"
                    fill={`${buddhistColors.lotus}40`}
                    stroke={buddhistColors.lotus}
                    strokeWidth="0.5"
                    transform={`rotate(${i * 45} 50 50)`}
                />
            ))}
            {/* Centro */}
            <circle cx="50" cy="50" r="10" fill={`${buddhistColors.gold}60`} />
        </motion.svg>
    );
}

// Partículas de meditação/incenso
function MeditationParticles() {
    const particles = [...Array(15)].map((_, i) => ({
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
                        background: `radial-gradient(circle, ${buddhistColors.gold}60, ${buddhistColors.saffron}30)`,
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

// Enso (círculo zen) decorativo
function EnsoCircle({ className = "", size = 300, opacity = 0.1 }) {
    return (
        <motion.svg
            className={`absolute pointer-events-none ${className}`}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity }}
            transition={{ duration: 2 }}
        >
            <defs>
                <linearGradient id="ensoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={buddhistColors.gold} />
                    <stop offset="50%" stopColor={buddhistColors.saffron} />
                    <stop offset="100%" stopColor={buddhistColors.maroon} />
                </linearGradient>
            </defs>

            {/* Círculo Enso (incompleto, estilo pincel) */}
            <motion.path
                d="M 50 10 
                   A 40 40 0 1 1 45 10"
                fill="none"
                stroke="url(#ensoGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
        </motion.svg>
    );
}

// Texto decorativo em Pali
function PaliDecor() {
    const verses = [
        "बुद्धं सरणं गच्छामि",  // Tomo refúgio no Buda
        "धम्मं सरणं गच्छामि",  // Tomo refúgio no Dharma
        "सङ्घं सरणं गच्छामि",  // Tomo refúgio na Sangha
        "निब्बान",              // Nirvana
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {verses.map((verse, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl font-serif whitespace-nowrap"
                    style={{
                        color: `${buddhistColors.gold}12`,
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
                    {verse}
                </motion.div>
            ))}
        </div>
    );
}

// Card estilo templo budista
function TempleCard({ children, delay = 0, fromLeft = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {/* Borda decorativa superior com estilo pagode */}
            <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${buddhistColors.gold}, ${buddhistColors.saffron}, ${buddhistColors.gold}, transparent)`
                }}
            />

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 rounded-2xl border relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.5), rgba(74,124,89,0.15))`,
                    borderColor: `${buddhistColors.gold}30`,
                    borderWidth: '1px',
                }}
            >
                {/* Decoração de cantos estilo oriental */}
                <div
                    className="absolute top-0 left-0 w-6 h-6"
                    style={{
                        borderTop: `2px solid ${buddhistColors.gold}`,
                        borderLeft: `2px solid ${buddhistColors.gold}`,
                        borderTopLeftRadius: '8px',
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-6 h-6"
                    style={{
                        borderTop: `2px solid ${buddhistColors.gold}`,
                        borderRight: `2px solid ${buddhistColors.gold}`,
                        borderTopRightRadius: '8px',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-6 h-6"
                    style={{
                        borderBottom: `2px solid ${buddhistColors.gold}`,
                        borderLeft: `2px solid ${buddhistColors.gold}`,
                        borderBottomLeftRadius: '8px',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-6 h-6"
                    style={{
                        borderBottom: `2px solid ${buddhistColors.gold}`,
                        borderRight: `2px solid ${buddhistColors.gold}`,
                        borderBottomRightRadius: '8px',
                    }}
                />

                {children}
            </div>

            {/* Borda decorativa inferior */}
            <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${buddhistColors.saffron}, ${buddhistColors.gold}, ${buddhistColors.saffron}, transparent)`
                }}
            />
        </motion.div>
    );
}

export default function Slide06_Budismo() {
    return (
        <SlideWrapper>
            {/* Camadas de fundo decorativas */}
            <EnsoCircle className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={600} opacity={0.06} />
            <EnsoCircle className="-top-24 -left-24" size={350} opacity={0.08} />
            <EnsoCircle className="-bottom-24 -right-24" size={350} opacity={0.08} />

            {/* Flores de lótus flutuantes */}
            <LotusFlower x="5%" y="20%" delay={0} scale={0.8} />
            <LotusFlower x="90%" y="15%" delay={1.5} scale={0.6} />
            <LotusFlower x="8%" y="70%" delay={2.5} scale={0.7} />
            <LotusFlower x="88%" y="75%" delay={3.5} scale={0.5} />

            {/* Partículas de meditação */}
            <MeditationParticles />

            {/* Texto decorativo Pali */}
            <PaliDecor />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${buddhistColors.gold}08 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${buddhistColors.zen}08 0%, transparent 50%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10 relative"
            >
                {/* Header com Roda do Dharma animada */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-10"
                >
                    <DharmaWheel />

                    <motion.h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-6"
                        style={{
                            color: buddhistColors.gold,
                            textShadow: `0 0 20px ${buddhistColors.saffron}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {buddhism.name}
                    </motion.h2>

                    {/* Subtítulo em Pali/Sânscrito */}
                    <motion.p
                        className="text-lg mt-2 font-serif italic"
                        style={{ color: `${buddhistColors.saffron}80` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        धम्म — "O Caminho do Despertar"
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <TempleCard delay={0.3} fromLeft={true}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: buddhistColors.gold }}>
                            <span>📜</span> Alegação
                            <span className="text-sm font-normal opacity-60 ml-2">बोधि</span>
                        </h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <em className="text-[#FF9500]">Sabedoria humana iluminada</em>, não revelação divina.
                            Buda não alegou falar por Deus — alegou ter{' '}
                            <strong style={{ color: buddhistColors.gold }}>descoberto a verdade</strong>{' '}
                            através da meditação e contemplação.
                        </p>
                    </TempleCard>

                    {/* Cosmovisão */}
                    <TempleCard delay={0.5} fromLeft={false}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: buddhistColors.gold }}>
                            <span>🌍</span> Cosmovisão
                            <span className="text-sm font-normal opacity-60 ml-2">लोकधातु</span>
                        </h3>
                        <ul className="text-[#E8D5B7] text-lg space-y-3">
                            <li className="flex items-start gap-2">
                                <span style={{ color: buddhistColors.lotus }}>☸</span>
                                <span>Sofrimento (<em className="text-[#FF9500]">dukkha</em>) vem do desejo/apego</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: buddhistColors.lotus }}>☸</span>
                                <span>Solução: <strong>extinguir o desejo</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: buddhistColors.lotus }}>☸</span>
                                <span className="text-red-400 font-semibold">Não há Deus criador pessoal</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: buddhistColors.lotus }}>☸</span>
                                <span>A questão de Deus é considerada <em>irrelevante</em></span>
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
                            background: `linear-gradient(90deg, ${buddhistColors.saffron}, ${buddhistColors.gold}, ${buddhistColors.saffron})`,
                            color: '#000'
                        }}
                    >
                        📚 Textos Principais
                    </div>

                    <div
                        className="p-6 pt-8 rounded-2xl border relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${buddhistColors.gold}10, ${buddhistColors.zen}10, transparent)`,
                            borderColor: `${buddhistColors.gold}25`,
                        }}
                    >
                        {/* Pequeno símbolo decorativo no canto */}
                        <span
                            className="absolute top-2 right-4 text-4xl opacity-15"
                            style={{ color: buddhistColors.gold }}
                        >
                            ☸
                        </span>

                        <p className="text-[#E8D5B7] leading-relaxed">
                            <strong style={{ color: buddhistColors.gold }}>
                                Tipitaka (Cânon Páli), Sutras Mahayana, textos tibetanos
                            </strong>{' '}
                            — compilados{' '}
                            <span className="px-2 py-0.5 rounded" style={{ background: `${buddhistColors.saffron}20`, color: buddhistColors.saffron }}>
                                séculos após Buda
                            </span>{' '}
                            (c. 563-483 a.C.). Diferentes escolas têm cânones diferentes.
                        </p>
                    </div>
                </motion.div>

                {/* Nota importante - diferencial do Budismo */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6"
                >
                    <div
                        className="p-4 rounded-xl border text-center"
                        style={{
                            background: `linear-gradient(90deg, ${buddhistColors.maroon}15, transparent, ${buddhistColors.maroon}15)`,
                            borderColor: `${buddhistColors.maroon}30`,
                        }}
                    >
                        <p className="text-white/70 text-sm italic flex items-center justify-center gap-2">
                            <span className="text-lg">⚠️</span>
                            <span>Diferente das outras tradições: <strong className="text-white/90">não alega origem divina</strong></span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
