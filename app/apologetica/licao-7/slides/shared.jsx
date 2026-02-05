// Shared components and utilities for Lição 7 slides
// Tema: Scriptorium Medieval - Manuscritos e Transmissão Textual
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES SCRIPTORIUM MEDIEVAL
// ========================================
export const colors = {
    // Pergaminho envelhecido
    parchmentLight: '#E8DCC8',
    parchmentMid: '#D4C4A8',
    parchmentDark: '#C4B498',
    parchmentShadow: '#A89878',

    // Scriptorium / Madeira / Mosteiro
    woodDark: '#1A0F0A',
    woodMedium: '#2C1810',
    woodLight: '#3D2517',
    monasteryStone: '#4A4035',

    // Tinta & Escrita
    inkBlood: '#8B0000',       // Vermelho sangue para impacto (400.000)
    inkSepia: '#704214',       // Tinta sépia
    inkBlack: '#1A1008',       // Preto envelhecido

    // Destaques & Iluminação
    goldAged: '#C9A962',       // Dourado envelhecido
    goldBright: '#D4AF37',     // Dourado para destaques
    candleGlow: '#FFE4B5',     // Luz de vela
    candleFlame: '#FF8C00',    // Chama

    // Fundos
    bgDeep: '#0D0906',         // Fundo escuro (noite no scriptorium)
    bgSurface: '#1A1410',      // Superfície
    nightShadow: '#0A0705',    // Sombras profundas
};

// ========================================
// PERGUNTAS DO QUIZ INTERATIVO
// ========================================
export const quizQuestions = [
    {
        id: 1,
        question: "400.000 erros na Bíblia significa que não sabemos o que ela dizia originalmente.",
        icon: "📊",
        correctAnswer: "nao",
        revealSlides: [24, 25]
    },
    {
        id: 2,
        question: "Temos mais manuscritos de Platão do que da Bíblia.",
        icon: "📚",
        correctAnswer: "nao",
        revealSlides: [6, 7]
    },
    {
        id: 3,
        question: "O manuscrito mais antigo do Novo Testamento é de aproximadamente 300 d.C.",
        icon: "📅",
        correctAnswer: "nao",
        revealSlides: [10]
    },
    {
        id: 4,
        question: "Os Manuscritos do Mar Morto são do Novo Testamento.",
        icon: "🏜️",
        correctAnswer: "nao",
        revealSlides: [15]
    },
    {
        id: 5,
        question: "Alguma doutrina central do cristianismo depende de um versículo com variante textual.",
        icon: "⚠️",
        correctAnswer: "nao",
        revealSlides: [27, 35]
    },
    {
        id: 6,
        question: "A história da mulher adúltera (João 8) provavelmente não estava no evangelho original de João.",
        icon: "❓",
        correctAnswer: "sim",
        revealSlides: [29]
    }
];

export const TOTAL_QUIZ_QUESTIONS = quizQuestions.length;

