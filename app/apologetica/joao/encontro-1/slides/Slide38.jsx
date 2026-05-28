'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, colors, fonts } from './shared';

const leituras = [
    {
        label: 'Leitura A',
        title: 'Graça no lugar de graça',
        sub:   'antí · em substituição a',
        body:  'A graça do Antigo Pacto sucedida e superada pela graça maior em Cristo. Note: as duas são graça.',
        tone:  colors.lapis,
    },
    {
        label: 'Leitura B',
        title: 'Graça sobre graça',
        sub:   'antí · sucessão contínua',
        body:  'Onda após onda. Da plenitude (plérôma) dele recebemos graça empilhada sobre graça, sem cessar.',
        tone:  colors.gold,
    },
];

export function Slide38({ slideIndex = 37 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Jo 1.16 — duas leituras honestas
                    </SectionLabel>
                </div>

                <GreekGloss
                    word="χάριν ἀντὶ χάριτος"
                    transliteration="chárin antì cháritos"
                    gloss="da plenitude dele todos nós recebemos"
                    tone="wine"
                    size="sm"
                    delay={0.6}
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {leituras.map((l, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 + i * 0.6, duration: 0.85 }}
                            className="p-6"
                            style={{
                                background: `${l.tone}10`,
                                border: `1px solid ${l.tone}66`,
                            }}
                        >
                            <p
                                className="text-[10px] uppercase tracking-[0.35em] mb-2"
                                style={{ color: l.tone, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                            >
                                {l.label}
                            </p>
                            <p
                                className="text-xl md:text-2xl mb-1"
                                style={{ color: colors.inkDeep, fontFamily: fonts.display, fontWeight: 600 }}
                            >
                                {l.title}
                            </p>
                            <p
                                className="text-xs italic mb-3"
                                style={{ color: l.tone, fontFamily: fonts.accent }}
                            >
                                {l.sub}
                            </p>
                            <p
                                className="text-sm md:text-base italic"
                                style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.55 }}
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
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    A imagem de transbordamento puxa mais forte —
                    é a mesma assinatura de Caná.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
