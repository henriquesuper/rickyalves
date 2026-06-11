'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide73({ slideIndex = 72 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center justify-center">
                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    Identidade e Enfermidade
                </SectionLabel>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs tracking-[0.2em] font-mono mt-4 mb-14"
                    style={{ color: colors.parchmentEdge }}
                >
                    João 5.5–6 · Trinta e oito anos deitado
                </motion.p>

                <div className="max-w-2xl px-6 py-4">
                    <BiblicalQuote 
                        reference=""
                        text="&quot;Queres ser curado?&quot;"
                        tone="parchment"
                        align="center"
                        size="xxl"
                        delay={1.4}
                        italic={false}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 2.5, duration: 1.0 }}
                    className="h-px w-24 my-10"
                    style={{ background: colors.gold }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                    className="text-base md:text-lg italic max-w-lg leading-relaxed"
                    style={{
                        color: colors.parchment,
                        fontFamily: fonts.display,
                    }}
                >
                    Não é uma pergunta retórica. Trinta e oito anos constroem uma identidade e uma rotina inteiras ao redor da enfermidade. A cura desorganiza uma vida estruturada em torno da dor.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
