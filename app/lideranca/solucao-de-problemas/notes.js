// ============================================================
// FONTE ÚNICA DO ROTEIRO — Solução de Problemas (curso de liderança)
//
// Os slides são a "manchete"; aqui mora o "artigo": o que se fala,
// os aprofundamentos (fonte, exemplo de locadora, ponte com tecnologia).
// A página /apresentador lê este arquivo e renderiza um texto único,
// rolável, com fonte grande para o celular.
//
// Shape de cada nota:
//   { title, lead, script: string[], depth?: { label, text }[] }
// ============================================================

export const lessonMeta = {
    course: 'Curso de Liderança',
    title: 'Solução de Problemas',
    subtitle: 'O problema que você vê quase nunca é o problema que você tem',
};

export const movements = [
    { roman: '·',   label: 'Abertura', from: 1,  to: 4 },
    { roman: 'I',   label: 'Pausa',    from: 5,  to: 8 },
    { roman: 'II',  label: 'Pessoa',   from: 9,  to: 13 },
    { roman: 'III', label: 'Problema', from: 14, to: 17 },
    { roman: 'IV',  label: 'Porquê',   from: 18, to: 22 },
    { roman: 'V',   label: 'Plano',    from: 23, to: 27 },
    { roman: 'VI',  label: 'Prevenir', from: 28, to: 31 },
    { roman: '·',   label: 'Fecho',    from: 32, to: 33 },
];

