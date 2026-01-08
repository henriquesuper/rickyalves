import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

const islam = traditions.find(t => t.id === 'islam');

export default function Slide07_Alcorao() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Header com ícone */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-10"
                >
                    <span className="text-7xl">{islam.icon}</span>
                    <h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-4"
                        style={{ color: islam.color }}
                    >
                        Alcorão
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border-l-4"
                        style={{ borderColor: islam.color }}
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">📜 Alegação</h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong className="text-[#2E7D32]">Ditado verbal direto</strong> de Alá através do anjo Jibril (Gabriel) a Maomé.
                            <span className="text-[#00D9FF]"> Não inspirado — ditado.</span> O texto árabe é
                            <strong> perfeito e inalterável</strong>; traduções são apenas "interpretações".
                        </p>
                    </motion.div>

                    {/* Cosmovisão */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-[#1E3A5F]"
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">🌍 Cosmovisão</h3>
                        <ul className="text-[#E8D5B7] text-lg space-y-3">
                            <li>• Monoteísmo estrito (<em>tawhid</em>)</li>
                            <li>• Alá é absolutamente transcendente, não "Pai"</li>
                            <li>• Jesus foi profeta, <strong className="text-red-400">não divino</strong></li>
                            <li>• Maomé é o "selo dos profetas" — revelação final</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Textos e período */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 bg-gradient-to-r from-[#2E7D32]/10 to-transparent p-6 rounded-2xl border border-[#2E7D32]/20"
                >
                    <h3 className="text-lg font-bold text-[#2E7D32] mb-3">📚 Texto Principal</h3>
                    <p className="text-[#E8D5B7]">
                        <strong>Alcorão</strong> — revelado entre 610-632 d.C., compilado após morte de Maomé.
                        Recitações poéticas, leis, exortações.
                        <span className="text-white/50"> Não segue ordem cronológica.</span>
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
