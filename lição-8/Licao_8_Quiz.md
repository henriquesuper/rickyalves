# LIÇÃO 8: Quiz Interativo

## Tradução Bíblica — Da Língua Original ao Português

---

## MECÂNICA DO QUIZ

### Formato
- 5 perguntas Sim/Não/Talvez
- Guga responde no celular via `/apologetica/licao-8/participar`
- Respostas aparecem na tela principal (sem indicar certo/errado)
- Cada pergunta é revelada durante a aula no slide correspondente

### Instruções na Tela

```
"Antes de começar, quero testar suas intuições sobre tradução bíblica.
Responda SIM, NÃO ou TALVEZ.
Não vou dizer se você acertou agora —
você vai descobrir durante a aula."
```

---

## AS 5 PERGUNTAS

### Pergunta 1

```json
{
  "id": 1,
  "texto": "Toda tradução da Bíblia diz a mesma coisa — as diferenças são só de estilo.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [11, 12],
  "explicacao_curta": "Traduções fazem escolhas interpretativas. 'Propiciação' vs. 'sacrifício pelo pecado' vs. 'meio de perdão' não são só estilo — carregam teologia diferente.",
  "armadilha_cognitiva": "Parece razoável que sejam 'a mesma coisa com palavras diferentes', mas filosofias de tradução diferentes produzem textos significativamente diferentes em passagens-chave."
}
```

---

### Pergunta 2

```json
{
  "id": 2,
  "texto": "'Alma' no hebraico significa a mesma coisa que 'alma' na filosofia grega — uma essência imortal separada do corpo.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [16, 17],
  "explicacao_curta": "A palavra hebraica 'nephesh' significa 'ser vivente', 'vida', 'pessoa', até 'garganta'. Não tem nada a ver com a 'alma imortal' de Platão. Traduzir nephesh como 'alma' importou séculos de filosofia grega para dentro do texto hebraico.",
  "armadilha_cognitiva": "A maioria das pessoas assume que 'alma' na Bíblia significa a mesma coisa que na cultura popular (algo imortal que sai do corpo). O hebraico pensa de forma radicalmente diferente."
}
```

---

### Pergunta 3

```json
{
  "id": 3,
  "texto": "'Jeová' é o nome original de Deus em hebraico.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [19, 20],
  "explicacao_curta": "'Jeová' é um acidente histórico — uma combinação das consoantes de YHWH com as vogais de Adonai. O nome provavelmente era pronunciado 'Yahweh'. É como misturar duas palavras e criar uma terceira que nunca existiu.",
  "armadilha_cognitiva": "Muitos cristãos usam 'Jeová' como se fosse o nome correto. Testemunhas de Jeová construíram identidade inteira em torno dessa pronúncia. A história real é mais fascinante e mais humilde."
}
```

---

### Pergunta 4

```json
{
  "id": 4,
  "texto": "A NVI (Nova Versão Internacional) é a tradução mais fiel ao texto original em português.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "TALVEZ",
  "slide_revelacao": [22, 23],
  "explicacao_curta": "A NVI é excelente, mas tende a harmonizar tensões no texto — ou seja, quando o original é ambíguo ou parece contradizer outro texto, a NVI 'resolve' o problema para você. Traduções mais literais como a NAA preservam mais ambiguidades do original. 'Mais fiel' depende do que você valoriza.",
  "armadilha_cognitiva": "Não existe 'a melhor' tradução. Cada uma faz trade-offs diferentes. A pergunta certa não é 'qual é a melhor?' mas 'a melhor PARA QUÊ?'"
}
```

---

### Pergunta 5

```json
{
  "id": 5,
  "texto": "Se a tradução perfeita é impossível, então não podemos realmente confiar na Bíblia em português.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [30, 31],
  "explicacao_curta": "Tradução perfeita é impossível para QUALQUER texto em QUALQUER idioma. Isso não invalida a comunicação. A mensagem essencial da Bíblia — criação, pecado, graça, salvação, restauração — está clara em toda tradução séria. Nuances exigem estudo; o cerne, não.",
  "armadilha_cognitiva": "Essa é a objeção cética mais comum sobre tradução. Parece lógica ('se não é perfeito, não é confiável'), mas aplica um padrão impossível que invalidaria toda comunicação humana."
}
```

---

## LÓGICA DE APRESENTAÇÃO

### Antes do Quiz
```
Instrução na tela:
"Na lição passada vimos que temos o texto bíblico preservado.
Mas ele está em hebraico, aramaico e grego.
Como ele chega até você em português?
Vamos testar suas intuições."
```

### Durante o Quiz
- Uma pergunta por vez
- Guga responde no celular
- Resposta aparece na tela (sem certo/errado)
- Aguardar resposta antes de avançar

### Após o Quiz
- Mostrar resumo das respostas
- "Vamos ver o que descobrimos ao longo da aula."
- Transição para Slide 1

### Durante a Aula
- Quando chegar no slide de revelação, conectar com o quiz:
  - "Lembra da pergunta sobre 'alma'? Olha o que nephesh realmente significa..."
  - "Você respondeu [X] sobre Jeová. A história é fascinante..."

---

## IMPLEMENTAÇÃO TÉCNICA

### Estrutura de dados para `useLicao8Sync.js`

```javascript
const quizQuestions = [
  {
    id: 1,
    text: "Toda tradução da Bíblia diz a mesma coisa — as diferenças são só de estilo.",
    correctAnswer: "NÃO",
    revealSlides: [11, 12]
  },
  {
    id: 2,
    text: "'Alma' no hebraico significa a mesma coisa que 'alma' na filosofia grega — uma essência imortal separada do corpo.",
    correctAnswer: "NÃO",
    revealSlides: [16, 17]
  },
  {
    id: 3,
    text: "'Jeová' é o nome original de Deus em hebraico.",
    correctAnswer: "NÃO",
    revealSlides: [19, 20]
  },
  {
    id: 4,
    text: "A NVI é a tradução mais fiel ao texto original em português.",
    correctAnswer: "TALVEZ",
    revealSlides: [22, 23]
  },
  {
    id: 5,
    text: "Se a tradução perfeita é impossível, então não podemos realmente confiar na Bíblia em português.",
    correctAnswer: "NÃO",
    revealSlides: [30, 31]
  }
];
```

---

## FIM DO QUIZ
