// Shared components and utilities for Lição 15 slides
// Tema: A Bíblia como Uma Só História — paleta pergaminho, sobriedade
import { motion } from 'framer-motion';

export const TOTAL_SLIDES = 15;

// ========================================
// PALETA DE CORES — TEMA PERGAMINHO
// ========================================
export const colors = {
    parchment:        '#F4ECD8',
    parchmentDeep:    '#EFE3C8',
    parchmentEdge:    '#E6D8B8',

    inkAntique:       '#2A1F14',
    inkSoft:          '#5A4A38',
    inkMuted:         '#8A7A66',
    inkFaint:         '#B0A18A',

    bordo:            '#7B2D26',
    bordoSoft:        '#9C4A3C',

    goldDawn:         '#B89968',
    goldDawnFaint:    '#D4BC92',

    threadInk:        '#2A1F14',
};

// ========================================
// FONTES (consumidas via CSS variables do layout)
// ========================================
export const fonts = {
    display: "var(--font-playfair), Georgia, 'Times New Roman', serif",
    body:    "Georgia, 'Times New Roman', serif",
    accent:  "var(--font-cormorant), Georgia, serif",
};

// ========================================
// HORIZONTAL THREAD — fio recorrente que evolui
// ========================================
// slideIndex é 0-based. Lógica:
//  - 0..2  : tracejado raro, opacidade 0.15
//  - 3..6  : tracejado mais denso, opacidade 0.20
//  - 7..9  : quase contínuo, micro-quebras, opacidade 0.28
//  - 10    : linha sólida, opacidade 0.35, sutil dourado misturado
//  - 11..14: linha sólida, dourado-amanhecer mais presente
function threadConfig(slideIndex) {
    if (slideIndex <= 2) {
        return { dash: '2 22', opacity: 0.15, color: colors.threadInk, glow: false };
    }
    if (slideIndex <= 6) {
        return { dash: '4 12', opacity: 0.20, color: colors.threadInk, glow: false };
    }
    if (slideIndex <= 9) {
        return { dash: '14 4', opacity: 0.28, color: colors.threadInk, glow: false };
    }
    if (slideIndex === 10) {
        return { dash: null, opacity: 0.38, color: colors.inkAntique, glow: true };
    }
    return { dash: null, opacity: 0.32, color: colors.goldDawn, glow: true };
}

