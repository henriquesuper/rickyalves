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
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Card, { CardBody, CardHeader } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

// ─── Risk Score Gauge ───────────────────────────────────────
function RiskGauge({ score, nivel }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference * 0.75; // 270 degrees
  const getColor = (s) => (s <= 35 ? '#4A9B6E' : s <= 60 ? '#C6A94D' : '#C94444');
  const color = getColor(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-52 h-52">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-[135deg]">
          {/* Background arc */}
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
          {/* Progress arc */}
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
        {/* Score number */}
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
  const getColor = (v) => (v <= 35 ? '#4A9B6E' : v <= 60 ? '#C6A94D' : '#C94444');
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
};

const breakdownLabels = {
  perimetral: 'Segurança Perimetral',
  acesso: 'Controle de Acesso',
  externo: 'Riscos Externos',
  interno: 'Riscos Internos',
  eletronico: 'Segurança Eletrônica',
};

// ─── Main Page ──────────────────────────────────────────────
export default function ResultadoPage() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Try to get result from API or use default
    const fetchResult = async () => {
      try {
        const diagData = sessionStorage.getItem('seep-diagnostico');
        if (diagData) {
          const res = await fetch('/api/seep/diagnostico', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: diagData,
          });
          if (res.ok) {
            const data = await res.json();
            setResult(data);
            return;
          }
        }
      } catch {
        // Fallback to default
      }
      setResult(defaultResult);
    };
    fetchResult();
  }, []);

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
            Recomendações da IA
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
