// Shared components and utilities for Lição 9 slides
// Tema: Dossiê de Investigação Histórica — Os Autores da Bíblia
import { motion } from 'framer-motion';

// ========================================
// PALETA DE CORES — TEMA DOSSIÊ INVESTIGATIVO
// ========================================
export const colors = {
    charcoal: '#2C2C2C',       // Fundo slides quiz
    warmWhite: '#FFFDF7',      // Texto sobre fundo escuro
    bgDeep: '#1A1612',         // Fundo muito escuro (manuscritos)
    bgSurface: '#2A2420',      // Superfície escura
    bgDossier: '#1E1A17',      // Fundo principal base

    // Texto (Cores clareadas para leitura no fundo escuro)
    textDark: '#2C2C2C',       // Corpo principal sobre fundos claros
    textLight: '#FFFDF7',      // Texto sobre fundos escuros
    textMedium: '#D5CBB9',     // Legendas, notas - BEM MAIS CLARO E BEGE
    textMuted: '#ACACAC',      // Rodapé - MAIS LUMINOSO

    // Cores específicas (Sempre luminosas contra fundo dark)
    amber: '#F5B963',          // Âmbar bem mais pop e claro
    mossGreen: '#52C485',      // Verde bem mais claro e legível
    mapBlue: '#7BB3FC',        // Azul vibrante para contrastar
    stampRed: '#F46565',       // Vermelho vibrante

    // Dourado
    goldAged: '#C9A962',
    goldBright: '#F4D26B',

    // Stamps
    stampVerified: '#52C485',   // Verde-musgo vibrante
    stampDebate: '#F5B963',     // Âmbar
    stampUnknown: '#9CA3AF',    // Cinza clarinho
    stampLost: '#999999',       // Cinza médio para leitura
    stampConcluded: '#52C485',  // Verde conclusão

    // Botões do Quiz
    quizConcordo: '#52C485',   
    quizDepende: '#F5B963',    
    quizDiscordo: '#F46565',   
};

// ========================================
// PERGUNTAS DO QUIZ INTERATIVO
// ========================================
export const quizQuestions = [
    {
        id: 1,
        question: "Quando um paciente descreve uma memória de forma imperfeita ou com detalhes inconsistentes, isso me faz duvidar de que o evento realmente aconteceu.",
        icon: "🧠",
        correctAnswer: "discordo",
        isAnchor: true,
        anchorSlide: 43,
        revealSlides: [43, 44]
    },
    {
        id: 2,
        question: "Se quatro amigos descrevem um mesmo acidente de carro de formas ligeiramente diferentes, isso me faz desconfiar das histórias deles.",
        icon: "🚗",
        correctAnswer: "discordo",
        isAnchor: false,
        revealSlides: [24]
    },
    {
        id: 3,
        question: "Um documento escrito 50 anos depois de um evento histórico não pode ser considerado uma fonte confiável.",
        icon: "📅",
        correctAnswer: "discordo",
        revealSlides: [29]
    },
    {
        id: 4,
        question: "Já me peguei confiando em uma informação — notícia, post, comentário — sem verificar quem a escreveu ou de onde veio.",
        icon: "📱",
        correctAnswer: "concordo",
        revealSlides: [11]
    },
    {
        id: 5,
        question: "Prefiro um documento que admite o que não sabe do que um que finge ter certeza em tudo.",
        icon: "🤔",
        correctAnswer: "concordo",
        revealSlides: [32, 34]
    },
    {
        id: 6,
        question: "Se um texto antigo descreve um evento futuro com precisão impressionante, minha primeira reação é pensar que ele foi escrito depois do evento — não antes.",
        icon: "🔮",
        correctAnswer: "depende",
        revealSlides: [19, 20]
    }
];

export const TOTAL_QUIZ_QUESTIONS = quizQuestions.length;

