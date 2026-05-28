'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

export function Slide11({ slideIndex = 10 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <SectionLabel align="left" delay={0.2}>
                        séc. III a.C. — em diante
                    </SectionLabel>

                    <div className="mt-5">
                        <QuietTitle size="lg" align="left" delay={0.5} weight={500}>
                            Os estoicos
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="mt-5 text-lg md:text-xl italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.accent,
                            lineHeight: 1.45,
                        }}
                    >
                        Lógos divino — mas impessoal
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.92 }}
                        transition={{ delay: 2.0, duration: 0.9 }}
                        className="mt-6 text-base md:text-lg"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.body,
                            lineHeight: 1.6,
                        }}
                    >
                        O cosmos é um único organismo racional;
                        o Lógos é a sua alma. Deus, Razão, Natureza,
                        Destino — tudo converge num só princípio imanente.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 1.0 }}
                    className="p-6"
                    style={{
                        background: `${colors.lapis}10`,
                        border: `1px solid ${colors.lapis}55`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-4"
                        style={{
                            color: colors.lapis,
                            fontFamily: fonts.mono,
                        }}
                    >
                        O preço escondido
                    </p>
                    <p
                        className="text-base md:text-lg italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        Não é um Deus que te ama, te fala, te procura.
                    </p>
                    <p
                        className="mt-4 text-sm md:text-base italic"
                        style={{
                            color: colors.wine,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        Você ganha proximidade — perdendo Deus.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
