'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronLeft,
  Building2,
  User,
  Shield,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  FileText,
  CreditCard,
  ClipboardList,
} from 'lucide-react';
import Card, { CardBody, CardHeader } from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import { getContratanteById, getAgenteById, formatCurrency, formatDate } from '@/lib/seep/mock-data';

const tabs = [
  { key: 'geral', label: 'Visão Geral', icon: User },
  { key: 'contratos', label: 'Contratos', icon: FileText },
  { key: 'bancario', label: 'Dados Bancários', icon: CreditCard },
  { key: 'diagnosticos', label: 'Diagnósticos', icon: ClipboardList },
];

// Mock data for expanded sections
const mockContratos = [
  { id: 1, tipo: 'Prestação de Serviços', inicio: '2026-02-01', fim: '2027-01-31', status: 'vigente', valor: 8500 },
  { id: 2, tipo: 'Aditivo - Monitoramento 24h', inicio: '2026-03-15', fim: '2027-01-31', status: 'vigente', valor: 2500 },
];

const mockDadosBancarios = {
  banco: 'Itaú Unibanco',
  agencia: '0341',
  conta: '12345-6',
  tipoConta: 'Corrente',
  titular: 'Dr. Henrique Fernandes',
  cpfCnpj: '***.***.***-00',
  chavePix: 'email@exemplo.com',
};

const mockDiagnosticos = [
  { id: 1, data: '2026-02-15', score: 78, nivel: 'Alto', status: 'concluido' },
  { id: 2, data: '2026-01-10', score: 65, nivel: 'Medio', status: 'concluido' },
];

