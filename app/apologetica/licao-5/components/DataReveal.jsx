'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * DataReveal - Stats/dados que aparecem com animação dramática
 * 
 * @param {Object} props
 * @param {string} props.value - Valor principal (ex: "40+", "90%")
 * @param {string} props.label - Label descritivo
 * @param {string} props.accent - Cor de destaque para o valor
 * @param {'left' | 'right' | 'center'} props.position - Posição do stat
 */
export function DataReveal({
    value,
    label,
    accent = '#fff',
    position = 'center',
    delay = 0
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    const positionClass = {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center'
    };

    return (
        <motion.div
            ref={ref}
            className={`${positionClass[position]}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            <motion.div
                className="text-7xl md:text-9xl font-black tracking-tighter"
                style={{ color: accent }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
                {value}
            </motion.div>
            <motion.div
                className="text-xl md:text-2xl text-white/70 mt-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.5 }}
            >
                {label}
            </motion.div>
        </motion.div>
    );
}

/**
 * StatementReveal - Frase impactante com reveal dramático
 */
export function StatementReveal({
    statement,
    highlight,
    className = ''
}) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "start 0.3"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

    // Se tem highlight, dividir o statement
    const parts = highlight
        ? statement.split(highlight)
        : [statement];

    return (
        <motion.div
            ref={ref}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight ${className}`}
            style={{ opacity, scale, y }}
        >
            {highlight ? (
                <>
                    <span className="text-white">{parts[0]}</span>
                    <span className="text-red-500">{highlight}</span>
                    <span className="text-white">{parts[1]}</span>
                </>
            ) : (
                statement
            )}
        </motion.div>
    );
}

/**
 * CountUp - Número que conta de 0 até o valor
 */
export function CountUp({
    value,
    suffix = '',
    duration = 2
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Extrair número do value
    const numericValue = parseInt(value.replace(/\D/g, ''), 10);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration }}
            >
                {value}{suffix}
            </motion.span>
        </motion.span>
    );
}

/**
 * ProgressBar - Barra de progresso horizontal animada
 */
export function ProgressBar({
    progress = 0,
    color = '#fff',
    label = '',
    showPercentage = true
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="w-full">
            {label && (
                <div className="flex justify-between mb-2 text-sm text-white/70">
                    <span>{label}</span>
                    {showPercentage && <span>{progress}%</span>}
                </div>
            )}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${progress}%` } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

export default DataReveal;
