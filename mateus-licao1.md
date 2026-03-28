# BRIEF VISUAL & INTERATIVO — ESTUDO BÍBLICO DO MATEUS
## Aula 1: Conversa de Escuta — "O Que Você Acha Que Deus Espera de Você?"

---

## CONTEXTO GERAL DO PROJETO

### O Que É Isso

Um estudo bíblico individual, semanal, conduzido por **Ricky** (instrutor, mora em Los Angeles) para seu primo **Mateus** (30 anos, mora no Brasil, casado com Isabela, duas filhas: Isis de 7 e Heloísa de 2).

O estudo se chama **"Graça Que Transforma"** e tem 13 aulas divididas em 3 fases:
- **Fase 1 (Aulas 1-3):** A Base — O Que Salva (graça, cruz, fé e obras)
- **Fase 2 (Aulas 4-8):** A Lente — O Que a Cruz Mudou (lei moral vs. cerimonial, Paulo, sábado, saúde, dízimo)
- **Fase 3 (Aulas 9-13):** A Vida — Identidade e Esperança (santuário, morte, volta de Jesus, estudo pessoal, decisão)

### Perfil do Mateus (Participante)

- Já acredita na Bíblia e que Jesus é Deus
- Frequentou a igreja adventista no passado, chegou a guardar o sábado
- Saiu porque não via sentido em certas práticas (sábado, dízimo, restrições alimentares)
- Tem dúvidas específicas: sábado ("era só pros judeus"), tatuagem, carne de porco, dízimo
- Perfil mais pastoral/devocional — precisa sentir antes de entender
- Conhece o básico da Bíblia (histórias principais, alguns versículos)
- Pai de duas meninas pequenas — a paternidade é uma via de conexão com Deus

### O Setup Técnico

O Ricky já opera um sistema similar para outro estudo bíblico (da Guga) usando um servidor Node.js com três rotas:
- `/licao-X` → Tela principal da apresentação (projetada/compartilhada em tela)
- `/licao-X/apresentador` → Painel do instrutor no celular (controla slides, vê reações)
- `/licao-X/participante` → Tela do participante no celular (conecta via QR code, reage, interage)

**Para o estudo do Mateus, queremos evoluir esse sistema.** Usar **Firebase** (Realtime Database ou Firestore) para comunicação em tempo real entre as três telas. Vercel para deploy. Isso elimina a necessidade de manter um servidor Node rodando manualmente. Mas estou aberto se a melhor opção for Firebase Firestore.

### Princípio de Design

**"O meio é a mensagem."** A qualidade visual e tecnológica comunica ao Mateus que ele é levado a sério. Que esse estudo é algo preparado com cuidado, não improvisado. A tecnologia deve servir ao conteúdo — nunca competir com ele.

---

## IDENTIDADE VISUAL — "GRAÇA QUE TRANSFORMA"

### Conceito Estético

O estudo da Guga usa uma estética de **Mapa Antigo** (parchment, tons terrosos, cartográfico) porque é um curso apologético/acadêmico para uma mente cética.

O estudo do Mateus é completamente diferente. Ele precisa de **calor**, não de erudição. O design deve evocar:

- **Luz entrando** — como nascer do sol, como uma porta que se abre, como cortinas sendo abertas
- **Acolhimento** — como um lar, não como uma sala de aula
- **Simplicidade elegante** — limpo, moderno, mas nunca frio
- **Jornada** — senso de que há um caminho, e ele está dando o primeiro passo

### Paleta de Cores Sugerida

| Função | Cor | Hex (sugestão) | Referência |
|--------|-----|----------------|------------|
| Primária | Dourado quente | `#D4A853` | Luz, graça, calor |
| Secundária | Azul profundo suave | `#2C3E6B` | Confiança, profundidade, céu noturno |
| Fundo principal | Off-white quente | `#FAF6F0` | Papel, leveza, respiro |
| Fundo escuro | Carvão morno | `#2D2926` | Para contraste, sem ser preto puro |
| Acento | Terracota suave | `#C47A5A` | Terra, humanidade, encarnação |
| Texto principal | Grafite morno | `#3D3835` | Legível sem ser duro |
| Sucesso/positivo | Verde oliva | `#7A8B5C` | Crescimento, vida, esperança |

