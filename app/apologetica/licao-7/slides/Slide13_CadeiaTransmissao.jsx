// Slide 13 - A Cadeia de Transmissão
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, TimelineEvent, colors } from './shared';

export default function Slide13_CadeiaTransmissao() {
    const timelineEvents = [
        { year: "~50-100", title: "Originais Escritos", description: "Apóstolos escrevem o NT", position: "left" },
        { year: "~125", title: "P52 (Egito)", description: "João já copiado e espalhado", position: "right", highlight: true },
        { year: "~175-225", title: "P75 (Lucas/João)", description: "Muito próximo do Vaticano", position: "left", highlight: true },
        { year: "~325-350", title: "Códice Vaticano", description: "Concorda com P75", position: "right", highlight: true },
        { year: "~350", title: "Códice Sinaítico", description: "NT completo preservado", position: "left" },
        { year: "Hoje", title: "Nossas Bíblias", description: "Baseadas nesses manuscritos", position: "right" }
    ];

    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    A Cadeia de Transmissão
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-8 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Uma linha ininterrupta dos originais até hoje
                </motion.p>

                {/* Timeline visual */}
                <div className="relative w-full max-w-2xl">
                    {/* Linha central */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
                        style={{
                            background: `linear-gradient(180deg, ${colors.goldAged}50, ${colors.inkSepia}50)`,
                            transformOrigin: 'top'
                        }}
                    />

                    {/* Eventos */}
                    {timelineEvents.map((event, index) => (
                        <TimelineEvent
                            key={index}
                            year={event.year}
                            title={event.title}
                            description={event.description}
                            position={event.position}
                            highlight={event.highlight}
                            delay={0.5 + index * 0.15}
                        />
                    ))}
                </div>

                {/* Insight de destruição */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="mt-8"
                >
                    <ParchmentCard highlight>
                        <div className="text-center">
                            <p
                                className="text-lg"
                                style={{ color: colors.parchmentLight }}
                            >
                                💡 <strong style={{ color: colors.goldAged }}>P75</strong> e{' '}
                                <strong style={{ color: colors.goldAged }}>Códice Vaticano</strong>{' '}
                                concordam notavelmente mesmo com 150+ anos de separação
                            </p>
                            <p
                                className="text-sm mt-3"
                                style={{ color: colors.parchmentMid }}
                            >
                                Isso <span style={{ color: colors.inkBlood }}>destrói</span> a teoria de
                                "alteração ao longo dos séculos"
                            </p>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
