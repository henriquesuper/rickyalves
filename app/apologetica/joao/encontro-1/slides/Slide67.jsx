'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide67({ slideIndex = 66 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-4xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    O Abandono do Acessório
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 4.28–29"
                        lines={[
                            "Deixou, pois, a mulher o seu cântaro, foi à cidade e disse àqueles homens:",
                            "Vinde, vede um homem que me disse tudo quanto tenho feito; porventura não é este o Cristo?"
                        ]}
                        tone="lapis"
                        align="center"
                        size="sm"
                        delay={0.6}
                    />
                </div>

                <div className="flex justify-center items-center my-4">
                    <svg viewBox="0 0 200 120" className="w-48 h-auto" fill="none" strokeWidth="1.5">
                        {/* Well mouth */}
                        <ellipse cx="100" cy="90" rx="60" ry="12" stroke={colors.inkSoft} strokeWidth="1" />
                        <ellipse cx="100" cy="95" rx="58" ry="10" stroke={colors.inkSoft} strokeWidth="0.5" strokeDasharray="2 2" />
                        
                        {/* Abandoned Water Jar */}
                        <motion.g
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1.0 }}
                        >
                            <path 
                                d="M 92 90 C 87 85, 77 75, 77 60 C 77 48, 87 45, 94 45 L 94 40 L 90 40 L 90 36 L 110 36 L 110 40 L 106 40 L 106 45 C 113 45, 123 48, 123 60 C 123 75, 113 85, 108 90 Z" 
                                stroke={colors.gold} 
                                strokeWidth="1.5"
                                fill={`${colors.parchmentDeep}dd`}
                            />
                            {/* Handles */}
                            <path d="M 81 50 C 72 50, 72 65, 81 65" stroke={colors.gold} strokeWidth="1.2" />
                            <path d="M 119 50 C 128 50, 128 65, 119 65" stroke={colors.gold} strokeWidth="1.2" />
                        </motion.g>
                    </svg>
                </div>

                <ProseBlock 
                    delay={2.2}
                    align="center"
                    lines={[
                        "O cântaro deixado para trás simboliza o abandono da urgência inicial. O objeto que ela veio buscar perde o sentido imediato diante do achado maior.",
                        "",
                        "Ao dizer 'Vinde, vede', ela usa a mesmíssima fórmula verbal que Jesus dirigiu aos primeiros discípulos (1.39). A outsider de Samaria adquire, instantaneamente, a linguagem e o papel do próprio Mestre."
                    ]}
                    size="sm"
                    color={colors.inkBody}
                />
            </div>
        </ParchmentWrapper>
    );
}
