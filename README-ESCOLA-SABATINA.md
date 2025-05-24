# 🙏 Escola Sabatina Interativa - Nos Salmos

Uma apresentação moderna e interativa para a Escola Sabatina Adventista com sistema de votação em tempo real, reações dos participantes e QR Code para engajamento móvel.

## ✨ Funcionalidades Dinâmicas

### 📱 Para os Participantes (Celular)
- **QR Code**: Escaneiem para participar instantaneamente
- **Votação em Tempo Real**: Respondam enquetes durante a apresentação
- **Reações**: Expressem seus sentimentos (Amém, Aleluia, Amor, Fogo, Revelação, Glória)
- **Contador de Presença**: Vejam quantas pessoas estão participando
- **Interface Responsiva**: Otimizada para celulares

### 🖥️ Para o Apresentador (Tela Principal)
- **Painel do Apresentador**: Controle completo das interações
- **Enquetes Pré-definidas**: 3 perguntas prontas sobre a lição dos Salmos
- **Resultados em Tempo Real**: Gráficos animados das votações
- **Reações Flutuantes**: Visualize as reações dos participantes na tela
- **Estatísticas Live**: Número de presentes e total de votos
- **Navegação Sincronizada**: Mudanças de slide são transmitidas para todos

## 🚀 Como Configurar

### 1. Instalar Dependências

```bash
# Para o projeto principal (Next.js)
npm install

# Para o servidor (em um terminal separado)
npm install --package-lock-only express socket.io cors
```

### 2. Executar o Sistema

```bash
# Terminal 1: Servidor de Interação
cd pasta-do-projeto
node server.js

# Terminal 2: Aplicação Next.js
npm run dev
```

### 3. Acessar

- **Apresentação Principal**: http://localhost:3000/salmos
- **Interface Móvel**: http://localhost:3000/mobile-interface

## 🎯 Como Usar Durante a Escola Sabatina

### Antes de Começar:
1. Conecte seu Mac à TV via HDMI
2. Abra http://localhost:3000/salmos no navegador
3. Pressione `F` para tela cheia
4. Clique no ícone de votação (canto superior direito) para ativar o modo apresentador

### Durante a Apresentação:
1. **Mostre o QR Code**: Clique no botão QR Code para os participantes escanearem
2. **Lance Enquetes**: Use as enquetes pré-definidas no painel do apresentador
3. **Monitore Reações**: Observe as reações em tempo real na lateral da tela
4. **Acompanhe Participação**: Veja o número de presentes no topo da tela

### Enquetes Incluídas:
1. "Qual aspecto dos Salmos mais toca seu coração?"
2. "Como você se conecta pessoalmente com o Santuário?"
3. "O que significa ter o 'nome de Deus' escrito na testa?"

## 🎮 Controles

### Navegação:
- **Setas ← →**: Navegar entre slides
- **F**: Ativar/desativar tela cheia
- **Clique nos botões**: Navegação por mouse/touch

### Interação:
- **Botão QR Code**: Mostrar/ocultar código QR
- **Botão Votação**: Ativar modo apresentador
- **Painel Lateral**: Controlar enquetes (modo apresentador)

## 💡 Dicas para Impressionar

### 1. **Engajamento Máximo**
- Lance a primeira enquete logo no início
- Encoraje reações durante momentos especiais
- Mostre os resultados das votações na tela

### 2. **Momentos Ideais para Enquetes**
- **Slide Introdutório**: "Qual aspecto dos Salmos..."
- **Slide do Santuário**: "Como você se conecta..."
- **Slide do Monte Sião**: "O que significa ter o nome de Deus..."

### 3. **Reações Recomendadas**
- **Verso para Memorizar**: Incentive "Amém" 🙏
- **Momentos de Louvor**: "Aleluia" 👏
- **Textos sobre Amor de Deus**: "Amor" ❤️
- **Revelações Especiais**: "Revelação" 💡

### 4. **Dinâmica Sugerida**
```
1. Slide Título → Mostrar QR Code → Aguardar participantes
2. Slide Introdução → Primeira enquete
3. Slides de Conteúdo → Incentivar reações
4. Slides com Perguntas → Enquetes específicas
5. Slide Final → Última enquete de reflexão
```

## 🔧 Personalização

### Adicionar Novas Enquetes:
Edite o arquivo `app/components/QRCodeInteraction.jsx`, seção `predefinedPolls`:

```javascript
{
  question: "Sua pergunta aqui?",
  options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"]
}
```

### Modificar Reações:
No arquivo `app/mobile-interface/page.jsx`, seção `reactions`:

```javascript
{ type: 'nova', icon: IconeReact, label: 'Label', color: 'from-cor1 to-cor2' }
```

## 🎨 Recursos Visuais

- **Animações Fluidas**: Transições suaves entre slides
- **Efeitos de Partículas**: Nuvens e luzes ambiente
- **Gradientes Dinâmicos**: Cores que se harmonizam com o tema celestial
- **Reações Animadas**: Efeitos flutuantes para feedback visual
- **QR Code Responsivo**: Aparência profissional e legível

## 📱 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos Móveis**: iOS, Android
- **Resoluções**: Otimizado para apresentações em TV e projetores

## 🙏 Versículo da Lição

> "Olhei, e eis que o Cordeiro estava em pé sobre o monte Sião. Com Ele estavam cento e quarenta e quatro mil, que tinham escrito na testa o nome do Cordeiro e o nome de Seu Pai" 
> 
> **Apocalipse 14:1**

---

**Que Deus abençoe sua apresentação e que os corações sejam tocados pela beleza dos Salmos! 🎵✨** 