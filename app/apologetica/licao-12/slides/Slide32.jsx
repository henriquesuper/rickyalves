'use client';
import { motion } from 'framer-motion';
import { LabWrapper, ComparisonPanel, colors } from './shared';

export function Slide32() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensAmber }}
                >
                    Lente 7 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O Caso do Camarão
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-4 rounded-xl mb-5 text-center"
                    style={{ background: `${colors.lensRed}08`, border: `1px solid ${colors.lensRed}15` }}
                >
                    <p className="text-sm italic" style={{ color: colors.lensRed }}>
                        &ldquo;A Bíblia manda não comer camarão! (Levítico 11) — Se vocês ignoram isso,
                        por que seguem outras regras do mesmo livro?&rdquo;
                    </p>
                    <p className="text-xs mt-2" style={{ color: colors.textMuted }}>
                        — Objeção cética clássica
                    </p>
                </motion.div>

                <ComparisonPanel
                    leftTitle="⊘ SEM A LENTE"
                    leftContent="'Se cristãos comem camarão mas condenam outras coisas de Levítico, são hipócritas.' Trata o livro inteiro como bloco monolítico — tudo ou nada."
                    rightTitle="◎ COM A LENTE"
                    rightContent="Leis alimentares pertencem ao sistema cerimonial/civil de Israel. O NT declara alimentos limpos (Marcos 7:19, Atos 10). Mas o princípio subjacente — Deus se importa com o que fazemos com nosso corpo — permanece. A aplicação muda; o princípio continua."
                    delay={0.8}
                />
            </div>
        </LabWrapper>
    );
}
