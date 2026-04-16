'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

export function Slide28() {
    return (
        <LabWrapper stratum="lens-array">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl mb-6"
                >
                    🔭
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-6"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    A Lente Ainda Estava Sendo Polida
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg mb-4"
                    style={{ color: colors.textMedium }}
                >
                    Você não pode exigir clareza de Novo Testamento de textos do Antigo Testamento.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-sm italic"
                    style={{ color: colors.textMuted }}
                >
                    A lente foi sendo polida ao longo de séculos. O AT não estava &ldquo;errado&rdquo; — estava incompleto.
                    Cada geração recebeu o que conseguia processar.
                </motion.p>
            </div>
        </LabWrapper>
    );
}
