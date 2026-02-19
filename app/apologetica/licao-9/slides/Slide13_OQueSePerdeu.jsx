'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, StampBadge, colors } from './shared';

export default function Slide13_OQueSePerdeu() {
    const refs = [
        { ref: '1 Coríntios 5:9', text: 'Paulo menciona uma carta anterior a Corinto que não temos', icon: '📨' },
        { ref: 'Colossenses 4:16', text: '"A carta de Laodiceia" — circulava mas não foi preservada', icon: '📜' },
        { ref: 'Lucas 1:1', text: '"Muitos já tentaram narrar..." — fontes anteriores existiram', icon: '📖' },
    ];

    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="O Que se Perdeu"
                    subtitle="A Bíblia sabe o que não tem"
                    icon="📂"
                    delay={0.2}
                />

                <div className="space-y-4 mb-8">
                    {refs.map((r, i) => (
                        <motion.div
                            key={r.ref}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="flex items-start gap-4 p-5 rounded-xl border"
                            style={{
                                background: `${colors.bgSurface}CC`,
                                borderColor: `${colors.stampLost}30`,
                            }}
                        >
                            <span className="text-2xl flex-shrink-0">{r.icon}</span>
                            <div className="flex-1">
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: colors.amber }}>
                                    {r.ref}
                                </h4>
                                <p className="text-base" style={{ color: colors.warmWhite }}>
                                    {r.text}
                                </p>
                            </div>
                            <StampBadge type="lost" size="sm" delay={0.6 + i * 0.2} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center p-4 rounded-xl"
                    style={{ background: `${colors.bgSurface}CC`, border: `1px solid ${colors.mossGreen}30` }}
                >
                    <p className="text-lg" style={{ color: colors.warmWhite }}>
                        A preservação foi <span style={{ color: colors.mossGreen }}>honesta sobre suas limitações</span>.
                    </p>
                    <p className="text-sm mt-1" style={{ color: colors.textMedium }}>
                        O que chegou até nós passou por avaliação — não foi acidente.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
