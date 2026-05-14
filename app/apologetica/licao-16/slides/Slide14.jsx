'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, colors, fonts } from './shared';

// Mapa estilizado — Babilônia (direita) → Jerusalém (esquerda)
// Três arcos animados representando as 3 invasões (605, 597, 586)

const cities = [
    { id: 'jerusalem', label: 'Jerusalém',   x: 180, y: 230, anchor: 'end' },
    { id: 'babylon',   label: 'Babilônia',   x: 640, y: 170, anchor: 'start' },
];

// Cada arco vai de Babilônia (640,170) a Jerusalém (180,230), com Y de controle variando
const arcs = [
    { year: 605, controlY: 60,  delay: 1.4 },
    { year: 597, controlY: 95,  delay: 2.6 },
    { year: 586, controlY: 130, delay: 3.8 },
];

function arcPath(controlY) {
    const x1 = 640, y1 = 170;
    const x2 = 180, y2 = 230;
    const cx = (x1 + x2) / 2;
    const cy = controlY;
    return `M ${x1} ${y1} Q ${cx} ${cy}, ${x2} ${y2}`;
}

export function Slide14({ slideIndex = 13 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-6xl mx-auto px-8 py-10">
                <div className="text-center mb-6">
                    <SectionLabel align="center" delay={0.2}>
                        Três invasões em dezenove anos
                    </SectionLabel>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.0 }}
                    className="mx-auto"
                    style={{ maxWidth: '820px' }}
                >
                    <svg viewBox="0 0 820 320" width="100%" height="auto" style={{ display: 'block' }}>
                        {/* Fundo pergaminho sutil */}
                        <defs>
                            <linearGradient id="parchBg" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={colors.parchmentDeep} stopOpacity="0.55" />
                                <stop offset="100%" stopColor={colors.parchment} stopOpacity="0.2" />
                            </linearGradient>
                        </defs>

                        <rect x="20" y="20" width="780" height="280" fill="url(#parchBg)" stroke={colors.inkFaint} strokeWidth="0.6" />

                        {/* Contorno simplificado do Crescente Fértil (linha estilizada) */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.55 }}
                            transition={{ delay: 0.8, duration: 1.5 }}
                            d="M 140 250 Q 240 200 320 215 Q 420 230 520 195 Q 600 170 700 195"
                            fill="none"
                            stroke={colors.inkSoft}
                            strokeWidth="0.8"
                            strokeDasharray="3 4"
                        />

                        {/* Cidades — pontos */}
                        {cities.map((c, i) => (
                            <motion.g
                                key={c.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0 + i * 0.3, duration: 0.7 }}
                            >
                                <circle cx={c.x} cy={c.y} r="5" fill={colors.wine} />
                                <circle cx={c.x} cy={c.y} r="10" fill="none" stroke={colors.wine} strokeWidth="0.7" opacity="0.6" />
                                <text
                                    x={c.anchor === 'end' ? c.x - 14 : c.x + 14}
                                    y={c.y + 5}
                                    fill={colors.inkDeep}
                                    fontFamily="Georgia, serif"
                                    fontStyle="italic"
                                    fontSize="16"
                                    textAnchor={c.anchor}
                                >
                                    {c.label}
                                </text>
                            </motion.g>
                        ))}

                        {/* Arcos */}
                        {arcs.map((a) => (
                            <g key={a.year}>
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.85 }}
                                    transition={{ delay: a.delay, duration: 1.4, ease: 'easeInOut' }}
                                    d={arcPath(a.controlY)}
                                    fill="none"
                                    stroke={colors.lapis}
                                    strokeWidth="1.6"
                                />
                                <motion.text
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: a.delay + 1.2, duration: 0.6 }}
                                    x={(640 + 180) / 2}
                                    y={a.controlY + 4}
                                    fill={colors.lapis}
                                    fontFamily="Courier New, monospace"
                                    fontSize="13"
                                    textAnchor="middle"
                                    fontWeight="700"
                                >
                                    {a.year} a.C.
                                </motion.text>
                            </g>
                        ))}
                    </svg>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    transition={{ delay: 5.4, duration: 0.9 }}
                    className="mt-6 text-center text-sm md:text-base italic"
                    style={{
                        color: colors.inkSoft,
                        fontFamily: fonts.body,
                        letterSpacing: '0.02em',
                    }}
                >
                    De Babilônia a Jerusalém — três marchas, dezenove anos.
                </motion.p>
            </div>
        </ParchmentWrapper>
    );
}
