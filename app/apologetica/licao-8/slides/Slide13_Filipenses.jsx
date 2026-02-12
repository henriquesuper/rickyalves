// Slide 13 - Filipenses 2:6 — Um Verso, Cinco Traduções
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ComparisonCards, OriginalText, colors } from './shared';

const translations = [
    { label: 'ARC', type: 'formal', text: '"Que, sendo em forma de Deus, não teve por USURPAÇÃO o ser igual a Deus."', highlight: 'USURPAÇÃO' },
    { label: 'NAA', type: 'formal', text: '"Pois ele, subsistindo em forma de Deus, não julgou como USURPAÇÃO o ser igual a Deus."', highlight: 'USURPAÇÃO' },
    { label: 'NVI', type: 'optimal', text: '"Que, embora sendo Deus, não considerou que o ser igual a Deus era algo a que devia APEGAR-SE."', highlight: 'APEGAR-SE' },
    { label: 'NVT', type: 'dynamic', text: '"Embora fosse Deus, não considerou que ser igual a Deus fosse algo ao qual se APEGAR."', highlight: 'APEGAR' },
    { label: 'NTLH', type: 'dynamic', text: '"Ele tinha a natureza de Deus, mas não tentou FICAR IGUAL a Deus."', highlight: 'FICAR IGUAL' },
];

export default function Slide13_Filipenses() {
    return (
        <SlideWrapper variant="neutral">
            <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight }}
                >
                    FILIPENSES 2:6 — Um Verso, Cinco Traduções
                </motion.h2>

                {/* Texto grego */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-6"
                >
                    <OriginalText text="ὃς ἐν μορφῇ θεοῦ ὑπάρχων οὐχ ἁρπαγμὸν ἡγήσατο τὸ εἶναι ἴσα θεῷ" language="greek" size="sm" delay={0.3} className="justify-center flex" />
                </motion.div>

                {/* Cards de comparação */}
                <ComparisonCards cards={translations} delay={0.6} className="w-full max-w-3xl" />
            </div>
        </SlideWrapper>
    );
}
