'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, StampBadge, ScribeWriting, colors } from './shared';

export default function Slide18_Jo() {
    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Caso: Jó"
                    subtitle="Possivelmente o livro mais antigo da Bíblia"
                    icon="📖"
                    protocol="CASO AT-02"
                    delay={0.2}
                />

                <DossierCard delay={0.4} status="debate">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg" style={{ color: colors.warmWhite }}>Autor: tradição atribui a Moisés</h3>
                                <p className="text-sm" style={{ color: colors.textMedium }}>Talmude Babilônico · Baba Batra 15a</p>
                            </div>
                            <StampBadge type="debate" size="sm" delay={0.6} />
                        </div>

                        <div className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <p>• Cenário pré-mosaico — sem referência à Lei, ao Êxodo, à aliança</p>
                            <p>• Vocabulário com empréstimos linguísticos antigos</p>
                            <p>• Estrutura de debate filosófico — rara no cânon</p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-4 p-4 rounded-lg"
                            style={{
                                background: `${colors.amber}10`,
                                border: `1px solid ${colors.amber}30`,
                            }}
                        >
                            <ScribeWriting
                                text="Se essa tradição estiver correta, o primeiro livro escrito da Bíblia seria exatamente aquele que enfrenta o sofrimento humano de frente — sem respostas fáceis, sem resolver no final."
                                delay={1}
                                className="text-base leading-relaxed"
                            />
                        </motion.div>
                    </div>
                </DossierCard>
            </div>
        </SlideWrapper>
    );
}
