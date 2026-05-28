'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

const naos = [
    { greek: 'οὐκ ἐξ αἱμάτων',          translit: 'ouk ex haimatōn',     gloss: 'não por linhagem · "sangues"' },
    { greek: 'οὐδὲ ἐκ θελήματος σαρκὸς', translit: 'oude ek thelēmatos sarkos', gloss: 'não pelo desejo da carne' },
    { greek: 'οὐδὲ ἐκ θελήματος ἀνδρός', translit: 'oude ek thelēmatos andros',  gloss: 'não pela vontade de algum varão' },
];

export function Slide20({ slideIndex = 19 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-16">
                <div className="text-center mb-10">
                    <SectionLabel align="center" delay={0.2}>
                        Tornar-se filho de Deus
                    </SectionLabel>
                </div>

                <BiblicalQuote
                    reference="João 1.12—13"
                    lines={[
                        'Mas a todos quantos o receberam,',
                        'deu-lhes o poder de se tornarem filhos de Deus —',
                        'os que creem no seu nome,',
                        'os quais nasceram de Deus.',
                    ]}
                    emphasis={['receberam', 'filhos de Deus', 'nasceram de Deus']}
                    tone="lapis"
                    referenceTone="gold"
                    size="md"
                    delay={0.6}
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 1.0 }}
                    className="mt-14 max-w-3xl mx-auto"
                >
                    <p
                        className="text-center text-[10px] uppercase tracking-[0.4em] mb-6"
                        style={{ color: colors.inkMuted, fontFamily: fonts.mono }}
                    >
                        os três "nãos"
                    </p>
                    <div className="space-y-3">
                        {naos.map((n, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3.0 + i * 0.6, duration: 0.7 }}
                                className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 px-4 py-2 border-l-2"
                                style={{ borderColor: `${colors.wine}55` }}
                            >
                                <p
                                    className="text-base md:text-lg italic"
                                    style={{ color: colors.wine, fontFamily: fonts.display }}
                                >
                                    {n.greek}
                                </p>
                                <p
                                    className="text-xs md:text-sm italic"
                                    style={{ color: colors.inkSoft, fontFamily: fonts.body }}
                                >
                                    {n.gloss}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.4, duration: 1.0 }}
                    className="mt-10 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    Não por herança. Não por mérito. Não por decisão de outro.
                    <br />
                    Apenas — de Deus.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
