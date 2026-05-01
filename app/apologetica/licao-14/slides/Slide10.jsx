'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, EvidenceCard, VerseCard, colors } from './shared';

const tanakh = [
    { abbr: 'T', name: 'Torá',     section: 'Lei',           note: 'Pentateuco' },
    { abbr: 'N', name: 'Neviim',   section: 'Profetas',      note: 'Anteriores e posteriores' },
    { abbr: 'K', name: 'Ketuvim',  section: 'Escritos',      note: 'Salmos abre esta seção' },
];

export function Slide10() {
    return (
        <ConvergenceWrapper stratum="nucleo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <EvidenceCard
                    evidenceNumber="02"
                    title="Lucas 24:44 — A tripartição do Tanakh"
                    icon="📜"
                    delay={0.3}
                >
                    <div className="space-y-4">
                        <VerseCard
                            reference="Lucas 24:44"
                            text="São estas as palavras que eu vos falei [...]: importava se cumprisse tudo o que de mim está escrito na Lei de Moisés, nos Profetas e nos Salmos."
                            tone="focused"
                            delay={0.5}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.85 }}
                            className="text-sm leading-relaxed"
                            style={{ color: colors.textMedium }}
                        >
                            A tripartição corresponde à divisão tradicional judaica do{' '}
                            <span style={{ color: colors.haloGold, fontWeight: 600 }}>Tanakh</span> — sendo Salmos o livro de abertura dos Ketuvim:
                        </motion.p>

                        <div className="grid grid-cols-3 gap-3 mt-3">
                            {tanakh.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1 + i * 0.18 }}
                                    className="text-center rounded-lg p-3"
                                    style={{
                                        background: colors.bgVoid,
                                        border: `1px solid ${colors.haloGold}30`,
                                    }}
                                >
                                    <span
                                        className="text-3xl font-bold block mb-1"
                                        style={{
                                            color: colors.haloGold,
                                            fontFamily: "'Playfair Display', Georgia, serif",
                                        }}
                                    >
                                        {t.abbr}
                                    </span>
                                    <p className="text-sm font-bold" style={{ color: colors.textStarlight }}>
                                        {t.name}
                                    </p>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>
                                        {t.section}
                                    </p>
                                    <p className="text-[10px] mt-1 italic" style={{ color: colors.textDim }}>
                                        {t.note}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7 }}
                            className="text-base italic text-center mt-3"
                            style={{ color: colors.haloGold, fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                            Jesus está dizendo: o cânon hebraico inteiro fala dele.
                        </motion.p>
                    </div>
                </EvidenceCard>
            </div>
        </ConvergenceWrapper>
    );
}
