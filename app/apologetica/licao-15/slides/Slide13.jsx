'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, ProseBlock, colors, fonts } from './shared';

const tradicoes = [
    {
        nome: 'Vedas',
        promessa: 'ciclos infinitos, sem fim definido',
        accent: false,
    },
    {
        nome: 'Alcorão',
        promessa: 'paraíso, mas sem promessa de fim da morte como inimigo',
        accent: false,
    },
    {
        nome: 'Textos budistas',
        promessa: 'cessação do desejo, não restauração',
        accent: false,
    },
    {
        nome: 'Bíblia',
        promessa: 'morte derrotada. Criação restaurada.',
        accent: true,
    },
];

export function Slide13({ slideIndex = 12 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-4xl mx-auto px-8 py-6 flex flex-col justify-center w-full">
                <QuietTitle size="sm" align="center" delay={0.2}>
                    Por que isso importa
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="h-px mx-auto my-5"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <ProseBlock
                    align="center"
                    size="sm"
                    delay={1.0}
                    italic
                    color={colors.inkSoft}
                    maxWidth="36rem"
                    lines={[
                        'Outros textos religiosos prometem coisas diferentes.',
                    ]}
                />

                <div className="mt-6">
                    {tradicoes.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 + i * 0.3, duration: 0.6 }}
                            className="grid grid-cols-12 gap-4 py-2.5"
                            style={{
                                borderBottom: i < tradicoes.length - 1 ? `1px solid ${colors.inkMuted}25` : 'none',
                            }}
                        >
                            <div className="col-span-4 md:col-span-3 flex items-center">
                                <p
                                    className="text-base md:text-lg"
                                    style={{
                                        color: t.accent ? colors.bordo : colors.inkAntique,
                                        fontFamily: fonts.display,
                                        fontWeight: t.accent ? 600 : 500,
                                    }}
                                >
                                    {t.nome}
                                </p>
                            </div>
                            <div className="col-span-8 md:col-span-9 flex items-center">
                                <p
                                    className="text-sm md:text-base"
                                    style={{
                                        color: t.accent ? colors.inkAntique : colors.inkSoft,
                                        fontFamily: fonts.body,
                                        fontWeight: t.accent ? 500 : 400,
                                        fontStyle: t.accent ? 'normal' : 'italic',
                                    }}
                                >
                                    {t.promessa}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 3.2, duration: 1.0 }}
                    className="h-px mx-auto mt-7 mb-4"
                    style={{ width: '100px', background: colors.inkMuted }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.6, duration: 0.9 }}
                    className="text-center text-xl md:text-2xl"
                    style={{
                        color: colors.inkAntique,
                        fontFamily: fonts.display,
                        fontWeight: 600,
                        letterSpacing: '-0.005em',
                    }}
                >
                    Pode estar errada. Mas não é vaga.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
