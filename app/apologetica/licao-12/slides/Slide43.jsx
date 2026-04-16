'use client';
import { motion } from 'framer-motion';
import { LabWrapper, ComparisonTable, colors } from './shared';

export function Slide43() {
    return (
        <LabWrapper stratum="warning-filter">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Leitura Distorcida vs. Leitura Focada
                </motion.h2>

                <ComparisonTable
                    columns={['Versículo', '⊘ Distorcido', '◎ Focado']}
                    rows={[
                        ['Fp 4:13', '"Posso conquistar tudo"', 'Contentamento no sofrimento'],
                        ['Jr 29:11', '"Plano de prosperidade pessoal"', 'Restauração nacional pós-exílio'],
                        ['Mt 18:20', '"Quórum mínimo pra culto"', 'Disciplina eclesiástica'],
                        ['Mt 7:1', '"Nunca avalie nada"', 'Não seja hipócrita ao avaliar'],
                        ['Sl 91:4', '"Deus tem asas literais"', 'Metáfora de proteção (poesia)'],
                    ]}
                    delay={0.4}
                />
            </div>
        </LabWrapper>
    );
}
