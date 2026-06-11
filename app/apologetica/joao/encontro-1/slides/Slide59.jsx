'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, ProseBlock, colors, fonts } from './shared';

export function Slide59({ slideIndex = 58 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex-1 flex flex-col justify-center">
                    <SectionLabel align="left" delay={0.2} color={colors.lapisSoft}>
                        Geografia e Teologia
                    </SectionLabel>

                    <div className="mt-4 mb-6">
                        <BiblicalQuote 
                            reference="João 4.3–4"
                            text="Deixou a Judeia e retirou-se outra vez para a Galileia. E era-lhe necessário passar por Samaria."
                            tone="lapis"
                            align="left"
                            size="md"
                            delay={0.6}
                        />
                    </div>

                    <ProseBlock 
                        delay={1.5}
                        align="left"
                        lines={[
                            "Geograficamente, os judeus frequentemente faziam um desvio pelo vale do Jordão (Pereia) para evitar contato com Samaria.",
                            "",
                            "O edei ('era necessário') em João nunca é um imperativo meramente logístico — é uma necessidade divina de missão (cf. 3.14)."
                        ]}
                        size="sm"
                        color={colors.inkBody}
                    />
                </div>

                <div className="w-full max-w-[280px] shrink-0 flex flex-col items-center justify-center p-6 border border-dashed border-[#8B7355]30 rounded-sm" style={{ background: `${colors.parchmentDeep}44` }}>
                    <p className="text-[10px] uppercase tracking-widest opacity-60 font-mono mb-4" style={{ color: colors.inkMuted }}>
                        Rotas da Época
                    </p>

                    <svg viewBox="0 0 120 220" width="100%" height="auto" className="stroke-current" style={{ color: colors.inkBody }}>
                        {/* Regiões */}
                        <text x="60" y="25" textAnchor="middle" fontSize="10" fontFamily={fonts.mono} fill={colors.lapisSoft} fontWeight="600" letterSpacing="0.1em">GALILEIA</text>
                        <text x="60" y="110" textAnchor="middle" fontSize="10" fontFamily={fonts.mono} fill={colors.gold} fontWeight="600" letterSpacing="0.1em">SAMARIA</text>
                        <text x="60" y="195" textAnchor="middle" fontSize="10" fontFamily={fonts.mono} fill={colors.lapisDeep} fontWeight="600" letterSpacing="0.1em">JUDEIA</text>

                        {/* Nós geográficos */}
                        <circle cx="60" cy="35" r="3" fill={colors.inkDeep} />
                        <circle cx="60" cy="120" r="3" fill={colors.gold} />
                        <circle cx="60" cy="180" r="3" fill={colors.inkDeep} />
                        <text x="70" y="124" fontSize="8" fontFamily={fonts.body} fontStyle="italic" fill={colors.inkSoft}>Sicar</text>

                        {/* Rota 1: Rota Direta (Samaria) */}
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.8, duration: 1.5 }}
                            d="M 60 180 L 60 35"
                            fill="none"
                            stroke={colors.gold}
                            strokeWidth="2"
                        />
                        <text x="42" y="85" fontSize="8" fontFamily={fonts.body} fontStyle="italic" fill={colors.gold} fontWeight="bold">Rota Direta</text>

                        {/* Rota 2: Desvio do Jordão (Evitando Samaria) */}
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 2.8, duration: 2.0 }}
                            d="M 60 180 Q 110 120 60 35"
                            fill="none"
                            stroke={colors.inkSoft}
                            strokeWidth="1.2"
                            strokeDasharray="3 3"
                        />
                        <text x="95" y="85" fontSize="8" fontFamily={fonts.body} fontStyle="italic" fill={colors.inkSoft} textAnchor="middle">Rota de Desvio<tspan x="95" dy="9">(Rio Jordão)</tspan></text>
                    </svg>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
