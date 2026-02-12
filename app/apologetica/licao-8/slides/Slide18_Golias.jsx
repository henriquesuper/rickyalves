// Slide 18 - Caso 2: A Altura de Golias
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

export default function Slide18_Golias() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm uppercase tracking-widest mb-2"
                    style={{ color: colors.goldAged }}
                >Caso #2</motion.p>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-5xl font-bold mb-8"
                    style={{ color: colors.textLight }}
                >
                    A ALTURA DE GOLIAS
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
                    <PrismCard delay={0.4} variant="hebrew" highlight>
                        <div className="text-center">
                            <p className="text-5xl font-bold mb-2" style={{ color: colors.hebrewPrimary }}>6</p>
                            <p className="text-lg" style={{ color: colors.textLight }}>côvados e um palmo</p>
                            <p className="text-2xl font-bold mt-2" style={{ color: colors.goldBright }}>≈ 2,97m</p>
                            <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                                <span className="font-bold">Texto Massorético</span> (hebraico)
                            </p>
                            <p className="text-xs italic" style={{ color: colors.textMedium }}>
                                Usado em ARC, ARA, NAA, NVI...
                            </p>
                        </div>
                    </PrismCard>

                    <PrismCard delay={0.6} variant="greek" highlight>
                        <div className="text-center">
                            <p className="text-5xl font-bold mb-2" style={{ color: colors.greekPrimary }}>4</p>
                            <p className="text-lg" style={{ color: colors.textLight }}>côvados e um palmo</p>
                            <p className="text-2xl font-bold mt-2" style={{ color: colors.goldBright }}>≈ 1,98m</p>
                            <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                                <span className="font-bold">LXX</span> (Septuaginta) + <span className="font-bold">4QSam-a</span> (Qumran)
                            </p>
                            <p className="text-xs italic" style={{ color: colors.textMedium }}>
                                Manuscrito mais antigo
                            </p>
                        </div>
                    </PrismCard>
                </div>

                <PrismCard delay={1.0} variant="neutral" className="max-w-2xl">
                    <div className="text-center">
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            A maioria das traduções brasileiras segue o Texto Massorético (6 côvados).
                        </p>
                        <p className="text-sm mt-2" style={{ color: colors.textLight }}>
                            As notas de rodapé mencionam a variação.
                        </p>
                        <p className="text-sm mt-3 font-bold" style={{ color: colors.goldAged }}>
                            Não muda a mensagem: Deus venceu o gigante.<br />
                            Mas mostra como manuscritos diferentes geram traduções diferentes.
                        </p>
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
