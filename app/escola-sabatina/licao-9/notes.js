// ============================================================
// FONTE ÚNICA DO ROTEIRO — Escola Sabatina · Lição 9
// "Pecado, Evangelho e Lei"
//
// Esta é a fonte da verdade do conteúdo falado. Os slides são a
// "manchete"; aqui mora o "artigo" (profundidade exegética,
// grego/hebraico, história, contra-argumentos).
//
// A página /apresentador lê este arquivo e renderiza como um
// texto único, rolável, com fonte grande para o celular.
//
// Shape de cada nota:
//   {
//     title:    string,          // título do slide
//     lead:     string,          // a "batida" do slide em uma frase
//     script:   string[],        // o que dizer (parágrafos)
//     depth?:   { label, text }[] // asides densos (grego, história, EGW...)
//   }
// ============================================================

export const lessonMeta = {
    lesson: 'Lição 9',
    title: 'Pecado, Evangelho e Lei',
    week: 'Semana de 23 a 29 de maio',
};

export const movements = [
    { roman: '·', label: 'Abertura', from: 1, to: 3 },
    { roman: 'I', label: 'O Pecado', from: 4, to: 8 },
    { roman: 'II', label: 'A Lei', from: 9, to: 13 },
    { roman: 'III', label: 'O Evangelho', from: 14, to: 19 },
    { roman: 'IV', label: 'A Polêmica', from: 20, to: 28 },
    { roman: 'V', label: 'O Tribunal', from: 29, to: 32 },
];

