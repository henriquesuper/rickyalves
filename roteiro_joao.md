# ENCONTRO 1 (ESTENDIDO) — JOÃO 4–6
## Roteiro para o agente de slides — Movimentos V, VI e VII

**Contexto técnico:** Este roteiro ESTENDE o deck existente em `/app/apologetica/joao/encontro-1/`. O deck atual tem 56 slides (Slide01–Slide56) em quatro movimentos: I. O Prólogo (João 1.1–18), II. Testemunhas (1.19–51), III. Sinal e Templo (João 2), IV. Nicodemos (João 3). Os novos slides começam em **Slide57** e seguem a numeração com zero à esquerda (Slide57, Slide58... Slide94).

**Design system:** Reutilizar TUDO de `./slides/shared.jsx` (que herda de `licao-16/slides/shared`): `ParchmentWrapper`, `EncontroNumber`, `RomanNumeral`, `SectionLabel`, `BiblicalQuote`, `ProseBlock`, `QuietTitle`, `ThinRule`, `IntertextPair`, `HonestyCard`, paleta (`lapis`, `gold`, `wine`, tons de `ink`, `parchment`) e fontes. Nenhuma cor ou fonte nova. O label do rodapé passa a ser dinâmico por movimento (ver briefing de navegação).

**Acentos por movimento (seguindo o padrão do `movementFor`):**
- Mov. V — O Poço (João 4): `colors.lapisSoft` (água, meio-dia)
- Mov. VI — Betesda (João 5): `colors.wine` (conflito, julgamento)
- Mov. VII — O Pão (João 6): `colors.gold` (pão, Páscoa, "Eu Sou")

**Atualizar em `shared.jsx`:** `TOTAL_SLIDES = 94` e `ENCONTRO_LABEL` vira função/prop por movimento (o briefing de navegação traz o `movementFor` atualizado).

**Tom:** este é o modelo de encontro, não de aula. Slides quietos, muito espaço, uma ideia por tela. Texto bíblico em destaque (`BiblicalQuote`), prosa mínima. As perguntas abertas NÃO têm respostas no slide.

---

## MOVIMENTO V — O POÇO (João 4) · Slides 57–70 · acento lapisSoft

### Slide57 — Abertura do Movimento V
- `RomanNumeral` "V" grande, `QuietTitle`: **O Poço**
- Subtítulo em small-caps: João 4 · Sicar, ao meio-dia
- Ideia visual: um círculo de pedra simples no centro (o poço visto de cima), traço fino, sem figura humana. Calor de meio-dia sugerido por um halo dourado muito sutil no pergaminho.

### Slide58 — Duas conversas, um evangelho
- `IntertextPair` contrastando **Nicodemos (João 3)** × **A Samaritana (João 4)**:
  - homem · mulher
  - judeu, mestre de Israel · samaritana, sem nome
  - vem a Jesus de noite · Jesus vem a ela ao meio-dia
  - religioso de dentro · marginalizada de fora
  - sai em silêncio, hesitando · sai correndo, anunciando
- Linha de fechamento (ProseBlock, curta): "João colocou as duas cenas lado a lado de propósito. O evangelho não tem porta de serviço."
- *Nota do apresentador:* deixar a Guga descobrir o contraste antes de revelar a tabela inteira — perguntar "o que mudou em relação à cena de Nicodemos?"

### Slide59 — "Era-lhe necessário passar por Samaria" (4.4)
- `BiblicalQuote` 4.3–4
- Ideia visual: mapa vertical minimalista (Judeia embaixo, Galileia em cima, Samaria no meio) com duas rotas em traço fino: a rota longa pelo vale do Jordão (a que os judeus usavam para EVITAR Samaria) e a rota reta atravessando Samaria.
- Ponto: geograficamente havia desvio possível. O *edei* ("era necessário") em João nunca é logística — é missão (cf. 3.14, "importa que o Filho do homem seja levantado").

