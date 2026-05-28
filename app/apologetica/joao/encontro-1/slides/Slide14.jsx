'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, QuietTitle, colors, fonts } from './shared';

const positions = [
    { name: 'Parmênides', view: 'Só o Uno é real. A pluralidade é ilusão.', tone: colors.lapisDeep },
    { name: 'Heráclito',  view: 'Só os Muitos em fluxo, unificados pelo Lógos oculto.', tone: colors.wineDeep },
    { name: 'Platão',     view: 'Os Muitos só existem por participarem das Formas.', tone: colors.lapis },
];

export function Slide14({ slideIndex = 13 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-14">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        O problema mais antigo
                    </SectionLabel>

                    <div className="mt-5">
                        <QuietTitle size="md" align="center" delay={0.5} weight={500}>
                            O Uno e os Muitos
                        </QuietTitle>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 1.2, duration: 0.9 }}
                        className="mt-5 text-base md:text-lg italic max-w-2xl mx-auto"
                        style={{
                            color: colors.inkBody,
                            fontFamily: fonts.display,
                            lineHeight: 1.55,
                        }}
                    >
                        Como conciliar a unidade da realidade com
                        a multiplicidade evidente do que existe?
                    </motion.p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {positions.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.0 + i * 0.6, duration: 0.85 }}
                            className="p-5"
                            style={{
                                background: `${p.tone}10`,
                                border: `1px solid ${p.tone}55`,
                            }}
                        >
                            <p
                                className="text-[10px] uppercase tracking-[0.3em] mb-3"
                                style={{ color: p.tone, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                            >
                                {p.name}
                            </p>
                            <p
                                className="text-sm md:text-base italic"
                                style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.55 }}
                            >
                                {p.view}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ delay: 4.4, duration: 0.9 }}
                    className="mt-10 text-center text-sm md:text-base italic max-w-2xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    A solução grega: uma escada de intermediários impessoais
                    descendo do Uno até os Muitos por degraus.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