// ========================================
// REAÇÕES CONTEXTUAIS (PARA LIÇÃO 9)
// ========================================
export const reactions = [
    { type: 'evidence', icon: '🔍', label: 'Boa evidência', color: 'from-blue-700 to-cyan-600' },
    { type: 'mindBlown', icon: '🤯', label: 'Mente explodiu', color: 'from-purple-700 to-violet-600' },
    { type: 'convinced', icon: '✅', label: 'Convencido', color: 'from-green-700 to-emerald-600' },
    { type: 'needMore', icon: '📖', label: 'Quero mais dados', color: 'from-amber-700 to-yellow-600' },
    { type: 'doubt', icon: '❓', label: 'Tenho dúvida', color: 'from-orange-700 to-amber-600' },
    { type: 'respect', icon: '🫡', label: 'Respeito isso', color: 'from-rose-600 to-pink-500' }
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
    0: {
        title: "Quiz de Abertura",
        notes: [
            "6 perguntas — escala Concordo/Depende/Discordo",
            "Pergunta 1 é ÂNCORA — anotar resposta para o fechamento",
            "💡 'Responda instintivamente. Não há resposta certa ou errada — ainda.'"
        ]
    },
    1: {
        title: "Capa — Caso #09",
        notes: [
            "Enquanto o slide abre, dizer:",
            "'Hoje vamos fazer algo diferente — investigação histórica.'",
            "💡 Tom de dossiê: 'Quem escreveu isso, de onde, e por quê.'"
        ]
    },
    2: {
        title: "A Pergunta que Abre Tudo",
        notes: [
            "'Por que importa saber quem escreveu um documento?'",
            "Deixar ela responder — não preencher o silêncio",
            "💡 Apenas validar e seguir"
        ]
    },
    3: {
        title: "Instrução do Quiz",
        notes: [
            "Instrução rápida — 1 min",
            "CONCORDO / DEPENDE / DISCORDO",
            "💡 'Estamos mapeando — não testando'"
        ]
    },
    4: {
        title: "Pergunta 1 — ÂNCORA ★★★",
        notes: [
            "⚠️ ÂNCORA: Anotar resposta para slide 43",
            "Após resposta: 'Anotei. A gente volta nisso no final — prometo.'",
            "💡 A curiosidade sobre o retorno é parte do efeito"
        ]
    },
    5: {
        title: "Pergunta 2",
        notes: [
            "Quatro amigos, acidente de carro, versões diferentes",
            "Reação: 'Faz sentido. Vamos ver onde isso aparece.'",
            "💡 Ancora no bloco dos quatro evangelhos"
        ]
    },
    6: {
        title: "Pergunta 3",
        notes: [
            "50 anos depois = não confiável?",
            "Se concordar, não corrigir ainda",
            "💡 'Vamos aplicar esse critério de forma consistente'"
        ]
    },
    7: {
        title: "Pergunta 4",
        notes: [
            "Pergunta de honestidade pessoal — humaniza",
            "'Obrigado pela honestidade. Todos nós.'",
            "💡 Tom mais leve"
        ]
    },
    8: {
        title: "Pergunta 5",
        notes: [
            "Prepara o terreno para Hebreus",
            "'Essa preferência tem consequências interessantes'",
            "💡 Ancora no bloco de Hebreus (slide 32)"
        ]
    },
    9: {
        title: "Pergunta 6",
        notes: [
            "Gera mais conversa — explorar se disser DEPENDE",
            "'Depende de quê, pra você?'",
            "💡 Ancora no bloco de Isaías (slide 19)"
        ]
    },
    10: {
        title: "Transição Pós-Quiz",
        notes: [
            "'Seis perguntas — nenhuma era sobre a Bíblia.'",
            "'Os critérios são os seus — não os meus.'",
            "💡 Fade rápido para o próximo bloco"
        ]
    },
    11: {
        title: "A Lógica do Testemunho",
        notes: [
            "Proximidade determina peso — mesmo princípio do consultório",
            "Testemunha ocular → investigador → terceira mão",
            "💡 'Não é questão de religião — é critério de investigação'"
        ]
    },
    12: {
        title: "As Três Perguntas",
        notes: [
            "① Quem? ② Quando? ③ Acesso direto?",
            "Pedir exemplo do cotidiano dela",
            "💡 Respostas podem ser diferentes para cada uma"
        ]
    },
    13: {
        title: "O Que se Perdeu",
        notes: [
            "Conecta com comentário da aluna na lição passada",
            "1Co 5:9, Cl 4:16, Lc 1:1 — cartas perdidas",
            "💡 'Preservação foi honesta sobre suas limitações'"
        ]
    },
    14: {
        title: "Mapa dos Autores",
        notes: [
            "~40 autores, 1.500 anos, 3 continentes",
            "Reis, pescadores, médicos, pastores, profetas",
            "💡 'A diversidade é a evidência. A unidade apesar dela, mais ainda.'"
        ]
    },
    15: {
        title: "Abertura AT",
        notes: [
            "'Vamos abrir os casos. Antigo Testamento primeiro.'",
            "Tom de investigador abrindo uma pasta",
            "💡 1 min — slide de abertura de bloco"
        ]
    },
    16: {
        title: "Caso: Moisés e o Pentateuco",
        notes: [
            "Posição tradicional: Moisés como autor principal",
            "Jesus o cita: 'a lei de Moisés'",
            "💡 Crítica propôs JEDP — sob revisão significativa"
        ]
    },
    17: {
        title: "Problemas com o JEDP",
        notes: [
            "① Critérios circulares ② Compatibilidade histórica",
            "③ Dt 34 narra morte de Moisés — tradição sempre reconheceu",
            "💡 'Honestidade, não problema'"
        ]
    },
    18: {
        title: "Caso: Jó ★",
        notes: [
            "Talmude: autor → Moisés. Cenário pré-mosaico",
            "⚠️ Momento pessoal — ela pode se conectar",
            "💡 'O primeiro livro escrito enfrenta o sofrimento de frente'"
        ]
    },
    19: {
        title: "Caso: Isaías — Apresentação",
        notes: [
            "O debate mais importante do AT",
            "Cap 1-39 vs 40-66 — Ciro mencionado 150 anos antes",
            "💡 'Toca diretamente na questão de profecia'"
        ]
    },
    20: {
        title: "Isaías: O Argumento Central ★★★",
        notes: [
            "SLIDE MAIS IMPORTANTE DO BLOCO AT",
            "Premissas diferentes → conclusões diferentes",
            "💡 'O debate é entre pessoas com premissas diferentes'"
        ]
    },
    21: {
        title: "O Rolo de Isaías de Qumran ★★★",
        notes: [
            "MOMENTO VISUAL 1 — deixar a imagem respirar",
            "Sem quebra de coluna, sem mudança de escriba",
            "💡 'Um livro. Um autor.' — deadseascrolls.org.il"
        ]
    },
    22: {
        title: "Panorama AT",
        notes: [
            "Percorrer tabela rapidamente",
            "Daniel: reservar para lição específica",
            "💡 Tom de 'arquivo de casos encerrados'"
        ]
    },
    23: {
        title: "Abertura NT",
        notes: [
            "'O corpus mais datável da Antiguidade'",
            "'Escrito enquanto as testemunhas ainda viviam'",
            "💡 Fundo mais limpo — tom contemporâneo"
        ]
    },
    24: {
        title: "Por Que Quatro? ★",
        notes: [
            "🔔 Conecta com pergunta 2 do quiz",
            "Divergência + convergência = testemunho independente",
            "💡 'Uniformidade perfeita levanta suspeita'"
        ]
    },
    25: {
        title: "Os Quatro Evangelhos",
        notes: [
            "Mateus, Marcos, Lucas, João — perfis breves",
            "Destaque Lucas: 'verificável de um jeito especial'",
            "💡 4 min — quatro cards lado a lado"
        ]
    },
    26: {
        title: "Lucas em Grego ★★",
        notes: [
            "MOMENTO VISUAL 2",
            "ἀκριβῶς, αὐτόπται, ἀσφάλειαν",
            "💡 'Linguagem de historiador — não de devoto'"
        ]
    },
    27: {
        title: "Ramsay e a Arqueologia ★★",
        notes: [
            "Começou cético → mudou após décadas de escavações",
            "Tessalônica: politarcas, Malta: protos, Filipos: pretores",
            "💡 'Lucas é um historiador de primeira classe'"
        ]
    },
    28: {
        title: "O Problema Sinótico",
        notes: [
            "Marcos primeiro → Mateus e Lucas usaram Marcos + Q",
            "Debate é sobre QUAIS fontes — não se existiram",
            "💡 'Existência de fontes confirma investigação, não invenção'"
        ]
    },
    29: {
        title: "A Questão da Datação ★",
        notes: [
            "🔔 Conecta com pergunta 3 do quiz",
            "Alexandre: 300-400 anos. Evangelhos: 30-60 anos",
            "💡 1Co 15:6 — 'a maioria ainda vive' = convite à verificação"
        ]
    },
    30: {
        title: "Paulo: O Mais Datável",
        notes: [
            "7 cartas indisputadas: Rm, 1-2Co, Gl, Fp, 1Ts, Fm",
            "Escritas entre 49-62 d.C. — antes dos evangelhos",
            "💡 Stamp VERIFICADO"
        ]
    },
    31: {
        title: "Paulo: Cartas Debatidas",
        notes: [
            "Ef, Cl, 2Ts, 1-2Tm, Tt — vocabulário diferente",
            "Paulo usava secretários (Rm 16:22 — Tércio)",
            "💡 'Debate real — mas as 7 indisputadas já bastam'"
        ]
    },
    32: {
        title: "Hebreus: O Grande Mistério ★★",
        notes: [
            "🔔 Conecta com pergunta 5 do quiz",
            "Orígenes: 'Quem escreveu, só Deus sabe'",
            "💡 Stamp DESCONHECIDO — honestidade intelectual"
        ]
    },
    33: {
        title: "Hebreus: Os Candidatos",
        notes: [
            "Paulo, Apolo, Barnabé, Priscila — 4 fichas de suspeito",
            "⚠️ Priscila: a Guga vai gostar deste slide",
            "💡 'Quatro candidatos sérios. Nenhuma certeza.'"
        ]
    },
    34: {
        title: "Hebreus: A Conclusão",
        notes: [
            "No cânon pelo conteúdo, não pela assinatura",
            "'Você disse que prefere documento que admite o que não sabe'",
            "💡 Badge 'RESPOSTA À PERGUNTA 5'"
        ]
    },
    35: {
        title: "Demais Autores NT",
        notes: [
            "Tiago, 1-2 Pedro, Cartas de João, Judas, Apocalipse",
            "Percorrer rapidamente com stamps",
            "💡 Apocalipse: sete igrejas confirmadas arqueologicamente"
        ]
    },
    36: {
        title: "Richard Bauckham",
        notes: [
            "'Jesus and the Eyewitnesses' (2006)",
            "Dois argumentos: distribuição de nomes + padrão de identificação",
            "💡 'O tipo de argumento que você como analista vai apreciar'"
        ]
    },
    37: {
        title: "A Distribuição de Nomes ★",
        notes: [
            "Nomes dos evangelhos vs ossuários palestinenses séc. I",
            "Distribuição estatisticamente idêntica",
            "💡 'Isso não se fabrica por acidente'"
        ]
    },
    38: {
        title: "O Padrão de Identificação ★",
        notes: [
            "Identificados vs protegidos por anonimato",
            "Simão de Cirene → Alexandre e Rufos → Rm 16:13",
            "💡 'Os leitores os conheciam pessoalmente'"
        ]
    },
    39: {
        title: "Síntese",
        notes: [
            "'Não provamos inspiração. Não provamos milagres.'",
            "'Mostramos proximidade, acesso, avaliação real.'",
            "💡 'Isso é o que a investigação histórica pode dizer'"
        ]
    },
    40: {
        title: "A Pergunta do Investigador",
        notes: [
            "Fazer a pergunta e calar — deixar ela responder",
            "Qualquer coisa exceto 'não tem nada' é sucesso",
            "💡 A resposta dela é o fechamento real da aula"
        ]
    },
    41: {
        title: "Conexão com Lições Anteriores",
        notes: [
            "Linha do tempo: Lição 1 → 9",
            "'A Bíblia não pede que acredite porque sim'",
            "💡 'É um documento que pedimos que avalie com seus critérios'"
        ]
    },
    42: {
        title: "Preview da Lição 10",
        notes: [
            "Contexto Histórico e Cultural",
            "'O texto muda quando você entende de onde ele saiu'",
            "💡 1 min — breve"
        ]
    },
    43: {
        title: "RETORNO À ÂNCORA ★★★",
        notes: [
            "⚠️ MOMENTO MAIS IMPORTANTE DO FECHAMENTO",
            "Reproduzir Pergunta 1 — conectar com evangelhos",
            "💡 'Você já sabia o critério. Ele funciona aqui também.'"
        ]
    },
    44: {
        title: "Frase Final",
        notes: [
            "NÃO adicionar nada além do texto na tela",
            "O silêncio é parte do slide",
            "💡 Sem elementos gráficos — apenas palavras"
        ]
    },
    45: {
        title: "Encerramento",
        notes: [
            "Espelho da capa — pasta fechando",
            "CASO #09 — CONCLUÍDO",
            "💡 'Obrigado. Podem surgir perguntas depois — pode me mandar.'"
        ]
    }
};

