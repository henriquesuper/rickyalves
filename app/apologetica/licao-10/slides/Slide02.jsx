'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, ScribeWriting, colors } from './shared';

export function Slide02() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs uppercase tracking-[0.3em] mb-6 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Abertura · Conexão
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-7xl text-center mb-8"
                >
                    🩺
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-10"
                    style={{
                        color: colors.warmWhite,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    VOCÊ NUNCA FARIA ISSO COM UM PACIENTE
                </motion.h2>

                <DossierCard delay={0.6} highlight>
                    <ScribeWriting
                        text={'"Avaliar alguém sem conhecer a história, a família, a cultura, as experiências — nenhum terapeuta faria isso."'}
                        className="text-xl md:text-2xl text-center leading-relaxed mb-6"
                    />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1 }}
                        className="h-px max-w-xs mx-auto mb-6"
                        style={{ background: `linear-gradient(to right, transparent, ${colors.amber}60, transparent)` }}
                    />
                    <ScribeWriting
                        text={'"Então por que fazemos isso com um texto de 3.000 anos?"'}
                        className="text-lg md:text-xl text-center"
                        delay={1.2}
                    />
                </DossierCard>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center mt-8 text-lg"
                    style={{ color: colors.textMedium }}
                >
                    Isso é <span style={{ color: colors.amber, fontWeight: 'bold' }}>hermenêutica</span>. E você já faz isso profissionalmente.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
