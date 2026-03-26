'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, colors } from './shared';

export function Slide33() {
    return (
        <ExcavationWrapper stratum="limestone">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    &lsquo;YEHOSEF BAR CAIAPHAS&rsquo;
                </motion.h2>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-lg mb-6"
                    style={{
                        background: colors.bgDeep,
                        borderLeft: `3px solid ${colors.excavationAmber}`,
                    }}
                >
                    <p className="text-lg italic leading-relaxed" style={{ color: colors.textLight }}>
                        &ldquo;José, filho de Caifás&rdquo;
                    </p>
                    <p className="text-sm mt-2" style={{ color: colors.textMuted }}>
                        — inscrição no ossuário
                    </p>
                </motion.div>

                {/* Key points */}
                <div className="space-y-3 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="mr-2">1.</span>
                            Ossos de um homem de aproximadamente 60 anos
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="mr-2">2.</span>
                            Josefo também o chama de &ldquo;José, que era chamado Caifás&rdquo;
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="p-4 rounded-lg"
                        style={{ background: colors.bgSurface, border: `1px solid ${colors.excavationAmber}15` }}
                    >
                        <p className="text-sm" style={{ color: colors.textLight }}>
                            <span className="mr-2">3.</span>
                            Combinação de nome + data + local + status social = altamente provável
                        </p>
                    </motion.div>
                </div>

                {/* Honest note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="p-3 rounded-lg text-center"
                    style={{
                        background: `${colors.bgSurface}`,
                        border: `1px solid ${colors.textMuted}20`,
                    }}
                >
                    <p className="text-sm" style={{ color: colors.textMuted }}>
                        &#9888;&#65039; Não é 100% certo — outros membros da família poderiam ter o mesmo nome.
                    </p>
                </motion.div>
            </div>
        </ExcavationWrapper>
    );
}
