import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

const mormon = traditions.find(t => t.id === 'mormon');

export default function Slide08_Mormon() {
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
                    <span className="text-7xl">{mormon.icon}</span>
                    <h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-4"
                        style={{ color: mormon.color }}
                    >
                        Livro de Mórmon
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border-l-4"
                        style={{ borderColor: mormon.color }}
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">📜 Alegação</h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong className="text-[#1565C0]">Tradução de placas de ouro antigas</strong> por Joseph Smith
                            através de instrumentos divinos (Urim e Tumim).
                            Registro de povos hebreus que <span className="text-[#00D9FF]">migraram para as Américas</span>.
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
                            <li>• <strong>Restauracionismo</strong> — cristianismo original foi corrompido</li>
                            <li>• Restaurado por Joseph Smith</li>
                            <li>• Deus tem <span className="text-orange-400">corpo físico</span></li>
                            <li>• Potencial humano de tornar-se como Deus</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Textos e período */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 bg-gradient-to-r from-[#1565C0]/10 to-transparent p-6 rounded-2xl border border-[#1565C0]/20"
                >
                    <h3 className="text-lg font-bold text-[#1565C0] mb-3">📚 Textos Principais</h3>
                    <p className="text-[#E8D5B7]">
                        <strong>Livro de Mórmon</strong> (publicado 1830), também Doutrina e Convênios, Pérola de Grande Valor.
                        Narrativa histórica de civilizações nas Américas
                        <span className="text-white/50"> (c. 2200 a.C. - 421 d.C.)</span>
                    </p>
                </motion.div>

                {/* Nota importante */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-center"
                >
                    <p className="text-orange-400 text-sm font-medium">
                        ⚠️ Alega civilizações massivas nas Américas — veremos as evidências
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
