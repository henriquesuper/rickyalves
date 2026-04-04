'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Send,
  Save,
  AlertTriangle,
  CheckCircle,
  Minus,
  MapPin,
  User,
  Target,
  Check,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card, { CardBody, CardHeader } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

// ─── Risk Score Gauge ───────────────────────────────────────
function RiskGauge({ score, nivel }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference * 0.75; // 270 degrees
  const getColor = (s) => (s <= 35 ? '#4A9B6E' : s <= 60 ? '#8B2336' : '#C94444');
  const color = getColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-52 h-52">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-[135deg]">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="var(--seep-light-bg)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          />
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
            initial={{ strokeDashoffset: circumference * 0.75 }}
            animate={{ strokeDashoffset: circumference * 0.75 - progress }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-5xl font-bold"
            style={{ color, fontFamily: 'var(--font-montserrat)' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {score}
          </motion.span>
          <span className="text-sm" style={{ color: 'var(--seep-text-med)' }}>
            / 100
          </span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Badge color={score <= 35 ? 'green' : score <= 60 ? 'yellow' : 'red'} className="text-sm px-4 py-1">
          Risco {nivel}
        </Badge>
      </motion.div>
    </div>
  );
}

// ─── Breakdown Bar ──────────────────────────────────────────
function BreakdownBar({ label, value, delay = 0 }) {
  const getColor = (v) => (v <= 35 ? '#4A9B6E' : v <= 60 ? '#8B2336' : '#C94444');
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span style={{ color: 'var(--seep-text-dark)' }}>{label}</span>
        <span className="font-bold tabular-nums" style={{ color: getColor(value), fontFamily: 'var(--font-mono)' }}>
          {value}%
        </span>
      </div>
      <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--seep-light-bg)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: getColor(value) }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 + delay }}
        />
      </div>
    </div>
  );
}

// ─── Priority Icon ──────────────────────────────────────────
function PriorityIcon({ prioridade }) {
  switch (prioridade) {
    case 'alta':
      return <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: 'var(--seep-danger)' }} />;
    case 'media':
      return <Minus className="w-4 h-4 shrink-0" style={{ color: 'var(--seep-gold)' }} />;
    case 'baixa':
      return <CheckCircle className="w-4 h-4 shrink-0" style={{ color: 'var(--seep-success)' }} />;
    default:
      return null;
  }
}

// ─── Solution Checkbox ──────────────────────────────────────
function SolutionItem({ label, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-200 text-left w-full"
      style={{
        borderColor: checked ? 'var(--seep-gold)' : 'var(--seep-border)',
        backgroundColor: checked ? 'rgba(139,35,54,0.06)' : 'transparent',
      }}
    >
      <div
        className="w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-200"
        style={{
          backgroundColor: checked ? 'var(--seep-gold)' : 'transparent',
          border: checked ? 'none' : '2px solid var(--seep-border)',
        }}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" />}
      </div>
      <span
        className="text-sm font-medium"
        style={{ color: checked ? 'var(--seep-gold)' : 'var(--seep-text-dark)' }}
      >
        {label}
      </span>
    </button>
  );
}

// ─── All available solutions ────────────────────────────────
const allSolutions = [
  'Instalação de câmeras',
  'Sistema de alarme',
  'Controle de acesso',
  'Monitoramento remoto',
  'Portaria remota',
  'Treinamento de equipe',
];

// ─── Default mock result ────────────────────────────────────
const defaultResult = {
  score: 78,
  nivel: 'Alto',
  breakdown: {
    perimetral: 65,
    acesso: 80,
    externo: 90,
    interno: 45,
    eletronico: 72,
  },
  recomendacoes: [
    { prioridade: 'alta', texto: 'Instalar sistema de câmeras com monitoramento 24h na área perimetral' },
    { prioridade: 'alta', texto: 'Implementar controle de acesso veicular com cancela automatizada' },
    { prioridade: 'alta', texto: 'Estabelecer protocolo de identificação obrigatória para todos os visitantes' },
    { prioridade: 'media', texto: 'Revisar iluminação externa — pontos cegos identificados no perímetro leste' },
    { prioridade: 'media', texto: 'Instalar sensores de presença nas áreas de acesso secundário' },
    { prioridade: 'media', texto: 'Implementar sistema de alarme integrado com monitoramento remoto' },
    { prioridade: 'baixa', texto: 'Considerar treinamento de equipe interna para procedimentos de emergência' },
    { prioridade: 'baixa', texto: 'Elaborar plano de evacuação e rotas de fuga sinalizadas' },
  ],
  solucoes_propostas: ['Instalação de câmeras', 'Controle de acesso', 'Sistema de alarme', 'Monitoramento remoto', 'Treinamento de equipe'],
};

const breakdownLabels = {
  perimetral: 'Segurança Perimetral',
  acesso: 'Controle de Acesso',
  externo: 'Riscos Externos',
  interno: 'Riscos Internos',
  eletronico: 'Segurança Eletrônica',
};

const objetivoLabels = {
  patrimonial: 'Segurança Patrimonial',
  eletronica: 'Segurança Eletrônica',
  controle_acesso: 'Controle de Acesso',
  monitoramento: 'Monitoramento',
  incendio: 'Prevenção de Incêndios',
  outros: 'Outros',
};

