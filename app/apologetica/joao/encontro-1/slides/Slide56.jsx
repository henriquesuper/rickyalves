'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

const glossario = [
    { word: 'ἐν ἀρχῇ',          translit: 'en archē',     ref: 'Jo 1.1',      gloss: 'no princípio — ecoa Gn 1.1' },
    { word: 'ἦν',               translit: 'ēn',           ref: 'Jo 1.1—2',    gloss: 'imperfeito — existência contínua' },
    { word: 'ἐγένετο',          translit: 'egeneto',      ref: 'Jo 1.3, 1.14', gloss: 'aoristo — ponto de origem' },
    { word: 'Λόγος',            translit: 'lógos',        ref: 'Jo 1.1',      gloss: 'Verbo — Palavra — Razão' },
    { word: 'κατέλαβεν',        translit: 'katelaben',    ref: 'Jo 1.5',      gloss: '"venceu" e "compreendeu" — ambíguo' },
    { word: 'τέκνα · υἱός',     translit: 'tékna · huiós', ref: 'Jo 1.12',    gloss: 'crianças geradas vs. o Filho por natureza' },
    { word: 'ἐσκήνωσεν',        translit: 'eskēnōsen',    ref: 'Jo 1.14',     gloss: '"armou tenda" — raiz de tabernáculo' },
    { word: 'μονογενής',        translit: 'monogenēs',    ref: 'Jo 1.14, 18', gloss: 'único — não "criado"' },
    { word: 'χάριν ἀντὶ χάριτος', translit: 'chárin antì cháritos', ref: 'Jo 1.16', gloss: '"graça sobre graça" / "no lugar de"' },
    { word: 'πλήρωμα',          translit: 'plérôma',      ref: 'Jo 1.16',     gloss: 'plenitude — transbordamento' },
    { word: 'ἐξηγήσατο',        translit: 'exēgēsato',    ref: 'Jo 1.18',     gloss: 'raiz de "exegese" — tornou legível' },
    { word: 'σημεῖα',           translit: 'sēmeia',       ref: 'Jo 2.11',     gloss: 'sinais — não "milagres"' },
    { word: 'ἄνωθεν',           translit: 'anōthen',      ref: 'Jo 3.3, 7',   gloss: '"de novo" e "do alto"' },
    { word: 'πνεῦμα',           translit: 'pneuma',       ref: 'Jo 3.8',      gloss: '"vento" e "espírito"' },
    { word: 'ἀπειθῶν',          translit: 'apeithôn',     ref: 'Jo 3.36',     gloss: 'recusa ativa — não dúvida sincera' },
    { word: 'μένει',            translit: 'ménei',        ref: 'Jo 3.36',     gloss: '"permanece" — condição, não raio' },
];

export function Slide56({ slideIndex = 55 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-12">
                <div className="text-center mb-8">
                    <SectionLabel align="center" delay={0.2}>
                        Apêndice · glossário grego
                    </SectionLabel>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ delay: 0.5, duration: 0.9 }}
                        className="mt-3 text-sm italic"
                        style={{ color: colors.inkSoft, fontFamily: fonts.accent }}
                    >
                        para revisitar — sem ordem cronológica, em uma página
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mt-8">
                    {glossario.map((g, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                            className="flex items-baseline gap-3 py-2"
                            style={{ borderBottom: `1px dashed ${colors.inkSoft}40` }}
                        >
                            <div className="w-32 md:w-44 shrink-0">
                                <p
                                    className="text-base md:text-lg italic"
                                    style={{ color: colors.wine, fontFamily: fonts.display, fontWeight: 500 }}
                                >
                                    {g.word}
                                </p>
                                <p
                                    className="text-[10px] uppercase tracking-[0.2em]"
                                    style={{ color: colors.inkMuted, fontFamily: fonts.mono }}
                                >
                                    {g.translit}
                                </p>
                            </div>
                            <div className="flex-1">
                                <p
                                    className="text-xs md:text-sm"
                                    style={{ color: colors.inkBody, fontFamily: fonts.body, lineHeight: 1.45 }}
                                >
                                    {g.gloss}
                                </p>
                                <p
                                    className="text-[10px] tracking-[0.18em] uppercase mt-0.5"
                                    style={{ color: colors.gold, fontFamily: fonts.mono }}
                                >
                                    {g.ref}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
