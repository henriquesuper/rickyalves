'use client';
import { motion } from 'framer-motion';
import { LabWrapper, colors } from './shared';

const types = [
    {
        type: 'Cordeiro Pascal',
        at: 'Êxodo 12 — Cordeiro sem defeito, sangue na porta',
        nt: '1 Coríntios 5:7 — "Cristo, nosso cordeiro pascal, foi sacrificado"',
        icon: '🐑',
    },
    {
        type: 'Serpente de Bronze',
        at: 'Números 21:8 — Olhar para a serpente levantada = cura',
        nt: 'João 3:14 — "Assim como Moisés levantou a serpente... o Filho do Homem será levantado"',
        icon: '🐍',
    },
    {
        type: 'Jonas',
        at: 'Jonas 1:17 — 3 dias no ventre do grande peixe',
        nt: 'Mateus 12:40 — "Assim como Jonas... o Filho do Homem ficará três dias no coração da terra"',
        icon: '🐋',
    },
];

export function Slide47() {
    return (
        <LabWrapper stratum="advanced-optics">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-center"
                    style={{ color: colors.textLight, fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                    Tipologia
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-center mb-6 italic"
                    style={{ color: colors.textMuted }}
                >
                    Pessoas, eventos ou instituições do AT que prefiguram realidades do NT.
                </motion.p>

                <div className="space-y-4">
                    {types.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.2 }}
                            className="rounded-xl overflow-hidden"
                            style={{ background: colors.bgSurface, border: `1px solid ${colors.lensPurple}15` }}
                        >
                            <div className="px-4 py-2 flex items-center gap-2" style={{ background: `${colors.lensPurple}10`, borderBottom: `1px solid ${colors.lensPurple}10` }}>
                                <span className="text-lg">{t.icon}</span>
                                <p className="text-sm font-bold" style={{ color: colors.lensPurple }}>{t.type}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                <div className="p-3" style={{ borderRight: `1px solid ${colors.lensPurple}08` }}>
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: colors.lensAmber }}>Sombra (AT)</p>
                                    <p className="text-sm" style={{ color: colors.textMedium }}>{t.at}</p>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: colors.lensTeal }}>Substância (NT)</p>
                                    <p className="text-sm" style={{ color: colors.textMedium }}>{t.nt}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LabWrapper>
    );
}
