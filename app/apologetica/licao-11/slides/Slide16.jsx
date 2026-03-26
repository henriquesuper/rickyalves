'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide16() {
    return (
        <ExcavationWrapper stratum="terracotta">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    BYTDWD — &ldquo;CASA DE DAVI&rdquo;
                </motion.h2>

                {/* Key points */}
                <div className="space-y-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-4 rounded-lg"
                        style={{
                            background: colors.bgSurface,
                            borderLeft: `3px solid ${colors.clayRed}`,
                        }}
                    >
                        <p style={{ color: colors.textLight }}>
                            <span className="font-bold" style={{ color: colors.clayRed }}>Até 1993:</span>{' '}
                            "Davi era uma figura lendária, invenção literária"
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg"
                        style={{
                            background: colors.bgSurface,
                            borderLeft: `3px solid ${colors.fieldGreen}`,
                        }}
                    >
                        <p style={{ color: colors.textLight }}>
                            <span className="font-bold" style={{ color: colors.fieldGreen }}>Depois de 1993:</span>{' '}
                            silêncio
                        </p>
                    </motion.div>
                </div>

                {/* Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 rounded-lg mb-4"
                    style={{
                        background: `${colors.bgDeep}`,
                        border: `1px solid ${colors.excavationAmber}15`,
                    }}
                >
                    <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                        A expressão &ldquo;Casa de Davi&rdquo; aparece 26x na Bíblia Hebraica. A Tel Dan mostra que vizinhos hostis também usavam o termo.
                    </p>
                </motion.div>

                {/* Parallel */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1.0 }}
                    className="text-sm text-center"
                    style={{ color: colors.textMedium }}
                >
                    Salmaneser III chamava Israel de &ldquo;Casa de Onri&rdquo;
                </motion.p>
            </div>
        </ExcavationWrapper>
    );
}
