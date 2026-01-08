// Shared components and utilities for slides
import { motion } from 'framer-motion';

// Cores do tema
export const colors = {
    goldAncient: '#C9A227',
    goldLight: '#E8D5B7',
    parchmentBlue: '#1E3A5F',
    bgDeep: '#0D1117',
    bgSurface: '#1A1F2E',
    truthCyan: '#00D9FF',
    vedas: '#FF9500',
    buddhism: '#FFD700',
    islam: '#2E7D32',
    mormon: '#1565C0',
    bible: '#00D9FF'
};

// Dados das tradições
export const traditions = [
    {
        id: 'vedas',
        name: 'Vedas Hindus',
        color: colors.vedas,
        icon: '🕉️',
        claim: 'Conhecimento eterno (apaurusheya — "não de origem humana"). Os Vedas foram "ouvidos" pelos sábios.',
        worldview: 'Realidade última (Brahman) é impessoal. Mundo material é maya (ilusão).',
        texts: 'Rigveda, Samaveda, Yajurveda, Atharvaveda (1500-500 a.C.)',
        scores: { coherence: 50, verifiability: 0, humanity: 30, integrity: 40, fruits: 50 }
    },
    {
        id: 'buddhism',
        name: 'Textos Budistas',
        color: colors.buddhism,
        icon: '☸️',
        claim: 'Sabedoria humana iluminada. Buda descobriu a verdade através da meditação.',
        worldview: 'Sofrimento vem do desejo. Não há Deus criador pessoal.',
        texts: 'Tipitaka (Cânon Páli), Sutras Mahayana, compilados séculos após Buda',
        scores: { coherence: 40, verifiability: 40, humanity: 50, integrity: 40, fruits: 70 }
    },
    {
        id: 'islam',
        name: 'Alcorão',
        color: colors.islam,
        icon: '☪️',
        claim: 'Ditado verbal direto de Alá através de Jibril a Maomé. Texto perfeito e inalterável.',
        worldview: 'Monoteísmo estrito (tawhid). Alá é absolutamente transcendente.',
        texts: 'Alcorão (revelado 610-632 d.C., compilado após morte de Maomé)',
        scores: { coherence: 60, verifiability: 40, humanity: 50, integrity: 60, fruits: 50 }
    },
    {
        id: 'mormon',
        name: 'Livro de Mórmon',
        color: colors.mormon,
        icon: '📜',
        claim: 'Tradução de placas de ouro por Joseph Smith através de instrumentos divinos.',
        worldview: 'Restauracionismo. Deus tem corpo físico. Potencial humano de tornar-se como Deus.',
        texts: 'Livro de Mórmon (1830), Doutrina e Convênios, Pérola de Grande Valor',
        scores: { coherence: 30, verifiability: 10, humanity: 50, integrity: 30, fruits: 50 }
    },
    {
        id: 'bible',
        name: 'Bíblia',
        color: colors.bible,
        icon: '✝️',
        claim: 'Inspiração através de autores humanos. 66 livros, ~1500 anos, ~40 autores.',
        worldview: 'Deus pessoal, criador, que se relaciona com a humanidade. Graça e redenção.',
        texts: '66 livros (39 AT + 27 NT), diversos gêneros literários',
        scores: { coherence: 85, verifiability: 80, humanity: 95, integrity: 95, fruits: 85 }
    }
];

// Critérios
export const criteria = [
    { id: 'coherence', name: 'Coerência Interna', icon: '🔗', description: 'O texto se contradiz ou mantém unidade?' },
    { id: 'verifiability', name: 'Verificabilidade Histórica', icon: '🔍', description: 'As alegações podem ser testadas?' },
    { id: 'humanity', name: 'Correspondência com Realidade', icon: '❤️', description: 'Reflete a experiência humana real?' },
    { id: 'integrity', name: 'Integridade das Fontes', icon: '📜', description: 'Podemos confiar na transmissão?' },
    { id: 'fruits', name: 'Frutos Históricos', icon: '🌳', description: 'O que produziu quando levada a sério?' }
];

// Posições fixas para partículas (evita hydration mismatch)
export const particlePositions = [
    { left: 5, top: 12, duration: 6, delay: 0.5 },
    { left: 15, top: 85, duration: 7, delay: 1.2 },
    { left: 25, top: 30, duration: 5.5, delay: 2.8 },
    { left: 35, top: 65, duration: 8, delay: 0.3 },
    { left: 45, top: 20, duration: 6.5, delay: 3.5 },
    { left: 55, top: 90, duration: 7.5, delay: 1.8 },
    { left: 65, top: 45, duration: 5, delay: 4.2 },
    { left: 75, top: 70, duration: 9, delay: 0.8 },
    { left: 85, top: 15, duration: 6.2, delay: 2.1 },
    { left: 95, top: 55, duration: 7.8, delay: 3.9 },
    { left: 10, top: 40, duration: 5.8, delay: 1.5 },
    { left: 20, top: 75, duration: 6.8, delay: 4.5 },
    { left: 30, top: 10, duration: 7.2, delay: 0.2 },
    { left: 40, top: 50, duration: 8.5, delay: 2.5 },
    { left: 50, top: 80, duration: 5.3, delay: 3.2 },
    { left: 60, top: 25, duration: 6.7, delay: 1.0 },
    { left: 70, top: 60, duration: 7.3, delay: 4.0 },
    { left: 80, top: 35, duration: 8.2, delay: 0.7 },
    { left: 90, top: 95, duration: 5.7, delay: 2.3 },
    { left: 8, top: 58, duration: 6.3, delay: 3.7 },
];

// Componente de partículas douradas
export function GoldenParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlePositions.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${colors.goldAncient} 0%, transparent 70%)`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay
                    }}
                />
            ))}
        </div>
    );
}

// Wrapper padrão para slides
export function SlideWrapper({ children, className = '' }) {
    return (
        <div className={`slide-content ${className}`}>
            <div className="relative min-h-screen flex items-center justify-center py-12">
                <GoldenParticles />
                {children}
            </div>
        </div>
    );
}

// Card para tradição religiosa
export function TraditionCard({ tradition, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl p-6 rounded-2xl border-2 hover:scale-105 transition-transform duration-300"
            style={{ borderColor: `${tradition.color}40` }}
        >
            <div className="text-center mb-4">
                <span className="text-5xl">{tradition.icon}</span>
            </div>
            <h3
                className="text-xl font-bold text-center mb-3"
                style={{ color: tradition.color }}
            >
                {tradition.name}
            </h3>
            <p className="text-sm text-[#E8D5B7]/80 mb-3">
                {tradition.claim}
            </p>
            <p className="text-xs text-white/50 italic">
                {tradition.texts}
            </p>
        </motion.div>
    );
}