export const notes = {
    // ───────────────────────── ABERTURA ─────────────────────────
    1: {
        title: 'Solução de Problemas',
        lead: 'O problema que você vê quase nunca é o problema que você tem.',
        script: [
            'Bem-vindos. Hoje a gente vai falar de uma habilidade que ninguém coloca no currículo, mas que decide quem cresce e quem trava: resolver problemas. Não "apagar incêndio" — resolver.',
            'E eu quero avisar de cara: isso aqui é para a empresa, sim. Mas é para a vida. O mesmo método que resolve um cliente furioso no exit gate resolve uma briga em casa e uma dívida que não fecha. Se você levar uma coisa só daqui, leve um método — e ele cabe na palma da sua mão.',
        ],
        depth: [
            { label: 'Por que esse tema num curso de liderança', text: 'Líder não é quem tem o crachá mais alto. É a pessoa pra quem todo mundo olha quando o problema aparece. Resolver bem, com calma e método, é a forma mais rápida de virar essa pessoa — independente do cargo.' },
        ],
    },
    2: {
        title: 'São 18h. A fila não anda.',
        lead: 'O que você faz nos próximos 90 segundos?',
        script: [
            'Imagina a cena. Sexta-feira, 18h. Fila no balcão. Um cliente chega com a chave na mão, vermelho de raiva: "Esse carro tem um risco na porta que eu NÃO fiz, e agora vocês querem me cobrar?". Atrás dele, mais seis pessoas bufando. Seu telefone tocando. Seu colega te chamando.',
            'Você tem uns 90 segundos antes que isso vire um problema sério — uma avaliação 1 estrela, um cliente perdido, um abacaxi pro seu gerente. O que você faz?',
            'Segura essa cena. Ela vai voltar no fim da aula — e a gente vai resolver ela junto, passo a passo. A diferença entre o caos e a solução não vai ser sorte. Vai ser método.',
        ],
        depth: [
            { label: 'Por que começar pela cena', text: 'Todo mundo na sala já viveu uma versão disso. Quando o cérebro reconhece a situação, ele para de ouvir teoria e começa a aprender de verdade. A cena é o gancho que sustenta a aula inteira.' },
            { label: 'Ponte com tecnologia', text: 'Na minha área a gente chama isso de "incidente": algo quebrou, tem gente esperando, e o relógio está correndo. A primeira regra do manual de incidente é a mesma do balcão: não é velocidade, é clareza.' },
        ],
    },
    3: {
        title: 'A aula inteira em 3 frases',
        lead: 'Se você só lembrar disto, já valeu.',
        script: [
            'Antes do método, três frases que são o eixo de tudo. Primeira: entenda antes de resolver. A pressa de resolver rápido o problema errado é o erro mais caro que existe.',
            'Segunda: a causa raiz mora embaixo do primeiro "porquê". O que aparece primeiro quase nunca é o que causou. A gente vai aprender a descer até o fundo.',
            'Terceira: resolver de verdade é fazer o problema não voltar. Apagar o incêndio de hoje é o mínimo. Quem lidera faz o incêndio não acontecer de novo. E reparem: quase todo problema, no meio dele, tem uma pessoa — não é só processo.',
        ],
        depth: [
            { label: 'Por que a ordem importa', text: 'Invertida, a tese vira o erro comum: agir primeiro, entender depois, e tratar o sintoma achando que resolveu. Mantida na ordem, ela é o eixo da solução de problemas — e as três frases reaparecem no fecho da aula.' },
        ],
    },
    4: {
        title: 'Os 6 P — cabe na palma da mão',
        lead: 'Pausa · Pessoa · Problema · Porquê · Plano · Prevenir',
        script: [
            'O método tem seis passos, e eu escolhi seis P de propósito: você conta nos dedos. No calor do exit gate você não vai lembrar de teoria — mas vai lembrar de uma mão.',
            'Pausa: não reaja ao sintoma. Pessoa: separe a pessoa do problema. Problema: descubra qual é o problema de verdade. Porquê: desça até a causa raiz. Plano: decida e aja. E Prevenir: faça não voltar.',
            'Os cinco primeiros resolvem o problema de hoje. O sexto — Prevenir — é o que separa quem só executa de quem lidera. É pra lá que a gente caminha.',
        ],
        depth: [
            { label: 'Por que memorável importa', text: 'Um método que você não lembra sob pressão é inútil. Pilotos, médicos e bombeiros usam mnemônicos justamente porque, no estresse, o cérebro racional "desliga". Os 6 P são o seu checklist de bolso.' },
        ],
    },

    // ───────────────────────── MOV. I — PAUSA ─────────────────────────
    5: {
        title: 'I · Pausa',
        lead: 'Antes de resolver, pare de reagir.',
        script: [
            'Primeiro P: Pausa. Parece o passo mais bobo. É o mais difícil — e o que mais gente pula.',
        ],
        depth: [
            { label: 'O movimento', text: 'Este movimento mostra por que o nosso instinto nos trai sob pressão, quanto custa resolver o problema errado, e como uma pausa de poucos segundos muda tudo.' },
        ],
    },
    6: {
        title: 'Lutar ou fugir',
        lead: 'Sob pressão, o cérebro reage ao sintoma — não ao problema.',
        script: [
            'Quando o cliente grita, acontece uma coisa biológica: seu corpo entra em "lutar ou fugir". O coração acelera, e a parte do cérebro que pensa com calma — a da frente — perde força pra parte que só quer sobreviver ao perigo.',
            'Na prática: você ou revida ("o senhor está enganado, isso aqui já estava riscado") ou foge ("vou chamar meu gerente" só pra se livrar). As duas reações atacam o sintoma — o grito — e ignoram o problema.',
            'Isso não é defeito de caráter. É como o ser humano é construído. A boa notícia: dá pra treinar. E o treino começa por reconhecer que esse instinto existe.',
        ],
        depth: [
            { label: 'A ciência', text: 'O "sequestro da amígdala" (amygdala hijack, termo de Daniel Goleman) descreve esse momento em que a reação emocional atropela o raciocínio. Não dá pra impedir o gatilho — mas dá pra criar um intervalo entre o gatilho e a sua reação. Esse intervalo é a Pausa.' },
            { label: 'Na oficina', text: 'Vale igual pro mecânico: o carro chega, o cliente diz "tá fazendo um barulho", e a tentação é já trocar a peça que costuma dar barulho. Reação ao sintoma. A peça troca, o barulho volta, e agora você tem um cliente que perdeu a confiança.' },
        ],
    },
    7: {
        title: 'Resolver bem o problema errado',
        lead: 'Velocidade na direção errada é só chegar mais rápido no lugar errado.',
        script: [
            'Existe um erro que quase ninguém percebe que está cometendo: resolver com perfeição um problema que não era o problema. Você foi rápido, foi eficiente, foi educado — e resolveu a coisa errada.',
            'No nosso exemplo: você corre, tira a cobrança do risco pra acalmar o cliente, ele vai embora feliz. Parece vitória. Mas se o risco realmente já existia e não foi registrado na entrega, o problema de verdade era o seu processo de vistoria — e ele continua lá, intacto, esperando o próximo cliente e o próximo prejuízo.',
            'Guardem essa ideia: agir rápido não é a mesma coisa que agir certo. E a única forma de saber se você está no problema certo é... pausar pra olhar.',
        ],
        depth: [
            { label: 'Tem nome', text: 'Estatísticos chamam de "erro do tipo III": dar a resposta certa para a pergunta errada. É mais perigoso que errar a resposta, porque vem disfarçado de sucesso — todo mundo te elogia enquanto o problema real segue crescendo.' },
            { label: 'Ponte com tecnologia', text: 'Em software a gente vive isso: o programa trava, alguém "reinicia o servidor" e parece resolvido. Reiniciar é tratar o sintoma. Se a causa for um vazamento de memória, ele volta — sempre na pior hora. Reiniciar rápido é o "tirar a cobrança" do nosso exemplo.' },
        ],
    },
    8: {
        title: 'Respira. Observa. Só então age.',
        lead: 'A pausa não é fraqueza — é controle.',
        script: [
            'O primeiro P, na prática, é quase físico: três segundos. Uma respiração. Antes de qualquer palavra, antes de qualquer ação, você se dá três segundos para sair do piloto automático.',
            'Nesses três segundos você faz uma coisa só: observa. Olha a cena de fora. "O que está realmente acontecendo aqui? O cliente está bravo com o risco, ou está com medo de pagar uma conta que não esperava? A fila é o problema, ou é a pressão da fila que está me empurrando?"',
            'Pausar não é demorar. É a coisa mais rápida que existe — três segundos — e é o que evita os trinta minutos de estrago de uma reação impulsiva. Quem pausa parece, e fica, no controle.',
        ],
        depth: [
            { label: 'OODA loop', text: 'O piloto de caça John Boyd criou o ciclo OODA: Observar, Orientar, Decidir, Agir. A sacada dele é que vence não quem age mais rápido, e sim quem observa e se orienta melhor antes de agir. A maioria das pessoas pula direto pro "Agir". A Pausa é forçar o Observar.' },
            { label: 'Para a vida', text: 'Numa discussão com quem você ama, a pausa de 3 segundos antes de responder evita 90% das frases das quais a gente se arrepende. Mesmo método, outro "balcão".' },
        ],
    },

    // ───────────────────────── MOV. II — PESSOA ─────────────────────────
    9: {
        title: 'II · Pessoa',
        lead: 'Quase todo problema tem gente no meio.',
        script: [
            'Segundo P: Pessoa. Porque a verdade incômoda é esta — quase nenhum problema no seu trabalho é só técnico. Tem sempre uma pessoa: um cliente, um colega, um chefe. E é com a pessoa que a maioria das soluções desanda.',
        ],
        depth: [
            { label: 'O movimento', text: 'Aqui a gente aprende a não confundir a pessoa com o problema, a tratar a emoção antes do fato, e a partir sempre do pressuposto de boa intenção — com cliente e com colega.' },
        ],
    },
    10: {
        title: 'O problema é o problema',
        lead: 'Quando a pessoa vira o inimigo, o problema ganha.',
        script: [
            'No calor da hora, é fácil a pessoa virar o problema na sua cabeça. "Esse cliente é um folgado." "Esse colega é um relaxado." No instante em que você decide isso, você parou de resolver o problema e começou uma briga.',
            'A virada de chave é simples de dizer e difícil de fazer: o problema é o problema. A pessoa é alguém que está, junto com você, diante de um problema. Em vez de você contra ela, é você e ela, lado a lado, contra a situação.',
            'Isso muda até o corpo. Em vez de encarar o cliente de frente, como um adversário, imagine os dois olhando juntos para o carro, para a tela, para o contrato. Vocês viraram um time contra o problema.',
        ],
        depth: [
            { label: 'Fonte', text: 'Princípio 1 do clássico de negociação de Harvard, "Como Chegar ao Sim" (Fisher & Ury): "separe as pessoas do problema". Atacar a pessoa endurece a posição dela; atacar o problema junto com ela abre espaço pra solução.' },
            { label: 'Com o colega', text: 'Vale dentro da equipe: "o relatório saiu errado de novo" resolve; "você é desatento" inicia uma guerra fria. O primeiro mira o problema, o segundo mira a pessoa — e a pessoa se fecha.' },
        ],
    },
    11: {
        title: 'Ninguém ouve a razão no meio da raiva',
        lead: 'Acolha o sentimento antes de explicar a política.',
        script: [
            'Erro número um no atendimento: responder o conteúdo quando a pessoa está na emoção. O cliente grita sobre o risco, e você já dispara a regra: "senhor, conforme o contrato cláusula tal...". Você está certíssimo. E vai piorar tudo.',
            'Quando alguém está com raiva ou com medo, a parte racional está offline — lembram do lutar ou fugir? Jogar fato e regra ali é como falar com alguém que está debaixo d\'água. Primeiro você traz a pessoa pra superfície.',
            'Como? Reconhecendo a emoção, sem concordar com o erro: "Eu entendo, ninguém quer ser cobrado por algo que não fez. Faz sentido o senhor estar incomodado. Vamos olhar isso juntos agora." Você não admitiu culpa. Você só mostrou que está do lado dele. Aí, e só aí, a razão volta a funcionar.',
        ],
        depth: [
            { label: 'Como funciona', text: 'Chama-se "rotular a emoção" (affect labeling). Nomear o que a pessoa sente — "parece frustrante" — reduz mensuravelmente a intensidade da emoção dela. É a técnica central de negociadores de reféns do FBI (Chris Voss, "Negocie como se sua vida dependesse disso"). Se funciona com sequestrador, funciona no balcão.' },
            { label: 'O roteiro de 1 frase', text: 'Acolher + virar pro problema: "(Entendo / Faz sentido) + (vamos olhar isso juntos)". Decore essa estrutura. Ela desarma quase qualquer começo de bate-boca.' },
        ],
    },
    12: {
        title: 'A interpretação mais generosa',
        lead: 'Comece supondo que a pessoa não está agindo de má-fé.',
        script: [
            'Quando algo dá errado, a mente pula pra pior explicação: "o cliente está mentindo pra não pagar", "o colega não fez de propósito pra me prejudicar". Às vezes é verdade. Na imensa maioria das vezes, não é.',
            'O cliente que jura que não fez o risco talvez realmente não tenha visto — riscos pequenos passam batido na entrega. O colega que errou talvez não tenha sido treinado direito. Começar pela interpretação mais generosa não é ser ingênuo; é ser estratégico. Porque se você começa acusando e estava errado, perdeu a pessoa pra sempre.',
            'Regra prática: trate a pessoa como se a intenção dela fosse boa, até que os fatos provem o contrário. Você quase nunca vai se arrepender disso.',
        ],
        depth: [
            { label: 'O princípio', text: 'Chamam de "most respectful/generous interpretation". Empresas de cultura forte adotam isso como norma: assuma boa intenção. Não porque todo mundo é bom, mas porque a alternativa — assumir má-fé — envenena o time e o atendimento.' },
            { label: 'Cuidado', text: 'Boa intenção não é ingenuidade sem limite. É o ponto de partida, não o ponto final. Se os fatos mostrarem fraude, você muda de rota — mas com prova, não com suposição.' },
        ],
    },
    13: {
        title: 'Quando foi a última vez?',
        lead: 'Você tratou alguém como problema — e era só uma pessoa com um problema?',
        script: [
            'Vou deixar uma pergunta no ar, e quem quiser comenta no chat ou abre o microfone. Pensem num atendimento recente que desandou. Honestamente: em algum momento a pessoa virou o inimigo na sua cabeça? O que teria mudado se você tivesse ficado do lado dela contra o problema?',
            '(Abrir 1–2 minutos para 2 ou 3 relatos. Não corrigir ninguém; só agradecer e conectar com os 6 P.)',
        ],
        depth: [
            { label: 'Conduzindo a discussão', text: 'Numa turma de 15 no Meet, peça reações curtas no chat primeiro (mais gente participa) e chame 2 ou 3 pra falar. O objetivo não é resposta certa — é cada um reconhecer o padrão em si mesmo.' },
        ],
    },

    // ───────────────────────── MOV. III — PROBLEMA ─────────────────────────
    14: {
        title: 'III · Problema',
        lead: 'Definir bem é metade da solução.',
        script: [
            'Terceiro P: Problema. Agora que você pausou e cuidou da pessoa, vem a pergunta que muda tudo: qual é, exatamente, o problema?',
        ],
        depth: [
            { label: 'O movimento', text: 'Aqui separamos sintoma de problema, aprendemos por que definir bem vale mais que resolver rápido, e treinamos a distinguir fato de interpretação.' },
        ],
    },
    15: {
        title: 'O barulho não é o defeito',
        lead: 'O que aparece primeiro é quase sempre o sintoma.',
        script: [
            'Sintoma é o que grita. Problema é o que causa. O cliente reclama do barulho — barulho é sintoma. A peça gasta que faz o barulho é que é o problema. Trocar o que faz barulho sem achar a causa é trocar peça pra sempre.',
            'No balcão é igual. "A fila está enorme" é sintoma. O problema pode ser um sistema lento, falta de gente no horário de pico, ou um processo de devolução que tem passos demais. Se você só pede "andem mais rápido", está gritando com o sintoma.',
            'A pergunta que separa os dois é simples: "isso que eu estou vendo é a doença, ou é a febre?". Febre você não trata com gelo — você acha a infecção.',
        ],
        depth: [
            { label: 'A metáfora médica', text: 'Um termômetro é ótimo pra mostrar a febre e inútil pra curar a infecção. A reclamação do cliente é o seu termômetro: leve a sério como sinal, mas não confunda o sinal com a causa. Bom diagnóstico vem antes de bom tratamento — em medicina, em carro e em gente.' },
            { label: 'Ponte com tecnologia', text: 'A gente tem até um nome: "tratar o sintoma". O sistema fica lento toda segunda de manhã. Comprar um servidor mais forte (caro!) some com o sintoma por um tempo. A causa era um relatório pesado rodando no pior horário. Mover o relatório custou zero.' },
        ],
    },
    16: {
        title: '55 minutos para entender, 5 para resolver',
        lead: 'Um problema bem formulado já está quase resolvido.',
        script: [
            'Tem uma frase atribuída ao Einstein: "se eu tivesse uma hora pra resolver um problema, passaria 55 minutos pensando no problema e 5 minutos na solução". Pode não ter sido ele — mas a ideia é de ouro.',
            'A gente faz o contrário. Pula em cima da solução em 5 segundos e passa 55 minutos sofrendo com soluções que não pegam, porque nunca entendeu o problema direito.',
            'Definir bem é escrever o problema numa frase clara. Compare: "o cliente está chateado" (vago, não dá pra agir) com "o cliente foi cobrado por um dano que não consta na vistoria de entrega" (específico, e já aponta o que fazer: conferir a vistoria). A segunda frase já é metade da solução.',
        ],
        depth: [
            { label: 'Como formular bem', text: 'Um bom enunciado de problema tem: o que aconteceu (fato), pra quem, e qual o impacto. Sem culpado, sem solução embutida. "A devolução demora 12 minutos e a meta é 5" é melhor que "o pessoal é devagar" — porque a primeira é mensurável e a segunda é uma acusação.' },
            { label: 'Para a vida', text: '"Estou sempre sem dinheiro no fim do mês" é febre. "Gasto R$ 400/mês em coisas que nem lembro ter comprado" é diagnóstico. A segunda frase você consegue atacar; a primeira só te deixa ansioso.' },
        ],
    },
    17: {
        title: 'O que aconteceu x o que você achou',
        lead: 'Quase toda confusão é interpretação vestida de fato.',
        script: [
            'Última peça deste movimento, e talvez a mais útil no dia a dia: separar o fato da interpretação. Fato é o que uma câmera registraria. Interpretação é a história que a sua cabeça conta sobre o fato.',
            '"O cliente devolveu o carro com o tanque na metade" — fato. "O cliente é mão de vaca e quer me enrolar" — interpretação. "O colega não respondeu minha mensagem" — fato. "Ele está me ignorando" — interpretação. A gente briga com as interpretações como se fossem fatos.',
            'A ferramenta é uma pergunta: "isso eu vi, ou isso eu deduzi?". E quando for dedução, você confirma antes de agir: pergunta, checa o sistema, olha a vistoria. Metade dos problemas se desfaz aqui — porque não eram problemas, eram mal-entendidos.',
        ],
        depth: [
            { label: 'A escada da inferência', text: 'Chris Argyris descreveu a "escada de inferência": a gente vê um dado, seleciona um pedaço, interpreta, conclui e age — tudo em um piscar de olhos, sem perceber os degraus. Voltar um degrau ("qual foi o fato mesmo?") é uma das habilidades mais raras e valiosas que existem.' },
            { label: 'Ponte com tecnologia', text: 'Bom investigador de bug pergunta sempre: "isso é reproduzível? me mostra acontecendo". Tradução pro balcão: não aja na história do cliente nem na sua suposição — peça pra ver o fato (a foto da vistoria, o print, o histórico).' },
        ],
    },

    // ───────────────────────── MOV. IV — PORQUÊ ─────────────────────────
    18: {
        title: 'IV · Porquê',
        lead: 'Pergunte "por quê" até doer.',
        script: [
            'Quarto P: Porquê. Aqui a gente para de raspar a superfície e desce até onde o problema realmente nasce. É o passo que transforma quem apaga incêndio em quem entende fogo.',
        ],
        depth: [
            { label: 'O movimento', text: 'A ferramenta dos 5 Porquês, um exemplo desmontado até o fim, por que "erro humano" nunca é a resposta final, e a diferença entre culpar a pessoa e consertar o sistema.' },
        ],
    },
    19: {
        title: 'Pergunte "por quê" cinco vezes',
        lead: 'A causa raiz costuma estar uns cinco "porquês" abaixo do sintoma.',
        script: [
            'A ferramenta mais simples e mais poderosa de causa raiz nasceu na Toyota. Chama-se "5 Porquês". Você pega o problema e pergunta "por quê?". Pega a resposta e pergunta "por quê?" de novo. Cinco vezes, mais ou menos, e você chega lá embaixo.',
            'Exemplo clássico da fábrica: a máquina parou. Por quê? Queimou o fusível por sobrecarga. Por quê? O eixo não estava lubrificado. Por quê? A bomba de óleo não bombeava direito. Por quê? Estava entupida. Por quê? Não tinha filtro e entrou sujeira.',
            'Olha o pulo do gato: o sintoma era "máquina parada", e a primeira reação seria trocar o fusível. Mas a causa raiz era "falta um filtro". Trocar o fusível resolve por um dia. Colocar o filtro resolve pra sempre. Cinco perguntas separam essas duas soluções.',
        ],
        depth: [
            { label: 'Fonte', text: 'Taiichi Ohno, criador do Sistema Toyota de Produção, popularizou os "5 Porquês". O número 5 não é mágico — às vezes são 3, às vezes 7. A regra é: continue até a resposta deixar de ser um sintoma e virar algo que você pode consertar no sistema.' },
            { label: 'Armadilha', text: 'Se um "porquê" te leva a uma pessoa ("porque o fulano esqueceu"), não pare aí — esse é o erro do próximo slide. Pergunte mais um: "por que foi fácil esquecer?". Quase sempre tem um sistema por trás.' },
        ],
    },
    20: {
        title: 'Do balcão até a causa raiz',
        lead: 'O mesmo método, no nosso mundo.',
        script: [
            'Agora com a nossa cena. Problema: o cliente foi cobrado por um risco que ele diz não ter feito. Por quê? Porque o risco não estava registrado na vistoria de entrega. Por quê? Porque a vistoria foi feita às pressas. Por quê? Porque tinha fila e o atendente estava sozinho no pico. Por quê? Porque a escala não cobre o horário de pico de sexta. Por quê? Porque ninguém olhou os dados de movimento na hora de montar a escala.',
            'Repara onde a gente chegou. O sintoma era "cliente bravo com cobrança". A causa raiz é "a escala é montada sem olhar o movimento". Você pode acalmar mil clientes, um por um, pra sempre — ou pode arrumar a escala de sexta e secar a fonte do problema.',
            'É isso que os 5 Porquês fazem: pegam um problema que parecia do atendente e mostram que era do processo. E problema de processo, quem resolve é quem lidera.',
        ],
        depth: [
            { label: 'Por que isso liberta o funcionário', text: 'Quando você chega na causa raiz, descobre que a maioria dos "seus erros" não eram seus — eram do sistema em que você trabalha. Isso tira o peso da culpa e coloca a energia onde resolve: melhorar o processo.' },
        ],
    },
    21: {
        title: 'Não pare na pessoa. Pare no sistema.',
        lead: 'Todo sistema é perfeitamente desenhado para dar o resultado que dá.',
        script: [
            'Tem uma resposta preguiçosa que encerra toda investigação: "foi erro humano". "O atendente esqueceu de marcar o risco." Pronto, culpado achado, caso encerrado. E errado.',
            'Porque pessoas vão errar — sempre. Estão cansadas, com pressa, sem treino, com mil coisas ao mesmo tempo. Se o seu processo só funciona quando todo mundo é perfeito o tempo todo, o problema é o processo, não a pessoa.',
            'Tem uma frase que eu queria que vocês tatuassem na memória: "todo sistema é perfeitamente desenhado para produzir exatamente o resultado que ele produz". Se a vistoria sai errada toda sexta, o sistema de vistoria está perfeitamente desenhado pra falhar na sexta. Pare de pedir pras pessoas terem mais cuidado. Mude o sistema pra que o cuidado seja fácil.',
        ],
        depth: [
            { label: 'Fonte', text: 'A frase é atribuída a W. Edwards Deming e a Paul Batalden. É a base da cultura de qualidade da Toyota, da aviação e da medicina moderna: quando algo dá errado, a pergunta não é "quem fez?", e sim "o que no sistema permitiu que isso desse errado?".' },
            { label: 'Ponte com tecnologia', text: 'Times de software maduros tratam "erro humano" como resposta proibida numa investigação. Se um engenheiro apertou o botão errado e derrubou tudo, a pergunta é: por que existia um botão que, sozinho, derruba tudo? Conserta-se o botão, não se demite a pessoa.' },
        ],
    },
    22: {
        title: 'Qual é o seu problema que volta sempre?',
        lead: 'Aquele que reaparece todo mês — qual a causa raiz de verdade?',
        script: [
            'Pensem num problema que volta sempre no trabalho de vocês. Aquele que todo mundo já "resolveu" mil vezes e ele insiste em voltar. Agora apliquem os porquês: por que ele acontece? E por quê? Façam isso umas três vezes na cabeça.',
            '(Convidar 1 ou 2 pessoas a fazer os porquês em voz alta com o grupo. Ajudar a não parar em "erro humano". Mostrar que, quando volta sempre, a causa quase nunca é a primeira que aparece.)',
        ],
        depth: [
            { label: 'Conduzindo', text: 'Se a turma travar, use um exemplo neutro e universal: "o carro voltou da troca de óleo e o cliente reclamou de mancha no chão da garagem". Conduza os porquês com eles até virar processo (ex.: falta um pano/bandeja no procedimento).' },
        ],
    },

    // ───────────────────────── MOV. V — PLANO ─────────────────────────
    23: {
        title: 'V · Plano',
        lead: 'Entender sem agir é só preocupação organizada.',
        script: [
            'Quinto P: Plano. Toda a clareza do mundo não vale nada sem ação. Mas agir bem tem técnica — e a primeira é nunca ter só uma opção na mão.',
        ],
        depth: [
            { label: 'O movimento', text: 'Gerar opções em vez de uma só, decidir rápido o que é reversível e devagar o que não é, fugir da armadilha do perfeito, e saber a hora de resolver sozinho ou escalar.' },
        ],
    },
    24: {
        title: 'Se você só tem um caminho, você não tem escolha',
        lead: 'Gere dois ou três caminhos antes de escolher um.',
        script: [
            'Quando a gente enxerga só uma saída, a gente não está decidindo — está sendo empurrado. E a primeira ideia que aparece raramente é a melhor; é só a mais óbvia.',
            'Antes de agir, force pelo menos dois ou três caminhos. No nosso caso: opção A, tirar a cobrança agora e investigar depois; opção B, abrir uma exceção parcial e pedir 24h pra checar a vistoria; opção C, mostrar a foto da entrega na hora, se existir. Cada uma tem um custo e um risco diferentes.',
            'Ter opções faz duas coisas: te dá poder de escolha de verdade e, no atendimento, deixa o cliente no controle — "posso fazer assim ou assado, o que prefere?". Gente que escolhe não briga.',
        ],
        depth: [
            { label: 'Por que funciona', text: 'A pesquisa de decisão (Paul Nutt) mostrou que decisões do tipo "sim ou não" a uma única ideia falham muito mais que decisões com 2+ alternativas reais. Adicionar opções é a melhoria mais barata que existe na qualidade de uma decisão.' },
            { label: 'Cuidado com o oposto', text: 'Opção demais paralisa (o "paradoxo da escolha"). O número de ouro no calor da operação é dois ou três caminhos reais — o suficiente pra ter escolha, pouco o bastante pra decidir rápido.' },
        ],
    },
    25: {
        title: 'Dá pra voltar atrás?',
        lead: 'Decisão reversível: decida rápido. Irreversível: decida devagar.',
        script: [
            'A pergunta que organiza toda decisão: dá pra desfazer? Tem decisão que é uma porta de duas vias — você passa, e se não gostou, volta. E tem decisão que é porta de uma via só — passou, não tem volta.',
            'Tirar uma cobrança de R$ 80 pra acalmar um cliente e investigar depois? Porta de duas vias. Se descobrir que era devido, você recobra ou aprende pro próximo. Baixo risco — então decida rápido, não trave a fila por causa disso.',
            'Agora, acusar o cliente de fraude na frente da fila? Porta de uma via. Se você errar, não tem "desculpa, foi engano" que conserte. Esse tipo de decisão merece os seus 55 minutos — ou pelo menos um gerente junto. O erro comum é tratar tudo com o mesmo peso: travar nas reversíveis e sair atirando nas irreversíveis.',
        ],
        depth: [
            { label: 'Fonte', text: 'Jeff Bezos popularizou as "one-way and two-way doors". A maioria das decisões são de duas vias e deveriam ser rápidas e descentralizadas — qualquer um pode tomar. Reservar a lentidão e a cautela para as poucas que são irreversíveis é o que mantém uma operação ágil sem ser imprudente.' },
            { label: 'Para a vida', text: 'Trocar de carro é quase reversível. Mandar aquela mensagem raivosa, postar aquilo, falar aquela frase — porta de uma via. Vale a pausa dobrada.' },
        ],
    },
    26: {
        title: 'O ótimo é inimigo do feito',
        lead: 'Numa fila às 18h, decisão boa agora vence decisão perfeita tarde demais.',
        script: [
            'Tem um momento em que continuar analisando deixa de ser cuidado e vira fuga. A fila não espera a sua solução perfeita. Uma decisão 80% certa tomada agora quase sempre vale mais que a 100% que chega quando o cliente já foi embora avaliando 1 estrela.',
            'Isso se chama viés para a ação: na dúvida entre analisar mais um pouco e fazer algo razoável agora, o operador maduro faz. Principalmente — lembrem — quando é porta de duas vias, que dá pra ajustar depois.',
            'E o custo que ninguém contabiliza é o custo de não decidir. Cada minuto travado tem fila crescendo, cliente irritando, colega sobrecarregando. A indecisão também é uma decisão — geralmente a pior.',
        ],
        depth: [
            { label: 'Conceito', text: 'Herbert Simon (Nobel de Economia) chamou de "satisficing": em vez de buscar a opção ótima (impossível em tempo real), busca-se a primeira opção "boa o suficiente". É assim que bombeiros, médicos de emergência e bons atendentes decidem sob pressão — não com a melhor resposta, com uma resposta boa e a tempo.' },
            { label: 'O limite', text: 'Bom o suficiente vale pras portas de duas vias. Pras de uma via, volta a regra anterior: ali a pressa é o inimigo. Saber em qual porta você está é o que evita confundir coragem com imprudência.' },
        ],
    },
    27: {
        title: 'Decidir é assumir — e às vezes é chamar ajuda',
        lead: 'Escalar na hora certa é competência, não fraqueza.',
        script: [
            'Último ponto do plano: nem tudo é seu pra resolver sozinho. Saber a hora de escalar — chamar o gerente, o suporte, o colega mais experiente — é parte de decidir bem, não o oposto.',
            'A linha é mais ou menos essa: se é porta de duas vias e está dentro da sua alçada, resolva e siga — não terceirize o que é seu. Se é porta de uma via, está fora da sua alçada, ou envolve risco alto (jurídico, segurança, dinheiro grande), escale — mas escale do jeito certo.',
            'Escalar do jeito certo é chegar no gerente com o problema já mastigado: "aconteceu isso (fato), a causa parece ser essa, tenho três opções, recomendo a B, preciso da sua decisão". Isso é ouro. O contrário — "tá dando problema lá no balcão, vem cá" — joga o abacaxi no colo do outro. Quem escala com opções vira referência.',
        ],
        depth: [
            { label: 'A regra prática', text: 'Antes de escalar, tenha sempre: o fato, a causa provável e 2–3 opções com a sua recomendação. Você transforma "me ajuda" em "confirma minha decisão" — e acelera a resolução em vez de só transferir o peso.' },
            { label: 'Ponte com tecnologia', text: 'Em plantão de incidente existe a "política de escalonamento": se em X minutos não resolveu, chama o próximo nível. Não é vergonha — é desenho. Demorar a pedir ajuda por orgulho é o que transforma um problema pequeno em desastre.' },
        ],
    },

    // ───────────────────────── MOV. VI — PREVENIR ─────────────────────────
    28: {
        title: 'VI · Prevenir',
        lead: 'Apagar incêndio é trabalho. Evitar incêndio é liderança.',
        script: [
            'Sexto e último P: Prevenir. Os cinco primeiros resolveram o problema de hoje. Este aqui é diferente — é o que separa quem passa a vida apagando os mesmos incêndios de quem faz os incêndios pararem de acontecer.',
        ],
        depth: [
            { label: 'O movimento', text: 'Consertar o incidente E o sistema, fazer post-mortem sem caça às bruxas, e transformar cada problema num processo um pouco melhor — a essência da liderança que cresce.' },
        ],
    },
    29: {
        title: 'Dois consertos, não um',
        lead: 'O cliente de hoje é o incidente. O processo é o sistema.',
        script: [
            'Todo problema resolvido tem, na verdade, dois consertos. O primeiro é o incidente: o cliente da sua frente, agora. O segundo é o sistema: o que fez esse cliente aparecer — e que vai fazer o próximo aparecer se ninguém mexer.',
            'Quase todo mundo faz só o primeiro. Acalma o cliente, vai pra casa, sensação de dever cumprido. E na sexta seguinte, mesma fila, mesmo risco não registrado, mesmo cliente bravo. O incidente foi resolvido; o sistema, nunca.',
            'Prevenir é fazer o segundo conserto: levar a causa raiz pra quem pode mudar o processo. "Olha, a vistoria falha toda sexta porque a escala não cobre o pico — dá pra ajustar?". Cinco minutos disso valem mais que cem atendimentos heroicos.',
        ],
        depth: [
            { label: 'Por que quase ninguém faz', text: 'O conserto do incidente dá recompensa imediata (o cliente sorri, o chefe agradece). O conserto do sistema é invisível — ninguém aplaude um incêndio que não aconteceu. Por isso é raro. E por isso é valioso: é exatamente o que a liderança enxerga.' },
            { label: 'Para a vida', text: 'Brigou e fez as pazes? Consertou o incidente. Entender o que disparou a briga pra ela não se repetir? Consertou o sistema. A maioria dos relacionamentos vive de fazer as pazes sem nunca mexer no sistema.' },
        ],
    },
    30: {
        title: 'Erro vira aprendizado, não caça às bruxas',
        lead: 'Onde se procura culpado, ninguém conta a verdade.',
        script: [
            'Pra consertar o sistema, você precisa saber o que realmente aconteceu. E aqui tem uma lei de ferro: nos lugares onde errar significa ser punido e humilhado, as pessoas escondem os erros. E o que se esconde, não se conserta.',
            'Por isso a aviação — onde erro mata — inventou uma cultura diferente: depois de um incidente, todos sentam e reconstroem o que houve sem procurar culpado, só pra entender e melhorar o sistema. Resultado: voar virou a coisa mais segura que existe. Não porque os pilotos são heróis, mas porque os erros viram lição, abertamente.',
            'No nosso mundo: quando der ruim, troque o "de quem foi a culpa?" por "o que no nosso jeito de trabalhar deixou isso acontecer, e como mudamos?". A primeira pergunta cria medo e esconde problema. A segunda cria confiança e conserta o sistema. Se você lidera uma equipe, essa é a cultura mais poderosa que você pode construir.',
        ],
        depth: [
            { label: 'Fonte', text: 'É o "blameless post-mortem", padrão na aviação e nas grandes empresas de tecnologia. Atul Gawande, em "O Checklist", mostra como aviação e cirurgia reduziram erros drasticamente trocando heroísmo individual por sistemas e revisões sem culpa.' },
            { label: 'O detalhe que muda tudo', text: 'Sem culpa não é sem responsabilidade. As pessoas continuam responsáveis por agir; o que muda é que o objetivo da conversa é melhorar o sistema, não achar quem enforcar. É essa segurança que faz a verdade aparecer.' },
        ],
    },
    31: {
        title: 'A pergunta que separa o funcionário do líder',
        lead: '"Como faço isso não acontecer de novo?"',
        script: [
            'Junta tudo numa pergunta, a que define este movimento e, no fundo, a aula inteira: depois de resolver, você pergunta "como faço isso não acontecer de novo?". Quem nunca faz essa pergunta passa a carreira apagando os mesmos incêndios. Quem faz, vira a pessoa que melhora as coisas — e essa pessoa sobe.',
            'E não precisa ser revolução. Os japoneses têm uma palavra, kaizen: melhoria pequena e contínua. Uma melhoriazinha por problema. Um item a mais no checklist da vistoria. Uma bandeja embaixo do carro na troca de óleo. Um aviso no sistema. Pequeno, constante, pra sempre.',
            'É assim que se vira líder sem ninguém te dar o título: você é a pessoa que, toda vez que algo dá errado, deixa o processo um pouquinho melhor do que encontrou. As outras pessoas começam a confiar em você. E é isso que liderança é, no fim — confiança ganha resolvendo problema.',
        ],
        depth: [
            { label: 'Kaizen', text: 'Kaizen ("mudança para melhor") é o motor da Toyota: não grandes saltos, mas milhares de pequenas melhorias propostas por quem está no chão de fábrica. O insight é que quem está na operação vê problemas que o chefe nunca vê — e por isso é quem mais pode melhorar o sistema.' },
            { label: 'Ponte com tecnologia', text: 'A gente tem um valor chamado "deixe o código melhor do que você encontrou" (a regra do escoteiro). Vale pra tudo: deixe o balcão, a oficina, o processo um pouco melhor do que estava quando você chegou. Faça isso por anos e você terá construído algo.' },
        ],
    },

    // ───────────────────────── FECHO ─────────────────────────
    32: {
        title: 'Os 6 P, na fila das 18h',
        lead: 'A mesma cena — agora com método.',
        script: [
            'Voltemos ao começo. Sexta, 18h, cliente vermelho, fila crescendo. Agora com os 6 P na mão.',
            'Pausa: três segundos, uma respiração, você sai do piloto automático. Pessoa: "eu entendo, ninguém quer ser cobrado por algo que não fez — vamos olhar isso juntos" — e o cliente desarma. Problema: não é "cliente chato", é "um risco que ele contesta e que precisa ser conferido na vistoria". Porquê: por que isso acontece toda sexta? A vistoria às pressas, a escala que ignora o pico.',
            'Plano: porta de duas vias — você suspende a cobrança agora, registra pra conferir em 24h, e oferece ao cliente a escolha; a fila volta a andar. E Prevenir: na segunda, você leva pro gerente: "a vistoria falha no pico de sexta, a escala precisa olhar o movimento". O mesmo problema que ia te custar 30 minutos e uma avaliação 1 estrela virou um cliente respeitado e um processo melhor. Não foi sorte. Foi método.',
        ],
        depth: [
            { label: 'O arco fechado', text: 'A cena que abriu como caos fecha como demonstração. Os mesmos 90 segundos, a mesma fila — a diferença inteira está em ter um método em vez de um instinto. É isso que a aula entrega: não respostas prontas, e sim uma sequência que funciona em qualquer problema.' },
        ],
    },
    33: {
        title: 'O mesmo método, em tudo',
        lead: 'Qual problema seu, hoje, você está tratando pelo sintoma?',
        script: [
            'E aqui está o motivo de eu ter dito, lá no começo, que isso é para a vida. Os 6 P não sabem que estão numa locadora. Numa briga em casa: Pausa antes de responder, separe a Pessoa do Problema, descubra o problema de verdade (quase nunca é o prato na pia), o Porquê embaixo dele, um Plano, e Prevenir pra não repetir. Num problema de dinheiro, de saúde, com um filho — o mesmo caminho.',
            'Então eu fecho com a tese do começo, agora com ouvidos novos. Entenda antes de resolver. A causa raiz mora embaixo do primeiro porquê. E resolver de verdade é fazer o problema não voltar.',
            'A pergunta com que vocês saem hoje não é "você resolve problema rápido?". É outra, mais profunda: qual problema da sua vida — no trabalho ou fora dele — você tem tratado pelo sintoma, quando já estava na hora de descer até a causa? Fica a reflexão. (Não fechar com pressa. Deixar a pergunta no ar.)',
        ],
        depth: [
            { label: 'O fecho', text: 'A aula começou e terminou na mesma tese e na mesma cena, de propósito. Entre as duas pontas a turma recebeu um método de seis passos que cabe na mão. Se cada um sair com uma única pergunta viva — "estou tratando o sintoma ou a causa?" — a aula cumpriu o papel.' },
            { label: 'Encerramento sugerido', text: 'Agradeça, ofereça os 6 P como um "cartão de bolso" que você pode mandar depois (vale imprimir/enviar no grupo), e abra para perguntas finais. Termine na pergunta, não no slide.' },
        ],
    },
};
