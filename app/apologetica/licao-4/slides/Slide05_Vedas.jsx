'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, traditions } from './shared';
import { useEffect, useState } from 'react';

const vedas = traditions.find(t => t.id === 'vedas');

// Cores tradicionais hindus
const hinduColors = {
    saffron: '#FF6B00',      // Açafrão - renúncia e busca da verdade
    gold: '#FFD700',          // Dourado - prosperidade e conhecimento
    crimson: '#DC143C',       // Carmesim - shakti e energia
    deepBlue: '#1E3A5F',      // Azul profundo - infinito
    turmeric: '#E3A857',      // Cúrcuma - auspicioso
    lotus: '#FF69B4',         // Rosa lótus - pureza
};

// Componente do símbolo Om animado com ondas radiantes
function OmSymbol() {
    return (
        <div className="relative flex items-center justify-center">
            {/* Ondas radiantes emanando do Om */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{ borderColor: hinduColors.saffron }}
                    initial={{ width: 80, height: 80, opacity: 0.8 }}
                    animate={{
                        width: [80, 200, 300],
                        height: [80, 200, 300],
                        opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Glow de fundo */}
            <motion.div
                className="absolute w-32 h-32 rounded-full blur-xl"
                style={{ background: `radial-gradient(circle, ${hinduColors.saffron}40, transparent)` }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Símbolo Om */}
            <motion.span
                className="text-8xl z-10 font-bold"
                style={{
                    color: hinduColors.gold,
                    textShadow: `0 0 30px ${hinduColors.saffron}, 0 0 60px ${hinduColors.saffron}50`,
                    fontFamily: 'serif'
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    textShadow: [
                        `0 0 30px ${hinduColors.saffron}, 0 0 60px ${hinduColors.saffron}50`,
                        `0 0 50px ${hinduColors.gold}, 0 0 80px ${hinduColors.saffron}`,
                        `0 0 30px ${hinduColors.saffron}, 0 0 60px ${hinduColors.saffron}50`,
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                ॐ
            </motion.span>
        </div>
    );
}

// Partículas de incenso flutuando
function IncenseParticles() {
    const particles = [...Array(20)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        size: 2 + Math.random() * 4,
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
                        background: `radial-gradient(circle, ${hinduColors.turmeric}80, ${hinduColors.saffron}40)`,
                    }}
                    animate={{
                        y: [0, -800],
                        x: [0, Math.sin(p.id) * 50, Math.cos(p.id) * 30, 0],
                        opacity: [0, 0.6, 0.4, 0],
                        scale: [0.5, 1.2, 0.8],
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

// Mandala decorativa SVG
function Mandala({ className = "", size = 400, opacity = 0.1 }) {
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
                rotate: { duration: 120, repeat: Infinity, ease: "linear" }
            }}
        >
            <defs>
                <linearGradient id="mandalaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={hinduColors.saffron} />
                    <stop offset="50%" stopColor={hinduColors.gold} />
                    <stop offset="100%" stopColor={hinduColors.crimson} />
                </linearGradient>
            </defs>

            {/* Pétalas externas */}
            {[...Array(12)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                    <ellipse
                        cx="50"
                        cy="15"
                        rx="8"
                        ry="15"
                        fill="none"
                        stroke="url(#mandalaGradient)"
                        strokeWidth="0.5"
                    />
                </g>
            ))}

            {/* Círculos concêntricos */}
            {[40, 30, 20, 10].map((r, i) => (
                <circle
                    key={i}
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="url(#mandalaGradient)"
                    strokeWidth="0.3"
                />
            ))}

            {/* Pétalas internas */}
            {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                    <path
                        d="M 50 50 Q 55 35 50 25 Q 45 35 50 50"
                        fill="none"
                        stroke="url(#mandalaGradient)"
                        strokeWidth="0.4"
                    />
                </g>
            ))}

            {/* Centro - flor de lótus simplificada */}
            <circle cx="50" cy="50" r="5" fill="none" stroke="url(#mandalaGradient)" strokeWidth="0.5" />
        </motion.svg>
    );
}

