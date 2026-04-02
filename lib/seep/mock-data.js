// ============================================================
// SEEP — Dados Mock para Demonstração
// ============================================================

export const agentes = [
  {
    id: 'ag-001',
    nome: 'Carlos Eduardo Mendes',
    nomeGuerra: 'Falcon',
    cpf: '123.456.789-00',
    status: 'ativo',
    especialidade: 'Proteção VIP + Direção Evasiva',
    certificacoes: ['Tiro Tático', 'APH', 'Direção Evasiva', 'Gestão de Crises'],
    anosExperiencia: 18,
    armamento: {
      tipo: 'Pistola Glock G19',
      calibre: '9mm',
      registro: 'SINARM-2024-XXXX',
      validade: '2026-08-15',
    },
    telefone: '(11) 99999-0001',
    foto: null,
    operacaoAtual: 'Contrato Fernandes',
    localizacaoAtual: { lat: -23.5505, lng: -46.6333 },
    ultimoCheckIn: '2026-03-27T07:45:00',
    horasEsteMes: 142,
    alertas: [],
  },
  {
    id: 'ag-002',
    nome: 'Ricardo Alves da Silva',
    nomeGuerra: 'Shadow',
    cpf: '234.567.890-11',
    status: 'ativo',
    especialidade: 'Inteligência e Contrainteligência',
    certificacoes: ['Proteção VIP', 'Inteligência', 'Tiro Tático'],
    anosExperiencia: 22,
    armamento: {
      tipo: 'Pistola Taurus TS9',
      calibre: '9mm',
      registro: 'SINARM-2024-YYYY',
      validade: '2026-10-20',
    },
    telefone: '(11) 99999-0002',
    foto: null,
    operacaoAtual: 'Contrato Monteiro Corp',
    localizacaoAtual: { lat: -23.5631, lng: -46.6544 },
    ultimoCheckIn: '2026-03-27T08:00:00',
    horasEsteMes: 156,
    alertas: [],
  },
  {
    id: 'ag-003',
    nome: 'André Luiz Borges',
    nomeGuerra: 'Titan',
    cpf: '345.678.901-22',
    status: 'ativo',
    especialidade: 'Proteção VIP',
    certificacoes: ['Proteção VIP', 'APH', 'Direção Evasiva'],
    anosExperiencia: 12,
    armamento: {
      tipo: 'Pistola Glock G17',
      calibre: '9mm',
      registro: 'SINARM-2024-ZZZZ',
      validade: '2026-06-30',
    },
    telefone: '(11) 99999-0003',
    foto: null,
    operacaoAtual: 'Contrato Duarte',
    localizacaoAtual: { lat: -23.5875, lng: -46.682 },
    ultimoCheckIn: '2026-03-27T06:30:00',
    horasEsteMes: 168,
    alertas: [],
  },
  {
    id: 'ag-004',
    nome: 'Felipe Santos Costa',
    nomeGuerra: 'Viper',
    cpf: '456.789.012-33',
    status: 'ativo',
    especialidade: 'Direção Evasiva',
    certificacoes: ['Direção Evasiva', 'Tiro Tático'],
    anosExperiencia: 8,
    armamento: {
      tipo: 'Pistola Taurus G3',
      calibre: '9mm',
      registro: 'SINARM-2024-WWWW',
      validade: '2026-04-25',
    },
    telefone: '(11) 99999-0004',
    foto: null,
    operacaoAtual: null,
    localizacaoAtual: null,
    ultimoCheckIn: null,
    horasEsteMes: 0,
    alertas: [{ tipo: 'documento', mensagem: 'CRAF vence em 28 dias' }],
  },
  {
    id: 'ag-005',
    nome: 'Marcos Vinícius Rocha',
    nomeGuerra: 'Hawk',
    cpf: '567.890.123-44',
    status: 'inativo',
    especialidade: 'Proteção VIP + Gestão de Crises',
    certificacoes: ['Proteção VIP', 'Gestão de Crises', 'APH', 'Tiro Tático', 'Direção Evasiva'],
    anosExperiencia: 25,
    armamento: null,
    telefone: '(11) 99999-0005',
    foto: null,
    operacaoAtual: null,
    localizacaoAtual: null,
    ultimoCheckIn: null,
    horasEsteMes: 0,
    alertas: [],
    observacao: 'Aposentado — disponível para consultoria',
  },
];

