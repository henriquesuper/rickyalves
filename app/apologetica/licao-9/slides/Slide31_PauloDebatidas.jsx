'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, CaseHeader, StampBadge, colors } from './shared';

const cartasDebatidas = [
    { nome: 'Efésios', argumento: 'Vocabulário teológico mais desenvolvido' },
    { nome: 'Colossenses', argumento: 'Estilo mais elaborado que as cartas anteriores' },
    { nome: '2 Tessalonicenses', argumento: 'Escatologia aparentemente diferente de 1Ts' },
    { nome: '1-2 Timóteo, Tito', argumento: 'Contexto eclesiástico mais estruturado' },
];

export default function Slide31_PauloDebatidas() {
    return (
        <SlideWrapper variant="cream">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Paulo: Cartas Debatidas"
                    subtitle="O debate existe — e é honesto"
                    icon="📝"
                    delay={0.2}
                />

                <div className="space-y-3 mb-6">
                    {cartasDebatidas.map((c, i) => (
                        <motion.div
                            key={c.nome}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.12 }}
                            className="flex items-center gap-3 p-3 rounded-lg border"
                            style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.stampDebate}25` }}
                        >
                            <div className="flex-1">
                                <h4 className="font-bold text-sm" style={{ color: colors.warmWhite }}>{c.nome}</h4>
                                <p className="text-xs" style={{ color: colors.textMedium }}>{c.argumento}</p>
                            </div>
                            <StampBadge type="debate" size="sm" delay={0.5 + i * 0.1} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="p-4 rounded-xl border"
                    style={{ background: `${colors.bgSurface}CC`, borderColor: `${colors.amber}30` }}
                >
                    <h3 className="font-bold mb-2" style={{ color: colors.amber }}>Resposta Conservadora</h3>
                    <p className="text-sm leading-relaxed" style={{ color: colors.textLight }}>
                        Paulo usava <span style={{ color: colors.amber }}>secretários</span>.
                        Romanos 16:22: Tércio se identifica como quem &quot;escreveu&quot; a carta.
                        Variações de estilo são esperadas quando o autor dita para pessoas diferentes
                        em contextos diferentes ao longo de décadas.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1.4 }}
                    className="text-center text-sm mt-4 italic"
                    style={{ color: colors.textMuted }}
                >
                    As sete cartas indisputadas já são suficientes para o que nosso estudo precisa.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
