'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Dados das teorias de inspiração
export const theories = [
    {
        id: 'dictation',
        name: 'Ditado Mecânico',
        icon: '📝',
        color: '#EF4444',
        status: 'rejected',
        summary: 'Deus ditou cada palavra. Autores passivos.',
        defenders: 'Islã (Alcorão); poucos cristãos',
        problem: 'Não explica diversidade de estilos'
    },
    {
        id: 'verbal-plenary',
        name: 'Verbal Plenária',
        icon: '📖',
        color: '#3B82F6',
        status: 'evangelical',
        summary: 'Palavras inspiradas, não ditadas. Autores guiados.',
        defenders: 'Evangélicos conservadores',
        problem: 'Debates sobre inerrância'
    },
    {
        id: 'thought',
        name: 'Inspiração de Pensamento',
        icon: '💭',
        color: '#10B981',
        status: 'adventist',
        summary: 'Ideias inspiradas; palavras humanas.',
        defenders: 'Adventistas; alguns evangélicos',
        problem: 'Onde termina pensamento e começa palavra?'
    },
    {
        id: 'partial',
        name: 'Inspiração Parcial',
        icon: '⚠️',
        color: '#F59E0B',
        status: 'liberal',
        summary: 'Apenas partes religiosas são inspiradas.',
        defenders: 'Teologia liberal',
        problem: 'Quem decide o que é inspirado?'
    },
    {
        id: 'catholic',
        name: 'Posição Católica',
        icon: '⛪',
        color: '#8B5CF6',
        status: 'tradition',
        summary: 'Escritura + Tradição + Magistério.',
        defenders: 'Igreja Católica',
        problem: 'Tradição acima da Escritura?'
    },
    {
        id: 'orthodox',
        name: 'Posição Ortodoxa',
        icon: '☦️',
        color: '#EC4899',
        status: 'tradition',
        summary: 'Bíblia como parte da Tradição Santa.',
        defenders: 'Igreja Ortodoxa Oriental',
        problem: 'Consenso patrístico como filtro'
    }
];

/**
 * TheoryCard - Card para cada teoria de inspiração
 */
export function TheoryCard({
    theory,
    isActive = false,
    isHighlighted = false,
    onClick,
    delay = 0
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const statusBadge = {
        rejected: { text: 'Rejeitada', bg: 'bg-red-500/20', border: 'border-red-500/30' },
        evangelical: { text: 'Evangélica', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
        adventist: { text: 'Adventista', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30' },
        liberal: { text: 'Liberal', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
        tradition: { text: 'Tradição', bg: 'bg-purple-500/20', border: 'border-purple-500/30' }
    };

    const badge = statusBadge[theory.status];

    return (
        <motion.div
            ref={ref}
            className={`
                relative p-6 rounded-2xl cursor-pointer
                transition-all duration-300
                ${isActive || isHighlighted
                    ? 'bg-white/10 border-2 scale-105'
                    : 'bg-black/20 border border-white/10 hover:bg-white/5'
                }
            `}
            style={{
                borderColor: isActive || isHighlighted ? theory.color : undefined
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            onClick={onClick}
            whileHover={{ scale: isActive ? 1.05 : 1.02 }}
        >
            {/* Glow effect when active */}
            {(isActive || isHighlighted) && (
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-20"
                    style={{
                        background: `radial-gradient(circle at center, ${theory.color}, transparent 70%)`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                />
            )}

            {/* Icon */}
            <div className="text-4xl mb-3">{theory.icon}</div>

            {/* Title */}
            <h3
                className="text-xl font-bold mb-2"
                style={{ color: isActive || isHighlighted ? theory.color : '#fff' }}
            >
                {theory.name}
            </h3>

            {/* Badge */}
            <div className={`inline-block px-2 py-1 rounded-full text-xs mb-3 ${badge.bg} ${badge.border} border`}>
                {badge.text}
            </div>

            {/* Summary */}
            <p className="text-sm text-white/70 mb-2">
                {theory.summary}
            </p>

            {/* Defenders */}
            <p className="text-xs text-white/50">
                {theory.defenders}
            </p>
        </motion.div>
    );
}

/**
 * TheoryGrid - Grid de todas as teorias
 */
export function TheoryGrid({
    activeTheory = null,
    highlightedTheory = 'thought',
    onSelect
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theories.map((theory, index) => (
                <TheoryCard
                    key={theory.id}
                    theory={theory}
                    isActive={activeTheory === theory.id}
                    isHighlighted={highlightedTheory === theory.id}
                    onClick={() => onSelect?.(theory.id)}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
}

/**
 * TheoryComparison - Comparação lado a lado de teorias
 */
export function TheoryComparison({ leftTheory, rightTheory }) {
    const left = theories.find(t => t.id === leftTheory);
    const right = theories.find(t => t.id === rightTheory);

    if (!left || !right) return null;

    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
                <div className="text-6xl mb-4">{left.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: left.color }}>
                    {left.name}
                </h3>
                <p className="text-white/70">{left.summary}</p>
            </div>
            <div className="text-center">
                <div className="text-6xl mb-4">{right.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: right.color }}>
                    {right.name}
                </h3>
                <p className="text-white/70">{right.summary}</p>
            </div>
        </div>
    );
}

export default TheoryCard;
