// Slide 12 - Os Grandes Códices
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide12_GrandesCodices() {
    const codices = [
        {
            name: "Códice Sinaítico",
            symbol: "א",
            date: "~350 d.C.",
            content: "NT completo + AT grego",
            location: "British Library, Londres",
            highlight: true
        },
        {
            name: "Códice Vaticano",
            symbol: "B",
            date: "~325-350 d.C.",
            content: "Quase toda a Bíblia",
            location: "Biblioteca do Vaticano",
            highlight: true
        },
        {
            name: "Códice Alexandrino",
            symbol: "A",
            date: "~400-440 d.C.",
            content: "Quase toda a Bíblia",
            location: "British Library, Londres"
        }
    ];

    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-6xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    Os Grandes Códices
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Manuscritos unciais completos ou quase completos
                </motion.p>

                {/* Grid de códices */}
                <div className="grid md:grid-cols-3 gap-6 w-full mb-8">
                    {codices.map((codex, index) => (
                        <ParchmentCard
                            key={index}
                            delay={0.3 + index * 0.2}
                            highlight={codex.highlight}
                            className="h-full"
                        >
                            <div className="text-center">
                                {/* Símbolo do códice */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.woodMedium}, ${colors.bgSurface})`,
                                        border: `2px solid ${colors.goldAged}`,
                                        boxShadow: `0 0 15px ${colors.goldAged}30`
                                    }}
                                >
                                    <span
                                        className="text-3xl font-bold"
                                        style={{ color: colors.goldBright }}
                                    >
                                        {codex.symbol}
                                    </span>
                                </motion.div>

                                <h3
                                    className="text-lg font-bold mb-2"
                                    style={{ color: codex.highlight ? colors.goldAged : colors.parchmentLight }}
                                >
                                    {codex.name}
                                </h3>

                                <div
                                    className="text-sm px-3 py-1 rounded-full inline-block mb-3"
                                    style={{
                                        background: `${colors.inkSepia}30`,
                                        color: colors.goldAged
                                    }}
                                >
                                    {codex.date}
                                </div>

                                <p
                                    className="text-sm mb-2"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    {codex.content}
                                </p>

                                <p
                                    className="text-xs"
                                    style={{ color: colors.parchmentMid }}
                                >
                                    📍 {codex.location}
                                </p>
                            </div>
                        </ParchmentCard>
                    ))}
                </div>

                {/* Nota importante */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <WaxSeal icon="🌐" size="sm" delay={1.3} />
                    <p style={{ color: colors.parchmentLight }}>
                        <strong style={{ color: colors.goldAged }}>Disponíveis online!</strong>{' '}
                        Qualquer pessoa pode examinar esses manuscritos digitalmente.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
