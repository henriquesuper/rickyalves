// Shared components and utilities for Lição 6 slides
// Tema: Pergaminho/Escriba - A Formação do Cânon Bíblico
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES PERGAMINHO/ESCRIBA
// ========================================
export const colors = {
    // Pergaminho e papel
    parchmentLight: '#F5E6C8',
    parchmentMid: '#E8D5B7',
    parchmentDark: '#D4C4A8',
    sepia: '#704214',
    inkBrown: '#3D2314',
    inkBlack: '#1A0F0A',

    // Acentos (iluminuras medievais)
    goldLeaf: '#C9A227',
    goldLight: '#E8D5B7',
    vermillion: '#E34234',
    lapis: '#1E3A5F',
    forest: '#2D5A3D',

    // Fundos
    libraryWood: '#2C1810',
    vellum: '#F8F0E3',
    aged: '#8B7355',
    bgDeep: '#0D0906',
    bgSurface: '#1A1410',
};

// ========================================
// PERGUNTAS DO QUIZ INTERATIVO
// ========================================
export const quizQuestions = [
    {
        id: 1,
        question: "Você acha que um grupo de bispos sentou numa sala e votou quais livros entrariam na Bíblia?",
        icon: "🗳️"
    },
    {
        id: 2,
        question: "A Bíblia católica tem 7 livros a mais que a protestante. Isso significa que uma das duas está 'incompleta'?",
        icon: "📚"
    },
    {
        id: 3,
        question: "Os 27 livros do Novo Testamento foram decididos num único concílio no ano 325 d.C. (Niceia)?",
        icon: "⚖️"
    },
    {
        id: 4,
        question: "Você acha que existe algum 'evangelho perdido' que a igreja suprimiu para esconder a verdade?",
        icon: "🔍"
    },
    {
        id: 5,
        question: "A ordem dos livros na Bíblia hebraica é a mesma da nossa Bíblia protestante?",
        icon: "📜"
    },
    {
        id: 6,
        question: "Você acha que todos os 66 livros foram aceitos sem nenhum debate ou questionamento?",
        icon: "❓"
    }
];

