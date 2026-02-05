// Slide 27 - A Garantia
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, WaxSeal, colors } from './shared';

export default function Slide27_Garantia() {
    const doctrines = [
        { doctrine: "Divindade de Cristo", passages: "João 1:1-14, Colossenses 1:15-20, Filipenses 2:5-11..." },
        { doctrine: "Ressurreição", passages: "1 Coríntios 15, Mateus 28, Lucas 24, João 20..." },
        { doctrine: "Salvação pela graça", passages: "Efésios 2:8-9, Romanos 3-5, Tito 3:5..." },
        { doctrine: "Trindade", passages: "Mateus 28:19, 2 Coríntios 13:14, 1 Pedro 1:2..." }
    ];

    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-4xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-4 text-center"
                    style={{ color: colors.goldBright }}
                >
                    A Garantia
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg mb-10 text-center"
                    style={{ color: colors.parchmentMid }}
                >
                    Por que nenhuma doutrina está em risco?
                </motion.p>

                {/* Princípio */}
                <ParchmentCard delay={0.4} highlight className="w-full max-w-xl mb-8">
                    <div className="text-center">
                        <WaxSeal icon="🛡️" size="md" delay={0.5} className="mx-auto mb-4" />
                        <p
                            className="text-xl"
                            style={{ color: colors.parchmentLight }}
                        >
                            Toda doutrina cristã essencial tem{' '}
                            <span style={{ color: colors.goldAged, fontWeight: 'bold' }}>múltiplas bases bíblicas</span>
                        </p>
                        <p
                            className="text-sm mt-3"
                            style={{ color: colors.parchmentMid }}
                        >
                            Nenhuma depende de um único versículo disputado
                        </p>
                    </div>
                </ParchmentCard>

                {/* Exemplos */}
                <div className="w-full space-y-3 mb-8">
                    {doctrines.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="p-4 rounded-lg flex items-start gap-4"
                            style={{
                                background: `${colors.bgSurface}80`,
                                border: `1px solid ${colors.goldAged}20`
                            }}
                        >
                            <span style={{ color: colors.goldAged }}>✓</span>
                            <div>
                                <span
                                    className="font-bold"
                                    style={{ color: colors.parchmentLight }}
                                >
                                    {item.doctrine}:
                                </span>
                                <span
                                    className="text-sm ml-2"
                                    style={{ color: colors.parchmentMid }}
                                >
                                    {item.passages}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Conclusão */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center p-4 rounded-xl"
                    style={{
                        background: `${colors.goldAged}10`,
                        border: `1px solid ${colors.goldAged}30`
                    }}
                >
                    <p style={{ color: colors.parchmentLight }}>
                        💡 Mesmo que removêssemos <em>todos</em> os versículos disputados,
                        <br />
                        <span style={{ color: colors.goldAged }}>todas as doutrinas</span> permaneceriam intactas.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
