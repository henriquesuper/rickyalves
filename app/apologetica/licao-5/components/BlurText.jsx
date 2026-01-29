'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo } from 'react';

/**
 * BlurText - Texto com blur progressivo controlado por scroll
 */
export function BlurText({
    text,
    className = '',
    wordByWord = true,
    align = 'center'
}) {
    const alignClass = {
        center: 'text-center justify-center',
        left: 'text-left justify-start',
        right: 'text-right justify-end'
    };

    if (wordByWord) {
        return (
            <BlurTextWordByWord
                text={text}
                className={className}
                alignClass={alignClass[align]}
            />
        );
    }

    return (
        <BlurTextFull
            text={text}
            className={className}
            alignClass={alignClass[align]}
        />
    );
}

// Component for word-by-word blur animation
function BlurTextWordByWord({ text, className, alignClass }) {
    const containerRef = useRef(null);
    const words = useMemo(() => text.split(' '), [text]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"]
    });

    return (
        <div
            ref={containerRef}
            className={`flex flex-wrap gap-x-3 gap-y-1 ${alignClass} ${className}`}
        >
            {words.map((word, index) => (
                <BlurWord
                    key={index}
                    word={word}
                    scrollProgress={scrollYProgress}
                    index={index}
                    total={words.length}
                />
            ))}
        </div>
    );
}

// Component for full text blur animation
function BlurTextFull({ text, className, alignClass }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"]
    });

    const blur = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
    const filterBlur = useTransform(blur, v => `blur(${v}px)`);

    return (
        <motion.div
            ref={containerRef}
            className={`${className} ${alignClass}`}
            style={{
                filter: filterBlur,
                opacity
            }}
        >
            {text}
        </motion.div>
    );
}

function BlurWord({ word, scrollProgress, index, total }) {
    const start = index / total;
    const end = (index + 1) / total;

    const blur = useTransform(scrollProgress, [start, end], [15, 0]);
    const opacity = useTransform(
        scrollProgress,
        [start, (start + end) / 2, end],
        [0.2, 0.7, 1]
    );
    const filterBlur = useTransform(blur, v => `blur(${v}px)`);

    return (
        <motion.span style={{ filter: filterBlur, opacity }}>
            {word}
        </motion.span>
    );
}

/**
 * FocusReveal - Texto que entra em foco linha por linha
 */
export function FocusReveal({ lines, className = '' }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.7", "end 0.3"]
    });

    return (
        <div ref={containerRef} className={`space-y-8 ${className}`}>
            {lines.map((line, index) => (
                <FocusLine
                    key={index}
                    line={line}
                    scrollProgress={scrollYProgress}
                    index={index}
                    total={lines.length}
                />
            ))}
        </div>
    );
}

function FocusLine({ line, scrollProgress, index, total }) {
    const start = index / total;
    const end = (index + 0.8) / total;

    const opacity = useTransform(scrollProgress, [start, end], [0, 1]);
    const y = useTransform(scrollProgress, [start, end], [30, 0]);
    const blur = useTransform(scrollProgress, [start, end], [10, 0]);
    const filterBlur = useTransform(blur, v => `blur(${v}px)`);

    return (
        <motion.div style={{ opacity, y, filter: filterBlur }}>
            {line}
        </motion.div>
    );
}

export default BlurText;
