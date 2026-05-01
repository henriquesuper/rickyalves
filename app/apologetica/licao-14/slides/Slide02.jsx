'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, colors } from './shared';

const objectives = [
    {
        icon: '🧭',
        text: 'Reconhecer que a Bíblia ',
        emphasis: 'propõe uma chave interna',
        rest: ' de leitura — não imposta de fora.',
    },
    {
        icon: '✦',
        text: 'Entender a tese cristocêntrica em sua forma ',
        emphasis: 'mais cuidadosa',
        rest: ' — sem alegorese livre nem anacronismo.',
    },
    {
        icon: '📜',
        text: 'Distinguir as ',
        emphasis: 'cinco categorias de apontamento',
        rest: ' (profecia direta, tipologia, temas, estrutura, citações).',
    },
    {
        icon: '⚑',
        text: 'Saber responder ',
        emphasis: 'objeções honestas',
        rest: ' (projeção retroativa, privilégio cristão, tipologia frouxa, AT diminuído).',
    },
    {
        icon: '🕯',
        text: 'Sair com ',
        emphasis: 'sola Scriptura',
        rest: ' como princípio metodológico — não bandeira denominacional.',
    },
    {
        icon: '🚪',
        text: 'Entender ',
        emphasis: 'por que João',
        rest: ' será a porta de entrada do estudo bíblico.',
    },
];

export function Slide02() {
    return (
        <ConvergenceWrapper stratum="aproximacao">
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
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Ao final, você vai poder...
                </motion.h2>

                <div className="space-y-2.5">
                    {objectives.map((obj, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                            className="flex items-start gap-4 p-3.5 rounded-xl"
                            style={{
                                background: colors.bgSurface,
                                border: `1px solid ${colors.haloGold}18`,
                            }}
                        >
                            <span className="text-xl flex-shrink-0">{obj.icon}</span>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: colors.textMedium }}>
                                {obj.text}
                                <span style={{ color: colors.haloGold, fontWeight: 600 }}>{obj.emphasis}</span>
                                {obj.rest}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ConvergenceWrapper>
    );
}
