'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const directos = [
    { ref: 'Gn 3.15',  text: 'A semente da mulher esmagará a cabeça da serpente.' },
    { ref: 'Gn 49.10', text: 'O cetro não se afastará de Judá até que venha aquele a quem pertence.' },
    { ref: 'Nm 24.17', text: 'Uma estrela procederá de Jacó; um cetro se levantará de Israel.' },
    { ref: 'Dt 18.15', text: 'Um profeta como eu — a ele ouvireis.' },
];

const tipos = [
    { tipo: 'Cordeiro pascal',           ot: 'Êxodo 12',  nt: 'Cordeiro de Deus · Jo 1.29' },
    { tipo: 'Serpente de bronze',        ot: 'Números 21', nt: 'O Filho do Homem levantado · Jo 3.14' },
    { tipo: 'Maná no deserto',           ot: 'Êxodo 16',   nt: 'Eu sou o pão da vida · Jo 6' },
    { tipo: 'Tabernáculo onde Deus habita', ot: 'Êxodo 40', nt: 'O Verbo... habitou · Jo 1.14' },
];

export function Slide33({ slideIndex = 32 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-6">
                    <SectionLabel align="center" delay={0.2}>
                        Onde Moisés escreveu sobre Cristo · Jo 1.45
                    </SectionLabel>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.9 }}
                        className="p-5"
                        style={{
                            background: `${colors.lapis}10`,
                            border: `1px solid ${colors.lapis}55`,
                        }}
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.35em] mb-4"
                            style={{ color: colors.lapis, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                        >
                            Predições diretas no Pentateuco
                        </p>
                        <ul className="space-y-3">
                            {directos.map((d, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0 + i * 0.4, duration: 0.6 }}
                                    className="text-sm md:text-base flex flex-col gap-1"
                                >
                                    <span
                                        className="text-[10px] tracking-[0.2em] uppercase"
                                        style={{ color: colors.gold, fontFamily: fonts.mono }}
                                    >
                                        {d.ref}
                                    </span>
                                    <span
                                        className="italic"
                                        style={{ color: colors.inkBody, fontFamily: fonts.display, lineHeight: 1.5 }}
                                    >
                                        {d.text}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.9 }}
                        className="p-5"
                        style={{
                            background: `${colors.gold}10`,
                            border: `1px solid ${colors.gold}77`,
                        }}
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.35em] mb-4"
                            style={{ color: colors.gold, fontFamily: fonts.body, fontVariant: 'small-caps', fontWeight: 600 }}
                        >
                            Tipologia — figuras que João conecta
                        </p>
                        <ul className="space-y-3">
                            {tipos.map((t, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.0 + i * 0.4, duration: 0.6 }}
                                    className="text-sm md:text-base flex flex-col gap-0.5"
                                >
                                    <span
                                        className="italic"
                                        style={{ color: colors.inkDeep, fontFamily: fonts.display, fontWeight: 500 }}
                                    >
                                        {t.tipo}
                                    </span>
                                    <span
                                        className="text-xs"
                                        style={{ color: colors.inkSoft, fontFamily: fonts.body }}
                                    >
                                        {t.ot} → <em style={{ color: colors.wine }}>{t.nt}</em>
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 3.6, duration: 1.0 }}
                    className="mt-8 text-center text-sm md:text-base italic max-w-3xl mx-auto"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        lineHeight: 1.55,
                    }}
                >
                    Não é um punhado de versos avulsos —
                    é um padrão que atravessa o Pentateuco.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