### Slide60 — Quem eram os samaritanos
- Três blocos curtos: a origem (2 Reis 17 — população misturada após a queda do Reino do Norte), a ruptura (templo rival no monte Gerizim; só o Pentateuco como Escritura), o ódio mútuo (séculos; "judeus não se dão com samaritanos", 4.9).
- `HonestyCard`: **Eles existem até hoje.** Cerca de 800 samaritanos vivem em Israel/Cisjordânia, ainda celebram a Páscoa no Gerizim, ainda guardam apenas o Pentateuco. Pode pesquisar: "Samaritans Mount Gerizim Passover".
- *Nota:* a Guga verifica tudo — esse honesty card é dos que ela vai amar.

### Slide61 — O Verbo com sede (4.6–7)
- `BiblicalQuote` 4.6: "Jesus, cansado da viagem, sentou-se junto à fonte. Era cerca da hora sexta."
- Grego em destaque discreto: *kekopiakōs* — exausto, gasto pela estrada.
- Ligação com o prólogo (eco do Movimento I): o Verbo que *eskénosen* — armou tenda — agora tem sede e senta no chão. A encarnação não é teoria.
- `HonestyCard` curto: o poço de Jacó existe e é um dos pouquíssimos lugares da geografia dos evangelhos sem disputa arqueológica — está lá, em Sicar (atual Nablus), com ~40 m de profundidade, até hoje dando água.

### Slide62 — "Dá-me de beber" (4.7–9)
- Quem pede primeiro é Ele. Três barreiras quebradas numa frase, apresentadas como três linhas que se riscam (animação sutil de strikethrough, padrão dos "mitos rasgados" da Lição 6):
  - homem não falava com mulher em público
  - judeu não pedia nada a samaritano
  - rabi não se aproximava de alguém com a história dela
- Linha final: Ele se faz necessitado para abrir a conversa.

### Slide63 — Água viva e o mal-entendido (4.10–15)
- `BiblicalQuote` 4.10 e 4.13–14.
- O padrão literário de João, agora nomeado (segunda ocorrência): Jesus fala em outra camada, o interlocutor entende literal. Nicodemos: "nascer de novo? voltar ao ventre?" A samaritana: "água viva? o senhor nem tem balde."
- Ideia visual: duas camadas de texto — a frase literal em cima, em tinta comum; a camada real surgindo por baixo, em dourado (mesmo efeito de tradução usado na Lição 8).
- *Hydōr zōn* — "água corrente" no uso comum; vida do Espírito no uso de Jesus (cf. 7.38–39).

### Slide64 — "Chama teu marido" (4.16–19)
- A virada da conversa. Ele vê tudo — cinco maridos, o atual que não é — e diz a verdade **sem ironia e sem desprezo**. Ela não foge; reconhece: "vejo que és profeta."
- Linha central (slide quieto): **Ser completamente conhecida e, ainda assim, não ser descartada.**
- *Nota do apresentador:* aqui NÃO explicar a frase central. Ler e deixar no ar. A Guga é terapeuta — ela sabe o que é ser depositária da história inteira de alguém. Se ela quiser falar, ela fala.

### Slide65 — "Nem neste monte, nem em Jerusalém" (4.20–24)
- A pergunta dela é a pergunta clássica: **qual é o lugar certo?** Gerizim ou Jerusalém?
- `BiblicalQuote` 4.21, 23–24: "...nem neste monte, nem em Jerusalém adorareis o Pai... os verdadeiros adoradores adorarão o Pai em espírito e em verdade."
- Ideia visual: dois montes em silhueta (Gerizim à esquerda, Sião à direita), e a resposta de Jesus atravessando o vale entre eles em dourado.
- Ponto: Jesus não responde "qual endereço está certo". Ele dissolve a categoria. Adoração verdadeira não é uma questão de prédio, monte ou instituição — é espírito e verdade.
- *Nota do apresentador:* este slide responde, sem nomear, à frase do Marcel ("você não foi a uma igreja, foi a um culto"). NÃO fazer a ponte explicitamente. Se a Guga fizer sozinha — e ela provavelmente vai — acolher e deixar ela elaborar. O texto faz o trabalho.

