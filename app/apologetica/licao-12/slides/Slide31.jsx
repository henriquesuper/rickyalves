'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide31() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-wider mb-2 text-center"
                    style={{ color: colors.lensAmber }}
                >
                    Lei Cerimonial — cumprida em Cristo
                </motion.h3>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    A Sombra e a Substância
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-5 rounded-2xl"
                    style={{ background: colors.bgSurface, border: `1px solid ${colors.lensAmber}15` }}
                >
                    <p className="text-sm mb-4" style={{ color: colors.textMedium }}>
                        Sacrifícios, festas, rituais de pureza — tudo apontava para algo maior.
                        Quando Cristo veio, a sombra deu lugar à substância.
                    </p>

                    <div className="flex items-center justify-center gap-4 my-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 0.5, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-center"
                        >
                            <span className="text-3xl block mb-1">🐑</span>
                            <p className="text-xs" style={{ color: colors.lensAmber }}>Cordeiro pascal</p>
                            <p className="text-[10px]" style={{ color: colors.textMuted }}>Sombra</p>
                        </motion.div>

                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-xl"
                            style={{ color: colors.lensBlue }}
                        >
                            →
                        </motion.span>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="text-center"
                        >
                            <span className="text-3xl block mb-1">✝️</span>
                            <p className="text-xs" style={{ color: colors.lensTeal }}>Cristo</p>
                            <p className="text-[10px]" style={{ color: colors.textMuted }}>Substância</p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="text-xs italic text-center"
                        style={{ color: colors.textMuted }}
                    >
                        &ldquo;Estas coisas são sombras do que haveria de vir; a realidade, porém, encontra-se em Cristo.&rdquo;
                        — Colossenses 2:17
                    </motion.p>
                </motion.div>
            </div>
        </LabWrapper>
    );
}
