'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, TrapCard, VerseCard, colors } from './shared';

export function Slide22() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <TrapCard
                    title="Princípio ≠ promessa"
                    description="Ler provérbio como promessa destrói pais que fizeram o melhor que puderam e viram filhos seguirem caminhos que eles não escolheriam."
                    delay={0.2}
                >
                    <VerseCard
                        reference="Pv 22.6"
                        text="Instrui o menino no caminho em que deve andar, e ainda quando for velho não se desviará dele."
                        tone="warm"
                        delay={0.5}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4"
                    >
                        <div
                            className="p-4 rounded-lg"
                            style={{ background: `${colors.warnRed}10`, border: `1px solid ${colors.warnRed}25` }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-wider mb-2"
                                style={{ color: colors.warnRed }}
                            >
                                ⊘ Lido como promessa
                            </p>
                            <p className="text-sm" style={{ color: colors.textMedium }}>
                                &ldquo;Se eu fiz tudo certo, o texto garante que meu filho não vai se desviar.
                                Se ele se desviou, a culpa é minha.&rdquo;
                            </p>
                        </div>
                        <div
                            className="p-4 rounded-lg"
                            style={{ background: `${colors.goodGreen}10`, border: `1px solid ${colors.goodGreen}25` }}
                        >
                            <p
                                className="text-xs font-bold uppercase tracking-wider mb-2"
                                style={{ color: colors.goodGreen }}
                            >
                                ◎ Lido como princípio
                            </p>
                            <p className="text-sm" style={{ color: colors.textMedium }}>
                                Observação sobre educação formativa, não fórmula infalível. A liberdade do filho
                                continua sendo dele. O provérbio não é contrato.
                            </p>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="text-xs italic text-center mt-4"
                        style={{ color: colors.textMuted }}
                    >
                        O gênero é o que faz a diferença entre conforto e esmagamento.
                    </motion.p>
                </TrapCard>
            </div>
        </LibraryWrapper>
    );
}
