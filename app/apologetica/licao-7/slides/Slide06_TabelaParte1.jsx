// Slide 06 - Tabela Comparativa (Parte 1)
'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ComparisonTable, colors } from './shared';

const documentosAntigos = [
    {
        "Autor/Obra": "Platão",
        "Data Original": "~400 a.C.",
        "Cópia Mais Antiga": "900 d.C.",
        "Intervalo": "~1.300 anos"
    },
    {
        "Autor/Obra": "Aristóteles",
        "Data Original": "~340 a.C.",
        "Cópia Mais Antiga": "1.100 d.C.",
        "Intervalo": "~1.400 anos"
    },
    {
        "Autor/Obra": "César (Guerra)",
        "Data Original": "50 a.C.",
        "Cópia Mais Antiga": "900 d.C.",
        "Intervalo": "~950 anos"
    },
    {
        "Autor/Obra": "Tácito (Anais)",
        "Data Original": "100 d.C.",
        "Cópia Mais Antiga": "1.100 d.C.",
        "Intervalo": "~1.000 anos"
    },
    {
        "Autor/Obra": "Homero (Ilíada)",
        "Data Original": "~800 a.C.",
        "Cópia Mais Antiga": "400 a.C.",
        "Intervalo": "~400 anos"
    }
];

export default function Slide06_TabelaParte1() {
    return (
        <SlideWrapper>
            <div className="flex flex-col items-center justify-center px-8 max-w-5xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold mb-8 text-center"
                    style={{ color: colors.parchmentLight }}
                >
                    Evidência Manuscrita de Textos Antigos
                </motion.h2>

                {/* Tabela */}
                <div
                    className="w-full p-6 rounded-xl"
                    style={{
                        background: `${colors.bgSurface}90`,
                        border: `1px solid ${colors.inkSepia}30`
                    }}
                >
                    <ComparisonTable
                        data={documentosAntigos}
                        highlightLast={false}
                        delay={0.4}
                    />
                </div>

                {/* Nota de contexto */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 text-center text-sm"
                    style={{ color: colors.parchmentMid }}
                >
                    Estes são os textos clássicos que ninguém questiona.
                    <br />Todos são aceitos como confiáveis pelos historiadores.
                </motion.p>

                {/* Indicador de continuação */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 text-center"
                >
                    <span className="text-sm" style={{ color: colors.goldAged }}>
                        E agora... o Novo Testamento →
                    </span>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
