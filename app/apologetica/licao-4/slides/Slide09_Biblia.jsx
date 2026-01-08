import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions } from './shared';

const bible = traditions.find(t => t.id === 'bible');

export default function Slide09_Biblia() {
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
                    <span className="text-7xl">{bible.icon}</span>
                    <h2
                        className="font-['Cinzel'] text-4xl md:text-5xl mt-4"
                        style={{ color: bible.color }}
                    >
                        Bíblia
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Alegação */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black/40 backdrop-blur-xl p-6 rounded-2xl border-l-4"
                        style={{ borderColor: bible.color }}
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">📜 Alegação</h3>
                        <p className="text-[#E8D5B7] text-lg leading-relaxed">
                            <strong className="text-[#00D9FF]">Inspiração através de autores humanos</strong>.
                            Deus não ditou (exceto casos específicos como os Dez Mandamentos) —
                            Ele inspirou pessoas que escreveram em seus próprios <span className="text-[#C9A227]">estilos, contextos e linguagens</span>.
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
                            <li>• Deus <strong className="text-[#00D9FF]">pessoal</strong>, criador</li>
                            <li>• Se relaciona com a humanidade</li>
                            <li>• Problema humano: pecado/rebelião</li>
                            <li>• Solução: <strong className="text-green-400">graça/redenção</strong>, culminando em Jesus</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Textos e período */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 bg-gradient-to-r from-[#00D9FF]/10 to-transparent p-6 rounded-2xl border border-[#00D9FF]/20"
                >
                    <h3 className="text-lg font-bold text-[#00D9FF] mb-3">📚 Textos</h3>
                    <p className="text-[#E8D5B7]">
                        <strong>66 livros</strong> (39 AT + 27 NT), escritos ao longo de <span className="text-[#C9A227] font-bold">~1500 anos</span>,
                        por <span className="text-[#C9A227] font-bold">~40 autores</span>.
                        Diversos gêneros: narrativa histórica, poesia, profecia, lei, cartas, apocalíptico.
                    </p>
                </motion.div>

                {/* Destaque */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-center"
                >
                    <p className="text-[#00D9FF] text-lg font-medium">
                        ✨ Diversos autores, longo período, múltiplos gêneros — mas uma história unificada
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
