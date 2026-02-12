// Slide 09 - Os Quatro Amores + Aramaico de Jesus
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, PrismCard, OriginalText, colors } from './shared';

const loves = [
    { greek: 'ἀγάπη', name: 'agape', desc: 'sacrificial, incondicional' },
    { greek: 'φιλία', name: 'philia', desc: 'amizade, afinidade' },
    { greek: 'ἔρως', name: 'eros', desc: 'romântico, sexual' },
    { greek: 'στοργή', name: 'storge', desc: 'familiar, natural' },
];

const aramaicWords = [
    { aramaic: 'Talitha cumi', translation: 'Menina, levanta-te', ref: 'Marcos 5:41' },
    { aramaic: 'Eloi, Eloi, lema sabachthani', translation: 'Deus meu, por que me abandonaste?', ref: 'Marcos 15:34' },
    { aramaic: 'Abba', translation: 'Papai', ref: 'Marcos 14:36' },
];

export default function Slide09_QuatroAmores() {
    return (
        <SlideWrapper variant="greek">
            <div className="flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 w-full">
                    {/* Esquerda: Quatro amores */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.textLight }}
                        >
                            ONDE NÓS DIZEMOS «AMOR»,<br />
                            <span style={{ color: colors.greekPrimary }}>O GREGO TEM:</span>
                        </motion.h3>

                        <div className="space-y-2 mb-4">
                            {loves.map((l, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.15 }}
                                    className="flex items-center gap-3 p-2 rounded-lg"
                                    style={{ background: `${colors.bgSurface}80` }}
                                >
                                    <span className="font-bold text-lg" style={{ color: colors.greekPrimary }}>
                                        {l.greek}
                                    </span>
                                    <span className="text-sm" style={{ color: colors.greekLight }}>
                                        ({l.name})
                                    </span>
                                    <span className="text-sm" style={{ color: colors.textMedium }}>
                                        — {l.desc}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <PrismCard delay={1.0} variant="greek">
                            <p className="text-sm" style={{ color: colors.textLight }}>
                                <span className="font-bold">João 21:15-17</span> — Jesus pergunta a Pedro:<br />
                                «Você me <span style={{ color: colors.greekPrimary }}>AMA (agapas)</span>?»<br />
                                Pedro responde: «Sim, eu te <span style={{ color: colors.greekLight }}>AMO (philō)</span>.»
                            </p>
                            <p className="text-xs mt-2 italic" style={{ color: colors.textMedium }}>
                                Jogo dramático que se perde em português.
                            </p>
                        </PrismCard>
                    </div>

                    {/* Direita: Aramaico de Jesus */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg font-bold mb-4 text-center"
                            style={{ color: colors.textLight }}
                        >
                            AS PALAVRAS REAIS DE JESUS<br />
                            <span style={{ color: colors.hebrewPrimary }}>(preservadas em aramaico)</span>
                        </motion.h3>

                        <div className="space-y-3">
                            {aramaicWords.map((w, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + i * 0.2 }}
                                >
                                    <PrismCard variant="hebrew">
                                        <p className="text-xl font-bold italic" style={{ color: colors.hebrewPrimary }}>
                                            «{w.aramaic}»
                                        </p>
                                        <p className="text-sm mt-1" style={{ color: colors.textLight }}>
                                            — {w.translation}
                                        </p>
                                        <p className="text-xs" style={{ color: colors.textMedium }}>
                                            {w.ref}
                                        </p>
                                    </PrismCard>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-center mt-4 text-sm italic"
                            style={{ color: colors.goldAged }}
                        >
                            Fragmentos de áudio<br />
                            numa era sem gravadores.
                        </motion.p>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
