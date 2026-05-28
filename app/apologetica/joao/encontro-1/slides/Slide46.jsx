'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, colors, fonts } from './shared';

const layers = [
    { label: 'de novo',  body: 'um recomeço, outra vez',          tone: colors.lapis },
    { label: 'do alto',  body: 'origem em Deus, não na biologia', tone: colors.gold },
];

export function Slide46({ slideIndex = 45 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Jo 3.3 · "é necessário..."
                    </SectionLabel>
                </div>

                <GreekGloss
                    word="ἄνωθεν"
                    transliteration="anōthen"
                    gloss="duas leituras simultâneas — e Nicodemos travou na primeira"
                    tone="wine"
                    size="md"
                    delay={0.6}
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                    {layers.map((l, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 + i * 0.6, duration: 0.85 }}
                            className="p-6 text-center"
                            style={{
                                background: `${l.tone}10`,
                                border: `1px solid ${l.tone}66`,
                            }}
                        >
                            <p
                                className="text-2xl md:text-3xl italic"
                                style={{
                                    color: l.tone,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                }}
                            >
                                "{l.label}"
                            </p>
                            <p
                                className="mt-3 text-sm md:text-base"
                                style={{
                                    color: colors.inkBody,
                                    fontFamily: fonts.body,
                                    lineHeight: 1.55,
                                }}
                            >
                                {l.body}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-10 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    A linguagem nativa de qualquer transformação real:
                    recomeço, mudança, nascer outra vez.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
