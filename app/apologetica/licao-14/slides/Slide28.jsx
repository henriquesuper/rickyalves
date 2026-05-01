'use client';
import { motion } from 'framer-motion';
import { ConvergenceWrapper, ComparisonTable, colors } from './shared';

const rows = [
    ['Isaías 53',         'séc. VIII a.C.', 'O servo sofredor — morre por outros e é vindicado'],
    ['Salmo 22',          'séc. X a.C.',    'Detalhes de crucificação séculos antes da prática'],
    ['Miqueias 5:2',      'séc. VIII a.C.', 'Belém como local de nascimento do governante'],
    ['Daniel 9:24-27',    'séc. VI a.C.',   'As setenta semanas (texto debatido, reivindicado pelo NT)'],
    ['Zacarias 9:9',      'séc. VI a.C.',   'Rei vindo "montado em jumento"'],
    ['Zacarias 11:12-13', 'séc. VI a.C.',   'Trinta moedas de prata'],
    ['Zacarias 12:10',    'séc. VI a.C.',   '"Olharão para aquele a quem traspassaram"'],
];

export function Slide28() {
    return (
        <ConvergenceWrapper stratum="vetores">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.4em] mb-3 font-mono text-center"
                    style={{ color: colors.vectorAmber }}
                >
                    Categoria A · Profecia direta
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-2xl md:text-3xl font-bold mb-2 text-center"
                    style={{
                        color: colors.textStarlight,
                        fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                >
                    Os exemplos clássicos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-sm italic mb-8"
                    style={{ color: colors.textMedium }}
                >
                    Todos atestados em manuscritos pré-cristãos.
                </motion.p>

                <ComparisonTable
                    columns={['Passagem', 'Datação', 'O que prediz']}
                    rows={rows}
                    delay={0.7}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="text-center text-sm italic mt-6"
                    style={{ color: colors.vectorAmber }}
                >
                    Nem todo texto messiânico funciona dessa forma direta — mas alguns funcionam.
                </motion.p>
            </div>
        </ConvergenceWrapper>
    );
}
