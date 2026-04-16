'use client';
import { motion } from 'framer-motion';
import { LabWrapper, LensSeal, StampBadge, colors } from './shared';

export function Slide58() {
    return (
        <LabWrapper stratum="full-clarity">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <LensSeal number={12} size="lg" delay={0.2} />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mt-6 mb-3"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Laboratório Encerrado
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Você agora tem as ferramentas para <span style={{ color: colors.lensTeal, fontWeight: 600 }}>verificar por si mesma</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-8"
                >
                    <StampBadge text="LABORATÓRIO ENCERRADO" color={colors.lensBlue} delay={1.2} rotate={-5} />
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="h-0.5 max-w-xs mx-auto mb-6"
                    style={{ background: `linear-gradient(to right, transparent, ${colors.lensTeal}, transparent)` }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="p-4 rounded-xl"
                    style={{ background: `${colors.lensPurple}08`, border: `1px solid ${colors.lensPurple}15` }}
                >
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensPurple }}>
                        Próxima aula
                    </p>
                    <p className="text-lg font-bold" style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Lição 13 — Gêneros Literários
                    </p>
                    <p className="text-sm italic mt-1" style={{ color: colors.textMuted }}>
                        Poesia, profecia, narrativa, epístola — cada gênero tem suas próprias regras de leitura.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="mt-6 text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    "Não diga 'acredite'. Diga 'verifique'."
                </motion.p>
            </div>
        </LabWrapper>
    );
}
