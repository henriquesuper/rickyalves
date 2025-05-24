#!/bin/bash

# Script de Inicialização da Escola Sabatina Interativa
# Nos Salmos - Parte 1

echo "🙏 =================================="
echo "   ESCOLA SABATINA INTERATIVA"
echo "        Nos Salmos - Parte 1"
echo "================================== 🙏"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado. Por favor, instale Node.js primeiro."
    exit 1
fi

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências do projeto principal..."
    npm install
    echo "✅ Dependências instaladas!"
    echo ""
fi

# Instalar dependências do servidor se necessário
if [ ! -f "package-lock.json" ]; then
    echo "📦 Instalando dependências do servidor..."
    npm install express socket.io cors nodemon
    echo "✅ Dependências do servidor instaladas!"
    echo ""
fi

echo "🚀 Iniciando Escola Sabatina Interativa..."
echo ""
echo "📍 URLs importantes:"
echo "   • Apresentação Principal: http://localhost:3000/salmos"
echo "   • Interface Móvel: http://localhost:3000/mobile-interface"
echo ""
echo "💡 Instruções rápidas:"
echo "   1. Abra a apresentação principal no Mac"
echo "   2. Conecte à TV via HDMI"
echo "   3. Pressione 'F' para tela cheia"
echo "   4. Clique no ícone de votação para ativar modo apresentador"
echo "   5. Mostre o QR Code para os participantes"
echo ""
echo "🎮 Controles:"
echo "   • Setas ← → para navegar"
echo "   • F para tela cheia"
echo "   • Clique no QR Code para mostrar aos participantes"
echo ""

# Função para verificar se uma porta está em uso
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        return 0
    else
        return 1
    fi
}

# Verificar se as portas estão livres
if check_port 3000; then
    echo "⚠️  Porta 3000 já está em uso. Finalizando processo..."
    pkill -f "next dev"
    sleep 2
fi

if check_port 3001; then
    echo "⚠️  Porta 3001 já está em uso. Finalizando processo..."
    pkill -f "node server.js"
    sleep 2
fi

echo "🔧 Iniciando serviços..."

# Iniciar o servidor de interação em background
echo "   → Iniciando servidor de interação (porta 3001)..."
node server.js &
SERVER_PID=$!

# Aguardar o servidor inicializar
sleep 3

# Iniciar a aplicação Next.js
echo "   → Iniciando aplicação Next.js (porta 3000)..."
npm run dev &
NEXTJS_PID=$!

# Aguardar a aplicação inicializar
sleep 5

echo ""
echo "✅ Sistema iniciado com sucesso!"
echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "   1. Abra http://localhost:3000/salmos no seu navegador"
echo "   2. Conecte o Mac à TV via HDMI"
echo "   3. Ative o modo apresentação (F para tela cheia)"
echo "   4. Clique no botão de votação (ícone superior direito)"
echo "   5. Mostre o QR Code para os participantes se conectarem"
echo ""
echo "📱 Os participantes devem acessar: http://localhost:3000/mobile-interface"
echo "   ou escanear o QR Code que aparecerá na tela"
echo ""
echo "🛑 Para parar o sistema: Pressione Ctrl+C"
echo ""
echo "🙏 Que Deus abençoe sua apresentação!"
echo ""

# Função para cleanup quando o script é interrompido
cleanup() {
    echo ""
    echo "🛑 Parando Escola Sabatina Interativa..."
    kill $SERVER_PID 2>/dev/null
    kill $NEXTJS_PID 2>/dev/null
    pkill -f "next dev" 2>/dev/null
    pkill -f "node server.js" 2>/dev/null
    echo "✅ Sistema finalizado. Até a próxima escola sabatina!"
    exit 0
}

# Capturar sinais de interrupção
trap cleanup SIGINT SIGTERM

# Manter o script rodando
echo "⏳ Sistema rodando... Pressione Ctrl+C para parar"
wait 