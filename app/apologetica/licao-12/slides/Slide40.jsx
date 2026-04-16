'use client';
import { motion } from 'framer-motion';
import { LabWrapper, DangerCard, TherapyParallel, colors } from './shared';

export function Slide40() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <DangerCard number={4} title="Aplicação Direta Sem Distância Cultural" delay={0.2}
                    description="A Bíblia foi escrita PARA nós, mas não PARA nós diretamente. Foi escrita primeiro para uma audiência antiga."
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-3 rounded-lg mb-4"
                        style={{ background: `${colors.lensAmber}08` }}
                    >
                        <p className="text-sm" style={{ color: colors.textMedium }}>
                            <span style={{ color: colors.lensAmber, fontWeight: 600 }}>Exemplo:</span> Paulo diz &ldquo;a mulher
                            deve cobrir a cabeça&rdquo; (1 Coríntios 11). No primeiro século, cobrir a cabeça era sinal de respeito
                            social — como usar terno num tribunal. O <span style={{ color: colors.lensTeal }}>princípio</span> é
                            respeito e ordem no culto; a <span style={{ color: colors.textMuted }}>expressão cultural</span> varia.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="p-3 rounded-lg"
                        style={{ background: `${colors.lensTeal}08`, border: `1px solid ${colors.lensTeal}15` }}
                    >
                        <p className="text-sm font-medium" style={{ color: colors.lensTeal }}>
                            Princípio prático: Pergunte sempre — &ldquo;Qual é o princípio atemporal por trás da instrução cultural?&rdquo;
                        </p>
                    </motion.div>
                </DangerCard>

                <div className="mt-4">
                    <TherapyParallel
                        therapeutic="Você não aplica protocolos terapêuticos de 1950 literalmente hoje. Mas os princípios subjacentes (escuta, empatia, limite) permanecem."
                        hermeneutic="Instruções culturais do primeiro século não se aplicam literalmente. Mas os princípios (respeito, ordem, dignidade) permanecem."
                        delay={1}
                    />
                </div>
            </div>
        </LabWrapper>
    );
}
