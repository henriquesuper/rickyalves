'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide36_Pseudepigrafia() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="O Elefante na Sala: Pseudepigrafia"
                    subtitle="Escritos atribuídos a alguém que não os escreveu"
                    icon="🐘"
                    protocol="BLOCO 6 — TEMAS TRANSVERSAIS"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.wineRed}30` }}
                    >
                        <h3 className="font-bold text-lg mb-3" style={{ color: colors.wineRed }}>
                            Fora do Cânon
                        </h3>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <li>• Evangelho de Tomé (séc. II+)</li>
                            <li>• Evangelho de Pedro (séc. II)</li>
                            <li>• Apocalipse de Pedro (séc. II)</li>
                            <li className="italic" style={{ color: colors.textMuted }}>Rejeitados pelas comunidades da época</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.mossGreen}10`, borderColor: `${colors.mossGreen}30` }}
                    >
                        <h3 className="font-bold text-lg mb-3" style={{ color: colors.mossGreen }}>
                            Dentro do Cânon?
                        </h3>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <li>• Debate: Efésios, 2 Pedro, Pastorais</li>
                            <li>• Posição conservadora: secretários + coautoria</li>
                            <li>• Posição crítica: pseudepigrafia aceitável na cultura</li>
                            <li className="italic" style={{ color: colors.textMuted }}>Debate legítimo, não ataque</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-4 rounded-xl text-center"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-lg" style={{ color: colors.warmWhite }}>
                        O cânon não se formou por acidente — foi <span style={{ color: colors.amber }}>processo de avaliação</span> que durou séculos.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
