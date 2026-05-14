'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide37({ slideIndex = 36 }) {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center text-center w-full">
                <SectionLabel align="center" delay={0.2}>
                    O começo
                </SectionLabel>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.9 }}
                    className="mt-8 text-sm md:text-base"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        fontStyle: 'italic',
                        maxWidth: '36rem',
                        lineHeight: 1.55,
                    }}
                >
                    A primeira coisa que Deus chamou de &ldquo;não boa&rdquo;
                    em toda a Sua criação — antes do pecado, antes da queda.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.5, scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 0.9 }}
                    className="h-px mx-auto my-10"
                    style={{ width: '120px', background: colors.wine }}
                />

                <BiblicalQuote
                    reference="Gênesis 2:18"
                    referenceTone="wine"
                    tone="wine"
                    lines={[
                        '"Não é bom',
                        'que o homem',
                        'esteja só."',
                    ]}
                    size="xl"
                    align="center"
                    delay={2.4}
                />
            </div>
        </ParchmentWrapper>
    );
}
