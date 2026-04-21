export const questions = [
  {
    q: 'O que é o Firebase e qual problema ele tenta resolver no desenvolvimento de aplicações?',
    options: [
      'Uma linguagem de programação criada pelo Google para substituir JavaScript em aplicações web modernas e apps mobile',
      'Uma plataforma BaaS do Google que entrega infraestrutura pronta (auth, banco, hosting) para apps',
      'Um framework de frontend concorrente direto do React e do Vue, focado em SPAs mobile-first e Progressive Web Apps',
      'Um sistema operacional leve, usado em servidores de borda para reduzir latência de rede em apps globais',
    ],
    answer: 1,
  },
  {
    q: 'Qual a diferença entre Firebase Authentication e Firestore?',
    options: [
      'São o mesmo produto, apenas com nomes diferentes em versões distintas do Firebase',
      'Authentication é um tipo de coleção dentro do Firestore, usada para guardar senhas com hash',
      'Authentication cuida da identidade (login, tokens); Firestore é o banco NoSQL que guarda dados',
      'Firestore cuida da identidade do usuário e Authentication é usado para armazenar arquivos binários',
    ],
    answer: 2,
  },
  {
    q: 'Para que serve o Cloud Firestore?',
    options: [
      'Para hospedar arquivos estáticos do app, como HTML, CSS e JavaScript, em uma CDN global',
      'Para enviar notificações push e in-app para dispositivos Android, iOS e navegadores',
      'Para executar código serverless no backend em resposta a eventos e requisições HTTP',
      'Para armazenar e sincronizar dados do app em um banco NoSQL, com queries e tempo real',
    ],
    answer: 3,
  },
  {
    q: 'Qual a diferença entre Firestore e Realtime Database?',
    options: [
      'Nenhuma diferença real, são apenas nomes diferentes para o mesmo serviço em regiões distintas',
      'Firestore usa coleções/documentos e tem queries mais ricas; Realtime é uma grande árvore JSON',
      'Firestore funciona apenas offline, enquanto o Realtime Database funciona apenas quando online',
      'O Realtime Database é um banco relacional tradicional e o Firestore é um banco NoSQL moderno',
    ],
    answer: 1,
  },
  {
    q: 'O que significa dizer que o Firestore é um banco NoSQL?',
    options: [
      'Que ele não suporta nenhum tipo de consulta, apenas leitura e escrita direta por ID único do documento',
      'Que ele não persiste os dados em disco, mantendo tudo em memória volátil do servidor do Google',
      'Que guarda dados em documentos flexíveis (tipo JSON), sem tabelas, colunas fixas nem schema rígido',
      'Que ele utiliza apenas a linguagem SQL padrão ANSI para todas as consultas, filtros e agregações',
    ],
    answer: 2,
  },
  {
    q: 'No Firestore, qual a diferença entre collection e document?',
    options: [
      'Collection é um único registro indexado e document é um conjunto de vários registros',
      'Collection é um container que agrupa documents; document é uma unidade de dados com ID',
      'Collection guarda imagens e arquivos binários, enquanto document guarda apenas textos curtos',
      'São exatamente a mesma coisa, a API só muda o nome dependendo do SDK que você usa',
    ],
    answer: 1,
  },
  {
    q: 'Um documento no Firestore pode conter outro documento diretamente, ou ele precisa estar dentro de uma subcollection?',
    options: [
      'Pode conter outro document diretamente como campo, sem precisar de subcollection nenhuma a mais',
      'Um document só pode guardar strings simples; qualquer outro tipo de dado precisa ser serializado antes',
      'Para aninhar documents, é preciso criar uma subcollection; document não contém document direto',
      'Documentos no Firestore não podem ser aninhados de forma alguma, apenas listados em paralelo na mesma coleção',
    ],
    answer: 2,
  },
  {
    q: 'O que são regras de segurança no Firebase e por que elas são importantes?',
    options: [
      'Regras de estilo de código que o CLI do Firebase impõe ao fazer deploy do projeto em produção',
      'Configurações de billing que limitam o custo mensal da aplicação e cortam acessos em caso de abuso',
      'Sugestões opcionais; o Firebase já valida tudo por padrão contra acessos indevidos ao banco',
      'Declarações que definem quem pode ler/escrever em cada caminho — principal linha de defesa',
    ],
    answer: 3,
  },
  {
    q: 'Qual o risco de deixar as regras do Firestore abertas, permitindo leitura e escrita para qualquer usuário?',
    options: [
      'Nenhum risco real, já que apenas o próprio app consegue acessar o banco via SDK oficial do Firebase',
      'Qualquer um na internet pode ler, alterar ou apagar todos os dados usando só as chaves públicas',
      'O único efeito colateral é o app ficar um pouco mais lento em horários de pico de acesso dos usuários',
      'O Firebase bloqueia automaticamente requests suspeitos com base em heurística, então é seguro o bastante',
    ],
    answer: 1,
  },
  {
    q: 'Como o Firebase Authentication pode identificar um usuário dentro do app?',
    options: [
      'Através de um UID único gerado pelo Firebase, disponível no objeto do usuário logado',
      'Usando apenas o endereço IP do dispositivo, que é reservado exclusivamente por sessão',
      'Pelo nome completo digitado no cadastro, que funciona como chave primária no Auth',
      'O Firebase Authentication não identifica usuários, apenas valida senhas contra um hash',
    ],
    answer: 0,
  },
  {
    q: 'Quais métodos de login o Firebase Authentication pode oferecer? Cite pelo menos três.',
    options: [
      'Apenas e-mail e senha, que é o método padrão suportado por todos os projetos criados no console',
      'Apenas login via redes sociais (Google, Facebook, Apple, GitHub), sem suporte a e-mail e senha tradicional',
      'E-mail/senha, provedores sociais (Google, Apple, etc), telefone via SMS, link por e-mail e login anônimo',
      'Somente biometria e reconhecimento facial, via integração nativa com iOS, Android e WebAuthn',
    ],
    answer: 2,
  },
  {
    q: 'O que é o UID de um usuário no Firebase Authentication?',
    options: [
      'O e-mail do usuário codificado em base64, usado internamente nas chamadas da API do Firebase',
      'Um identificador único e imutável, gerado pelo Firebase para referenciar cada usuário de forma estável',
      'O token JWT de acesso, que expira a cada hora e é renovado automaticamente pelo SDK oficial',
      'Um número sequencial, visível publicamente no perfil, que indica a ordem de cadastro no projeto',
    ],
    answer: 1,
  },
  {
    q: 'Qual a vantagem de usar o UID como referência de usuário dentro do Firestore?',
    options: [
      'É mais curto que um e-mail, o que reduz o custo de armazenamento em grandes volumes de documentos',
      'Permite login automático sem senha, já que o UID funciona como credencial permanente no frontend',
      'É estável e único, permitindo regras do tipo "só request.auth.uid pode acessar este documento"',
      'Nenhuma vantagem prática concreta; é apenas uma convenção estética adotada nos tutoriais oficiais',
    ],
    answer: 2,
  },
  {
    q: 'Para que serve o Firebase Hosting?',
    options: [
      'Para servir arquivos estáticos e SPAs a partir de uma CDN global, com HTTPS e rollback de versão',
      'Para hospedar máquinas virtuais com qualquer sistema operacional, como AWS EC2 ou GCP Compute',
      'Para rodar bancos de dados relacionais gerenciados, como Postgres e MySQL, em alta disponibilidade',
      'Para enviar e-mails transacionais e campanhas de marketing a partir do domínio do projeto',
    ],
    answer: 0,
  },
  {
    q: 'O que são Cloud Functions for Firebase e em quais situações elas são úteis?',
    options: [
      'Funções JavaScript que rodam apenas no navegador do usuário, substituindo os service workers do app',
      'Funções serverless rodando no backend do Google, acionadas por eventos (HTTP, Firestore, Auth)',
      'Componentes visuais reutilizáveis para construir a UI do app, no estilo do React, Vue ou Angular',
      'Scripts que só podem ser executados manualmente pelo admin através do console do Firebase na nuvem',
    ],
    answer: 1,
  },
  {
    q: 'Qual a diferença entre uma lógica executada no app do usuário e uma lógica executada em Cloud Functions?',
    options: [
      'No app, o código é público e pode ser inspecionado; em Functions, roda em ambiente confiável',
      'Não há diferença prática; só muda o nome do serviço usado para faturar o consumo de CPU',
      'A lógica no app é sempre mais segura, pois fica "escondida" dentro do bundle minificado',
      'Cloud Functions só servem para cron jobs agendados, nunca para regras de negócio do app',
    ],
    answer: 0,
  },
  {
    q: 'O que significa dizer que o Firestore pode trabalhar com listeners em tempo real?',
    options: [
      'Que o Firestore só funciona se o usuário recarregar a página manualmente a cada ação',
      'Que ele dispara um e-mail ou notificação push sempre que algum dado do banco é alterado',
      'Que ele responde apenas uma vez por requisição, como uma API REST tradicional sem stream',
      'Que o cliente pode se inscrever em uma query e receber atualizações automáticas a cada mudança',
    ],
    answer: 3,
  },
  {
    q: 'Em um app de chat, por que o Firebase costuma ser uma boa opção?',
    options: [
      'Porque ele já traz componentes de UI de chat prontos, bastando plugar no projeto e estilizar',
      'Combina auth, listeners em tempo real, regras por usuário e push — cobre quase tudo do chat',
      'Porque é o único serviço do mercado capaz de entregar mensagens de texto em qualquer plataforma móvel',
      'Porque bloqueia automaticamente mensagens fora do horário comercial configurado pelo admin do projeto',
    ],
    answer: 1,
  },
  {
    q: 'Qual a diferença entre autenticar um usuário e autorizar o acesso dele a determinados dados?',
    options: [
      'Autenticar é liberar acesso a qualquer recurso; autorizar é apenas o ato de fazer login',
      'Autenticar confirma a identidade ("quem é você?"); autorizar decide "o que você pode acessar?"',
      'São sinônimos no contexto do Firebase, tratados pelo mesmo serviço de forma transparente',
      'Autenticar é criptografar os dados no cliente; autorizar é descriptografá-los no servidor',
    ],
    answer: 1,
  },
  {
    q: 'Dê um exemplo prático de arquitetura simples usando pelo menos três serviços do Firebase em um único app.',
    options: [
      'Um app que usa só o Firestore para tudo, inclusive login, hospedagem e envio de e-mails transacionais',
      'Um app que usa apenas Cloud Functions, sem banco, sem frontend e sem autenticação de usuários',
      'Frontend no Hosting, login via Authentication e dados do usuário salvos no Firestore por UID',
      'Um app totalmente offline, sem nenhum serviço de nuvem, apenas cache local no dispositivo do usuário',
    ],
    answer: 2,
  },
];
