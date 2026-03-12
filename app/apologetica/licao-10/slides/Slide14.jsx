'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, colors } from './shared';

export function Slide14() {
    const eras = [
        { icon: '🏕️', title: 'Sociedade Tribal', period: 'Patriarcas — Juízes', desc: 'Sem estado. Clãs familiares. Identidade coletiva — o que o chefe fazia afetava todos.' },
        { icon: '👑', title: 'Monarquia', period: 'Saul — Exílio', desc: 'Israel pede um rei "como as outras nações." Deus avisa que vai dar errado. Dá errado.' },
        { icon: '🏛️', title: 'Pós-exílio', period: 'Após 539 a.C.', desc: 'Sem rei, sem independência. Identidade reorganizada em torno do Templo, da sinagoga, e da Torah.' },
    ];

    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>
                    COMO A SOCIEDADE FUNCIONAVA
                </motion.h2>

                <div className="space-y-5">
                    {eras.map((era, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="flex items-start gap-4 p-5 rounded-xl"
                            style={{ background: `${colors.bgSurface}CC`, border: `1px solid ${colors.amber}20` }}
                        >
                            <span className="text-4xl shrink-0">{era.icon}</span>
                            <div>
                                <h3 className="font-bold text-lg" style={{ color: colors.amber }}>{era.title}</h3>
                                <p className="text-xs mb-2 uppercase tracking-wider" style={{ color: colors.textMuted }}>{era.period}</p>
                                <p className="text-base" style={{ color: colors.textLight }}>{era.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
