'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide42_TresAcordos() {
    const acordos = [
        {
            num: '①',
            title: 'Os autores são identificáveis e datáveis.',
            desc: 'Temos nomes, profissões, períodos. Não são anônimos.',
            color: colors.mossGreen,
        },
        {
            num: '②',
            title: 'Os textos são excepcionalmente bem preservados.',
            desc: 'O volume de manuscritos não tem paralelo na Antiguidade.',
            color: colors.slateBlue,
        },
        {
            num: '③',
            title: 'Debates existem — e são saudáveis.',
            desc: 'Reconhecem-se as lacunas com honestidade.',
            color: colors.amber,
        },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="O Que Todos os Lados Concordam"
                    icon="🤝"
                    delay={0.2}
                />

                <div className="space-y-4 mb-8">
                    {acordos.map((a, i) => (
                        <motion.div
                            key={a.num}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="p-5 rounded-xl border-l-4"
                            style={{ background: `${colors.bgSurface}CC`, borderLeftColor: a.color }}
                        >
                            <h3 className="font-bold text-lg mb-1" style={{ color: a.color }}>
                                {a.num} {a.title}
                            </h3>
                            <p className="text-sm" style={{ color: colors.textMedium }}>{a.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1.2 }}
                    className="text-center text-base italic"
                    style={{ color: colors.textMuted }}
                >
                    Céticos e conservadores concordam nestes três pontos. As divergências estão nas implicações.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
