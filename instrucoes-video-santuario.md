# 🎬 Instruções Completas: Vídeo do Santuário
## Preparação e Implementação

---

## 📋 **PASSO A PASSO COMPLETO**

### **1. PREPARAÇÃO DO VÍDEO COM FFMPEG**

#### **Comando Principal (Qualidade Alta):**
```bash
ffmpeg -i seu_video.mp4 \
  -c:v libvpx-vp9 \
  -crf 28 \
  -b:v 2M \
  -filter_complex "[0:v]fade=type=out:start_time=66:duration=0.5:color=black[v]" \
  -map "[v]" \
  -an \
  -t 66.5 \
  -pix_fmt yuv420p \
  -row-mt 1 \
  -tile-columns 2 \
  tabernacle_loop.webm
```

#### **Versão Compacta (Se o arquivo ficar muito grande):**
```bash
ffmpeg -i seu_video.mp4 \
  -c:v libvpx-vp9 \
  -crf 32 \
  -b:v 1.5M \
  -filter_complex "[0:v]fade=type=out:start_time=66:duration=0.5:color=black[v]" \
  -map "[v]" \
  -an \
  -t 66.5 \
  -pix_fmt yuv420p \
  -row-mt 1 \
  -tile-columns 2 \
  tabernacle_loop.webm
```

#### **Fallback MP4 (Para compatibilidade):**
```bash
ffmpeg -i seu_video.mp4 \
  -c:v libx264 \
  -crf 23 \
  -preset medium \
  -filter_complex "[0:v]fade=type=out:start_time=66:duration=0.5:color=black[v]" \
  -map "[v]" \
  -an \
  -t 66.5 \
  -pix_fmt yuv420p \
  tabernacle_loop.mp4
```

---

## 🔧 **EXPLICAÇÃO DOS PARÂMETROS**

### **Principais:**
- **`-c:v libvpx-vp9`** = Codec VP9 (melhor para WebM)
- **`-crf 28`** = Qualidade constante (20-30 = boa qualidade)
- **`-b:v 2M`** = Bitrate máximo 2Mbps
- **`fade=type=out:start_time=66:duration=0.5`** = Fade out aos 66s por 0.5s
- **`-an`** = Remove áudio completamente
- **`-t 66.5`** = Corta em 66.5 segundos (1:06.5)

### **Otimizações:**
- **`-row-mt 1`** = Multi-threading para velocidade
- **`-tile-columns 2`** = Parallelization para VP9
- **`-pix_fmt yuv420p`** = Compatibilidade web máxima

---

## 📁 **ESTRUTURA DE ARQUIVOS**

### **Onde Colocar os Vídeos:**
```
projeto/
├── public/
│   └── videos/
│       ├── tabernacle_loop.webm  (Principal)
│       └── tabernacle_loop.mp4   (Fallback)
└── app/
    └── salmos/
        └── page.jsx              (Já modificado)
```

### **Tamanhos Esperados:**
- **WebM VP9:** ~15-25MB (1080p, 66s)
- **MP4 H.264:** ~20-35MB (1080p, 66s)

---

## ⚙️ **CONFIGURAÇÕES DO VÍDEO**

### **Filtros Aplicados no CSS:**
```css
filter: brightness(0.85) contrast(1.15) saturate(1.1)
```
- **brightness(0.85)** = Reduz brilho para não ofuscar texto
- **contrast(1.15)** = Aumenta contraste para definição
- **saturate(1.1)** = Realça cores sutilmente

### **Propriedades do Player:**
- **`autoPlay`** = Inicia automaticamente
- **`loop`** = Loop infinito
- **`muted`** = Sem som (necessário para autoplay)
- **`playsInline`** = Evita fullscreen automático no mobile
- **`preload="auto"`** = Carrega o vídeo antecipadamente

---

## 🎯 **TESTES E VALIDAÇÃO**

### **Checklist Antes da Apresentação:**
- [ ] Vídeo carrega em menos de 3 segundos
- [ ] Loop funciona perfeitamente (sem "pulo")
- [ ] Fade out acontece aos 66 segundos
- [ ] Fallback MP4 funciona se WebM falhar
- [ ] Qualidade visual mantida em 1080p
- [ ] Sem áudio (completamente silencioso)
- [ ] Integração visual com UI da apresentação

