'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, colors } from './shared';

export default function Slide21_RoloIsaias() {
    return (
        <SlideWrapper variant="manuscript">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-xs uppercase tracking-[0.3em] mb-4 font-mono"
                    style={{ color: colors.textMuted }}
                >
                    ★★★ Momento Visual 1
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-2"
                    style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    O ROLO DE ISAÍAS DE QUMRAN
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-lg mb-6"
                    style={{ color: colors.textMedium }}
                >
                    Séc. II a.C. — Mar Morto
                </motion.p>

                {/* Scroll image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 1.2 }}
                    className="relative rounded-xl overflow-hidden border mb-6"
                    style={{ borderColor: `${colors.amber}40` }}
                >
                    <img
                        src="/images/licao-9/isaiah-scroll.jpg"
                        alt="Grande Rolo de Isaías de Qumran"
                        className="w-full h-auto"
                        style={{ maxHeight: '350px', objectFit: 'cover' }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to top, ${colors.bgDeep}80 0%, transparent 30%, transparent 70%, ${colors.bgDeep}40 100%)`
                        }}
                    />

                    {/* Annotation arrows */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-4 left-4 right-4 flex justify-between"
                    >
                        <div className="px-3 py-1 rounded-lg text-xs font-bold"
                            style={{ background: `${colors.amber}90`, color: colors.bgDeep }}>
                            ↑ Cap. 39 termina aqui
                        </div>
                        <div className="px-3 py-1 rounded-lg text-xs font-bold"
                            style={{ background: `${colors.mossGreen}90`, color: colors.bgDeep }}>
                            ↑ Cap. 40 começa aqui
                        </div>
                    </motion.div>
                </motion.div>

                {/* Key points */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="text-center space-y-2"
                >
                    {[
                        'Sem quebra de coluna.',
                        'Sem mudança de escriba.',
                    ].map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 + i * 0.3 }}
                            className="text-lg"
                            style={{ color: colors.textLight }}
                        >
                            {line}
                        </motion.p>
                    ))}

                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3 }}
                        className="text-2xl font-bold mt-4"
                        style={{ color: colors.amber, fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Um livro. Um autor.
                    </motion.p>
                </motion.div>

                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 3.5 }}
                    href="https://www.deadseascrolls.org.il"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs mt-4 underline"
                    style={{ color: colors.textMuted }}
                >
                    deadseascrolls.org.il
                </motion.a>
            </div>
        </SlideWrapper>
    );
}
