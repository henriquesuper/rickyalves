'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, DossierCard, CaseHeader, colors } from './shared';

export default function Slide40_TesteContra() {
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <CaseHeader
                    title="Teste Contra"
                    subtitle="Como seria se NÃO fosse confiável?"
                    icon="🔄"
                    delay={0.2}
                />

                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.wineRed}10`, borderColor: `${colors.wineRed}30` }}
                    >
                        <h3 className="font-bold text-lg mb-4 text-center" style={{ color: colors.wineRed }}>
                            Documento Suspeito
                        </h3>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <li>❌ Autor único, identidade secreta</li>
                            <li>❌ Sem variação — versão única e uniforme</li>
                            <li>❌ Esconde contradições e problemas</li>
                            <li>❌ Sem confirmação externa</li>
                            <li>❌ Fabricado séculos depois</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-5 rounded-xl border"
                        style={{ background: `${colors.mossGreen}10`, borderColor: `${colors.mossGreen}30` }}
                    >
                        <h3 className="font-bold text-lg mb-4 text-center" style={{ color: colors.mossGreen }}>
                            O Que Temos
                        </h3>
                        <ul className="space-y-2 text-sm" style={{ color: colors.textLight }}>
                            <li>✅ ~40 autores identificáveis</li>
                            <li>✅ Quatro versões convergentes</li>
                            <li>✅ Admite limitações e debates</li>
                            <li>✅ Confirmada por arqueologia</li>
                            <li>✅ Escrito durante a vida das testemunhas</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center text-lg font-bold mt-8"
                    style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O que temos não se parece com fabricação. Se parece com testemunho.
                </motion.p>
            </div>
        </SlideWrapper>
    );
}
