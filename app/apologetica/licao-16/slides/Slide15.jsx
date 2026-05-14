'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const events = [
    {
        year: '605 a.C.',
        title: 'Primeira invasão',
        desc: 'Depois da Batalha de Carquemis, Nabucodonosor derrota o Egito e marcha para o sul. Jeoaquim de Judá vira vassalo. Daniel e seus companheiros — adolescentes da nobreza — são levados a Babilônia.',
        ref: 'Daniel 1:1—7',
    },
    {
        year: '597 a.C.',
        title: 'Segunda invasão',
        desc: 'Depois da rebelião de Jeoaquim, Nabucodonosor cerca Jerusalém. O novo rei Joaquim (Jeconias) se entrega em três meses. Ele, a mãe, a elite técnica e Ezequiel são deportados. Zedequias é instalado como rei-fantoche.',
        ref: '2 Reis 24:10—17',
    },
    {
        year: '586 a.C.',
        title: 'Terceira invasão',
        desc: 'Zedequias também se rebela. Cerco de dezoito meses. Fome dentro dos muros. A cidade cai. O Templo é queimado. Os filhos de Zedequias são executados diante dele antes de seus olhos serem arrancados. Massa do povo deportada.',
        ref: '2 Reis 25 · Jeremias 39; 52',
    },
    {
        year: '582 a.C.',
        title: 'Deportação residual',
        desc: 'Pequena deportação adicional após o assassinato do governador Gedalias. Os sobreviventes fogem para o Egito, levando Jeremias contra a vontade dele.',
        ref: 'Jeremias 52:30 · 43:5—7',
    },
];

export function Slide15({ slideIndex = 14 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        A linha do tempo
                    </SectionLabel>
                </div>

                <div className="relative pl-10">
                    {/* Linha vertical */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
                        className="absolute left-2 top-2 bottom-2 w-px origin-top"
                        style={{ background: colors.wine, opacity: 0.65 }}
                    />

                    {events.map((e, i) => (
                        <motion.div
                            key={e.year}
                            initial={{ opacity: 0, x: 14 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0 + i * 0.7, duration: 0.8 }}
                            className="relative mb-7 last:mb-0"
                        >
                            {/* Ponto */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.05 + i * 0.7, duration: 0.4 }}
                                className="absolute"
                                style={{
                                    left: '-2.05rem',
                                    top: '0.55rem',
                                    width: '9px',
                                    height: '9px',
                                    background: colors.wine,
                                    borderRadius: '50%',
                                    boxShadow: `0 0 0 3px ${colors.parchment}`,
                                }}
                            />

                            <p
                                className="text-sm md:text-base"
                                style={{
                                    color: colors.wine,
                                    fontFamily: fonts.mono,
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {e.year}
                            </p>
                            <p
                                className="text-lg md:text-xl mt-1"
                                style={{
                                    color: colors.inkDeep,
                                    fontFamily: fonts.display,
                                    fontWeight: 600,
                                }}
                            >
                                {e.title}
                            </p>
                            <p
                                className="text-sm md:text-base mt-1.5"
                                style={{
                                    color: colors.inkBody,
                                    fontFamily: fonts.body,
                                    lineHeight: 1.55,
                                    maxWidth: '46rem',
                                }}
                            >
                                {e.desc}
                            </p>
                            <p
                                className="text-[10px] uppercase tracking-[0.3em] mt-2"
                                style={{
                                    color: colors.inkMuted,
                                    fontFamily: fonts.body,
                                    fontVariant: 'small-caps',
                                }}
                            >
                                {e.ref}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
