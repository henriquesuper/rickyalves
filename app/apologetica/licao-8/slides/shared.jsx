// Shared components and utilities for Lição 8 slides
// Tema: Prisma / Tradução — Ponte entre mundos linguísticos
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES — SISTEMA TRICOLOR POR IDIOMA
// ========================================
export const colors = {
    // Hebraico (mundo semítico / deserto)
    hebrewPrimary: '#D4A574',     // Terracota quente
    hebrewSecondary: '#8B6914',   // Ocre dourado
    hebrewBg: '#FAE6D0',         // Areia clara
    hebrewDark: '#6B4226',       // Marrom terra

    // Grego (mundo mediterrâneo / mar)
    greekPrimary: '#2E5090',     // Azul profundo
    greekSecondary: '#1A365D',   // Azul noite
    greekBg: '#E8EEF6',         // Azul gelo
    greekLight: '#4A7CC9',       // Azul médio

    // Português (mundo contemporâneo / Brasil)
    portPrimary: '#2D5F2D',      // Verde floresta
    portSecondary: '#1B4332',    // Verde escuro
    portBg: '#E8F5E8',          // Verde névoa
    portLight: '#4A9F4A',        // Verde médio

    // Destaques & Continuidade
    goldAged: '#C9A962',         // Dourado (continuidade com L6/L7)
    goldBright: '#D4AF37',       // Dourado brilhante
    alertTerracota: '#A0522D',   // Vermelho terracota (tensão/escolhas)

    // Texto
    textDark: '#2C1810',         // Marrom escuro (corpo principal)
    textBlack: '#1A1A1A',        // Quase preto
    textMedium: '#6B5344',       // Marrom médio (legendas)
    textLight: '#E8DCC8',        // Texto claro sobre fundo escuro

    // Fundos
    bgCream: '#FAF6EE',         // Creme antigo
    bgWhite: '#FFFFFF',          // Branco puro
    bgDeep: '#1A1410',           // Fundo escuro
    bgSurface: '#2C2218',        // Superfície escura

    // Spectrum (formal → dinâmico)
    spectrumFormal: '#1A365D',   // Azul escuro (formal)
    spectrumDynamic: '#4A9F4A',  // Verde claro (dinâmico)
};

// ========================================
// PERGUNTAS DO QUIZ INTERATIVO
// ========================================
export const quizQuestions = [
    {
        id: 1,
        question: "Toda tradução da Bíblia diz a mesma coisa — as diferenças são só de estilo.",
        icon: "📖",
        correctAnswer: "nao",
        revealSlides: [11, 12]
    },
    {
        id: 2,
        question: "'Alma' no hebraico significa a mesma coisa que 'alma' na filosofia grega — uma essência imortal separada do corpo.",
        icon: "👻",
        correctAnswer: "nao",
        revealSlides: [16, 17]
    },
    {
        id: 3,
        question: "'Jeová' é o nome original de Deus em hebraico.",
        icon: "✡️",
        correctAnswer: "nao",
        revealSlides: [19, 20]
    },
    {
        id: 4,
        question: "A NVI é a tradução mais fiel ao texto original em português.",
        icon: "📚",
        correctAnswer: "talvez",
        revealSlides: [22, 23]
    },
    {
        id: 5,
        question: "Se a tradução perfeita é impossível, então não podemos realmente confiar na Bíblia em português.",
        icon: "🤔",
        correctAnswer: "nao",
        revealSlides: [30, 31]
    }
];

export const TOTAL_QUIZ_QUESTIONS = quizQuestions.length;

// ========================================
// REAÇÕES CONTEXTUAIS (PARA LIÇÃO 8)
// ========================================
export const reactions = [
    { type: 'mindBlown', icon: '🤯', label: 'Mente explodiu', color: 'from-purple-700 to-violet-600' },
    { type: 'interesting', icon: '🔤', label: 'Que interessante', color: 'from-blue-700 to-cyan-600' },
    { type: 'makeSense', icon: '✅', label: 'Faz sentido agora', color: 'from-green-700 to-emerald-600' },
    { type: 'needStudy', icon: '📖', label: 'Preciso estudar mais', color: 'from-amber-700 to-yellow-600' },
    { type: 'doubt', icon: '❓', label: 'Tenho dúvida', color: 'from-orange-700 to-amber-600' },
    { type: 'beautiful', icon: '✨', label: 'Que lindo!', color: 'from-rose-600 to-pink-500' }
];

