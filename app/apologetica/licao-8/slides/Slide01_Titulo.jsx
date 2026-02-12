// Slide 01 - Título
// LIÇÃO 8: Tradução Bíblica — Da Língua Original ao Português
'use client';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { SlideWrapper, WaxSeal, colors, ScribeWriting, OriginalText } from './shared';

const PARTICIPATION_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/apologetica/licao-8/participar`
    : 'http://localhost:3000/apologetica/licao-8/participar';

export default function Slide01_Titulo() {
    return (
        <SlideWrapper variant="golden">
            <div className="flex flex-col items-center justify-center text-center px-8 max-w-5xl mx-auto relative">
                {/* Camadas de texto sobrepostas - efeito de profundidade */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none overflow-hidden">
                    <div className="text-6xl font-bold leading-relaxed" style={{ color: colors.hebrewPrimary, direction: 'rtl' }}>
                        בְּרֵאשִׁית בָּרָא אֱלֹהִים
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none overflow-hidden translate-y-8">
                    <div className="text-5xl font-bold leading-relaxed" style={{ color: colors.greekPrimary }}>
                        Ἐν ἀρχῇ ἦν ὁ λόγος
                    </div>
                </div>

                {/* Selo de cera com número 8 */}
                <WaxSeal number={8} size="lg" delay={0.2} className="mb-8" />

                {/* Subtítulo da Série */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm uppercase tracking-[0.3em] mb-4"
                    style={{ color: colors.goldAged }}
                >
                    Apologética • Lição 8
                </motion.p>

                {/* Título Principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                    style={{
                        color: colors.textLight,
                        textShadow: `0 4px 20px ${colors.goldAged}30`
                    }}
                >
                    TRADUÇÃO BÍBLICA<br />
                    <span className="text-2xl md:text-3xl font-normal" style={{ color: colors.goldAged }}>
                        Da Língua Original ao Português
                    </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-12"
                >
                    <ScribeWriting
                        text="«Uma verdade, múltiplas expressões»"
                        className="text-xl md:text-2xl"
                    />
                </motion.div>

                {/* QR Code para participação */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col items-center p-6 rounded-xl"
                    style={{
                        background: `${colors.textLight}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <QRCodeSVG
                        value={PARTICIPATION_URL}
                        size={120}
                        bgColor="transparent"
                        fgColor={colors.textLight}
                        level="M"
                    />
                    <p className="mt-3 text-sm" style={{ color: colors.textMedium }}>
                        Escaneie para participar
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
