// Slide 03 - O Provérbio Italiano
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide03_ProverbioItaliano() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center text-center px-8 max-w-4xl mx-auto">
                {/* Provérbio em italiano */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                >
                    <p className="text-4xl md:text-6xl italic font-bold mb-2"
                        style={{
                            color: colors.goldBright,
                            fontFamily: "'Crimson Text', Georgia, serif"
                        }}
                    >
                        «Traduttore, traditore»
                    </p>
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        — provérbio italiano
                    </p>
                </motion.div>

                {/* Tradução */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl md:text-3xl mb-10 font-bold"
                    style={{ color: colors.alertTerracota }}
                >
                    «Tradutor, traidor»
                </motion.p>

                {/* Explicação */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="space-y-4"
                >
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        Não porque tradutores sejam desonestos.
                    </p>
                    <p className="text-lg" style={{ color: colors.textLight }}>
                        Mas porque línguas não são códigos simétricos<br />
                        onde cada palavra tem equivalente exato.
                    </p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 }}
                        className="text-2xl font-bold mt-6"
                        style={{ color: colors.goldAged }}
                    >
                        Línguas são mundos inteiros.
                    </motion.p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
