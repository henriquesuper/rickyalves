'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// ========================================
// PALETA DE CORES — "GRAÇA QUE TRANSFORMA"
// ========================================
export const colors = {
  gold: '#D4A853',
  goldLight: '#E8C87A',
  goldSoft: 'rgba(212, 168, 83, 0.15)',
  blue: '#2C3E6B',
  blueLight: '#3D5291',
  offWhite: '#FAF6F0',
  offWhiteDark: '#F0EAE0',
  charcoal: '#2D2926',
  terracotta: '#C47A5A',
  terracottaLight: '#D99A7E',
  graphite: '#3D3835',
  graphiteLight: '#5A5552',
  olive: '#7A8B5C',
  oliveLight: '#95A87A',
  white: '#FFFFFF',
};

// ========================================
// DADOS DAS SEÇÕES — AULA 1
// ========================================
export const sectionData = [
  {
    id: 0,
    title: 'Graça Que Transforma',
    subtitle: 'Estudo Bíblico — Mateus & Ricky',
    guideQuestions: [],
    duration: null,
  },
  {
    id: 1,
    title: 'Aula 1',
    subtitle: 'Conversa de Escuta',
    quote: 'Antes de falar, ouvir. Antes de ensinar, entender.',
    guideQuestions: [],
    duration: '5-10 min',
  },
  {
    id: 2,
    title: 'Sua História com a Fé',
    subtitle: null,
    guideQuestions: [
      'Me conta um pouco da sua história com a fé. Como era quando você ia na igreja adventista?',
      'Você lembra do que te atraiu na época?',
      'Quando decidiu parar, foi de uma vez ou gradual?',
      'Teve alguma experiência específica que pesou?',
      'A Isabela participava?',
    ],
    duration: '10-15 min',
  },
  {
    id: 3,
    title: 'O Que Deus Espera',
    subtitle: null,
    guideQuestions: [
      'Se você tivesse que resumir em uma frase o que Deus espera de um cristão, o que diria?',
      'E se alguém não conseguir — o que acontece?',
      'Você acha que dá pra "perder" a salvação?',
      'Se Deus te mandasse uma mensagem agora, o que Ele diria?',
    ],
    duration: '10-15 min',
  },
  {
    id: 4,
    title: 'Suas Dúvidas',
    subtitle: null,
    guideQuestions: [
      'Sobre o sábado — o que especificamente te faz achar que era só pros judeus?',
      'E a tatuagem — é dúvida teórica ou prática?',
      'Quando pensa em dízimo, o que vem à mente?',
      'De onde vieram essas dúvidas? Leitura própria, alguém falou, vídeo?',
      'Se eu te mostrasse que o sábado aparece antes de existir judeu — lá em Gênesis — isso mudaria algo?',
    ],
    duration: '10-15 min',
  },
  {
    id: 5,
    title: 'Deus e Você, Hoje',
    subtitle: null,
    guideQuestions: [
      'Hoje, como é sua relação com Deus? Você ora? Lê a Bíblia?',
      'Você acha que Deus está satisfeito com você?',
      'Se a Isabela perguntasse "você é cristão?", o que responderia?',
      'O que te fez topar esse estudo? O que espera tirar disso?',
      'Se a Bíblia pudesse responder UMA pergunta sua — qual seria?',
    ],
    duration: '10 min',
  },
  {
    id: 6,
    title: 'Obrigado por compartilhar.',
    subtitle: 'Semana que vem: A Gente Abre a Bíblia Juntos.',
    guideQuestions: [],
    duration: '5-10 min',
  },
];

// ========================================
// TIPOS DE REAÇÃO
// ========================================
export const reactionTypes = [
  { emoji: '🙏', label: 'Amém', key: 'amen' },
  { emoji: '❤️', label: 'Gostei', key: 'heart' },
  { emoji: '💡', label: 'Insight', key: 'insight' },
  { emoji: '✋', label: 'Quero falar', key: 'hand' },
];

// ========================================
// CARDS INTERATIVOS PRÉ-PROGRAMADOS
// ========================================
export const presetCards = [
  {
    id: 'checkin',
    label: 'Check-in',
    type: 'scale',
    content: 'Neste momento, como você se sente em relação à fé?',
    scaleLabels: { min: 'Distante', max: 'Conectado' },
  },
  {
    id: 'expectativa',
    label: 'Expectativa',
    type: 'reflection',
    content: 'Complete a frase: "Eu espero que esse estudo me ajude a..."',
  },
  {
    id: 'unica-pergunta',
    label: 'A Única Pergunta',
    type: 'reflection',
    content: 'Se a Bíblia pudesse responder UMA pergunta sua, qual seria?',
  },
  {
    id: 'disposicao',
    label: 'Disposição',
    type: 'scale',
    content: 'Se a Bíblia te mostrasse algo diferente do que você pensa hoje, quão aberto você estaria?',
    scaleLabels: { min: 'Já decidi', max: 'Totalmente aberto' },
  },
];

