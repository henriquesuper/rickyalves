'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, QuizResponseBadge, colors } from './shared';

export default function Slide19_Isaias() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Caso: Isaías"
                    subtitle="O debate mais importante do Antigo Testamento"
                    icon="⚔️"
                    protocol="CASO AT-03 · ESPECIAL"
                    delay={0.2}
                />

                <div className="flex justify-end mb-4">
                    <QuizResponseBadge questionNumber={6} delay={0.4} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Proto-Isaías */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.slateBlue}30` }}
                    >
                        <h3 className="font-bold text-lg mb-3" style={{ color: colors.slateBlue }}>
                            Capítulos 1–39
                        </h3>
                        <p className="text-sm mb-2" style={{ color: colors.textLight }}>
                            &quot;Proto-Isaías&quot; — contexto assírio
                        </p>
                        <ul className="text-sm space-y-1" style={{ color: colors.textMedium }}>
                            <li>• Isaías de Jerusalém, séc. VIII a.C.</li>
                            <li>• Confirmado pela tradição e pelo texto</li>
                            <li>• Sem controvérsia significativa</li>
                        </ul>
                    </motion.div>

                    {/* Dêutero-Isaías */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.wineRed}30` }}
                    >
                        <h3 className="font-bold text-lg mb-3" style={{ color: colors.wineRed }}>
                            Capítulos 40–66
                        </h3>
                        <p className="text-sm mb-2" style={{ color: colors.textLight }}>
                            &quot;Dêutero-Isaías&quot; — contexto babilônico
                        </p>
                        <ul className="text-sm space-y-1" style={{ color: colors.textMedium }}>
                            <li>• Mudança de tom e vocabulário</li>
                            <li>• Menção de Ciro pelo nome (44-45)</li>
                            <li>• Crítica propõe autor diferente, pós-exílio</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-6 p-3 rounded-lg"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}20` }}
                >
                    <p className="text-sm" style={{ color: colors.amber }}>
                        ⚠️ Ciro mencionado ~150 anos antes de seu reinado — esse é o ponto central do debate
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
