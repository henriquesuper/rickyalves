'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Users,
  Building2,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle,
  CreditCard,
  Server,
  ChevronRight,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { agentes, contratantes, financeiro, atividadeRecente, alertasAtivos, formatCurrency } from '@/lib/seep/mock-data';

const OperationsMap = dynamic(() => import('../../components/maps/OperationsMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1B1B2F' }}>
      <p className="text-white/40 text-sm">Carregando mapa...</p>
    </div>
  ),
});

// ─── KPI Card ───────────────────────────────────────────────
function KPICard({ icon: Icon, label, value, iconColor = 'var(--seep-gold)', suffix }) {
  return (
    <Card hover>
      <CardBody className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <div>
          <p className="text-2xl font-bold" style={{ color: 'var(--seep-text-dark)' }}>
            {value}
            {suffix && <span className="text-sm font-normal text-[var(--seep-text-med)] ml-1">{suffix}</span>}
          </p>
          <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
            {label}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

// ─── Activity Icon ──────────────────────────────────────────
function getActivityIcon(tipo) {
  switch (tipo) {
    case 'checkin':
      return <CheckCircle className="w-4 h-4" style={{ color: 'var(--seep-success)' }} />;
    case 'alerta':
      return <AlertTriangle className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />;
    case 'pagamento':
      return <CreditCard className="w-4 h-4" style={{ color: 'var(--seep-success)' }} />;
    case 'sistema':
      return <Server className="w-4 h-4" style={{ color: 'var(--seep-text-med)' }} />;
    default:
      return <Clock className="w-4 h-4" style={{ color: 'var(--seep-text-med)' }} />;
  }
}

// ─── Dashboard Page ─────────────────────────────────────────
export default function DashboardPage() {
  const agentesAtivos = agentes.filter((a) => a.status === 'ativo' && a.operacaoAtual);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
        >
          Dashboard
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          Visão geral das operações — Março 2026
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          icon={Users}
          label="Agentes Ativos"
          value={agentesAtivos.length}
          iconColor="var(--seep-success)"
        />
        <KPICard
          icon={Building2}
          label="Contratantes"
          value={contratantes.length}
          iconColor="var(--seep-gold)"
        />
        <KPICard
          icon={TrendingUp}
          label="Receita Mensal"
          value={formatCurrency(financeiro.receitaMensal)}
          iconColor="var(--seep-success)"
        />
        <KPICard
          icon={AlertTriangle}
          label="Alertas"
          value={alertasAtivos.length}
          iconColor="var(--seep-gold)"
        />
      </div>

      {/* Map */}
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2
              className="text-lg font-bold"
              style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
            >
              Operações Ativas
            </h2>
            <Badge color="green" dot>
              {agentesAtivos.length} em campo
            </Badge>
          </div>
        </CardHeader>
        <div className="h-[400px]">
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            crossOrigin=""
          />
          <OperationsMap agentes={agentes} />
        </div>
      </Card>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <h2
              className="text-lg font-bold"
              style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
            >
              Atividade Recente
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="divide-y divide-[var(--seep-border)]">
              {atividadeRecente.map((item, i) => (
                <div key={i} className="flex items-start gap-3 px-6 py-3 hover:bg-[var(--seep-light-bg)] transition-colors">
                  <div className="mt-0.5">{getActivityIcon(item.tipo)}</div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm ${item.tipo === 'alerta' ? 'font-medium' : ''}`}
                      style={{ color: item.tipo === 'alerta' ? 'var(--seep-gold)' : 'var(--seep-text-dark)' }}
                    >
                      {item.descricao}
                    </p>
                  </div>
                  <span
                    className="text-xs shrink-0 tabular-nums"
                    style={{ color: 'var(--seep-text-med)', fontFamily: 'var(--font-mono)' }}
                  >
                    {item.hora}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <h2
              className="text-lg font-bold"
              style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
            >
              Alertas Ativos
            </h2>
          </CardHeader>
          <CardBody className="space-y-4">
            {alertasAtivos.map((alerta) => (
              <div
                key={alerta.id}
                className="p-4 rounded-lg border"
                style={{
                  borderColor: alerta.severidade === 'vermelho' ? 'var(--seep-danger)' : 'var(--seep-gold)',
                  backgroundColor:
                    alerta.severidade === 'vermelho' ? 'rgba(201,68,68,0.05)' : 'rgba(198,169,77,0.05)',
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)' }}>
                    {alerta.titulo}
                  </h3>
                  <Badge color={alerta.severidade === 'vermelho' ? 'red' : 'yellow'}>
                    {alerta.tipo === 'documento' ? 'Documento' : 'Financeiro'}
                  </Badge>
                </div>
                <p className="text-xs mb-3" style={{ color: 'var(--seep-text-med)' }}>
                  {alerta.descricao}
                </p>
                <Link
                  href={alerta.agenteId ? `/seep/admin/agentes/${alerta.agenteId}` : `/seep/admin/contratantes/${alerta.contratanteId}`}
                  className="text-xs font-medium inline-flex items-center gap-1 transition-colors"
                  style={{ color: 'var(--seep-gold)' }}
                >
                  Ver detalhes <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
