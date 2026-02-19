'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, GreekText, colors } from './shared';

export default function Slide26_LucasGrego() {
    const palavras = [
        { greek: 'ἀκριβῶς', trans: 'akribōs', meaning: 'cuidadosamente', color: colors.mossGreen },
        { greek: 'αὐτόπται', trans: 'autoptai', meaning: 'testemunhas oculares', color: colors.slateBlue },
        { greek: 'ἀσφάλειαν', trans: 'asphaleian', meaning: 'certeza / firmeza', color: colors.amber },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs uppercase tracking-[0.3em] mb-4 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    ★★ Momento Visual 2 — Prólogo de Lucas
                </motion.p>

                <CaseHeader
                    title=""
                    icon=""
                    delay={0.2}
                />

                {/* Greek quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-8"
                >
                    <GreekText
                        text="Ἐπειδήπερ πολλοὶ ἐπεχείρησαν ἀνατάξασθαι διήγησιν..."
                        delay={0.5}
                        size="md"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.8 }}
                        className="text-sm mt-2 italic"
                        style={{ color: colors.textMedium }}
                    >
                        Lucas 1:1-4 — O prólogo mais sofisticado do NT
                    </motion.p>
                </motion.div>

                {/* Key words */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {palavras.map((p, i) => (
                        <motion.div
                            key={p.greek}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + i * 0.2 }}
                            className="text-center p-4 rounded-xl border"
                            style={{ background: `${p.color}10`, borderColor: `${p.color}30` }}
                        >
                            <p className="text-2xl font-bold mb-1"
                                style={{ color: p.color, fontFamily: "'GFS Didot', serif" }}>
                                {p.greek}
                            </p>
                            <p className="text-xs italic mb-1" style={{ color: colors.textMuted }}>{p.trans}</p>
                            <p className="text-sm font-bold" style={{ color: p.color }}>{p.meaning}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-center p-4 rounded-xl"
                    style={{ background: `${colors.bgSurface}CC`, border: `1px solid ${colors.amber}30` }}
                >
                    <p className="text-lg" style={{ color: colors.warmWhite }}>
                        Linguagem de <span style={{ color: colors.mossGreen }}>historiador</span>.
                        Não de devoto. Não de apologista.
                    </p>
                    <p className="text-sm mt-1 italic" style={{ color: colors.textMedium }}>
                        Ele declara seu método antes de escrever uma linha de conteúdo.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
