'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, traditions } from './shared';

const islam = traditions.find(t => t.id === 'islam');

// Cores tradicionais islâmicas
const islamicColors = {
    green: '#009639',         // Verde islâmico - cor do Paraíso e do Profeta
    gold: '#D4AF37',          // Dourado - iluminação e sabedoria divina
    royalBlue: '#1E3A5F',     // Azul real - infinito celestial
    white: '#F5F5F5',         // Branco - pureza
    turquoise: '#40E0D0',     // Turquesa - proteção divina
    deepGreen: '#006B3F',     // Verde profundo - devoção
    cream: '#FFFDD0',         // Creme - páginas do Alcorão
};

// Componente da Estrela e Crescente animado
function CrescentMoon() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas de luz emanando */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: `${islamicColors.gold}40` }}
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
                style={{ background: `radial-gradient(circle, ${islamicColors.green}30, transparent)` }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Crescente e Estrela SVG */}
            <motion.svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                className="z-10"
            >
                <defs>
                    <linearGradient id="crescentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={islamicColors.gold} />
                        <stop offset="100%" stopColor={islamicColors.green} />
                    </linearGradient>
                </defs>

                {/* Crescente */}
                <motion.path
                    d="M 50 15
                       A 35 35 0 1 0 50 85
                       A 25 25 0 1 1 50 15"
                    fill="url(#crescentGradient)"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Estrela */}
                <motion.path
                    d="M 72 45 L 74.5 52 L 82 52 L 76 57 L 78.5 65 L 72 60 L 65.5 65 L 68 57 L 62 52 L 69.5 52 Z"
                    fill={islamicColors.gold}
                    animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.svg>
        </div>
    );
}

// Padrão geométrico islâmico (Arabesco)
function ArabesquePattern({ className = "", size = 400, opacity = 0.1 }) {
    return (
        <motion.svg
            className={`absolute pointer-events-none ${className}`}
            width={size}
            height={size}
            viewBox="0 0 100 100"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity, rotate: 360 }}
            transition={{
                opacity: { duration: 2 },
                rotate: { duration: 200, repeat: Infinity, ease: "linear" }
            }}
        >
            <defs>
                <linearGradient id="arabesqueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={islamicColors.green} />
                    <stop offset="50%" stopColor={islamicColors.gold} />
                    <stop offset="100%" stopColor={islamicColors.turquoise} />
                </linearGradient>
            </defs>

            {/* Padrão de estrela de 8 pontas */}
            {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                    <path
                        d="M 50 10 L 55 25 L 50 40 L 45 25 Z"
                        fill="none"
                        stroke="url(#arabesqueGradient)"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="50"
                        y1="10"
                        x2="50"
                        y2="40"
                        stroke="url(#arabesqueGradient)"
                        strokeWidth="0.3"
                    />
                </g>
            ))}

            {/* Círculos concêntricos */}
            {[35, 25, 15].map((r, i) => (
                <circle
                    key={i}
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="url(#arabesqueGradient)"
                    strokeWidth="0.3"
                />
            ))}

            {/* Centro - padrão floral */}
            <circle cx="50" cy="50" r="5" fill="none" stroke="url(#arabesqueGradient)" strokeWidth="0.5" />
        </motion.svg>
    );
}