### Tipografia Sugerida

- **Títulos:** Fonte serifada elegante mas acessível — sugestões: Playfair Display, Cormorant Garamond, ou Lora
- **Corpo:** Fonte sans-serif limpa e legível — sugestões: Inter, Source Sans Pro, ou Nunito
- **Versículos bíblicos:** Itálico da fonte serifada, destacados visualmente (indent, borda lateral sutil, fundo levemente diferenciado)

### Tom Visual

NÃO é: churchy, clipart cristão, visual de igreja evangélica, pôr do sol genérico com cruz
É: editorial de alta qualidade, como uma revista de lifestyle sofisticada mas com alma, tipo Kinfolk ou Cereal Magazine versão espiritual

---

## ARQUITETURA DAS TRÊS TELAS

### Visão Geral

```
┌─────────────────────────────────────────────┐
│           TELA PRINCIPAL                     │
│     /mateus/aula-1                          │
│     (compartilhada via tela ou link)         │
│                                              │
│  O que o Mateus VÊ na tela grande/           │
│  compartilhamento de tela do Google Meet     │
│                                              │
│  - Visual bonito, ambiente da aula           │
│  - Textos bíblicos quando aparecem           │
│  - Elementos interativos vindos do Firebase  │
│  - Notificações de reações do participante   │
└─────────────────────────────────────────────┘

┌──────────────────────┐  ┌──────────────────────┐
│  PAINEL APRESENTADOR │  │  TELA PARTICIPANTE   │
│  /mateus/aula-1/     │  │  /mateus/aula-1/     │
│  apresentador        │  │  participante        │
│  (celular do Ricky)  │  │  (celular do Mateus) │
│                      │  │                      │
│  - Controle de seções│  │  - Conecta via QR    │
│  - Notas em tempo    │  │  - Coloca o nome     │
│  real categorizadas  │  │  - Reage durante a   │
│  - Timer da aula     │  │    aula (emojis,     │
│  - Vê respostas do   │  │    cards, respostas) │
│  participante        │  │  - Recebe prompts    │
│  - Guia de perguntas │  │    interativos       │
└──────────────────────┘  └──────────────────────┘
         ▲                         ▲
         │    Firebase Realtime    │
         └─────────────────────────┘
```

### Firebase Structure (sugestão)

```
mateus-estudo/
├── sessions/
│   └── aula-1/
│       ├── status: "active" | "waiting" | "ended"
│       ├── currentSection: 0-5
│       ├── startedAt: timestamp
│       └── presenterConnected: true
├── participants/
│   └── {participantId}/
│       ├── name: "Mateus"
│       ├── connectedAt: timestamp
│       └── isConnected: true
├── reactions/
│   └── aula-1/
│       └── {reactionId}/
│           ├── type: "emoji" | "response" | "reflection"
│           ├── content: "🙏" | "texto da resposta"
│           ├── from: "Mateus"
│           ├── timestamp: timestamp
│           └── section: 2
├── notes/
│   └── aula-1/
│       └── {noteId}/
│           ├── text: "Ele mencionou que..."
│           ├── category: "intelectual" | "emocional" | "prático"
│           ├── timestamp: timestamp
│           └── section: 1
└── journey/
    └── mateus/
        ├── aula-1: { completed: true, date: "2026-04-03", highlight: "..." }
        ├── aula-2: { completed: false }
        └── ...
```

---

## AULA 1 — DETALHAMENTO POR TELA

### Natureza Especial da Aula 1

A Aula 1 NÃO é uma apresentação. É uma **conversa de escuta**. Ricky faz perguntas, Mateus fala. Não há conteúdo expositivo, não há slides com texto bíblico, não há ensino.

Isso significa que a tecnologia nesta aula serve a um propósito diferente das demais:

- **Tela principal:** Ambiente visual acolhedor, mínimo, quase meditativo. Muda sutilmente conforme a conversa avança pelas seções. Mostra notificações suaves de reações do Mateus.
- **Painel do apresentador:** Ferramenta de escuta. Blocos de perguntas como guia. Sistema de anotações categorizado. Timer.
- **Tela do participante:** Simples e leve. Conexão, nome, reações, e em momentos-chave: cards interativos de reflexão.

