'use client';
import { motion } from 'framer-motion';
import { ParchmentWrapper, SectionLabel, BiblicalQuote, colors, fonts } from './shared';

export function Slide65({ slideIndex = 64 }) {
    return (
        <ParchmentWrapper>
            <div className="w-full max-w-5xl mx-auto px-8 py-10 flex flex-col items-center">
                <SectionLabel align="center" delay={0.2} color={colors.lapisSoft}>
                    A Deslocalização da Adoração
                </SectionLabel>

                <div className="my-6 w-full">
                    <BiblicalQuote 
                        reference="João 4.21, 23–24"
                        lines={[
                            "Mulher, crê-me que a hora vem em que nem neste monte nem em Jerusalém adorareis o Pai...",
                            "Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade."
                        ]}
                        tone="lapis"
                        align="center"
                        size="xs"
                        delay={0.5}
                    />
                </div>

                <div className="w-full max-w-2xl mx-auto my-8 relative">
                    <svg viewBox="0 0 500 160" className="w-full h-auto" fill="none" strokeWidth="1.5">
                        {/* Gerizim (Left Mountain) */}
                        <path 
                            d="M 20 150 L 120 60 L 220 150" 
                            stroke={colors.inkSoft} 
                            strokeWidth="1.5" 
                            opacity="0.75" 
                        />
                        <text x="120" y="50" textAnchor="middle" fontSize="10" fontFamily={fonts.mono} fill={colors.inkSoft} letterSpacing="0.05em">MTE. GERIZIM</text>
                        <text x="120" y="38" textAnchor="middle" fontSize="8" fontFamily={fonts.body} fontStyle="italic" fill={colors.inkMuted}>(Samaria)</text>

                        {/* Sião / Jerusalém (Right Mountain) */}
                        <path 
                            d="M 280 150 L 380 70 L 480 150" 
                            stroke={colors.inkSoft} 
                            strokeWidth="1.5" 
                            opacity="0.75" 
                        />
                        <text x="380" y="60" textAnchor="middle" fontSize="10" fontFamily={fonts.mono} fill={colors.inkSoft} letterSpacing="0.05em">MTE. SIÃO</text>
                        <text x="380" y="48" textAnchor="middle" fontSize="8" fontFamily={fonts.body} fontStyle="italic" fill={colors.inkMuted}>(Jerusalém)</text>

                        {/* Ground line */}
                        <line x1="10" y1="150" x2="490" y2="150" stroke={colors.inkSoft} strokeWidth="0.8" opacity="0.4" strokeDasharray="3 3" />

                        {/* Connecting Golden Arc / Response */}
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.5, duration: 1.8, ease: "easeInOut" }}
                            d="M 120 60 Q 250 -10 380 70" 
                            stroke={colors.gold} 
                            strokeWidth="2.5" 
                            fill="none"
                        />
                        
                        {/* Glow for Arc */}
                        <motion.path 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 1.8, duration: 1.0 }}
                            d="M 120 60 Q 250 -10 380 70" 
                            stroke={colors.gold} 
                            strokeWidth="6" 
                            fill="none"
                            style={{ filter: "blur(2px)" }}
                        />
                    </svg>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.6, duration: 0.8 }}
                        className="text-center mt-6 max-w-md mx-auto"
                    >
                        <p className="text-base md:text-lg italic leading-relaxed" style={{ color: colors.gold, fontFamily: fonts.display, fontWeight: 600 }}>
                            &quot;Deus é Espírito; e importa que os que o adoram o adorem em espírito e em verdade.&quot;
                        </p>
                        <p className="text-xs mt-3" style={{ color: colors.inkSoft, fontFamily: fonts.body }}>
                            Jesus dissolve o debate geográfico. A adoração verdadeira não depende de prédios, montes ou instituições históricas.
                        </p>
                    </motion.div>
                </div>
            </div>
        </ParchmentWrapper>
    );
}