// Número total de perguntas do quiz
export const TOTAL_QUIZ_QUESTIONS = quizQuestions.length;

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
        title: "A Formação do Cânon Bíblico",
        notes: [
            "Este é o slide de abertura",
            "Espere a Guga escanear o QR se necessário",
            "💡 O termo 'cânon' vai ser explicado no próximo slide"
        ]
    },
    2: {
        title: "O Que é Cânon?",
        notes: [
            "Kanōn (κανών) = vara de medir, régua",
            "Livros que servem como padrão normativo",
            "💡 Faça a conexão: régua → padrão → autoridade"
        ]
    },
    3: {
        title: "O Que o Cânon NÃO É",
        notes: [
            "Desminta o mito da 'votação de bispos'",
            "O cânon foi RECONHECIDO, não criado",
            "⚠️ Mencione best-sellers e documentários sensacionalistas"
        ]
    },
    4: {
        title: "Tanakh — A Estrutura Hebraica",
        notes: [
            "T-N-K = Torah, Neviim, Ketuvim",
            "Jesus usava essa estrutura (Lucas 24:44)",
            "💡 Mostre que Jesus citava 'Lei, Profetas e Salmos'"
        ]
    },
    5: {
        title: "22 vs 39 Livros",
        notes: [
            "Mesmo conteúdo, contagem diferente",
            "22 letras do alfabeto hebraico",
            "💡 Josefo menciona 22 livros"
        ]
    },
    6: {
        title: "De Abel a Zacarias",
        notes: [
            "Lucas 11:50-51 — Jesus define os limites do cânon",
            "⚠️ Zacarias em Crônicas (último livro hebraico), não Malaquias",
            "💡 Isso prova que Jesus usava o cânon hebraico específico"
        ]
    },
    7: {
        title: "A Septuaginta",
        notes: [
            "LXX = tradução grega do AT",
            "Carta de Aristeias — lenda piedosa, não história",
            "💡 70 tradutores, traduções 'idênticas' — exagero"
        ]
    },
    8: {
        title: "Os Deuterocanônicos",
        notes: [
            "7 livros adicionais na Bíblia católica",
            "⚠️ Não use tom de 'católicos errados'",
            "💡 Protestantes: 'apócrifos' | Católicos: 'deuterocanônicos'"
        ]
    },
    9: {
        title: "Por Que Protestantes Não os Incluem?",
        notes: [
            "Ad fontes — voltando às fontes originais",
            "Critérios: hebraico original, reconhecido por Jesus, citado pelos apóstolos",
            "💡 Lutero: 'úteis mas não iguais às Escrituras'"
        ]
    },
    10: {
        title: "Por Que Católicos os Incluem?",
        notes: [
            "Tradição, uso litúrgico, Concílio de Trento (1546)",
            "⚠️ Respeite a tradição da Dona Marlene",
            "💡 2 Macabeus 12 — oração pelos mortos"
        ]
    },
    11: {
        title: "Diálogo Respeitoso",
        notes: [
            "Exemplo de como explicar a diferença para os filhos",
            "💡 'Critérios diferentes, não 'Bíblias erradas'",
            "⚠️ Este é um momento pastoral delicado"
        ]
    },
    12: {
        title: "O Cânon do Novo Testamento",
        notes: [
            "Paulo não pensava 'estou escrevendo Escritura'",
            "2 Pedro 3:15-16 — Pedro chama Paulo de 'Escritura'",
            "💡 1 Timóteo 5:18 cita Lucas como Escritura"
        ]
    },
    13: {
        title: "Critérios do NT",
        notes: [
            "4 critérios: Apostolicidade, Ortodoxia, Catolicidade, Uso litúrgico",
            "Processo orgânico, não comitê formal",
            "💡 Guiados pelo Espírito Santo"
        ]
    },
    14: {
        title: "Timeline Histórica",
        notes: [
            "170 d.C. — Fragmento Muratoriano",
            "367 d.C. — Carta de Atanásio (primeira lista dos 27)",
            "💡 Concílios formalizaram o que já era aceito"
        ]
    },
    15: {
        title: "Livros Debatidos",
        notes: [
            "Hebreus, Tiago, 2 Pedro, Apocalipse",
            "Questão era timing de aceitação, não rejeição",
            "💡 Lutero chamou Tiago de 'epístola de palha'"
        ]
    },
    16: {
        title: "Cantares — O Controverso",
        notes: [
            "Poesia erótica sem mencionar Deus explicitamente",
            "Rabi Akiva: 'Santo dos Santos'",
            "💡 Use humor com as metáforas (éguas, cabras, torres)"
        ]
    },
    17: {
        title: "Duas Leituras de Cantares",
        notes: [
            "Alegoria: Cristo-Igreja (Efésios 5)",
            "Literal: Celebração do casamento santo",
            "💡 Ambas são válidas e complementares"
        ]
    },
    18: {
        title: "Conexão: Pesquisa da Guga",
        notes: [
            "Conecte com a pesquisa dela sobre casamento",
            "Dados empíricos + sabedoria bíblica = validação mútua",
            "💡 Este é o momento pessoal da aula"
        ]
    },
    19: {
        title: "Discussão",
        notes: [
            "Perguntas para reflexão",
            "Deixe tempo para ela processar",
            "💡 Reconecte com as respostas do quiz inicial"
        ]
    },
    20: {
        title: "Encerramento",
        notes: [
            "Resuma os pontos principais",
            "Preview da próxima lição (se houver)",
            "Termine com oração"
        ]
    }
};

