'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide89({ slideIndex = 88 }) {
    return (
        <ParchmentWrapper dark>
            <div className="w-full max-w-4xl mx-auto px-8 py-24 text-center flex flex-col items-center justify-center">
                <SectionLabel align="center" delay={0.2} color={colors.goldFaint}>
                    A Acolhida Incondicional
                </SectionLabel>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs tracking-[0.2em] font-mono mt-4 mb-14"
                    style={{ color: colors.parchmentEdge }}
                >
                    João 6.37
                </motion.p>

                <div className="max-w-3xl px-6 py-4">
                    <BiblicalQuote 
                        reference=""
                        text="&quot;Todo aquele que o Pai me dá, esse virá a mim; e o que vem a mim, de modo nenhum o lançarei fora.&quot;"
                        emphasis={["de modo nenhum o lançarei fora"]}
                        tone="parchment"
                        align="center"
                        size="lg"
                        delay={1.4}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 2.8, duration: 1.0 }}
                    className="h-px w-24 my-8"
                    style={{ background: colors.gold }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                    className="text-center max-w-lg"
                >
                    <p className="text-sm font-serif italic" style={{ color: colors.parchmentEdge }}>
                        No grego, a expressão é <strong className="font-semibold" style={{ color: colors.goldFaint }}>οὐ μὴ ἐκβάλω ἔξω</strong> (<em>ou mē ekbalō exō</em>). Trata-se do uso da dupla negação enfática, a forma mais forte e incondicional que a língua grega dispõe para rejeitar a possibilidade de exclusão.
                    </p>
                </motion.div>
            </div>
        </ParchmentWrapper>
    );
}
