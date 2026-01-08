import { motion } from 'framer-motion';
import { SlideWrapper, colors, traditions, TraditionCard } from './shared';

export default function Slide04_Panorama() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-8 z-10"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{ color: colors.goldAncient }}
                >
                    Panorama das Tradições
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-[#E8D5B7]/70 mb-12 text-lg"
                >
                    5 grandes alegações de revelação divina
                </motion.p>

                <div className="grid md:grid-cols-5 gap-4">
                    {traditions.map((tradition, index) => (
                        <TraditionCard
                            key={tradition.id}
                            tradition={tradition}
                            delay={0.3 + index * 0.15}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-10 text-center"
                >
                    <p className="text-lg text-[#E8D5B7]/60">
                        Vamos examinar cada uma em detalhes...
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