---

### TELA PRINCIPAL — `/mateus/aula-1`

#### Seção 0: Tela de Espera (antes de começar)

**Visual:**
- Fundo quente, clean, com o título do estudo: **"Graça Que Transforma"**
- Subtítulo: *Estudo Bíblico — Mateus & Ricky*
- Logo ou ícone minimalista do estudo (sugestão: uma porta entreaberta com luz dourada vazando, ou um caminho iluminado — algo que evoque começo de jornada)
- QR Code grande e claro no centro-inferior, com instrução: *"Escaneie para conectar"*
- O QR Code leva a `/mateus/aula-1/participante`
- Quando o participante conecta e digita o nome, aparece suavemente na tela principal: **"Mateus está conectado"** ✓ (com animação discreta, tipo fade-in)

#### Seção 1: Abertura — "Bem-vindo"

**Visual:**
- Transição suave da tela de espera
- Texto central em fonte serifada grande:

> **Aula 1**
> *Conversa de Escuta*

- Subtítulo menor:

> *"Antes de falar, ouvir. Antes de ensinar, entender."*

- Fundo sutil que sugere acolhimento — pode ser um gradiente suave dos tons dourado → off-white, ou uma textura muito leve

**Funcionalidade:**
- Fica estático enquanto Ricky faz a introdução verbal (~5-10 min)
- Nenhum elemento interativo neste momento — é só ambiente

#### Seção 2: Bloco de Perguntas — "Sua História com a Fé"

**Visual:**
- Transição para um visual que indica "conversa em andamento"
- Título discreto no topo: *"Sua História com a Fé"*
- Ícone sutil de aspas ou balão de diálogo
- O centro da tela fica "vazio" por design — o conteúdo é a conversa, não a tela
- Fundo pode ter uma animação muito sutil e lenta (partículas de luz flutuando, ou um gradiente que respira suavemente) — algo que indique vida sem distrair

**Funcionalidade:**
- Quando Ricky (no painel) adiciona uma nota, nada aparece na tela principal — as notas são privadas
- Se Mateus enviar uma reação pelo celular, aparece como notificação sutil no canto (como um toast notification que desaparece após 3-4 segundos)

#### Seção 3: Bloco de Perguntas — "O Que Deus Espera"

**Visual:**
- Mesma estrutura visual, com título atualizado: *"O Que Deus Espera"*
- Pode haver uma transição sutil de cor — levemente mais profunda, indicando que a conversa está aprofundando

#### Seção 4: Bloco de Perguntas — "Suas Dúvidas"

**Visual:**
- Título: *"Suas Dúvidas"*
- Mesma linguagem visual

#### Seção 5: Bloco de Perguntas — "Sua Relação com Deus Hoje"

**Visual:**
- Título: *"Deus e Você, Hoje"*
- Tom visual levemente mais íntimo — pode escurecer suavemente o fundo (como entardecer)

#### Seção 6: Fechamento

**Visual:**
- Texto central:

> *"Obrigado por compartilhar."*

- Abaixo, menor:

> *"Semana que vem: A Gente Abre a Bíblia Juntos."*

- Visual que sugere continuidade — pode ser o ícone de jornada mostrando o primeiro passo dado, ou uma trilha com o primeiro ponto iluminado
- Se quiser sofisticar: mostrar um mini-mapa de jornada das 13 aulas, com a Aula 1 marcada como concluída com animação

---

### PAINEL DO APRESENTADOR — `/mateus/aula-1/apresentador`

Esta é a tela mais funcional e mais densa. Ela roda no celular do Ricky e serve como cockpit da aula.

#### Layout (mobile-first, vertical)