// ========================================
// POSIÇÕES DE PARTÍCULAS (POEIRA DOURADA)
// ========================================
export const dustPositions = [
    { left: 5, top: 12, duration: 8, delay: 0.5, size: 2 },
    { left: 15, top: 85, duration: 10, delay: 1.2, size: 3 },
    { left: 25, top: 30, duration: 7, delay: 2.8, size: 2 },
    { left: 35, top: 65, duration: 9, delay: 0.3, size: 4 },
    { left: 45, top: 20, duration: 8, delay: 3.5, size: 2 },
    { left: 55, top: 90, duration: 11, delay: 1.8, size: 3 },
    { left: 65, top: 45, duration: 7, delay: 4.2, size: 2 },
    { left: 75, top: 70, duration: 12, delay: 0.8, size: 3 },
    { left: 85, top: 15, duration: 8, delay: 2.1, size: 2 },
    { left: 95, top: 55, duration: 10, delay: 3.9, size: 4 },
    { left: 10, top: 40, duration: 9, delay: 1.5, size: 2 },
    { left: 20, top: 75, duration: 8, delay: 4.5, size: 3 },
    { left: 30, top: 10, duration: 10, delay: 0.2, size: 2 },
    { left: 40, top: 50, duration: 11, delay: 2.5, size: 3 },
    { left: 50, top: 80, duration: 7, delay: 3.2, size: 2 },
];

// ========================================
// COMPONENTE: PARTÍCULAS DE POEIRA DOURADA
// ========================================
export function GoldenDust() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dustPositions.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${colors.goldLeaf}60 0%, transparent 70%)`,
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -60, 0],
                        x: [0, Math.sin(i) * 20, 0],
                        opacity: [0.2, 0.6, 0.2],
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
// COMPONENTE: TEXTURA DE PERGAMINHO DE FUNDO
// ========================================
export function ParchmentTexture({ opacity = 0.03 }) {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
                    radial-gradient(ellipse at 20% 30%, ${colors.parchmentDark}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 70%, ${colors.sepia}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 0%, transparent 50%),
                    radial-gradient(ellipse at 50% 50%, ${colors.parchmentLight}${Math.round(opacity * 0.5 * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)
                `,
            }}
        />
    );
}

// ========================================
// COMPONENTE: SLIDE WRAPPER
// ========================================
export function SlideWrapper({ children, className = '' }) {
    return (
        <div className={`slide-content ${className}`}>
            <div
                className="relative min-h-screen flex items-center justify-center py-12"
                style={{
                    background: `linear-gradient(135deg, ${colors.bgDeep} 0%, ${colors.libraryWood} 50%, ${colors.bgDeep} 100%)`
                }}
            >
                <ParchmentTexture />
                <GoldenDust />
                {children}
            </div>
        </div>
    );
}

// ========================================
// COMPONENTE: CARD DE PERGAMINHO
// ========================================
export function ParchmentCard({ children, delay = 0, className = '', highlight = false }) {
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
                    background: `linear-gradient(90deg, transparent, ${colors.goldLeaf}, transparent)`
                }}
            />

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 rounded-xl border relative overflow-hidden"
                style={{
                    background: highlight
                        ? `linear-gradient(135deg, ${colors.libraryWood}90, ${colors.sepia}40)`
                        : `linear-gradient(135deg, ${colors.bgSurface}90, ${colors.libraryWood}60)`,
                    borderColor: `${colors.goldLeaf}40`,
                    boxShadow: highlight
                        ? `0 0 30px ${colors.goldLeaf}20, inset 0 1px 0 ${colors.parchmentLight}10`
                        : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 ${colors.parchmentLight}05`
                }}
            >
                {/* Cantos decorativos */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: colors.goldLeaf }} />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: colors.goldLeaf }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: colors.goldLeaf }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: colors.goldLeaf }} />

                {children}
            </div>

            {/* Borda decorativa inferior */}
            <div
                className="absolute -bottom-1 left-8 right-8 h-0.5"
                style={{
                    background: `linear-gradient(90deg, transparent, ${colors.sepia}, transparent)`
                }}
            />
        </motion.div>
    );
}

// ========================================
// COMPONENTE: SELO DE CERA
// ========================================
export function WaxSeal({ icon = "📜", size = "md", delay = 0, className = "" }) {
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
                style={{ background: colors.vermillion, opacity: 0.3 }}
            />

            {/* Selo */}
            <div
                className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center`}
                style={{
                    background: `radial-gradient(circle at 30% 30%, #C94A3A, ${colors.vermillion}, #8B2E24)`,
                    boxShadow: `
                        0 4px 8px rgba(0,0,0,0.4),
                        inset 0 2px 4px rgba(255,255,255,0.2),
                        inset 0 -2px 4px rgba(0,0,0,0.3)
                    `
                }}
            >
                <span className="drop-shadow-lg">{icon}</span>
            </div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: LETRA ILUMINADA (CAPITULAR)
// ========================================
export function IlluminatedLetter({ letter, delay = 0 }) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="inline-block text-6xl font-['Cinzel'] font-bold mr-2 float-left"
            style={{
                color: colors.goldLeaf,
                textShadow: `
                    0 0 20px ${colors.goldLeaf}50,
                    2px 2px 0 ${colors.vermillion}40
                `,
                lineHeight: 0.8
            }}
        >
            {letter}
        </motion.span>
    );
}