### Slide66 — "Eu sou, eu que falo contigo" (4.25–26)
- Ela: "Sei que o Messias vem." Ele: *Egō eimi, ho lalōn soi.*
- Grego em destaque: **ΕΓΩ ΕΙΜΙ** — a primeira autorrevelação direta de Jesus no evangelho.
- E a quem? Não ao Sinédrio, não a Nicodemos, não em Jerusalém — a uma mulher samaritana de vida quebrada, ao meio-dia, num poço.
- *Nota:* plantar discretamente que esse *Egō eimi* vai voltar (6.20, 8.58, 18.5) — é um fio do evangelho inteiro.

### Slide67 — O cântaro deixado (4.28–30)
- `BiblicalQuote` 4.28–29: "Deixou, pois, a mulher o seu cântaro, foi à cidade e disse: Vinde ver um homem que me disse tudo quanto tenho feito."
- Ideia visual: o cântaro sozinho na boca do poço — o objeto que ela veio buscar, abandonado, porque achou coisa melhor.
- Detalhe fino: o convite dela ("Vinde ver") é o mesmo de Jesus aos primeiros discípulos em 1.39 ("Vinde e vede" — Movimento II). A outsider usa o vocabulário do Mestre.

### Slide68 — Fé de primeira mão (4.39–42)
- A cidade crê primeiro "por causa da palavra da mulher" — e dois dias depois: "já não é pelo que disseste; nós mesmos temos ouvido e sabemos que este é verdadeiramente o Salvador do mundo."
- Ponto: o testemunho abre a porta; o encontro pessoal sustenta a fé. Fé emprestada vira fé própria.
- *Nota do apresentador:* é exatamente o arco que a própria Guga está vivendo — do testemunho do Ricky para a experiência própria dela na comunidade. NÃO dizer isso. Só saber.

### Slide69 — O segundo sinal (4.46–54)
- De volta a **Caná** — fecho de arco com o Movimento III (o vinho). O oficial do rei, o filho morrendo em Cafarnaum.
- "Vai, o teu filho vive" — e o homem **creu na palavra e foi**, sem ver nada ainda. A febre o deixou na hora exata.
- Ponto: em Caná, Jesus cuidou de um constrangimento de festa; aqui, de um pai desesperado. O mesmo cuidado, do mínimo ao máximo — Ele não tem escala de "problemas que merecem atenção".
- *Nota:* retomar aqui o que ressoou com ela na sessão passada (o Deus das coisas mínimas). Este slide fecha esse arco de propósito.

### Slide70 — Aterrissagem do Movimento V
- Quatro perguntas abertas (`SectionLabel` + lista quieta, sem respostas):
  1. Por que João colocou Nicodemos e a samaritana lado a lado?
  2. O que muda quando quem sabe tudo sobre você é também quem não te descarta?
  3. "Nem neste monte, nem em Jerusalém" — o que isso faz com a pergunta "qual é a igreja certa?"
  4. O que essa mulher tinha que a tornou a primeira missionária do evangelho?

---

## MOVIMENTO VI — BETESDA (João 5) · Slides 71–81 · acento wine

### Slide71 — Abertura do Movimento VI
- `RomanNumeral` "VI", `QuietTitle`: **Betesda**
- Subtítulo: João 5 · Jerusalém, um tanque, trinta e oito anos
- Ideia visual: cinco traços verticais finos (os cinco pórticos), geometria austera — aqui o clima muda; o vinho e a água ficam para trás, começa o conflito.

