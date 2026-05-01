'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, CategoryCard, colors } from './shared';

export function Slide36() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <CategoryCard
                    letter="E"
                    title="Citações diretas e ecos no NT"
                    accentColor={colors.vectorRose}
                    description="O NT cita o AT cerca de 300 vezes diretamente, com centenas de alusões adicionais. A maioria dessas citações tem aplicação cristológica."
                    criteria={[
                        'Cumprimento — "para que se cumprisse o que foi dito"',
                        'Tipologia — citação que invoca a estrutura tipo/antitipo',
                        'Contraste — "ouvistes que foi dito... eu, porém, vos digo"',
                        'Ampliação — citação cujo sentido escala em Cristo',
                    ]}
                    delay={0.3}
                />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="mt-6 grid grid-cols-3 gap-4 text-center"
                >
                    {[
                        { num: '~300', label: 'Citações diretas' },
                        { num: '~700', label: 'Alusões + ecos' },
                        { num: '~10%', label: 'do NT é AT' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.15 }}
                            className="rounded-xl p-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.vectorRose}40`,
                            }}
                        >
                            <p
                                className="text-2xl md:text-3xl font-bold"
                                style={{ color: colors.vectorRose, fontFamily: "'Oswald', sans-serif" }}
                            >
                                {stat.num}
                            </p>
                            <p className="text-xs uppercase tracking-wider mt-1" style={{ color: colors.textMuted }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </ConvergenceWrapper>
    );
}