export function HorizontalThread({ slideIndex = 0, position = 'bottom-third' }) {
    const cfg = threadConfig(slideIndex);
    const top = position === 'middle' ? '50%' : '68%';

    return (
        <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{ top, transform: 'translateY(-50%)' }}
        >
            <motion.svg
                initial={{ opacity: 0, scaleX: 0.9 }}
                animate={{ opacity: cfg.opacity, scaleX: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
                width="100%"
                height="2"
                viewBox="0 0 1000 2"
                preserveAspectRatio="none"
                style={{ display: 'block' }}
            >
                {cfg.glow && (
                    <line
                        x1="0" y1="1" x2="1000" y2="1"
                        stroke={colors.goldDawn}
                        strokeWidth="3"
                        strokeOpacity="0.18"
                    />
                )}
                <line
                    x1="0" y1="1" x2="1000" y2="1"
                    stroke={cfg.color}
                    strokeWidth="1"
                    strokeDasharray={cfg.dash || undefined}
                    strokeLinecap="round"
                />
            </motion.svg>
        </div>
    );
}

// ========================================
// PARCHMENT WRAPPER — container base (substitui ConvergenceWrapper)
// ========================================
export function ParchmentWrapper({ children, slideIndex = 0, threadPosition = 'bottom-third', className = '' }) {
    return (
        <div
            className={`relative w-full flex flex-col items-center justify-center ${className}`}
            style={{
                background: colors.parchment,
                color: colors.inkAntique,
                fontFamily: fonts.body,
                minHeight: '100vh',
                paddingTop: '16px',
                paddingBottom: '80px',
            }}
        >
            {/* Textura sutil de pergaminho — duas camadas radiais muito fracas */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse at 25% 15%, ${colors.parchmentDeep}55 0%, transparent 50%),
                        radial-gradient(ellipse at 80% 85%, ${colors.parchmentEdge}40 0%, transparent 55%)
                    `,
                }}
            />
            <HorizontalThread slideIndex={slideIndex} position={threadPosition} />
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

// ========================================
// LESSON NUMBER — "LIÇÃO 15" em small caps no topo
// ========================================
export function LessonNumber({ size = 'md', delay = 0 }) {
    const sizeMap = {
        sm: 'text-[10px]',
        md: 'text-xs',
        lg: 'text-sm',
    };
    return (
        <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`${sizeMap[size]} uppercase tracking-[0.45em] font-medium`}
            style={{
                color: colors.inkMuted,
                fontFamily: fonts.body,
                fontVariant: 'small-caps',
            }}
        >
            Lição 15
        </motion.p>
    );
}

// ========================================
// ROMAN NUMERAL — algarismo decorativo (XV, I, II, III, IV)
// ========================================
export function RomanNumeral({ value, size = 'md', weight = 300, color, opacity = 0.85, delay = 0 }) {
    const sizeMap = {
        sm: 'text-2xl',
        md: 'text-4xl',
        lg: 'text-6xl',
        xl: 'text-8xl',
    };
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity }}
            transition={{ delay, duration: 0.8 }}
            className={`${sizeMap[size]} block leading-none`}
            style={{
                color: color || colors.inkMuted,
                fontFamily: fonts.accent,
                fontWeight: weight,
                letterSpacing: '0.05em',
            }}
        >
            {value}
        </motion.span>
    );
}

// ========================================
// SECTION LABEL — pequeno título tipo "Onde estamos"
// ========================================
export function SectionLabel({ children, align = 'left', delay = 0, color }) {
    const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.6 }}
            className={`text-xs uppercase tracking-[0.35em] font-medium ${alignClass}`}
            style={{
                color: color || colors.inkMuted,
                fontFamily: fonts.body,
                fontVariant: 'small-caps',
            }}
        >
            {children}
        </motion.p>
    );
}

// ========================================
// BIBLICAL QUOTE — citação bíblica em bordô (ou dourado)
// ========================================
function renderWithEmphasis(text, emphasis) {
    if (!emphasis || emphasis.length === 0) return text;
    const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${emphasis.map(escape).join('|')})`, 'g');
    return text.split(re).map((part, i) =>
        emphasis.includes(part)
            ? <strong key={i} style={{ fontWeight: 600 }}>{part}</strong>
            : <span key={i}>{part}</span>
    );
}

export function BiblicalQuote({
    reference,
    text,
    lines,
    emphasis = [],
    useGold = false,
    align = 'center',
    size = 'md',
    delay = 0,
}) {
    const sizeMap = {
        xs: 'text-sm md:text-base',
        sm: 'text-base md:text-lg',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl',
    };
    const lineHeightMap = {
        xs: 1.4,
        sm: 1.5,
        md: 1.55,
        lg: 1.55,
        xl: 1.55,
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const referenceColor = useGold ? colors.goldDawn : colors.inkMuted;

    const renderedLines = lines
        ? lines
        : (text ? text.split('\n') : []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className={`${alignClass} max-w-3xl mx-auto`}
        >
            <div
                className={`${sizeMap[size]} italic`}
                style={{
                    color: colors.bordo,
                    fontFamily: fonts.display,
                    lineHeight: lineHeightMap[size] || 1.55,
                }}
            >
                {renderedLines.map((line, i) => (
                    <div key={i} style={{ marginBottom: '0.1em' }}>
                        {renderWithEmphasis(line, emphasis)}
                    </div>
                ))}
            </div>
            {reference && (
                <p
                    className="mt-5 text-xs tracking-[0.35em] uppercase"
                    style={{
                        color: referenceColor,
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        opacity: 0.85,
                    }}
                >
                    {reference}
                </p>
            )}
        </motion.div>
    );
}

// ========================================
// BIG NUMBER — número grande tipográfico (slide 4)
// ========================================
export function BigNumber({ value, label, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center"
        >
            <span
                className="text-6xl md:text-7xl leading-none"
                style={{
                    color: colors.inkAntique,
                    fontFamily: fonts.display,
                    fontWeight: 500,
                }}
            >
                {value}
            </span>
            <span
                className="mt-3 text-xs uppercase tracking-[0.3em]"
                style={{
                    color: colors.inkMuted,
                    fontFamily: fonts.body,
                    fontVariant: 'small-caps',
                }}
            >
                {label}
            </span>
        </motion.div>
    );
}

// ========================================
// PROSE BLOCK — texto principal Georgia, com quebras intencionais
// ========================================
export function ProseBlock({ lines, align = 'left', size = 'md', italic = false, color, delay = 0, maxWidth = '34rem' }) {
    const sizeMap = {
        sm: 'text-base',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    const renderedLines = Array.isArray(lines) ? lines : [lines];

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.8, ease: 'easeOut' }}
            className={`${alignClass} mx-auto`}
            style={{ maxWidth }}
        >
            {renderedLines.map((line, i) => {
                if (line === '') return <div key={i} style={{ height: '1.4em' }} />;
                const isItalic = typeof line === 'object' && line.italic;
                const lineText = typeof line === 'object' ? line.text : line;
                const lineWeight = typeof line === 'object' && line.bold ? 600 : 400;
                return (
                    <p
                        key={i}
                        className={sizeMap[size]}
                        style={{
                            color: color || colors.inkAntique,
                            fontFamily: fonts.body,
                            fontStyle: italic || isItalic ? 'italic' : 'normal',
                            fontWeight: lineWeight,
                            lineHeight: 1.55,
                            margin: 0,
                        }}
                    >
                        {lineText}
                    </p>
                );
            })}
        </motion.div>
    );
}