export default function ContratanteProfilePage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('geral');
  const contratante = getContratanteById(id);
  const agente = contratante ? getAgenteById(contratante.agenteDesignado) : null;

  if (!contratante) {
    return (
      <div className="text-center py-20">
        <p style={{ color: 'var(--seep-text-med)' }}>Contratante não encontrado.</p>
        <Link href="/seep/admin/contratantes" className="text-sm mt-2 inline-block" style={{ color: 'var(--seep-gold)' }}>
          Voltar para lista
        </Link>
      </div>
    );
  }

  const riskColor = contratante.riskScore <= 35 ? 'green' : contratante.riskScore <= 60 ? 'yellow' : 'red';

  return (
    <div className="space-y-6">
      <Link
        href="/seep/admin/contratantes"
        className="inline-flex items-center gap-1 text-sm hover:underline"
        style={{ color: 'var(--seep-gold)' }}
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar para Contratantes
      </Link>

      {/* Header */}
      <Card>
        <CardBody>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'var(--seep-light-gold)' }}
            >
              {contratante.tipo === 'Pessoa Jurídica' ? (
                <Building2 className="w-8 h-8" style={{ color: '#6B1A2A' }} />
              ) : (
                <User className="w-8 h-8" style={{ color: '#6B1A2A' }} />
              )}
            </div>
            <div className="flex-1">
              <h1
                className="text-2xl font-bold"
                style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}
              >
                {contratante.nome}
              </h1>
              <p className="text-sm mt-1" style={{ color: 'var(--seep-text-med)' }}>
                {contratante.tipo} &middot; Responsável: {contratante.responsavel}
              </p>
              <div className="flex gap-2 mt-3">
                <Badge color={contratante.statusPagamento === 'Em dia' ? 'green' : 'red'} dot>
                  {contratante.statusPagamento}
                </Badge>
                <Badge color={riskColor}>
                  Risk Score: {contratante.riskScore}
                </Badge>
                <Badge color="gold">
                  {contratante.nivelDiscricao}
                </Badge>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[var(--seep-border)] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap"
            style={{
              borderColor: activeTab === tab.key ? 'var(--seep-gold)' : 'transparent',
              color: activeTab === tab.key ? 'var(--seep-gold)' : 'var(--seep-text-med)',
            }}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Visão Geral */}
      {activeTab === 'geral' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                <FileText className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                Contrato Principal
              </h2>
            </CardHeader>
            <CardBody className="space-y-3">
              <InfoRow label="Início" value={formatDate(contratante.contrato.inicio)} />
              <InfoRow label="Fim" value={formatDate(contratante.contrato.fim)} />
              <InfoRow label="Regime" value={contratante.contrato.regime} />
              <InfoRow label="Valor Mensal" value={formatCurrency(contratante.contrato.valorMensal)} mono />
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                <Shield className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                Agente Designado
              </h2>
            </CardHeader>
            <CardBody>
              {agente ? (
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
                    style={{ backgroundColor: 'var(--seep-light-gold)', color: '#6B1A2A', fontFamily: 'var(--font-montserrat)' }}
                  >
                    {agente.nomeGuerra[0]}
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                      {agente.nomeGuerra}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>{agente.nome}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>{agente.especialidade}</p>
                    <Link href={`/seep/admin/agentes/${agente.id}`} className="text-xs mt-1 inline-block" style={{ color: 'var(--seep-gold)' }}>
                      Ver perfil completo
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="text-sm" style={{ color: 'var(--seep-text-med)' }}>Nenhum agente designado.</p>
              )}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
                <TrendingUp className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
                Avaliação de Risco
              </h2>
            </CardHeader>
            <CardBody className="space-y-3">
              <InfoRow label="Grau de Exposição" value={contratante.grauExposicao} />
              <InfoRow label="Nível de Discrição" value={contratante.nivelDiscricao} />
              <InfoRow label="Risk Score" value={`${contratante.riskScore}/100`} mono />
            </CardBody>
          </Card>

          {contratante.statusPagamento === 'Atrasado' && (
            <Card>
              <CardHeader>
                <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-danger)', fontFamily: 'var(--font-montserrat)' }}>
                  <AlertTriangle className="w-4 h-4" />
                  Pagamento Atrasado
                </h2>
              </CardHeader>
              <CardBody>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(201,68,68,0.05)', border: '1px solid rgba(201,68,68,0.2)' }}>
                  <p className="text-sm font-medium" style={{ color: 'var(--seep-danger)' }}>
                    Fatura de {formatCurrency(contratante.contrato.valorMensal)} com {contratante.diasAtraso} dias de atraso.
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--seep-text-med)' }}>
                    Cobrança PIX enviada automaticamente pelo sistema.
                  </p>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      )}

      {/* Contratos */}
      {activeTab === 'contratos' && (
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Contratos Vinculados
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="divide-y divide-[var(--seep-border)]">
              {mockContratos.map((c) => (
                <div key={c.id} className="flex items-center justify-between px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--seep-light-gold)' }}>
                      <FileText className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>{c.tipo}</p>
                      <p className="text-xs" style={{ color: 'var(--seep-text-med)' }}>
                        {formatDate(c.inicio)} — {formatDate(c.fim)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-mono)' }}>
                      {formatCurrency(c.valor)}
                    </span>
                    <Badge color="green">{c.status === 'vigente' ? 'Vigente' : 'Encerrado'}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {/* Dados Bancários */}
      {activeTab === 'bancario' && (
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold flex items-center gap-2" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              <CreditCard className="w-4 h-4" style={{ color: 'var(--seep-gold)' }} />
              Dados Bancários
            </h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <InfoRow label="Banco" value={mockDadosBancarios.banco} />
            <InfoRow label="Agência" value={mockDadosBancarios.agencia} mono />
            <InfoRow label="Conta" value={mockDadosBancarios.conta} mono />
            <InfoRow label="Tipo" value={mockDadosBancarios.tipoConta} />
            <InfoRow label="Titular" value={mockDadosBancarios.titular} />
            <InfoRow label="CPF/CNPJ" value={mockDadosBancarios.cpfCnpj} mono />
            <InfoRow label="Chave PIX" value={mockDadosBancarios.chavePix} mono />
          </CardBody>
        </Card>
      )}

      {/* Diagnósticos */}
      {activeTab === 'diagnosticos' && (
        <Card>
          <CardHeader>
            <h2 className="text-base font-bold" style={{ color: 'var(--seep-text-dark)', fontFamily: 'var(--font-montserrat)' }}>
              Diagnósticos Realizados
            </h2>
          </CardHeader>
          <CardBody className="!p-0">
            <div className="divide-y divide-[var(--seep-border)]">
              {mockDiagnosticos.map((d) => {
                const color = d.score <= 35 ? 'green' : d.score <= 60 ? 'yellow' : 'red';
                return (
                  <div key={d.id} className="flex items-center justify-between px-6 py-4 hover:bg-[var(--seep-light-bg)] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--seep-light-gold)' }}>
                        <ClipboardList className="w-5 h-5" style={{ color: 'var(--seep-gold)' }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)' }}>
                          Diagnóstico de Risco
                        </p>
                        <p className="text-xs flex items-center gap-1" style={{ color: 'var(--seep-text-med)' }}>
                          <Calendar className="w-3 h-3" />
                          {new Date(d.data).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-mono)', color: color === 'green' ? 'var(--seep-success)' : color === 'yellow' ? 'var(--seep-gold)' : 'var(--seep-danger)' }}>
                        {d.score}/100
                      </span>
                      <Badge color={color}>
                        Risco {d.nivel}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

function InfoRow({ label, value, mono = false }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--seep-text-med)' }}>{label}</span>
      <span className="text-sm font-medium" style={{ color: 'var(--seep-text-dark)', fontFamily: mono ? 'var(--font-mono)' : 'inherit' }}>
        {value}
      </span>
    </div>
  );
}
