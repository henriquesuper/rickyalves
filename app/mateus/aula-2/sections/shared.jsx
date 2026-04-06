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
// DADOS DAS SEÇÕES — AULA 2
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
    title: 'Aula 2',
    subtitle: 'O Presente Que Você Não Pediu',
    quote: 'E se tudo que Deus quer... é te dar um presente?',
    guideQuestions: [],
    duration: '5 min',
  },
  {
    id: 2,
    title: 'Reconectando',
    subtitle: null,
    guideQuestions: [
      '"Na última vez a gente conversou bastante, e você falou algo que ficou na minha cabeça a semana inteira..."',
      'Relembrar o que ele disse sobre Deus estar decepcionado.',
      'Referência à pergunta dele: "Se Jesus é amor, por que ele me puniria?"',
      '"Achei essa pergunta muito honesta. E eu quero te mostrar hoje o que a Bíblia realmente diz sobre isso."',
      'Se ele quiser conversar mais sobre a Aula 1, deixe. Não force a transição.',
    ],
    duration: '5-7 min',
  },
  {
    id: 3,
    title: 'O Diagnóstico',
    subtitle: null,
    guideQuestions: [
      'Tom de diagnóstico honesto, NÃO de condenação. "Como um médico que diz: o exame mostrou algo. Mas calma — tem tratamento."',
      '"Todos pecaram" nivela — ninguém tem vantagem. O cara que guarda o sábado e o que não pisa na igreja estão no mesmo lugar.',
      'Pergunta: "O que você acha disso — de que todo mundo está no mesmo lugar diante de Deus, independente de quanto faz ou deixa de fazer?"',
      'Analogia da gravidade: Salário não é castigo, é consequência natural. A gravidade não está brava com o copo.',
      'Deus NÃO é o que joga o copo no chão. Deus é o que pega o copo antes dele se estilhaçar. (Guardar — aparece no próximo bloco.)',
      '⚠️ Se ele mencionar Satanás/inferno: "Você tem razão. A Bíblia nunca diz que Satanás é dono do inferno." Validar e seguir.',
      '⚠️ Se perguntar sobre Adão e Eva: "Antes de criar a humanidade, Deus já sabia e já tinha preparado a solução. O Cordeiro morto desde a fundação do mundo (Ap 13:8)."',
    ],
    duration: '8-10 min',
  },
  {
    id: 4,
    title: 'O Presente',
    subtitle: null,
    guideQuestions: [
      '🔑 CORAÇÃO DA AULA. Ler Romanos 5:6-8 em voz alta, devagar. Pausar depois.',
      '"Presta atenção no QUANDO. Não diz depois que melhoramos. Diz ENQUANTO. O timing é o ponto."',
      '"Você me disse que Deus não está satisfeito porque você não está buscando. Mas esse texto diz: Deus agiu quando ninguém estava buscando."',
      'Romanos 6:23 completo: Salário vs. Dom. "Morte é o que a gente ganha sozinho. Vida é o que Deus dá de graça."',
      'Pergunta: "Se vida eterna é um dom, um presente — o que isso muda na forma como você vê sua relação com Deus?"',
      '🚗 ILUSTRAÇÃO DO CARRO: Cenário 1 — pai dá o carro de presente, filho cuida por amor. Cenário 2 — pai exige que o filho prove que merece, filho vive com medo.',
      'Pergunta: "Qual desses parece mais com a sua experiência de fé?"',
      '👨‍👧 CONEXÃO COM PATERNIDADE: "Quando a Heloísa desobedece — e ela tem 2 anos — você fica pensando \'ela não me busca o suficiente\'?"',
      '"Se você — pai imperfeito — ama assim, como Deus — o Pai perfeito — amaria menos?"',
      '⚠️ Se ele diz "preciso fazer minha parte": "Qual é a parte do morto? O morto não tem parte. A parte de Deus é dar vida."',
      '⚠️ Se perguntar sobre sábado/dízimo: "Ótima pergunta. A gente vai chegar lá. Mas quero que a gente chegue com a base certa."',
      '⚠️ Se mencionar vida financeira = espiritual: "Se Deus te ama quando sua vida financeira não está boa, tanto quanto quando está — isso muda alguma coisa?"',
    ],
    duration: '12-15 min',
  },
  {
    id: 5,
    title: 'A Leitura',
    subtitle: 'Efésios 2:1-10',
    guideQuestions: [
      'Ler juntos em voz alta. NVI. Pausar a cada 2-3 versículos.',
      'v1-3: "Mortos. Não precisando de melhoria — mortos. Um morto não pode se esforçar mais."',
      'v4-5: "MAS DEUS. Essas são as duas palavras mais importantes da Bíblia." Usar como refrão.',
      'v6-7: "Deus não nos salvou só pra não morrer. Salvou pra nos sentar com Ele. Convidado de honra, não escapou por pouco."',
      'v8-9: ⭐ VERSÍCULO-CHAVE. "Pela graça, mediante a fé, dom de Deus, não de obras. Quatro vezes reforça: não é de você."',
      'Pergunta: "Se a salvação é pela graça, não por obras — por que tanta gente, incluindo muitas igrejas, faz parecer que é por obras?"',
      'v10: A TRAVA DE SEGURANÇA. "Criados PARA boas obras. As obras vêm DEPOIS da salvação, não antes. É fruto, não raiz."',
      '"Lembra do carro? O filho cuida porque ama o pai, não porque está pagando. Efésios 2:10 é isso."',
      '⚠️ Se ele diz "preciso fazer minha parte": Gentileza. Ele repete o que ouviu a vida toda.',
    ],
    duration: '10-12 min',
  },
  {
    id: 6,
    title: 'O Pai Corre',
    subtitle: null,
    guideQuestions: [
      'Não conte a parábola inteira. Foque SÓ em Lucas 15:20.',
      '"Repara nos detalhes. O filho estava voltando. Mas ANTES de chegar — estando ele ainda longe — o pai viu. E correu."',
      '"Na cultura da época, um homem dessa posição não corria. Era humilhante. Mas ele não se importou."',
      '"Você me disse que Deus não está satisfeito porque você não está buscando. Mas esse texto mostra: é Deus correndo na SUA direção. Agora. Como você está."',
      '⛔ PARE AQUI. Não diga mais nada. Deixe essa imagem ser a última coisa.',
      '⚠️ Se ele diz "sinto que Deus está decepcionado": "O que a gente leu hoje — Deus agindo enquanto a gente tava morta, o pai correndo — isso parece decepção pra você? Será que esse sentimento vem de Deus, ou de algo que te ensinaram sobre Deus?"',
      '⚠️ Se ele conectar com as filhas: "Exato. E se você — pai humano, imperfeito — consegue amar assim, o quanto mais o Pai perfeito?"',
    ],
    duration: '5-7 min',
  },
  {
    id: 7,
    title: 'O Pai corre.',
    subtitle: 'Semana que vem: Fé e Obras — Paulo e Tiago São Amigos.',
    guideQuestions: [],
    duration: '5 min',
  },
];