export const notes = {
    // ───────────────────────── ABERTURA ─────────────────────────
    1: {
        title: 'Pecado, Evangelho e Lei',
        lead: 'A semana que junta as três palavras mais decisivas da fé — e a ordem entre elas muda tudo.',
        script: [
            'Bom sábado a todos. O tema da semana junta três palavras que, postas na ordem errada, já dividiram igrejas inteiras: pecado, evangelho e lei. A própria sequência do título é proposital — e nós vamos respeitá-la o tempo todo.',
            'Já aviso, com franqueza: esta vai ser uma aula um pouco mais densa, e num ponto da semana — a lição de quinta-feira — vou pedir licença para discordar do enquadramento que ela deu. Não por gosto de polêmica, mas porque o assunto exige precisão. Quando a gente erra a relação entre lei e evangelho, erra o coração do cristianismo.',
            'A boa notícia é que a própria lição nos entrega o gancho para corrigir o rumo — a pergunta 4 de sexta-feira. Guardem isso; vamos chegar lá no fim, e ela vai amarrar tudo.',
        ],
        depth: [
            { label: 'Mapa da aula', text: 'Cinco movimentos: I) O Pecado (o diagnóstico); II) A Lei (o espelho que revela mas não lava); III) O Evangelho (o que a lei não pôde fazer); IV) A Polêmica (o nó de quinta); V) O Tribunal (em que você confia no juízo). O arco vai do diagnóstico à absolvição — pecado, depois evangelho, e só então o lugar certo da lei.' },
        ],
    },
    2: {
        title: 'Verso para memorizar (Sl 119:93, 94)',
        lead: 'A ordem do salmista já prega o evangelho: primeiro "salva-me", depois "busco os preceitos".',
        script: [
            'O verso para memorizar é do Salmo 119, o maior capítulo da Bíblia, inteiro dedicado à Palavra e à lei de Deus. Leiam com atenção a ordem: "Nunca me esquecerei dos teus preceitos, pois é por meio deles que me tens dado vida. Sou teu; salva-me, pois eu busco os teus preceitos."',
            'Reparem na sequência. O salmista não diz "guardo teus preceitos, portanto me salvo". Ele diz "salva-me" — pedido de graça — e então "busco teus preceitos". A salvação é a causa; a busca pela lei é a resposta. Essa é exatamente a ordem que vamos defender a aula inteira.',
            'E note: ele atribui a vida aos preceitos — não porque a lei dê vida por si mesma, mas porque a Palavra é o canal pelo qual Deus o sustenta. A lei aqui é amada, não temida. É um homem apaixonado pela lei justamente porque já se sabe salvo.',
        ],
        depth: [
            { label: 'Hebraico / estrutura', text: 'O Salmo 119 é um acróstico alfabético: 22 estrofes, uma para cada letra do alfabeto hebraico, 8 versos por letra (176 versos) — um poema de devoção exaustiva à tôrâ. "Preceitos" = piqqudîm; "vida" do verbo ḥāyâ. E a súplica "salva-me" = hôšîʿēnî, da raiz yāšaʿ — a mesma raiz de "Yeshua"/Jesus. Gramaticalmente é um imperativo dirigido a Deus (um pedido de socorro), nunca uma autoafirmação de mérito.' },
        ],
    },
    3: {
        title: 'O eixo da aula',
        lead: 'A tese inteira em três frases — e a ordem é tudo.',
        script: [
            'Vou condensar a aula inteira em três frases, e elas vão guiar tudo o que segue.',
            'Primeira: a lei me mostra o pecado — ela é diagnóstico, não cura. Segunda: o evangelho me salva dele — só a cruz faz o que a lei nunca pôde. Terceira: a obediência é o fruto, nunca o preço — eu guardo a lei porque fui salvo, não para ser salvo.',
            'Se a gente sair daqui com essas três frases na ordem certa, a aula cumpriu seu papel. Tudo o que vem agora é só desenvolvimento disto.',
        ],
        depth: [
            { label: 'Por que a ordem importa', text: 'Inverter a terceira frase ("obedeço para ser salvo") é a definição de legalismo. Manter a ordem ("fui salvo, por isso obedeço") é o evangelho. As três frases reaparecem no Tribunal (Mov. V): no juízo, confio na obra que a lei diagnosticou em mim, ou na justiça que o evangelho me deu?' },
        ],
    },

    // ───────────────────────── MOV. I ─────────────────────────
    4: {
        title: 'Movimento I — O Pecado',
        lead: 'Antes do remédio, o diagnóstico que ninguém quer ouvir.',
        script: [
            'Nenhum tratamento sério começa sem diagnóstico. E o diagnóstico da Bíblia sobre a condição humana é duro: pecado. A cultura banalizou a palavra, mas a Escritura a leva muito a sério — porque é o pecado que rompe o relacionamento que esta lição inteira quer restaurar.',
            'Neste primeiro movimento vamos olhar o pecado por três ângulos: o que ele faz (separa), como ele entra (pela autoconfiança e pelos flancos do coração) e o quanto Jesus o leva a sério.',
        ],
    },
    5: {
        title: 'O pecado separa (Is 59:2)',
        lead: 'Pecado não é só uma falha de comportamento — é uma separação.',
        script: [
            'A definição de pecado nesta lição é, antes de tudo, relacional. Isaías 59:2: "as vossas iniquidades fazem separação entre vós e o vosso Deus." O problema central do pecado não é jurídico antes de ser relacional: ele corta a comunhão.',
            'Por isso a lição diz que o pecado nos engana, fere, consome e por fim destrói. Não é uma lista de proibições arbitrárias; é a descrição de algo que de fato quebra a pessoa por dentro e a afasta da fonte da vida.',
            'E há um diagnóstico cultural junto: banalizamos o pecado porque a sociedade se acostumou com ele. Quanto mais confortáveis ficamos com ele, mais naturalizada fica a separação — e mais longe ficamos de um relacionamento saudável com Deus.',
        ],
        depth: [
            { label: 'Hebraico', text: '"Iniquidades" = ʿăwōnōt, de ʿāwâ, "torcer, entortar" — o pecado como distorção do que era reto. A ideia de "separação" ecoa a raiz bādal, "dividir, apartar" — o mesmo campo semântico de Gênesis 1, onde Deus "separa" luz e trevas. A ironia: o pecado desfaz comunhão usando a mesma lógica do verbo que, na criação, ordenava o cosmos.' },
            { label: 'NT', text: 'No grego, o termo dominante para pecado é hamartía — literalmente "errar o alvo" (metáfora do arqueiro). Pecar não é só praticar o mal positivo; é falhar o alvo para o qual fomos criados: a comunhão com Deus. A separação de Is 59:2 é exatamente esse alvo perdido.' },
        ],
    },
    6: {
        title: 'Sansão e a autoconfiança',
        lead: 'Sansão caiu não por fraqueza, mas por se achar forte.',
        script: [
            'O domingo da lição usa Sansão. Ele tinha tudo: chamado divino, força sobrenatural, um voto especial. E mesmo assim caiu — não por falta de poder, mas por excesso de autoconfiança. Confiou na própria força para administrar a tentação, e a tentação o administrou.',
            'A lição é certeira para um público religioso: o inimigo conhece nossas fraquezas e mira exatamente nelas. E a queda quase nunca é um salto; é uma erosão. Dalila não derrubou Sansão num dia.',
            'Paulo resume isso em 1 Coríntios 10:12: "aquele que pensa estar em pé, veja que não caia." A autoconfiança espiritual é o terreno onde o pecado planta melhor — e é o oposto da dependência da graça que o resto da aula vai pregar.',
        ],
        depth: [
            { label: 'Contexto', text: 'Sansão era nazireu desde o ventre (Juízes 13; o voto está em Números 6): sem vinho, sem contato com mortos, sem cortar o cabelo. O cabelo não era mágico — era o sinal visível de uma consagração. Ao entregá-lo (Jz 16:17), ele não perdeu um truque; rompeu o sinal da aliança que sustentava o dom. A frase mais trágica do texto é Jz 16:20: "ele não sabia que o Senhor se tinha retirado dele."' },
        ],
    },
    7: {
        title: 'Barreiras (Sermão do Monte)',
        lead: 'O pecado raramente entra pela porta da frente; entra pelos flancos do coração.',
        script: [
            'A segunda-feira lista barreiras tiradas do Sermão do Monte, e todas têm algo em comum: são pecados "respeitáveis", que cabem dentro da igreja. Vaidade espiritual, cobiça, julgamento dos outros, ódio disfarçado, ira justificada.',
            'O ponto de Jesus no Sermão é exatamente esse: a lei não se cumpre só por fora. "Ouvistes que foi dito... eu, porém, vos digo" — e Ele leva cada mandamento para dentro, para o nível da intenção e do desejo. O assassinato começa na ira; o adultério, no olhar.',
            'Ou seja: ninguém escapa por bom comportamento externo. Quando a lei desce ao coração, todos somos pegos. E é aí que ela faz seu melhor trabalho — nos preparar para o evangelho.',
        ],
        depth: [
            { label: 'Mt 5 — a tese', text: 'A chave do Sermão é Mt 5:20: "se a vossa justiça não exceder a dos escribas e fariseus, de modo nenhum entrareis no reino." Os fariseus eram impecáveis por fora. Jesus eleva o padrão ao coração justamente para tornar impossível a auto-justiça — e necessária a graça. As "antíteses" (Mt 5:21-48) interiorizam a lei e demolem a ilusão de que se cumpre a lei só com as mãos.' },
        ],
    },
    8: {
        title: 'Corta a mão (Mc 9:43-47)',
        lead: 'Jesus leva o pecado tão a sério que usa a imagem mais chocante possível.',
        script: [
            'Marcos 9: "se a tua mão te faz tropeçar, corta-a; se o teu olho te faz tropeçar, lança-o de ti." É hipérbole — Jesus não está prescrevendo automutilação — mas é hipérbole com propósito. Ele quer que a gente sinta o peso real do pecado.',
            'O contraste com a banalização de hoje não poderia ser maior. Enquanto a cultura relativiza, Jesus diz: melhor entrar maneta no Reino do que inteiro na geena. A linguagem é desconfortável de propósito.',
            'Guardem essa seriedade. Porque um pecado tão grave a ponto de merecer essa linguagem vai exigir uma solução à altura — e essa solução não vai ser a nossa mão cortada. Vai ser a cruz. É para lá que estamos caminhando.',
        ],
        depth: [
            { label: 'Geena', text: '"Inferno" aqui traduz geena (Gê-Hinnom), o vale ao sul de Jerusalém associado a sacrifícios infantis no AT (Jr 7:31) e, na tradição, a um lixão em fogo perpétuo. Jesus usa um lugar geográfico real e amaldiçoado como imagem do juízo. Na leitura adventista, a geena aponta para a destruição final do pecado (Ap 20), não para tormento eterno consciente — mas aqui o foco de Jesus é a gravidade, não a duração.' },
        ],
    },

    // ───────────────────────── MOV. II ─────────────────────────
    9: {
        title: 'Movimento II — A Lei',
        lead: 'A lei é um espelho: indispensável para ver a sujeira, incapaz de lavá-la.',
        script: [
            'Se o pecado é a doença, a lei é o exame que a revela. Este movimento define o que a lei faz — e, igualmente importante, o que ela não faz.',
            'A imagem-guia é o espelho. Um espelho é precioso: sem ele você não enxerga a mancha no rosto. Mas ninguém lava o rosto no espelho. Guardem essa distinção; ela é a chave de toda a semana e o que vai desmontar o legalismo lá na frente.',
        ],
    },
    10: {
        title: 'O que é pecado (Rm 3:20; 1Jo 3:4)',
        lead: 'A Bíblia tem uma definição precisa de pecado — e ela depende da lei.',
        script: [
            'Como vocês explicariam "pecado" a alguém de fora? A Bíblia é objetiva: 1 João 3:4 — "o pecado é a transgressão da lei." E Romanos 3:20 — "pela lei vem o conhecimento do pecado."',
            'Isso tem uma consequência importante: sem a lei, o pecado fica invisível. É a lei que dá nitidez, que nomeia, que tira o pecado da névoa do "todo mundo faz" e o coloca sob luz. Tira a lei, e o pecado vira só "um jeito de ser".',
            'Mas — e aqui está o limite — Romanos 3:20 começa dizendo que "ninguém será justificado pela lei". No mesmo verso em que a lei brilha como diagnóstico, Paulo nega que ela salve. Ela mostra; não cura. Segurem essa fronteira, porque é nela que o evangelho vai entrar.',
        ],
        depth: [
            { label: 'Grego', text: '1Jo 3:4: "o pecado é a anomía" — literalmente "a ausência de lei", a ilegalidade (a mesmíssima palavra que reaparece no clímax, Mt 7:23, "vós que praticais a anomía"). Rm 3:20: "epígnōsis hamartías" — epígnōsis é conhecimento pleno, reconhecimento. A função da lei aqui é diagnóstica, não salvífica. Paulo retoma em Rm 7:7: "eu não conheceria o pecado senão pela lei... não conheceria a cobiça se a lei não dissesse: não cobiçarás."' },
        ],
    },
    11: {
        title: 'A lei como espelho',
        lead: 'Um espelho mostra a sujeira; nunca consegue lavá-la.',
        script: [
            'A imagem do espelho não é invenção minha — é de Tiago. Tiago 1:23-25 compara quem ouve a Palavra e não a pratica a um homem que se olha no espelho e logo esquece a própria cara.',
            'O espelho faz duas coisas que a lição destaca: como óculos, traz clareza — você vê o mundo e a si mesmo com nitidez; como espelho, mostra quem você realmente é, por dentro. Os dois revelam.',
            'Mas aqui está o ponto em torno do qual a aula inteira gira: o espelho denuncia a mancha e é completamente incapaz de removê-la. Quem tenta se limpar esfregando o rosto no espelho só quebra o espelho. É exatamente isso que o legalismo tenta fazer com a lei — usar o diagnóstico como se fosse o remédio.',
        ],
        depth: [
            { label: 'Tg 1:23-25', text: 'Tiago chama a lei de "lei da liberdade" (nómos eleutherías) — não um fardo, mas algo que liberta quando recebido junto com a graça. A crítica dele não é a quem se olha no espelho, e sim a quem se olha e "esquece" — ouve o diagnóstico e não busca a cura. O espelho funcionou; a pessoa é que ignorou o que viu.' },
        ],
    },
    12: {
        title: 'Os dois grandes mandamentos',
        lead: 'A lei inteira pende de dois ganchos — e ambos são amor.',
        script: [
            'Quando perguntam a Jesus qual o maior mandamento, Ele não escolhe um dos dez; Ele dá a chave de leitura de todos: amar a Deus de todo o coração e amar o próximo como a si mesmo. "Destes dois mandamentos depende toda a lei e os profetas" (Mt 22:40).',
            'Isso reorganiza tudo. Os Dez Mandamentos não são dez regras avulsas; são dez maneiras de amar — quatro voltadas a Deus, seis voltadas ao próximo. A lei é, na sua essência, a gramática do amor.',
            'Por isso Paulo pode dizer que "o amor é o cumprimento da lei" (Rm 13:10). Não que o amor dispense a lei, mas que a lei descreve como o amor se comporta na prática. Quem ama do jeito certo já está guardando a lei.',
        ],
        depth: [
            { label: 'Intertexto', text: 'Jesus cita Dt 6:5 (o Shemá, a confissão diária de Israel) e Lv 19:18, unindo os dois como nenhum rabino antes havia consolidado tão diretamente. "Depende" = kremátai, "está pendurado": toda a Torá pende desses dois pregos. Rm 13:8-10 e Gl 5:14 ecoam o mesmo — o amor não anula os mandamentos; ele os realiza.' },
        ],
    },
    13: {
        title: 'A lei não é fardo (1Jo 5:3)',
        lead: 'A lei não é um peso — Satanás e o legalismo é que a fizeram parecer um.',
        script: [
            'Há uma distorção antiga: ver a lei como peso, como prisão. A Bíblia diz o contrário: 1 João 5:3 — "este é o amor de Deus: que guardemos os seus mandamentos; e os seus mandamentos não são pesados."',
            'Quem fez a lei parecer pesada não foi Deus. Foi, de um lado, o inimigo, distorcendo a beleza dela; e de outro, o legalismo religioso, que a transformou num sistema de mérito impossível. Jesus denunciou isso nos fariseus: "atam fardos pesados e os põem aos ombros dos homens" (Mt 23:4).',
            'A lei de Deus, recebida do jeito certo — dentro de um relacionamento de amor — é proteção, não cadeia. É o muro que protege o jardim, não a grade que aprisiona. E essa é a última peça antes de virarmos a chave para o evangelho.',
        ],
        depth: [
            { label: 'Contraste', text: '1Jo 5:3 "não são pesados" = ou bareîai. Jesus inverte a mesma imagem em Mt 11:30: "o meu jugo é suave e o meu fardo (phortíon) é leve", em oposição direta aos "fardos pesados (phortía baréa)" dos fariseus (Mt 23:4). A diferença entre lei-como-peso e lei-como-leveza não está na lei, mas em quem a carrega com você: a graça de Cristo.' },
        ],
    },

    // ───────────────────────── MOV. III ─────────────────────────
    14: {
        title: 'Movimento III — O Evangelho',
        lead: 'Agora, o que a lei nunca pôde fazer.',
        script: [
            'Chegamos ao coração positivo da aula. Se a lei só diagnostica, alguém precisa curar. Esse alguém é o evangelho — e este movimento traça precisamente a fronteira entre o que a lei faz e o que só a cruz faz.',
            'Prestem atenção no contraste deste bloco, porque é ele que prepara a polêmica de quinta: tudo o que a lei é incapaz de fazer, o evangelho faz de graça.',
        ],
    },
    15: {
        title: 'A lei só condena',
        lead: 'Diante de Deus, a lei só sabe fazer uma coisa: condenar.',
        script: [
            'Aqui está a frase mais importante da quarta-feira, e quero que ela soe forte: em termos da nossa posição diante de Deus, a lei apenas condena. Ela nunca perdoa, nunca justifica, nunca expia.',
            'Isso não é desprezo pela lei — é entender a função dela. Um termômetro mostra a febre; não a cura. A lei é um termômetro perfeito e um remédio nulo. Ela revela por que precisamos de perdão, de justificação, de expiação — e então se cala, porque não pode dar nenhuma das três.',
            'Guardem a palavra "condenar". No fim da aula, lá no Tribunal, ela vai reaparecer transformada — e o contraste vai ser o ponto alto do fecho.',
        ],
        depth: [
            { label: 'Paulo', text: '2Co 3:7-9 chama a lei (gravada em pedras) de "ministério da condenação" (diakonía tês katakríseōs) e "ministério da morte", em contraste com o "ministério da justiça" e do Espírito. Gl 3:10: "todos os que confiam nas obras da lei estão debaixo de maldição", porque a lei exige cumprimento perfeito (Dt 27:26). A lei é santa (Rm 7:12); o problema não é a lei — somos nós.' },
        ],
    },
    16: {
        title: 'Perdão, justificação, expiação',
        lead: 'O evangelho faz as três coisas que a lei jamais poderia.',
        script: [
            'Onde a lei se cala, o evangelho fala três palavras. Perdão: Deus, fiel e justo, nos perdoa e purifica (1 João 1:9). Justificação: somos declarados justos gratuitamente, pela graça, mediante a redenção em Cristo (Romanos 3:24). Expiação: Cristo é a propiciação pelo nosso pecado, no seu sangue (Romanos 3:25).',
            'Reparem que as três são ações de Deus em nosso favor, não realizações nossas. A lei aponta o problema com precisão; o Calvário paga a conta integralmente. É essa divisão de trabalho que precisa ficar cristalina — porque é justamente ela que a leitura de quinta embaralha.',
        ],
        depth: [
            { label: 'Vocabulário', text: '"Justificar" = dikaióō, termo de tribunal: declarar juridicamente justo (não "tornar bonzinho"). "Propiciação" = hilastḗrion (Rm 3:25), a mesma palavra da LXX para o propiciatório, a tampa da arca aspergida com sangue no Dia da Expiação (Lv 16). "Redenção" = apolýtrōsis, o resgate pago para libertar um escravo ou cativo. Três termos de mundos diferentes — jurídico, cultual e comercial — que convergem todos na cruz.' },
        ],
    },
    17: {
        title: 'A Cruz — "Está consumado"',
        lead: 'A palavra que fecha a conta. Slide de silêncio.',
        script: [
            '(Slide de silêncio. Deixe a cruz e a frase respirarem alguns segundos antes de falar.)',
            'Na cruz, Jesus disse uma palavra que em grego é uma só: tetélestai. "Está consumado." Não é um gemido de derrota; é um grito de conclusão.',
            'Era a palavra que se escrevia sobre uma dívida quando ela era totalmente quitada: "pago". Quando Cristo diz "está consumado", a conta que a lei nos apresentou — e que nunca poderíamos pagar — foi paga integralmente. Por isso todo o restante da aula é só desdobrar o que esse grito significa.',
        ],
        depth: [
            { label: 'Grego', text: 'tetélestai (Jo 19:30) está no tempo perfeito: ação concluída no passado com efeitos permanentes no presente — "foi consumado e permanece consumado". Papiros comerciais da época trazem tetélestai carimbado em recibos quitados, no sentido de "pago integralmente". A obra da salvação não está em andamento; está terminada. Não há nada a acrescentar — e essa é a sentença de morte do legalismo.' },
        ],
    },
    18: {
        title: 'Justificados pela fé (Rm 3:28)',
        lead: 'A palavra técnica do evangelho: justificação pela fé, à parte das obras.',
        script: [
            'Romanos 3:28 é a sentença que reorganizou a história da Igreja: "o homem é justificado pela fé, independentemente das obras da lei." Gálatas 2:16 repete três vezes, para não restar dúvida: não pelas obras da lei, mas pela fé em Cristo.',
            'A palavra "independentemente" é cirúrgica. A justificação não é fé mais obras; é fé à parte das obras. As obras virão — mas como fruto, depois, no lugar certo. No momento da justificação, elas não entram na conta.',
            'Foi essa frase que Lutero traduziu, e ela acendeu a Reforma. E, como veremos no próximo movimento, foi essa mesma verdade que o adventismo precisou reaprender em 1888.',
        ],
        depth: [
            { label: 'Grego / história', text: '"Justificado pela fé" = dikaioûsthai pístei; "à parte das obras da lei" = chōrìs érgōn nómou. O verbo que domina Rm 4 é logízomai (termo contábil, "creditar na conta"): a justiça de Cristo é creditada ao crente. Lutero acrescentou "somente" (allein) em sua tradução de Rm 3:28, defendendo que era exigência do sentido, não do texto. A fórmula sola fide nasce aqui.' },
        ],
    },
    19: {
        title: 'Não a minha justiça (Fp 3:9)',
        lead: 'A grande troca: a minha condenação por Ele, a justiça Dele por mim.',
        script: [
            'Filipenses 3:9 é o testemunho do homem que mais tinha currículo religioso para se gabar: "não tendo a minha própria justiça, que procede da lei, mas a que é mediante a fé em Cristo." Paulo troca o próprio currículo por uma justiça que não é dele.',
            'E Gálatas 3:13 explica o mecanismo: "Cristo nos resgatou da maldição da lei, fazendo-se ele mesmo maldição por nós." A maldição que a lei pronunciava sobre mim caiu sobre Ele; a justiça que era dele foi creditada a mim. Lutero chamou isso de "a admirável troca".',
            'Guardem essa imagem — escarlate trocado por neve, dívida trocada por crédito. Quando chegarmos ao Tribunal, é nessa troca que vamos descobrir em que confiar diante do Juiz.',
        ],
        depth: [
            { label: 'Grego / AT', text: '"Maldição" = katára; Gl 3:13 cita Dt 21:23 ("maldito todo aquele que for pendurado no madeiro"), aplicando-o à crucificação. A troca é dupla imputação: meu pecado a Ele (2Co 5:21 — "aquele que não conheceu pecado, ele o fez pecado por nós") e a justiça Dele a mim ("para que nele fôssemos feitos justiça de Deus"). É Isaías 1:18 em ação: o escarlate tornado branco como a neve.' },
        ],
    },

    // ───────────────────────── MOV. IV — CLÍMAX ─────────────────────────
    20: {
        title: 'Movimento IV — A Polêmica',
        lead: 'Aqui está o nó da semana. Vamos encará-lo de frente.',
        script: [
            'Chegamos ao ponto mais delicado da lição. A lição de quinta-feira, lida de forma plana, faz uma afirmação que precisa ser examinada com cuidado — porque, do jeito que está escrita, ela pode reintroduzir pela porta dos fundos exatamente aquilo que a quarta-feira tirou pela porta da frente: a ideia de que a minha obediência é a condição da minha salvação.',
            'Não vou suavizar o problema, nem fingir que a lição errou em tudo — a quarta-feira está excelente. Vou fazer o que um público que pensa merece: separar o que o texto bíblico diz daquilo que a aplicação da lição sugeriu, e mostrar que a própria Bíblia resolve a tensão.',
            'Um aviso de tom: o objetivo aqui não é "corrigir a lição" por esporte, nem criar polêmica. É honestidade exegética. A diferença entre levar a lei a sério e cair no legalismo é fininha — e essa diferença tem um nome: evangelho.',
        ],
    },
    21: {
        title: 'A frase de quinta',
        lead: 'Mateus 7:21 e a leitura que a lição fez dele.',
        script: [
            'Leiamos o verso: "Nem todo o que me diz: Senhor, Senhor! entrará no reino dos céus, mas aquele que faz a vontade de meu Pai." E a lição conclui, com estas palavras: "Jesus afirmou que o requisito para entrar no céu é fazer a vontade de Deus."',
            'O problema mora numa palavra: "requisito". Em teologia, "requisito" é linguagem de condição — algo que eu cumpro para obter um resultado. Se "fazer a vontade" é o requisito de entrada, então a entrada passa a depender do meu desempenho. E foi exatamente contra isso que Paulo escreveu Romanos e Gálatas.',
            'Então não vamos brigar com Jesus — vamos perguntar o que Ele quis dizer com "fazer a vontade do Pai". E a melhor pessoa para responder isso é o próprio Jesus, poucos capítulos depois, no Evangelho de João.',
        ],
        depth: [
            { label: 'Contexto', text: 'Mt 7:21 está no fecho do Sermão do Monte. O Sermão não é um manual de auto-salvação por desempenho moral; é o retrato da justiça do Reino que "excede a dos escribas e fariseus" (Mt 5:20) — uma justiça impossível sem graça. Não por acaso o Sermão abre com "bem-aventurados os pobres de espírito" (os que reconhecem que nada têm), não com "bem-aventurados os esforçados".' },
        ],
    },
    22: {
        title: 'Isso tem um nome',
        lead: 'Lida de forma plana, a frase reintroduz o legalismo.',
        script: [
            'Se "fazer" é o requisito de entrada, a salvação volta a depender de mim — e a justiça de Cristo, que foi o centro da quarta-feira, vira um detalhe decorativo. Isso tem nome: legalismo. É a tentativa de usar a própria obediência como moeda de aquisição diante de Deus.',
            'E o legalismo é traiçoeiro porque se veste de piedade. O legalista raramente nega Cristo; ele apenas, sutilmente, se acrescenta ao lado de Cristo: "Cristo mais a minha obediência". Paulo chama esse acréscimo de "outro evangelho" (Gl 1:6-9) — e ali ele não usa palavras gentis; usa "anátema".',
            'Por isso a pergunta certa não é "será que devo obedecer?" — claro que devo. A pergunta é: o que exatamente Jesus quis dizer com "fazer a vontade do Pai"?',
        ],
    },
    23: {
        title: 'A obra de Deus é crer',
        lead: 'O próprio Jesus define a "obra" que Deus pede.',
        script: [
            'Em João 6:28, uma multidão faz a Jesus a pergunta do legalista em estado puro: "Que faremos para realizar as obras de Deus?" — me dê a lista de tarefas. E Jesus responde, no verso 29: "A obra de Deus é esta: que creiais naquele que ele enviou."',
            'A resposta é cirúrgica. Eles perguntam no plural — "as obras" — e Jesus responde no singular — "a obra". Ele colapsa toda a lista de realizações religiosas numa coisa só: crer. A primeira e fundamental "obra" que Deus pede não é esforço — é fé.',
            'Logo, "fazer a vontade do Pai" começa em crer naquele que Ele enviou. A obediência não some do mapa — mas ela nasce depois da fé, como fruto dela, e nunca como pré-requisito dela.',
        ],
        depth: [
            { label: 'Grego', text: 'A multidão pergunta por tà érga (τὰ ἔργα, "as obras", plural). Jesus responde com tò érgon (τὸ ἔργον, "a obra", singular): "hína pisteúēte" — "que creiais". O verbo pisteúēte está no presente do subjuntivo: crer contínuo, uma confiança que permanece, não um clique pontual.' },
            { label: 'Paralelo joanino', text: 'Em Jo 6:40 Jesus reformula: "a vontade de meu Pai é que todo aquele que vê o Filho e nele crê tenha a vida eterna." Dentro do próprio João, portanto, "fazer a vontade do Pai" (linguagem de Mt 7:21) e "crer no Filho" são a mesma coisa.' },
        ],
    },
    24: {
        title: 'Nunca vos conheci',
        lead: 'A ironia: os rejeitados são os que mais fizeram obras.',
        script: [
            'Aqui está a chave que desarma de vez a leitura legalista — e ela está nos dois versos seguintes ao que a lição citou. Em Mt 7:22, quem Jesus rejeita não são os preguiçosos espirituais. São os super-realizadores: "profetizamos em teu nome, expulsamos demônios, fizemos muitos milagres." Currículo religioso impecável.',
            'E o veredito de Jesus não é "vocês fizeram pouco". É: "Nunca vos conheci. Apartai-vos de mim, vós que praticais a iniquidade." O critério não é a quantidade de obras — é o relacionamento. Conhecer e ser conhecido.',
            'E há uma ironia mordaz no grego. Jesus chama esses praticantes de obras de "praticantes da anomia" — literalmente, "os sem-lei". Os que mais confiaram nas próprias obras religiosas são, no fim, os chamados de fora-da-lei. O legalismo é, ele mesmo, a maior das ilegalidades diante de Deus.',
        ],
        depth: [
            { label: 'Grego', text: '"Nunca vos conheci" = oudépote égnōn hymâs — do verbo ginṓskō, conhecer por relação e intimidade, não meramente saber sobre. "Vós que praticais a iniquidade" = hoi ergazómenoi tḕn anomían: ergázomai (trabalhar, operar) + anomía (a-nómos, "sem-lei"). Eles literalmente "trabalham a ausência de lei" — a acusação recai exatamente sobre quem se gabava de suas obras.' },
        ],
    },
    25: {
        title: 'A ordem importa',
        lead: 'Amor primeiro; obediência como resposta.',
        script: [
            'João 14:15: "Se me amais, guardareis os meus mandamentos." Repare na ordem. Primeiro o amor; a guarda dos mandamentos vem como consequência. Muitos leem isso como uma ordem dupla ("amem-me e obedeçam!"); o grego sugere antes uma consequência: "se me amais, [então] guardareis".',
            'Essa é a diferença entre as duas religiões que cabem dentro do cristianismo. A ordem do legalismo: eu obedeço para ser aceito. A ordem do evangelho: eu fui aceito, e por isso obedeço. As ações podem ser idênticas; o motor é oposto; e o destino é oposto.',
            'O amor vem primeiro porque a aceitação vem primeiro. A obediência cristã é gratidão em movimento — nunca um suborno oferecido ao Juiz para conseguir um veredito.',
        ],
        depth: [
            { label: 'Grego', text: 'tērḗsete ("guardareis") aparece no futuro do indicativo em boa parte dos manuscritos — descreve o que naturalmente acontecerá, mais do que uma ordem isolada. O amor genuíno por Cristo produz obediência como efeito; a obediência é o termômetro do amor, não o seu preço.' },
            { label: 'Ellen White', text: '"É a fé, e somente a fé, que nos torna participantes da graça de Cristo, a qual habilita à obediência." E ainda: "A obediência — o serviço e a lealdade do amor — é o verdadeiro sinal do discipulado." (Caminho a Cristo, cap. "A Prova do Discipulado"). Ou seja: a obediência é resultado da graça recebida, não a moeda para comprá-la.' },
        ],
    },
    26: {
        title: 'A casa e a Rocha',
        lead: 'Praticar importa — mas a casa não é o fundamento.',
        script: [
            'Jesus fecha o Sermão com o homem prudente que ouve e pratica, edificando sobre a rocha. Alguém pode dizer: "viu? então é praticar que salva!" Mas olhe a metáfora com cuidado: a casa não é o fundamento. A casa é construída sobre o fundamento.',
            'Quem é a Rocha? Paulo responde sem rodeios: "a rocha era Cristo" (1 Co 10:4). O fundamento é Cristo; a obediência é a casa que prova que o fundamento é real. Tirar a casa não derruba a Rocha — mas uma fé que nunca levanta casa nenhuma faz suspeitar que talvez nunca tenha havido fundação de verdade.',
            'Compare com o paralelo de Lucas 6:46: "Por que me chamais Senhor, Senhor, e não fazeis o que eu digo?" O problema dos rejeitados nunca foi obediência demais. Foi confiar em si mesmos no lugar de se entregar a Cristo.',
        ],
        depth: [
            { label: 'Intertexto', text: 'A imagem da rocha/fundamento atravessa a Escritura: Sl 18:2; Is 28:16 ("eis que ponho em Sião uma pedra angular, firme fundamento"); 1 Co 3:11 ("ninguém pode pôr outro fundamento além do que já está posto, Jesus Cristo"); 1 Co 10:4. A "prática" do crente é sempre edificação sobre um fundamento já dado — nunca a fabricação do fundamento.' },
        ],
    },
    27: {
        title: 'Paulo e Tiago',
        lead: 'Não se contradizem — falam de tribunais diferentes.',
        script: [
            'A objeção culta é inevitável: "Mas Tiago 2:24 diz que o homem é justificado por obras, e não somente pela fé. Isso não contradiz Romanos 3:28?" A resposta é não — porque os dois usam o verbo "justificar" em sentidos diferentes, respondendo a perguntas diferentes.',
            'Paulo responde à pergunta "como sou declarado justo diante de Deus?" — e a resposta é: só pela fé, à parte das obras (é o tribunal divino, sentido forense). Tiago responde à pergunta "como sei que a minha fé é viva e verdadeira?" — e a resposta é: pelas obras que ela produz (é a evidência diante dos homens e da própria consciência).',
            'Até os exemplos denunciam isso. Paulo cita o Abraão de Gênesis 15 ("creu, e isso lhe foi imputado por justiça"), antes de qualquer obra. Tiago cita o Abraão de Gênesis 22 (o sacrifício de Isaque), décadas depois — a obra que comprovou a fé que já existia. Conclusão: justificados pela fé sozinha, mas a fé que justifica nunca permanece sozinha.',
        ],
        depth: [
            { label: 'Grego / Teologia', text: 'dikaióō carrega tanto "declarar justo" (forense — Paulo) quanto "demonstrar/vindicar como justo" (Tiago; cf. Lc 7:35, "a sabedoria é justificada por seus filhos"). São eixos distintos. A Reforma cunhou a fórmula: "Fide sola iustificamur, sed non fide quae est sola" — somos justificados só pela fé, mas não por uma fé que esteja só.' },
        ],
    },
    28: {
        title: 'Minneapolis, 1888',
        lead: 'O adventismo já lutou contra o próprio legalismo.',
        script: [
            'Por que esse tema é tão sensível justamente para nós? Porque carregamos a lei no próprio nome — "adventistas do sétimo dia". E os que mais levam a lei a sério são os que correm o maior risco de transformá-la num sistema de mérito.',
            'Em 1888, na Assembleia Geral em Minneapolis, dois jovens — A. T. Jones e E. J. Waggoner — confrontaram a liderança da igreja, que havia escorregado para uma ênfase na lei e na obediência como base da posição diante de Deus. Houve resistência dura, inclusive de nomes muito respeitados, como Uriah Smith e G. I. Butler.',
            'Ellen White apoiou com força a mensagem da justiça pela fé. Ela a chamou de "a terceira mensagem angélica em verdade" e de uma mensagem "preciosíssima" que apresentava "Cristo, a nossa justiça". Em outras palavras: a própria mensageira do movimento reconheceu que faltava Cristo no centro da nossa pregação da lei.',
            'A lição para hoje: levar a lei a sério e cair no legalismo não são a mesma coisa — e a fronteira entre as duas se chama evangelho. É por isso que a pergunta de sexta-feira, no próximo movimento, é tão certeira: no dia do juízo, em que você vai confiar?',
        ],
        depth: [
            { label: 'História', text: 'A "mensagem de 1888" virou um divisor de águas na auto-compreensão adventista. Ellen White chegou a descrever a mensagem de Jones e Waggoner como "o início da luz do anjo cuja glória encherá toda a terra" (alusão a Ap 18:1). O episódio é estudado até hoje — ver, por exemplo, "Christ Our Righteousness", de A. G. Daniells (1926) — como o momento em que o adventismo precisou reaprender o próprio evangelho.' },
        ],
    },

    // ───────────────────────── MOV. V ─────────────────────────
    29: {
        title: 'Movimento V — O Tribunal',
        lead: 'Toda a aula desemboca numa pergunta de juízo.',
        script: [
            'Fechamos onde a sexta-feira fecha: no tribunal. Não como ameaça, mas como o teste que revela em que a gente realmente apoia o peso.',
            'Todo mundo confia em alguma coisa para o dia do juízo. A pergunta — a única que importa agora — é: em quê? É isso que vai amarrar pecado, lei e evangelho no lugar certo.',
        ],
    },
    30: {
        title: 'A pergunta 4 de sexta',
        lead: 'No juízo, com cada pecado exposto: na sua obediência, ou na justiça de Cristo?',
        script: [
            'A pergunta 4 de sexta é, na minha opinião, a melhor coisa da semana — e é ela que corrige o tom de quinta. Ela diz: imagine o dia do juízo, cada pecado seu apresentado diante de um Deus santo e perfeito. Em que você vai confiar? Na sua obediência à lei, ou na justiça perfeita de Jesus no seu lugar?',
            'Coloquem as duas opções lado a lado e a resposta fica óbvia — e devastadora para o legalismo. Se eu apostar na minha obediência, estou perdido, porque a lei só sabe condenar. Se eu apostar na justiça de Cristo, estou seguro, porque a conta já foi paga.',
            'É a mesma escolha de Paulo em Filipenses 3: a minha justiça, ou a Dele. E é por isso que a obediência, por mais importante que seja, nunca pode ser aquilo em que deposito a minha esperança no juízo.',
        ],
        depth: [
            { label: 'Nota adventista', text: 'O adventismo crê num juízo pré-advento (o "juízo investigativo": Dn 7:9-10; 8:14; Ap 14:7). Justamente por isso a pergunta 4 é tão decisiva: o juízo não examina se acumulei méritos, mas se a minha fé está em Cristo — se o meu nome está coberto pela justiça dele. Segurança da salvação e seriedade do juízo não se contradizem; a chave é a quem pertence a justiça que me cobre.' },
        ],
    },
    31: {
        title: 'Nenhuma condenação (Rm 8:1)',
        lead: 'O veredito para quem está em Cristo: nenhuma condenação.',
        script: [
            'E aqui a palavra "condenar", que guardamos lá no Movimento III, reaparece transformada. Romanos 8:1: "agora, pois, nenhuma condenação há para os que estão em Cristo Jesus."',
            'A lei dizia "condenar" — era tudo o que ela sabia. O evangelho responde "nenhuma condenação" — para quem está em Cristo. Não é que a lei tenha mudado de opinião; é que a condenação dela caiu sobre Cristo, e quem está nele já não a recebe.',
            'Essa é a segurança cristã. Não um talvez ansioso, mas um veredito já dado. A obediência continua importando — profundamente — mas como resposta de um absolvido, jamais como suborno de um réu com medo.',
        ],
        depth: [
            { label: 'Grego', text: '"Nenhuma condenação" = oudèn katákrima. katákrima é o veredito penal, a sentença executada — palavra mais forte que a simples krísis (julgamento). "Em Cristo Jesus" (en Christô Iēsoû) é a fórmula paulina central: a posição do crente está "dentro" de Cristo, de modo que o que é verdade dele se torna verdade nossa. Rm 8:1 é a conclusão triunfante de toda a argumentação de Rm 1-7.' },
        ],
    },
    32: {
        title: 'O fecho — verso reaberto',
        lead: 'De volta ao salmista — obediência por gratidão, não por medo.',
        script: [
            'Voltamos ao verso do começo, agora com ouvidos novos. "Sou teu; salva-me, pois eu busco os teus preceitos." A ordem do salmista é a ordem do evangelho: primeiro "sou teu" e "salva-me"; depois, e por causa disso, "busco os teus preceitos."',
            'Essa é a resposta para o nó de quinta. A obediência não é o preço da entrada; é a assinatura de quem já entrou. O salmista guarda a lei porque pertence a Deus — não para passar a pertencer.',
            'Então a pergunta com que vocês saem hoje não é "você tem obedecido o suficiente?". É outra, mais profunda: a sua obediência tem nascido do medo do tribunal, ou da gratidão de quem já foi absolvido? Fica a reflexão. (Não fechar com pressa — deixar a pergunta no ar.)',
        ],
        depth: [
            { label: 'O arco fechado', text: 'A aula começou e terminou no Salmo 119:93-94, de propósito. Entre as duas leituras percorremos pecado → lei → evangelho → a polêmica → o tribunal. A mesma frase que abriu como verso de memória fecha como tese: a vida vem de Deus ("dado vida"), a salvação é súplica ("salva-me") e a busca pela lei é resposta ("busco os teus preceitos") — nunca o contrário.' },
        ],
    },
};