### **Comandos de Teste:**
```bash
# Verificar duração
ffprobe -v quiet -show_entries format=duration -of csv="p=0" tabernacle_loop.webm

# Verificar se tem áudio
ffprobe -v quiet -show_entries stream=codec_type -of csv="p=0" tabernacle_loop.webm

# Verificar tamanho do arquivo
ls -lh tabernacle_loop.webm
```

---

## 🚀 **OTIMIZAÇÕES AVANÇADAS**

### **Se o Arquivo Ficar Muito Grande (>30MB):**
```bash
# Versão ultra-compacta
ffmpeg -i seu_video.mp4 \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 1M \
  -filter_complex "[0:v]scale=1280:720,fade=type=out:start_time=66:duration=0.5:color=black[v]" \
  -map "[v]" \
  -an \
  -t 66.5 \
  -pix_fmt yuv420p \
  tabernacle_loop_720p.webm
```

### **Se Quiser Ainda Mais Qualidade:**
```bash
# Versão premium (arquivo maior)
ffmpeg -i seu_video.mp4 \
  -c:v libvpx-vp9 \
  -crf 24 \
  -b:v 3M \
  -filter_complex "[0:v]fade=type=out:start_time=66:duration=0.5:color=black[v]" \
  -map "[v]" \
  -an \
  -t 66.5 \
  -pix_fmt yuv420p \
  -row-mt 1 \
  -tile-columns 2 \
  tabernacle_loop_hq.webm
```

---

## 🎨 **PERSONALIZAÇÃO VISUAL**

### **Se Quiser Ajustar Cores no CSS:**
```css
/* Mais dramático */
filter: brightness(0.8) contrast(1.2) saturate(1.3) hue-rotate(10deg);

/* Mais suave */
filter: brightness(0.9) contrast(1.1) saturate(1.0);

/* Tom dourado */
filter: brightness(0.85) contrast(1.15) saturate(1.2) sepia(0.1);
```

### **Overlay Personalizado:**
No código React, você pode ajustar:
```jsx
{/* Overlay mais escuro */}
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>

{/* Overlay colorido */}
<div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-amber-800/20 pointer-events-none"></div>
```

---

## 🔍 **TROUBLESHOOTING**

### **Problema: Vídeo não carrega**
- ✅ Verificar se o arquivo está em `public/videos/`
- ✅ Confirmar nomes dos arquivos (`tabernacle_loop.webm`)
- ✅ Testar URLs diretamente no navegador

### **Problema: Loop não é perfeito**
- ✅ Ajustar tempo do fade: `start_time=65.5` ou `start_time=66.5`
- ✅ Verificar duração exata do vídeo original

### **Problema: Arquivo muito grande**
- ✅ Usar versão compacta (CRF 32-35)
- ✅ Reduzir resolução para 720p
- ✅ Diminuir bitrate (`-b:v 1M`)

### **Problema: Qualidade ruim**
- ✅ Diminuir CRF (22-28)
- ✅ Aumentar bitrate (`-b:v 3M`)
- ✅ Manter resolução 1080p

---

## 📊 **CONFIGURAÇÕES RECOMENDADAS POR CENÁRIO**

### **Apresentação Local (Wi-Fi Rápido):**
- **CRF:** 28
- **Bitrate:** 2M
- **Resolução:** 1080p
- **Tamanho esperado:** ~20MB

### **Apresentação Online (Upload Limitado):**
- **CRF:** 32
- **Bitrate:** 1.5M
- **Resolução:** 1080p
- **Tamanho esperado:** ~15MB

### **Máxima Qualidade (Sem Limitações):**
- **CRF:** 24
- **Bitrate:** 3M
- **Resolução:** 1080p
- **Tamanho esperado:** ~35MB

---

## ✅ **CHECKLIST FINAL**

### **Antes da Apresentação:**
- [ ] Dois arquivos criados (WebM + MP4)
- [ ] Testado em Chrome (foco principal)
- [ ] Loop perfeito confirmado
- [ ] Velocidade de carregamento adequada
- [ ] Integração visual aprovada
- [ ] Backup em pendrive (se necessário)

### **Durante a Apresentação:**
- [ ] Conexão à internet estável
- [ ] Cache do navegador limpo
- [ ] Slides carregados antecipadamente
- [ ] Volume do sistema verificado (deve estar mudo)

---

*"O vídeo do santuário vai elevar sua apresentação a um nível completamente novo. A combinação de movimento, qualidade visual e simbolismo religioso vai impressionar profundamente os veteranos adventistas!"* 🏛️✨ 