'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, GreekGloss, colors, fonts } from './shared';

function WindLines({ delay = 0 }) {
    return (
        <svg viewBox="0 0 600 120" width="100%" height="auto" style={{ display: 'block' }}>
            {[
                { d: 'M 30 30 Q 200 10 380 50 T 580 30',  o: 0.7 },
                { d: 'M 30 60 Q 220 80 400 50 T 580 70',  o: 0.55 },
                { d: 'M 30 90 Q 240 70 420 100 T 580 95', o: 0.4 },
            ].map((p, i) => (
                <motion.path
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: p.o }}
                    transition={{ delay: delay + i * 0.4, duration: 1.6 }}
                    d={p.d}
                    fill="none"
                    stroke={colors.lapis}
                    strokeWidth="1.0"
                />
            ))}
        </svg>
    );
}

export function Slide47({ slideIndex = 46 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Jo 3.8 · o vento
                    </SectionLabel>
                </div>

                <GreekGloss
                    word="πνεῦμα"
                    transliteration="pneuma"
                    gloss='"vento" e "espírito" — ao mesmo tempo'
                    tone="lapis"
                    size="md"
                    delay={0.6}
                />

                <div className="mt-10 max-w-3xl mx-auto">
                    <WindLines delay={1.6} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-8 text-center text-base md:text-lg italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkBody,
                        fontFamily: fonts.display,
                        lineHeight: 1.55,
                    }}
                >
                    Você não vê o vento — vê os efeitos dele.
                    <br />
                    Assim é quem nasce do Espírito.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 4.4, duration: 1.0 }}
                    className="mt-6 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.wine,
                        fontFamily: fonts.accent,
                        lineHeight: 1.55,
                    }}
                >
                    Há realidades reais que se conhecem pelos efeitos —
                    não pela visão direta.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
