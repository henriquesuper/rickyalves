'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, ScribeWriting, colors } from './shared';

export default function Slide44_FraseChave() {
    return (
        <SlideWrapper variant="manuscript">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.3em] mb-8 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    ★★★ Momento Visual 3
                </motion.p>

                <DossierCard delay={0.3} highlight>
                    <div className="py-10">
                        <ScribeWriting
                            text="Eu não confio na Bíblia porque ela diz que é confiável."
                            delay={0.5}
                            className="text-2xl md:text-3xl leading-relaxed mb-6"
                        />

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            className="h-0.5 max-w-xs mx-auto my-6"
                            style={{ background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)` }}
                        />

                        <ScribeWriting
                            text="Eu confio na Bíblia porque quando examino as evidências, ela resiste."
                            delay={2}
                            className="text-2xl md:text-3xl leading-relaxed"
                        />
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
