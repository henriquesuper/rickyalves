'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide17_JEDP() {
    const problemas = [
        { num: '①', title: 'Critérios Circulares', desc: 'Dividir o texto por nomes de Deus (Javé vs Elohim) pressupõe o que tenta provar. Documentos ANE usam múltiplos nomes para a mesma divindade.', icon: '🔄' },
        { num: '②', title: 'Compatibilidade Histórica', desc: 'Detalhes culturais do Pentateuco refletem o II milênio a.C., não o I milênio — quando a compilação tardia teria ocorrido.', icon: '🏛️' },
        { num: '③', title: 'Deuteronômio 34', desc: 'Narra a morte de Moisés. Obviamente ele não escreveu isso. A tradição sempre reconheceu — atribui a Josué ou editor posterior. Honestidade, não problema.', icon: '📖' },
    ];

    return (
        <SlideWrapper variant="kraft">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Revisão Crítica do JEDP"
                    subtitle="Três problemas que a academia reconhece"
                    icon="🔍"
                    delay={0.2}
                />

                <div className="space-y-4">
                    {problemas.map((p, i) => (
                        <motion.div
                            key={p.num}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="flex items-start gap-4 p-5 rounded-xl border-l-4"
                            style={{
                                background: `${colors.bgSurface}CC`,
                                borderLeftColor: colors.amber,
                            }}
                        >
                            <span className="text-2xl flex-shrink-0">{p.icon}</span>
                            <div>
                                <h3 className="font-bold text-lg mb-1" style={{ color: colors.warmWhite }}>
                                    <span style={{ color: colors.amber }}>{p.num}</span> {p.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: colors.textMedium }}>
                                    {p.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
}