// ========================================
// CATEGORIAS DE NOTAS
// ========================================
export const noteCategories = [
  { key: 'intelectual', icon: '🧠', label: 'Intelectual', color: colors.blue },
  { key: 'emocional', icon: '❤️', label: 'Emocional', color: colors.terracotta },
  { key: 'pratico', icon: '🔧', label: 'Prático', color: colors.olive },
  { key: 'importante', icon: '⭐', label: 'Importante', color: colors.gold },
];

// ========================================
// MAPA DE JORNADA — 13 AULAS
// ========================================
export const journeyLessons = [
  { id: 1, title: 'Conversa de Escuta', phase: 1, phaseLabel: 'A Base' },
  { id: 2, title: 'O Presente: Entendendo a Cruz', phase: 1, phaseLabel: 'A Base' },
  { id: 3, title: 'Fé e Obras: Paulo e Tiago São Amigos', phase: 1, phaseLabel: 'A Base' },
  { id: 4, title: 'A Grande Distinção: Duas Leis', phase: 2, phaseLabel: 'A Lente' },
  { id: 5, title: 'O Que Paulo Realmente Quis Dizer', phase: 2, phaseLabel: 'A Lente' },
  { id: 6, title: 'O Sábado: Gênesis, Não Sinai', phase: 2, phaseLabel: 'A Lente' },
  { id: 7, title: 'O Corpo Como Templo', phase: 2, phaseLabel: 'A Lente' },
  { id: 8, title: 'Dízimo e Mordomia', phase: 2, phaseLabel: 'A Lente' },
  { id: 9, title: 'O Santuário: O GPS da Salvação', phase: 3, phaseLabel: 'A Vida' },
  { id: 10, title: 'A Morte e a Esperança', phase: 3, phaseLabel: 'A Vida' },
  { id: 11, title: 'A Volta de Jesus', phase: 3, phaseLabel: 'A Vida' },
  { id: 12, title: 'Como Estudar a Bíblia', phase: 3, phaseLabel: 'A Vida' },
  { id: 13, title: 'Decisão e Caminho', phase: 3, phaseLabel: 'A Vida' },
];

// ========================================
// COMPONENTES VISUAIS COMPARTILHADOS
// ========================================

// Gradiente que "respira" suavemente — fundo ambiente
export function BreathingGradient({ section = 0 }) {
  // Gradient shifts subtly based on section
  const gradients = [
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 40% 50%, rgba(44,62,107,0.06) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 60% 40%, rgba(44,62,107,0.08) 0%, ${colors.offWhite} 65%)`,
    `radial-gradient(ellipse at 50% 50%, rgba(196,122,90,0.06) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 60%, rgba(45,41,38,0.08) 0%, rgba(250,246,240,0.95) 60%)`,
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
  ];

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ background: gradients[section] || gradients[0] }}
    />
  );
}

// Partículas de luz flutuando
export function FloatingParticles({ count = 12 }) {
  const [particles] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
    }))
  );

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: colors.gold,
            opacity: 0.15,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.1, 0.25, 0.1, 0.2, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// Toast notification para reações
export function ToastReaction({ reaction, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3500);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-lg"
      style={{
        background: colors.white,
        border: `1px solid ${colors.offWhiteDark}`,
        color: colors.graphite,
        fontFamily: 'var(--font-inter)',
        fontSize: '0.875rem',
      }}
    >
      <span className="text-lg">{reaction.content}</span>
      <span>{reaction.from}</span>
    </motion.div>
  );
}

// Container de toasts (canto inferior direito da tela principal)
export function ToastContainer({ reactions }) {
  const [visibleToasts, setVisibleToasts] = useState([]);
  const seenRef = useRef(new Set());

  useEffect(() => {
    if (reactions.length === 0) return;
    const latest = reactions[reactions.length - 1];
    if (latest && !seenRef.current.has(latest.id)) {
      seenRef.current.add(latest.id);
      setVisibleToasts((prev) => [...prev.slice(-3), latest]);
    }
  }, [reactions]);

  const removeToast = (id) => {
    setVisibleToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
      <AnimatePresence>
        {visibleToasts.map((toast) => (
          <ToastReaction
            key={toast.id}
            reaction={toast}
            onDone={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Wrapper de transição entre seções
export function SectionTransition({ children, sectionKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sectionKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Card genérico com estética quente
export function WarmCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl p-5 shadow-sm ${className}`}
      style={{
        background: colors.white,
        border: `1px solid rgba(212, 168, 83, 0.2)`,
      }}
    >
      {children}
    </div>
  );
}
