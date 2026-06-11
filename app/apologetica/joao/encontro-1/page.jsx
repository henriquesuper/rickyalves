'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Slides from './slides';
import { colors, fonts, TOTAL_SLIDES } from './slides/shared';

const slideKeys = Object.keys(Slides)
    .filter(key => key.startsWith('Slide'))
    .sort();

// Intervalos em índice zero.
const MOVEMENTS = [
    { roman: 'I',   label: 'O Prólogo',      chapter: 'João 1.1–18',  start: 0,  end: 21, accentKey: 'lapis' },
    { roman: 'II',  label: 'Testemunhas',    chapter: 'João 1.19–51', start: 22, end: 33, accentKey: 'gold' },
    { roman: 'III', label: 'Sinal e Templo', chapter: 'João 2',       start: 34, end: 41, accentKey: 'wine' },
    { roman: 'IV',  label: 'Nicodemos',      chapter: 'João 3',       start: 42, end: 55, accentKey: 'lapisDeep' },
    { roman: 'V',   label: 'O Poço',         chapter: 'João 4',       start: 56, end: 69, accentKey: 'lapisSoft' },
    { roman: 'VI',  label: 'Betesda',        chapter: 'João 5',       start: 70, end: 80, accentKey: 'wine' },
    { roman: 'VII', label: 'O Pão',          chapter: 'João 6',       start: 81, end: 93, accentKey: 'gold' },
];

function movementFor(index0) {
    const mov = MOVEMENTS.find(m => index0 >= m.start && index0 <= m.end) ?? MOVEMENTS[MOVEMENTS.length - 1];
    return { ...mov, accent: colors[mov.accentKey] };
}

const STORAGE_KEY = 'joao-encontro-1-slide';

