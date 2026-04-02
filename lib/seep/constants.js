// ============================================================
// SEEP — Design Tokens & Constants
// ============================================================

export const colors = {
  dark: '#1B1B2F',
  accent: '#162447',
  gold: '#C6A94D',
  lightGold: '#F5E6B8',
  warmBg: '#FAF8F4',
  lightBg: '#F2F0EA',
  textDark: '#2C2C2C',
  textMed: '#4A4A4A',
  border: '#D4C9A8',
  danger: '#C94444',
  success: '#4A9B6E',
  white: '#FFFFFF',
};

export const sidebarItems = [
  { label: 'Dashboard', icon: 'LayoutDashboard', href: '/seep/admin/dashboard' },
  { label: 'Agentes', icon: 'Users', href: '/seep/admin/agentes' },
  { label: 'Contratantes', icon: 'Building2', href: '/seep/admin/contratantes' },
  { label: 'Diagnóstico', icon: 'ClipboardList', href: '/seep/admin/diagnostico' },
  { label: 'Financeiro', icon: 'DollarSign', href: '/seep/admin/financeiro' },
  { label: 'Compliance', icon: 'ShieldCheck', href: '/seep/admin/compliance' },
  { label: 'Contratos', icon: 'FileText', href: '/seep/admin/contratos' },
];

export const GEMINI_SYSTEM_PROMPT = `Você é um analista de segurança executiva com 30 anos de experiência. Analise os dados de segurança do local a seguir e forneça:
1) Um score de risco de 0 a 100 (onde 100 é risco máximo)
2) Um breakdown por categoria: perimetral (0-100), acesso (0-100), externo (0-100), interno (0-100), eletronico (0-100)
3) Uma lista priorizada de recomendações práticas com nível de prioridade (alta, media, baixa)

Considere especialmente: criminalidade da região, ausência de controles de acesso, falta de monitoramento eletrônico, e fragilidades estruturais.

Responda APENAS em formato JSON com a seguinte estrutura:
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
