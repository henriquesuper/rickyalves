'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, QuizResponseBadge, colors } from './shared';

export default function Slide24_PorQueQuatro() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Por Que Quatro Evangelhos?"
                    subtitle="Se a história é uma só, por que quatro versões?"
                    icon="❓"
                    delay={0.2}
                />

                <div className="flex justify-end mb-4">
                    <QuizResponseBadge questionNumber={2} delay={0.3} />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-xl border text-center"
                        style={{ background: `${colors.wineRed}10`, borderColor: `${colors.wineRed}30` }}
                    >
                        <span className="text-3xl block mb-2">🚫</span>
                        <h3 className="font-bold text-lg mb-2" style={{ color: colors.wineRed }}>
                            Uniformidade Perfeita
                        </h3>
                        <p className="text-sm" style={{ color: colors.textDark }}>
                            Levanta suspeita de combinação prévia. Testemunho ensaiado.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-xl border text-center"
                        style={{ background: `${colors.mossGreen}10`, borderColor: `${colors.mossGreen}30` }}
                    >
                        <span className="text-3xl block mb-2">✅</span>
                        <h3 className="font-bold text-lg mb-2" style={{ color: colors.mossGreen }}>
                            Convergência com Divergência
                        </h3>
                        <p className="text-sm" style={{ color: colors.textDark }}>
                            O padrão mais forte de testemunho histórico independente.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="p-4 rounded-xl border text-center"
                    style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.amber}30` }}
                >
                    <p className="text-base leading-relaxed" style={{ color: colors.warmWhite }}>
                        Se quatro pacientes, sem combinação, descrevem o comportamento de um terapeuta
                        de formas <span style={{ color: colors.amber }}>ligeiramente diferentes mas convergentes</span> —
                        essa convergência é mais convincente do que se todos dissessem exatamente a mesma coisa.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
