// Slide 16 - Caso 1: Nephesh 
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, TranslationReveal, OriginalText, colors } from './shared';

export default function Slide16_Nephesh() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-6"
                >
                    <p className="text-sm uppercase tracking-widest mb-2" style={{ color: colors.goldAged }}>Caso #1</p>
                    <OriginalText text="נֶפֶשׁ" language="hebrew" size="xl" delay={0.3} className="justify-center flex" />
                    <p className="text-2xl font-bold mt-2" style={{ color: colors.hebrewPrimary }}>NEPHESH</p>
                </motion.div>

                {/* Gn 2:7 */}
                <TranslationReveal
                    reference="Gênesis 2:7"
                    original="...e o homem tornou-se nephesh chayyāh."
                    translations={[
                        { version: 'ARC', text: '"alma vivente"', type: 'formal' },
                        { version: 'NAA', text: '"ser vivente"', type: 'optimal' },
                        { version: 'NTLH', text: '"um ser vivo"', type: 'dynamic' },
                    ]}
                    delay={0.5}
                    className="w-full max-w-3xl mb-6"
                />

                <PrismCard delay={1.5} variant="hebrew" highlight className="max-w-2xl">
                    <div className="text-center">
                        <p className="text-sm mb-2" style={{ color: colors.textLight }}>
                            <span className="font-bold" style={{ color: colors.hebrewPrimary }}>Nephesh</span> aparece
                            {' '}<span className="font-bold" style={{ color: colors.goldBright }}>754 vezes</span> no AT.
                        </p>
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            É traduzida por <span className="font-bold" style={{ color: colors.alertTerracota }}>dezenas de palavras diferentes</span>.
                        </p>
                        <p className="text-sm mt-3 italic" style={{ color: colors.goldAged }}>
                            O conceito hebraico não tem divisão corpo/alma grega.<br />
                            Nephesh = a pessoa inteira, viva, que respira.
                        </p>
                    </div>
                </PrismCard>
            </div>
        </SlideWrapper>
    );
}
