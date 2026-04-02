'use client';

import Link from 'next/link';
import {
  Building2,
  User,
  Shield,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import Card, { CardBody } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { contratantes, getAgenteById, formatCurrency } from '@/lib/seep/mock-data';

function RiskScoreBadge({ score }) {
  const color = score <= 35 ? 'green' : score <= 60 ? 'yellow' : 'red';
  const label = score <= 35 ? 'Baixo' : score <= 60 ? 'Médio' : 'Alto';
  return (
    <Badge color={color}>
      <TrendingUp className="w-3 h-3 mr-1" />
      {score} — {label}
    </Badge>
  );
}

export default function ContratantesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
          Contratantes
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
          {contratantes.length} contratantes cadastrados
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {contratantes.map((c) => {
          const agente = getAgenteById(c.agenteDesignado);
          return (
            <Link key={c.id} href={`/seep/admin/contratantes/${c.id}`}>
              <Card hover className="h-full">
                <CardBody>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'var(--seep-light-gold)' }}
                      >
                        {c.tipo === 'Pessoa Jurídica' ? (
                          <Building2 className="w-5 h-5" style={{ color: '#8B7028' }} />
                        ) : (
                          <User className="w-5 h-5" style={{ color: '#8B7028' }} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                          {c.nome}
                        </h3>
                        <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                          {c.tipo}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'var(--seep-text-med)' }}>Agente</span>
                      <span className="font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                        {agente?.nomeGuerra || '—'}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'var(--seep-text-med)' }}>Regime</span>
                      <span className="font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                        {c.contrato.regime}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'var(--seep-text-med)' }}>Valor mensal</span>
                      <span className="font-bold" style={{ color: 'var(--seep-gold)', fontFamily: 'var(--font-mono)' }}>
                        {formatCurrency(c.contrato.valorMensal)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[var(--seep-border)]">
                    <Badge
                      color={c.statusPagamento === 'Em dia' ? 'green' : 'red'}
                      dot
                    >
                      {c.statusPagamento}
                      {c.diasAtraso ? ` (${c.diasAtraso}d)` : ''}
                    </Badge>
                    <RiskScoreBadge score={c.riskScore} />
                  </div>
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