// Texto decorativo em Devanagari
function DevanagariDecor() {
    // Versos védicos em sânscrito (puramente decorativos)
    const verses = [
        "ॐ भूर्भुवः स्वः",
        "तत्सवितुर्वरेण्यं",
        "असतो मा सद्गमय",
        "तमसो मा ज्योतिर्गमय",
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {verses.map((verse, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl font-serif whitespace-nowrap"
                    style={{
                        color: `${hinduColors.gold}15`,
                        top: `${20 + i * 20}%`,
                        left: i % 2 === 0 ? '-10%' : 'auto',
                        right: i % 2 === 1 ? '-10%' : 'auto',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        x: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                >
                    {verse}
                </motion.div>
            ))}
        </div>
    );
}

// Borda estilo templo para os cards
function TempleCard({ children, delay = 0, fromLeft = true }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className="relative"
        >
            {/* Borda decorativa superior */}
            <div
                className="absolute -top-2 left-4 right-4 h-1 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${hinduColors.gold}, ${hinduColors.saffron}, ${hinduColors.gold}, transparent)`
                }}
            />

            {/* Card principal */}
            <div
                className="backdrop-blur-xl p-6 rounded-2xl border relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(30,58,95,0.3))`,
                    borderColor: `${hinduColors.saffron}40`,
                    borderWidth: '1px',
                }}
            >
                {/* Decoração de canto */}
                <div
                    className="absolute top-0 left-0 w-8 h-8"
                    style={{
                        borderTop: `2px solid ${hinduColors.gold}`,
                        borderLeft: `2px solid ${hinduColors.gold}`,
                        borderTopLeftRadius: '12px',
                    }}
                />
                <div
                    className="absolute top-0 right-0 w-8 h-8"
                    style={{
                        borderTop: `2px solid ${hinduColors.gold}`,
                        borderRight: `2px solid ${hinduColors.gold}`,
                        borderTopRightRadius: '12px',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-8 h-8"
                    style={{
                        borderBottom: `2px solid ${hinduColors.gold}`,
                        borderLeft: `2px solid ${hinduColors.gold}`,
                        borderBottomLeftRadius: '12px',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-8 h-8"
                    style={{
                        borderBottom: `2px solid ${hinduColors.gold}`,
                        borderRight: `2px solid ${hinduColors.gold}`,
                        borderBottomRightRadius: '12px',
                    }}
                />

                {children}
            </div>

            {/* Borda decorativa inferior */}
            <div
                className="absolute -bottom-2 left-4 right-4 h-1 rounded-full"
                style={{
                    background: `linear-gradient(90deg, transparent, ${hinduColors.crimson}, ${hinduColors.gold}, ${hinduColors.crimson}, transparent)`
                }}
            />
        </motion.div>
    );
}

export default function Slide05_Vedas() {
    return (
        <SlideWrapper>
            {/* Camadas de fundo decorativas */}
            <Mandala className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={800} opacity={0.05} />
            <Mandala className="-top-20 -left-20" size={400} opacity={0.08} />
            <Mandala className="-bottom-20 -right-20" size={400} opacity={0.08} />

            {/* Partículas de incenso */}
            <IncenseParticles />

            {/* Texto decorativo Devanagari */}
            <DevanagariDecor />

            {/* Gradiente de fundo temático */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at top, ${hinduColors.saffron}10 0%, transparent 50%),
                                radial-gradient(ellipse at bottom, ${hinduColors.crimson}10 0%, transparent 50%)`
                }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10 relative"
            >
                {/* Header com símbolo Om animado */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-10"
                >
                    <OmSymbol />

                    <motion.h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-6"
                        style={{
                            color: hinduColors.gold,
                            textShadow: `0 0 20px ${hinduColors.saffron}50`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {vedas.name}
                    </motion.h2>

                    {/* Subtítulo em sânscrito */}
                    <motion.p
                        className="text-lg mt-2 font-serif italic"
                        style={{ color: `${hinduColors.turmeric}80` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        वेदाः — "Conhecimento Sagrado"
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <TempleCard delay={0.3} fromLeft={true}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: hinduColors.gold }}>
                            <span>📜</span> Alegação
                            <span className="text-sm font-normal opacity-60 ml-2">श्रुति</span>
                        </h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            Conhecimento eterno (<em className="text-[#FF9500]">apaurusheya</em> — "não de origem humana").
                            Os Vedas não foram escritos; foram{' '}
                            <strong style={{ color: hinduColors.saffron }}>"ouvidos"</strong>{' '}
                            (<em className="text-[#FF9500]">shruti</em>) pelos sábios antigos. Existem eternamente, sem autor.
                        </p>
                    </TempleCard>

                    {/* Cosmovisão */}
                    <TempleCard delay={0.5} fromLeft={false}>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: hinduColors.gold }}>
                            <span>🌍</span> Cosmovisão
                            <span className="text-sm font-normal opacity-60 ml-2">दर्शन</span>
                        </h3>
                        <ul className="text-[#E8D5B7] text-lg space-y-3">
                            <li className="flex items-start gap-2">
                                <span style={{ color: hinduColors.lotus }}>❀</span>
                                <span>Realidade última (<em className="text-[#FF9500]">Brahman</em>) é <strong>impessoal</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: hinduColors.lotus }}>❀</span>
                                <span>Mundo material é <em className="text-[#FF9500]">maya</em> (ilusão)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span style={{ color: hinduColors.lotus }}>❀</span>
                                <span>Almas individuais são parte do todo cósmico</span>
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
                    {/* Borda decorativa estilo templo */}
                    <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 rounded-full text-sm font-bold"
                        style={{
                            background: `linear-gradient(90deg, ${hinduColors.saffron}, ${hinduColors.gold}, ${hinduColors.saffron})`,
                            color: '#000'
                        }}
                    >
                        📚 Textos Principais
                    </div>

                    <div
                        className="p-6 pt-8 rounded-2xl border relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${hinduColors.saffron}15, ${hinduColors.crimson}10, transparent)`,
                            borderColor: `${hinduColors.gold}30`,
                        }}
                    >
                        {/* Pequeno Om decorativo no canto */}
                        <span
                            className="absolute top-2 right-4 text-4xl opacity-20"
                            style={{ color: hinduColors.gold }}
                        >
                            ॐ
                        </span>

                        <p className="text-[#E8D5B7] leading-relaxed">
                            <strong style={{ color: hinduColors.gold }}>
                                Rigveda, Samaveda, Yajurveda, Atharvaveda
                            </strong>{' '}
                            — compostos entre{' '}
                            <span className="px-2 py-0.5 rounded" style={{ background: `${hinduColors.saffron}20`, color: hinduColors.turmeric }}>
                                1500-500 a.C.
                            </span>
                            , tradição oral muito anterior. Hinos, rituais e especulações filosóficas.
                            <span className="text-white/50 block mt-2 italic">
                                ⚠️ Não é narrativa histórica.
                            </span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