```
┌─────────────────────────────────────────┐
│  GRAÇA QUE TRANSFORMA                   │
│  Aula 1 — Conversa de Escuta            │
│  ⏱ 00:23:45        🟢 Mateus conectado  │
├─────────────────────────────────────────┤
│  SEÇÃO ATUAL: 2 de 6                    │
│  "Sua História com a Fé"                │
│  [← Anterior]              [Próxima →]  │
├─────────────────────────────────────────┤
│  📋 PERGUNTAS GUIA                      │
│  (expansível — mostra as perguntas do   │
│   bloco atual como referência)          │
│                                          │
│  • "Me conta sua história com a fé.     │
│    Como era quando ia na igreja?"        │
│  • "Você lembra do que te atraiu?"      │
│  • "Quando decidiu parar, foi de uma    │
│    vez ou gradual?"                      │
│  • "A Isabela participava?"             │
├─────────────────────────────────────────┤
│  📝 ANOTAÇÕES                           │
│                                          │
│  [Campo de texto livre]                  │
│                                          │
│  Categoria:                              │
│  [🧠 Intelectual] [❤️ Emocional]        │
│  [🔧 Prático] [⭐ Importante]            │
│                                          │
│  [Salvar nota]                           │
│                                          │
│  ─── Notas anteriores ───               │
│  🧠 "Acha que sábado era só pros        │
│      judeus" — 00:15:32                  │
│  ❤️ "Falou com saudade da época que     │
│      ia na igreja" — 00:18:47           │
│  🔧 "Tatuagem é a dúvida que mais       │
│      pesa" — 00:22:10                   │
├─────────────────────────────────────────┤
│  🔔 REAÇÕES DO MATEUS                   │
│  (feed em tempo real do que ele envia)   │
│                                          │
│  🙏 Mateus reagiu com 🙏 — 00:20:15    │
│  💬 "Nunca pensei nisso" — 00:21:30     │
├─────────────────────────────────────────┤
│  🎯 ENVIAR CARD PRO MATEUS             │
│  (botões para enviar prompts            │
│   interativos ao celular dele)           │
│                                          │
│  [Pergunta de Reflexão]                  │
│  [Escala de Sentimento]                  │
│  [Campo Livre]                           │
└─────────────────────────────────────────┘
```

#### Funcionalidades Detalhadas

**1. Timer**
- Conta o tempo desde o início da aula
- Não é punitivo — é apenas referência para o Ricky saber se está no ritmo (~60 min total)

**2. Navegação de Seções**
- Botões anterior/próxima para mudar de seção
- Ao mudar de seção no painel, a tela principal atualiza em tempo real (via Firebase)
- As seções da Aula 1:
  - 0: Espera (QR code)
  - 1: Abertura
  - 2: Sua História com a Fé
  - 3: O Que Deus Espera
  - 4: Suas Dúvidas
  - 5: Deus e Você, Hoje
  - 6: Fechamento

**3. Perguntas Guia**
- Expansível/colapsável por seção
- Mostra as perguntas sugeridas para o bloco atual como referência rápida
- NÃO aparece na tela principal — é só pro Ricky
- Conteúdo completo das perguntas por seção:

**Seção 2 — Sua História com a Fé:**
- "Me conta um pouco da sua história com a fé. Como era quando você ia na igreja adventista?"
- "Você lembra do que te atraiu na época?"
- "Quando decidiu parar, foi de uma vez ou gradual?"
- "Teve alguma experiência específica que pesou?"
- "A Isabela participava?"

**Seção 3 — O Que Deus Espera:**
- "Se você tivesse que resumir em uma frase o que Deus espera de um cristão, o que diria?"
- "E se alguém não conseguir — o que acontece?"
- "Você acha que dá pra 'perder' a salvação?"
- "Se Deus te mandasse uma mensagem agora, o que Ele diria?"

**Seção 4 — Suas Dúvidas:**
- "Sobre o sábado — o que especificamente te faz achar que era só pros judeus?"
- "E a tatuagem — é dúvida teórica ou prática?"
- "Quando pensa em dízimo, o que vem à mente?"
- "De onde vieram essas dúvidas? Leitura própria, alguém falou, vídeo?"
- "Se eu te mostrasse que o sábado aparece antes de existir judeu — lá em Gênesis — isso mudaria algo?"

**Seção 5 — Deus e Você, Hoje:**
- "Hoje, como é sua relação com Deus? Você ora? Lê a Bíblia?"
- "Você acha que Deus está satisfeito com você?"
- "Se a Isabela perguntasse 'você é cristão?', o que responderia?"
- "O que te fez topar esse estudo? O que espera tirar disso?"
- "Se a Bíblia pudesse responder UMA pergunta sua — qual seria?"