// ========================================
// POSIÇÕES DE PARTÍCULAS (poeira de arquivo)
// ========================================
const dustPositions = [
    { left: 8, top: 15, duration: 12, delay: 0.5, size: 2 },
    { left: 18, top: 80, duration: 14, delay: 1.2, size: 1.5 },
    { left: 30, top: 25, duration: 10, delay: 2.8, size: 2 },
    { left: 42, top: 60, duration: 13, delay: 0.3, size: 1.5 },
    { left: 55, top: 18, duration: 11, delay: 3.5, size: 2 },
    { left: 68, top: 85, duration: 15, delay: 1.8, size: 1.5 },
    { left: 75, top: 40, duration: 9, delay: 4.2, size: 2 },
    { left: 85, top: 70, duration: 16, delay: 0.8, size: 1.5 },
    { left: 92, top: 12, duration: 10, delay: 2.1, size: 2 },
    { left: 50, top: 50, duration: 12, delay: 3.9, size: 1.5 },
];

// ========================================
// COMPONENTE: PARTÍCULAS DE POEIRA (efeito arquivo)
// ========================================
export function ArchiveDust() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dustPositions.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        background: `radial-gradient(circle, ${colors.amber}30 0%, transparent 70%)`,
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: p.size * 5,
                        height: p.size * 5,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 10, 0],
                        opacity: [0.1, 0.35, 0.1],
                        scale: [0.8, 1.2, 0.8],
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