### Slide72 — O tanque que existia (5.1–3)
- `HonestyCard` central (este slide É o honesty card): por séculos, críticos apontaram os "cinco pórticos" de João 5.2 como prova de que o autor nunca esteve em Jerusalém — nenhum tanque conhecido tinha cinco lados. No século XIX/XX, escavações ao lado da igreja de Santa Ana encontraram o tanque duplo de Betesda — **com os cinco pórticos** (quatro em volta, um atravessando o meio). Pode pesquisar: "Pool of Bethesda excavation".
- Linha de fechamento: João descrevia de memória um lugar que deixou de existir em 70 d.C. — e a terra confirmou.
- *Nota:* apresentar como "tensão que virou confirmação", no padrão honesto do curso: nem toda descoberta resolve a nosso favor, esta resolveu.

### Slide73 — Trinta e oito anos (5.5–6)
- `BiblicalQuote` 5.6: "Jesus, vendo-o deitado e sabendo que estava assim há muito tempo, perguntou: **Queres ser curado?**"
- Slide quieto, a pergunta em destaque máximo.
- Não é pergunta retórica. Trinta e oito anos constroem uma identidade inteira ao redor da enfermidade. A cura desorganiza uma vida organizada em torno da dor.
- *Nota do apresentador:* esta é A pergunta do capítulo para uma psicanalista. Não explicar — perguntar a ela: "por que Jesus pergunta isso a alguém doente há 38 anos?" e deixar ela trabalhar. Provavelmente rende meia hora sozinha.

### Slide74 — A resposta torta e a cura seca (5.7–9a)
- O homem não responde "sim". Responde com a queixa: "não tenho ninguém que me ponha no tanque."
- Jesus ignora o tanque, o anjo, a água que se agita — nada de ritual: "Levanta-te, toma o teu leito e anda." E ele andou.
- Ponto: a cura não passa pelo mecanismo em que o homem depositava a esperança. Passa pela palavra.

### Slide75 — "E era sábado" (5.9b–16)
- A frase que João solta no fim do versículo, quase de passagem — e que incendeia tudo.
- A sequência: os líderes não perguntam "quem te curou?", perguntam "quem te mandou carregar o leito?". O milagre não os interessa; a infração sim.

### Slide76 — "Meu Pai trabalha até agora" (5.17–18)
- `BiblicalQuote` 5.17–18, com 5.18 em destaque: "...não somente violava o sábado, mas também dizia que Deus era seu próprio Pai, **fazendo-se igual a Deus**."
- O ponto decisivo do capítulo: a defesa de Jesus não é "essa cura era permitida". É infinitamente maior: *o que o meu Pai faz, eu faço*. Os adversários entendem perfeitamente o tamanho da afirmação — por isso querem matá-lo.
- Em João, o sábado não é o tema; é o palco. O tema é **quem Jesus afirma ser**.
- *Nota do apresentador — IMPORTANTE:* resistir ao reflexo de transformar este slide em aula sobre observância do sábado. A pergunta do encontro não é "deve-se guardar?", é "o que Jesus está reivindicando sobre si mesmo?". A conversa sobre o sábado como prática vem muito depois, organicamente — e ela já está vivendo isso na igreja, que é o melhor professor possível.

### Slide77 — O Filho faz o que o Pai faz (5.19–23)
- Três afirmações em escada (visual de três degraus, traço fino):
  - o Filho só faz o que vê o Pai fazer (5.19)
  - o Pai entregou todo o julgamento ao Filho (5.22)
  - quem não honra o Filho não honra o Pai (5.23)
- Ponto: ou isso é verdade, ou é a maior blasfêmia já dita. Não existe leitura morna de João 5.

### Slide78 — "Passou da morte para a vida" (5.24)
- `BiblicalQuote` 5.24, slide quieto.
- O verbo no perfeito: *metabébēken* — **já passou**. Vida eterna em João não é prêmio futuro; é estado presente de quem ouve e crê.

### Slide79 — As quatro testemunhas (5.31–40)
- Estrutura forense (eco direto do Movimento II — "Testemunhas"): Jesus, acusado, apresenta seu rol:
  1. João Batista (5.33–35)
  2. As próprias obras (5.36)
  3. O Pai (5.37–38)
  4. As Escrituras (5.39)
