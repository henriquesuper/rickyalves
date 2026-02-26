'use client';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { SlideWrapper, DossierSeal, DarkCaseHeader, colors } from './shared';

const SITE_URL = 'https://www.rickyalves.com/apologetica/licao-9';

export default function Slide01_Capa() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                {/* Protocolo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-6 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Curso Apologético Bíblico · Caso #09
                </motion.p>

                {/* Selo do dossiê */}
                <motion.div className="flex justify-center mb-6">
                    <DossierSeal number={9} size="lg" delay={0.3} />
                </motion.div>

                {/* Ícone de pasta */}
                <motion.div
                    initial={{ opacity: 0, y: -20, rotateY: 90 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                    className="text-6xl mb-4"
                >
                    📁
                </motion.div>

                {/* Título */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{
                        color: colors.warmWhite,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        textShadow: `0 2px 30px ${colors.amber}20`
                    }}
                >
                    OS AUTORES DA BÍBLIA
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl italic mb-8"
                    style={{
                        color: colors.amber,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Evidências, Debates e o que Sabemos
                </motion.p>

                {/* Linha decorativa */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="h-0.5 max-w-md mx-auto mb-8"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.amber}, transparent)`
                    }}
                />

                {/* Stamp CASO ABERTO */}
                <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: -8 }}
                    transition={{ delay: 1.2, type: 'spring', stiffness: 300 }}
                    className="inline-block px-6 py-2 rounded-lg border-3"
                    style={{
                        borderWidth: '3px',
                        borderColor: colors.amber,
                        color: colors.amber,
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                    }}
                >
                    CASO ABERTO
                </motion.div>

                {/* QR Code + URL */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 flex flex-col items-center gap-3"
                >
                    <div
                        className="p-3 rounded-xl inline-block"
                        style={{ background: '#FFFFFF' }}
                    >
                        <QRCodeSVG
                            value={SITE_URL}
                            size={120}
                            bgColor="#FFFFFF"
                            fgColor="#1A1410"
                            level="M"
                        />
                    </div>
                    <p className="text-sm" style={{ color: colors.textMuted }}>
                        Acesse: <span style={{ color: colors.amber }}>rickyalves.com/apologetica/licao-9</span>
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
