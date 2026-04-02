import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Você é um analista de segurança executiva com 30 anos de experiência. Analise os dados de segurança do local a seguir e forneça:
1) Um score de risco de 0 a 100 (onde 100 é risco máximo)
2) Um breakdown por categoria: perimetral (0-100), acesso (0-100), externo (0-100), interno (0-100), eletronico (0-100)
3) Uma lista priorizada de recomendações práticas com nível de prioridade (alta, media, baixa)

Considere especialmente: criminalidade da região, ausência de controles de acesso, falta de monitoramento eletrônico, e fragilidades estruturais.

Responda APENAS em formato JSON válido com a seguinte estrutura:
{
  "score": number,
  "nivel": "Alto" | "Medio" | "Baixo",
  "breakdown": {
    "perimetral": number,
    "acesso": number,
    "externo": number,
    "interno": number,
    "eletronico": number
  },
  "recomendacoes": [
    { "prioridade": "alta" | "media" | "baixa", "texto": "string" }
  ]
}`;

// Deterministic fallback score calculation
function calculateFallback(data) {
  let score = 30; // base

  // Criminality
  if (data.criminalidade === 'Alto') score += 25;
  else if (data.criminalidade === 'Médio') score += 15;

  // Security measures (reduce risk)
  if (!data.cameras) score += 8;
  if (!data.alarmes) score += 6;
  if (!data.sensores) score += 5;
  if (!data.controlePessoas) score += 8;
  if (!data.controleVeiculos) score += 5;
  if (!data.identificacaoVisitantes) score += 5;

  // Structure
  if (data.iluminacao === 'deficiente') score += 8;
  if (!data.muros) score += 5;

  // Risk factors
  const riskMap = { Alto: 3, Médio: 2, Baixo: 1 };
  const riskFields = ['riscoRoubo', 'riscoInvasao', 'riscoIncendio', 'riscoFalhas', 'riscoInfoSec'];
  const riskAvg = riskFields.reduce((sum, f) => sum + (riskMap[data[f]] || 2), 0) / riskFields.length;
  score += (riskAvg - 1) * 5;

  score = Math.min(100, Math.max(0, Math.round(score)));

  const perimetral = Math.min(100, Math.round(30 + (!data.muros ? 25 : 0) + (data.iluminacao === 'deficiente' ? 20 : 0) + (riskMap[data.criminalidade] || 2) * 8));
  const acesso = Math.min(100, Math.round(20 + (!data.controlePessoas ? 25 : 0) + (!data.controleVeiculos ? 20 : 0) + (!data.identificacaoVisitantes ? 15 : 0)));
  const externo = Math.min(100, Math.round(20 + (riskMap[data.criminalidade] || 2) * 15 + (riskMap[data.riscoRoubo] || 2) * 10));
  const interno = Math.min(100, Math.round(15 + (riskMap[data.riscoFalhas] || 2) * 10 + (riskMap[data.riscoInfoSec] || 2) * 8));
  const eletronico = Math.min(100, Math.round(20 + (!data.cameras ? 25 : 0) + (!data.alarmes ? 20 : 0) + (!data.sensores ? 15 : 0)));

  const recomendacoes = [];

  if (!data.cameras) recomendacoes.push({ prioridade: 'alta', texto: 'Instalar sistema de câmeras com monitoramento 24h na área perimetral' });
  if (!data.controlePessoas) recomendacoes.push({ prioridade: 'alta', texto: 'Implementar controle de acesso de pessoas com identificação biométrica' });
  if (!data.controleVeiculos) recomendacoes.push({ prioridade: 'alta', texto: 'Implementar controle de acesso veicular com cancela automatizada' });
  if (data.iluminacao === 'deficiente') recomendacoes.push({ prioridade: 'media', texto: 'Revisar e otimizar iluminação externa — pontos cegos comprometem a segurança' });
  if (!data.alarmes) recomendacoes.push({ prioridade: 'media', texto: 'Instalar sistema de alarme integrado com monitoramento remoto' });
  if (!data.sensores) recomendacoes.push({ prioridade: 'media', texto: 'Instalar sensores de presença nas áreas de acesso secundário' });
  if (!data.identificacaoVisitantes) recomendacoes.push({ prioridade: 'media', texto: 'Estabelecer protocolo de identificação obrigatória para visitantes' });
  recomendacoes.push({ prioridade: 'baixa', texto: 'Considerar treinamento de equipe interna para procedimentos de emergência' });
  recomendacoes.push({ prioridade: 'baixa', texto: 'Elaborar plano de evacuação e rotas de fuga sinalizadas' });

  return {
    score,
    nivel: score <= 35 ? 'Baixo' : score <= 60 ? 'Medio' : 'Alto',
    breakdown: { perimetral, acesso, externo, interno, eletronico },
    recomendacoes,
  };
}

export async function POST(request) {
  try {
    const data = await request.json();

    // Try Gemini first
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
          model: 'gemini-2.0-flash',
          contents: `${SYSTEM_PROMPT}\n\nDados do diagnóstico:\n${JSON.stringify(data, null, 2)}`,
        });

        const text = response.text;
        // Extract JSON from response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const result = JSON.parse(jsonMatch[0]);
          return NextResponse.json(result);
        }
      } catch (err) {
        console.error('Gemini error, falling back to deterministic:', err.message);
      }
    }

    // Fallback to deterministic calculation
    return NextResponse.json(calculateFallback(data));
  } catch {
    return NextResponse.json(calculateFallback({}), { status: 200 });
  }
}
