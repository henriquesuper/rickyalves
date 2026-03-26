'use client';
import { motion } from 'framer-motion';
import { ExcavationWrapper, SourceCard, colors } from './shared';

export function Slide44() {
    return (
        <ExcavationWrapper stratum="papyrus">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Protocol */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs mb-4 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    Fonte 3 de 4
                </motion.p>

                {/* Source Card */}
                <SourceCard
                    author="Plínio, o Jovem"
                    work="Epistulae X.96 (Carta a Trajano)"
                    date="~112 d.C."
                    quote="Cristãos cantavam hinos a Cristo como a um deus, se reuniam num dia fixo antes do amanhecer, faziam juramento de não cometer fraude, roubo ou adultério, e compartilhavam uma refeição comunitária."
                    stance="hostile"
                    analysis="Governador romano pedindo instruções sobre como lidar com cristãos. Inadvertidamente descreve a igreja do século II."
                    delay={0.3}
                />
            </div>
        </ExcavationWrapper>
    );
}
