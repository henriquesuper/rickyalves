'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide12() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    A lei está toda ligada a relacionamentos
                </SectionLabel>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="Marcos 12:30, 31"
                        referenceTone="gold"
                        tone="inkDeep"
                        lines={[
                            'Amarás o Senhor teu Deus de todo o teu coração...',
                            'Amarás o teu próximo como a ti mesmo.',
                        ]}
                        emphasis={['Amarás o Senhor', 'Amarás o teu próximo']}
                        size="lg"
                        align="center"
                        delay={0.7}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.9 }}
                    className="mt-12 text-lg md:text-xl"
                    style={{ color: colors.lapis, fontFamily: fonts.display, fontStyle: 'italic', textAlign: 'center' }}
                >
                    &ldquo;Destes dois mandamentos depende toda a Lei.&rdquo;
                    <span className="block mt-2 text-sm not-italic" style={{ color: colors.inkMuted, fontFamily: fonts.body }}>
                        Mateus 22:40
                    </span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-10 text-base"
                    style={{ color: colors.inkSoft, fontFamily: fonts.body, maxWidth: '32rem', textAlign: 'center' }}
                >
                    Dez maneiras de amar — não dez regras avulsas.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