// ========================================
// REAÇÕES CONTEXTUAIS (NOVAS PARA LIÇÃO 7)
// ========================================
export const reactions = [
    { type: 'fascinating', icon: '📜', label: 'Achei fascinante', color: 'from-amber-700 to-yellow-600' },
    { type: 'wantMore', icon: '🔍', label: 'Quero ver mais', color: 'from-blue-700 to-cyan-600' },
    { type: 'processing', icon: '🧐', label: 'Preciso processar', color: 'from-purple-700 to-violet-600' },
    { type: 'makesSense', icon: '✅', label: 'Faz sentido agora', color: 'from-green-700 to-emerald-600' },
    { type: 'stillDoubt', icon: '❓', label: 'Ainda tenho dúvida', color: 'from-orange-700 to-amber-600' },
    { type: 'aha', icon: '💡', label: 'Aha!', color: 'from-yellow-500 to-amber-400' }
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
            "Deixe a Guga responder sem pressa",
            "Não revele as respostas ainda",
            "💡 Essas perguntas criam expectativa para a aula"
        ]
    },
    1: {
        title: "Título — Manuscritos e Confiabilidade",
        notes: [
            "Este é o slide de abertura",
            "Espere a Guga escanear o QR se necessário",
            "💡 'Como sabemos que temos o que foi escrito?'"
        ]
    },
    2: {
        title: "A Admissão Que Assusta",
        notes: [
            "Não temos os originais de NENHUM livro",
            "Pausa para impacto antes de continuar",
            "⚠️ Deixe ela reagir antes de explicar"
        ]
    },
    3: {
        title: "Por Que Não Temos os Originais?",
        notes: [
            "Papiro dura ~200 anos, pergaminho mais",
            "Clima úmido, perseguições, cópias substituíam originais",
            "💡 Isso vale para TODOS os textos antigos"
        ]
    },
    4: {
        title: "A Pergunta Certa",
        notes: [
            "Pergunta errada: 'Temos os originais?'",
            "Pergunta certa: 'As cópias são confiáveis?'",
            "💡 Transição para a comparação devastadora"
        ]
    },
    5: {
        title: "Introdução à Comparação",
        notes: [
            "Prepare-a para os números",
            "💡 Se confia em Platão, precisa ver isso"
        ]
    },
    6: {
        title: "Tabela Comparativa (Parte 1)",
        notes: [
            "Platão: 7 manuscritos, 1.300 anos de intervalo",
            "Aristóteles: 49 manuscritos, 1.400 anos",
            "⚠️ Quiz pergunta 2 será respondida aqui"
        ]
    },
    7: {
        title: "Tabela Comparativa (Parte 2 — O Choque)",
        notes: [
            "NT: 25.000+ manuscritos, 25-75 anos de intervalo",
            "MIL vezes mais evidência",
            "💡 Deixe ela absorver os números"
        ]
    },
    8: {
        title: "A Ironia",
        notes: [
            "O texto com MAIS evidência é o mais questionado",
            "Pergunte: 'Por que você acha?'",
            "💡 Porque as implicações são enormes"
        ]
    },
    9: {
        title: "Tipos de Manuscritos",
        notes: [
            "Papiros (antigos, fragmentados)",
            "Unciais (séc. IV+, maiúsculas)",
            "Minúsculos (séc. IX+, cursivos)"
        ]
    },
    10: {
        title: "P52 — O Fragmento Mais Antigo",
        notes: [
            "~125 d.C., apenas 25-30 anos após João",
            "Encontrado no EGITO, longe de Éfeso",
            "⚠️ Quiz pergunta 3 será respondida aqui"
        ]
    },
    11: {
        title: "O Texto Preservado em P52",
        notes: [
            "João 18:37-38 — 'Que é a verdade?'",
            "A pergunta cética de Pilatos preservada 1.900 anos",
            "💡 Momento de conexão: Guga faz perguntas céticas"
        ]
    },
    12: {
        title: "Os Grandes Códices",
        notes: [
            "Sinaítico, Vaticano, Alexandrino",
            "Séc. IV-V, completos ou quase",
            "💡 Disponíveis online para consulta"
        ]
    },
    13: {
        title: "A Cadeia de Transmissão",
        notes: [
            "P75 e Vaticano concordam notavelmente",
            "Destrói teoria de 'alteração ao longo dos séculos'",
            "💡 Timeline visual ajuda a fixar"
        ]
    },
    14: {
        title: "O Problema Antes de 1947",
        notes: [
            "Códice de Leningrado: 1008 d.C.",
            "Dúvida legítima: preservação por mil anos?",
            "💡 Prepara para a descoberta do Mar Morto"
        ]
    },
    15: {
        title: "1947: A Descoberta",
        notes: [
            "Pastor beduíno, caverna, jarros",
            "Manuscritos do AT, não NT",
            "⚠️ Quiz pergunta 4 será respondida aqui"
        ]
    },
    16: {
        title: "O Grande Rolo de Isaías",
        notes: [
            "7,34 metros, todos os 66 capítulos",
            "~125 a.C., completo",
            "💡 Impressionante visualmente"
        ]
    },
    17: {
        title: "O Experimento Não Planejado",
        notes: [
            "Isaías 125 a.C. vs 1008 d.C.",
            "1.133 anos de diferença, concordância extraordinária",
            "💡 Isaías 53 quase idêntico palavra por palavra"
        ]
    },
    18: {
        title: "O Impacto",
        notes: [
            "Experimento científico acidental",
            "Resultado devastador para céticos",
            "💡 Texto hebraico preservado com fidelidade notável"
        ]
    },
    19: {
        title: "Quem Eram os Massoretas",
        notes: [
            "Escribas judeus ~500-1000 d.C.",
            "Sistema obsessivo de preservação",
            "💡 Tradição = masorah em hebraico"
        ]
    },
    20: {
        title: "O Sistema de Preservação",
        notes: [
            "Regras rigorosas: material, tinta, colunas, revisão",
            "1 erro na folha = folha destruída",
            "💡 3 erros = manuscrito inteiro enterrado"
        ]
    },
    21: {
        title: "A Contagem Obsessiva",
        notes: [
            "Contavam tudo: letras, palavras, letra do meio",
            "Verificação matemática",
            "💡 Se não batia, tinha erro"
        ]
    },
    22: {
        title: "O Número Que Assusta",
        notes: [
            "400.000 variantes — parece catastrófico",
            "Mas vamos entender o que realmente significa",
            "⚠️ Quiz pergunta 1 será respondida nos próximos slides"
        ]
    },
    23: {
        title: "A Matemática das Variantes",
        notes: [
            "Mais manuscritos = mais variantes contadas",
            "MAS também mais certeza sobre o original",
            "💡 Paradoxo: quantidade = confiança"
        ]
    },
    24: {
        title: "O Que Conta Como 'Variante'",
        notes: [
            "Ortografia, ordem de palavras, artigos",
            "Mesma pronúncia ou significado = conta",
            "💡 A maioria são triviais"
        ]
    },
    25: {
        title: "Categorias de Variantes",
        notes: [
            "75% trivial, 24% insignificante, 1% afeta versículo",
            "0% afeta doutrina essencial",
            "💡 Gráfico visual ajuda muito"
        ]
    },
    26: {
        title: "Analogia da Eleição",
        notes: [
            "3 votos = incerto, 10.000 votos = padrão claro",
            "Mais manuscritos = mais certeza",
            "💡 Analogia simples e eficaz"
        ]
    },
    27: {
        title: "A Garantia",
        notes: [
            "Toda doutrina tem MÚLTIPLAS bases bíblicas",
            "Divindade, ressurreição, salvação pela graça",
            "⚠️ Quiz pergunta 5 será respondida aqui"
        ]
    },
    28: {
        title: "Honestidade Total",
        notes: [
            "Vamos enfrentar variantes que céticos citam",
            "Honestidade fortalece, não destrói",
            "💡 Prepara para João 8, Marcos 16, 1 João 5"
        ]
    },
    29: {
        title: "João 7:53-8:11 (Mulher Adúltera)",
        notes: [
            "Provavelmente não estava no original de João",
            "MAS não significa que é falsa",
            "⚠️ Quiz pergunta 6 será confirmada aqui"
        ]
    },
    30: {
        title: "Marcos 16:9-20 (Final Longo)",
        notes: [
            "Provavelmente adição posterior",
            "Ressurreição confirmada em muitos outros textos",
            "💡 Impacto doutrinário: zero"
        ]
    },
    31: {
        title: "1 João 5:7-8 (Comma Johanneum)",
        notes: [
            "Ausente em 5.800+ manuscritos gregos",
            "Trindade NÃO depende deste versículo",
            "💡 Bíblias modernas removeram"
        ]
    },
    32: {
        title: "Por Que Bíblias Diferentes?",
        notes: [
            "Bíblias antigas = manuscritos tardios",
            "Bíblias modernas = manuscritos mais antigos",
            "💡 Isso é bom, não ruim — transparência"
        ]
    },
    33: {
        title: "Crítica Textual Como Ciência",
        notes: [
            "Critérios objetivos, não achismo",
            "Manuscritos antigos, regiões diferentes, leitura difícil",
            "💡 99% de certeza sobre o texto original"
        ]
    },
    34: {
        title: "Resumo Final",
        notes: [
            "25.000+ manuscritos vs 7 de Platão",
            "Intervalos de décadas vs milênios",
            "💡 Números impactantes para encerrar"
        ]
    },
    35: {
        title: "A Frase de Fechamento",
        notes: [
            "Se não confia na Bíblia, não confia em nada",
            "Texto antigo mais confiável que existe",
            "💡 Seletivamente hipercético"
        ]
    },
    36: {
        title: "Encerramento",
        notes: [
            "Resumo do que aprendemos",
            "Preview: Lição 8 — Tradução Bíblica",
            "Oração de fechamento"
        ]
    }
};

