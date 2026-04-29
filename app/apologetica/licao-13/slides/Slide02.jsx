'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, colors } from './shared';

const objectives = [
    {
        icon: '📜',
        text: 'Entender que gênero literário é um',
        emphasis: 'contrato de leitura',
        rest: ' — não uma etiqueta acadêmica.',
    },
    {
        icon: '🗂️',
        text: 'Reconhecer os ',
        emphasis: 'principais gêneros bíblicos',
        rest: ' e as convenções específicas de cada um.',
    },
    {
        icon: '⚠️',
        text: 'Identificar os ',
        emphasis: 'três grandes erros',
        rest: ' de interpretação que nascem de confusão de gênero.',
    },
    {
        icon: '🔦',
        text: 'Ver ',
        emphasis: 'Jó',
        rest: ' como laboratório vivo de múltiplos gêneros em um só livro.',
    },
    {
        icon: '🛠️',
        text: 'Ter vocabulário para perguntar, diante de qualquer texto difícil: ',
        emphasis: 'que tipo de texto é este?',
        rest: '',
    },
];

export function Slide02() {
    return (
        <LibraryWrapper stratum="vestibulo">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.textMuted }}
                >
                    Objetivos da Aula
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Ao final, você vai poder...
                </motion.h2>

                <div className="space-y-3">
                    {objectives.map((obj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                            className="flex items-start gap-4 p-4 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.inkGold}18`,
                            }}
                        >
                            <span className="text-2xl flex-shrink-0">{obj.icon}</span>
                            <p className="text-base leading-relaxed" style={{ color: colors.textMedium }}>
                                {obj.text}
                                <span style={{ color: colors.inkGold, fontWeight: 600 }}>{obj.emphasis}</span>
                                {obj.rest}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LibraryWrapper>
    );
}
