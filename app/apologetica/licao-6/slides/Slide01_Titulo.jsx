import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { SlideWrapper, WaxSeal, colors } from './shared';

const PARTICIPATION_URL = 'https://www.rickyalves.com/apologetica/licao-6/participar';

export default function Slide01_Titulo() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10 max-w-5xl mx-auto px-8"
            >
                {/* Selo decorativo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="mb-8 flex justify-center"
                >
                    <WaxSeal icon="📜" size="lg" />
                </motion.div>

                {/* Título principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-['Cinzel'] text-5xl md:text-7xl font-bold mb-6"
                    style={{
                        background: `linear-gradient(135deg, ${colors.goldLeaf} 0%, ${colors.parchmentLight} 50%, ${colors.goldLeaf} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 60px rgba(201, 162, 39, 0.3)'
                    }}
                >
                    A Formação do Cânon
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl md:text-3xl mb-8 font-light"
                    style={{ color: colors.parchmentMid }}
                >
                    Como Sabemos Quais Livros Pertencem à Bíblia?
                </motion.p>

                {/* Subtítulo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="inline-block px-8 py-4 rounded-2xl"
                    style={{
                        background: `linear-gradient(135deg, ${colors.libraryWood}60, ${colors.bgSurface}60)`,
                        border: `1px solid ${colors.goldLeaf}30`
                    }}
                >
                    <p style={{ color: `${colors.parchmentLight}80` }}>
                        Lição 6 • Estudo Bíblico Apologético
                    </p>
                </motion.div>

                {/* Decoração inferior */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 h-0.5 w-48 mx-auto"
                    style={{ background: `linear-gradient(90deg, transparent, ${colors.goldLeaf}, transparent)` }}
                />

                {/* QR Code */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="mt-8 flex flex-col items-center gap-4"
                >
                    <div
                        className="p-3 rounded-xl"
                        style={{
                            background: colors.parchmentLight,
                            boxShadow: `0 0 30px ${colors.goldLeaf}30`
                        }}
                    >
                        <QRCodeSVG
                            value={PARTICIPATION_URL}
                            size={120}
                            bgColor={colors.parchmentLight}
                            fgColor={colors.inkBrown}
                            level="H"
                        />
                    </div>
                    <p className="text-sm font-medium" style={{ color: `${colors.parchmentMid}70` }}>
                        📱 Escaneie para participar
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
