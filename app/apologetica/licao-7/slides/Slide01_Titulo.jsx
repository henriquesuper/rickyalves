// Slide 01 - Título
// LIÇÃO 7: Manuscritos, Transmissão Textual e Confiabilidade
'use client';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { SlideWrapper, WaxSeal, colors, ScribeWriting } from './shared';

const PARTICIPATION_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/apologetica/licao-7/participar`
    : 'http://localhost:3000/apologetica/licao-7/participar';

export default function Slide01_Titulo() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center text-center px-8 max-w-5xl mx-auto">
                {/* Selo de cera com número 7 */}
                <WaxSeal number={7} size="lg" delay={0.2} className="mb-8" />

                {/* Subtítulo da Série */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm uppercase tracking-[0.3em] mb-4"
                    style={{ color: colors.goldAged }}
                >
                    Apologética • Lição 7
                </motion.p>

                {/* Título Principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                    style={{
                        color: colors.parchmentLight,
                        textShadow: `0 4px 20px ${colors.goldAged}30`
                    }}
                >
                    MANUSCRITOS, TRANSMISSÃO<br />TEXTUAL E CONFIABILIDADE
                </motion.h1>

                {/* Subtítulo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-12"
                >
                    <ScribeWriting
                        text="«Como sabemos que temos o que foi escrito?»"
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
                        background: `${colors.parchmentLight}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <QRCodeSVG
                        value={PARTICIPATION_URL}
                        size={120}
                        bgColor="transparent"
                        fgColor={colors.parchmentLight}
                        level="M"
                    />
                    <p className="mt-3 text-sm" style={{ color: colors.parchmentMid }}>
                        Escaneie para participar
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
