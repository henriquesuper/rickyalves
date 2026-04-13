'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Re-export shared components and constants from Aula 1
export {
  colors,
  ToastReaction,
  ToastContainer,
  SectionTransition,
  WarmCard,
  reactionTypes,
  noteCategories,
  journeyLessons,
} from '../../aula-1/sections/shared';

import { colors } from '../../aula-1/sections/shared';

// Client-only FloatingParticles to avoid hydration mismatch from Math.random()
export function FloatingParticles({ count = 12 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
      }))
    );
  }, [count]);

  if (particles.length === 0) return null;

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

// ========================================
// DADOS DAS SEÇÕES — AULA 3
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
    title: 'Aula 3',
    subtitle: 'Fé e Obras — Paulo e Tiago São Amigos',
    quote: 'Se é tudo presente, então eu não preciso fazer nada?',
    guideQuestions: [],
    duration: '5 min',
  },
  {
    id: 2,
    title: 'O Elefante na Sala',
    subtitle: null,
    guideQuestions: [
      '"Mateus, antes de começar, quero voltar numa coisa que você mencionou — o que o pastor da sua igreja pregou, sobre quem não ajuda estar condenado."',
      '"Quando você ouviu isso, o que você sentiu?"',
      'Deixa ele falar. Valide: frustração ("de novo isso"), dúvida ("será que ele tem razão?"), ou confusão ("mas você me disse que é pela graça").',
      '"Faz sentido você se sentir assim. Porque o que ele disse e o que eu te mostrei parecem ser mensagens opostas."',
      '"Hoje a gente vai resolver isso. Vamos ver o que a Bíblia diz sobre fé e obras — porque se a Bíblia se contradiz, a gente tem um problema."',
      '⚠️ Não ataque o pastor. Diga "vamos ver o que a Bíblia diz" e deixe o texto fazer o trabalho.',
    ],
    duration: '10 min',
  },
  {
    id: 3,
    title: 'Paulo',
    subtitle: 'Efésios 2:8-10',
    guideQuestions: [
      'Ler Efésios 2:8-10 em voz alta, devagar. Pausar.',
      '"O que Paulo está dizendo aqui? Quem faz a parte pesada da salvação?"',
      'Resposta buscada: Deus. A graça é dele. A fé é dom dele. Não vem de nós.',
      'Agora ler v10 separado: "criados em Cristo Jesus para boas obras."',
      '"Espera. V9: não de obras. V10: criados para boas obras. Paulo se contradiz em dois versículos?"',
      'V9 responde: "como eu sou salvo?" → não por obras. V10 responde: "pra quê eu fui salvo?" → para boas obras.',
      '🌳 ANALOGIA DA MACIEIRA: "Ela não se torna macieira por dar maçãs. Ela dá maçãs porque já é macieira."',
      'Volta pra essa analogia quantas vezes precisar ao longo da aula.',
    ],
    duration: '10 min',
  },
  {
    id: 4,
    title: 'Tiago',
    subtitle: 'Tiago 2:14-17, 26',
    guideQuestions: [
      'Ler Tiago 2:14-17 e 2:26 em voz alta.',
      '"Agora parece que Tiago está dizendo o oposto de Paulo. Paulo diz \'não de obras.\' Tiago diz \'fé sem obras é morta.\' Quem tá certo?"',
      '⭐ Momento pedagógico mais importante. Não dê a resposta rápido.',
      'Deixa o Mateus pensar. Se precisar, ajude:',
      '"Pergunta 1: O que te salva? Pergunta 2: Como se sabe que sua fé é real?"',
      '"Paulo responde Pergunta 1: Fé, não obras. Tiago responde Pergunta 2: Pela fé que produz obras."',
      '"Eles não estão se contradizendo — estão respondendo perguntas diferentes."',
      '"Paulo diz: Você não precisa produzir fruto para ser plantado. Tiago diz: Se foi plantado de verdade, vai produzir fruto."',
      'Juntos protegem o evangelho contra o legalismo E contra a acomodação.',
    ],
    duration: '10 min',
  },
  {
    id: 5,
    title: 'A Síntese',
    subtitle: null,
    guideQuestions: [
      'Conectar com o sermão do pastor: "Onde esse sermão se encaixa?"',
      'O pastor pegou a linguagem de Tiago (obras importam) mas tirou a fundação de Paulo (graça primeiro).',
      '"O pastor não está errado em dizer que servir importa. Mas tem diferença enorme entre \'sirva porque foi amado\' e \'sirva ou será condenado\'."',
      '"A primeira produz gratidão. A segunda produz medo. Medo nunca foi motor de fé saudável."',
      'Conectar com o louvor: "Você saiu não porque sua fé morreu — saiu porque o ambiente envenenou o fruto."',
      '⚠️ Honrar a decisão dele de sair sem romantizá-la. Abrir espaço: "Como eu sirvo de um jeito saudável?"',
    ],
    duration: '10 min',
  },
  {
    id: 6,
    title: 'O Teste da Motivação',
    subtitle: null,
    guideQuestions: [
      'Três motivações possíveis para qualquer ato religioso:',
      '1. Medo: "Se eu não fizer, serei punido." → Servidão.',
      '2. Troca: "Se eu fizer, serei abençoado." → Comércio.',
      '3. Amor: "Eu faço porque fui amado primeiro." → Adoração.',
      'O mesmo ato pode vir de qualquer motivação. Deus olha o coração, não o ato.',
      '👨‍👧 PATERNIDADE: "Imagina a Isis: \'Papai, lavei a louça pra você não ficar bravo\' vs. \'Papai, lavei porque eu te amo.\' Qual te toca mais?"',
      'Sobre "mesmo nível de santidade": "Santidade não é régua pra medir os outros — é a direção em que a graça te leva."',
      '"O problema não é estar atrás ou na frente — é não estar andando."',
      '⚠️ Se ele perguntar sobre Fase 2: "Sabendo o que você sabe agora — que obras são fruto — quando a gente falar sobre sábado, o que muda?"',
    ],
    duration: '10 min',
  },
  {
    id: 7,
    title: 'A macieira dá maçãs porque já é macieira.',
    subtitle: 'Semana que vem: A Lei Que Liberta — Moral vs. Cerimonial.',
    guideQuestions: [],
    duration: '5 min',
  },
];

