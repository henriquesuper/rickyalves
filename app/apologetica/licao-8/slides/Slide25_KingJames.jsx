// Slide 25 - O Fenômeno King James (E Por Que Não Importa Tanto Aqui)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

export default function Slide25_KingJames() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: colors.textLight }}
                >
                    O FENÔMENO <span style={{ color: colors.goldBright }}>KING JAMES</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm mb-8"
                    style={{ color: colors.textMedium }}
                >
                    E por que não importa tanto quanto parece
                </motion.p>

                <PrismCard delay={0.4} variant="neutral" className="w-full mb-4">
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        A KJV <span className="font-bold">(1611)</span> foi uma tradução GENIAL para o inglês do séc. XVII.
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textLight }}>
                        Mas em português, temos tradições de tradução{' '}
                        <span className="font-bold" style={{ color: colors.portPrimary }}>DIRETAS dos originais</span>.
                    </p>
                </PrismCard>

                <PrismCard delay={0.7} variant="alert" className="w-full mb-4">
                    <div className="text-center">
                        <p className="text-sm font-bold mb-2" style={{ color: colors.alertTerracota }}>
                            ⚠️ ATENÇÃO
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            A «KJV em português» é uma <span className="font-bold" style={{ color: colors.alertTerracota }}>tradução DE uma tradução</span>.
                        </p>
                        <p className="text-sm mt-1" style={{ color: colors.textMedium }}>
                            Inglês antigo (1611) → Português moderno.<br />
                            Cada camada adicional de tradução PERDE nuances.
                        </p>
                    </div>
                </PrismCard>

                <PrismCard delay={1.0} variant="neutral" className="w-full mb-6">
                    <div className="flex items-center justify-center gap-4 text-sm" style={{ color: colors.textLight }}>
                        <div className="text-center">
                            <span className="font-bold block" style={{ color: colors.hebrewPrimary }}>Hebraico</span>
                            <span className="text-xs">original</span>
                        </div>
                        <span style={{ color: colors.goldAged }}>→</span>
                        <div className="text-center">
                            <span className="font-bold block" style={{ color: '#6366f1' }}>Inglês 1611</span>
                            <span className="text-xs">1ª tradução</span>
                        </div>
                        <span style={{ color: colors.goldAged }}>→</span>
                        <div className="text-center">
                            <span className="font-bold block" style={{ color: colors.portPrimary }}>Português</span>
                            <span className="text-xs">2ª tradução</span>
                        </div>
                        <span className="text-xl" style={{ color: colors.alertTerracota }}> ✗</span>
                    </div>
                    <p className="text-center text-xs mt-3" style={{ color: colors.textMedium }}>
                        vs. Hebraico/Grego → Português (direto) ✓
                    </p>
                </PrismCard>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-sm font-bold"
                    style={{ color: colors.goldAged }}
                >
                    Use sempre uma tradução DIRETA dos originais.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
