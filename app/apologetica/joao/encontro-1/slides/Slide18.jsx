'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, IntertextPair, colors, fonts } from './shared';

export function Slide18({ slideIndex = 17 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Eskēnōsen · "armou tenda"
                    </SectionLabel>
                </div>

                <GreekGloss
                    word="ἐσκήνωσεν"
                    transliteration="eskēnōsen"
                    gloss='"habitou" — armou tenda, tabernáculo'
                    note="da raiz skēnē — a mesma palavra que a Septuaginta usa para o tabernáculo do Êxodo. João escolhe esse verbo de propósito."
                    tone="gold"
                    size="md"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 1.0 }}
                    className="mt-14"
                >
                    <IntertextPair
                        left={{
                            ref: 'Êxodo 40.34',
                            text: 'A glória do Senhor encheu o tabernáculo.',
                            refColor: colors.lapis,
                        }}
                        right={{
                            ref: 'João 1.14',
                            text: 'O Verbo se fez carne... e vimos a sua glória.',
                            refColor: colors.gold,
                        }}
                        delay={2.4}
                        connectorDelay={1.0}
                        accentColor={colors.gold}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.6, duration: 0.9 }}
                    className="mt-12 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    O Deus que armou tenda em Israel
                    <br />
                    armou carne entre nós.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
