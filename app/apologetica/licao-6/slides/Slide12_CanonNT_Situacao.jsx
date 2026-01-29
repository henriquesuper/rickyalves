'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, ParchmentCard, colors } from './shared';

// Mapa do Mediterrâneo simplificado
function MediterraneanMap() {
    const cities = [
        { name: "Roma", x: 30, y: 35, delay: 0.5 },
        { name: "Corinto", x: 50, y: 45, delay: 0.6 },
        { name: "Éfeso", x: 65, y: 40, delay: 0.7 },
        { name: "Antioquia", x: 75, y: 45, delay: 0.8 },
        { name: "Jerusalém", x: 80, y: 60, delay: 0.9 },
    ];

    return (
        <div className="relative w-full h-48 mb-8 rounded-xl overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${colors.lapis}40, ${colors.libraryWood}60)`,
                border: `1px solid ${colors.goldLeaf}30`
            }}
        >
            {/* Texto de fundo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-6xl font-serif" style={{ color: colors.parchmentLight }}>
                    MARE NOSTRUM
                </span>
            </div>

            {/* Cidades */}
            {cities.map((city, i) => (
                <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: city.delay, type: "spring" }}
                    className="absolute"
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                    <div className="relative">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{
                                background: colors.goldLeaf,
                                boxShadow: `0 0 10px ${colors.goldLeaf}`
                            }}
                        />
                        <span
                            className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap font-medium"
                            style={{ color: colors.parchmentLight }}
                        >
                            {city.name}
                        </span>
                    </div>
                </motion.div>
            ))}

            {/* Linhas conectando (cartas viajando) */}
            <motion.svg
                className="absolute inset-0 w-full h-full"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 2 }}
            >
                <motion.path
                    d="M 30% 35% Q 50% 30% 65% 40%"
                    fill="none"
                    stroke={colors.goldLeaf}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                />
            </motion.svg>
        </div>
    );
}

export default function Slide12_CanonNT_Situacao() {
    return (
        <SlideWrapper>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-8 z-10"
            >
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Cinzel'] text-4xl md:text-5xl text-center mb-4"
                    style={{
                        color: colors.goldLeaf,
                        textShadow: `0 0 30px ${colors.goldLeaf}30`
                    }}
                >
                    O Cânon do Novo Testamento
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                    style={{ color: colors.parchmentMid }}
                >
                    Como as cartas apostólicas se tornaram Escritura
                </motion.p>

                <MediterraneanMap />

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Paulo não pensava... */}
                    <ParchmentCard delay={0.3}>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>✍️</span> Paulo Não Pensava...
                        </h3>
                        <p style={{ color: colors.parchmentLight }}>
                            Quando Paulo escreveu suas cartas (anos 50-60 d.C.),
                            ele não estava pensando:
                            <em className="block mt-2" style={{ color: colors.parchmentMid }}>
                                "Estou escrevendo Escritura canônica que um dia será
                                encadernada com Isaías"
                            </em>
                        </p>
                        <p className="mt-3 text-sm" style={{ color: `${colors.parchmentLight}90` }}>
                            Ele escrevia cartas pastorais para igrejas específicas
                            com problemas específicos.
                        </p>
                    </ParchmentCard>

                    {/* Mas já eram reconhecidas */}
                    <ParchmentCard delay={0.5} highlight>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: colors.goldLeaf }}>
                            <span>📖</span> Mas Já Eram Reconhecidas!
                        </h3>
                        <div style={{ color: colors.parchmentLight }}>
                            <p className="mb-3">
                                <strong style={{ color: colors.vermillion }}>2 Pedro 3:15-16</strong> — Pedro chama
                                as cartas de Paulo de <strong>"Escrituras"</strong>:
                            </p>
                            <p className="text-sm italic p-3 rounded" style={{ background: `${colors.sepia}20` }}>
                                "...como também o nosso amado irmão Paulo vos escreveu...
                                nas quais há pontos difíceis... que os indoutos torcem,
                                como fazem também com as <strong>outras Escrituras</strong>."
                            </p>
                        </div>
                    </ParchmentCard>
                </div>

                {/* Citação de 1 Timóteo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8"
                >
                    <ParchmentCard>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">💡</span>
                            <div style={{ color: colors.parchmentLight }}>
                                <p>
                                    <strong style={{ color: colors.goldLeaf }}>1 Timóteo 5:18</strong> — Paulo cita:
                                    "A Escritura diz: <em>Não ligarás a boca ao boi</em> (Deuteronômio) e
                                    <em> Digno é o obreiro</em> (<strong style={{ color: colors.vermillion }}>Lucas 10:7</strong>)."
                                </p>
                                <p className="text-sm mt-2" style={{ color: colors.parchmentMid }}>
                                    Paulo cita Lucas como Escritura ao lado de Deuteronômio!
                                </p>
                            </div>
                        </div>
                    </ParchmentCard>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}