// ========================================
// COMPONENTE: TEXTURA DE PERGAMINHO
// ========================================
export function ParchmentTexture({ opacity = 0.08 }) {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `url('/images/licao-9/parchment-texture.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity,
                mixBlendMode: 'multiply',
            }}
        />
    );
}

// ========================================
// COMPONENTE: SLIDE WRAPPER
// ========================================
export function SlideWrapper({ children, className = '', variant = 'kraft' }) {
    const bgStyles = {
        kraft: {
            background: `linear-gradient(135deg, ${colors.kraft} 0%, #EDD9B5 50%, ${colors.kraft} 100%)`,
            showParchment: true,
        },
        cream: {
            background: `linear-gradient(135deg, ${colors.cream} 0%, #F5EFE3 50%, ${colors.cream} 100%)`,
            showParchment: false,
        },
        dark: {
            background: `linear-gradient(135deg, ${colors.bgDeep} 0%, #1F1A15 50%, ${colors.bgDeep} 100%)`,
            showParchment: false,
        },
        quiz: {
            background: `linear-gradient(135deg, ${colors.charcoal} 0%, #1E1E1E 50%, ${colors.charcoal} 100%)`,
            showParchment: false,
        },
        manuscript: {
            background: `linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)`,
            showParchment: false,
        },
        slateBlue: {
            background: `linear-gradient(135deg, ${colors.slateBlue} 0%, #142D4A 50%, ${colors.slateBlue} 100%)`,
            showParchment: false,
        },
    };

    const config = bgStyles[variant] || bgStyles.kraft;

    return (
        <div className={`slide-content ${className}`}>
            <div
                className="relative min-h-screen flex items-center justify-center py-12"
                style={{ background: config.background }}
            >
                {config.showParchment && <ParchmentTexture />}
                <ArchiveDust />
                {children}
            </div>
        </div>
    );
}

