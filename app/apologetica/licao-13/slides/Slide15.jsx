'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, TrapCard, VerseCard, colors } from './shared';

export function Slide15() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Narrativa — armadilha comum
                </motion.p>

                <TrapCard
                    title="Descrição ≠ Prescrição"
                    description="Tomar o silêncio do narrador como aprovação tácita do que é narrado."
                    delay={0.35}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        O narrador bíblico <span style={{ color: colors.textLight, fontWeight: 600 }}>mostra</span>{' '}
                        sem comentar. Isso é uma convenção literária — não um endosso moral.
                    </p>

                    <div className="space-y-3 mb-4">
                        <VerseCard
                            reference="Gn 27 — Jacó engana Isaque"
                            text="Jacó veste as peles do cabrito, imita a voz de Esaú, e rouba a bênção do pai cego. O texto narra em silêncio narrativo completo."
                            tone="danger"
                            delay={0.6}
                        />
                        <VerseCard
                            reference="Gn 12 · 20 — Abraão mente sobre Sara"
                            text="Duas vezes Abraão diz que Sara é apenas sua irmã, para se proteger. O narrador não interrompe com julgamento."
                            tone="danger"
                            delay={0.75}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="p-4 rounded-lg"
                        style={{
                            background: `${colors.inkGold}10`,
                            border: `1px solid ${colors.inkGold}30`,
                        }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            Davi e Bate-Seba: Deus não interrompe o adultério quando ele acontece.
                            O julgamento vem depois, via Natã.
                        </p>
                        <p className="text-xs italic mt-2" style={{ color: colors.inkGold }}>
                            O narrador deixou você desconfortável por quatro capítulos <em>de propósito</em>.
                        </p>
                    </motion.div>
                </TrapCard>
            </div>
        </LibraryWrapper>
    );
}