**4. Sistema de Anotações**
- Campo de texto livre para digitar a nota
- Três categorias coloridas (seleção por tap):
  - 🧠 **Intelectual** (azul) — ideias, argumentos, posições teológicas
  - ❤️ **Emocional** (terracota) — sentimentos, mágoas, saudade, medo
  - 🔧 **Prático** (verde) — preocupações sobre mudanças concretas
  - ⭐ **Importante** (dourado) — flag extra para momentos-chave
- Cada nota salva com timestamp e seção atual
- Feed cronológico de notas abaixo do campo (scroll)
- Notas são salvas no Firebase e persistem entre sessões (Ricky pode revisá-las depois)

**5. Feed de Reações**
- Mostra em tempo real tudo que o Mateus envia pelo celular dele
- Reações aparecem aqui E como toast notification na tela principal

**6. Enviar Cards Interativos**
- O Ricky pode enviar prompts ao celular do Mateus em momentos específicos:
  - **Pergunta de Reflexão:** Envia uma pergunta que aparece como card no celular do Mateus, com campo de texto para resposta
  - **Escala de Sentimento:** Slider de 1-5 com rótulos (ex: "Como você se sente sobre esse assunto?" com escala de "Muito desconfortável" a "Totalmente em paz")
  - **Campo Livre:** Envia um card com prompt customizado e campo de resposta

Cards sugeridos para a Aula 1 (pré-programados, Ricky escolhe quando enviar):

| Card | Tipo | Conteúdo |
|------|------|----------|
| Check-in | Escala | "Neste momento, como você se sente em relação à fé? (1 = distante, 5 = conectado)" |
| Expectativa | Reflexão | "Complete a frase: 'Eu espero que esse estudo me ajude a...'" |
| A Única Pergunta | Reflexão | "Se a Bíblia pudesse responder UMA pergunta sua, qual seria?" |
| Disposição | Escala | "Se a Bíblia te mostrasse algo diferente do que você pensa hoje, quão aberto você estaria? (1 = já decidi, 5 = totalmente aberto)" |

---

### TELA DO PARTICIPANTE — `/mateus/aula-1/participante`

Esta roda no celular do Mateus. Deve ser extremamente simples, bonita e não-invasiva. O foco do Mateus deve estar na conversa, não no celular.

#### Fluxo de Entrada

1. **Escaneio do QR code** → abre a URL no navegador do celular
2. **Tela de boas-vindas:**
   - Logo do estudo
   - "Graça Que Transforma — Aula 1"
   - Campo: "Qual é o seu nome?"
   - Botão: "Entrar"
3. **Ao digitar o nome e entrar:**
   - Firebase atualiza `participants/` com o nome
   - Tela principal mostra "Mateus está conectado" ✓
   - Painel do apresentador mostra indicador verde

#### Estado Normal (durante a conversa)

A maior parte do tempo, a tela do Mateus mostra apenas:

```
┌─────────────────────────────────────────┐
│                                          │
│         GRAÇA QUE TRANSFORMA             │
│         Aula 1 — Conversa de Escuta      │
│                                          │
│         🟢 Conectado                     │
│                                          │
│                                          │
│                                          │
│         [ 🙏 ]  [ ❤️ ]  [ 💡 ]  [ ✋ ]   │
│                                          │
│  Barra de reações sempre visível         │
└─────────────────────────────────────────┘
```

**Reações rápidas (sempre visíveis no bottom):**
- 🙏 = "Amém" / concordo / isso me toca
- ❤️ = "Gostei" / ressoou comigo
- 💡 = "Nunca pensei nisso" / insight
- ✋ = "Quero falar sobre isso" / tenho pergunta

Ao tocar, a reação é enviada via Firebase:
- Aparece como toast na tela principal
- Aparece no feed do painel do apresentador

#### Cards Interativos (quando Ricky envia)

Quando o Ricky envia um card pelo painel, ele aparece no celular do Mateus como um overlay suave (slide-up de baixo):

**Card de Reflexão (texto):**
```
┌─────────────────────────────────────────┐
│                                          │
│  💭                                      │
│  Complete a frase:                       │
│  "Eu espero que esse estudo me ajude     │
│   a..."                                  │
│                                          │
│  ┌─────────────────────────────────┐     │
│  │                                 │     │
│  │  [campo de texto]               │     │
│  │                                 │     │
│  └─────────────────────────────────┘     │
│                                          │
│         [Enviar]     [Pular]             │
│                                          │
└─────────────────────────────────────────┘
```