- Ideia visual: quatro selos/cartões em linha, padrão dos critérios da Lição 6.

### Slide80 — "E não quereis vir a mim" (5.39–40)
- `BiblicalQuote` 5.39–40: "Examinais as Escrituras, porque julgais ter nelas a vida eterna, e são elas mesmas que testificam de mim; contudo, **não quereis vir a mim** para terdes vida."
- Ponto: dá para conhecer o texto de cor e errar a pessoa de quem o texto fala. A Bíblia é janela, não destino — eco direto da Lição 14 (Cristo como centro).

### Slide81 — Aterrissagem do Movimento VI
- Perguntas abertas:
  1. "Queres ser curado?" — por que essa pergunta precisa ser feita?
  2. O que muda quando a discussão deixa de ser sobre a regra e passa a ser sobre quem Ele é?
  3. É possível estudar a Escritura a vida inteira e não encontrar Deus nela? Como?

---

## MOVIMENTO VII — O PÃO (João 6) · Slides 82–94 · acento gold

### Slide82 — Abertura do Movimento VII
- `RomanNumeral` "VII", `QuietTitle`: **O Pão**
- Subtítulo: João 6 · Galileia, perto da Páscoa
- Ideia visual: um pão redondo partido ao meio, traço simples, com migalhas douradas mínimas.

### Slide83 — O único milagre dos quatro (6.1–13)
- Abertura factual: a multiplicação é o **único milagre narrado pelos quatro evangelhos**. Detalhes só de João: a Páscoa próxima (6.4), o menino com cinco pães de cevada (pão de pobre) e dois peixinhos, Filipe e André nomeados.
- Os doze cestos — nada se perde (eco discreto de 6.39).

### Slide84 — O rei errado (6.14–15)
- A multidão entende o sinal pela metade: "este é verdadeiramente o profeta" → querem **fazê-lo rei à força**.
- E Jesus foge sozinho para o monte. Ele recusa exatamente o trono que ofereceriam.
- Ponto: há um jeito de querer Jesus que erra Jesus — querê-lo pelo que Ele distribui, não pelo que Ele é. O capítulo inteiro vai desenvolver isso.

### Slide85 — "Eu sou; não temais" (6.16–21)
- A travessia, o mar agitado, e a palavra sobre as águas: *Egō eimi, mē phobeisthe.*
- Segunda ocorrência do *Egō eimi* (fio plantado no Slide66). No grego, a frase ecoa o nome do Sinai — e João deixa a ambiguidade de pé.

### Slide86 — "Trabalhai não pela comida que perece" (6.22–27)
- A multidão atravessa o mar atrás dele. Jesus, direto: "vós me buscais não porque vistes sinais, mas porque comestes dos pães."
- O capítulo vira: do milagre ao significado. Eles querem mais pão. Ele vai oferecer outra coisa.

### Slide87 — Maná: o pano de fundo (6.30–33)
- Eles pedem credencial: "Moisés deu o maná; e tu?" (com a Páscoa no calendário, o Êxodo está no ar do capítulo inteiro).
- A correção de Jesus em duas camadas: não foi *Moisés* — foi *o Pai*; e o pão verdadeiro não *foi dado* — *está sendo dado* agora.
- Visual: o efeito de duas camadas/tradução (mesmo do Slide63).

### Slide88 — "EU SOU o pão da vida" (6.35)
- `BiblicalQuote` 6.35, slide de peso máximo do movimento.
- O primeiro dos sete **"Eu Sou"** com predicado do evangelho.
- Ideia visual (assinatura do movimento): os sete "Eu Sou" em pequenas lâmpadas/medalhões em linha na base do slide — apenas o primeiro aceso em dourado, os outros seis em silhueta. (Este componente volta nos próximos encontros, acendendo um a um.)

