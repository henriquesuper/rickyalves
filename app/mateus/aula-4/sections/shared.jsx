'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
// DADOS DAS SEÇÕES — AULA 4
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
    title: 'Aula 4',
    subtitle: 'A Grande Distinção — Duas Leis, Dois Destinos',
    quote: 'Nem toda regra do Antigo Testamento tem o mesmo peso.',
    guideQuestions: [],
    duration: '5 min',
  },
  {
    id: 2,
    title: 'A Pergunta Que Abre',
    subtitle: null,
    guideQuestions: [
      '"Mateus, se eu te perguntasse — o cristão tem que obedecer o Antigo Testamento? — você responderia o quê?"',
      'Escuta sem corrigir. Provavelmente vai sair "algumas coisas sim, outras não" ou "o que Jesus confirmou." Ótimo — ele já intui.',
      'Se disser "tudo" ou "nada", serve igual — mostra que nenhum extremo funciona.',
      '"Deixa eu te perguntar de outro jeito. Você come porco? Faz tatuagem? Usa roupa de dois tipos de fio? (Dt 22:11) Apedreja filho rebelde? (Dt 21:18-21)"',
      '⭐ O ponto: todo cristão já escolhe. A pergunta não é SE a gente distingue — é COMO. E se a Bíblia mesma ensina o critério.',
      '"A Bíblia não é ambígua sobre isso. Ela própria distingue. Hoje a gente vai encontrar essa distinção no texto."',
      '🎯 Frase-tese pra repetir duas vezes: "A cruz não aboliu a lei de Deus. A cruz cumpriu o sistema que apontava para ela."',
    ],
    duration: '10 min',
  },
  {
    id: 3,
    title: 'A Distinção Física',
    subtitle: 'Dentro da arca × ao lado da arca',
    guideQuestions: [
      '⭐ MOMENTO-CHAVE da aula. A maioria dos cristãos nunca viu.',
      'A Bíblia faz uma distinção FÍSICA antes de teológica. Elas ficavam em lugares diferentes.',
      'LEI MORAL (Dez Mandamentos): escritas pelo DEDO de Deus em pedra (Êx 31:18; 32:16). Guardadas DENTRO da arca (Dt 10:1-5; 1 Rs 8:9). Chamadas de "a aliança" (Êx 34:28).',
      'LEI CERIMONIAL (festas, sacrifícios, rituais): escritas por MOISÉS em um livro (Dt 31:24). Colocadas AO LADO da arca — fora (Dt 31:26).',
      '"Mateus, repara. Os Dez Mandamentos — dentro, onde a presença dele ficava. O livro das cerimônias — ao lado, fora. Dois lugares. Duas leis. Deus está dizendo, pelo arranjo físico, que têm pesos diferentes."',
      '🤫 Se ele nunca viu isso, vai ficar em silêncio. Deixa o silêncio fazer o trabalho. Não preenche.',
    ],
    duration: '12 min',
  },
  {
    id: 4,
    title: 'Lei Moral — O Caráter de Deus',
    subtitle: null,
    guideQuestions: [
      'A lei moral REFLETE o caráter de Deus.',
      'Deus é amor → "Amarás o Senhor teu Deus" + "Amarás o teu próximo."',
      'Deus é fiel → "Não adulterarás." Deus é verdade → "Não dirás falso testemunho." Deus é dono da vida → "Não matarás."',
      '"Se Deus mudou de ideia sobre qualquer um desses, o caráter dele mudou. E se o caráter de Deus pode mudar, nada é seguro."',
      '⚓ Mal 3:6 / Tg 1:17 — Deus não muda. Por isso a lei moral valia ANTES do Sinai (Caim sabia que matar era errado; José sabia que adultério era pecado contra Deus) e vale DEPOIS da cruz.',
      '🎯 Frase-chave (use com calma): "Não guardamos a lei para sermos salvos. Guardamos porque fomos salvos. A lei não é a porta — é a casa onde se mora depois que se entrou."',
      'Se pedir texto: Romanos 3:31 — "Anulamos a lei pela fé? De modo nenhum — antes a confirmamos." Paulo mesmo.',
      '💛 Para o Mateus (sem nomear): caráter permanente de Deus ≠ instabilidade. Quando você disser "a lei moral não muda porque Deus não muda", parte dele vai sentir alívio que não é lógica.',
    ],
    duration: '10 min',
  },
  {
    id: 5,
    title: 'Lei Cerimonial — Sombra Cumprida',
    subtitle: null,
    guideQuestions: [
      'Palavra-chave da Bíblia: SOMBRA. Hb 10:1 — "a lei tendo a sombra dos bens vindouros, não a imagem real..."',
      '"O que é sombra, Mateus? Tem forma, mas não substância. Aponta pra algo real, mas não é o real. O que acontece quando a coisa chega?" (Espera.) "A sombra some — não foi abolida, foi cumprida."',
      'Sistema cerimonial inteiro era sombra de Jesus: sacrifícios → Cordeiro (Jo 1:29; Hb 10:4,10-14). Sacerdócio → Cristo Sumo Sacerdote (Hb 4:14-16; 7:23-27). Templo → Jesus habitou ("armou tabernáculo") entre nós (Jo 1:14). Festas anuais → eventos da obra de Cristo (1 Co 5:7; Cl 2:16-17). Sábados cerimoniais anuais (Lv 23:24,32,39) — festas, não o semanal.',
      '⭐ O véu do templo rasgado (Mt 27:50-51) — de CIMA pra BAIXO. Deus rasgando. "Acabou. O sistema que me separava cumpriu o propósito. Agora tem acesso direto."',
      '🎯 O que foi abolido? O sistema cerimonial. O que não foi abolido? Os Dez — continuam dentro da arca, descrevendo caráter imutável.',
      '⚠️ Colossenses 2:16-17 vai aparecer. Lista (festas + luas novas + sábados) é fórmula fixa do calendário cerimonial (Lv 23; Nm 28; 2 Cr 2:4; 8:13; 31:3; Ez 45:17). O sábado semanal não é sombra — é memorial da Criação (Gn 2:1-3), antes do pecado, antes de Israel.',
      '🚫 NÃO antecipe o sábado. Só planta: "A palavra sábado no AT é usada pra dois tipos de dia. A gente olha isso direito semana 6."',
    ],
    duration: '12 min',
  },
  {
    id: 6,
    title: 'Nova Aliança — A Lei no Coração',
    subtitle: 'Hebreus 8:6-13',
    guideQuestions: [
      'Ler Hb 8:6-13 em voz alta, com ele. Citando Jr 31:33: "Porei as minhas leis na mente deles e sobre o seu coração as inscreverei."',
      '"Mateus, se a nova aliança fosse ABOLIR a lei, pra que escrevê-la no coração? Se ia ser jogada fora, por que gravar num lugar ainda mais íntimo?"',
      'Deixa processar. A nova aliança não substitui a lei — muda o LUGAR dela. Antes em pedra, fora. Agora no coração, dentro. Dever vira natureza.',
      '💛 Conecta com a Aula 2: "Quando você entende que é FILHO, não escravo, obedece diferente. Não por medo de perder o pai — por amor de quem é o pai. Deus não quer servo que cumpre lista. Quer filho que se parece com ele."',
      '(Essa frase — não apressa. Pro órfão, isso é alimento.)',
      '🌱 ANALOGIA DA PLANTA E DA ESTACA: A estaca segura a planta enquanto cresce. Quando a árvore fica forte, você tira a estaca. Não era ruim — cumpriu o trabalho. O sistema cerimonial era a estaca. Apontava pra Cristo, dava estrutura. Quando Cristo veio, a estaca foi retirada. Mas a SEIVA que circula na árvore é o caráter de Deus — a lei moral. Não é estaca. É o que faz a árvore ser árvore.',
    ],
    duration: '10 min',
  },
  {
    id: 7,
    title: 'A cruz cumpriu o sistema que apontava para ela.',
    subtitle: 'Semana que vem: O Que Paulo Realmente Quis Dizer.',
    guideQuestions: [
      'Recapitula em três frases. Lei moral: dentro da arca, caráter de Deus, permanente. Lei cerimonial: ao lado, sombra de Cristo, cumprida. Cruz: não aboliu o caráter, cumpriu o sistema.',
      '"Leva isso pra casa: Deus não está te dando lista. Está te dando um caráter. Ele quer que você se pareça com ele porque você é filho — não pra você virar filho."',
      '(Se o momento permitir, sem explicar:) "O Pai que corre em Lucas 15, lembra? Ele não corre pro servo. Corre pro filho."',
      '📝 Pós-aula, anota: reagiu à distinção física? "sombra cumprida" fez sentido? A estaca pegou? Perguntou sobre sábado? Sobre porco/tatuagem? A frase "guardamos porque fomos salvos" pegou? Comentário sobre o pastor/igreja? Trouxe a Isabela? Verbalizou algo sobre caráter estável?',
    ],
    duration: '5 min',
  },
];

