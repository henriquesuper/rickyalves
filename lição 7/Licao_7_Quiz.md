# LIÇÃO 7: Quiz Inicial

## Configuração do Quiz

---

## METADADOS

```javascript
{
  "licao": 7,
  "titulo": "Manuscritos, Transmissão Textual e Confiabilidade",
  "num_perguntas": 6,
  "tipo_resposta": ["SIM", "NÃO", "TALVEZ"],
  "revelar_respostas": false,
  "proposito": "Expor intuições que serão confirmadas ou corrigidas durante a aula"
}
```

---

## PERGUNTAS

### Pergunta 1

```javascript
{
  "id": 1,
  "texto": "400.000 erros na Bíblia significa que não sabemos o que ela dizia originalmente.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [24, 25],
  "explicacao_curta": "A maioria (99%) das variantes são triviais (ortografia, ordem de palavras). Nenhuma afeta doutrina essencial.",
  "armadilha_cognitiva": "O número 400.000 parece catastrófico, mas mais manuscritos = mais variantes contadas E mais certeza sobre o original."
}
```

---

### Pergunta 2

```javascript
{
  "id": 2,
  "texto": "Temos mais manuscritos de Platão do que da Bíblia.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [6, 7],
  "explicacao_curta": "Platão: 7 manuscritos. Bíblia: 25.000+. É o contrário, absurdamente.",
  "armadilha_cognitiva": "Muitas pessoas assumem que textos 'seculares' têm melhor preservação que textos 'religiosos'."
}
```

---

### Pergunta 3

```javascript
{
  "id": 3,
  "texto": "O manuscrito mais antigo do Novo Testamento é de aproximadamente 300 d.C.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [10],
  "explicacao_curta": "O P52 (fragmento de João) é de ~125 d.C. — apenas 25-30 anos após João escrever.",
  "armadilha_cognitiva": "As pessoas tendem a achar que há um 'gap' enorme entre os eventos e os manuscritos."
}
```

---

### Pergunta 4

```javascript
{
  "id": 4,
  "texto": "Os Manuscritos do Mar Morto são do Novo Testamento.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [15],
  "explicacao_curta": "São do Antigo Testamento. Datam de 250 a.C. a 68 d.C. — antes de Jesus nascer até pouco depois.",
  "armadilha_cognitiva": "O nome 'Mar Morto' e a fama da descoberta fazem as pessoas confundirem com textos cristãos."
}
```

---

### Pergunta 5

```javascript
{
  "id": 5,
  "texto": "Alguma doutrina central do cristianismo depende de um versículo com variante textual.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "NÃO",
  "slide_revelacao": [27, 35],
  "explicacao_curta": "Todas as doutrinas centrais (divindade de Cristo, ressurreição, salvação) têm MÚLTIPLAS bases bíblicas.",
  "armadilha_cognitiva": "Variantes parecem ameaçadoras, mas nenhuma afeta algo essencial."
}
```

---

### Pergunta 6

```javascript
{
  "id": 6,
  "texto": "A história da mulher adúltera (João 8) provavelmente não estava no evangelho original de João.",
  "opcoes": ["SIM", "NÃO", "TALVEZ"],
  "resposta_correta": "SIM",
  "slide_revelacao": [29],
  "explicacao_curta": "Estudiosos concordam que provavelmente foi adição posterior. MAS isso não significa que é falsa — pode ser história verdadeira preservada por outra via.",
  "armadilha_cognitiva": "Esta é a pergunta 'armadilha positiva' — a resposta 'sim' mostra que honestidade não destrói a fé."
}
```

---

## LÓGICA DE APRESENTAÇÃO

### Antes do Quiz
Mostrar instrução:
```
"Antes de começarmos, quero saber suas intuições.
Responda SIM, NÃO ou TALVEZ para cada afirmação.
Não vou dizer se você acertou agora —
você vai descobrir durante a aula."
```

### Durante o Quiz
- Uma pergunta por vez
- Guga responde no celular (`/participar`)
- Resposta aparece na tela principal (sem indicar certo/errado)
- Aguardar resposta antes de avançar

### Após o Quiz
- Mostrar resumo das respostas da Guga
- Dizer: "Vamos ver quantas você acertou ao longo da aula."
- Transição para Slide 1

### Durante a Aula
- Quando chegar no slide de revelação, fazer referência à pergunta do quiz
- "Lembra da pergunta sobre 400.000 erros? Vamos ver..."
- Não precisa interromper o fluxo — apenas conectar

---

## IMPLEMENTAÇÃO TÉCNICA

### Estrutura de dados para `useLicao7Sync.js`

```javascript
const quizQuestions = [
  {
    id: 1,
    text: "400.000 erros na Bíblia significa que não sabemos o que ela dizia originalmente.",
    correctAnswer: "NÃO",
    revealSlides: [24, 25]
  },
  {
    id: 2,
    text: "Temos mais manuscritos de Platão do que da Bíblia.",
    correctAnswer: "NÃO",
    revealSlides: [6, 7]
  },
  {
    id: 3,
    text: "O manuscrito mais antigo do Novo Testamento é de aproximadamente 300 d.C.",
    correctAnswer: "NÃO",
    revealSlides: [10]
  },
  {
    id: 4,
    text: "Os Manuscritos do Mar Morto são do Novo Testamento.",
    correctAnswer: "NÃO",
    revealSlides: [15]
  },
  {
    id: 5,
    text: "Alguma doutrina central do cristianismo depende de um versículo com variante textual.",
    correctAnswer: "NÃO",
    revealSlides: [27, 35]
  },
  {
    id: 6,
    text: "A história da mulher adúltera (João 8) provavelmente não estava no evangelho original de João.",
    correctAnswer: "SIM",
    revealSlides: [29]
  }
];
```

---

## DESIGN DO QUIZ

### Visual da Tela de Pergunta
- Fundo: Pergaminho envelhecido
- Pergunta: Fonte serifada, tamanho grande, centralizada
- Número da pergunta: Canto superior ("1 de 6")
- Opções: Três botões estilo "selo de cera"
  - SIM (selo vermelho)
  - NÃO (selo marrom)
  - TALVEZ (selo dourado)

### Visual da Resposta Registrada
- Mostrar a opção selecionada pela Guga
- Sem indicação de certo/errado
- Animação sutil de "selo carimbado"
- Transição para próxima pergunta após 2 segundos

### Visual do Resumo Final
- Lista das 6 perguntas com respostas da Guga
- Texto: "Vamos descobrir juntos ao longo da aula..."
- Botão para começar os slides

---

## FIM DO DOCUMENTO DE QUIZ
