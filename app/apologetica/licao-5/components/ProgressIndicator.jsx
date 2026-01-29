'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ProgressIndicator - Indicador de progresso fixo no topo
 * 
 * @param {Object} props
 * @param {Array} props.sections - Array de { id, label } para cada seção
 * @param {string} props.activeSection - ID da seção ativa
 * @param {'dots' | 'line' | 'pills'} props.variant - Estilo visual
 */
export function ProgressIndicator({
    sections = [],
    activeSection = null,
    variant = 'pills',
    className = ''
}) {
    const { scrollYProgress } = useScroll();

    if (variant === 'line') {
        return (
            <div className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
                <motion.div
                    className="h-1 bg-gradient-to-r from-[#C9A227] to-[#E8D5B7]"
                    style={{
                        scaleX: scrollYProgress,
                        transformOrigin: 'left'
                    }}
                />
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${className}`}>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${activeSection === section.id
                                    ? 'w-6 bg-white'
                                    : 'bg-white/30'
                                }
                            `}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // Pills variant (default)
    return (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${className}`}>
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
                <span className="text-white/40 px-1">◂</span>
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            transition-all duration-300 cursor-pointer
                            ${activeSection === section.id
                                ? 'bg-white/20 text-white'
                                : 'text-white/50 hover:text-white/70'
                            }
                        `}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            document.getElementById(section.id)?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        {section.label}
                    </motion.div>
                ))}
                <span className="text-white/40 px-1">▸</span>
            </div>
        </div>
    );
}

/**
 * ScrollToTop - Botão flutuante para voltar ao topo
 */
export function ScrollToTop({ show = true }) {
    if (!show) return null;

    return (
        <motion.button
            className="fixed bottom-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <span className="text-white text-xl">↑</span>
        </motion.button>
    );
}

export default ProgressIndicator;