// ========================================
// CARDS INTERATIVOS — AULA 4
// ========================================
export const presetCards = [
  {
    id: 'checkin-at',
    label: 'Check-in AT',
    type: 'scale',
    content: 'Antes da aula: o cristão deve obedecer o Antigo Testamento?',
    scaleLabels: { min: 'Tudo vale', max: 'Nada vale' },
  },
  {
    id: 'distincao-nova',
    label: 'Distinção Física',
    type: 'scale',
    content: 'Você já tinha visto que a Bíblia coloca as duas leis em lugares físicos diferentes?',
    scaleLabels: { min: 'Nunca ouvi', max: 'Sabia bem' },
  },
  {
    id: 'obediencia',
    label: 'Obediência',
    type: 'scale',
    content: 'Hoje, obediência te soa mais como…',
    scaleLabels: { min: 'Lista de regras', max: 'Retrato de caráter' },
  },
  {
    id: 'coracao',
    label: 'Coração',
    type: 'reflection',
    content: 'Complete: "Se a lei mora no coração, o primeiro lugar onde ela aparece na minha vida é…"',
  },
];

// ========================================
// BREATHING GRADIENT — 8 SEÇÕES
// ========================================
// 0 waiting — gold base
// 1 welcome — gold base
// 2 abertura — terracotta leve (provocação)
// 3 distinção física — dois pólos (gold central + azul periférico)
// 4 lei moral — gold forte (caráter imutável)
// 5 lei cerimonial — azul/terracotta (sombra)
// 6 nova aliança — olive/gold (vida/seiva)
// 7 closing — gold base
export function BreathingGradient({ section = 0 }) {
  const gradients = [
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(196,122,90,0.08) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 30% 50%, rgba(212,168,83,0.12) 0%, transparent 35%), radial-gradient(ellipse at 75% 55%, rgba(44,62,107,0.08) 0%, ${colors.offWhite} 60%)`,
    `radial-gradient(ellipse at 50% 40%, rgba(212,168,83,0.16) 0%, ${colors.offWhite} 65%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(44,62,107,0.08) 0%, rgba(196,122,90,0.06) 45%, ${colors.offWhite} 75%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(122,139,92,0.09) 0%, rgba(212,168,83,0.07) 50%, ${colors.offWhite} 75%)`,
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
export function VerseDisplay({ title, subtitle, accentColor, verses = [], emphasis }) {
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

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-2 text-sm italic"
          style={{ color: colors.graphiteLight }}
        >
          {subtitle}
        </motion.p>
      )}

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
