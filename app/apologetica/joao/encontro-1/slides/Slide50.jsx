'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide50({ slideIndex = 49 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-20 text-center flex flex-col items-center">
                <SectionLabel align="center" delay={0.2}>
                    Jo 3.17 · dois versos depois
                </SectionLabel>

                <div className="mt-8">
                    <BiblicalQuote
                        reference="Jo 3.17"
                        lines={[
                            'Porque Deus enviou o seu Filho ao mundo',
                            'não para condenar o mundo,',
                            'mas para que o mundo seja salvo por meio dele.',
                        ]}
                        emphasis={['não para condenar', 'salvo']}
                        tone="gold"
                        referenceTone="wine"
                        size="lg"
                        delay={0.7}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 3.2, duration: 1.0 }}
                    className="mt-14 h-px"
                    style={{ width: '120px', background: colors.gold }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.0, duration: 1.0 }}
                    className="mt-10 text-base md:text-lg italic max-w-2xl"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    A nota a levar pra casa.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