// ========================================
// CARDS INTERATIVOS — AULA 3
// ========================================
export const presetCards = [
  {
    id: 'checkin-obras',
    label: 'Check-in Obras',
    type: 'scale',
    content: 'Quando você pensa em "obras" na vida cristã, o que sente?',
    scaleLabels: { min: 'Pressão / Obrigação', max: 'Alegria / Gratidão' },
  },
  {
    id: 'paulo-tiago',
    label: 'Paulo vs Tiago',
    type: 'scale',
    content: 'Depois de ler Paulo e Tiago, quão claro ficou que eles não se contradizem?',
    scaleLabels: { min: 'Ainda confuso', max: 'Totalmente claro' },
  },
  {
    id: 'motivacao',
    label: 'Motivação',
    type: 'scale',
    content: 'Hoje, qual motivação mais dirige sua vida espiritual?',
    scaleLabels: { min: 'Medo — se não fizer, serei punido', max: 'Amor — faço porque fui amado' },
  },
  {
    id: 'macieira',
    label: 'A Macieira',
    type: 'reflection',
    content: 'Complete: "Se minha fé fosse uma árvore, os frutos que eu vejo na minha vida são..."',
  },
];

// ========================================
// BREATHING GRADIENT — 8 SEÇÕES
// ========================================
export function BreathingGradient({ section = 0 }) {
  const gradients = [
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(196,122,90,0.06) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 40% 50%, rgba(44,62,107,0.08) 0%, ${colors.offWhite} 65%)`,
    `radial-gradient(ellipse at 55% 45%, rgba(122,139,92,0.08) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 40%, rgba(212,168,83,0.12) 0%, ${colors.offWhite} 65%)`,
    `radial-gradient(ellipse at 50% 50%, rgba(196,122,90,0.06) 0%, rgba(212,168,83,0.08) 50%, ${colors.offWhite} 75%)`,
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

// ========================================
// VERSE DISPLAY — COMPONENTE DE VERSÍCULO
// ========================================
export function VerseDisplay({ title, accentColor, verses = [], emphasis }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold"
        style={{ fontFamily: 'var(--font-playfair)', color: colors.charcoal }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 mb-10 h-px w-16"
        style={{ background: accentColor }}
      />

      {verses.map((verse, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.5, duration: 0.8 }}
          className={`max-w-2xl ${i > 0 ? 'mt-8' : ''}`}
        >
          <blockquote
            className="text-lg md:text-xl leading-relaxed italic"
            style={{
              fontFamily: 'var(--font-playfair)',
              color: colors.graphite,
              borderLeft: `3px solid ${accentColor}`,
              paddingLeft: '1.25rem',
              textAlign: 'left',
            }}
          >
            {emphasis
              ? renderWithEmphasis(verse.text, emphasis)
              : `\u201C${verse.text}\u201D`}
          </blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.5, duration: 0.6 }}
            className="mt-2 text-sm text-right"
            style={{ color: colors.graphiteLight }}
          >
            — {verse.reference}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}

function renderWithEmphasis(text, emphasis) {
  const idx = text.indexOf(emphasis);
  if (idx === -1) return `\u201C${text}\u201D`;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + emphasis.length);
  const after = text.slice(idx + emphasis.length);

  return (
    <>
      &ldquo;{before}
      <span style={{ color: colors.gold, fontWeight: 700, fontStyle: 'normal' }}>
        {match}
      </span>
      {after}&rdquo;
    </>
  );
}
