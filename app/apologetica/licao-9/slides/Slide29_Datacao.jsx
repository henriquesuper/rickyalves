'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, InvestigationTimeline, QuizResponseBadge, colors } from './shared';

export default function Slide29_Datacao() {
    const timelineItems = [
        { label: 'Alexandre', year: '300-400 anos', highlight: false },
        { label: 'Augusto', year: '~150 anos', highlight: false },
        { label: 'Evangelhos', year: '30-60 anos', highlight: true },
        { label: '1 Coríntios', year: '<25 anos', highlight: true },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="A Questão da Datação"
                    subtitle="Aplicando o critério de forma consistente"
                    icon="📅"
                    protocol=""
                    delay={0.2}
                />

                <div className="flex justify-end mb-4">
                    <QuizResponseBadge questionNumber={3} delay={0.3} />
                </div>

                <InvestigationTimeline items={timelineItems} delay={0.5} className="mb-10" />

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="p-4 rounded-xl border"
                        style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.textMuted}30` }}
                    >
                        <h3 className="font-bold text-sm mb-2" style={{ color: colors.textMuted }}>Fontes sobre Alexandre</h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Escritas 300-400 anos depois. Ninguém propõe que Alexandre é fictício.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                        className="p-4 rounded-xl border"
                        style={{ background: `${colors.mossGreen}10`, borderColor: `${colors.mossGreen}30` }}
                    >
                        <h3 className="font-bold text-sm mb-2" style={{ color: colors.mossGreen }}>Documentos do NT</h3>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Excepcionalmente próximos para historiografia antiga.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="p-4 rounded-xl text-center"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-base" style={{ color: colors.warmWhite }}>
                        1 Coríntios 15:6 — Paulo escreve que Jesus apareceu a 500+ pessoas e acrescenta:
                    </p>
                    <p className="text-lg font-bold mt-2 italic"
                        style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        &ldquo;das quais a maioria ainda vive.&rdquo;
                    </p>
                    <p className="text-sm mt-1" style={{ color: colors.textMedium }}>
                        Convite explícito à verificação. As testemunhas estavam vivas.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
