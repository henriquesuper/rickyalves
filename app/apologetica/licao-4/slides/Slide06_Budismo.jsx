import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

const buddhism = traditions.find(t => t.id === 'buddhism');

export default function Slide06_Budismo() {
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
                    <span className="text-7xl">{buddhism.icon}</span>
                    <h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-4"
                        style={{ color: buddhism.color }}
                    >
                        {buddhism.name}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border-l-4"
                        style={{ borderColor: buddhism.color }}
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">📜 Alegação</h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong className="text-[#FFD700]">Sabedoria humana iluminada</strong>, não revelação divina.
                            Buda não alegou falar por Deus — alegou ter <strong className="text-[#00D9FF]">descoberto a verdade</strong> através da meditação.
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
                            <li>• Sofrimento (<em>dukkha</em>) vem do desejo/apego</li>
                            <li>• Solução: extinguir o desejo</li>
                            <li>• <strong className="text-red-400">Não há Deus criador pessoal</strong></li>
                            <li>• A questão de Deus é considerada irrelevante</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Textos e período */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-transparent p-6 rounded-2xl border border-[#FFD700]/20"
                >
                    <h3 className="text-lg font-bold text-[#FFD700] mb-3">📚 Textos Principais</h3>
                    <p className="text-[#E8D5B7]">
                        <strong>Tipitaka (Cânon Páli), Sutras Mahayana, textos tibetanos</strong> —
                        compilados <span className="text-orange-400 font-bold">séculos após Buda</span> (c. 563-483 a.C.).
                        Diferentes escolas têm cânones diferentes.
                    </p>
                </motion.div>

                {/* Nota importante */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-center"
                >
                    <p className="text-white/50 text-sm italic">
                        ⚠️ Diferente das outras tradições: não alega origem divina
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
