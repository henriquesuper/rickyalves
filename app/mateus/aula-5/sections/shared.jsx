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
// DADOS DAS SEÇÕES — AULA 5
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
    title: 'Aula 5',
    subtitle: 'O Que Paulo Realmente Quis Dizer',
    quote: 'O maior defensor da lei foi o homem que parecia atacá-la.',
    guideQuestions: [],
    duration: '5 min',
  },
  {
    id: 2,
    title: 'A Pergunta Que Abre',
    subtitle: 'Paulo aboliu a lei?',
    guideQuestions: [
      'Não comece com Paulo. Comece com a tensão dele.',
      '"Mateus, hoje a gente vai mexer no Paulo. Você já ouviu coisas sobre ele. Provavelmente: \'a lei acabou\', \'estamos debaixo da graça\', \'cristão não precisa mais essas coisas.\' Quando você ouve isso, o que vem na sua cabeça?"',
      'Escuta. Anota mentalmente. Não corrige.',
      '⭐ Plante a primeira semente: "A gente vai ler o que Paulo escreveu — não o que disseram que ele escreveu. E vai descobrir que o Paulo que ataca a lei e o Paulo que defende a lei são o mesmo Paulo, falando de coisas diferentes, em frases vizinhas, na mesma carta."',
      '🎯 Frase-tese: "A pergunta não é \'Paulo aboliu a lei?\' — é \'o que exatamente Paulo está atacando quando ele ataca?\'"',
    ],
    duration: '8 min',
  },
  {
    id: 3,
    title: 'Quem Foi Paulo',
    subtitle: 'O filtro biográfico',
    guideQuestions: [
      'Antes de qualquer versículo, dois minutos sobre quem é o autor. Pro Mateus, isso importa muito mais do que pro Guga.',
      'Fariseu de fariseus (Fp 3:5-6). Conhecia a lei como ninguém. Especialista, não leigo.',
      'Irrepreensível segundo a justiça da lei (Fp 3:6). Cumpriu tudo. Era o melhor aluno da turma.',
      'Perseguia a igreja com convicção. Achava que estava defendendo Deus.',
      'Encontrou Jesus em Damasco (At 9). Não foi argumento — foi encontro. Depois passou 3 anos na Arábia (Gl 1:17-18).',
      '🎯 "Paulo não atacou a lei por preguiça. Atacou depois de ter tentado ser salvo por ela durante anos — e ter conseguido externamente. Cumpriu. E descobriu que cumprir não bastava."',
      '💛 Pro Mateus: ele cresceu vendo gente que cumpria externamente. Sabe na pele que cumprir não basta. Paulo, sem você precisar dizer, vira aliado.',
    ],
    duration: '7 min',
  },
  {
    id: 4,
    title: 'As Duas Coisas Que Paulo Ataca',
    subtitle: 'O que ele NÃO ataca: a lei moral.',
    guideQuestions: [
      '⭐ MOMENTO-CHAVE da aula. Aqui é onde você reorganiza o Paulo dele.',
      'Paulo, em Gálatas e Romanos, ataca duas coisas específicas — e nunca a lei moral em si.',
      'a) LEGALISMO — usar a lei como meio de salvação. Não a lei em si. O uso errado dela. A teologia transacional que o Mateus carrega — Paulo é o demolidor número um disso.',
      'b) IMPOSIÇÃO CERIMONIAL — forçar gentios a se circuncidar e viver como judeus pra serem aceitos. Contexto histórico de Gálatas.',
      '🎯 Chave: as 2 coisas que Paulo ataca são exatamente as 2 que a Aula 4 separou. Legalismo = uso errado da lei moral. Imposição cerimonial = uso errado da lei cerimonial. Paulo não ataca categorias — ataca abusos.',
      '⚠️ Cuidado: legalismo é palavra técnica. Explica: "rejeitar legalismo não é rejeitar mandamento. É rejeitar o uso errado dele."',
    ],
    duration: '10 min',
  },
  {
    id: 5,
    title: 'Os Textos-Chave',
    subtitle: 'Lendo Paulo no contexto de Paulo',
    guideQuestions: [
      'Caminhe pelos versículos. Devagar. Sem pressa.',
      'Gl 3:23-25 — "a lei foi nosso aio, pra nos conduzir a Cristo." Aio = paidagōgos = escravo doméstico que levava a criança até a escola. Quando chegava, o aio entregava ao professor real e ia embora. A função terminou — não a escola.',
      'Rm 6:14-15 — "Não estais debaixo da lei, mas debaixo da graça. Continuaremos a pecar? De modo nenhum!" Paulo já antecipou e refutou a leitura distorcida.',
      'Rm 7:12 — "A lei é santa, e o mandamento é santo, justo e bom." O Paulo que poucos citam.',
      'Rm 3:31 — "Anulamos a lei pela fé? De modo nenhum! Antes, confirmamos a lei." Outra antecipação.',
      '🎯 Frase: "Paulo não está atacando a lei. Está atacando o que tentaram fazer com ela."',
    ],
    duration: '12 min',
  },
  {
    id: 6,
    title: 'O Espelho e o Sabão',
    subtitle: 'Romanos 7:7-12',
    guideQuestions: [
      'Páre tudo. Abre a Bíblia. Lê com ele, em voz alta, devagar — Rm 7:7-12.',
      '"Mateus, quem está falando aqui? É o mesmo Paulo que disse \'não estais debaixo da lei.\' E o que ele diz? Que a lei é boa. Sem ela, ele nem teria reconhecido o próprio pecado."',
      '🎯 Frase-síntese (a imagem que fica): "A lei é o espelho. O espelho mostra a sujeira no rosto. Mas o espelho não lava o rosto. Quem lava é a água. Paulo nunca disse pra jogar o espelho fora — disse pra não confundir o espelho com o sabão."',
      'Tg 1:23-25 usa exatamente essa imagem do espelho. Pode soltar com confiança.',
      '💛 Pra anotar pós-aula: ele reagiu à imagem do aio? À frase do espelho? Pode virar a linguagem dele.',
    ],
    duration: '10 min',
  },
  {
    id: 7,
    title: 'O Ex-Prisioneiro',
    subtitle: 'A imagem que fica',
    guideQuestions: [
      '"Imagina um cara condenado a 20 anos. Cumpriu 5. Alguém paga a fiança — paga a dívida toda. Ele sai. É um homem livre."',
      '"A lei que o condenou ainda existe? Sim. Ainda é boa? Sim. Ainda define o que é certo e errado? Sim. O que mudou? Ele não está mais debaixo da condenação dela."',
      '"E olha o detalhe: ele não vai sair da cadeia, ir pra casa e cometer os crimes que estavam na lista. Não porque tem medo de voltar — mas porque ele não é mais aquele cara. A graça transformou a relação dele com o que era certo em primeiro lugar."',
      '🎯 Fecho: "A lei não desapareceu. Sua condenação desapareceu. A lei não é mais sua acusadora — é o desenho do filho que você está se tornando."',
      '💛 Pausa. Deixa essa imagem assentar.',
    ],
    duration: '8 min',
  },
  {
    id: 8,
    title: 'Paulo Continuou Guardando',
    subtitle: 'Camada opcional — corte se o tempo apertar',
    guideQuestions: [
      '⚠️ Use só se a aula estiver fluindo bem. Pode cortar sem prejuízo.',
      'At 18:18 — Paulo fez voto de nazireu (prática judaica), depois da conversão.',
      'At 21:23-26 — participou de rito de purificação no templo, com pagamento de sacrifícios, anos depois da cruz.',
      'At 17:2 — "como tinha por costume, entrou na sinagoga, e por três sábados disputava com eles."',
      '🎯 "O homem que disse \'não estais debaixo da lei\' continuou indo à sinagoga aos sábados. Por quê? Porque liberdade da lei como sistema de salvação ≠ rejeição da lei como expressão do caráter de Deus. Paulo era livre — e livre, continuou guardando muita coisa. Não por obrigação. Por coerência."',
      '💛 Pro Mateus, sem nomear: coerência é exatamente o que ele não viu em casa.',
    ],
    duration: '5 min',
  },
  {
    id: 9,
    title: 'Paulo não veio te tirar a lei. Veio te tirar de baixo dela.',
    subtitle: 'Semana que vem: O Sábado — Gênesis, não Sinai.',
    guideQuestions: [
      'Recapitula em três frases: Paulo não é inimigo da lei. Atacou duas coisas — legalismo e imposição cerimonial. A lei moral, ele defende: santa, justa e boa. A fé não anula — confirma.',
      'Frase pra levar pra casa: "A lei agora não está em cima de você te esmagando. Está debaixo de você te sustentando. É outra função. É outra relação. É a mesma lei."',
      '(Se a aula fluiu bem, encerre sem explicar:) "O Pai que correu em Lucas 15, lembra? Quando o filho voltou, o Pai não disse \'agora você não precisa mais obedecer.\' Ele disse \'agora você é meu filho.\' E filho não obedece pra ser filho. Filho obedece porque é."',
      'Transição pra Aula 6: "Semana que vem a gente vai num lugar sensível. Pro sábado. Não pra te impor nada — só pra olhar com calma e com texto. Sábado é mesmo lei cerimonial? \'Coisa de judeu\'? Ou está em outro lugar — anterior a Israel, anterior a Moisés, anterior à lei toda?"',
      '📝 Pós-aula, anota: a imagem do aio pegou? O ex-prisioneiro funcionou? Ele perguntou sobre o sábado — em que tom? Comentou sobre o pastor/igreja? Reagiu a Rm 3:31? Verbalizou a diferença entre legalismo e obediência? A frase "espelho × sabão" pegou? Camada At 21 entrou? Isabela esteve presente?',
    ],
    duration: '5 min',
  },
];

