'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, ComparisonPanel, colors } from './shared';

export function Slide16() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensTeal }}
                >
                    Contexto Histórico-Cultural
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Mateus 5:39
                </motion.h2>

                <VerseCard
                    reference="Mateus 5:39"
                    text="Se alguém te bater na face direita, oferece-lhe também a outra."
                    readingType="blurry"
                    delay={0.5}
                />

                <div className="mt-5">
                    <ComparisonPanel
                        leftTitle="⊘ DISTORCIDO"
                        leftContent="'Cristãos devem aceitar qualquer abuso passivamente. Jesus proíbe autodefesa.' O texto vira justificativa para aceitar violência."
                        rightTitle="◎ FOCADO"
                        rightContent="No mundo antigo, um tapa na face DIREITA com a mão direita implica golpe com as costas da mão — gesto de desprezo de superior para inferior. Jesus fala sobre dignidade diante da humilhação social, não sobre autodefesa física."
                        delay={0.8}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="mt-5 p-4 rounded-xl"
                    style={{ background: `${colors.lensTeal}08`, border: `1px solid ${colors.lensTeal}15` }}
                >
                    <p className="text-sm" style={{ color: colors.textMedium }}>
                        <span style={{ color: colors.lensTeal, fontWeight: 600 }}>O teste da Guga:</span> Qualquer versículo que alguém jogar em cima de você,
                        pergunte: &ldquo;Qual é o contexto literário? Pra quem foi escrito? Como o resto da Bíblia trata esse tema?&rdquo;
                        Isso elimina 80% dos usos errados.
                    </p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