// Partículas de luz (simbolizando Nur - luz divina)
function NurParticles() {
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
                        background: `radial-gradient(circle, ${islamicColors.gold}60, ${islamicColors.green}30)`,
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

// Texto decorativo em Árabe
function ArabicDecor() {
    const verses = [
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",  // Bismillah
        "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",  // Alhamdulillah
        "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",           // Shahada
        "ٱللَّٰهُ أَكْبَرُ",                    // Allahu Akbar
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {verses.map((verse, i) => (
                <motion.div
                    key={i}
                    className="absolute text-3xl font-serif whitespace-nowrap"
                    style={{
                        color: `${islamicColors.gold}12`,
                        top: `${15 + i * 22}%`,
                        left: i % 2 === 0 ? '-5%' : 'auto',
                        right: i % 2 === 1 ? '-5%' : 'auto',
                        fontFamily: 'serif',
                        direction: 'rtl',
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

// Card estilo mesquita/islâmico
function MosqueCard({ children, delay = 0, fromLeft = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {/* Arco superior estilo mihrab */}
            <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-4 rounded-t-full"
                style={{
                    background: `linear-gradient(180deg, ${islamicColors.gold}, ${islamicColors.green})`,
                    boxShadow: `0 0 10px ${islamicColors.gold}40`
                }}
            />

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 rounded-2xl border relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,107,63,0.15))`,
                    borderColor: `${islamicColors.gold}30`,
                    borderWidth: '1px',
                }}
            >
                {/* Decoração de cantos - padrão geométrico */}
                <div
                    className="absolute top-0 left-0 w-6 h-6"
                    style={{
                        borderTop: `2px solid ${islamicColors.gold}`,
                        borderLeft: `2px solid ${islamicColors.gold}`,
                        borderTopLeftRadius: '8px',
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-6 h-6"
                    style={{
                        borderTop: `2px solid ${islamicColors.gold}`,
                        borderRight: `2px solid ${islamicColors.gold}`,
                        borderTopRightRadius: '8px',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-6 h-6"
                    style={{
                        borderBottom: `2px solid ${islamicColors.gold}`,
                        borderLeft: `2px solid ${islamicColors.gold}`,
                        borderBottomLeftRadius: '8px',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-6 h-6"
                    style={{
                        borderBottom: `2px solid ${islamicColors.gold}`,
                        borderRight: `2px solid ${islamicColors.gold}`,
                        borderBottomRightRadius: '8px',
                    }}
                />

                {children}
            </div>

            {/* Ornamento inferior */}
            <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${islamicColors.green}, ${islamicColors.gold}, ${islamicColors.green}, transparent)`
                }}
            />
        </motion.div>
    );
}

export default function Slide07_Alcorao() {
    return (
        <SlideWrapper>
            {/* Camadas de fundo decorativas */}
            <ArabesquePattern className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={600} opacity={0.06} />
            <ArabesquePattern className="-top-24 -left-24" size={350} opacity={0.08} />
            <ArabesquePattern className="-bottom-24 -right-24" size={350} opacity={0.08} />

            {/* Partículas de Nur (luz) */}
            <NurParticles />

            {/* Texto decorativo Árabe */}
            <ArabicDecor />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${islamicColors.green}10 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${islamicColors.gold}08 0%, transparent 50%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10 relative"
            >
                {/* Header com Crescente e Estrela animados */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-10"
                >
                    <CrescentMoon />

                    <motion.h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-6"
                        style={{
                            color: islamicColors.gold,
                            textShadow: `0 0 20px ${islamicColors.green}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Alcorão
                    </motion.h2>

                    {/* Subtítulo em Árabe */}
                    <motion.p
                        className="text-lg mt-2 font-serif italic"
                        style={{ color: `${islamicColors.turquoise}80`, direction: 'rtl' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        القرآن الكريم — "A Recitação Nobre"
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <MosqueCard delay={0.3} fromLeft={true}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: islamicColors.gold }}>
                            <span>📜</span> Alegação
                            <span className="text-sm font-normal opacity-60 ml-2" style={{ direction: 'rtl' }}>وحي</span>
                        </h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong style={{ color: islamicColors.green }}>Ditado verbal direto</strong> de Alá através do anjo Jibril (Gabriel) a Maomé.
                            <span className="text-[#00D9FF]"> Não inspirado — ditado.</span> O texto árabe é
                            <strong> perfeito e inalterável</strong>; traduções são apenas "interpretações".
                        </p>
                    </MosqueCard>

                    {/* Cosmovisão */}
                    <MosqueCard delay={0.5} fromLeft={false}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: islamicColors.gold }}>
                            <span>🌍</span> Cosmovisão
                            <span className="text-sm font-normal opacity-60 ml-2" style={{ direction: 'rtl' }}>عقيدة</span>
                        </h3>
                        <ul className="text-[#E8D5B7] text-lg space-y-3">
                            <li className="flex items-start gap-2">
                                <span style={{ color: islamicColors.turquoise }}>☪</span>
                                <span>Monoteísmo estrito (<em className="text-[#40E0D0]">tawhid</em>)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: islamicColors.turquoise }}>☪</span>
                                <span>Alá é absolutamente transcendente, não "Pai"</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: islamicColors.turquoise }}>☪</span>
                                <span>Jesus foi profeta, <strong className="text-red-400">não divino</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: islamicColors.turquoise }}>☪</span>
                                <span>Maomé é o "selo dos profetas" — revelação final</span>
                            </li>
                        </ul>
                    </MosqueCard>
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
                            background: `linear-gradient(90deg, ${islamicColors.green}, ${islamicColors.gold}, ${islamicColors.green})`,
                            color: '#000'
                        }}
                    >
                        📚 Texto Principal
                    </div>

                    <div
                        className="p-6 pt-8 rounded-2xl border relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${islamicColors.green}10, ${islamicColors.gold}05, transparent)`,
                            borderColor: `${islamicColors.gold}25`,
                        }}
                    >
                        {/* Pequeno símbolo decorativo no canto */}
                        <span
                            className="absolute top-2 right-4 text-4xl opacity-15"
                            style={{ color: islamicColors.gold }}
                        >
                            ☪
                        </span>

                        <p className="text-[#E8D5B7] leading-relaxed">
                            <strong style={{ color: islamicColors.gold }}>
                                Alcorão
                            </strong>{' '}
                            — revelado entre{' '}
                            <span className="px-2 py-0.5 rounded" style={{ background: `${islamicColors.green}20`, color: islamicColors.turquoise }}>
                                610-632 d.C.
                            </span>
                            , compilado após morte de Maomé. Recitações poéticas, leis, exortações.
                            <span className="text-white/50 block mt-2 italic">
                                ⚠️ Não segue ordem cronológica.
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* Nota sobre peculiaridade */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6"
                >
                    <div
                        className="p-4 rounded-xl border text-center"
                        style={{
                            background: `linear-gradient(90deg, ${islamicColors.royalBlue}15, transparent, ${islamicColors.royalBlue}15)`,
                            borderColor: `${islamicColors.royalBlue}30`,
                        }}
                    >
                        <p className="text-white/70 text-sm italic flex items-center justify-center gap-2">
                            <span className="text-lg">💡</span>
                            <span>Peculiaridade: versos "<strong className="text-white/90">ab-rogados</strong>" (naskh) — posteriores cancelam anteriores</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
