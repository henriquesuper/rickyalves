import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { SlideWrapper, colors, traditions } from './shared';

// Dynamically import 3D component
const TruthScale3D = dynamic(() => import('../../../components/TruthScale3D'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[400px] flex items-center justify-center">
            <div className="text-[#C9A227] animate-pulse">Carregando Balança 3D...</div>
        </div>
    )
});

export default function Slide15_Sintese() {
    // Calculate average scores for each tradition
    const getAverage = (tradition) => {
        const scores = tradition.scores;
        const values = Object.values(scores);
        return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
    };

    const bible = traditions.find(t => t.id === 'bible');
    const others = traditions.filter(t => t.id !== 'bible');
    const othersAverage = Math.round(
        others.reduce((sum, t) => sum + getAverage(t), 0) / others.length
    );

    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto px-8 z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-8"
                    style={{ color: colors.goldAncient }}
                >
                    Síntese Visual
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* 3D Scale */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <TruthScale3D
                            leftWeight={othersAverage}
                            rightWeight={getAverage(bible)}
                            leftLabel="Outras Tradições"
                            rightLabel="Bíblia"
                            height="400px"
                        />
                    </motion.div>

                    {/* Score summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-[#C9A227] mb-4">Resumo das Pontuações</h3>

                        {traditions.map((tradition, index) => {
                            const avg = getAverage(tradition);
                            return (
                                <motion.div
                                    key={tradition.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <span className="text-2xl">{tradition.icon}</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm font-medium" style={{ color: tradition.color }}>
                                                {tradition.name}
                                            </span>
                                            <span className="text-sm font-bold text-white">{avg}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ background: tradition.color }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${avg}%` }}
                                                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 text-center"
                >
                    <p className="text-lg text-[#E8D5B7]/80">
                        Isso <strong className="text-[#00D9FF]">não "prova" que a Bíblia é verdade</strong> —
                        mas mostra que ela <strong className="text-[#C9A227]">merece investigação séria</strong>.
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
