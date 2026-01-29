'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
    ScrollSection,
    BlurText,
    FocusReveal,
    DataReveal,
    StatementReveal,
    TheoryGrid,
    theories,
    FAQSection,
    ProgressIndicator,
    ScrollToTop
} from './components';

// Sections for progress indicator
const sections = [
    { id: 'hero', label: 'Início' },
    { id: 'question', label: 'A Pergunta' },
    { id: 'extremes', label: 'Extremos' },
    { id: 'phenomena', label: 'Fenômenos' },
    { id: 'theories', label: 'Teorias' },
    { id: 'solution', label: 'Solução' },
    { id: 'implications', label: 'Aplicação' },
    { id: 'faq', label: 'FAQ' }
];

// FAQ items para a Guga
const faqItems = [
    {
        question: "Se os autores escolheram as palavras, como sabemos que não erraram?",
        answer: "Deus guiou o processo. O Espírito 'carregou' os autores (2 Pedro 1:21). A supervisão divina garantiu que a mensagem fosse transmitida fielmente, mesmo através de instrumentos humanos. É como um barco sendo levado pelo vento — o barco mantém sua forma, mas o vento determina a direção."
    },
    {
        question: "Então a Bíblia tem erros?",
        answer: "Depende do que você chama de 'erro'. Imprecisões em detalhes periféricos (números exatos, cronologia)? Possivelmente. Erros na mensagem sobre Deus e salvação? Não. A Bíblia é confiável para seu propósito — revelar quem Deus é e como podemos nos relacionar com Ele."
    },
    {
        question: "Por que Deus não ditou para evitar problemas?",
        answer: "Deus valoriza a personalidade humana. Ele trabalha através de pessoas, não apesar delas. A encarnação é o exemplo máximo — Deus se tornou humano, não eliminou a humanidade. Da mesma forma, a Bíblia é divina e humana ao mesmo tempo."
    },
    {
        question: "Se cada palavra não é de Deus, como sei o que é verdade?",
        answer: "Olhe para a mensagem geral, os temas consistentes, a narrativa maior. Não construa doutrinas em uma única palavra; construa no consenso de toda a Escritura. Os grandes temas — amor de Deus, salvação pela graça, esperança da ressurreição — são cristalinos."
    },
    {
        question: "Isso não é conveniente demais? 'Erros são humanos, verdades são de Deus'?",
        answer: "Entendo a preocupação. Mas note: não estamos dizendo 'o que gosto é de Deus, o que não gosto é humano'. Estamos dizendo que a mensagem teológica é consistente e confiável, mesmo que detalhes verbais variem. Isso é o que os próprios textos mostram — e é mais honesto do que fingir que não existem variações."
    }
];

export default function Licao5Page() {
    const [activeSection, setActiveSection] = useState('hero');
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Track scroll position for active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            setShowScrollTop(window.scrollY > window.innerHeight);

            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* Progress Indicator */}
            <ProgressIndicator
                sections={sections}
                activeSection={activeSection}
                variant="pills"
            />

            {/* Scroll to Top Button */}
            <ScrollToTop show={showScrollTop} />

            {/* ========== SECTION 1: HERO ========== */}
            <ScrollSection id="hero" theme="light" minHeight={100}>
                <HeroSection />
            </ScrollSection>

            {/* ========== SECTION 2: THE QUESTION ========== */}
            <ScrollSection id="question" theme="dark" minHeight={150}>
                <QuestionSection />
            </ScrollSection>

            {/* ========== SECTION 3: THE EXTREMES ========== */}
            <ScrollSection id="extremes" theme="dark" minHeight={300}>
                <ExtremesSection />
            </ScrollSection>

            {/* ========== SECTION 4: THE PHENOMENA ========== */}
            <ScrollSection id="phenomena" theme="dark" minHeight={200}>
                <PhenomenaSection />
            </ScrollSection>

            {/* ========== SECTION 5: THE THEORIES ========== */}
            <ScrollSection id="theories" theme="dark" minHeight={120}>
                <TheoriesSection />
            </ScrollSection>

            {/* ========== SECTION 6: THE SOLUTION ========== */}
            <ScrollSection id="solution" theme="light" minHeight={150}>
                <SolutionSection />
            </ScrollSection>

            {/* ========== SECTION 7: IMPLICATIONS ========== */}
            <ScrollSection id="implications" theme="light" minHeight={100}>
                <ImplicationsSection />
            </ScrollSection>

            {/* ========== SECTION 8: FAQ ========== */}
            <ScrollSection id="faq" theme="warm" minHeight={100}>
                <div className="max-w-3xl mx-auto px-6 py-24">
                    <FAQSection
                        title="Perguntas da Guga"
                        items={faqItems}
                    />
                </div>
            </ScrollSection>

            {/* Footer */}
            <footer className="bg-[#1A1A1A] text-white/50 py-8 text-center text-sm">
                <p>Lição 5 — A Natureza da Inspiração Bíblica</p>
                <p className="mt-2">Apologética para Céticos</p>
            </footer>
        </div>
    );
}

// ============ SECTION COMPONENTS ============

function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <motion.div
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
            style={{ opacity, y }}
        >
            {/* Subtle decoration */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
            >
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A227] rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#8B4513] rounded-full blur-[80px]" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] leading-tight max-w-5xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                A Bíblia foi escrita por homens.
            </motion.h1>

            <motion.p
                className="text-2xl md:text-3xl text-[#666] mt-6 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Mas não é apenas humana.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-[#1A1A1A]/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-[#1A1A1A]/50 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

function QuestionSection() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
                <BlurText
                    text="Quando dizemos que a Bíblia é 'inspirada'... o que exatamente queremos dizer?"
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                    wordByWord={true}
                />
            </div>
        </div>
    );
}

function ExtremesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <div ref={ref} className="py-32 px-6">
            <div className="max-w-5xl mx-auto space-y-48">
                {/* Extreme 1 */}
                <div className="text-left max-w-3xl">
                    <motion.p
                        className="text-sm uppercase tracking-widest text-white/40 mb-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                    >
                        Extremo 1
                    </motion.p>
                    <StatementReveal
                        statement="DITADO MECÂNICO"
                        className="text-5xl md:text-7xl font-black text-white mb-6"
                    />
                    <motion.p
                        className="text-xl text-white/60"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        Deus ditou cada vírgula. Os autores eram secretárias passivas.
                        Moisés, Paulo e João seriam intercambiáveis.
                    </motion.p>
                </div>

                {/* Extreme 2 */}
                <div className="text-right max-w-3xl ml-auto">
                    <motion.p
                        className="text-sm uppercase tracking-widest text-white/40 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Extremo 2
                    </motion.p>
                    <StatementReveal
                        statement="LITERATURA HUMANA"
                        className="text-5xl md:text-7xl font-black text-white mb-6"
                    />
                    <motion.p
                        className="text-xl text-white/60"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        Reflexões religiosas de pessoas antigas.
                        Nada sobrenatural. Apenas sabedoria humana.
                    </motion.p>
                </div>

                {/* The Truth */}
                <div className="text-center py-24">
                    <BlurText
                        text="Ambos estão errados."
                        className="text-4xl md:text-6xl font-black text-white"
                        wordByWord={false}
                    />
                </div>
            </div>
        </div>
    );
}

function PhenomenaSection() {
    return (
        <div className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    <DataReveal
                        value="40+"
                        label="autores diferentes"
                        accent="#C9A227"
                        delay={0}
                    />
                    <DataReveal
                        value="1.500"
                        label="anos de história"
                        accent="#E8D5B7"
                        delay={0.3}
                    />
                    <DataReveal
                        value="1"
                        label="narrativa coerente"
                        accent="#10B981"
                        delay={0.6}
                    />
                </div>

                {/* The Phenomena */}
                <div className="max-w-3xl mx-auto space-y-16">
                    <motion.p
                        className="text-sm uppercase tracking-widest text-white/40 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Mas observe o texto...
                    </motion.p>

                    <FocusReveal
                        lines={[
                            <span key="1" className="text-2xl md:text-4xl font-semibold text-white">
                                "Paulo soa <span className="text-[#3B82F6]">completamente diferente</span> de João"
                            </span>,
                            <span key="2" className="text-2xl md:text-4xl font-semibold text-white">
                                "Lucas <span className="text-[#10B981]">pesquisou testemunhas</span>"
                            </span>,
                            <span key="3" className="text-2xl md:text-4xl font-semibold text-white">
                                "Os estilos <span className="text-[#F59E0B]">variam dramaticamente</span>"
                            </span>,
                            <span key="4" className="text-2xl md:text-4xl font-semibold text-white">
                                "Personalidades <span className="text-[#EC4899]">transparecem</span> nos textos"
                            </span>
                        ]}
                        className="text-center"
                    />
                </div>
            </div>
        </div>
    );
}

function TheoriesSection() {
    const [selectedTheory, setSelectedTheory] = useState(null);

    return (
        <div className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-black text-white text-center mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    As Teorias de Inspiração
                </motion.h2>
                <motion.p
                    className="text-xl text-white/60 text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Diferentes tradições, diferentes respostas
                </motion.p>

                <TheoryGrid
                    activeTheory={selectedTheory}
                    highlightedTheory="thought"
                    onSelect={setSelectedTheory}
                />
            </div>
        </div>
    );
}

function SolutionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <div ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
            {/* Introducing label */}
            <motion.p
                className="text-lg text-[#888] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
                Introducing
            </motion.p>

            {/* Main Title */}
            <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] text-center mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Inspiração de Pensamento
            </motion.h2>

            {/* Quote */}
            <motion.blockquote
                className="max-w-3xl text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
            >
                <p className="text-xl md:text-2xl text-[#444] italic leading-relaxed mb-6">
                    "Não são as palavras da Bíblia que são inspiradas, mas os homens é que o foram.
                    A inspiração não atua nas palavras do homem nem em suas expressões,
                    mas no próprio homem, que, sob a influência do Espírito Santo, é possuído de pensamentos."
                </p>
                <footer className="text-[#888]">
                    — Ellen White, Mensagens Escolhidas, vol. 1
                </footer>
            </motion.blockquote>

            {/* Visual Break */}
            <motion.div
                className="w-16 h-1 bg-[#C9A227] rounded-full my-16"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
            />

            {/* Key Points */}
            <motion.div
                className="max-w-2xl text-center text-lg text-[#555]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
            >
                <p>
                    Deus inspirou os autores, não ditou palavras.
                    As personalidades foram preservadas. A mensagem é confiável.
                </p>
            </motion.div>
        </div>
    );
}

function ImplicationsSection() {
    const implications = [
        { icon: '✓', text: 'Deus guiou os autores', color: '#10B981' },
        { icon: '✓', text: 'Personalidades preservadas', color: '#10B981' },
        { icon: '✓', text: 'Mensagem confiável', color: '#10B981' },
        { icon: '✓', text: 'Tensões são esperadas', color: '#F59E0B' },
        { icon: '✓', text: 'Bíblia como autoridade final', color: '#10B981' }
    ];

    return (
        <div className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-black text-[#1A1A1A] text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    O Que Isso Significa?
                </motion.h2>

                <div className="space-y-6">
                    {implications.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-4 text-xl"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span
                                className="text-2xl font-bold"
                                style={{ color: item.color }}
                            >
                                {item.icon}
                            </span>
                            <span className="text-[#333]">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
