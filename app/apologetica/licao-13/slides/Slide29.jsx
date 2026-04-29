'use client';
import { motion } from 'framer-motion';
import { LibraryWrapper, ComparisonTable, colors } from './shared';

const rows = [
    [
        'Preterismo',
        'Cumprimento no 1º século (Jerusalém, Roma).',
        'Precisa explicar por que ainda leríamos.',
    ],
    [
        'Futurismo',
        'Cumprimento em um bloco final de eventos.',
        'Precisa justificar o silêncio dos 20 séculos no meio.',
    ],
    [
        'Idealismo',
        'Simbolismo atemporal: bem vs mal em qualquer época.',
        'Precisa explicar referências históricas concretas.',
    ],
    [
        'Historicismo',
        'Arco contínuo da história da igreja, do 1º século ao fim.',
        'Precisa justificar identificações específicas com prudência.',
    ],
];

export function Slide29() {
    return (
        <LibraryWrapper stratum="acervo">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] font-mono text-center mb-3"
                    style={{ color: colors.textMuted }}
                >
                    Apocalíptica — quatro escolas
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold text-center mb-3"
                    style={{
                        color: colors.textLight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Cristãos sérios se distribuem entre as quatro
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-center text-sm mb-6"
                    style={{ color: colors.textMuted }}
                >
                    Cada uma tenta responder: <em>a que ou a quem o texto se refere?</em>
                </motion.p>

                <ComparisonTable
                    columns={['Escola', 'Leitura', 'Desafio interno']}
                    rows={rows}
                    delay={0.7}
                />
            </div>
        </LibraryWrapper>
    );
}
