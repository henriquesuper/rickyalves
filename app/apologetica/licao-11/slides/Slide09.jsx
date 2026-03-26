'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, ExcavationSeal, StratumHeader, EvidenceScale, BrushReveal, StampBadge, colors, quizQuestions } from './shared';

export function Slide09() {
    return (
        <ExcavationWrapper stratum="topsoil">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl font-bold mb-8 text-center"
                    style={{ color: colors.textLight }}
                >
                    AUSÊNCIA DE EVIDÊNCIA ≠ EVIDÊNCIA DE AUSÊNCIA
                </motion.h2>

                {/* Duas colunas */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Coluna esquerda */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="rounded-xl p-5"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.excavationAmber}15`,
                        }}
                    >
                        <p className="text-lg font-bold mb-3" style={{ color: colors.excavationAmber }}>
                            🇧🇷 Ano 5026
                        </p>
                        <div className="space-y-2 text-sm" style={{ color: colors.textMedium }}>
                            <p>Arqueólogos escavam o Brasil. Encontram São Paulo, Brasília, algumas estradas...</p>
                            <p>Mas <span className="font-bold" style={{ color: colors.textLight }}>NÃO</span> encontram Votorantim.</p>
                            <p className="font-bold pt-2" style={{ color: colors.textLight }}>
                                Votorantim não existia?
                            </p>
                        </div>
                    </motion.div>

                    {/* Coluna direita */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="rounded-xl p-5"
                        style={{
                            background: colors.bgSurface,
                            border: `1px solid ${colors.excavationAmber}15`,
                        }}
                    >
                        <p className="text-lg font-bold mb-3" style={{ color: colors.excavationAmber }}>
                            📊 Os números
                        </p>
                        <div className="space-y-2 text-sm" style={{ color: colors.textMedium }}>
                            <p>Apenas uma fração do mundo antigo foi escavada</p>
                            <p>Muitas cidades bíblicas estão sob cidades modernas</p>
                            <p>Matéria orgânica se decompõe</p>
                            <p>Guerras e reconstruções destroem camadas</p>
                        </div>
                    </motion.div>
                </div>

                {/* Insight inferior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-6 p-4 rounded-xl text-center"
                    style={{
                        background: `${colors.bgSurface}`,
                        border: `1px solid ${colors.excavationAmber}30`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        Exemplo: Até 1993, <span style={{ color: colors.excavationAmber, fontWeight: 'bold' }}>zero evidência</span> do Rei Davi fora da Bíblia.
                        Então a <span style={{ color: colors.excavationAmber, fontWeight: 'bold' }}>Estela de Tel Dan</span> foi descoberta.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
