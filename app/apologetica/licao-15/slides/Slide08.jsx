'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, QuietTitle, colors, fonts } from './shared';

const evangelistas = [
    { name: 'Mateus', emphasis: 'cumprimento',          audience: 'audiência judaica',  highlighted: false },
    { name: 'Marcos', emphasis: 'ação',                 audience: 'audiência romana',   highlighted: false },
    { name: 'Lucas',  emphasis: 'precisão histórica',   audience: 'audiência grega',    highlighted: false },
    { name: 'João',   emphasis: 'profundidade',         audience: 'todos',              highlighted: true  },
];

export function Slide08({ slideIndex = 7 }) {
    return (
        <ParchmentWrapper slideIndex={slideIndex}>
            <div className="max-w-4xl mx-auto px-8 py-6 flex flex-col justify-center w-full">
                <QuietTitle size="sm" align="center" delay={0.2}>
                    Os Evangelhos <span style={{ color: colors.inkMuted, fontWeight: 400 }}>—</span> quatro retratos
                </QuietTitle>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 0.4, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="h-px mx-auto my-6"
                    style={{ width: '120px', background: colors.inkMuted }}
                />

                <div className="mt-2">
                    {evangelistas.map((e, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 + i * 0.22, duration: 0.6 }}
                            className="grid grid-cols-12 gap-4 py-3"
                            style={{
                                borderBottom: i < evangelistas.length - 1 ? `1px solid ${colors.inkMuted}25` : 'none',
                            }}
                        >
                            <div className="col-span-4 md:col-span-3 flex items-center">
                                <p
                                    className="text-xl md:text-2xl"
                                    style={{
                                        color: e.highlighted ? colors.bordo : colors.inkAntique,
                                        fontFamily: fonts.display,
                                        fontWeight: e.highlighted ? 600 : 500,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {e.name}
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-5 flex items-center">
                                <p
                                    className="text-base md:text-lg italic"
                                    style={{
                                        color: e.highlighted ? colors.inkAntique : colors.inkSoft,
                                        fontFamily: fonts.display,
                                        fontWeight: e.highlighted ? 500 : 400,
                                    }}
                                >
                                    {e.emphasis}
                                </p>
                            </div>
                            <div className="col-span-4 md:col-span-4 flex items-center justify-end">
                                <p
                                    className="text-xs md:text-sm text-right"
                                    style={{
                                        color: colors.inkMuted,
                                        fontFamily: fonts.body,
                                        letterSpacing: '0.02em',
                                    }}
                                >
                                    {e.audience}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParchmentWrapper>
    );
}