// ========================================
// CARDS INTERATIVOS — AULA 2
// ========================================
export const presetCards = [
  {
    id: 'checkin-graca',
    label: 'Check-in Graça',
    type: 'scale',
    content: 'Neste momento, quão fácil ou difícil é acreditar que Deus te aceita como você está?',
    scaleLabels: { min: 'Muito difícil', max: 'Consigo acreditar' },
  },
  {
    id: 'o-carro',
    label: 'O Carro',
    type: 'scale',
    content: 'Qual cenário parece mais com sua experiência de fé?',
    scaleLabels: { min: 'Pressão — preciso provar', max: 'Presente — sou amado' },
  },
  {
    id: 'mas-deus',
    label: 'Mas Deus',
    type: 'reflection',
    content: 'Complete: "Eu estava... MAS DEUS..."',
  },
  {
    id: 'o-pai',
    label: 'O Pai',
    type: 'reflection',
    content: 'Se Deus te mandasse uma mensagem agora — depois de tudo que você ouviu hoje — o que Ele diria?',
  },
];

// ========================================
// BREATHING GRADIENT — 8 SEÇÕES
// ========================================
export function BreathingGradient({ section = 0 }) {
  const gradients = [
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 45%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 40% 50%, rgba(44,62,107,0.08) 0%, ${colors.offWhite} 65%)`,
    `radial-gradient(ellipse at 50% 40%, rgba(212,168,83,0.12) 0%, ${colors.offWhite} 65%)`,
    `radial-gradient(ellipse at 55% 45%, rgba(122,139,92,0.08) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 50%, rgba(196,122,90,0.08) 0%, ${colors.offWhite} 65%)`,
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
