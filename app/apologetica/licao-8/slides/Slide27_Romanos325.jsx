// Slide 27 - Exercício ao Vivo: Romanos 3:25
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, TranslationReveal, OriginalText, colors } from './shared';

export default function Slide27_Romanos325() {
    return (
        <SlideWrapper variant="greek">
            <div className="flex flex-col items-center justify-center px-6 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                    style={{ color: colors.greekPrimary }}
                >
                    EXERCÍCIO AO VIVO
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-6 text-center"
                    style={{ color: colors.textLight }}
                >
                    Romanos 3:25
                </motion.p>

                {/* Texto grego */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-6 text-center"
                >
                    <OriginalText text="ἱλαστήριον" language="greek" size="xl" delay={0.4} className="justify-center flex" />
                    <p className="text-xl mt-2 italic" style={{ color: colors.greekLight }}>hilasterion</p>
                </motion.div>

                <TranslationReveal
                    reference="Romanos 3:25"
                    original="...a quem Deus propôs como hilasterion..."
                    translations={[
                        { version: 'ARA', text: '"propiciação"', type: 'formal' },
                        { version: 'NAA', text: '"propiciação"', type: 'formal' },
                        { version: 'NVI', text: '"sacrifício propiciatório"', type: 'optimal' },
                        { version: 'NTLH', text: '"o meio pelo qual os pecados são perdoados"', type: 'dynamic' },
                    ]}
                    delay={0.6}
                    className="w-full max-w-3xl mb-6"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-center p-4 rounded-lg max-w-2xl"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textLight }}>
                        <span className="font-bold" style={{ color: colors.greekPrimary }}>Hilasterion</span> na LXX é
                        o <span className="font-bold" style={{ color: colors.goldBright }}>propiciatório</span> —
                        a tampa da Arca da Aliança onde o sangue era aspergido no Dia da Expiação.
                    </p>
                    <p className="text-sm mt-2 italic" style={{ color: colors.goldAged }}>
                        «Deus propôs Jesus como a própria TAMPA DA ARCA.»
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
