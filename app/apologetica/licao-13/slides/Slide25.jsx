'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const rules = [
    {
        icon: '🎯',
        title: 'Audiência primeiro',
        text: 'Antes de perguntar o que isso significa para nós, pergunte o que isso significou para eles.',
    },
    {
        icon: '⛰️',
        title: 'Horizontes temporais sobrepostos',
        text: 'Iminente + cumprimento parcial + cumprimento escatológico. Os profetas veem "picos montanhosos" sem perceber os vales entre eles.',
    },
    {
        icon: '🎭',
        title: 'Linguagem poética, hiperbólica',
        text: 'Sol escurecido e lua sem luz (Is 13) = queda de Babilônia com cataclismo simbólico — não eclipse astronômico.',
    },
    {
        icon: '🔀',
        title: 'Condicionalidade',
        text: 'A maior parte do anúncio profético é condicional (Jr 18.7-10). Nínive se arrepende, e a "falha" de Jonas é, na verdade, seu sucesso.',
    },
];

export function Slide25() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Quatro regras de leitura
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-8"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Como ler profecia sem errar o gênero
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rules.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.15 }}
                            className="rounded-xl p-4"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.genreWine}25`,
                            }}
                        >
                            <div className="flex items-start gap-3 mb-2">
                                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                                <p className="text-sm font-bold" style={{ color: colors.genreWine }}>
                                    {r.title}
                                </p>
                            </div>
                            <p className="text-xs leading-relaxed" style={{ color: colors.textMedium }}>
                                {r.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LibraryWrapper>
    );
}
