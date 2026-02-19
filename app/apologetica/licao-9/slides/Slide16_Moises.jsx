'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, StampBadge, colors } from './shared';

export default function Slide16_Moises() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Moisés e o Pentateuco"
                    subtitle="Gênesis · Êxodo · Levítico · Números · Deuteronômio"
                    icon="📜"
                    protocol="CASO AT-01"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Posição Tradicional */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.mossGreen}30` }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-lg" style={{ color: colors.mossGreen }}>Posição Tradicional</h3>
                            <StampBadge type="verified" size="sm" delay={0.6} />
                        </div>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <li>• Tradição judaica atribui a Moisés</li>
                            <li>• Jesus cita como &quot;lei de Moisés&quot;</li>
                            <li>• Criado na corte egípcia — educação adequada</li>
                            <li>• Acesso direto aos eventos do Êxodo</li>
                        </ul>
                    </motion.div>

                    {/* Hipótese JEDP */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.stampDebate}30` }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-lg" style={{ color: colors.stampDebate }}>Hipótese JEDP</h3>
                            <StampBadge type="debate" size="sm" delay={0.8} />
                        </div>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <li>• Proposta séc. XVIII–XIX (Wellhausen)</li>
                            <li>• 4 fontes: Javista, Eloísta, Deuteronomista, Sacerdotal</li>
                            <li>• Compilação tardia por editor(es)</li>
                            <li>• Sob revisão significativa hoje</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </SlideWrapper>
    );
}
