'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, DarkCaseHeader, colors } from './shared';

export default function Slide02_PerguntaAbre() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <DarkCaseHeader
                    title="A Pergunta que Abre Tudo"
                    icon="🔑"
                    protocol="BLOCO 1 — ABERTURA"
                    delay={0.2}
                />

                <DossierCard delay={0.4} highlight>
                    <div className="text-center py-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-2xl md:text-3xl leading-relaxed"
                            style={{
                                color: colors.warmWhite,
                                fontFamily: "'Playfair Display', Georgia, serif",
                            }}
                        >
                            Por que importa saber{' '}
                            <span style={{ color: colors.amber }}>quem escreveu</span>
                            {' '}um documento?
                        </motion.p>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="h-0.5 max-w-xs mx-auto my-8"
                            style={{
                                background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)`
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="space-y-3"
                        >
                            <p className="text-lg" style={{ color: colors.textMedium }}>
                                Antes de abrir os dossiês...
                            </p>
                            <p className="text-base italic" style={{ color: colors.textMuted }}>
                                Não vamos partir de &quot;acredite porque a Bíblia diz&quot;.
                            </p>
                            <p className="text-base italic" style={{ color: colors.textMuted }}>
                                Vamos partir de: quem escreveu isso, de onde, e por que isso importa.
                            </p>
                        </motion.div>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