// Mapeamento para uso no viewer
export const reactionIcons = reactions.reduce((acc, r) => {
    acc[r.type] = r.icon;
    return acc;
}, {});

// ========================================
// NOTAS DO INSTRUTOR POR SLIDE
// ========================================
export const slideNotes = {
    0: { // Quiz
        title: "Quiz de Abertura",
        notes: [
            "5 perguntas sobre tradução bíblica",
            "Não revele as respostas - ela descobre durante a aula",
            "💡 'Vamos testar suas intuições sobre tradução bíblica'"
        ]
    },
    1: {
        title: "Título — Tradução Bíblica",
        notes: [
            "Conectar com L7: 'Temos o texto. Agora: como ele chega em português?'",
            "Espere a Guga escanear o QR se necessário",
            "💡 Tema: uma verdade, múltiplas expressões"
        ]
    },
    2: {
        title: "A Ponte",
        notes: [
            "Recap rápido da L7: 5.800+ manuscritos, Mar Morto",
            "Pergunta de hoje: está lendo o que foi escrito?",
            "💡 Resposta curta: sim. Resposta longa: esta aula inteira"
        ]
    },
    3: {
        title: "O Provérbio Italiano",
        notes: [
            "Traduttore, traditore — Tradutor, traidor",
            "Não porque tradutores mentem, mas porque línguas não são códigos",
            "💡 Línguas são mundos inteiros"
        ]
    },
    4: {
        title: "Hebraico: A Língua do AT",
        notes: [
            "Direita para esquerda, sem vogais, raízes de 3 letras",
            "Extraordinariamente concreto e sensorial",
            "💡 Gn 1:1 em hebraico = 7 palavras; em português = 10+"
        ]
    },
    5: {
        title: "Raízes Trilíteras",
        notes: [
            "k-t-b (כתב) = escrever → familia inteira de palavras",
            "Jogos linguísticos se perdem na tradução",
            "💡 Quando um autor usa várias palavras da mesma raiz, é intencional"
        ]
    },
    6: {
        title: "O Hebraico Pensa com o Corpo ★★★",
        notes: [
            "Raiva = nariz (af). Compaixão = útero (rachamim). Paciência = nariz comprido",
            "⚠️ Rachamim: como terapeuta, ela vai captar imediatamente",
            "⚠️ NÃO force conexão com a ferida — se ela conectar, ouça"
        ]
    },
    7: {
        title: "Grego Koiné: A Língua do NT",
        notes: [
            "Não era o grego de Platão — era o 'inglês' do Império Romano",
            "Tempos verbais com nuances que o português não tem",
            "💡 Vocabulário rico onde temos uma só palavra"
        ]
    },
    8: {
        title: "Tetelestai — Está Consumado ★",
        notes: [
            "Perfeito grego: ação completada com efeitos permanentes",
            "'Foi feito e PERMANECE feito'",
            "💡 Duas palavras em português, um universo no grego"
        ]
    },
    9: {
        title: "Os Quatro Amores + Aramaico de Jesus",
        notes: [
            "Agape/philia/eros/storge — João 21 jogo dramático",
            "Talitha cumi, Eloi Eloi — fragmentos de áudio sem gravador",
            "💡 Abba = Papai (Marcos 14:36)"
        ]
    },
    10: {
        title: "O Problema Fundamental",
        notes: [
            "Nephesh = uma palavra hebraica, 8+ traduções possíveis",
            "Cada tradução é uma ESCOLHA, cada escolha é um RECORTE",
            "💡 É por isso que tradução perfeita é impossível"
        ]
    },
    11: {
        title: "O Espectro da Tradução",
        notes: [
            "🔔 Quiz pergunta 1 será respondida aqui",
            "FORMAL (ARC/ARA) ↔ DINÂMICA (NVT/NTLH)",
            "💡 Não existe 'a melhor' — existe 'a melhor para quê'"
        ]
    },
    12: {
        title: "Equivalência Formal vs. Dinâmica",
        notes: [
            "Formal: preserva forma, pode soar estranho",
            "Dinâmica: reproduz impacto, mais interpretação do tradutor",
            "💡 Ambas são legítimas, ambas têm trade-offs"
        ]
    },
    13: {
        title: "Filipenses 2:6 — Um Verso, Cinco Traduções",
        notes: [
            "Harpagmon: 'usurpação' vs 'algo a reter' vs 'ficar igual'",
            "Mostrar como a mesma palavra grega produz textos diferentes",
            "⚠️ Não dizer qual está 'certa' — mostrar que cada uma recorta"
        ]
    },
    14: {
        title: "O Que Isso Mostra",
        notes: [
            "Formais mantêm ambiguidade, dinâmicas ESCOLHEM",
            "Não é problema — é o custo da tradução",
            "💡 O leitor que COMPARA ganha visão mais completa"
        ]
    },
    15: {
        title: "Dossiê: Casos Famosos",
        notes: [
            "Quatro casos onde tradução muda significado",
            "Tom investigativo — 'vamos abrir os dossiês'",
            "💡 Escolhas de tradução carregam TEOLOGIA"
        ]
    },
    16: {
        title: "Nephesh: Não É 'Alma' Grega ★★★",
        notes: [
            "🔔 Quiz pergunta 2 será respondida aqui",
            "Nephesh = ser vivente, vida, pessoa, apetite, garganta",
            "⚠️ Isso NÃO é 'alma imortal' — isso é Platão, não Moisés"
        ]
    },
    17: {
        title: "Por Que Nephesh Importa",
        notes: [
            "Platão vs hebraico: dualismo vs holismo",
            "Traduzir nephesh como 'alma imortal' = importar filosofia grega",
            "💡 Adventista: holismo, morte como sono, ressurreição do corpo"
        ]
    },
    18: {
        title: "Quem Matou Golias? ★",
        notes: [
            "NVI insere 'o irmão de' sem avisar — protege o leitor",
            "NAA mantém o hebraico e explica em nota",
            "💡 Para leitor sério e cético: transparência > proteção"
        ]
    },
    19: {
        title: "Os Nomes de Deus: YHWH ★★",
        notes: [
            "🔔 Quiz pergunta 3 será respondida aqui",
            "YHWH + vogais de Adonai = 'Jeová' — Frankenstein linguístico",
            "💡 Provavelmente pronunciado Yahweh"
        ]
    },
    20: {
        title: "O Que Se Perde: SENHOR vs YHWH",
        notes: [
            "SENHOR (versaletes) = YHWH — nome pessoal, íntimo",
            "Senhor (normal) = Adonai — título genérico",
            "💡 Toda vez que lê SENHOR, há um nome próprio escondido"
        ]
    },
    21: {
        title: "Panorama: Traduções em Português",
        notes: [
            "Espectro visual: ARC → ARA → NAA → NVI → NVT → NTLH",
            "Formal à esquerda, dinâmica à direita",
            "💡 Cada uma tem seu lugar"
        ]
    },
    22: {
        title: "A Família Almeida + NAA",
        notes: [
            "🔔 Quiz pergunta 4 — parcialmente respondida aqui",
            "João Ferreira de Almeida (1628-1691) → ARC → ARA → NAA",
            "💡 NAA é a melhor da família para estudo sério"
        ]
    },
    23: {
        title: "NVI, NVT e Outras",
        notes: [
            "NVI: excelente mas harmoniza tensões",
            "NVT: linguagem contemporânea, boa primeira leitura",
            "💡 Bíblia de Jerusalém: notas incomparáveis"
        ]
    },
    24: {
        title: "Recomendação Prática",
        notes: [
            "Leitura contínua: NVT/NVI. Estudo: NAA. Pesquisa: Bíblia de Jerusalém",
            "Desempate: consulte a NTLH",
            "💡 MELHOR ABORDAGEM: usar mais de uma!"
        ]
    },
    25: {
        title: "Nota sobre a King James",
        notes: [
            "KJV (1611): Textus Receptus, manuscritos inferiores",
            "Excelente para sua época, mas temos manuscritos melhores hoje",
            "💡 Conexão com L7: Comma Johanneum"
        ]
    },
    26: {
        title: "Ferramentas para Ir Além",
        notes: [
            "Bible Hub, Blue Letter Bible, Interlineares online",
            "Não precisa saber grego/hebraico — precisa saber comparar",
            "💡 Espírito bereano (Atos 17:11)"
        ]
    },
    27: {
        title: "Exercício: Romanos 3:25 ★",
        notes: [
            "Hilastērion: propiciação/expiação/propiciatório",
            "Mostrar 5 traduções lado a lado",
            "💡 Exercício prático de comparação"
        ]
    },
    28: {
        title: "Análise do Exercício",
        notes: [
            "ARC/NAA: 'propiciação' — preciso mas incompreensível",
            "NVT/NTLH: reformulam — acessível mas perde nuance",
            "💡 Nenhuma está errada. Quem compara ganha visão completa"
        ]
    },
    29: {
        title: "Isaías 7:14: Virgem ou Jovem?",
        notes: [
            "Almah ≠ betulah. Septuaginta traduziu como parthenos",
            "Depende: traduz o que Isaías quis dizer ou o que Mateus entendeu?",
            "💡 Ambiguidade no original gera interpretações diferentes"
        ]
    },
    30: {
        title: "Limitações Honestas",
        notes: [
            "🔔 Quiz pergunta 5 — parcialmente respondida aqui",
            "Jogos de palavras, acrósticos, ambiguidades se perdem",
            "💡 Petros/petra, Salmo 119 — estrutura artística desaparece"
        ]
    },
    31: {
        title: "O Que a Tradução PODE Fazer ★",
        notes: [
            "Mensagem essencial chega com alta fidelidade",
            "Poder narrativo funciona em qualquer idioma",
            "💡 Vulnerabilidade + integridade: a Bíblia se oferece ao escrutínio"
        ]
    },
    32: {
        title: "Encerramento",
        notes: [
            "Resumo: escribas, comunidades, estudiosos, equipes de tradução",
            "Isaías 1:18 — 'Vinde, pois, e arrazoemos'",
            "Preview: Lição 9 — Autoria Bíblica"
        ]
    }
};