// ========================================
// POSIÇÕES DE PARTÍCULAS (POEIRA DOURADA + LUZ DE VELA)
// ========================================
export const dustPositions = [
    { left: 5, top: 12, duration: 8, delay: 0.5, size: 2, isCandle: false },
    { left: 15, top: 85, duration: 10, delay: 1.2, size: 3, isCandle: false },
    { left: 25, top: 30, duration: 7, delay: 2.8, size: 2, isCandle: false },
    { left: 35, top: 65, duration: 9, delay: 0.3, size: 4, isCandle: false },
    { left: 45, top: 20, duration: 8, delay: 3.5, size: 2, isCandle: false },
    { left: 55, top: 90, duration: 11, delay: 1.8, size: 3, isCandle: false },
    { left: 65, top: 45, duration: 7, delay: 4.2, size: 2, isCandle: false },
    { left: 75, top: 70, duration: 12, delay: 0.8, size: 3, isCandle: false },
    { left: 85, top: 15, duration: 8, delay: 2.1, size: 2, isCandle: false },
    { left: 95, top: 55, duration: 10, delay: 3.9, size: 4, isCandle: false },
    // Partículas extras perto da "vela" (canto inferior esquerdo)
    { left: 8, top: 88, duration: 6, delay: 0.1, size: 3, isCandle: true },
    { left: 12, top: 92, duration: 5, delay: 0.4, size: 2, isCandle: true },
    { left: 6, top: 85, duration: 7, delay: 0.7, size: 2, isCandle: true },
];