// ========================================
// COMPONENTE: DOSSIER CARD (ficha de investigação)
// ========================================
export function DossierCard({ children, delay = 0, className = '', status = 'neutral', highlight = false }) {
    const borderColors = {
        neutral: colors.amber,
        verified: colors.stampVerified,
        debate: colors.stampDebate,
        unknown: colors.stampUnknown,
        lost: colors.stampLost,
    };

    const borderColor = borderColors[status] || colors.amber;
    const isDark = !['kraft', 'cream'].includes(status);

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
// COMPONENTE: STAMP BADGE (carimbo animado)
// ========================================
export function StampBadge({ type = 'verified', delay = 0, className = '', size = 'md', note = '' }) {
    const stamps = {
        verified: {
            text: 'VERIFICADO',
            color: colors.stampVerified,
            bg: `${colors.stampVerified}20`,
            borderColor: colors.stampVerified,
            rotation: 12,
            shape: 'rounded-full',
        },
        debate: {
            text: 'EM DEBATE',
            color: colors.stampDebate,
            bg: `${colors.stampDebate}20`,
            borderColor: colors.stampDebate,
            rotation: -10,
            shape: 'rounded-lg',
        },
        unknown: {
            text: 'DESCONHECIDO',
            color: colors.stampUnknown,
            bg: `${colors.stampUnknown}20`,
            borderColor: colors.stampUnknown,
            rotation: 8,
            shape: 'rounded-full',
        },
        lost: {
            text: 'PERDIDO',
            color: colors.stampLost,
            bg: `${colors.stampLost}20`,
            borderColor: colors.stampLost,
            rotation: -6,
            shape: 'rounded-lg',
        },
        concluded: {
            text: 'CONCLUÍDO',
            color: colors.stampConcluded,
            bg: `${colors.stampConcluded}20`,
            borderColor: colors.stampConcluded,
            rotation: 10,
            shape: 'rounded-full',
        },
        investigation: {
            text: 'EM INVESTIGAÇÃO',
            color: colors.amber,
            bg: `${colors.amber}20`,
            borderColor: colors.amber,
            rotation: -8,
            shape: 'rounded-lg',
        },
    };

    const stamp = stamps[type] || stamps.verified;
    const sizeClasses = {
        sm: 'px-3 py-1 text-xs',
        md: 'px-5 py-2 text-sm',
        lg: 'px-8 py-3 text-lg',
    };

    return (
        <motion.div
            initial={{ scale: 0, rotate: stamp.rotation * 3, opacity: 0 }}
            animate={{ scale: 1, rotate: stamp.rotation, opacity: 1 }}
            transition={{
                delay,
                duration: 0.3,
                type: 'spring',
                stiffness: 300,
                damping: 15,
            }}
            className={`inline-flex flex-col items-center ${className}`}
        >
            <div
                className={`${stamp.shape} ${sizeClasses[size]} font-black uppercase tracking-wider border-3`}
                style={{
                    color: stamp.color,
                    background: stamp.bg,
                    borderWidth: '3px',
                    borderColor: stamp.borderColor,
                    textShadow: `0 0 10px ${stamp.color}30`,
                    fontFamily: "'Oswald', 'Impact', sans-serif",
                    transform: `rotate(${stamp.rotation}deg)`,
                }}
            >
                {stamp.text}
            </div>
            {note && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + 0.3 }}
                    className="text-xs mt-1 italic"
                    style={{ color: stamp.color }}
                >
                    {note}
                </motion.span>
            )}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: CASE HEADER (cabeçalho de caso)
