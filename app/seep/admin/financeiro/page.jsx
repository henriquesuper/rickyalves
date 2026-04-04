'use client';

import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  Users,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import {
  financeiro,
  contratantes,
  pagamentosAgentes,
  formatCurrency,
} from '@/lib/seep/mock-data';

function KPICard({ icon: Icon, label, value, sub, iconColor }) {
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
          <p className="text-xl font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-mono)' }}>
            {value}
          </p>
          <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>{label}</p>
          {sub && (
            <p className="text-[10px] mt-0.5" style={{ color: 'var(--seep-text-med)' }}>
              {sub}
            </p>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

const chartData = financeiro.historico.map((h) => ({
  ...h,
  margem: h.receita - h.custo,
}));

export default function FinanceiroPage() {
  const margemPct = ((financeiro.margemBruta / financeiro.receitaMensal) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-bold"
          style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
        >
          Financeiro
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          Visão financeira — Março 2026
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          icon={TrendingUp}
          label="Receita Mensal"
          value={formatCurrency(financeiro.receitaMensal)}
          sub="↑ 12% vs mês anterior"
          iconColor="#4A9B6E"
        />
        <KPICard
          icon={Users}
          label="Custo Agentes"
          value={formatCurrency(financeiro.custoAgentes)}
          iconColor="#8B2336"
        />
        <KPICard
          icon={DollarSign}
          label="Margem Bruta"
          value={formatCurrency(financeiro.margemBruta)}
          sub={`${margemPct}%`}
          iconColor="#4A9B6E"
        />
        <KPICard
          icon={AlertTriangle}
          label="Inadimplência"
          value={formatCurrency(financeiro.inadimplencia)}
          sub="1 contrato"
          iconColor="#C94444"
        />
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
            Evolução Receita x Custo
          </h2>
        </CardHeader>
        <CardBody>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B2336" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8B2336" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grayGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9CA3AF" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#9CA3AF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="mes" tick={{ fontSize: 12, fill: '#4A4A4A' }} />
              <YAxis
                tick={{ fontSize: 12, fill: '#4A4A4A' }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                contentStyle={{
                  borderRadius: 8,
                  border: '1px solid #D4C9A8',
                  fontSize: 12,
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="receita"
                name="Receita"
                stroke="#8B2336"
                strokeWidth={2}
                fill="url(#goldGrad)"
              />
              <Area
                type="monotone"
                dataKey="custo"
                name="Custo"
                stroke="#9CA3AF"
                strokeWidth={2}
                fill="url(#grayGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contratantes */}
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Contratantes
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                    <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Contratante</th>
                    <th className="text-right px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Valor</th>
                    <th className="text-center px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--seep-border)]">
                  {contratantes.map((c) => (
                    <tr key={c.id} className="hover:bg-[var(--seep-light-bg)] transition-colors">
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--seep-text-dark)' }}>{c.nome}</td>
                      <td className="px-4 py-3 text-right" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-dark)' }}>
                        {formatCurrency(c.contrato.valorMensal)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge color={c.statusPagamento === 'Em dia' ? 'green' : 'red'} dot>
                          {c.statusPagamento}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        {/* Agentes Payments */}
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Pagamentos de Agentes
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--seep-light-bg)' }}>
                    <th className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Agente</th>
                    <th className="text-right px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Horas</th>
                    <th className="text-right px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Total</th>
                    <th className="text-center px-4 py-2.5 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--seep-border)]">
                  {pagamentosAgentes.map((p) => (
                    <tr key={p.agenteId} className="hover:bg-[var(--seep-light-bg)] transition-colors">
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--seep-text-dark)' }}>{p.nome}</td>
                      <td className="px-4 py-3 text-right" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-med)' }}>
                        {p.horas}h
                      </td>
                      <td className="px-4 py-3 text-right" style={{ fontFamily: 'var(--font-mono)', color: 'var(--seep-text-dark)' }}>
                        {formatCurrency(p.total)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge color={p.status === 'Pago' ? 'green' : 'yellow'} dot>
                          {p.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