function MovementNav({ open, onClose, current, onJump }) {
    if (!open) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            style={{ background: `${colors.inkDeep}CC`, backdropFilter: 'blur(6px)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full max-w-xl mx-4 px-8 py-8"
                style={{
                    background: colors.parchment,
                    border: `1px solid ${colors.inkSoft}40`,
                    borderRadius: '2px',
                }}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-label="Menu de Movimentos"
            >
                <p
                    className="text-xs uppercase tracking-[0.45em] mb-6 text-center"
                    style={{ color: colors.inkMuted, fontFamily: fonts.body, fontVariant: 'small-caps' }}
                >
                    Encontro 1 · João 1–6
                </p>
                {MOVEMENTS.map((m, i) => {
                    const active = current >= m.start && current <= m.end;
                    const accent = colors[m.accentKey];
                    return (
                        <button
                            key={m.roman}
                            onClick={() => { onJump(m.start); onClose(); }}
                            className="w-full flex items-baseline justify-between px-4 py-3 my-1 text-left transition-colors hover:bg-black/5"
                            style={{
                                background: active ? `${accent}14` : 'transparent',
                                borderLeft: `2px solid ${active ? accent : 'transparent'}`,
                                fontFamily: fonts.body,
                            }}
                        >
                            <span className="flex items-baseline gap-4">
                                <span className="text-sm w-8" style={{ color: accent, fontVariant: 'small-caps' }}>
                                    {m.roman}
                                </span>
                                <span style={{ color: colors.inkDeep }}>{m.label}</span>
                            </span>
                            <span className="text-xs" style={{ color: colors.inkMuted, letterSpacing: '0.1em' }}>
                                {m.chapter} · {m.start + 1}–{m.end + 1}
                            </span>
                        </button>
                    );
                })}
                <p className="text-[10px] mt-6 text-center" style={{ color: colors.inkMuted, letterSpacing: '0.1em' }}>
                    Teclas 1–7 pulam direto · M abre e fecha · Esc fecha
                </p>
            </motion.div>
        </motion.div>
    );
}

export default function JoaoEncontro1Viewer() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [resumeHint, setResumeHint] = useState(null); // slide salvo, se houver
    const [menuOpen, setMenuOpen] = useState(false);
    const totalSlides = slideKeys.length || TOTAL_SLIDES;

    const nextSlide = () => {
        if (currentSlideIndex < totalSlides - 1) {
            setCurrentSlideIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(prev => prev - 1);
        }
    };

    // Inicialização: ?slide= tem prioridade; senão, oferece retomada
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const fromUrl = parseInt(params.get('slide'), 10);
        const saved = parseInt(localStorage.getItem(STORAGE_KEY), 10);

        if (!isNaN(fromUrl) && fromUrl >= 1 && fromUrl <= totalSlides) {
            setCurrentSlideIndex(fromUrl - 1);
        } else if (!isNaN(saved) && saved >= 0 && saved < totalSlides) {
            setResumeHint(saved); // mostra o pill; não pula sozinho
            const t = setTimeout(() => setResumeHint(null), 8000);
            return () => clearTimeout(t);
        }
    }, [totalSlides]);

    // Persistência: localStorage + URL sempre atualizados
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, String(currentSlideIndex));
        const url = new URL(window.location);
        url.searchParams.set('slide', String(currentSlideIndex + 1));
        window.history.replaceState({}, '', url);
    }, [currentSlideIndex]);

    // Teclado: M para o menu, 1–7 para os movimentos
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'm' || e.key === 'M') {
                setMenuOpen(open => !open);
                return;
            }
            if (e.key === 'Escape') { setMenuOpen(false); return; }

            const num = parseInt(e.key, 10);
            if (num >= 1 && num <= MOVEMENTS.length) {
                setCurrentSlideIndex(MOVEMENTS[num - 1].start);
                setMenuOpen(false);
                return;
            }

            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen?.();
                } else {
                    document.exitFullscreen?.();
                }
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlideIndex, totalSlides]);

    const SlideComponent = slideKeys[currentSlideIndex] ? Slides[slideKeys[currentSlideIndex]] : null;
    const displayNumber = currentSlideIndex + 1;
    const mov = movementFor(currentSlideIndex);

    return (
        <div
            className="min-h-screen relative"
            style={{ background: colors.parchment, color: colors.inkDeep, fontFamily: fonts.body }}
        >
            <MovementNav 
                open={menuOpen} 
                onClose={() => setMenuOpen(false)} 
                current={currentSlideIndex} 
                onJump={setCurrentSlideIndex} 
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="min-h-screen relative z-10"
                >
                    {SlideComponent ? (
                        <SlideComponent slideIndex={currentSlideIndex} />
                    ) : (
                        <div className="min-h-screen flex items-center justify-center">
                            <p style={{ color: colors.inkMuted }}>Carregando slide...</p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Pill de retomada */}
            <AnimatePresence>
                {resumeHint !== null && (
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={() => { setCurrentSlideIndex(resumeHint); setResumeHint(null); }}
                        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2 text-sm rounded-full shadow-md hover:opacity-90 transition-opacity"
                        style={{
                            background: colors.parchmentDeep,
                            border: `1px solid ${colors.gold}66`,
                            color: colors.inkDeep,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                            letterSpacing: '0.12em',
                        }}
                    >
                        Continuar do slide {resumeHint + 1} →
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Barra inferior */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between"
                style={{
                    background: `${colors.parchmentDeep}EE`,
                    borderTop: `1px solid ${colors.inkSoft}30`,
                    backdropFilter: 'blur(8px)',
                }}
            >
                <button
                    onClick={prevSlide}
                    disabled={currentSlideIndex === 0}
                    className="px-4 py-2 rounded text-sm transition-opacity"
                    style={{
                        background: 'transparent',
                        color: colors.inkDeep,
                        border: `1px solid ${colors.inkSoft}55`,
                        opacity: currentSlideIndex === 0 ? 0.3 : 1,
                        cursor: currentSlideIndex === 0 ? 'default' : 'pointer',
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        letterSpacing: '0.15em',
                    }}
                >
                    ← Voltar
                </button>
                
                <div className="flex flex-col items-center">
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menu de movimentos"
                        className="text-sm tracking-[0.2em] hover:opacity-80 transition-opacity focus:outline-none"
                        style={{
                            color: mov.accent,
                            fontFamily: fonts.body,
                            fontVariant: 'small-caps',
                        }}
                    >
                        Mov. {mov.roman} · {mov.label} · {mov.chapter} — {displayNumber} / {totalSlides}
                    </button>
                    <span
                        className="text-[10px] mt-0.5"
                        style={{
                            color: colors.inkMuted,
                            fontFamily: fonts.body,
                            letterSpacing: '0.1em',
                        }}
                    >
                        Encontro 1 · João 1–6 · M para menu · setas ↕ para navegar · &quot;F&quot; fullscreen
                    </span>
                </div>

                <button
                    onClick={nextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="px-4 py-2 rounded text-sm transition-opacity"
                    style={{
                        background: mov.accent,
                        color: colors.parchment,
                        border: `1px solid ${mov.accent}`,
                        opacity: currentSlideIndex === totalSlides - 1 ? 0.3 : 1,
                        cursor: currentSlideIndex === totalSlides - 1 ? 'default' : 'pointer',
                        fontFamily: fonts.body,
                        fontVariant: 'small-caps',
                        letterSpacing: '0.15em',
                    }}
                >
                    Avançar →
                </button>
            </div>
        </div>
    );
}
