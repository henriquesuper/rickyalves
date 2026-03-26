'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide31() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight }}
                >
                    CINCO PÓRTICOS — LITERAIS
                </motion.h2>

                {/* Two-column: Antes / Depois */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Antes */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-lg"
                        style={{
                            background: colors.bgSurface,
                            borderLeft: `3px solid ${colors.clayRed}`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: colors.clayRed }}>
                            Antes
                        </p>
                        <p className="text-base" style={{ color: colors.textLight }}>
                            Estudiosos: &ldquo;Cinco pórticos = cinco livros de Moisés. É alegoria, não arquitetura.&rdquo;
                        </p>
                    </motion.div>

                    {/* Depois */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-lg"
                        style={{
                            background: colors.bgSurface,
                            borderLeft: `3px solid ${colors.fieldGreen}`,
                        }}
                    >
                        <p className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: colors.fieldGreen }}>
                            Depois
                        </p>
                        <p className="text-base" style={{ color: colors.textLight }}>
                            Escavações revelaram: duas piscinas divididas por um muro central. 4 pórticos nas laterais + 1 no muro = 5.
                        </p>
                    </motion.div>
                </div>

                {/* Insight box */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="p-4 rounded-lg text-center"
                    style={{
                        background: `${colors.excavationAmber}10`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm italic" style={{ color: colors.excavationAmber }}>
                        Como a piscina foi destruída em 70 d.C., quem escreveu João 5 conhecia Jerusalém antes da destruição. Evidência de testemunha ocular.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
