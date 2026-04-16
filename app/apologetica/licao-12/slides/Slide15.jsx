'use client';
import { motion } from 'framer-motion';
import { LabWrapper, VerseCard, ComparisonPanel, colors } from './shared';

export function Slide15() {
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
                    Lente 1 em ação
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Filipenses 4:13
                </motion.h2>

                <VerseCard
                    reference="Filipenses 4:13"
                    text="Tudo posso naquele que me fortalece."
                    readingType="blurry"
                    delay={0.5}
                />

                <div className="mt-5">
                    <ComparisonPanel
                        leftTitle="⊘ DISTORCIDO"
                        leftContent="'Posso conquistar tudo que eu quiser — carreira, saúde, dinheiro — porque Deus me dá superpoderes.' Usado como mantra motivacional em camisetas e bios de Instagram."
                        rightTitle="◎ FOCADO"
                        rightContent="Paulo está preso. O contexto (4:11-12) mostra que ele aprendeu a estar contente tanto na fartura quanto na necessidade. Ele não promete superpoderes — diz que Cristo é suficiente mesmo na escassez."
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
                    O significado real é mais bonito que o mau uso — mas exige ler os dois versículos anteriores.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
