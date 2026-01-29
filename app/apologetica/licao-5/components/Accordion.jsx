'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Accordion - FAQ expansível elegante
 * 
 * @param {Object} props
 * @param {Array} props.items - Array de { question, answer }
 * @param {boolean} props.allowMultiple - Permitir múltiplos abertos
 */
export function Accordion({
    items,
    allowMultiple = false,
    className = ''
}) {
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (index) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems.includes(index)}
                    onToggle={() => toggleItem(index)}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
}

function AccordionItem({ question, answer, isOpen, onToggle, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });

    return (
        <motion.div
            ref={ref}
            className={`
                rounded-xl overflow-hidden
                transition-all duration-300
                ${isOpen
                    ? 'bg-[#E8DCC8] shadow-lg'
                    : 'bg-[#EDE4D3] hover:bg-[#E8DCC8]'
                }
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            {/* Question Header */}
            <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={onToggle}
            >
                <span className="text-lg font-medium text-[#1A1A1A] pr-4">
                    {question}
                </span>
                <motion.span
                    className="text-xl text-[#666] flex-shrink-0"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ↓
                </motion.span>
            </button>

            {/* Answer Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 pt-0 text-[#444] leading-relaxed">
                            {typeof answer === 'string' ? (
                                <p>{answer}</p>
                            ) : (
                                answer
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/**
 * FAQSection - Seção completa de FAQ com título
 */
export function FAQSection({
    title = "Perguntas Frequentes",
    items,
    className = ''
}) {
    return (
        <div className={className}>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#1A1A1A]">
                {title}
            </h2>
            <Accordion items={items} />
        </div>
    );
}

export default Accordion;
