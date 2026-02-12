// Slide 17 - Por que Nephesh importa
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, colors } from './shared';

export default function Slide17_PorQueImporta() {
    return (
        <SlideWrapper variant="hebrew">
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                    style={{ color: colors.hebrewPrimary }}
                >
                    POR QUE ISSO IMPORTA?
                </motion.h2>

                <PrismCard delay={0.3} variant="hebrew" className="w-full mb-6">
                    <div className="text-center">
                        <p className="text-sm uppercase mb-2" style={{ color: colors.goldAged }}>Teologia em jogo:</p>
                        <p className="text-base" style={{ color: colors.textLight }}>
                            Se <span className="font-bold" style={{ color: colors.hebrewPrimary }}>nephesh</span> = «alma imortal separável»,
                            <br />
                            isso sustenta a ideia de alma que sai do corpo na morte.
                        </p>
                    </div>
                </PrismCard>

                <PrismCard delay={0.6} variant="hebrew" className="w-full mb-6">
                    <div className="text-center">
                        <p className="text-base" style={{ color: colors.textLight }}>
                            Se <span className="font-bold" style={{ color: colors.hebrewPrimary }}>nephesh</span> = «ser vivente inteiro»,
                            <br />
                            a morte é sono/inconsciência até a ressurreição.
                        </p>
                    </div>
                </PrismCard>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="p-4 rounded-lg"
                    style={{
                        background: `${colors.alertTerracota}15`,
                        border: `1px solid ${colors.alertTerracota}30`
                    }}
                >
                    <p className="text-lg font-bold" style={{ color: colors.alertTerracota }}>
                        UMA palavra hebraica.<br />
                        DUAS teologias radicalmente diferentes.
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMedium }}>
                        A tradução NÃO é neutra. Ela carrega pressupostos teológicos.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
