'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide48() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Cautela Tipológica
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-xl mb-4"
                    style={{ background: `${colors.lensAmber}08`, border: `1px solid ${colors.lensAmber}20` }}
                >
                    <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.lensAmber }}>
                        ⚠️ Regra de Ouro
                    </p>
                    <p className="text-base leading-relaxed" style={{ color: colors.textLight }}>
                        Use apenas tipos que o <span style={{ color: colors.lensTeal, fontWeight: 600 }}>próprio NT identifica</span>.
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        Se o NT não faz a conexão, o que temos é <span style={{ color: colors.lensAmber }}>uma observação interessante</span> — não uma ferramenta exegética confiável.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                    <div className="p-4 rounded-xl" style={{ background: `${colors.lensTeal}08`, border: `1px solid ${colors.lensTeal}15` }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensTeal }}>✓ Seguro</p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>Jonas = Cristo (Mt 12:40)</p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>Cordeiro = Cristo (1 Co 5:7)</p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>Serpente = Cruz (Jo 3:14)</p>
                    </div>
                    <div className="p-4 rounded-xl" style={{ background: `${colors.lensRed}08`, border: `1px solid ${colors.lensRed}15` }}>
                        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.lensRed }}>⊘ Arriscado</p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>"Jericó = sistema religioso"</p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>"Raabe = a igreja"</p>
                        <p className="text-sm" style={{ color: colors.textMedium }}>"5 pedras de Davi = 5 ministérios"</p>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-4 text-sm text-center italic"
                    style={{ color: colors.textMuted }}
                >
                    Criatividade sem controle produz alegorias, não exegese.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