// ─── Main Page ──────────────────────────────────────────────
export default function ResultadoPage() {
  const [result, setResult] = useState(null);
  const [diagData, setDiagData] = useState(null);
  const [solucoes, setSolucoes] = useState([]);
  const [declaracao, setDeclaracao] = useState({
    responsavel: '',
    data: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const raw = sessionStorage.getItem('seep-diagnostico');
        if (raw) {
          setDiagData(JSON.parse(raw));
          const res = await fetch('/api/seep/diagnostico', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw,
          });
          if (res.ok) {
            const data = await res.json();
            setResult(data);
            setSolucoes(data.solucoes_propostas || []);
            return;
          }
        }
      } catch {
        // Fallback to default
      }
      setResult(defaultResult);
      setSolucoes(defaultResult.solucoes_propostas);
    };
    fetchResult();
  }, []);

  const toggleSolucao = (sol) => {
    setSolucoes((prev) =>
      prev.includes(sol) ? prev.filter((s) => s !== sol) : [...prev, sol]
    );
  };

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--seep-gold)] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
        >
          Resultado do Diagnóstico
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          Análise gerada pelo sistema de inteligência SEEP
        </p>
      </div>

      {/* Client Info Header */}
      {diagData && (
        <Card>
          <CardBody className="!py-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Cliente</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>{diagData.nome || '—'}</p>
                </div>
              </div>
              {diagData.endereco && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Local</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                      {[diagData.endereco, diagData.numero, diagData.bairro, diagData.cidade].filter(Boolean).join(', ')}
                    </p>
                  </div>
                </div>
              )}
              {diagData.objetivos?.length > 0 && (
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Objetivos</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                      {diagData.objetivos.map((o) => objetivoLabels[o] || o).join(', ')}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Badge color={diagData.tipoLocal === 'residencia' ? 'green' : 'yellow'}>
                  {diagData.tipoLocal === 'residencia' ? 'Residência' : 'Empresa'}
                </Badge>
              </div>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Score + Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardBody className="flex items-center justify-center py-10">
            <RiskGauge score={result.score} nivel={result.nivel} />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2
              className="text-lg font-bold"
              style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
            >
              Breakdown por Categoria
            </h2>
          </CardHeader>
          <CardBody className="space-y-5">
            {Object.entries(result.breakdown).map(([key, value], i) => (
              <BreakdownBar
                key={key}
                label={breakdownLabels[key] || key}
                value={value}
                delay={i * 0.1}
              />
            ))}
          </CardBody>
        </Card>
      </div>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <h2
            className="text-lg font-bold"
            style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
          >
            Recomendações Técnicas
          </h2>
        </CardHeader>
        <CardBody className="!p-0">
          <div className="divide-y divide-[var(--seep-border)]">
            {result.recomendacoes.map((rec, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                <PriorityIcon prioridade={rec.prioridade} />
                <div className="flex-1">
                  <p className="text-sm" style={{ color: 'var(--seep-text-dark)' }}>
                    {rec.texto}
                  </p>
                </div>
                <Badge
                  color={rec.prioridade === 'alta' ? 'red' : rec.prioridade === 'media' ? 'yellow' : 'green'}
                >
                  {rec.prioridade === 'alta' ? 'Alta' : rec.prioridade === 'media' ? 'Média' : 'Baixa'}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Soluções Propostas */}
      <Card>
        <CardHeader>
          <h2
            className="text-lg font-bold"
            style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
          >
            Soluções Propostas
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-sm mb-4" style={{ color: 'var(--seep-text-med)' }}>
            Selecione as soluções recomendadas para incluir na proposta técnica.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allSolutions.map((sol) => (
              <SolutionItem
                key={sol}
                label={sol}
                checked={solucoes.includes(sol)}
                onChange={() => toggleSolucao(sol)}
              />
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Declaração e Aceite */}
      <Card>
        <CardHeader>
          <h2
            className="text-lg font-bold"
            style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
          >
            Declaração e Aceite
          </h2>
        </CardHeader>
        <CardBody className="space-y-5">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--seep-text-med)' }}>
            Declaro que as informações acima são verdadeiras e autorizo a elaboração da proposta
            com base nesta avaliação. Este formulário deve ser utilizado como base para elaboração
            de proposta técnica e contrato de prestação de serviços.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[var(--seep-text-dark)]">
                Responsável pela Avaliação
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] placeholder:text-[var(--seep-text-med)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent transition-all duration-200"
                placeholder="Nome do técnico avaliador"
                value={declaracao.responsavel}
                onChange={(e) => setDeclaracao((p) => ({ ...p, responsavel: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[var(--seep-text-dark)]">
                Data
              </label>
              <input
                type="date"
                className="w-full px-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent transition-all duration-200"
                value={declaracao.data}
                onChange={(e) => setDeclaracao((p) => ({ ...p, data: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-[var(--seep-border)]">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--seep-text-med)' }}>
                Assinatura do Avaliador
              </label>
              <div
                className="h-20 rounded-lg border-2 border-dashed flex items-center justify-center"
                style={{ borderColor: 'var(--seep-border)' }}
              >
                <span className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                  Assinatura digital (PDF)
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--seep-text-med)' }}>
                Assinatura do Contratante
              </label>
              <div
                className="h-20 rounded-lg border-2 border-dashed flex items-center justify-center"
                style={{ borderColor: 'var(--seep-border)' }}
              >
                <span className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                  Assinatura digital (PDF)
                </span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button size="lg">
          <Download className="w-4 h-4 mr-2" />
          Gerar Plano de Segurança (PDF)
        </Button>
        <Button variant="outline" size="lg">
          <Send className="w-4 h-4 mr-2" />
          Enviar para o Contratante
        </Button>
        <Button variant="ghost" size="lg">
          <Save className="w-4 h-4 mr-2" />
          Salvar no Sistema
        </Button>
      </div>
    </div>
  );
}
