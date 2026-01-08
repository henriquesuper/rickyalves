import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

const vedas = traditions.find(t => t.id === 'vedas');

export default function Slide05_Vedas() {
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
                    <span className="text-7xl">{vedas.icon}</span>
                    <h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-4"
                        style={{ color: vedas.color }}
                    >
                        {vedas.name}
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border-l-4"
                        style={{ borderColor: vedas.color }}
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">📜 Alegação</h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            Conhecimento eterno (<em>apaurusheya</em> — "não de origem humana").
                            Os Vedas não foram escritos; foram <strong className="text-[#00D9FF]">"ouvidos"</strong> (<em>shruti</em>)
                            pelos sábios antigos. Existem eternamente, sem autor.
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
                            <li>• Realidade última (<em>Brahman</em>) é <strong>impessoal</strong></li>
                            <li>• Mundo material é <em>maya</em> (ilusão)</li>
                            <li>• Almas individuais são parte do todo cósmico</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Textos e período */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 bg-gradient-to-r from-[#FF9500]/10 to-transparent p-6 rounded-2xl border border-[#FF9500]/20"
                >
                    <h3 className="text-lg font-bold text-[#FF9500] mb-3">📚 Textos Principais</h3>
                    <p className="text-[#E8D5B7]">
                        <strong>Rigveda, Samaveda, Yajurveda, Atharvaveda</strong> — compostos entre 1500-500 a.C.,
                        tradição oral muito anterior. Hinos, rituais e especulações filosóficas.
                        <span className="text-white/50"> Não é narrativa histórica.</span>
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
