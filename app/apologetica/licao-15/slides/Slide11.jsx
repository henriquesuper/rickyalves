'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, BiblicalQuote, colors } from './shared';

const lines = [
    'Vi novo céu e nova terra,',
    'pois o primeiro céu e a primeira terra passaram, e o mar já não existe.',
    'Vi também a cidade santa, a nova Jerusalém,',
    'que descia do céu, da parte de Deus,',
    'ataviada como noiva adornada para o seu esposo.',
    'Então, ouvi grande voz vinda do trono, dizendo:',
    'Eis o tabernáculo de Deus com os homens.',
    'Deus habitará com eles.',
    'Eles serão povos de Deus,',
    'e Deus mesmo estará com eles.',
    'E lhes enxugará dos olhos toda lágrima,',
    'e a morte já não existirá,',
    'já não haverá luto, nem pranto, nem dor,',
    'porque as primeiras coisas passaram.',
    'E o que está assentado no trono disse:',
    'Eis que faço novas todas as coisas...',
];

const emphasis = [
    'e a morte já não existirá',
    'já não haverá luto, nem pranto, nem dor',
];

export function Slide11({ slideIndex = 10 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-3xl mx-auto px-8 py-6 flex flex-col items-center justify-center w-full">
                <BiblicalQuote
                    reference="Apocalipse 21:1–5"
                    size="xs"
                    align="center"
                    delay={0.6}
                    useGold
                    lines={lines}
                    emphasis={emphasis}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 4.5, duration: 1.2 }}
                    className="mt-8"
                >
                    <span
                        style={{
                            color: colors.goldDawn,
                            fontFamily: 'var(--font-cormorant), Georgia, serif',
                            fontSize: '1rem',
                            letterSpacing: '0.4em',
                        }}
                    >
                        ·   ·   ·
                    </span>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
