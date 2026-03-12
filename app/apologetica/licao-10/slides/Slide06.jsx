'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, GreekText, colors } from './shared';

export function Slide06() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-4 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Exemplo 3 de 3
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-6"
                    style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    &quot;SERVO&quot; OU &quot;ESCRAVO&quot; NO NT
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mb-8"
                >
                    <GreekText text="δοῦλος" size="lg" delay={0.5} />
                </motion.div>

                <DossierCard delay={0.7}>
                    <p className="text-base leading-relaxed mb-4" style={{ color: colors.textLight }}>
                        A palavra grega <span style={{ color: colors.amber, fontStyle: 'italic' }}>doulos</span> é traduzida como &quot;servo&quot; ou &quot;escravo,&quot; mas nenhuma é exata.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-3 rounded-lg text-center" style={{ background: `${colors.mapBlue}15`, border: `1px solid ${colors.mapBlue}30` }}>
                            <p className="text-sm font-bold mb-1" style={{ color: colors.mapBlue }}>Escravidão Romana</p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>Temporária · Acúmulo de propriedade · Escravos educados</p>
                        </div>
                        <div className="p-3 rounded-lg text-center" style={{ background: `${colors.stampDebate}15`, border: `1px solid ${colors.stampDebate}30` }}>
                            <p className="text-sm font-bold mb-1" style={{ color: colors.stampDebate }}>Escravidão Atlântica</p>
                            <p className="text-xs" style={{ color: colors.textMedium }}>Permanente · Racial · Desumanizante</p>
                        </div>
                    </div>
                </DossierCard>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-6 text-lg"
                    style={{ color: colors.textMedium }}
                >
                    Isso não a torna aceitável — mas muda como lemos Paulo quando ele se chama de <span style={{ color: colors.amber, fontStyle: 'italic' }}>doulos</span> de Cristo.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
