// Slide 14 - O Que Isso Mostra
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, DivergenceTree, colors } from './shared';

const meanings = [
    { text: '"usurpação"', sub: 'algo tomado ilegitimamente', color: colors.greekPrimary },
    { text: '"algo a reter"', sub: 'algo que se tem e não quer largar', color: colors.goldAged },
    { text: '"algo a explorar"', sub: 'algo que se usa em benefício', color: colors.portPrimary },
];

export default function Slide14_OQueIssoMostra() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: colors.textLight }}
                >
                    OBSERVE:
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm mb-6"
                    style={{ color: colors.textMedium }}
                >
                    A palavra grega <span style={{ color: colors.greekPrimary }} className="font-bold">ἁρπαγμόν (harpagmon)</span> pode significar:
                </motion.p>

                <DivergenceTree
                    original="ἁρπαγμόν (harpagmon)"
                    branches={meanings}
                    delay={0.5}
                    className="mb-8"
                />

                <PrismCard delay={1.2} variant="neutral" className="max-w-2xl">
                    <div className="space-y-3 text-center">
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            As traduções mais formais mantêm o termo <span className="font-bold" style={{ color: colors.greekPrimary }}>ambíguo</span>.
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            As traduções mais dinâmicas <span className="font-bold" style={{ color: colors.alertTerracota }}>ESCOLHEM</span> uma interpretação.
                        </p>
                        <div className="border-t pt-3 mt-3" style={{ borderColor: `${colors.goldAged}30` }}>
                            <p className="text-sm" style={{ color: colors.goldAged }}>
                                Ambas são legítimas.<br />
                                Mas cada uma exclui as outras possibilidades.
                            </p>
                            <p className="text-sm mt-2 font-bold" style={{ color: colors.textLight }}>
                                Isso não é problema. É o custo da tradução.<br />
                                O leitor informado <span style={{ color: colors.goldBright }}>COMPARA</span> e ganha visão mais completa.
                            </p>
                        </div>
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
