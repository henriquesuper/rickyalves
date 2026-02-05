// Slide 02 - A Admissão Que Assusta
// "Não temos os manuscritos originais de NENHUM livro da Bíblia"
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors, ManuscriptFragment } from './shared';

export default function Slide02_AdmissaoAssusta() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título da seção */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm uppercase tracking-widest mb-8"
                    style={{ color: colors.goldAged }}
                >
                    A Verdade Honesta
                </motion.p>

                {/* Afirmação impactante */}
                <ParchmentCard delay={0.4} highlight className="mb-8">
                    <h2
                        className="text-2xl md:text-4xl font-bold text-center leading-relaxed"
                        style={{ color: colors.parchmentLight }}
                    >
                        Não temos os manuscritos originais<br />
                        de <span style={{ color: colors.inkBlood }}>NENHUM</span> livro da Bíblia.
                    </h2>
                </ParchmentCard>

                {/* Zero */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="text-6xl font-bold mb-8"
                    style={{ color: colors.inkBlood }}
                >
                    Zero.
                </motion.div>

                {/* Lista de exemplos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {[
                        { icon: "✍️", text: "Nada que Paulo escreveu com sua própria mão" },
                        { icon: "📜", text: "Nenhum pergaminho original de Moisés" },
                        { icon: "🔮", text: "Nenhum rolo das mãos de Isaías" }
                    ].map((item, index) => (
                        <ManuscriptFragment key={index} delay={1 + index * 0.2}>
                            <div className="text-center">
                                <span className="text-2xl block mb-2">{item.icon}</span>
                                <p className="text-sm" style={{ color: colors.parchmentMid }}>
                                    {item.text}
                                </p>
                            </div>
                        </ManuscriptFragment>
                    ))}
                </div>

                {/* Nota final */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="text-lg mt-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    O que temos são <strong style={{ color: colors.goldAged }}>cópias</strong>.
                    <br />Cópias de cópias de cópias.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
