'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, ComparisonPanel, colors } from './shared';

export function Slide23() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensBlue }}
                >
                    Lente 4 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Jeremias 29:11
                </motion.h2>

                <VerseCard
                    reference="Jeremias 29:11"
                    text="Eu sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."
                    readingType="blurry"
                    delay={0.5}
                />

                <div className="mt-5">
                    <ComparisonPanel
                        leftTitle="⊘ DISTORCIDO"
                        leftContent="'Deus tem um plano incrível para a minha carreira, meu relacionamento, minha conta bancária.' Versículo de quadro decorativo."
                        rightTitle="◎ FOCADO"
                        rightContent="Jeremias escreve para exilados em Babilônia. O 'plano' inclui 70 ANOS de cativeiro primeiro (v. 10). É promessa de restauração nacional depois de disciplina — não de prosperidade pessoal imediata."
                        delay={0.8}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="mt-4 text-xs text-center italic"
                    style={{ color: colors.textMuted }}
                >
                    O princípio de que Deus tem propósitos mesmo no sofrimento é real.
                    Mas a aplicação precisa respeitar o que o texto disse antes de perguntar o que ele diz pra mim.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
