'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DarkCaseHeader, colors } from './shared';

export default function Slide15_AberturaAT() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-7xl mb-6"
                >
                    📁
                </motion.div>

                <DarkCaseHeader
                    title="Antigo Testamento"
                    subtitle="Abrindo os dossiês"
                    icon=""
                    protocol="BLOCO 4 — CASOS AT"
                    delay={0.4}
                />

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="h-0.5 max-w-sm mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)` }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1 }}
                    className="text-lg italic"
                    style={{ color: colors.textDark, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Vamos examinar as evidências — caso por caso.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