// ========================================
// POSIÇÕES DE PARTÍCULAS PRISMÁTICAS
// ========================================
const prismPositions = [
    { left: 5, top: 12, duration: 10, delay: 0.5, size: 3, hue: 0 },
    { left: 15, top: 85, duration: 12, delay: 1.2, size: 2, hue: 30 },
    { left: 25, top: 30, duration: 8, delay: 2.8, size: 3, hue: 60 },
    { left: 35, top: 65, duration: 11, delay: 0.3, size: 2, hue: 120 },
    { left: 45, top: 20, duration: 9, delay: 3.5, size: 3, hue: 180 },
    { left: 55, top: 90, duration: 13, delay: 1.8, size: 2, hue: 210 },
    { left: 65, top: 45, duration: 8, delay: 4.2, size: 3, hue: 240 },
    { left: 75, top: 70, duration: 14, delay: 0.8, size: 2, hue: 280 },
    { left: 85, top: 15, duration: 9, delay: 2.1, size: 3, hue: 320 },
    { left: 95, top: 55, duration: 11, delay: 3.9, size: 2, hue: 45 },
    { left: 10, top: 50, duration: 7, delay: 0.1, size: 2, hue: 160 },
    { left: 50, top: 80, duration: 10, delay: 0.4, size: 3, hue: 200 },
    { left: 90, top: 35, duration: 9, delay: 0.7, size: 2, hue: 100 },
];