### Slide89 — "De modo nenhum o lançarei fora" (6.37)
- `BiblicalQuote` 6.37: "Todo aquele que o Pai me dá, esse virá a mim; e **o que vem a mim, de modo nenhum o lançarei fora**."
- Slide quieto. Sem prosa, sem nota visível. Só o texto, centrado, com a dupla negação grega (*ou mē ekbalō exō*) marcada discretamente: a negação mais enfática que a língua permite.
- *Nota do apresentador:* não comentar. Ler devagar e dar silêncio. Se houver um versículo neste encontro que pode encostar na pergunta antiga dela ("por que Deus nunca me ajudou?"), é este — mas ele só funciona se ninguém apontar para ele.

### Slide90 — A linguagem dura (6.52–58)
- "Como pode este dar-nos a comer a sua carne?" — Jesus não suaviza; intensifica (o verbo muda para *trōgein*, mastigar).
- Duas leituras honestas lado a lado (`IntertextPair`): a eucarística (a linguagem aponta para a Ceia) e a metafórica-cristológica (assimilar Cristo pela fé, cf. 6.35: vir = comer, crer = beber). João escreve depois da Ceia existir — as camadas convivem.
- *Nota:* honestidade acadêmica padrão do curso; não fechar a questão.

### Slide91 — "Isto vos escandaliza?" (6.60–66)
- `BiblicalQuote` 6.66: "À vista disso, **muitos dos seus discípulos voltaram atrás** e já não andavam com ele."
- O verso mais triste do capítulo — e a honestidade brutal de João em registrá-lo. Jesus perde a multidão de propósito: ele se recusa a ser o distribuidor de pão que queriam.
- Fé que não custa nada não era o que Ele veio oferecer.

### Slide92 — "Para quem iremos?" (6.67–69)
- Jesus, aos Doze: "Vós também quereis retirar-vos?"
- Pedro: "Senhor, **para quem iremos?** Tu tens as palavras de vida eterna."
- Ponto: repare no que Pedro NÃO diz. Não diz "entendemos tudo". A linguagem dura escandalizou os Doze também. Fé madura não é ausência de perplexidade — é, no meio dela, saber que não existe lugar melhor para onde ir.
- *Nota do apresentador:* âncora pastoral do movimento. Para alguém que ainda diz "jamais acreditarei que o Mar Vermelho abriu", a fé de Pedro é um modelo habitável: dá para ficar com Jesus carregando perguntas.

### Slide93 — O arco dos três capítulos
- Recapitulação visual em três medalhões (água · cura · pão), um por movimento:
  - **João 4** — Ele dá água a quem o mundo descartou
  - **João 5** — Ele levanta quem desistiu há 38 anos
  - **João 6** — Ele se dá como pão, e não como troféu
- Linha de fechamento: três cenas, uma pergunta — *quem é este?*

### Slide94 — Encerramento
- Slide final quieto, padrão dos encerramentos: a pergunta do curso ("Qual passagem está começando a virar sua?"), espaço, e a indicação da próxima leitura: **João 7–8**.
- Sem oração impressa — a oração é ao vivo.

---

## NOTAS GERAIS PARA O AGENTE

1. **Não criar quiz.** A fase João não usa o quiz sim/não/talvez das lições — é modelo de encontro.
2. **Densidade:** seguir o ritmo dos slides existentes do encontro-1 — uma ideia por slide, BiblicalQuote dominante, prosa mínima. Na dúvida, cortar texto.
3. **Animações:** entrada padrão do deck (fade + y). Efeitos especiais apenas onde indicado (camadas de tradução nos Slides 63 e 87; strikethrough no 62; medalhões dos "Eu Sou" no 88).
4. **As "Notas do apresentador" deste roteiro NÃO entram nos slides.** São exclusivas do Ricky.
5. **Componente novo reutilizável:** o medalhão dos sete "Eu Sou" (Slide88) deve ser exportado de `shared.jsx` (ex.: `EuSouProgress({ lit: 1 })`) — será reutilizado nos próximos encontros com mais lâmpadas acesas.