**Card de Escala:**
```
┌─────────────────────────────────────────┐
│                                          │
│  📊                                      │
│  Como você se sente em relação à fé      │
│  neste momento?                          │
│                                          │
│  Distante  ○ ○ ○ ○ ○  Conectado         │
│            1 2 3 4 5                     │
│                                          │
│         [Enviar]     [Pular]             │
│                                          │
└─────────────────────────────────────────┘
```

O "Pular" é importante — nunca forçar interação. Se ele não quiser responder, tudo bem.

---

## FUNCIONALIDADE CROSS-SESSION: MAPA DE JORNADA

### Conceito

Uma visualização persistente que mostra o progresso do Mateus ao longo das 13 aulas. Acessível em `/mateus/jornada` ou integrada na tela de espera de cada aula.

### Visual

Um caminho/trilha com 13 pontos (um por aula), organizado em 3 seções visuais (as 3 fases):

```
  FASE 1: A BASE          FASE 2: A LENTE           FASE 3: A VIDA
  (Dourado quente)         (Azul profundo)            (Verde oliva)

  ●───●───●───────────●───●───●───●───●──────────●───●───●───●───●
  1   2   3           4   5   6   7   8          9  10  11  12  13

  ● = concluída (iluminada, com data e destaque)
  ○ = não realizada (esmaecida mas visível)
  ◉ = atual (pulsando suavemente)
```

Cada ponto concluído pode ser clicado/tocado para mostrar:
- Data da aula
- Título da aula
- Um "destaque" — frase curta que Ricky pode adicionar depois (ex: "Mateus disse que sente falta de orar com a família")

Os dados do mapa de jornada ficam em `journey/mateus/` no Firebase e persistem para sempre.

### A ideia por trás

Isso cria senso de progresso e investimento. Na Aula 8, quando ele estiver cansado ou em dúvida, ele pode olhar pro mapa e ver o caminho que já percorreu. É motivação visual sem ser manipulativa.

---

## NOTAS TÉCNICAS

### Stack Sugerida

- **Firebase Realtime Database** — para sincronização em tempo real entre as 3 telas (mais simples que Firestore para este use case de real-time listeners)
- **Framework:** A critério do desenvolvedor. Pode ser React/Next, Svelte, Vue, ou até vanilla JS com módulos. O importante é que seja leve e rápido no mobile.
- **Responsividade:** Tela principal é desktop/landscape (compartilhamento de tela). Painel do apresentador e tela do participante são mobile-first.
- **QR Code:** Gerar dinamicamente com a URL do participante (biblioteca: `qrcode.js` ou `qr-code-styling` para QR codes mais bonitos com logo)

### Performance

- A tela do participante deve carregar em < 2 segundos no 4G brasileiro
- Minimizar bundle size — o Mateus não precisa de React inteiro carregando no celular dele
- Service worker para funcionar offline (se a conexão cair, as reações ficam em queue e enviam quando reconectar)

### Segurança

- Firebase rules: permitir escrita apenas de participantes autenticados (pode ser auth anônima para simplificar)
- Rate limiting de reações (máx 1 a cada 3 segundos para evitar spam acidental)
- As notas do instrutor são protegidas — o participante nunca vê as anotações do Ricky

### Deploy

Cada aula é uma nova "session" no Firebase, mas o app é um só. A URL `/mateus/aula-1` carrega os dados da session `aula-1`. Novas aulas são adicionadas como configuração (pode ser um JSON de config ou Firebase Remote Config).

---

## CONTEÚDO ESPECÍFICO DA AULA 1 — REFERÊNCIA

### Título
**Aula 1: Conversa de Escuta**
*"O Que Você Acha Que Deus Espera de Você?"*

### Seções (6 total)

