'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ImpactNumber, colors } from './shared';

export function Slide03() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="text-7xl mb-8"
                >
                    👓
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                    style={{
                        color: colors.warmWhite,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    O QUE É ANACRONISMO?
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-0.5 max-w-sm mx-auto mb-8"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.mapBlue}, transparent)` }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl mb-4"
                    style={{ color: colors.textLight }}
                >
                    Ler o passado com os óculos do presente.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-lg"
                    style={{ color: colors.textMedium }}
                >
                    É o erro mais comum e mais invisível na leitura bíblica.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="mt-10 inline-block px-6 py-3 rounded-xl"
                    style={{
                        background: `${colors.mapBlue}20`,
                        border: `1px solid ${colors.mapBlue}50`,
                    }}
                >
                    <p className="text-lg font-semibold" style={{ color: colors.mapBlue }}>
                        Três exemplos vão mostrar como isso funciona →
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
