'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Shield, Clock, AlertTriangle } from 'lucide-react';
import Card, { CardBody } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { agentes } from '@/lib/seep/mock-data';

export default function AgentesPage() {
  const [filtro, setFiltro] = useState('todos');
  const [busca, setBusca] = useState('');

  const filtered = agentes.filter((a) => {
    if (filtro === 'ativos' && a.status !== 'ativo') return false;
    if (filtro === 'inativos' && a.status !== 'inativo') return false;
    if (busca) {
      const q = busca.toLowerCase();
      return (
        a.nome.toLowerCase().includes(q) ||
        a.nomeGuerra.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
            Agentes
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
            {agentes.length} agentes cadastrados
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Novo Agente
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: 'var(--seep-text-med)' }}
          />
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-[var(--seep-border)] rounded-lg bg-white text-[var(--seep-text-dark)] placeholder:text-[var(--seep-text-med)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--seep-gold)] focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {[
            { key: 'todos', label: 'Todos' },
            { key: 'ativos', label: 'Ativos' },
            { key: 'inativos', label: 'Inativos' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltro(f.key)}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border"
              style={{
                backgroundColor: filtro === f.key ? 'var(--seep-gold)' : 'transparent',
                color: filtro === f.key ? '#FFF' : 'var(--seep-text-med)',
                borderColor: filtro === f.key ? 'var(--seep-gold)' : 'var(--seep-border)',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((agente) => {
          const hasAlerts = agente.alertas?.length > 0;
          return (
            <Link key={agente.id} href={`/seep/admin/agentes/${agente.id}`}>
              <Card hover className="h-full">
                <CardBody>
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
                      style={{
                        backgroundColor: agente.status === 'ativo' ? 'var(--seep-light-gold)' : 'var(--seep-light-bg)',
                        color: agente.status === 'ativo' ? '#8B7028' : 'var(--seep-text-med)',
                        fontFamily: 'var(--font-montserrat)',
                      }}
                    >
                      {agente.nomeGuerra[0]}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold truncate" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                          {agente.nomeGuerra}
                        </h3>
                        <Badge
                          color={agente.status === 'ativo' ? (hasAlerts ? 'yellow' : 'green') : 'gray'}
                          dot
                        >
                          {agente.status === 'ativo' ? (hasAlerts ? 'Alerta' : 'Ativo') : 'Inativo'}
                        </Badge>
                      </div>
                      <p className="text-sm truncate" style={{ color: 'var(--seep-text-med)' }}>
                        {agente.nome}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                        {agente.especialidade}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--seep-border)] grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" style={{ color: 'var(--seep-gold)' }} />
                      <span className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                        {agente.operacaoAtual || 'Sem operação'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <Clock className="w-3.5 h-3.5" style={{ color: 'var(--seep-text-med)' }} />
                      <span
                        className="text-xs tabular-nums"
                        style={{ color: 'var(--seep-text-med)', fontFamily: 'var(--font-mono)' }}
                      >
                        {agente.horasEsteMes > 0 ? `${agente.horasEsteMes}h` : '—'}
                      </span>
                    </div>
                  </div>

                  {hasAlerts && (
                    <div className="mt-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md" style={{ backgroundColor: 'rgba(198,169,77,0.1)' }}>
                      <AlertTriangle className="w-3.5 h-3.5" style={{ color: 'var(--seep-gold)' }} />
                      <span className="text-xs font-medium" style={{ color: 'var(--seep-gold)' }}>
                        {agente.alertas[0].mensagem}
                      </span>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
