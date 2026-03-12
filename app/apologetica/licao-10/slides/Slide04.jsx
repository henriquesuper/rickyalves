'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, EvidenceCard, StampBadge, colors } from './shared';

export function Slide04() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Exemplo 1 de 3
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-8"
                    style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    A &quot;ESTALAGEM&quot; DE LUCAS 2
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    <EvidenceCard delay={0.4} variant="disputed" icon="❌">
                        <h3 className="font-bold text-lg mb-2" style={{ color: colors.warmWhite }}>O que imaginamos</h3>
                        <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                            Maria e José rejeitados num hotel, bebê num estábulo isolado.
                        </p>
                    </EvidenceCard>

                    <EvidenceCard delay={0.6} variant="confirmed" icon="✅">
                        <h3 className="font-bold text-lg mb-2" style={{ color: colors.warmWhite }}>O que o texto diz</h3>
                        <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                            A palavra grega <span style={{ color: colors.amber, fontStyle: 'italic' }}>kataluma</span> é o cômodo de hóspedes de uma casa de família. A manjedoura ficava no andar de baixo da mesma casa.
                        </p>
                    </EvidenceCard>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8 p-5 rounded-xl text-center"
                    style={{
                        background: `${colors.mapBlue}15`,
                        border: `1px solid ${colors.mapBlue}40`,
                    }}
                >
                    <p className="text-lg font-medium" style={{ color: colors.textLight }}>
                        Jesus não nasceu &quot;rejeitado&quot; — nasceu no andar de baixo da casa de um parente porque o quarto de cima estava cheio.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
