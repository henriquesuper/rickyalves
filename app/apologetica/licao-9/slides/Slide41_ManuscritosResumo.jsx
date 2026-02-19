'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, ImpactNumber, colors } from './shared';

export default function Slide41_ManuscritosResumo() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Manuscritos: O Número Importa"
                    subtitle="Contextualização comparativa"
                    icon="📜"
                    delay={0.2}
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <ImpactNumber number="5.800+" label="manuscritos gregos do NT" delay={0.3} color={colors.mossGreen} />
                    <ImpactNumber number="10.000+" label="manuscritos latinos" delay={0.5} color={colors.slateBlue} />
                    <ImpactNumber number="~200" label="manuscritos de Homero" delay={0.7} color={colors.textMuted} />
                    <ImpactNumber number="~10" label="de Tácito ou Plínio" delay={0.9} color={colors.textMuted} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="p-4 rounded-xl text-center"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-lg" style={{ color: colors.warmWhite }}>
                        <span style={{ color: colors.amber }}>Nenhum outro documento antigo</span> chega remotamente perto.
                    </p>
                    <p className="text-sm mt-2 italic" style={{ color: colors.textMedium }}>
                        Se descreditarmos o NT por conta de manuscritos, descreditamos toda a historiografia antiga.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
