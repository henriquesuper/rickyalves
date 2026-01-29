'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

const criteria = [
    {
        icon: "👥",
        title: "Apostolicidade",
        description: "Escrito por um apóstolo ou alguém próximo a eles",
        examples: ["Mateus, João — apóstolos", "Marcos — companheiro de Pedro", "Lucas — companheiro de Paulo"],
        color: colors.goldLeaf
    },
    {
        icon: "✓",
        title: "Ortodoxia",
        description: "Ensina doutrina consistente com o ensino apostólico",
        examples: ["Evangelho de Tomé — REJEITADO", "Gnósticos contradiziam a cruz"],
        color: colors.vermillion
    },
    {
        icon: "🌍",
        title: "Catolicidade",
        description: "Aceito pela igreja universal, não apenas local",
        examples: ["Se só uma região aceitava → suspeito", "Se todo o império aceitava → peso"],
        color: colors.lapis
    },
    {
        icon: "⛪",
        title: "Uso Litúrgico",
        description: "Lido publicamente nos cultos da igreja",
        examples: ["Herança do judaísmo (ler Torah)", "Cartas apostólicas lidas igual"],
        color: colors.forest
    }
];

export default function Slide13_CriteriosNT() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Critérios do Cânon do NT
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    Processo orgânico guiado pelo Espírito Santo
                </motion.p>

                {/* Grid de critérios */}
                <div className="grid md:grid-cols-2 gap-6">
                    {criteria.map((criterion, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.15 }}
                        >
                            <ParchmentCard>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                                        style={{
                                            background: `${criterion.color}30`,
                                            border: `2px solid ${criterion.color}60`
                                        }}
                                    >
                                        {criterion.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold" style={{ color: criterion.color }}>
                                            {criterion.title}
                                        </h3>
                                        <p className="text-sm mt-1" style={{ color: colors.parchmentLight }}>
                                            {criterion.description}
                                        </p>
                                        <div className="mt-2 space-y-1">
                                            {criterion.examples.map((ex, j) => (
                                                <p key={j} className="text-xs" style={{ color: colors.parchmentMid }}>
                                                    • {ex}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ParchmentCard>
                        </motion.div>
                    ))}
                </div>

                {/* Nota importante */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">💡</span>
                            <p style={{ color: colors.parchmentLight }}>
                                Esses critérios <strong>não foram aplicados formalmente</strong> por um comitê.
                                Era <strong>processo orgânico</strong>, guiado (cremos) pelo Espírito Santo
                                capacitando a igreja a reconhecer a <em>voz do Bom Pastor</em>.
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
