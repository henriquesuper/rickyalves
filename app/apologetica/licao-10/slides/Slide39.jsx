'use client';
import { motion } from 'framer-motion';
import { SlideWrapper, SuspectCard, colors } from './shared';

export function Slide39() {
    const herodes = [
        { name: 'Herodes, o Grande', role: '37–4 a.C. · Idumeu, meio judeu', argument: 'Reconstruiu o Templo espetacularmente. Odiado. Tentou matar Jesus bebê.', icon: '👑' },
        { name: 'Arquelau', role: 'Judeia e Samaria', argument: 'Governou tão mal que Roma o removeu. Instalaram governadores diretos — como Pôncio Pilatos.', icon: '📉' },
        { name: 'Herodes Antipas', role: 'Galileia e Pereia', argument: 'Decapitou João Batista. Interrogou Jesus. Jesus o chamou de "aquela raposa."', icon: '🦊' },
        { name: 'Filipe', role: 'Territórios nordeste', argument: 'Cesareia de Filipe — onde Pedro confessa que Jesus é o Cristo — leva o nome dele.', icon: '🗺️' },
    ];
    return (
        <SlideWrapper variant="dark">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: colors.warmWhite, fontFamily: "'Playfair Display', Georgia, serif" }}>OS HERODES: NÃO É UM, SÃO VÁRIOS</motion.h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {herodes.map((h, i) => (<SuspectCard key={i} {...h} delay={0.4 + i * 0.15} />))}
                </div>
            </div>
        </SlideWrapper>
    );
}
