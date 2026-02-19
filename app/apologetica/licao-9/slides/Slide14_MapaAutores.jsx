'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, ImpactNumber, colors } from './shared';

export default function Slide14_MapaAutores() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs uppercase tracking-[0.3em] mb-4 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Visão Panorâmica
                </motion.p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <ImpactNumber number="~40" label="autores" delay={0.3} color={colors.amber} />
                    <ImpactNumber number="1.500" label="anos" delay={0.5} color={colors.slateBlue} />
                    <ImpactNumber number="3" label="continentes" delay={0.7} color={colors.mossGreen} />
                </div>

                {/* Map image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="relative rounded-xl overflow-hidden border mb-6"
                    style={{ borderColor: `${colors.amber}30` }}
                >
                    <img
                        src="/images/licao-9/mapa-autores.png"
                        alt="Mapa dos autores da Bíblia — Antigo Oriente Próximo e Mediterrâneo"
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${colors.bgDeep}90 0%, transparent 40%, transparent 60%, ${colors.bgDeep}60 100%)`
                        }}
                    />
                </motion.div>

                {/* Professions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {['Reis', 'Pescadores', 'Médicos', 'Pastores', 'Profetas', 'Cobradores de impostos', 'Sacerdotes', 'Generais'].map((prof, i) => (
                        <motion.span
                            key={prof}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4 + i * 0.08 }}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                                background: `${colors.amber}15`,
                                border: `1px solid ${colors.amber}30`,
                                color: colors.amber,
                            }}
                        >
                            {prof}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 2 }}
                    className="text-center text-sm mt-6 italic"
                    style={{ color: colors.textMuted }}
                >
                    Sem email, sem telefone, sem congresso editorial. E a narrativa central é consistente.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