export const contratantes = [
  {
    id: 'cl-001',
    nome: 'Dr. Henrique Fernandes',
    tipo: 'Pessoa Física',
    responsavel: 'Dr. Henrique Fernandes',
    grauExposicao: 'Alto',
    nivelDiscricao: 'Máximo',
    contrato: {
      inicio: '2026-01-15',
      fim: '2026-07-15',
      regime: 'Integral',
      valorMensal: 18500,
    },
    agenteDesignado: 'ag-001',
    statusPagamento: 'Em dia',
    riskScore: 78,
  },
  {
    id: 'cl-002',
    nome: 'Monteiro Corp Participações',
    tipo: 'Pessoa Jurídica',
    responsavel: 'Roberto Monteiro',
    grauExposicao: 'Médio',
    nivelDiscricao: 'Alto',
    contrato: {
      inicio: '2026-02-01',
      fim: '2027-01-31',
      regime: 'Integral',
      valorMensal: 24000,
    },
    agenteDesignado: 'ag-002',
    statusPagamento: 'Em dia',
    riskScore: 52,
  },
  {
    id: 'cl-003',
    nome: 'Família Duarte',
    tipo: 'Pessoa Física',
    responsavel: 'Paulo Duarte',
    grauExposicao: 'Médio',
    nivelDiscricao: 'Padrão',
    contrato: {
      inicio: '2026-03-01',
      fim: '2026-09-01',
      regime: 'Parcial',
      valorMensal: 12000,
    },
    agenteDesignado: 'ag-003',
    statusPagamento: 'Atrasado',
    diasAtraso: 12,
    riskScore: 41,
  },
];

export const financeiro = {
  receitaMensal: 54500,
  custoAgentes: 32400,
  margemBruta: 22100,
  inadimplencia: 12000,
  projecaoTrimestral: 163500,
  historico: [
    { mes: 'Out/25', receita: 36000, custo: 21000 },
    { mes: 'Nov/25', receita: 42500, custo: 25200 },
    { mes: 'Dez/25', receita: 42500, custo: 25200 },
    { mes: 'Jan/26', receita: 48000, custo: 28800 },
    { mes: 'Fev/26', receita: 54500, custo: 32400 },
    { mes: 'Mar/26', receita: 54500, custo: 32400 },
  ],
};

export const pagamentosAgentes = [
  { agenteId: 'ag-001', nome: 'Falcon', horas: 142, valorHora: 75, total: 10650, status: 'Pago' },
  { agenteId: 'ag-002', nome: 'Shadow', horas: 156, valorHora: 80, total: 12480, status: 'Pago' },
  { agenteId: 'ag-003', nome: 'Titan', horas: 168, valorHora: 55, total: 9240, status: 'Pendente' },
];

export const atividadeRecente = [
  { hora: '08:00', tipo: 'checkin', descricao: 'Shadow fez check-in — Contrato Monteiro Corp' },
  { hora: '07:45', tipo: 'checkin', descricao: 'Falcon fez check-in — Contrato Fernandes' },
  { hora: '07:30', tipo: 'alerta', descricao: 'Alerta: CRAF do agente Viper vence em 28 dias' },
  { hora: '06:30', tipo: 'checkin', descricao: 'Titan fez check-in — Contrato Duarte' },
  { hora: '06:00', tipo: 'sistema', descricao: 'Sistema: Cobrança PIX enviada — Família Duarte (R$ 12.000)' },
  { hora: '05:00', tipo: 'pagamento', descricao: 'Sistema: Pagamento confirmado — Monteiro Corp (R$ 24.000)' },
  { hora: '04:00', tipo: 'pagamento', descricao: 'Sistema: Pagamento confirmado — Dr. Fernandes (R$ 18.500)' },
  { hora: '00:00', tipo: 'sistema', descricao: 'Sistema: Backup diário concluído' },
];