// ========================================
// COMPONENTE: PARTÍCULAS PRISMÁTICAS
// ========================================
export function PrismaticDust() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {prismPositions.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        background: `radial-gradient(circle, hsla(${particle.hue}, 70%, 60%, 0.4) 0%, transparent 70%)`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: particle.size * 4,
                        height: particle.size * 4,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, Math.sin(i) * 15, 0],
                        opacity: [0.15, 0.5, 0.15],
                        scale: [0.8, 1.3, 0.8],
                        filter: [
                            `hue-rotate(0deg)`,
                            `hue-rotate(${30 + i * 10}deg)`,
                            `hue-rotate(0deg)`
                        ]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}

// ========================================
// COMPONENTE: TEXTURA DE FUNDO SUTIL
// ========================================
export function SubtleTexture({ variant = 'neutral', opacity = 0.04 }) {
    const textureColors = {
        hebrew: [colors.hebrewPrimary, colors.hebrewSecondary, colors.hebrewBg],
        greek: [colors.greekPrimary, colors.greekSecondary, colors.greekBg],
        portuguese: [colors.portPrimary, colors.portSecondary, colors.portBg],
        neutral: [colors.goldAged, colors.textMedium, colors.bgCream],
    };

    const [primary, secondary, bg] = textureColors[variant] || textureColors.neutral;
    const hex = Math.round(opacity * 255).toString(16).padStart(2, '0');

    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
                    radial-gradient(ellipse at 20% 30%, ${primary}${hex} 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 70%, ${secondary}${hex} 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 50%, ${bg}${Math.round(opacity * 0.5 * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)
                `,
            }}
        />
    );
}

// ========================================
// COMPONENTE: SLIDE WRAPPER
// ========================================
export function SlideWrapper({ children, className = '', variant = 'neutral' }) {
    const bgGradients = {
        neutral: `linear-gradient(135deg, ${colors.bgDeep} 0%, #1F1A15 50%, ${colors.bgDeep} 100%)`,
        hebrew: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.hebrewDark}40 50%, ${colors.bgDeep} 100%)`,
        greek: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.greekSecondary}30 50%, ${colors.bgDeep} 100%)`,
        portuguese: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.portSecondary}30 50%, ${colors.bgDeep} 100%)`,
        alert: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.alertTerracota}20 50%, ${colors.bgDeep} 100%)`,
        golden: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.goldAged}15 50%, ${colors.bgDeep} 100%)`,
    };

    return (
        <div className={`slide-content ${className}`}>
            <div
                className="relative min-h-screen flex items-center justify-center py-12"
                style={{ background: bgGradients[variant] || bgGradients.neutral }}
            >
                <SubtleTexture variant={variant} />
                <PrismaticDust />
                {children}
            </div>
        </div>
    );
}

// ========================================
// COMPONENTE: PRISM CARD (substitui ParchmentCard)
// ========================================
export function PrismCard({ children, delay = 0, className = '', variant = 'neutral', highlight = false }) {
    const borderColors = {
        neutral: colors.goldAged,
        hebrew: colors.hebrewPrimary,
        greek: colors.greekPrimary,
        portuguese: colors.portPrimary,
        alert: colors.alertTerracota,
    };

    const borderColor = borderColors[variant] || colors.goldAged;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`relative ${className}`}
        >
            {/* Borda decorativa superior */}
            <div
                className="absolute -top-1 left-8 right-8 h-0.5"
                style={{
                    background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`
                }}
            />

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 rounded-xl border relative overflow-hidden"
                style={{
                    background: highlight
                        ? `linear-gradient(135deg, ${colors.bgSurface}90, ${borderColor}20)`
                        : `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.bgDeep}80)`,
                    borderColor: `${borderColor}40`,
                    boxShadow: highlight
                        ? `0 0 30px ${borderColor}20, inset 0 1px 0 ${colors.textLight}10`
                        : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 ${colors.textLight}05`
                }}
            >
                {/* Cantos decorativos */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor }} />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor }} />

                {children}
            </div>

            {/* Borda decorativa inferior */}
            <div
                className="absolute -bottom-1 left-8 right-8 h-0.5"
                style={{
                    background: `linear-gradient(90deg, transparent, ${borderColor}80, transparent)`
                }}
            />
        </motion.div>
    );
}

// ========================================
// COMPONENTE: SELO DE CERA (continuidade com L7)
// ========================================
export function WaxSeal({ icon = "📜", size = "md", delay = 0, className = "", number = null }) {
    const sizeClasses = {
        sm: "w-12 h-12 text-lg",
        md: "w-16 h-16 text-2xl",
        lg: "w-20 h-20 text-3xl"
    };

    return (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay, type: "spring", stiffness: 200 }}
            className={`relative ${className}`}
        >
            <div
                className="absolute inset-0 rounded-full blur-lg"
                style={{ background: colors.alertTerracota, opacity: 0.3 }}
            />
            <div
                className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center`}
                style={{
                    background: `radial-gradient(circle at 30% 30%, #C94A3A, ${colors.alertTerracota}, #6B1010)`,
                    boxShadow: `0 4px 8px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.3)`
                }}
            >
                {number !== null ? (
                    <span className="font-bold text-white drop-shadow-lg">{number}</span>
                ) : (
                    <span className="drop-shadow-lg">{icon}</span>
                )}
            </div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: LANGUAGE BADGE
// ========================================
export function LanguageBadge({ language = 'hebrew', delay = 0, className = '' }) {
    const badges = {
        hebrew: { label: 'עברית', sublabel: 'Hebraico', color: colors.hebrewPrimary, bg: colors.hebrewDark },
        greek: { label: 'Ελληνικά', sublabel: 'Grego', color: colors.greekBg, bg: colors.greekSecondary },
        portuguese: { label: 'Português', sublabel: '', color: colors.portBg, bg: colors.portSecondary },
    };

    const badge = badges[language] || badges.hebrew;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${className}`}
            style={{
                background: `${badge.bg}CC`,
                border: `1px solid ${badge.color}60`
            }}
        >
            <span style={{ color: badge.color }} className="font-bold text-sm">{badge.label}</span>
            {badge.sublabel && (
                <span style={{ color: `${badge.color}90` }} className="text-xs">{badge.sublabel}</span>
            )}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: TEXTO ORIGINAL (hebraico/grego)
// ========================================
export function OriginalText({ text, language = 'hebrew', size = 'lg', delay = 0, className = '' }) {
    const styles = {
        hebrew: {
            color: colors.hebrewPrimary,
            direction: 'rtl',
            fontFamily: "'SBL Hebrew', 'Ezra SIL', 'Frank Ruehl', serif",
        },
        greek: {
            color: colors.greekPrimary,
            direction: 'ltr',
            fontFamily: "'GFS Didot', 'Gentium Plus', 'Cardo', serif",
        }
    };

    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl md:text-3xl',
        lg: 'text-3xl md:text-5xl',
        xl: 'text-4xl md:text-7xl'
    };

    const style = styles[language] || styles.hebrew;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            className={`font-bold ${sizeClasses[size]} ${className}`}
            style={{
                ...style,
                textShadow: `0 0 30px ${style.color}30`
            }}
        >
            {text}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: TRANSLATION SPECTRUM
// ========================================
export function TranslationSpectrum({ translations = [], delay = 0, className = '' }) {
    // translations = [{ name: 'ARC', position: 0.05 }, { name: 'NVI', position: 0.6 }, ...]
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`w-full ${className}`}
        >
            {/* Labels */}
            <div className="flex justify-between mb-2 text-xs font-bold">
                <span style={{ color: colors.spectrumFormal }}>FORMAL</span>
                <span style={{ color: colors.spectrumDynamic }}>DINÂMICA</span>
            </div>

            {/* Barra de gradiente */}
            <div
                className="relative h-3 rounded-full mb-6"
                style={{
                    background: `linear-gradient(to right, ${colors.spectrumFormal}, ${colors.greekPrimary}, ${colors.goldAged}, ${colors.portLight}, ${colors.spectrumDynamic})`
                }}
            >
                {/* Marcadores */}
                {translations.map((t, i) => (
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: delay + 0.1 * i }}
                        className="absolute transform -translate-x-1/2"
                        style={{ left: `${t.position * 100}%`, top: '-28px' }}
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{
                                    background: `${colors.bgSurface}CC`,
                                    color: colors.textLight,
                                    border: `1px solid ${colors.goldAged}40`
                                }}
                            >
                                {t.name}
                            </span>
                            <div className="w-0.5 h-3 mt-1" style={{ background: colors.goldAged }} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Legendas */}
            <div className="flex justify-between text-xs" style={{ color: colors.textMedium }}>
                <span>← O que as palavras dizem</span>
                <span>O que o texto quer dizer →</span>
            </div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: TRANSLATION REVEAL (efeito "Tradução ao Vivo")
// ========================================
export function TranslationReveal({ original, translation, language = 'hebrew', delay = 0, className = '' }) {
    return (
        <motion.div className={`relative ${className}`}>
            {/* Original - aparece primeiro */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay, duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <OriginalText text={original} language={language} size="lg" delay={delay} />
            </motion.div>

            {/* Tradução - aparece depois com destaque */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 1.2, duration: 0.8 }}
                className="relative z-10 text-center"
            >
                <p className="text-2xl md:text-3xl font-bold" style={{ color: colors.textLight }}>
                    {translation}
                </p>
            </motion.div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: COMPARISON CARDS
// ========================================
export function ComparisonCards({ cards = [], delay = 0, className = '' }) {
    // cards = [{ label: 'ARC', type: 'formal', text: '...' }, ...]
    const typeColors = {
        formal: colors.spectrumFormal,
        optimal: colors.greekPrimary,
        dynamic: colors.spectrumDynamic,
        neutral: colors.goldAged,
    };

    return (
        <div className={`space-y-3 ${className}`}>
            {cards.map((card, i) => {
                const accentColor = typeColors[card.type] || colors.goldAged;
                return (
                    <motion.div
                        key={card.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + 0.15 * i }}
                        className="p-4 rounded-lg border-l-4"
                        style={{
                            background: `${colors.bgSurface}CC`,
                            borderLeftColor: accentColor,
                        }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded"
                                style={{ background: `${accentColor}30`, color: accentColor }}
                            >
                                {card.label}
                            </span>
                            {card.type && (
                                <span className="text-xs uppercase tracking-wider" style={{ color: colors.textMedium }}>
                                    {card.type === 'formal' ? 'Formal' : card.type === 'dynamic' ? 'Dinâmica' : card.type === 'optimal' ? 'Ótima' : ''}
                                </span>
                            )}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                            {card.text}
                        </p>
                        {card.highlight && (
                            <span className="inline-block mt-2 text-xs font-bold px-2 py-0.5 rounded"
                                style={{ background: `${colors.alertTerracota}30`, color: colors.alertTerracota }}
                            >
                                {card.highlight}
                            </span>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}

// ========================================
// COMPONENTE: IMPACT NUMBER
// ========================================
export function ImpactNumber({ number, label = "", delay = 0, color = colors.goldAged }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.8, type: "spring" }}
            className="text-center"
        >
            <span
                className="text-6xl md:text-8xl font-bold block"
                style={{
                    color,
                    textShadow: `0 0 40px ${color}50, 2px 2px 0 ${colors.bgDeep}`
                }}
            >
                {number}
            </span>
            {label && (
                <span className="text-lg mt-2 block" style={{ color: colors.textMedium }}>
                    {label}
                </span>
            )}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: SCRIBE WRITING (continuidade estilo L7)
// ========================================
export function ScribeWriting({ text, delay = 0, className = "" }) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 1.5 }}
            className={`italic ${className}`}
            style={{
                color: colors.goldAged,
                fontFamily: "'Crimson Text', Georgia, serif",
                textShadow: `1px 1px 2px ${colors.bgDeep}40`
            }}
        >
            {text}
        </motion.p>
    );
}

// ========================================
// COMPONENTE: DIVERGENCE TREE (para casos de tradução)
// ========================================
export function DivergenceTree({ original, branches = [], delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className={`flex flex-col items-center ${className}`}
        >
            {/* Palavra original */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.2, type: "spring" }}
                className="px-6 py-3 rounded-xl mb-4 text-center"
                style={{
                    background: `linear-gradient(135deg, ${colors.goldAged}20, ${colors.bgSurface})`,
                    border: `2px solid ${colors.goldAged}60`
                }}
            >
                <span className="text-2xl font-bold" style={{ color: colors.goldAged }}>{original}</span>
            </motion.div>

            {/* Linhas divergentes */}
            <div className="flex flex-wrap gap-3 justify-center">
                {branches.map((branch, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: delay + 0.4 + i * 0.15 }}
                        className="px-4 py-2 rounded-lg text-center"
                        style={{
                            background: `${colors.bgSurface}CC`,
                            border: `1px solid ${branch.color || colors.textMedium}50`,
                        }}
                    >
                        <span className="text-sm font-bold block" style={{ color: branch.color || colors.textLight }}>
                            {branch.text}
                        </span>
                        {branch.sub && (
                            <span className="text-xs block mt-1" style={{ color: colors.textMedium }}>
                                {branch.sub}
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
