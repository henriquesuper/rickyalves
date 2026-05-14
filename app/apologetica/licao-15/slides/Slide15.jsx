'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, RomanNumeral, colors } from './shared';

export function Slide15({ slideIndex = 14 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex} threadPosition="middle">
            <div className="max-w-5xl mx-auto px-8 relative w-full" style={{ minHeight: '60vh' }}>
                {/* Quase vazio. O fio horizontal sólido faz o trabalho.
                    XV discreto no canto inferior direito. */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1.2 }}
                    className="absolute"
                    style={{ bottom: '12vh', right: '6vw' }}
                >
                    <RomanNumeral
                        value="XV"
                        size="lg"
                        weight={300}
                        color={colors.goldDawn}
                        opacity={0.45}
                        delay={1.6}
                    />
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