export const alertasAtivos = [
  {
    id: 'alt-001',
    tipo: 'documento',
    titulo: 'CRAF do agente Viper vence em 28 dias',
    descricao: 'O Certificado de Registro de Arma de Fogo do agente Felipe Santos Costa (Viper) vence em 25/04/2026.',
    severidade: 'amarelo',
    agenteId: 'ag-004',
  },
  {
    id: 'alt-002',
    tipo: 'financeiro',
    titulo: 'Pagamento atrasado — Família Duarte (12 dias)',
    descricao: 'A fatura de R$ 12.000 referente a Março/2026 do contrato Família Duarte está com 12 dias de atraso.',
    severidade: 'vermelho',
    contratanteId: 'cl-003',
  },
];

export const complianceDocumentos = [
  { agenteId: 'ag-001', nome: 'Falcon', documento: 'CRAF', validade: '2026-08-15', status: 'ok', diasRestantes: 141 },
  { agenteId: 'ag-001', nome: 'Falcon', documento: 'CNH Cat. B', validade: '2027-03-10', status: 'ok', diasRestantes: 348 },
  { agenteId: 'ag-002', nome: 'Shadow', documento: 'CRAF', validade: '2026-10-20', status: 'ok', diasRestantes: 207 },
  { agenteId: 'ag-003', nome: 'Titan', documento: 'CRAF', validade: '2026-06-30', status: 'atencao', diasRestantes: 95 },
  { agenteId: 'ag-003', nome: 'Titan', documento: 'Curso APH', validade: '2026-05-15', status: 'atencao', diasRestantes: 49 },
  { agenteId: 'ag-004', nome: 'Viper', documento: 'CRAF', validade: '2026-04-25', status: 'urgente', diasRestantes: 28 },
  { agenteId: 'ag-004', nome: 'Viper', documento: 'Curso Direção Evasiva', validade: '2026-09-01', status: 'ok', diasRestantes: 157 },
  { agenteId: 'ag-005', nome: 'Hawk', documento: 'CRAF', validade: '2025-12-01', status: 'vencido', diasRestantes: -117 },
];

export const contratos = [
  {
    id: 'ctr-001',
    contratante: 'Dr. Henrique Fernandes',
    contratanteId: 'cl-001',
    agente: 'Falcon',
    agenteId: 'ag-001',
    regime: 'Integral',
    inicio: '2026-01-15',
    fim: '2026-07-15',
    valorMensal: 18500,
    status: 'Ativo',
  },
  {
    id: 'ctr-002',
    contratante: 'Monteiro Corp Participações',
    contratanteId: 'cl-002',
    agente: 'Shadow',
    agenteId: 'ag-002',
    regime: 'Integral',
    inicio: '2026-02-01',
    fim: '2027-01-31',
    valorMensal: 24000,
    status: 'Ativo',
  },
  {
    id: 'ctr-003',
    contratante: 'Família Duarte',
    contratanteId: 'cl-003',
    agente: 'Titan',
    agenteId: 'ag-003',
    regime: 'Parcial',
    inicio: '2026-03-01',
    fim: '2026-09-01',
    valorMensal: 12000,
    status: 'Ativo',
  },
];

// Helpers
export function getAgenteById(id) {
  return agentes.find((a) => a.id === id);
}

export function getContratanteById(id) {
  return contratantes.find((c) => c.id === id);
}

export function getAgenteByContratante(contratanteId) {
  const c = getContratanteById(contratanteId);
  if (!c) return null;
  return getAgenteById(c.agenteDesignado);
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR');
}

export function getStatusColor(status) {
  switch (status) {
    case 'ativo': return '#4A9B6E';
    case 'inativo': return '#6B7280';
    case 'Em dia': return '#4A9B6E';
    case 'Atrasado': return '#C94444';
    case 'Pago': return '#4A9B6E';
    case 'Pendente': return '#C6A94D';
    default: return '#4A4A4A';
  }
}
