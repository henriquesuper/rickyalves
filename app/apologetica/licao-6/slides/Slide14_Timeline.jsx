'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, TimelineEvent, colors } from './shared';

const events = [
    {
        year: "~95 d.C.",
        title: "Josefo",
        description: "Lista 22 livros do AT, fechado 'desde Artaxerxes'",
        highlight: false
    },
    {
        year: "~170 d.C.",
        title: "Fragmento Muratoriano",
        description: "Lista canônica mais antiga do NT: 4 Evangelhos, Atos, Paulo, João, Judas",
        highlight: true
    },
    {
        year: "~250 d.C.",
        title: "Orígenes de Alexandria",
        description: "Reconhece os 27 livros, nota que alguns são disputados em regiões",
        highlight: false
    },
    {
        year: "~325 d.C.",
        title: "Eusébio de Cesareia",
        description: "Categoriza: 'aceitos', 'disputados', 'espúrios'. Nossos 27 estão nos dois primeiros",
        highlight: false
    },
    {
        year: "367 d.C.",
        title: "Carta de Atanásio",
        description: "Primeira lista completa e exata dos 27 livros do NT!",
        highlight: true
    },
    {
        year: "397 d.C.",
        title: "Concílio de Cartago",
        description: "Ratificou oficialmente os 27 livros. O cânon já existia; foi formalizado",
        highlight: true
    }
];

export default function Slide14_Timeline() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-4xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    Timeline Histórica
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-10"
                    style={{ color: colors.parchmentMid }}
                >
                    O cânon foi reconhecido ao longo de séculos
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Linha central */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute left-1/2 -translate-x-1/2 w-1 h-full rounded-full"
                        style={{ background: `linear-gradient(180deg, ${colors.goldLeaf}, ${colors.sepia}, ${colors.goldLeaf})` }}
                    />

                    {/* Eventos */}
                    <div className="relative z-10">
                        {events.map((event, i) => (
                            <TimelineEvent
                                key={i}
                                {...event}
                                position={i % 2 === 0 ? "left" : "right"}
                                delay={0.3 + i * 0.15}
                            />
                        ))}
                    </div>
                </div>

                {/* Conclusão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8"
                >
                    <ParchmentCard highlight>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">📜</span>
                            <p style={{ color: colors.parchmentLight }}>
                                <strong style={{ color: colors.goldLeaf }}>Observe:</strong> O Concílio de Niceia (325 d.C.)
                                <strong style={{ color: colors.vermillion }}> NÃO </strong>
                                decidiu o cânon! Niceia tratou da divindade de Cristo.
                                <span className="block text-sm mt-1" style={{ color: colors.parchmentMid }}>
                                    Os concílios formalizaram o que a igreja já reconhecia.
                                </span>
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
