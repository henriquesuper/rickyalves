'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const descent = [
    'Sou o homem que viu a aflição',
    'da vara do furor do Senhor.',
    'Levou-me e me fez andar em trevas',
    'e não em luz.',
    'Tornou-se para mim um urso de tocaia,',
    'leão escondido.',
    '',
    'Então eu disse:',
    'Já se foi a minha força,',
    'e a esperança que eu tinha no Senhor.',
];

const turn = [
    'Quero, porém, trazer à memória',
    'o que me pode dar esperança.',
    '',
    'As misericórdias do Senhor',
    'são a causa de não sermos consumidos,',
    'porque as suas misericórdias',
    'não têm fim;',
    'renovam-se cada manhã.',
    '',
    'Grande é a tua fidelidade.',
];

export function Slide20({ slideIndex = 19 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Lamentações 3 — descida e virada
                    </SectionLabel>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
                    {/* Descida — esquerda */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 1.0 }}
                        className="p-6"
                        style={{
                            background: `${colors.inkDeep}0F`,
                            borderLeft: `2px solid ${colors.inkDeep}`,
                        }}
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.3em] mb-3"
                            style={{
                                color: colors.inkDeep,
                                fontFamily: fonts.mono,
                            }}
                        >
                            versos 1—18
                        </p>
                        {descent.map((line, i) => (
                            <p
                                key={i}
                                className="text-sm md:text-base italic"
                                style={{
                                    color: colors.inkBody,
                                    fontFamily: fonts.display,
                                    lineHeight: 1.55,
                                    margin: 0,
                                    minHeight: line === '' ? '0.6em' : undefined,
                                }}
                            >
                                {line || '\u00A0'}
                            </p>
                        ))}
                    </motion.div>

                    {/* Pausa central — silêncio */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 3.0, duration: 1.4 }}
                        className="hidden md:flex flex-col items-center justify-center px-2"
                    >
                        <div
                            className="h-32 w-px"
                            style={{ background: `linear-gradient(to bottom, ${colors.inkDeep}, transparent, ${colors.gold})` }}
                        />
                        <p
                            className="my-3 text-[10px] uppercase tracking-[0.3em]"
                            style={{
                                color: colors.inkMuted,
                                fontFamily: fonts.mono,
                            }}
                        >
                            (silêncio)
                        </p>
                        <div
                            className="h-32 w-px"
                            style={{ background: `linear-gradient(to bottom, ${colors.gold}, transparent, ${colors.gold})` }}
                        />
                    </motion.div>

                    {/* Virada — direita (atrasa para o silêncio acontecer) */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 4.2, duration: 1.0 }}
                        className="p-6"
                        style={{
                            background: `${colors.gold}14`,
                            borderRight: `2px solid ${colors.gold}`,
                        }}
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.3em] mb-3 text-right"
                            style={{
                                color: colors.gold,
                                fontFamily: fonts.mono,
                            }}
                        >
                            versos 21—23
                        </p>
                        {turn.map((line, i) => (
                            <p
                                key={i}
                                className="text-sm md:text-base italic text-right"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 500,
                                    lineHeight: 1.55,
                                    margin: 0,
                                    minHeight: line === '' ? '0.6em' : undefined,
                                }}
                            >
                                {line || '\u00A0'}
                            </p>
                        ))}
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 6.4, duration: 0.9 }}
                    className="mt-8 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        maxWidth: '40rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    A esperança aqui não é conclusão lógica do sofrimento —
                    é uma memória que interrompe o sofrimento.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
