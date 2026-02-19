'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, SuspectCard, colors } from './shared';

export default function Slide33_HebreusCandidatos() {
    const candidatos = [
        { name: 'PAULO', role: 'Apóstolo dos gentios', argument: 'Teologia compatível, mas estilo grego muito diferente das cartas paulinas.', icon: '✍️' },
        { name: 'APOLO', role: 'Judeu alexandrino, eloquente', argument: 'Atos 18 descreve como "poderoso nas Escrituras". Favorito de Lutero.', icon: '📚' },
        { name: 'BARNABÉ', role: 'Levita, conhecimento sacerdotal', argument: 'Proposta de Tertuliano (séc. II). Acesso ao sistema do templo.', icon: '🏛️' },
        { name: 'PRISCILA', role: 'Ensinava com autoridade (At 18)', argument: 'Anonimato como proteção para autora feminina. Proposta de Harnack (séc. XIX).', icon: '👩‍🏫' },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Hebreus: Os Candidatos"
                    subtitle="Mural de investigação"
                    icon="🕵️"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {candidatos.map((c, i) => (
                        <SuspectCard
                            key={c.name}
                            name={c.name}
                            role={c.role}
                            argument={c.argument}
                            icon={c.icon}
                            delay={0.4 + i * 0.15}
                        />
                    ))}
                </div>

                {/* Connecting lines visual */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center p-3 rounded-xl"
                    style={{ background: `${colors.bgSurface}CC`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-base" style={{ color: colors.warmWhite }}>
                        Quatro candidatos sérios. Nenhuma certeza.
                    </p>
                    <p className="text-sm mt-1 italic" style={{ color: colors.amber }}>
                        Isso é evidência de honestidade — não de fraqueza.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
