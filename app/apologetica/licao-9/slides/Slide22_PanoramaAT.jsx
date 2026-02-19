'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, StampBadge, colors } from './shared';

const autoresAT = [
    { livro: 'Salmos', autor: 'Davi + outros', periodo: 'Séc. X–V a.C.', stamp: 'verified' },
    { livro: 'Provérbios', autor: 'Salomão + Agur + Lemuel', periodo: 'Séc. X a.C.', stamp: 'verified' },
    { livro: 'Eclesiastes', autor: 'Salomão (trad.)', periodo: 'Séc. X a.C.', stamp: 'debate' },
    { livro: 'Daniel', autor: 'Daniel', periodo: 'Séc. VI a.C.', stamp: 'debate', note: 'debate similar a Isaías' },
    { livro: 'Profetas Menores', autor: 'Oséias a Malaquias', periodo: 'Séc. VIII–V a.C.', stamp: 'verified' },
    { livro: 'Esdras-Neemias', autor: 'Esdras / Neemias', periodo: 'Séc. V a.C.', stamp: 'verified' },
];

export default function Slide22_PanoramaAT() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Panorama AT"
                    subtitle="Demais autores — visão rápida"
                    icon="📋"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-3">
                    {autoresAT.map((a, i) => (
                        <motion.div
                            key={a.livro}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg border"
                            style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.amber}20` }}
                        >
                            <div className="flex-1">
                                <h4 className="font-bold text-sm" style={{ color: colors.warmWhite }}>{a.livro}</h4>
                                <p className="text-xs" style={{ color: colors.textMedium }}>{a.autor} · {a.periodo}</p>
                            </div>
                            <StampBadge type={a.stamp} size="sm" delay={0.4 + i * 0.1} note={a.note || ''} />
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.2 }}
                    className="text-center text-sm mt-6 italic"
                    style={{ color: colors.textMuted }}
                >
                    Daniel merece tempo próprio — debate estruturalmente idêntico ao de Isaías.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