// ========================================
// CARDS INTERATIVOS — AULA 5
// ========================================
export const presetCards = [
  {
    id: 'paulo-antes',
    label: 'Paulo Antes',
    type: 'reflection',
    content:
      'Antes de hoje, quando você ouvia "Paulo aboliu a lei", o que vinha na sua cabeça?',
  },
  {
    id: 'aio-pegou',
    label: 'Aio',
    type: 'scale',
    content:
      'A imagem do aio (escravo que levava a criança até a escola) — pegou?',
    scaleLabels: { min: 'Não fez sentido', max: 'Fez muito sentido' },
  },
  {
    id: 'condenacao',
    label: 'Condenação',
    type: 'reflection',
    content:
      'Com suas palavras: o que Paulo tirou de cima de você quando ele disse "não estais debaixo da lei"?',
  },
  {
    id: 'rm331',
    label: 'Rm 3:31',
    type: 'scale',
    content:
      'Romanos 3:31 — "a fé não anula a lei, confirma." Você já tinha lido?',
    scaleLabels: { min: 'Nunca tinha visto', max: 'Já conhecia bem' },
  },
];

// ========================================
// BREATHING GRADIENT — 10 SEÇÕES
// ========================================
// 0 waiting — gold base
// 1 welcome — gold base
// 2 abertura — terracotta leve (provocação)
// 3 quem foi paulo — blue suave (Paulo biográfico)
// 4 hero: as duas coisas — três pólos (gold central + terracotta nas pontas)
// 5 textos-chave — gold + blue (palavra)
// 6 espelho × sabão — gold + blue
// 7 ex-prisioneiro — graphite/blue (cela)
// 8 paulo continuou — olive/gold (coerência)
// 9 closing — gold base
export function BreathingGradient({ section = 0 }) {
  const gradients = [
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 40%, ${colors.goldSoft} 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(196,122,90,0.08) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(44,62,107,0.10) 0%, ${colors.offWhite} 70%)`,
    `radial-gradient(ellipse at 22% 55%, rgba(196,122,90,0.10) 0%, transparent 30%), radial-gradient(ellipse at 78% 55%, rgba(196,122,90,0.10) 0%, transparent 30%), radial-gradient(ellipse at 50% 45%, rgba(212,168,83,0.16) 0%, ${colors.offWhite} 60%)`,
    `radial-gradient(ellipse at 30% 50%, rgba(212,168,83,0.10) 0%, transparent 35%), radial-gradient(ellipse at 75% 55%, rgba(44,62,107,0.08) 0%, ${colors.offWhite} 60%)`,
    `radial-gradient(ellipse at 35% 50%, rgba(212,168,83,0.12) 0%, transparent 35%), radial-gradient(ellipse at 70% 55%, rgba(44,62,107,0.10) 0%, ${colors.offWhite} 60%)`,
    `radial-gradient(ellipse at 50% 50%, rgba(45,41,38,0.10) 0%, rgba(44,62,107,0.06) 45%, ${colors.offWhite} 75%)`,
    `radial-gradient(ellipse at 50% 45%, rgba(122,139,92,0.10) 0%, rgba(212,168,83,0.07) 50%, ${colors.offWhite} 75%)`,
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
