# 🚀 Guia de Deploy - Escola Sabatina Interativa no Vercel

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Repositório Git (GitHub, GitLab, ou Bitbucket)
3. Arquivos do projeto preparados

## 🛠️ Preparação do Projeto

### 1. Estrutura de Arquivos Necessários

Certifique-se de que você tem:
- ✅ `vercel.json` (configuração do Vercel)
- ✅ `app/api/socket/route.js` (API route para interações)
- ✅ `app/hooks/useInteraction.js` (hook compatível com Vercel)
- ✅ `package.json` atualizado

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `env.example` para `.env.local`:

```bash
cp env.example .env.local
```

Edite `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://rickyalves.com
NODE_ENV=production
```

## 🌐 Deploy no Vercel

### Método 1: Via Dashboard do Vercel

1. **Conecte seu repositório:**
   - Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
   - Clique em "New Project"
   - Conecte seu repositório Git

2. **Configure o projeto:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (raiz do projeto)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

3. **Variáveis de ambiente:**
   - Adicione: `NEXT_PUBLIC_SITE_URL` = `https://rickyalves.com`

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o build completar

### Método 2: Via CLI do Vercel

```bash
# Instalar CLI do Vercel
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Configurar domínio personalizado (opcional)
vercel --prod
```

## 🔧 Configurações Importantes

### 1. Domínio Personalizado

No dashboard do Vercel:
1. Vá em "Domains"
2. Adicione `rickyalves.com/salmos`
3. Configure DNS conforme instruções

### 2. Variáveis de Ambiente de Produção

No dashboard do Vercel > Settings > Environment Variables:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `NEXT_PUBLIC_SITE_URL` | `https://rickyalves.com` | Production |

### 3. Configurações de Build

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 📱 URLs Finais

Após o deploy:

- **Apresentação Principal:** `https://rickyalves.com/salmos`
- **Interface Móvel:** `https://rickyalves.com/mobile-interface`
- **API:** `https://rickyalves.com/api/socket`

## 🧪 Testando o Deploy

1. **Acesse a apresentação:**
   ```
   https://rickyalves.com/salmos
   ```

2. **Teste no mobile:**
   - Acesse `https://rickyalves.com/mobile-interface`
   - Registre-se com um nome
   - Teste as reações

3. **Teste as enquetes:**
   - No modo apresentador
   - Crie uma enquete
   - Vote pelo mobile

## 🔄 Diferenças entre Local e Produção

| Recurso | Local | Vercel |
|---------|-------|--------|
| Real-time | Socket.io | Polling HTTP |
| Dados | Memória | Estado global |
| Latência | ~0ms | ~100-500ms |
| Simultaneidade | Ilimitada | Limitada |

## 🐛 Troubleshooting

### Erro de Build
```bash
# Verificar dependências
npm install

# Build local
npm run build
```

### QR Code não funciona
- Verificar NEXT_PUBLIC_SITE_URL
- Confirmar domínio no DNS

### Interações não funcionam
- Verificar API routes
- Testar endpoints manualmente

## 🚀 Performance

### Otimizações Automáticas do Vercel:
- ✅ CDN global
- ✅ Compressão automática
- ✅ Image optimization
- ✅ Edge caching

### Limitações:
- ⚠️ Polling em vez de WebSocket
- ⚠️ Estado temporário (resetado a cada deploy)
- ⚠️ Limite de requests por minuto

## 💡 Recomendações Futuras

Para uma versão mais robusta em produção:

1. **Banco de dados persistente:**
   - PostgreSQL (Vercel Postgres)
   - Redis para cache

2. **WebSocket real:**
   - Ably ou Pusher
   - WebSocket service separado

3. **Analytics:**
   - Vercel Analytics
   - Google Analytics

## 📞 Suporte

Em caso de problemas:
1. Verificar logs no Vercel Dashboard
2. Testar localmente primeiro
3. Verificar variáveis de ambiente
4. Consultar documentação do Vercel

---

🙏 **Que Deus abençoe sua apresentação da Escola Sabatina!** 