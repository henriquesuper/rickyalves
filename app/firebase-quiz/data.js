export const questions = [
  {
    q: 'O que é o Firebase e qual problema ele tenta resolver no desenvolvimento de aplicações?',
    options: [
      'Uma linguagem de programação criada pelo Google para substituir JavaScript no backend',
      'Uma plataforma BaaS (Backend as a Service) do Google que oferece autenticação, banco de dados, hosting, funções serverless e outros serviços prontos, evitando a necessidade de montar e manter toda a infraestrutura',
      'Um framework de frontend concorrente do React e do Vue',
      'Um sistema operacional leve usado em servidores de produção',
    ],
    answer: 1,
  },
  {
    q: 'Qual a diferença entre Firebase Authentication e Firestore?',
    options: [
      'São a mesma coisa, apenas com nomes diferentes em versões distintas do Firebase',
      'O Authentication é um tipo de coleção dentro do Firestore usada para guardar senhas',
      'O Authentication cuida da identidade do usuário (login, cadastro, tokens) e o Firestore é um banco de dados NoSQL usado para armazenar os dados da aplicação',
      'O Firestore cuida da identidade do usuário e o Authentication é usado para guardar arquivos',
    ],
    answer: 2,
  },
  {
    q: 'Para que serve o Cloud Firestore?',
    options: [
      'Para hospedar arquivos estáticos como HTML e CSS',
      'Para enviar notificações push aos usuários',
      'Para executar código no servidor em resposta a eventos',
      'Para armazenar e sincronizar dados da aplicação em um banco NoSQL em nuvem, com suporte a consultas e atualizações em tempo real',
    ],
    answer: 3,
  },
  {
    q: 'Qual a diferença entre Firestore e Realtime Database?',
    options: [
      'Não existe diferença, são apenas nomes diferentes para o mesmo serviço',
      'O Firestore é estruturado em coleções e documentos, com consultas mais poderosas e escalabilidade melhor; o Realtime Database é baseado em uma grande árvore JSON e costuma ser usado para sincronização muito rápida e simples',
      'O Firestore só funciona offline e o Realtime Database só funciona online',
      'O Realtime Database é SQL e o Firestore é NoSQL',
    ],
    answer: 1,
  },
  {
    q: 'O que significa dizer que o Firestore é um banco NoSQL?',
    options: [
      'Que ele não suporta nenhum tipo de consulta',
      'Que ele não armazena dados de forma persistente',
      'Que ele não organiza dados em tabelas com linhas e colunas como um banco relacional, e sim em coleções de documentos flexíveis (JSON-like), sem schema rígido',
      'Que ele usa apenas a linguagem SQL para fazer consultas',
    ],
    answer: 2,
  },
  {
    q: 'No Firestore, qual a diferença entre collection e document?',
    options: [
      'Collection é um único registro e document é um conjunto de registros',
      'Collection é um container que agrupa vários documents; document é uma unidade individual de dados (tipo um objeto JSON) identificada por um ID',
      'Collection guarda imagens e document guarda textos',
      'São exatamente a mesma coisa, só muda o nome na API',
    ],
    answer: 1,
  },
  {
    q: 'Um documento no Firestore pode conter outro documento diretamente, ou ele precisa estar dentro de uma subcollection?',
    options: [
      'Pode conter outro document diretamente, sem subcollection',
      'Um document só pode guardar strings, nada mais',
      'Para aninhar documentos, é preciso criar uma subcollection dentro do document; um document não contém outro document diretamente',
      'Documentos no Firestore não podem ser aninhados de forma alguma',
    ],
    answer: 2,
  },
  {
    q: 'O que são regras de segurança no Firebase e por que elas são importantes?',
    options: [
      'São regras de estilo de código que o Firebase impõe aos desenvolvedores',
      'São configurações de billing que limitam o custo da aplicação',
      'São apenas sugestões opcionais, o Firebase já é seguro por padrão',
      'São regras declarativas que definem quem pode ler e escrever em cada caminho do Firestore/Storage; são importantes porque o cliente acessa o banco diretamente, então elas são a principal linha de defesa contra acesso indevido',
    ],
    answer: 3,
  },
  {
    q: 'Qual o risco de deixar as regras do Firestore abertas, permitindo leitura e escrita para qualquer usuário?',
    options: [
      'Nenhum risco, já que apenas o app consegue acessar o banco',
      'Qualquer pessoa na internet pode ler, alterar ou apagar todos os dados usando só as credenciais públicas do projeto, causando vazamento de dados e possibilidade de abuso/custo',
      'O único risco é o app ficar um pouco mais lento',
      'O Firebase automaticamente bloqueia requests suspeitos, então não há perigo real',
    ],
    answer: 1,
  },
  {
    q: 'Como o Firebase Authentication pode identificar um usuário dentro do app?',
    options: [
      'Através de um UID único gerado para cada usuário, acessível no objeto do usuário autenticado e utilizável nas regras de segurança e nas queries',
      'Usando apenas o endereço de IP do dispositivo',
      'Pelo nome completo que o usuário digita no cadastro',
      'Firebase Authentication não identifica usuários, só valida senhas',
    ],
    answer: 0,
  },
  {
    q: 'Quais métodos de login o Firebase Authentication pode oferecer? Cite pelo menos três.',
    options: [
      'Apenas e-mail e senha',
      'Apenas login por redes sociais',
      'E-mail/senha, provedores sociais (Google, Facebook, Apple, GitHub, etc.), telefone (SMS), link por e-mail e login anônimo, entre outros',
      'Somente biometria e reconhecimento facial',
    ],
    answer: 2,
  },
  {
    q: 'O que é o UID de um usuário no Firebase Authentication?',
    options: [
      'O e-mail do usuário em formato criptografado',
      'Um identificador único e imutável gerado pelo Firebase para cada usuário, usado para referenciá-lo de forma consistente em todo o backend',
      'O token JWT que expira a cada hora',
      'Um número sequencial visível para todos os usuários',
    ],
    answer: 1,
  },
  {
    q: 'Qual a vantagem de usar o UID como referência de usuário dentro do Firestore?',
    options: [
      'O UID é mais curto que um e-mail, economizando armazenamento',
      'Nenhuma, é só uma convenção estética',
      'Ele é estável (não muda se o usuário trocar e-mail ou telefone), único e permite amarrar regras de segurança do tipo "só o dono (request.auth.uid) pode ler/escrever este documento"',
      'Permite login automático sem senha',
    ],
    answer: 2,
  },
  {
    q: 'Para que serve o Firebase Hosting?',
    options: [
      'Para hospedar e servir arquivos estáticos e SPAs (HTML, CSS, JS) via CDN global, com HTTPS automático e integração com Cloud Functions',
      'Para hospedar máquinas virtuais com qualquer sistema operacional',
      'Para rodar bancos de dados relacionais',
      'Para enviar e-mails transacionais',
    ],
    answer: 0,
  },
  {
    q: 'O que são Cloud Functions for Firebase e em quais situações elas são úteis?',
    options: [
      'Funções JavaScript que rodam apenas no navegador do usuário',
      'Funções serverless que rodam no backend do Google em resposta a eventos (HTTP, mudança no Firestore, novo usuário, etc.); úteis para lógica sensível, integrações com APIs externas, processamento assíncrono e tarefas que não devem ficar no cliente',
      'Componentes visuais reutilizáveis para criar a interface',
      'Scripts que só podem ser executados manualmente pelo admin do projeto',
    ],
    answer: 1,
  },
  {
    q: 'Qual a diferença entre uma lógica executada no app do usuário e uma lógica executada em Cloud Functions?',
    options: [
      'No app, qualquer um pode inspecionar e modificar a lógica (é código público); em Cloud Functions, o código roda em um ambiente confiável no servidor, permitindo guardar chaves secretas e executar regras de negócio sem risco de serem adulteradas',
      'Não existe diferença prática, só o nome muda',
      'A lógica no app sempre é mais segura porque fica escondida no bundle',
      'Cloud Functions só servem para cron jobs, não para lógica de negócio',
    ],
    answer: 0,
  },
  {
    q: 'O que significa dizer que o Firestore pode trabalhar com listeners em tempo real?',
    options: [
      'Que o Firestore só funciona se o usuário ficar atualizando a página manualmente',
      'Que ele envia um e-mail sempre que os dados mudam',
      'Que ele só responde com dados uma vez por requisição, como uma API REST tradicional',
      'Que o cliente pode se inscrever em uma query e receber automaticamente novas versões dos dados sempre que algo muda no banco, sem precisar fazer polling',
    ],
    answer: 3,
  },
  {
    q: 'Em um app de chat, por que o Firebase costuma ser uma boa opção?',
    options: [
      'Porque ele já vem com uma UI de chat pronta para usar',
      'Porque combina autenticação, banco com listeners em tempo real (mensagens aparecem instantaneamente), regras de segurança por usuário, notificações push e escalabilidade, cobrindo quase tudo que um chat precisa sem montar backend próprio',
      'Porque é o único serviço que suporta mensagens de texto',
      'Porque impede que usuários troquem mensagens fora do horário comercial',
    ],
    answer: 1,
  },
  {
    q: 'Qual a diferença entre autenticar um usuário e autorizar o acesso dele a determinados dados?',
    options: [
      'Autenticar é permitir acesso a qualquer recurso; autorizar é só fazer login',
      'Autenticar é confirmar a identidade ("quem é você?"), autorizar é decidir o que essa identidade pode fazer ("o que você pode acessar?"); no Firebase, a autenticação é feita pelo Auth e a autorização, principalmente pelas regras de segurança',
      'São sinônimos no contexto do Firebase',
      'Autenticar é criptografar o dado; autorizar é descriptografar',
    ],
    answer: 1,
  },
  {
    q: 'Dê um exemplo prático de arquitetura simples usando pelo menos três serviços do Firebase em um único app.',
    options: [
      'Um app que usa só o Firestore para tudo, inclusive login e hospedagem',
      'Um app que só usa Cloud Functions, sem banco e sem frontend',
      'Um app de tarefas onde o frontend é servido pelo Firebase Hosting, os usuários fazem login pelo Firebase Authentication, e as tarefas de cada usuário ficam salvas no Cloud Firestore protegidas por regras de segurança baseadas no UID',
      'Um app que roda apenas offline, sem nenhum serviço de nuvem',
    ],
    answer: 2,
  },
];
