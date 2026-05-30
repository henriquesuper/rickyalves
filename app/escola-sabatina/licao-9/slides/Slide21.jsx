'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide21() {
    return (
        <ParchmentWrapper>
            <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center justify-center w-full">
                <SectionLabel align="center" delay={0.2} color={colors.inkMuted}>
                    Quinta · Conhecer e praticar
                </SectionLabel>

                <div className="mt-10">
                    <BiblicalQuote
                        reference="Mateus 7:21"
                        referenceTone="lapis"
                        tone="inkDeep"
                        lines={[
                            'Nem todo o que Me diz: Senhor, Senhor!',
                            'entrará no reino dos céus,',
                            'mas aquele que faz a vontade de Meu Pai.',
                        ]}
                        size="md"
                        align="center"
                        delay={0.7}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 1.0 }}
                    className="mt-14 p-6"
                    style={{ background: `${colors.wine}10`, borderLeft: `3px solid ${colors.wine}`, maxWidth: '38rem' }}
                >
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color: colors.wine, fontFamily: fonts.mono }}>
                        A frase da lição
                    </p>
                    <p className="text-lg md:text-xl italic" style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.5 }}>
                        &ldquo;Jesus afirmou que o requisito para entrar no céu
                        é fazer a vontade de Deus.&rdquo;
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