// ========================================
export function CaseHeader({ title, subtitle, icon = '📁', delay = 0, protocol = '', className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`text-center mb-8 ${className}`}
        >
            {protocol && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: delay + 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-2 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    {protocol}
                </motion.p>
            )}
            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-3xl">{icon}</span>
                <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                        color: colors.slateBlue,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `1px 1px 2px rgba(0,0,0,0.1)`
                    }}
                >
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p
                    className="text-lg md:text-xl italic"
                    style={{
                        color: colors.amber,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: DARK CASE HEADER (para slides escuros)
// ========================================
export function DarkCaseHeader({ title, subtitle, icon = '📁', delay = 0, protocol = '', className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`text-center mb-8 ${className}`}
        >
            {protocol && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: delay + 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-2 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    {protocol}
                </motion.p>
            )}
            <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-3xl">{icon}</span>
                <h2
                    className="text-3xl md:text-4xl font-bold"
                    style={{
                        color: colors.warmWhite,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `0 2px 20px ${colors.amber}30`
                    }}
                >
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p
                    className="text-lg md:text-xl italic"
                    style={{
                        color: colors.amber,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: ANCHOR BADGE (badge âncora)
// ========================================
export function AnchorBadge({ delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${className}`}
            style={{
                background: `${colors.amber}25`,
                border: `1px solid ${colors.amber}60`,
            }}
        >
            <span className="text-sm">🔖</span>
            <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: colors.amber }}
            >
                Âncora
            </span>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: EVIDENCE CARD (card de evidência)
// ========================================
export function EvidenceCard({ children, delay = 0, className = '', variant = 'default', icon = '🔍' }) {
    const variants = {
        default: { border: colors.amber, bg: `${colors.bgSurface}CC` },
        confirmed: { border: colors.mossGreen, bg: `${colors.mossGreen}10` },
        disputed: { border: colors.wineRed, bg: `${colors.wineRed}10` },
        lost: { border: colors.stampLost, bg: `${colors.stampLost}10` },
    };

    const v = variants[variant] || variants.default;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className={`p-4 rounded-lg border-l-4 ${className}`}
            style={{
                background: v.bg,
                borderLeftColor: v.border,
            }}
        >
            <div className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{icon}</span>
                <div className="flex-1">{children}</div>
            </div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: INVESTIGATION TIMELINE
// ========================================
export function InvestigationTimeline({ items = [], delay = 0, className = '' }) {
    // items = [{ label: 'Alexandre', year: '300-400 anos', highlight: false }, ...]
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`w-full ${className}`}
        >
            {/* Linha principal */}
            <div className="relative">
                <div
                    className="h-1 rounded-full mb-8"
                    style={{
                        background: `linear-gradient(to right, ${colors.amber}40, ${colors.mossGreen}40)`
                    }}
                />

                {/* Marcadores */}
                <div className="flex justify-between -mt-10">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: delay + 0.15 * i }}
                            className="flex flex-col items-center text-center"
                            style={{ width: `${100 / items.length}%` }}
                        >
                            {/* Ponto */}
                            <div
                                className="w-4 h-4 rounded-full mb-2 border-2"
                                style={{
                                    background: item.highlight ? colors.mossGreen : colors.bgSurface,
                                    borderColor: item.highlight ? colors.mossGreen : colors.amber,
                                    boxShadow: item.highlight ? `0 0 12px ${colors.mossGreen}50` : 'none',
                                }}
                            />
                            {/* Label */}
                            <span
                                className="text-sm font-bold"
                                style={{ color: item.highlight ? colors.mossGreen : colors.textLight }}
                            >
                                {item.label}
                            </span>
                            <span
                                className="text-xs mt-1"
                                style={{ color: colors.textMedium }}
                            >
                                {item.year}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: IMPACT NUMBER
// ========================================
export function ImpactNumber({ number, label = "", delay = 0, color = colors.slateBlue }) {
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
                    textShadow: `0 0 40px ${color}30`,
                    fontFamily: "'Playfair Display', Georgia, serif",
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
// COMPONENTE: DOSSIER SEAL (selo do dossiê)
// ========================================
export function DossierSeal({ number = 9, size = 'md', delay = 0, className = '' }) {
    const sizeClasses = {
        sm: 'w-12 h-12 text-lg',
        md: 'w-16 h-16 text-2xl',
        lg: 'w-20 h-20 text-3xl',
    };

    return (
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay, type: 'spring', stiffness: 200 }}
            className={`relative ${className}`}
        >
            <div
                className="absolute inset-0 rounded-full blur-lg"
                style={{ background: colors.slateBlue, opacity: 0.3 }}
            />
            <div
                className={`relative ${sizeClasses[size]} rounded-full flex items-center justify-center`}
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${colors.slateBlue}, #0D2240)`,
                    boxShadow: `0 4px 12px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)`,
                    border: `2px solid ${colors.amber}40`,
                }}
            >
                <span className="font-bold text-white drop-shadow-lg">{number}</span>
            </div>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: SUSPECT CARD (ficha de suspeito)
// ========================================
export function SuspectCard({ name, role, argument, delay = 0, className = '', icon = '👤' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`p-4 rounded-xl border ${className}`}
            style={{
                background: `${colors.bgSurface}CC`,
                borderColor: `${colors.amber}30`,
            }}
        >
            <div className="flex items-center gap-3 mb-2">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{
                        background: `${colors.slateBlue}30`,
                        border: `1px solid ${colors.slateBlue}50`,
                    }}
                >
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold" style={{ color: colors.warmWhite }}>{name}</h4>
                    <p className="text-xs" style={{ color: colors.amber }}>{role}</p>
                </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                {argument}
            </p>
        </motion.div>
    );
}

// ========================================
// COMPONENTE: SCRIBE WRITING
// ========================================
export function ScribeWriting({ text, delay = 0, className = '' }) {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 1.5 }}
            className={`italic ${className}`}
            style={{
                color: colors.amber,
                fontFamily: "'EB Garamond', 'Crimson Text', Georgia, serif",
                textShadow: `1px 1px 2px rgba(0,0,0,0.1)`
            }}
        >
            {text}
        </motion.p>
    );
}

// ========================================
// COMPONENTE: GREEK TEXT
// ========================================
export function GreekText({ text, delay = 0, className = '', size = 'lg' }) {
    const sizeClasses = {
        sm: 'text-lg',
        md: 'text-xl md:text-2xl',
        lg: 'text-2xl md:text-4xl',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8 }}
            className={`font-bold ${sizeClasses[size]} ${className}`}
            style={{
                color: colors.slateBlue,
                fontFamily: "'GFS Didot', 'Gentium Plus', 'Cardo', serif",
                textShadow: `0 0 30px ${colors.slateBlue}20`,
            }}
        >
            {text}
        </motion.div>
    );
}

// ========================================
// COMPONENTE: QUIZ RESPONSE BADGE
// ========================================
export function QuizResponseBadge({ questionNumber, delay = 0, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${className}`}
            style={{
                background: `${colors.mossGreen}20`,
                border: `1px solid ${colors.mossGreen}50`,
            }}
        >
            <span className="text-xs">🔔</span>
            <span className="text-xs font-bold" style={{ color: colors.mossGreen }}>
                RESPOSTA À PERGUNTA {questionNumber}
            </span>
        </motion.div>
    );
}
