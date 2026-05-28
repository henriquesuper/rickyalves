'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide49({ slideIndex = 48 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Jo 3.16 · ancorado em 3.14
                    </SectionLabel>
                </div>

                <BiblicalQuote
                    reference="João 3.16"
                    lines={[
                        'Porque Deus amou o mundo de tal maneira',
                        'que deu o seu Filho unigênito,',
                        'para que todo o que nele crê',
                        'não pereça,',
                        'mas tenha a vida eterna.',
                    ]}
                    emphasis={['amou o mundo', 'deu', 'crê', 'vida eterna']}
                    tone="wine"
                    referenceTone="gold"
                    size="lg"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0, duration: 1.0 }}
                    className="mt-12 max-w-3xl mx-auto p-6"
                    style={{
                        background: `${colors.gold}10`,
                        border: `1px dashed ${colors.gold}99`,
                    }}
                >
                    <p
                        className="text-[10px] uppercase tracking-[0.4em] mb-3"
                        style={{
                            color: colors.gold,
                            fontFamily: fonts.mono,
                        }}
                    >
                        contra o piloto automático religioso
                    </p>
                    <p
                        className="text-sm md:text-base italic"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.6,
                        }}
                    >
                        Não é sentimentalismo. É a lógica do amor que se expõe para curar —
                        em continuidade direta com a serpente de bronze.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