// ========================================
// COMPONENTE: TEXTO QUE APARECE COMO ESCRITO À MÃO
// ========================================
export function QuillWriting({ text, delay = 0, className = "" }) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 1.5 }}
            className={`italic ${className}`}
            style={{
                color: colors.sepia,
                fontFamily: "'Crimson Text', Georgia, serif",
                textShadow: `1px 1px 2px ${colors.inkBrown}20`
            }}
        >
            {text}
        </motion.p>
    );
}

// ========================================
// COMPONENTE: ROLO DE PERGAMINHO (SCROLL)
// ========================================
export function ScrollReveal({ children, delay = 0, className = "" }) {
    return (
        <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay, duration: 0.8, ease: "easeOut" }}
            className={`relative ${className}`}
        >
            {/* Topo do rolo */}
            <div
                className="absolute -top-3 left-0 right-0 h-6 rounded-full"
                style={{
                    background: `linear-gradient(180deg, ${colors.libraryWood}, ${colors.aged}, ${colors.libraryWood})`,
                    boxShadow: `0 2px 8px rgba(0,0,0,0.5)`
                }}
            />

            {/* Conteúdo */}
            <div
                className="pt-4 pb-6 px-6 rounded-lg"
                style={{
                    background: `linear-gradient(135deg, ${colors.parchmentLight}15, ${colors.parchmentDark}10)`,
                    borderLeft: `3px solid ${colors.goldLeaf}40`,
                    borderRight: `3px solid ${colors.goldLeaf}40`
                }}
            >
                {children}
            </div>

            {/* Base do rolo */}
            <div
                className="absolute -bottom-3 left-0 right-0 h-6 rounded-full"
                style={{
                    background: `linear-gradient(180deg, ${colors.libraryWood}, ${colors.aged}, ${colors.libraryWood})`,
                    boxShadow: `0 -2px 8px rgba(0,0,0,0.5)`
                }}
            />
        </motion.div>
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
                        background: highlight ? `${colors.goldLeaf}30` : `${colors.sepia}30`
                    }}
                >
                    {year}
                </span>
                <h4 className="text-lg font-bold mt-1" style={{ color: highlight ? colors.goldLeaf : colors.parchmentMid }}>
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
                        ? `radial-gradient(circle, ${colors.goldLeaf}, ${colors.sepia})`
                        : `radial-gradient(circle, ${colors.parchmentMid}, ${colors.aged})`,
                    boxShadow: highlight ? `0 0 10px ${colors.goldLeaf}50` : 'none'
                }}
            />

            {/* Espaço vazio do outro lado */}
            <div className="flex-1" />
        </motion.div>
    );
}

// ========================================
// COMPONENTE: PILHA DE LIVROS
// ========================================
export function BookStack({ books, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {books.map((book, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + i * 0.1 }}
                    className="relative h-8 rounded-sm mb-1 px-3 flex items-center"
                    style={{
                        background: `linear-gradient(90deg, ${book.color}90, ${book.color}60)`,
                        boxShadow: `2px 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)`,
                        width: `${80 + Math.random() * 20}%`
                    }}
                >
                    <span className="text-xs font-medium truncate" style={{ color: colors.parchmentLight }}>
                        {book.title}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
}