// ========================================
// ARC DIAGRAM — slide 12: Gn 3 ↔ Ap 21
// ========================================
export function ArcDiagram({ leftLabel, leftRef, rightLabel, rightRef, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.9 }}
            className="w-full max-w-4xl mx-auto px-6"
        >
            <div className="flex items-center justify-between gap-6">
                {/* Lado esquerdo — Gênesis 3 */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.2, duration: 0.7 }}
                    className="flex flex-col items-center text-center flex-shrink-0"
                    style={{ minWidth: 200 }}
                >
                    <span
                        className="text-xs uppercase tracking-[0.35em]"
                        style={{
                            color: colors.inkMuted,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                        }}
                    >
                        {leftRef}
                    </span>
                    <span
                        className="mt-3 text-xl md:text-2xl italic"
                        style={{
                            color: colors.inkAntique,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                        }}
                    >
                        {leftLabel}
                    </span>
                </motion.div>

                {/* Travessia central — fio sólido + ponto */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: delay + 0.5, duration: 1.1, ease: 'easeOut' }}
                    className="flex-1 relative"
                    style={{ height: 2, transformOrigin: 'left' }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to right, ${colors.inkAntique}55, ${colors.goldDawn}aa)`,
                        }}
                    />
                </motion.div>

                {/* Lado direito — Apocalipse 21 (com toque dourado) */}
                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 1.2, duration: 0.7 }}
                    className="flex flex-col items-center text-center flex-shrink-0"
                    style={{ minWidth: 200 }}
                >
                    <span
                        className="text-xs uppercase tracking-[0.35em]"
                        style={{
                            color: colors.goldDawn,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                        }}
                    >
                        {rightRef}
                    </span>
                    <span
                        className="mt-3 text-xl md:text-2xl italic"
                        style={{
                            color: colors.inkAntique,
                            fontFamily: fonts.display,
                            fontWeight: 500,
                        }}
                    >
                        {rightLabel}
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
}

// ========================================
// QUIET TITLE — título de slide com peso médio (não enorme)
// ========================================
export function QuietTitle({ children, align = 'center', size = 'lg', delay = 0, color }) {
    const sizeMap = {
        sm: 'text-2xl md:text-3xl',
        md: 'text-3xl md:text-4xl',
        lg: 'text-4xl md:text-5xl',
        xl: 'text-5xl md:text-6xl',
    };
    const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
    return (
        <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.9, ease: 'easeOut' }}
            className={`${sizeMap[size]} ${alignClass}`}
            style={{
                color: color || colors.inkAntique,
                fontFamily: fonts.display,
                fontWeight: 500,
                lineHeight: 1.18,
                letterSpacing: '-0.005em',
            }}
        >
            {children}
        </motion.h1>
    );
}

// ========================================
// NOTAS DO INSTRUTOR — pausas longas e lembrete pastoral
// ========================================
export const slideNotes = {
    0: {
        title: 'Capa',
        notes: [
            'Espaço respiratório. Não anunciar — deixar o título trabalhar sozinho.',
            'Lembrar: este é o pivô do curso (sai da fase forense, entra na narrativa).',
        ],
    },
    1: {
        title: 'Onde estamos',
        notes: [
            'Catorze lições para chegar aqui. A pergunta muda — de "podemos confiar?" para "que história está sendo contada?".',
            'Sem nostalgia, sem balanço. Apenas situar.',
        ],
    },
    2: {
        title: 'A tese',
        notes: [
            "'A morte entra no mundo e é finalmente vencida.'",
            '⏸ PAUSAR. Deixar a frase respirar antes de seguir. Esta é a frase mais importante depois do slide 11.',
            '🕊 Lembrete pastoral: a aluna está acompanhando uma morte real esta semana. Não suavizar, não enfatizar artificialmente.',
        ],
    },
    3: {
        title: 'Uma biblioteca, não um livro',
        notes: [
            '66 livros, ~40 autores, ~1.500 anos, 3 línguas.',
            'Os números são protagonistas. A unidade narrativa que vem depois é mais surpreendente quando se vê o material em primeiro lugar.',
        ],
    },
    4: {
        title: 'Coerência honesta',
        notes: [
            "'A unidade da Bíblia não é uniformidade.' — antecipar a objeção honesta antes que ela apareça.",
            'A imagem das quatro testemunhas de um mesmo acidente costuma ressoar com ela (mente forense, treino psicanalítico).',
        ],
    },
    5: {
        title: 'AT — quatro tempos',
        notes: [
            'Chamado / Falha / Lamento / Espera.',
            'Ler cada um devagar. Os 400 anos de silêncio no fim merecem destaque verbal — o slide só dá o esqueleto.',
        ],
    },
    6: {
        title: 'Gênesis 3:15',
        notes: [
            'A primeira promessa de derrota do mal — no momento mesmo da queda.',
            '⏸ PAUSAR depois da citação. "A história começa, e já aponta para o que ainda virá."',
        ],
    },
    7: {
        title: 'Os Evangelhos — quatro retratos',
        notes: [
            'João destacado. Eco da Lição 14: é a porta de entrada que vem depois das próximas três lições.',
            'Não vender João aqui. Apenas marcar.',
        ],
    },
    8: {
        title: 'Por que quatro',
        notes: [
            'Argumento honesto: testemunhas com narrativas idênticas geralmente combinaram histórias.',
            'A psicanalista entende esse argumento pela lente clínica.',
        ],
    },
    9: {
        title: 'Cartas e Apocalipse',
        notes: [
            'Vinte e uma cartas para situações reais. Apocalipse: linguagem simbólica, não cronograma.',
            'Preparar o terreno para o slide seguinte.',
        ],
    },
    10: {
        title: 'Apocalipse 21:1–5',
        notes: [
            '⭐ CORAÇÃO DA AULA. Primeira aparição do dourado-amanhecer e do fio sólido completo.',
            '🕊 Lembrete pastoral CRÍTICO: a aluna está acompanhando uma morte real esta semana. A frase "a morte já não existirá" vai chegar com peso.',
            'NÃO suavizar. NÃO enfatizar artificialmente. Deixar o texto fazer o trabalho.',
            '⏸ Pausa longa. Silêncio é parte do slide.',
        ],
    },
    11: {
        title: 'O arco',
        notes: [
            'Gênesis 3 (esquerda) → Apocalipse 21 (direita, com dourado).',
            "'Tudo entre os dois pontos é uma única história de resgate.'",
            '⏸ Deixar o diagrama respirar antes da linha de fechamento.',
        ],
    },
    12: {
        title: 'Por que isso importa',
        notes: [
            'Comparação respeitosa, não polêmica. Vedas, Alcorão, textos budistas, Bíblia.',
            "'Pode estar errada. Mas não é vaga.' — peso forte. Sem triunfalismo.",
        ],
    },
    13: {
        title: 'Convite para João',
        notes: [
            "'Gênesis e Apocalipse encontrados num só versículo.' — eco direto da Lição 14, fechando o díptico.",
            'Aqui o dourado-amanhecer marca a citação central — aterrissamos.',
        ],
    },
    14: {
        title: 'Encerramento',
        notes: [
            'Espaço quase vazio. Permitir a oração de fechamento sem distração visual.',
            'Apenas o fio sólido completo e o XV no canto. Nada mais.',
        ],
    },
};
