'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, StampBadge, colors } from './shared';

const cartasIndisputadas = [
    'Romanos', '1 Coríntios', '2 Coríntios', 'Gálatas', 'Filipenses', '1 Tessalonicenses', 'Filêmon'
];

export default function Slide30_Paulo() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Paulo: O Mais Datável"
                    subtitle="Sete cartas que praticamente todos aceitam"
                    icon="✍️"
                    protocol="CASO NT-03"
                    delay={0.2}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 rounded-xl border mb-6"
                    style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.mossGreen}30` }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg" style={{ color: colors.mossGreen }}>
                            Cartas Indisputadas — 49-62 d.C.
                        </h3>
                        <StampBadge type="verified" size="md" delay={0.6} />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {cartasIndisputadas.map((carta, i) => (
                            <motion.span
                                key={carta}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + i * 0.08 }}
                                className="px-3 py-1.5 rounded-lg text-sm font-bold"
                                style={{
                                    background: `${colors.mossGreen}15`,
                                    border: `1px solid ${colors.mossGreen}30`,
                                    color: colors.mossGreen,
                                }}
                            >
                                {carta}
                            </motion.span>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 1.3 }}
                        className="text-sm mt-4"
                        style={{ color: colors.textMedium }}
                    >
                        Aceitas como autenticamente paulinas pelos estudiosos mais céticos.
                        Escritas antes dos evangelhos.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center p-3 rounded-lg"
                    style={{ background: `${colors.amber}10`, border: `1px solid ${colors.amber}20` }}
                >
                    <p className="text-sm" style={{ color: colors.amber }}>
                        ⚡ Paulo é crucial: suas cartas confirmam a existência de comunidades cristãs
                        organizadas dentro de 20 anos da crucificação.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