| # | Nome | Duração | Função |
|---|------|---------|--------|
| 0 | Espera | — | QR code, conexão |
| 1 | Abertura | 5-10 min | Introdução, estabelecer tom |
| 2 | Sua História com a Fé | 10-15 min | Mapear trajetória |
| 3 | O Que Deus Espera | 10-15 min | Mapear teologia funcional |
| 4 | Suas Dúvidas | 10-15 min | Inventariar questões |
| 5 | Deus e Você, Hoje | 10 min | Mapear estado espiritual atual |
| 6 | Fechamento | 5-10 min | Agradecimento, oração, preview |

### Nenhum texto bíblico nesta aula
A Aula 1 é 100% conversa. A Bíblia abre na Aula 2.

### Nenhum conteúdo expositivo nesta aula
Ricky não ensina. Ricky escuta. A tela principal reflete isso — é ambiente, não conteúdo.

---

## LISTA COMPLETA DAS 13 AULAS (Para planejamento de jornada)

| # | Título | Fase | Textos-Chave |
|---|--------|------|-------------|
| 1 | Conversa de Escuta: "O Que Deus Espera de Você?" | Base | — |
| 2 | O Presente: Entendendo a Cruz | Base | Rm 3:23; 5:8; 6:23; Ef 2:1-10 |
| 3 | Fé e Obras: Paulo e Tiago São Amigos | Base | Tg 2:14-26; Mt 7:17-20 |
| 4 | A Grande Distinção: Duas Leis, Dois Destinos | Lente | Hb 10:1; Cl 2:16-17; Dt 10:1-5; 31:24-26; Hb 8:1-13 |
| 5 | O Que Paulo Realmente Quis Dizer | Lente | Gl 3:23-25; 5:2-6; Rm 3:31; 7:7-12 |
| 6 | O Sábado: Gênesis, Não Sinai | Lente | Gn 2:1-3; Mc 2:23-28; Lc 4:16; 23:56; Is 66:22-23 |
| 7 | O Corpo Como Templo: Saúde, Tatuagem e Liberdade | Lente | 1Co 6:12-20; 10:31; Gn 7:2; At 10:1-28 |
| 8 | Dízimo e Mordomia: Tudo É d'Ele | Lente | Gn 14:18-20; 28:22; Ml 3:6-12; Mt 23:23; 2Co 9:6-7 |
| 9 | O Santuário: O GPS da Salvação | Vida | Hb 4:14-16; 10:19-22; Jo 1:29; 6:35; 8:12 |
| 10 | A Morte e a Esperança | Vida | Jo 11:11-14; Ec 9:5-6; 1Ts 4:13-18 |
| 11 | A Volta de Jesus | Vida | Jo 14:1-3; Ap 1:7; 21:1-5; Mt 24:27 |
| 12 | Como Estudar a Bíblia Por Conta Própria | Vida | 2Tm 3:14-17 |
| 13 | Decisão e Caminho | Vida | Js 24:14-15; Rm 6:3-4; 8:1; Hb 10:24-25 |

---

## ENTREGÁVEIS ESPERADOS

1. **App web completo** com as 3 rotas funcionando (tela principal, apresentador, participante)
2. **Integração Firebase** com real-time sync entre as 3 telas
3. **Sistema de QR code** para conexão do participante
4. **Sistema de reações** (emoji rápido + cards interativos)
5. **Sistema de notas categorizado** no painel do apresentador (persistente)
6. **Mapa de Jornada** persistente cross-session
7. **Design responsivo**: principal para desktop/landscape, apresentador e participante para mobile
8. **Identidade visual** consistente com a paleta e tipografia definidas

---

## FILOSOFIA FINAL

Este sistema não é um PowerPoint com chat. É uma **experiência de estudo bíblico** pensada para dois contextos:

1. **A conversa** — que é o que realmente importa. A tecnologia serve a conversa, nunca compete.
2. **A continuidade** — cada aula é um passo numa jornada de 13 semanas. O mapa de jornada, as notas persistentes, o progresso visual — tudo comunica: "isso é um investimento sério, e você está progredindo."

O Mateus é um cara de 30 anos, pai de duas meninas, que já creu e parou de crer de forma prática. Quando ele abrir esse estudo no celular e vir algo bonito, bem-feito, pensado pra ele — isso já é uma mensagem. Diz: "Você é levado a sério aqui. Suas dúvidas são bem-vindas. E alguém se deu ao trabalho de preparar isso pra você."

O meio é a mensagem.