// ========================================
// COMPONENTE: PARTÍCULAS FLUTUANTES
// ========================================
export function GoldenDust() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dustPositions.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        background: particle.isCandle
                            ? `radial-gradient(circle, ${colors.candleGlow}80 0%, ${colors.candleFlame}40 50%, transparent 70%)`
                            : `radial-gradient(circle, ${colors.goldAged}60 0%, transparent 70%)`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: particle.size * (particle.isCandle ? 1.5 : 1),
                        height: particle.size * (particle.isCandle ? 1.5 : 1),
                    }}
                    animate={{
                        y: [0, particle.isCandle ? -80 : -60, 0],
                        x: [0, Math.sin(i) * (particle.isCandle ? 10 : 20), 0],
                        opacity: particle.isCandle ? [0.4, 0.8, 0.4] : [0.2, 0.6, 0.2],
                        scale: [0.8, 1.2, 0.8]
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
// COMPONENTE: LUZ DE VELA (CANTO)
// ========================================
export function CandleGlow({ position = "bottom-left" }) {
    const positionClasses = {
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4"
    };

    return (
        <div className={`fixed ${positionClasses[position]} pointer-events-none z-10`}>
            {/* Glow effect */}
            <motion.div
                className="absolute w-32 h-32 rounded-full blur-2xl"
                style={{
                    background: `radial-gradient(circle, ${colors.candleGlow}30, ${colors.candleFlame}10, transparent 70%)`,
                    left: '-40px',
                    bottom: '0'
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.6, 0.7, 0.5],
                    scale: [1, 1.05, 0.98, 1.02, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            {/* Flame icon */}
            <motion.span
                className="text-2xl relative"
                animate={{
                    rotate: [-2, 2, -1, 1, -2],
                    y: [0, -2, 0, -1, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                🕯️
            </motion.span>
        </div>
    );
}

// ========================================
// COMPONENTE: TEXTURA DE PERGAMINHO
// ========================================
export function ParchmentTexture({ opacity = 0.04 }) {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
                    radial-gradient(ellipse at 20% 30%, ${colors.parchmentDark}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 70%, ${colors.inkSepia}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 50%, ${colors.parchmentLight}${Math.round(opacity * 0.5 * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)
                `,
            }}
        />
    );
}

// ========================================
// COMPONENTE: SLIDE WRAPPER
// ========================================
export function SlideWrapper({ children, className = '', showCandle = true }) {
    return (
        <div className={`slide-content ${className}`}>
            <div
                className="relative min-h-screen flex items-center justify-center py-12"
                style={{
                    background: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.woodMedium} 50%, ${colors.bgDeep} 100%)`
                }}
            >
                <ParchmentTexture />
                <GoldenDust />
                {showCandle && <CandleGlow position="bottom-left" />}
                {children}
            </div>
        </div>
    );
}

// ========================================
// COMPONENTE: CARD DE PERGAMINHO
// ========================================
export function ParchmentCard({ children, delay = 0, className = '', highlight = false, danger = false }) {
    const borderColor = danger ? colors.inkBlood : colors.goldAged;

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
                        ? `linear-gradient(135deg, ${colors.woodMedium}90, ${colors.inkSepia}40)`
                        : danger
                            ? `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.inkBlood}20)`
                            : `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.woodMedium}60)`,
                    borderColor: `${borderColor}40`,
                    boxShadow: highlight
                        ? `0 0 30px ${colors.goldAged}20, inset 0 1px 0 ${colors.parchmentLight}10`
                        : danger
                            ? `0 0 30px ${colors.inkBlood}20, inset 0 1px 0 ${colors.parchmentLight}05`
                            : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 ${colors.parchmentLight}05`
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
                    background: `linear-gradient(90deg, transparent, ${colors.inkSepia}, transparent)`
                }}
            />
        </motion.div>
    );
}

// ========================================
// COMPONENTE: SELO DE CERA
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
            {/* Glow */}
            <div
                className="absolute inset-0 rounded-full blur-lg"
                style={{ background: colors.inkBlood, opacity: 0.3 }}
            />

            {/* Selo */}
            <div
                className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center`}
                style={{
                    background: `radial-gradient(circle at 30% 30%, #C94A3A, ${colors.inkBlood}, #6B1010)`,
                    boxShadow: `
                        0 4px 8px rgba(0,0,0,0.4),
                        inset 0 2px 4px rgba(255,255,255,0.2),
                        inset 0 -2px 4px rgba(0,0,0,0.3)
                    `
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
// COMPONENTE: NÚMERO DE IMPACTO (para 400.000, etc.)
// ========================================
export function ImpactNumber({ number, label = "", delay = 0 }) {
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
                    color: colors.inkBlood,
                    textShadow: `0 0 40px ${colors.inkBlood}50, 2px 2px 0 ${colors.woodDark}`
                }}
            >
                {number}
            </span>
            {label && (
                <span className="text-lg mt-2 block" style={{ color: colors.parchmentMid }}>
                    {label}
                </span>
            )}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: FRAGMENTO DE MANUSCRITO
// ========================================
export function ManuscriptFragment({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`relative ${className}`}
            style={{
                background: `linear-gradient(135deg, ${colors.parchmentLight}20, ${colors.parchmentDark}15)`,
                border: `1px solid ${colors.parchmentDark}30`,
                borderRadius: '4px 12px 4px 8px', // bordas irregulares
                padding: '1rem 1.5rem',
                boxShadow: `
                    4px 4px 8px rgba(0,0,0,0.3),
                    -2px -2px 4px rgba(255,255,255,0.05)
                `
            }}
        >
            {/* Mancha de envelhecimento */}
            <div
                className="absolute top-2 right-2 w-12 h-12 rounded-full pointer-events-none"
                style={{
                    background: `radial-gradient(circle, ${colors.inkSepia}20, transparent 70%)`
                }}
            />
            {children}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: TEXTO ESTILO ESCRIBA
// ========================================
export function ScribeWriting({ text, delay = 0, className = "" }) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 1.5 }}
            className={`italic ${className}`}
            style={{
                color: colors.inkSepia,
                fontFamily: "'Crimson Text', Georgia, serif",
                textShadow: `1px 1px 2px ${colors.inkBlack}20`
            }}
        >
            {text}
        </motion.p>
    );
}

// ========================================
// COMPONENTE: TIMELINE HISTÓRICA
// ========================================
export function TimelineEvent({ year, title, description, position = "left", delay = 0, highlight = false }) {
    const isLeft = position === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-6`}
        >
            {/* Conteúdo */}
            <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                <span
                    className="text-sm font-bold px-2 py-0.5 rounded"
                    style={{
                        color: colors.parchmentLight,
                        background: highlight ? `${colors.goldAged}30` : `${colors.inkSepia}30`
                    }}
                >
                    {year}
                </span>
                <h4 className="text-lg font-bold mt-1" style={{ color: highlight ? colors.goldAged : colors.parchmentMid }}>
                    {title}
                </h4>
                <p className="text-sm mt-1" style={{ color: `${colors.parchmentLight}90` }}>
                    {description}
                </p>
            </div>

            {/* Ponto na linha */}
            <div
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{
                    background: highlight
                        ? `radial-gradient(circle, ${colors.goldAged}, ${colors.inkSepia})`
                        : `radial-gradient(circle, ${colors.parchmentMid}, ${colors.parchmentShadow})`,
                    boxShadow: highlight ? `0 0 10px ${colors.goldAged}50` : 'none'
                }}
            />

            {/* Espaço vazio do outro lado */}
            <div className="flex-1" />
        </motion.div>
    );
}

// ========================================
// COMPONENTE: TABELA COMPARATIVA
// ========================================
export function ComparisonTable({ data, highlightLast = true, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="w-full overflow-x-auto"
        >
            <table className="w-full text-sm" style={{ color: colors.parchmentLight }}>
                <thead>
                    <tr style={{ borderBottom: `2px solid ${colors.goldAged}40` }}>
                        {Object.keys(data[0]).map((header, i) => (
                            <th
                                key={i}
                                className="py-3 px-4 text-left font-bold"
                                style={{ color: colors.goldAged }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => {
                        const isLast = rowIndex === data.length - 1;
                        const shouldHighlight = highlightLast && isLast;

                        return (
                            <motion.tr
                                key={rowIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: delay + rowIndex * 0.1 }}
                                style={{
                                    background: shouldHighlight ? `${colors.goldAged}15` : 'transparent',
                                    borderBottom: `1px solid ${colors.inkSepia}20`
                                }}
                            >
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`py-3 px-4 ${shouldHighlight ? 'font-bold' : ''}`}
                                        style={{
                                            color: shouldHighlight ? colors.goldBright : colors.parchmentLight
                                        }}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </motion.tr>
                        );
                    })}
                </tbody>
            </table>
        </motion.div>
    );
}
