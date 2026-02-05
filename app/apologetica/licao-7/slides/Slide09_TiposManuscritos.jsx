// Slide 09 - Tipos de Manuscritos do NT
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide09_TiposManuscritos() {
    const manuscriptTypes = [
        {
            icon: "📋",
            name: "Papiros",
            count: "~140",
            period: "Séc. II-VII",
            description: "Mais antigos, fragmentados, descobertas do Egito",
            highlight: true
        },
        {
            icon: "📜",
            name: "Unciais",
            count: "~320",
            period: "Séc. IV-X",
            description: "Letras maiúsculas, pergaminho, grandes códices"
        },
        {
            icon: "✍️",
            name: "Minúsculos",
            count: "~2.900",
            period: "Séc. IX-XVI",
            description: "Letras cursivas, mais abundantes"
        }
    ];

    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    Tipos de Manuscritos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    25.000+ manuscritos organizados em três categorias
                </motion.p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 w-full mb-10">
                    {manuscriptTypes.map((type, index) => (
                        <ParchmentCard
                            key={index}
                            delay={0.4 + index * 0.2}
                            highlight={type.highlight}
                            className="h-full"
                        >
                            <div className="text-center">
                                <span className="text-4xl block mb-3">{type.icon}</span>
                                <h3
                                    className="text-xl font-bold mb-2"
                                    style={{ color: type.highlight ? colors.goldAged : colors.parchmentLight }}
                                >
                                    {type.name}
                                </h3>
                                <div
                                    className="text-3xl font-bold mb-2"
                                    style={{ color: colors.goldAged }}
                                >
                                    {type.count}
                                </div>
                                <div
                                    className="text-sm px-3 py-1 rounded-full inline-block mb-3"
                                    style={{
                                        background: `${colors.inkSepia}30`,
                                        color: colors.parchmentMid
                                    }}
                                >
                                    {type.period}
                                </div>
                                <p
                                    className="text-sm"
                                    style={{ color: `${colors.parchmentLight}90` }}
                                >
                                    {type.description}
                                </p>
                            </div>
                        </ParchmentCard>
                    ))}
                </div>

                {/* Nota de destaque */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center gap-4"
                >
                    <WaxSeal icon="📜" size="sm" delay={1.3} />
                    <p
                        className="text-lg"
                        style={{ color: colors.parchmentLight }}
                    >
                        Os <span style={{ color: colors.goldAged }}>papiros</span> são os mais valiosos:
                        os mais antigos, alguns a <span style={{ color: colors.goldAged }}>décadas</span> dos originais
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
